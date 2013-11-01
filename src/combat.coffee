# -----------------------------------------------------------------------------
#
# Manages combat, including the AI for the enemy combatants.
#
# -----------------------------------------------------------------------------
#
# Copyright (C) 2013 by John Watkinson
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# -----------------------------------------------------------------------------

class Combatant

  @EFFECT_COLORS =
    {
      "Berserk" : {type : "glow", color : Util.rgb(108, 255, 108)},
      "Strong" : {type : "glow", color : Util.rgb(255, 108, 108)},
      "Protected" : {type : "glow", color : Util.rgb(108, 108, 255)},
      "Blessed" : {type : "glow", color : Util.rgb(255, 255, 255)},
      "Quick" : {type : "glow", color : Util.rgb(255, 192, 64)},
      "Eagle-eyed" : {type : "glow", color : Util.rgb(255, 108, 255)},
      "Resistant" : {type : "glow", color : Util.rgb(108, 255, 255)},
      "Paralyzed" : {type : "shade", color : Util.rgb(-64, -64, 96)},
      "Rooted" : {type : "shade", color : Util.rgb(32, 32, -96)},
      "Poisoned" : {type : "shade", color : Util.rgb(-64, 96, -64)},
      "Weakened" : {type : "shade", color : Util.rgb(72, 72, -64)},
      "Blinded" : {type : "shade", color : Util.rgb(-64, -64, -64)},
      "Sluggish" : {type : "shade", color : Util.rgb(-64, 72, 72)},
    }

  hitPoints : 0
  lastTarget : null
  customImage : null
  numMoves : 1
  numAttacks : 1
  movesLeft : 0
  attacksLeft : 0
  effects : null
  usedCombatSpells : null
  halfAttack : false
  didAttack : false
  invisible : false

  constructor : (@entity, @isPlayer, @good, @x = -1, @y = -1) ->
    @hitPoints = @entity.hitPoints
    @effects = {}
    @usedCombatSpells = {}

  startTurn : =>
    if (@isPlayer)
      # todo - testing
      @numMoves = 1 + @entity.getExtraMoves()
      @numAttacks = 1 + @entity.getExtraAttacks()
    else
      @numMoves = @entity.template.numMoves ? 1
      @numAttacks = @entity.template.numAttacks ? 1
    if (@hasEffect("Berserk"))
      @numAttacks++
    if (@hasEffect("Quick"))
      @numMoves += @getEffect("Quick").value
    @movesLeft = @numMoves
    @attacksLeft = @numAttacks
    @halfAttack = false
    @didAttack = false
    @drainAmount = 0
    @usingItem = null

  notDone : =>
    return @movesLeft > 0 or @attacksLeft > 0

  useCombatSpell : (item) =>
    @usedCombatSpells[item.id] = true

  isCombatSpellUsed : (item) =>
    @usedCombatSpells[item.id] ? false

  doDamage : (damage) =>
    if (@hasEffect("Blessed"))
      damage = Math.round(damage / @getEffect("Blessed").value)
      if (damage < 1)
        damage = 1
    @hitPoints = Math.max(0, @hitPoints - damage)
    if (@isPlayer)
      @entity.hitPoints = @hitPoints
    if (@hitPoints == 0) then true else false

  doHeal : (amount, healType, imageProcessor, callback) =>
    if (healType == "remove")
      @clearAllAfflictions(imageProcessor, callback)
    else if (healType == "restore")
      @entity.spellPoints = Math.min(@entity.maxSpellPoints, @entity.spellPoints + amount)
    else
      @hitPoints = Math.min(@getMaxHitPoints(), @hitPoints + amount)
      if (@isPlayer)
        @entity.hitPoints = @hitPoints

  getName : =>
    @entity.getName()

  getBanner : =>
    name = @getName()
    for k, v of @effects
      if (v)
        name = "[#{k}]"
    name

  getIcon : =>
    if (@isPlayer)
      @entity.character.icon
    else
      @entity.template.icon

  getMaxHitPoints : =>
    @entity.maxHitPoints

  getResistance : =>
    r = @entity.getResistance()
    if (@hasEffect("Resistant"))
      r += @getEffect("Resistant").value
    r

  getPotency : =>
    @entity.getPotency()

  isFullyHealed : =>
    return @hitPoints == @getMaxHitPoints()

  canAttackRange : =>
    @entity.canAttackRange()

  canAttackArea : =>
    @entity.canAttackArea()

  getToHitBonus : =>
    toHit = @entity.getToHitBonus()
    if (@hasEffect("Eagle-eyed"))
      toHit += @getEffect("Eagle-eyed").value
    if (@hasEffect("Blinded"))
      toHit -= @getEffect("Blinded").value
    toHit

  getArmorClass : =>
    ac = @entity.getArmorClass()
    if (@hasEffect("Protected"))
      ac += @getEffect("Protected").value
    if (@hasEffect("Sluggish"))
      ac -= @getEffect("Sluggish").value
    ac

  getMeleeDamageBounds : =>
    bounds = @entity.getMeleeDamageBounds()
    @computeDamageBounds(bounds)

  getRangeDamageBounds : =>
    bounds = @entity.getRangeDamageBounds()
    @computeDamageBounds(bounds)

  getHitSpell : =>
    @entity.getHitSpell()

  isParalyzed : =>
    @hasEffect("Paralyzed")

  isRooted : =>
    @hasEffect("Rooted")

  isPoisoned : =>
    @hasEffect("Poisoned")

  computeDamageBounds : (bounds) =>
    if (@hasEffect("Strong"))
      value = @getEffect("Strong").value
      bounds.min = Math.round(bounds.min * value)
      bounds.max = Math.round(bounds.max * value)
    if (@hasEffect("Weakened"))
      value = @getEffect("Weakened").value
      bounds.min = Math.round(bounds.min / value)
      bounds.max = Math.round(bounds.max / value)
      if (bounds.min < 1)
        bounds.min = 1
      if (bounds.max < 1)
        bounds.max = 1
    bounds

  getRangeAnimation : =>
    if (@isPlayer)
      @entity.getWeapon().template.rangeAnimation
    else
      @entity.template.rangeAnimation

  canSummon : =>
    if (@isPlayer)
      false
    else
      if (@entity.template.summons)
        true
      else
        false

  addEffect : (effect, value, duration, caster) =>
    already = @hasEffect(effect)
    @effects[effect] = {"value" : value, "duration" : duration}
    if (caster == this and !already)
      if (effect == "Berserk")
        @attacksLeft += value;
      else if (effect == "Quick")
        @movesLeft += value;

  removeEffect : (effect) =>
    # todo - delete instead of nullify?
    @effects[effect] = null

  hasEffect : (effect) =>
    !!@effects[effect]

  getEffect : (effect) =>
    @effects[effect]

  clearAllAfflictions : (imageProcessor, callback) =>
    for effect, value of @effects
      if (Combatant.EFFECT_COLORS[effect].type == "shade")
        @removeEffect(effect)
    @drawIcon(imageProcessor, callback)

  incrementEffects : (imageProcessor, callback) =>
    removeList = []
    for effect, info of @effects
      if (effect == "Berserk")
        if (!@didAttack)
          removeList.push(effect)
      else if (info)
        info.duration--
        if (info.duration <= 0)
          removeList.push(effect)
    if (removeList.length > 0)
      for effect in removeList
        @removeEffect(effect)
      @drawIcon(imageProcessor, callback)

  drawIcon : (imageProcessor, callback) =>
    if (!doCustomDraws())
      @customImage = null
      callback()
      return
    shadeColors = []
    haloColors = []
    for effect, value of @effects
      if (value)
        info = Combatant.EFFECT_COLORS[effect]
        if (info.type == "shade")
          shadeColors.push(info.color)
        else
          haloColors.push(info.color)
    if (shadeColors.length == 0 and haloColors.length == 0)
      @customImage = null
      callback()
    else
      @customImage = imageProcessor.process(@getIcon(), shadeColors, haloColors)
      @customImage.onload = callback

# -----------------------------------------------------------------------------

class CombatantView extends FlowView

  constructor : (gurk, @combatant) ->
    super(gurk, @combatant.getIcon(), @combatant.getName(), null)
    #           @gurk.pushView(new AlertView(@gurk, combatant.getIcon(), combatant.getName(), combatant.entity.template.description, null))
    @addParagraph("Hit Points: #{@combatant.hitPoints}/#{@combatant.getMaxHitPoints()}", "#FFF")
    if (@combatant.isPlayer)
      if (@combatant.entity.maxSpellPoints > 0)
        @addParagraph("Spell Points: #{@combatant.entity.spellPoints}/#{@combatant.entity.maxSpellPoints}", "#FFF")
    @addGap()
    effectsList = []
    for effect, value of @combatant.effects
      if (value)
        effectsList.push(effect)
    if (effectsList.length > 0)
      text = Util.arrayToString(effectsList)
      @addParagraph("Effects: " + text, "#FFF")
      @setButton(1, "EFFECTS")
    if (!@combatant.isPlayer)
      @addParagraph(@combatant.entity.template.description, "#A0A0A0")

  command: (text) =>
    switch text
      when "EFFECTS"
        flow = new FlowView(@gurk, @combatant.getIcon(), "Combat Effects", null)
        for effect, value of @combatant.effects
          if (value)
            flow.addParagraph(effect, "#FFF")
            flow.addParagraph(Data.effects[effect], "#A0A0A0")
            flow.addGap()
        @gurk.pushView(flow)
      else
        super(text)


# -----------------------------------------------------------------------------

class CombatView extends TileView

  @FORMATION : [
    {"x" : 3, "y" : 5},
    {"x" : 2, "y" : 6},
    {"x" : 4, "y" : 6}
  ]

  @SELECT_OFF : 0
  @SELECT_VIEW : 1
  @SELECT_ACTIVE : 2
  @SELECT_TARGET : 3
  @SELECT_TARGETED : 4

  @SPELL_NONE : 0
  @SPELL_HEAL : 1
  @SPELL_DAMAGE : 2
  @SPELL_SUMMON : 3
  @SPELL_TELEPORT : 4

  @SPELL_TARGET_MELEE : 0
  @SPELL_TARGET_RANGE : 1

  @LEFT_EDGE : 0
  @RIGHT_EDGE : 6
  @TOP_EDGE : 0
  @BOTTOM_EDGE : 6

  @BASE_SPEED = 175
  @BASE_PAUSE = 625
  @FAST_SPEED = 120
  @FAST_PAUSE = 450

  combatants : null
  combatMap : null

  selectMode : CombatView.SELECT_OFF
  selectX : 0
  selectY : 0
  targetX : 0
  targetY : 0

  current : 0

  castingSpell : null
  teleportTarget : null
  usingItem : null
  spellType : 0
  spellTarget : 0
  areaSpell : false
  areaAttack : false
  drainAmount : 0
  selectingItemForUse : false

  queue : null
  stack : null

  combatSpeed : CombatView.BASE_SPEED
  pauseTime : CombatView.BASE_PAUSE

  isFiring : false
  isParalyzed : false

  strategy : null

  constructor : (gurk, mapName, @imageProcessor, creatures, ambushed) ->
    super(gurk, mapName)
    if (@gurk.getFastSetting())
      @combatSpeed = CombatView.FAST_SPEED
      @pauseTime = CombatView.FAST_PAUSE
    @strategy = new BasicStrategy(this)
    @offsetX = -Screen.HALF_UNIT
    @combatants = []
    @combatMap = {}
    @queue = []
    @stack = []
    if (ambushed)
      @addCreatures(creatures)
      @addPlayers()
    else
      @addPlayers()
      @addCreatures(creatures)
    @setButton(5, "OK")
    @current = 0
    #@combatants[0].addEffect("Paralyzed", 1, 2)
    #@combatants[0].addEffect("Berserk", 1, 4)
    #@processIcon(@combatants[0])
    #@combatants[1].addEffect("Poisoned", 1, 3)
    #@processIcon(@combatants[1])
    @startTurn()
    @nextAction()

  processIcon : (combatant) =>
    combatant.drawIcon(@imageProcessor, @draw)

  command : (text) =>
    switch text
      when View.LEFT then @move(-1, 0)
      when View.UP then @move(0, -1)
      when View.RIGHT then @move(1, 0)
      when View.DOWN then @move(0, 1)
      when "OK"
        @gurk.popView(null)
      when "ATT/FIRE", "ATTACK", "FIRE"
        @isFiring = (text == "FIRE")
        @startPlayerAttack()
      when "TARGET", "HEAL", "RESTORE", "CURE", "SUMMON", "TELEPORT"
        if (@spellType == CombatView.SPELL_NONE)
          @doPlayerAttack()
        else
          @doSpellCast()
      when "CAST", "CAST/USE"
        @startPlayerCast()
      when "USE"
        @startPlayerUse()
      when "WIELD"
        @startPlayerWield()
      when "PASS"
        @passTurn()
      when "CANCEL"
        @startPlayerTurn()
      when "VIEW"
        @clearActions()
        @setButton(5, "INFO")
        @setButton(7, "DONE")
        @enableMovement()
        @select(@selectX, @selectY, CombatView.SELECT_VIEW)
      when "DONE"
        @startPlayerTurn()
      when "INFO"
        if (@selectMode == CombatView.SELECT_TARGET)
          combatant = @getCombatant(@targetX, @targetY)
        else
          combatant = @getCombatant(@selectX, @selectY)
        if (combatant)
          @gurk.pushView(new CombatantView(@gurk, combatant))
          # @gurk.pushView(new AlertView(@gurk, combatant.getIcon(), combatant.getName(), combatant.entity.template.description, null))

  log : (text) =>
    # console.log(text)

  nextAction : =>
    next = true
    while ((@queue.length > 0 or @stack.length > 0) and next)
      if (@queue.length == 0 and @stack.length > 0)
        @queue = @stack.pop()
      while (@queue.length > 0 and next)
        {action, animation, info} = @queue.shift()
        @log("Action: " + info)
        if (action)
          @stack.push(@queue)
          @queue = []
          action()
          next = !animation
    if (@queue.length == 0 and @stack.length > 0)
      @queue = @stack.pop()
    @queue.length > 0

  addAction : (action, info) =>
    @queue.push({"action": action, animation : false, "info" : info})

  addAnimation : (action, info) =>
    @queue.push({"action": action, animation : true, "info" : info})

  addPause : (info) =>
    @queue.push({"action": @doPause, animation : true, "info" : info})

  addSound : (sound, info) =>
    action = =>
      @gurk.playSound(sound)
    @queue.push({"action": action, animation : false, "info" : info})

  doPause : =>
    setTimeout(@nextAction, @pauseTime)

  getCustomAnimation : (sx, sy, tx, ty, animation) =>
    if (Icons[animation].frames)
      null
    else
      dx = tx - sx;
      dy = ty - sy;
      if (Math.abs(dx) > Math.abs(dy))
        if (dx > 0)
          angle = ImageProcessor.RIGHT
        else
          angle = ImageProcessor.LEFT
      else
        if (dy > 0)
          angle = ImageProcessor.DOWN
        else
          angle = ImageProcessor.UP
      @gurk.imageProcessor.rotate(animation, angle)

  queueFly : (sx, sy, tx, ty, animation, info) =>
    custom = if doCustomDraws() then @getCustomAnimation(sx, sy, tx, ty, animation) else null
    action = =>
      @fly(animation, sx + 1, tx + 1, sy, ty, @combatSpeed / 2, @nextAction, custom)
    @addAnimation(action, info)

  queueAnimation : (x, y, animation, info) =>
    action = =>
      @animate(animation, x + 1, y, @combatSpeed, @nextAction)
    @addAnimation(action, info)

  queueBlockAnimation : (x, y, radius, animation, info) =>
    action = =>
      @animateBlock(animation, x + 1, y, radius, @combatSpeed, @nextAction)
    @addAnimation(action, info)

  drawCombatant : (combatant) =>
    if (combatant.customImage)
      @drawCustom(combatant.customImage, combatant.x + 1, combatant.y)
    else
      @drawTile(combatant.getIcon(), combatant.x + 1, combatant.y)

  doDraw : =>
    # Draw map
    for y in [0 ... @height]
      for x in [0 ... @width]
        tile = @getTerrainIcon(x, y)
        @drawTile(tile, x, y)
    # Draw selection
    @drawSelection()
    # Draw combatants
    for combatant in @combatants
      if (!combatant.invisible)
        @drawCombatant(combatant)
    @drawBanner()
    @drawTopBanner()

  isSelected : (x,y) =>
    switch (@selectMode)
      when CombatView.SELECT_ACTIVE, CombatView.SELECT_VIEW
        return (x == @selectX and y == @selectY)
      when CombatView.SELECT_TARGET
        return (x == @selectX and y == @selectY or x == @targetX and y == @targetY)
    return false

  drawSelection : =>
    if (@selectMode != CombatView.SELECT_OFF and @selectMode != CombatView.SELECT_TARGETED)
      switch (@selectMode)
        when CombatView.SELECT_ACTIVE
          selectIcon = Data.icons.selectActive
        when CombatView.SELECT_TARGET
          targetIcon = Data.icons.selectTarget
          if (@areaSpell or @areaAttack)
            minY = Math.max(CombatView.TOP_EDGE, @targetY - 1)
            maxY = Math.min(CombatView.BOTTOM_EDGE, @targetY + 1)
            minX = Math.max(CombatView.LEFT_EDGE, @targetX - 1) + 1
            maxX = Math.min(CombatView.RIGHT_EDGE, @targetX + 1) + 1
            # Top and bottom edges
            for x in [minX .. maxX]
              @drawTile(targetIcon.top, x, minY - 1)
              @drawTile(targetIcon.bottom, x, maxY + 1)
            # Left and right edges, plus center
            for y in [minY .. maxY]
              @drawTile(targetIcon.left, minX - 1, y)
              @drawTile(targetIcon.right, maxX + 1, y)
              # Center
              for x in [minX .. maxX]
                @drawTile(targetIcon.center, x, y)
            # Make center darker
            @drawTile(targetIcon.center, @targetX + 1, @targetY)
          else
            @drawTile(targetIcon.center, @targetX + 1, @targetY)
            @drawTile(targetIcon.left, @targetX, @targetY)
            @drawTile(targetIcon.top, @targetX + 1, @targetY - 1)
            @drawTile(targetIcon.right, @targetX + 2, @targetY)
            @drawTile(targetIcon.bottom, @targetX + 1, @targetY + 1)
          selectIcon = Data.icons.selectActive
        when CombatView.SELECT_VIEW
          selectIcon = Data.icons.selectView
      if (@selectMode != CombatView.SELECT_TARGET or @targetX != @selectX or @targetY != @selectY)
        @drawTile(selectIcon.center, @selectX + 1, @selectY)
        @drawTile(selectIcon.left, @selectX, @selectY)
        @drawTile(selectIcon.top, @selectX + 1, @selectY - 1)
        @drawTile(selectIcon.right, @selectX + 2, @selectY)
        @drawTile(selectIcon.bottom, @selectX + 1, @selectY + 1)

  clearActions : =>
    @clearAllButtons()

  checkForLoss : =>
    for combatant in @combatants
      if (combatant.isPlayer)
        return false
    true

  checkForWin : =>
    for combatant in @combatants
      if (!combatant.good)
        return false
    true

  startTurn : =>
    # Check for end-of-combat scenarios
    if (@checkForLoss())
      @gurk.popView("defeat")
    else if (@checkForWin())
      @gurk.popView("victory")
    else
      combatant = @combatants[@current]
      combatant.startTurn()
      @select(combatant.x, combatant.y, CombatView.SELECT_ACTIVE)
      if (combatant.isParalyzed())
        @clearActions()
        @isParalyzed = true
        @addPause("Paralyzed Pause 1")
        @addPause("Paralyzed Pause 2")
        @addAction(@passTurn, "Paralyzed Pass Turn")
        # @nextAction()
      else if (combatant.good)
        @startPlayerTurn()
      else
        @clearActions()
        @addPause("AI Start Pause")
        numMoves = if combatant.isRooted() then 0 else combatant.numMoves
        f = => @strategy.doTurn(combatant, numMoves, combatant.numAttacks)
        @addAction(f, "AI Do Turn")

  # Player is presented with turn options
  startPlayerTurn : =>
    @castingSpell = null
    @spellType = null
    @areaSpell = false
    @areaAttack = false
    if (@checkForLoss())
      @gurk.popView("defeat")
      return
    else if (@checkForWin())
      @gurk.popView("victory")
      return
    player = @combatants[@current]
    @select(player.x, player.y, CombatView.SELECT_ACTIVE)
    @spellType = CombatView.SPELL_NONE
    @clearActions()
    if (player.isRooted())
      player.movesLeft = 0
    if (player.movesLeft > 0)
      @enableMovement()
    # todo - also figure out what moves are allowed and clear/add those as appropriate
    @setButton(5, "VIEW")
    @setButton(7, "PASS")
    if (player.isPlayer)
      if (player.entity.getEquipableItemsByType(Item.TYPE_WEAPON).length > 1 or player.entity.getEquipableItemsByType(Item.TYPE_WEAPON).length == 1 and player.entity.getWeapon() == null)
        @setButton(3, "WIELD")
    if (@canAttackMelee(player) or player.canAttackRange())
      if (player.canAttackRange())
        if (@canAttackMelee(player) and player.entity.canAttackMelee())
          @setButton(1, "ATT/FIRE")
        else
          @setButton(1, "FIRE")
      else
        if (@canAttackMelee(player))
          @setButton(1, "ATTACK")
    canCast = @canCast(player)
    canUse = @canUse(player, @canAttackMelee(player), @canSummon(player))
    if (canCast and canUse)
      @setButton(9, "CAST/USE")
    else if (canCast)
      @setButton(9, "CAST")
    else if (canUse)
      @setButton(9, "USE")
    @draw()

  move : (dx, dy) =>
    if (@selectMode == CombatView.SELECT_TARGET)
      combatant = @combatants[@current]
      casting = @spellType != CombatView.SPELL_NONE
      x = @targetX + dx
      y = @targetY + dy
      if (@isInMeleeRangeXY(combatant, x, y) or (!casting and (combatant.canAttackRange())) or (casting and (@spellTarget == CombatView.SPELL_TARGET_RANGE or @spellType == CombatView.SPELL_TELEPORT)))
        if (x >= CombatView.LEFT_EDGE and x <= CombatView.RIGHT_EDGE and y >= CombatView.TOP_EDGE and y <= CombatView.BOTTOM_EDGE)
          @targetX = x
          @targetY = y
          target = @getCombatant(x, y)
          @clearButton(5)
          @clearButton(1)
          if (target)
            @setButton(1, "INFO")
            if (!casting)
              if (@areEnemies(combatant, target))
                @setButton(5, "TARGET")
            else if (@castingSpell.target == "area")
              @setButton(5, "TARGET")
            else
              switch (@spellType)
                when CombatView.SPELL_HEAL
                  if (!@areEnemies(combatant, target) or @castingSpell.type == "teleport")
                    if (@castingSpell.type == "heal")
                      if (@castingSpell.healType == "restore")
                        @setButton(5, "RESTORE")
                      else if (@castingSpell.healType == "remove")
                        @setButton(5, "CURE")
                      else
                        @setButton(5, "HEAL")
                    else
                      @setButton(5, "TARGET")
                when CombatView.SPELL_DAMAGE
                  if (@areEnemies(combatant, target))
                    @setButton(5, "TARGET")
          else
            if (casting)
              if (@spellType == CombatView.SPELL_SUMMON)
                @setButton(5, "SUMMON")
              else if (@spellType == CombatView.SPELL_TELEPORT)
                @setButton(5, "TELEPORT")
              else if (@castingSpell.target == "area")
                @setButton(5, "TARGET")
            else if (@areaAttack)
              @setButton(5, "TARGET")
          @updateBanner()
        else
          false
      else
        false
    else if (@selectMode == CombatView.SELECT_VIEW)
      x = @selectX + dx
      y = @selectY + dy
      if (x >= CombatView.LEFT_EDGE and x <= CombatView.RIGHT_EDGE and y >= CombatView.TOP_EDGE and y <= CombatView.BOTTOM_EDGE)
        @selectX = x
        @selectY = y
        if (@getCombatant(x, y))
          @setButton(5, "INFO")
        else
          @clearButton(5)
        @updateBanner()
      else
        false
    else
      combatant = @combatants[@current]
      if (combatant.movesLeft > 0)
        x = combatant.x + dx
        y = combatant.y + dy
        if (x >= CombatView.LEFT_EDGE and x <= CombatView.RIGHT_EDGE and y >= CombatView.TOP_EDGE and y <= CombatView.BOTTOM_EDGE)
          key = Game.getKey(x, y)
          if (!@combatMap[key])
            @addSound("move", "Move Sound")
            @moveCombatant(combatant.x, combatant.y, x, y)
            combatant.movesLeft--
            if (combatant.movesLeft == 0)
              combatant.attacksLeft = 0
            @draw()
            @endTurn()
      false

  updateBanner : =>
    if (@selectMode == CombatView.SELECT_TARGET or @selectMode == CombatView.SELECT_TARGETED)
      x = @targetX
      y = @targetY
    else if (@selectMode == CombatView.SELECT_VIEW)
      x = @selectX
      y = @selectY
    else
      combatant = @combatants[@current]
      x = combatant.x
      y = combatant.y
    combatant = @getCombatant(x, y)
    if (combatant and @selectMode != CombatView.SELECT_OFF)
      banner = "#{combatant.getBanner()} (HP: #{combatant.hitPoints}"
      if (combatant.good and combatant.entity.maxSpellPoints > 0)
        banner += ", SP: #{combatant.entity.spellPoints})"
      else
        banner += ")"
      @setBanner(banner)
      if (@selectMode == CombatView.SELECT_ACTIVE and combatant.good)
        # Do move/attack banner, if they have more than the normal number of attacks
        if (!combatant.isParalyzed() and (combatant.numMoves > 1 or combatant.numAttacks > 1))
          @setTopBanner(combatant.movesLeft, combatant.attacksLeft, combatant.halfAttack)
        else
          @clearTopBanner()
        @topBannerLeft = @selectX > 3
      else
        @clearTopBanner()
    else
      @clearBanner()
      @clearTopBanner()
    @draw()

  passTurn : =>
    combatant = @combatants[@current]
    combatant.movesLeft = 0
    combatant.attacksLeft = 0
    @endTurn()

  # Turn Ends
  endTurn : =>
    combatant = @combatants[@current]
    wasPlayer = combatant.good
    if (wasPlayer and combatant.notDone())
      action = =>
        @startPlayerTurn()
    else
      if (combatant.isPoisoned())
        damage = combatant.getEffect("Poisoned").value
        if (combatant.hitPoints - damage < 1)
          damage = combatant.hitPoints - 1
        if (damage > 0)
          f = =>
            @targetX = combatant.x
            @targetY = combatant.y
            @selectMode = CombatView.SELECT_TARGETED;
            @updateBanner()
            @doDamage(combatant, damage, Data.icons.animPoison)
          @addAction(f, "Do Poison Damage")
          @addPause("Pause After Poison Damage")
      fx = =>
        combatant.incrementEffects(@imageProcessor, @draw)
      @addAction(fx, "Increment FX")
      action = =>
        @current++
        if (@current >= @combatants.length)
          @current = 0
        @startTurn()
    @addAction(action, "End Turn")
    # Play through the queue
    if (wasPlayer and !@isParalyzed)
      @nextAction()
    else
      @isParalyzed = false

  # Player chooses attack target
  startPlayerAttack : =>
    player = @combatants[@current]
    target = @getSuggestedEnemyTarget(player)
    @areaAttack = player.canAttackArea()
    if (target)
      @select(target.x, target.y, CombatView.SELECT_TARGET)
      @clearActions()
      @enableMovement()
      @setButton(1, "INFO")
      @setButton(5, "TARGET")
      @setButton(7, "CANCEL")
    @draw()

  getSuggestedEnemyTarget : (player, forceRange = false) =>
    target = null
    if (player.lastTarget and @isStillAlive(player.lastTarget) and @canAttack(player, player.lastTarget))
      target = player.lastTarget
    if (!target)
      target = @getNearestAttackTarget(player, forceRange)
    target

  startPlayerCast : =>
    @areaSpell = false
    @drainAmount = 0
    player = @combatants[@current]
    melee = @canAttackMelee(player)
    summon = @canSummon(player)
    @selectingItemForUse = true
    @gurk.pushView(new SpellView(@gurk, player.entity, true, melee, summon, player))

  startPlayerUse : =>
    @areaSpell = false
    player = @combatants[@current]
    melee = @canAttackMelee(player)
    summon = @canSummon(player)
    @selectingItemForUse = true
    @gurk.pushView(new ItemView(@gurk, player.entity, ItemView.ACTION_USE, true, melee, summon, player))

  startPlayerWield : =>
    player = @combatants[@current].entity
    @selectingItemForUse = false
    @gurk.pushView(new ItemView(@gurk, player, ItemView.ACTION_EQUIP, 0, true))

  doPlayerCast : =>
    player = @combatants[@current]
    @clearActions()
    @enableMovement()
    switch @castingSpell.type
      when "teleport"
        @spellType = CombatView.SPELL_TELEPORT
        @select(player.x, player.y, CombatView.SELECT_TARGET)
        if (@castingSpell.target == "self")
          @doSpellCast()
          return
        else
          @setButton(5, "TARGET")
      when "heal", "enhance"
        @spellType = CombatView.SPELL_HEAL
        @select(player.x, player.y, CombatView.SELECT_TARGET)
        if (@castingSpell.target == "self")
          @doSpellCast()
          return
        else if (@castingSpell.type == "heal")
          @setButton(5, "HEAL")
        else
          @setButton(5, "TARGET")
      when "damage", "afflict", "drain"
        @spellType = CombatView.SPELL_DAMAGE
        target = @getSuggestedEnemyTarget(player, true)
        @select(target.x, target.y, CombatView.SELECT_TARGET)
        @setButton(5, "TARGET")
      when "summon"
        @spellType = CombatView.SPELL_SUMMON
        square = @getSuggestedSummonSquare(player)
        if (square != null) # Shouldn't happen, spell shouldn't appear unless can summon
          @select(square.x, square.y, CombatView.SELECT_TARGET)
          @setButton(5, "SUMMON")
    if (@castingSpell.target == "touch")
      @spellTarget = CombatView.SPELL_TARGET_MELEE
    else
      @spellTarget = CombatView.SPELL_TARGET_RANGE
    if (@castingSpell.target == "area")
      @areaSpell = true
    @setButton(7, "CANCEL")

  computeSpellTiming : (combatant, spell) =>
    if (spell.fast)
      if (combatant.halfAttack)
        combatant.attacksLeft--
        combatant.movesLeft = 0
        combatant.halfAttack = false
      else
        combatant.halfAttack = true
    else
      combatant.attacksLeft--
      combatant.movesLeft = 0

  doSpellCast : =>
    @clearActions()
    player = @combatants[@current]
    if (@castingSpell.type == "teleport")
      if (@teleportTarget)
        @selectMode = CombatView.SELECT_TARGETED
        @addSound("spell", "Cast Sound")
        @addAction(@doSpellResult, "Spell Result Action")
        @computeSpellTiming(player, @castingSpell)
        @endTurn()
      else
        if (@castingSpell.target == "self")
          @teleportTarget = @combatants[@current]
        else
          @teleportTarget = @getCombatant(@targetX, @targetY)
        @spellType = CombatView.SPELL_TELEPORT
        @spellTarget = CombatView.SPELL_TARGET_RANGE
        square = @getSuggestedSummonSquare(@teleportTarget)
        if (square == null)
          square = @getRandomSquare()
        if (square != null)
          @select(square.x, square.y, CombatView.SELECT_TARGET)
          @enableMovement()
          @setButton(5, "TELEPORT")
          @setButton(7, "CANCEL")
    else
      @selectMode = CombatView.SELECT_TARGETED
      @addSound("spell", "Cast Sound")
      @queueAnimation(player.x, player.y, Data.icons.animSpellCast, "Spell Cast Animation")
      if (@castingSpell.target == "range" or @castingSpell.target == "area")
        @queueFly(player.x, player.y, @targetX, @targetY, @castingSpell.animation, "Spell Range Animation")
      @addAction(@doSpellResult, "Spell Result Action")
      @computeSpellTiming(player, @castingSpell)
      @endTurn()

  doSpellResult : =>
    caster = @combatants[@current]
    isPlayer = caster.isPlayer
    spell = @castingSpell
    fromItem = @usingItem != null
    target = @getCombatant(@targetX, @targetY)
    if (fromItem and isPlayer)
      if (@usingItem.getCombatSpell() == spell)
        caster.useCombatSpell(@usingItem)
      else if (@usingItem.isUseable())
        @usingItem.charges--
        if (@usingItem.charges == 0)
          caster.entity.dropItem(@usingItem)
    else if (caster.good)
      caster.entity.spellPoints -= spell.spellPoints
    switch spell.type
      when "heal"
        if (fromItem)
          bounds = @usingItem.getSpellRange()
        else
          bounds = caster.entity.getSpellRange(spell)
        if (spell.target == "area")
          @doAreaHealing(bounds, spell.healType)
        else
          @addSound("heal", "Heal Sound")
          @queueAnimation(@targetX, @targetY, Data.icons.animHeal, "Heal Animation")
          amount = Util.random(bounds.min, bounds.max)
          target.doHeal(amount, spell.healType, @imageProcessor, @draw)
          @updateBanner()
      when "drain"
        if (fromItem)
          bounds = @usingItem.getSpellRange()
        else
          bounds = caster.entity.getSpellRange(spell)
        if (@drainAmount > 0)
          amount = Math.round(spell.value * @drainAmount / 100)
          if (amount < 1)
            amount = 1
        else
          damage = @resistDamage(caster, target, bounds)
          if (damage == 0)
            @doResist(target)
            amount = 0
          else
            @doDamage(target, damage, Data.icons.animHitSpell)
            amount = Math.round(spell.value * damage / 100)
            if (amount < 1)
              amount = 1
        if (amount > 0 and !caster.isFullyHealed())
          f = =>
            @addSound("heal", "Drain Sound")
            @queueAnimation(caster.x, caster.y, Data.icons.animHeal, "Drain Animation")
            caster.doHeal(amount, "heal", @imageProcessor, @draw)
            @setTarget(caster)
            @updateBanner()
          @addAction(f, "Drain Heal")
      when "damage"
        if (fromItem)
          bounds = @usingItem.getSpellRange()
        else
          bounds = caster.entity.getSpellRange(spell)
        if (spell.target == "area")
          @doAreaDamage(bounds)
        else
          amount = @resistDamage(caster, target, bounds)
          if (amount == 0)
            @doResist(target)
          else
            @doDamage(target, amount, Data.icons.animHitSpell)
      when "summon"
        @addSound("summon", "Summon Sound")
        @queueAnimation(@targetX, @targetY, Data.icons.animHeal, "Summon Animation")
        if (fromItem)
          bonus = @usingItem.bonus
        else
          if (isPlayer)
            bonus = Math.ceil(caster.entity.getAttributeBonus(caster.entity.getAwareness()) / 2)
          else
            bonus = caster.entity.bonus ? 0
        @summonCreature(spell.creature, bonus, caster.good, @targetX, @targetY)
      when "teleport"
        if (!@areEnemies(caster, @teleportTarget) or !@doSavingThrow(caster, @teleportTarget))
          @teleportTarget.invisible = true
          @addSound("tele", "Start Teleport Sound")
          @queueAnimation(@teleportTarget.x, @teleportTarget.y, Data.icons.animHeal, "Teleport Start Animation")
          f = =>
            @moveCombatant(@teleportTarget.x, @teleportTarget.y, @targetX, @targetY)
            @teleportTarget.invisible = false
            @teleportTarget = null
            @addSound("port", "End Teleport Sound")
            @queueAnimation(@targetX, @targetY, Data.icons.animHeal, "Teleport Animation")
          @addAction(f, "Complete Teleportation")
        else
          @showResist(@teleportTarget)
          @teleportTarget = null
      when "enhance", "afflict"
        if (fromItem)
          bonus = @usingItem.bonus
        else
          if (isPlayer)
            bonus = caster.entity.getAttributeBonus(caster.entity.getAwareness())
          else
            bonus = caster.entity.bonus
        if (spell.target == "area")
          # Decided to go no bonus for effects
          @doAreaEffect(spell, 0)
        else
          if (!@areEnemies(caster, target) or !@doSavingThrow(caster, target))
            if (@areEnemies(caster, target))
              @addSound("afflicted", "Afflict Sound")
            else
              @addSound("enhanced", "Enhance Sound")
            @queueAnimation(@targetX, @targetY, Data.icons.animHeal, "Effect Animation")
            value = spell.value
            target.addEffect(spell.effect, value, Util.random(spell.minAmount, spell.maxAmount), caster)
            f = => @processIcon(target)
            @addAction(f, "Show Effect")
          else
            @showResist(target)
    @castingSpell = null
    @usingItem = null

  # Player's attack is executed
  doPlayerAttack : =>
    player = @combatants[@current]
    if (@areaAttack)
      @addSound("fire", "Area Fire Sound")
      @queueFly(player.x, player.y, @targetX, @targetY, player.getRangeAnimation(), "Area projectile fly")
      @addAction(@doAreaAttack, "Run Area Attack")
      @clearActions()
      @selectMode = CombatView.SELECT_TARGETED
      player.didAttack = true
      player.attacksLeft--
      player.movesLeft = 0
      @endTurn()
    else
      target = @getCombatant(@targetX, @targetY)
      if (target and @areEnemies(player, target) and @canAttack(player, target))
        player.lastTarget = target
        @clearActions()
        @selectMode = CombatView.SELECT_TARGETED
        if (!@isInMeleeRange(player, target) or @isFiring)
          @addSound("fire", "Fire Sound")
          @queueFly(player.x, player.y, target.x, target.y, player.getRangeAnimation(), "Range projectile fly")
          @addAction(@runAttack, "Run Range Attack")
        else
          @addAction(@runAttack, "Run Melee Attack")
        player.didAttack = true
        player.attacksLeft--
        player.movesLeft = 0
        @endTurn()

  runAttack : =>
    attacker = @combatants[@current]
    target = @getCombatant(@targetX, @targetY)
    @processAttack(attacker, target)

  processAttack : (attacker, target, rangeOverride = false) =>
    melee = @isInMeleeRange(attacker, target) and !rangeOverride
    ac = target.getArmorClass()
    if (!melee)
      ac += @getRangeACBonus(attacker, target)
    dice = Util.random(1, 20)
    hitRoll = dice + attacker.getToHitBonus()
    if (dice == 20 or (dice != 1 and hitRoll > target.getArmorClass()))
      if (melee)
        bounds = attacker.getMeleeDamageBounds()
      else
        bounds = attacker.getRangeDamageBounds()
      damage = Util.random(bounds.min, bounds.max)
      @drainAmount = Math.min(damage, target.hitPoints)
      dead = @doDamage(target, damage)
      if (attacker.getHitSpell())
        @castingSpell = attacker.getHitSpell()
        if (attacker.isPlayer)
          @usingItem = attacker.entity.getWeapon()
        if (!dead or @castingSpell.type == "drain")
          fail = false
          if (@castingSpell.type == "teleport")
            @teleportTarget = target
            if (!attacker.good)
              square = @getRandomSquare()
              if (!square)
                fail = true
              else
                @targetX = square.x
                @targetY = square.y
          if (!fail)
            @addAction(@doSpellResult, "Do Hit Spell")
    else
      @addSound("miss", "Miss Sound")
      @queueAnimation(target.x, target.y, Data.icons.animMiss, "Miss Animation")

  doAreaEffect : (spell, bonus) =>
    @queueBlockAnimation(@targetX, @targetY, 1, @castingSpell.animation, "Area Spell Animation")
    caster = @combatants[@current]
    value = Math.max(spell.value + bonus, 1)
    f = =>
      for y in [@targetY - 1 .. @targetY + 1]
        if (y >= 0 and y < @height)
          for x in [@targetX - 1 .. @targetX + 1]
            if (x >= 0 and x < @width)
              target = @getCombatant(x, y)
              if (target and (spell.type == "enhance" or target != caster))
                j = =>
                  showTarget = target
                  if (!@areEnemies(caster, showTarget) or !@doSavingThrow(caster, showTarget))
                    g = =>
                      if (@areEnemies(caster, showTarget))
                        @addSound("afflicted", "Area Afflict Sound")
                      else
                        @addSound("enhanced", "Area Enhance Sound")
                      @queueAnimation(showTarget.x, showTarget.y, Data.icons.animHeal, "Area Effect Animation")
                      showTarget.addEffect(spell.effect, value, Util.random(spell.minAmount, spell.maxAmount), caster)
                      h = =>
                        @processIcon(showTarget)
                        @draw()
                      @addAction(h, "Do Area Effect Processing")
                    @addAction(g, "Show Area Target Effect")
                  else
                    g = =>
                      @showResist(showTarget)
                    @addAction(g, "Show Area Target Resist")
                j();
    @addAction(f, "Show Effect")

  doAreaHealing : (bounds, healType) =>
    @queueBlockAnimation(@targetX, @targetY, 1, @castingSpell.animation, "Area Spell Animation")
    caster = @combatants[@current]
    for y in [@targetY - 1 .. @targetY + 1]
      if (y >= 0 and y < @height)
        for x in [@targetX - 1 .. @targetX + 1]
          if (x >= 0 and x < @width)
            target = @getCombatant(x, y)
            if (target)
              amount = Util.random(bounds.min, bounds.max)
              g = =>
                showTarget = target
                heal = amount
                f = => @showAreaHealing(showTarget, heal, healType)
                @addAction(f, "Do Area Heal")
              g()

  doAreaAttack : =>
    combatant = @combatants[@current]
    @queueBlockAnimation(@targetX, @targetY, 1, combatant.getRangeAnimation(), "Area Attack Animation")
    for y in [@targetY - 1 .. @targetY + 1]
      if (y >= 0 and y < @height)
        for x in [@targetX - 1 .. @targetX + 1]
          if (x >= 0 and x < @width)
            target = @getCombatant(x, y)
            if (target and target != combatant)
              g = =>
                theTarget = target
                f = =>
                  @targetX = theTarget.x
                  @targetY = theTarget.y
                  @updateBanner()
                  @processAttack(combatant, theTarget, true)
                @addAction(f)
              g()

  doAreaDamage : (bounds) =>
    @queueBlockAnimation(@targetX, @targetY, 1, @castingSpell.animation, "Area Spell Animation")
    caster = @combatants[@current]
    for y in [@targetY - 1 .. @targetY + 1]
      if (y >= 0 and y < @height)
        for x in [@targetX - 1 .. @targetX + 1]
          if (x >= 0 and x < @width)
            target = @getCombatant(x, y)
            if (target and target != caster)
              amount = @resistDamage(caster, target, bounds)
              g = =>
                showTarget = target
                damage = amount
                if (damage == 0)
                  f = => @showResist(showTarget)
                else
                  f = => @showAreaDamage(showTarget, damage)
                @addAction(f, "Do Area Damage")
              g();

  showAreaHealing : (target, heal, healType) =>
    target.doHeal(heal, healType, @imageProcessor, @draw)
    @targetX = target.x
    @targetY = target.y
    @updateBanner()
    @addSound("heal", "Heal Sound")
    @queueAnimation(target.x, target.y, Data.icons.animHeal, "Heal Animation")

  showResist : (target) =>
    @targetX = target.x
    @targetY = target.y
    @updateBanner()
    @addSound("resist", "Resist Sound")
    @queueAnimation(target.x, target.y, Data.icons.animResist, "Resist Animation")

  showAreaDamage : (target, damage) =>
    dead = target.doDamage(damage)
    @targetX = target.x
    @targetY = target.y
    @updateBanner()
    if (dead)
      if (target.good)
        @addSound("dead", "Died Sound")
      else
        @addSound("killed", "Killed Sound")
      @removeCombatant(target)
    else
      @addSound("hit", "Hit Sound")
    @queueAnimation(target.x, target.y, Data.icons.animHitSpell, "Hit Animation")

  doResist : (target) =>
    @showResist(target)

  doDamage : (target, damage, anim = null) =>
    dead = target.doDamage(damage)
    @updateBanner()
    if (dead)
      if (target.good)
        @addSound("died", "Died Sound")
      else
        @addSound("killed", "Killed Sound")
      @removeCombatant(target)
    else
      @addSound("hit", "Hit Sound")
    if (anim == null)
      anim = Data.icons.animHit
    @queueAnimation(target.x, target.y, anim, "Hit Animation")
    dead

  addCreatures : (creatures) =>
    for creature in creatures
      combatant = new Combatant(creature, false, false)
      @addCombatant(combatant)

  addPlayers : =>
    index = 0
    for player in @gurk.game.players
      if (player.isAlive())
        combatant = new Combatant(player, true, true, CombatView.FORMATION[index].x, CombatView.FORMATION[index].y)
        @addCombatant(combatant)
      index++

  addCombatant : (combatant) =>
    x = combatant.x
    y = combatant.y
    key = Game.getKey(x, y)
    while (x == -1 or @combatMap[key])
      x = Util.random(0, 6)
      y = Util.random(0, 3)
      key = Game.getKey(x, y)
    combatant.x = x
    combatant.y = y
    @combatMap[key] = combatant
    @combatants.push(combatant)

  summonCreature : (name, bonus, good, x, y) =>
    template = Library.getCreatureByName(name)
    creature = new Creature(template, bonus)
    combatant = new Combatant(creature, false, good, x, y)
    @combatants.splice(@current, 0, combatant)
    @current++
    key = Game.getKey(x, y)
    @combatMap[key] = combatant

  clearSelection : =>
    @selectMode = CombatView.SELECT_OFF
    @updateBanner()
    @draw()

  select : (x, y, mode) =>
    if (mode == CombatView.SELECT_TARGET)
      @targetX = x
      @targetY = y
    else
      @selectX = x
      @selectY = y
    @selectMode = mode
    @updateBanner()

  getCombatant : (x, y) =>
    key = Game.getKey(x, y)
    @combatMap[key]

  moveCombatant : (sx, sy, tx, ty) =>
    key = Game.getKey(sx, sy)
    combatant = @combatMap[key]
    delete @combatMap[key]
    combatant.x = tx
    combatant.y = ty
    key = Game.getKey(tx, ty)
    @combatMap[key] = combatant

  getSurroundingSquares : (x, y, forEnemy = false) =>
    squares = []
    if (forEnemy)
      yList = [y + 1, y, y - 1]
    else
      yList = [y - 1, y, y + 1]
    for yy in yList
      if (yy >= CombatView.TOP_EDGE and yy <= CombatView.BOTTOM_EDGE)
        for xx in [(x - 1) .. (x + 1)]
          if (xx >= CombatView.LEFT_EDGE and xx <= CombatView.RIGHT_EDGE)
            if (xx != x or yy != y)
              squares.push({"x" : xx, "y" : yy})
    squares

  areEnemies : (combatantA, combatantB) =>
    combatantA.good != combatantB.good

  doSavingThrow : (caster, defender) =>
    mod = (defender.getResistance() - caster.getPotency()) * 5 + 5
    if (mod < 0)
      mod = 0
    if (mod > 100)
      mod = 100
    result = Util.random(0, 99)
    if (result < 3)
      true
    else if (result > 96)
      false
    else
      result < mod

  resistDamage : (caster, defender, bounds) =>
    mod = 100 - (defender.getResistance() - caster.getPotency() - 3) * 5
    if (mod < 0)
      mod = 0
    if (mod > 100)
      mod = 100
    bounds.min = Math.round(bounds.min * mod / 100)
    bounds.max = Math.round(bounds.max * mod / 100)
    if (bounds.min < 0)
      bounds.min = 0
    if (bounds.max < 0)
      bounds.max = 0
    Util.random(bounds.min, bounds.max)

  canAttackMelee : (combatant) =>
    squares = @getSurroundingSquares(combatant.x, combatant.y)
    for square in squares
      other = @getCombatant(square.x, square.y)
      if (other and @areEnemies(combatant, other))
        return true
    false

  canTouchAlly : (combatant) =>
    squares = @getSurroundingSquares(combatant.x, combatant.y)
    for square in squares
      other = @getCombatant(square.x, square.y)
      if (other and !@areEnemies(combatant, other))
        return true
    false

  canTargetWithSpell : (caster, target, isFriendly, isHeal, effect = null) =>
    if (isHeal and target.hitPoints == target.getMaxHitPoints())
      return false
    if (isFriendly == @areEnemies(caster, target))
      return false
    if (effect and target.hasEffect(effect))
      return false
    true

  getSpellTargets : (caster, isRange, isFriendly, isHeal, includeSelf) =>
    targets = []
    if (isRange)
      for target in @combatants
        if (@canTargetWithSpell(caster, target, isFriendly, isHeal))
          targets.push(target)
    else
      squares = @getSurroundingSquares(caster.x, caster.y)
      for square in squares
        target = @getCombatant(square.x, square.y)
        if (target and @canTargetWithSpell(caster, target, isFriendly, isHeal))
          targets.push(target)
    if (includeSelf)
      if (@canTargetWithSpell(caster, caster, isFriendly, isHeal))
        targets.push(caster)
    targets

  hasAllies : (combatant) =>
    for other in @combatants
      if (other != combatant and @areEnemies(combatant, other))
        return true
    return false

  getRandomSquare : =>
    # if (x >= CombatView.LEFT_EDGE and x <= CombatView.RIGHT_EDGE and y >= CombatView.TOP_EDGE and y <= CombatView.BOTTOM_EDGE)
    clear = false
    tries = 0;
    while (!clear and tries < 10)
      x = Util.random(CombatView.LEFT_EDGE, CombatView.RIGHT_EDGE)
      y = Util.random(CombatView.TOP_EDGE, CombatView.BOTTOM_EDGE)
      clear = !@getCombatant(x, y)
      tries++;
    if (clear)
      return {"x" : x, "y" : y}
    else
      return null

  getSuggestedSummonSquare : (combatant) =>
    squares = @getSurroundingSquares(combatant.x, combatant.y, !combatant.good)
    for square in squares
      if (@isClear(square.x, square.y))
        return square
    null

  canSummon : (combatant) =>
    squares = @getSurroundingSquares(combatant.x, combatant.y)
    for square in squares
      if (@isClear(square.x, square.y))
        return true
    false

  isInMeleeRange : (combatant, target) =>
    dx = Math.abs(combatant.x - target.x)
    dy = Math.abs(combatant.y - target.y)
    return (dx <= 1 and dy <= 1)

  isInMeleeRangeXY : (combatant, x, y) =>
    dx = Math.abs(combatant.x - x)
    dy = Math.abs(combatant.y - y)
    return (dx <= 1 and dy <= 1)

  canAttack : (combatant, target) =>
    if (combatant.canAttackRange())
      true
    else
      @isInMeleeRange(combatant, target)

  getRangeACBonus : (attacker, target) =>
    d = Math.abs(target.x - attacker.x) + Math.abs(target.y - attacker.y)
    Math.floor(d/3)

  getNearestTarget : (combatant, forceRange = false) =>
    nearest = null
    distance = 100
    count = 0
    for target in @combatants
      if (target != combatant and @areEnemies(combatant, target) and (@canAttack(combatant, target) or forceRange))
        d = Math.abs(target.x - combatant.x) + Math.abs(target.y - combatant.y)
        if (d == distance)
          count++
          if (Util.random(1, count) == 1)
            nearest = target
        if (d < distance)
          distance = d
          nearest = target
          count = 1
    nearest

  getNearestAttackTarget : (combatant, forceRange = false) =>
    nearest = null
    distance = 100
    count = 0
    for target in @combatants
      if (target != combatant and @areEnemies(combatant, target) and (@canAttack(combatant, target) or forceRange))
        dx = Math.abs(target.x - combatant.x)
        dy = Math.abs(target.y - combatant.y)
        if (dx <= 1 and dy <= 1)
          d = 1
        else
          d = dx + dy
        if (d == distance)
          count++
          if (Util.random(1, count) == 1)
            nearest = target
        if (d < distance)
          distance = d
          nearest = target
          count = 1
    nearest

  getNearestEnemy : (combatant) =>
    nearest = null
    distance = 100
    count = 0
    for target in @combatants
      if (target != combatant and @areEnemies(combatant, target))
        d = Math.abs(target.x - combatant.x) + Math.abs(target.y - combatant.y)
        if (d == distance)
          count++
          if (Util.random(1, count) == 1)
            nearest = target
        if (d < distance)
          distance = d
          nearest = target
          count = 1
    nearest

  getRandomEnemy : (combatant) =>
    enemies = []
    for target in @combatants
      if (target != combatant and @areEnemies(combatant, target))
        enemies.push(target)
    Util.randomElement(enemies)

  getBestAreaTarget : (caster, isAttack) =>
    bestScore = 0
    best = null
    for yy in [CombatView.TOP_EDGE .. CombatView.BOTTOM_EDGE]
      for xx in [CombatView.LEFT_EDGE .. CombatView.RIGHT_EDGE]
        score = 0
        for y in [(yy - 1) .. (yy + 1)]
          for x in [(xx - 1) .. (xx + 1)]
            if (y >= CombatView.TOP_EDGE and y <= CombatView.BOTTOM_EDGE and x >= CombatView.LEFT_EDGE and x <= CombatView.RIGHT_EDGE)
              combatant = @getCombatant(x, y)
              if (combatant and (!isAttack or combatant != caster))
                if (@areEnemies(caster, combatant) == isAttack)
                  score += 3
                else
                  score -= 2
                if (caster == combatant && isAttack)
                  # Not allowed to target self!
                  score = -10000
        if (score > bestScore)
          bestScore = score
          best = {"x" : xx, "y" : yy}
    best

  removeCombatant : (combatant) =>
    key = Game.getKey(combatant.x, combatant.y)
    delete @combatMap[key]
    index = Util.indexOfElement(@combatants, combatant)
    Util.removeElement(@combatants, combatant)
    if (index < @current)
      @current--

  isStillAlive : (combatant) =>
    Util.hasElement(@combatants, combatant)

  setTarget : (combatant) =>
    @selectMode = CombatView.SELECT_TARGETED
    @targetX = combatant.x
    @targetY = combatant.y

  isClear : (x, y) =>
    if (y >= CombatView.TOP_EDGE and y <= CombatView.BOTTOM_EDGE)
      if (x >= CombatView.LEFT_EDGE and x <= CombatView.RIGHT_EDGE)
        if (!@getCombatant(x, y))
          return true
    false

  canCast : (combatant) =>
    spells = combatant.entity.getSpells()
    for spell in spells
      if (spell.spellPoints <= combatant.entity.spellPoints)
        return true
    false

  canUse : (combatant, melee, summon) =>
    if (combatant.isPlayer)
      return combatant.entity.hasUsableItem(true, melee, summon, combatant)

  processResult: (result) =>
    if (result == "debug1")
      # Automatically win combat
      @gurk.popView("victory")
    else if (result == "debug2")
      @queueBlockAnimation(4, 4, 1, Data.icons.animHit, "Test Block Animation")
      @nextAction()
    else if (result.spellPoints)
      # It's a spell
      @usingItem = null
      @castingSpell = result
      @doPlayerCast()
    else if ((result == ItemView.NONE or result.template) and !@selectingItemForUse)
      # It's a wield result
      item = result
      player = @combatants[@current]
      if (item == ItemView.NONE)
        player.entity.unequipItemByType(Item.TYPE_WEAPON)
      else
        player.entity.equipItem(item)
      player.attacksLeft--
      player.movesLeft = 0
      @endTurn()
    else
      # It's a used item
      @usingItem = result
      @castingSpell = @usingItem.getSpell()
      if (!@castingSpell)
        @castingSpell = @usingItem.getCombatSpell()
      @doPlayerCast()

# -----------------------------------------------------------------------------

class BasicStrategy

  constructor : (@combat) ->

  getCastableSpells : (me) =>
    spells = me.entity.template.spells
    casts = []
    if (spells)
      for spellInfo in spells
        spell = Library.getSpellByName(spellInfo.name)
        if (spell.type == "summon")
          if (@combat.canSummon(me))
            result = {
              "spell" : spell,
              "weight" : spellInfo.weight
              "targets" : null
            }
            casts.push(result)
        else
          isHeal = spell.type == "heal"
          isFriendly = spell.type == "heal" or spell.type == "enhance" or spell.type == "teleport"
          isRange = spell.target == "area" or spell.target == "range"
          includeSelf = spell.type == "heal" or spell.type == "teleport"
          if (spell.target == "self")
            if (@combat.canTargetWithSpell(me, me, isFriendly, isHeal, spell.effect))
              targets = [me]
            else
              targets = []
          else if (spell.target == "area")
            target = @combat.getBestAreaTarget(me, !isFriendly)
            if (target)
              targets = [target]
          else
            targets = @combat.getSpellTargets(me, isRange, isFriendly, isHeal)
          if (targets.length > 0)
            result = {
              "spell" : spell,
              "weight" : spellInfo.weight,
              "targets" : targets
            }
            casts.push(result)
    casts

  doTurn : (me, numMoves, numAttacks) =>
    @combat.clearSelection()
    @combat.usingItem = null
    ## Get all castable spells (if any)
    casts = @getCastableSpells(me)
    canAttackMelee = @combat.canAttackMelee(me)
    canAttackRange = me.canAttackRange()
    canAttackArea = me.canAttackArea()
    if (canAttackMelee)
      moveWeight = 0
      attackWeight = me.entity.template.attackWeight ? 75
    else
      moveWeight = me.entity.template.moveWeight ? 25
      if (canAttackRange)
        attackWeight = me.entity.template.attackWeight ? 75
      else
        attackWeight = 0
    if (numAttacks == 0)
      attackWeight = 0
    if (numMoves == 0)
      moveWeight = 0
    totalWeight = attackWeight + moveWeight
    for cast in casts
      totalWeight += cast.weight
    k = Util.random(0, totalWeight - 1)
    didAction = false
    if (k < attackWeight)
      if (canAttackArea)
        target = @combat.getBestAreaTarget(me, true)
        if (target)
          numMoves = 0
          numAttacks--
          me.didAttack = true
          @combat.setTarget(target)
          @combat.queueFly(me.x, me.y, target.x, target.y, me.getRangeAnimation(), "AI Area Projectile Fly")
          @combat.addAction(@combat.doAreaAttack, "Run AI Area Attack")
          didAction = true
      else
        nearest = @combat.getNearestAttackTarget(me)
        if (me.lastTarget and @combat.isStillAlive(me.lastTarget) and @combat.canAttack(me, me.lastTarget))
          target = me.lastTarget
        else
          if (canAttackRange)
            target = @combat.getRandomEnemy(me)
          else
            target = @combat.getNearestAttackTarget(me)
        if (@combat.isInMeleeRange(me, nearest) and !@combat.isInMeleeRange(me, target))
          target = nearest
        me.lastTarget = target
        # Can't move after attacking
        numMoves = 0
        numAttacks--
        me.didAttack = true
        @combat.setTarget(target)
        if (canAttackMelee)
          @combat.addAction(@combat.runAttack, "Run AI Melee Attack")
        else if (canAttackRange)
          @combat.queueFly(me.x, me.y, target.x, target.y, me.getRangeAnimation(), "AI Projectile Fly")
          @combat.addAction(@combat.runAttack, "Run AI Range Attack")
        didAction = true
    else
      k -= attackWeight
    if (!didAction and k < moveWeight)
      target = @combat.getNearestEnemy(me)
      numMoves--
      if (numMoves == 0)
        numAttacks = 0
      f = => @moveTowards(me, target)
      @combat.addAction(f, "Do Move")
      didAction = true
    else
      k -= moveWeight
    if (!didAction)
      for cast in casts
        if (!didAction and k < cast.weight)
          couldCast = true
          spell = cast.spell
          @combat.castingSpell = spell
          if (spell.type == "summon")
            target = @combat.getSuggestedSummonSquare(me)
            if (target != null)
              @combat.targetX = target.x
              @combat.targetY = target.y
          else
            target = Util.randomElement(cast.targets)
            if (spell.type == "teleport")
              enemy = @combat.getRandomEnemy(me)
              destination = @combat.getSuggestedSummonSquare(enemy)
              if (destination == null)
                destination = @combat.getRandomSquare()
                if (destination == null)
                  couldCast = false
              if (destination != null)
                @combat.teleportTarget = target
                @combat.targetX = destination.x
                @combat.targetY = destination.y
            else
              @combat.targetX = target.x
              @combat.targetY = target.y
          if (couldCast)
            @combat.addSound("spell", "AI Cast Sound")
            @combat.queueAnimation(me.x, me.y, Data.icons.animSpellCast, "Enemy Cast Animation")
            if (spell.target == "range" or spell.target == "area")
              @combat.queueFly(me.x, me.y, target.x, target.y, spell.animation, "Enemy Spell Range Animation")
            if (spell.fast)
              if (me.halfAttack)
                numMoves = 0
                numAttacks--
                me.halfAttack = false
              else
                me.halfAttack = true
            else
              numMoves = 0
              numAttacks--
            @combat.selectMode = CombatView.SELECT_TARGETED
            f = => @combat.doSpellResult()
            @combat.addAction(f, "Do Enemy Spell Result")
            didAction = true
        else
          k -= cast.weight
    if (!didAction)
      numMoves = 0
      numAttacks = 0
    if (numMoves == 0 and numAttacks == 0)
      @combat.endTurn()
    else
      g = => @reselect(me)
      @combat.addAction(g, "AI Reselect")
      @combat.addPause("AI Action Pause")
      f = => @doTurn(me, numMoves, numAttacks)
      @combat.addAction(f, "AI Turn Continuation")
    return
    # END

  reselect : (me) =>
    @combat.select(me.x, me.y, CombatView.SELECT_ACTIVE)

  moveTowards : (me, target) =>
    dx = target.x - me.x
    dy = target.y - me.y
    sx = if dx > 0 then 1 else if dx < 0 then -1 else 0
    sy = if dy > 0 then 1 else if dy < 0 then -1 else 0
    moved = false
    if (Math.abs(dy) >= Math.abs(dx))
      if (@combat.isClear(me.x, me.y + sy))
        @combat.moveCombatant(me.x, me.y, me.x, me.y + sy)
        moved = true
      else if (@combat.isClear(me.x + sx, me.y))
        @combat.moveCombatant(me.x, me.y, me.x + sx, me.y)
        moved = true
    else
      if (@combat.isClear(me.x + sx, me.y))
        @combat.moveCombatant(me.x, me.y, me.x + sx, me.y)
        moved = true
      else if (@combat.isClear(me.x, me.y + sy))
        @combat.moveCombatant(me.x, me.y, me.x, me.y + sy)
        moved = true
    if (moved)
      @combat.addSound("move", "AI Move Sound")
    @combat.draw()
