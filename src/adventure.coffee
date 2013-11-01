# -----------------------------------------------------------------------------
#
# Contains all the UI for game except for combat.
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

# This class is deprecated-- just hanging around for some demo code
class Map extends TileView

  constructor: (gurk, @mapName) ->
    super(gurk, @mapName)
    @setButton(1, "NEW")
    @setButton(3, "HIT")
    @setButton(7, "WOW")
    @setButton(9, "SHOOT")
    @setBanner("Sir Rugnar (HP: 8)")

  command: (text) =>
    switch text
      when View.LEFT then @move(-1, 0)
      when View.UP then @move(0, -1)
      when View.RIGHT then @move(1, 0)
      when View.DOWN then @move(0, 1)
      when "NEW" then @gurk.showConfirm(Data.icons.party, "New Game", "Erase your old saved game and make a new one? You won't be able to recover your old game!", {}, {})
      # when "LOAD" then @gurk.showAlert("party.png", "Test Alert", "Thanks for doing this, it has been a great test of functionality. All the best.", {})
      when "HIT"
        @animate(Data.icons.animation, 4, 4, 200, @animDone)
      when "WOW"
        view = new SelectView(@gurk, "SELECT")
        view.addIcon(Data.icons.party, 3, 3)
        view.addLabel("Blammo!", "#FFF", 22, 12)
        y = 3 + 19
        view.addIcon("grass.png", 3, y)
        view.addOption("Grass", "#880", 22, y + 9)
        y += 19
        view.addIcon("tree.png", 3, y)
        view.addOption("Forest", "#080", 22, y + 9)
        y += 19
        view.addIcon("water.png", 3, y)
        view.addOption("Water", "#44F", 22, y + 9)
        @gurk.pushView(view)
      when "SHOOT"
        # no-op
        abc = 0
  animDone: =>

  doDraw: =>
    for y in [0..Screen.WIN_SIZE]
      yy = y + @posY - Screen.CENTER_OFFSET
      if (yy >= 0 and yy < @height)
        for x in [0..Screen.WIN_SIZE]
          xx = x + @posX - Screen.CENTER_OFFSET
          if (xx >= 0 and xx < @width)
            tile = @getTerrainIcon(xx, yy)
            @drawTile(tile, x, y)
    @drawTile(Data.icons.party, Screen.CENTER_OFFSET, Screen.CENTER_OFFSET)
    @drawBanner()
    # Test drawing
    # @screen.clearColor(Screen.GURK_BLUE)
    # @screen.drawText("(\"Oopla!\" 'Quoi?')", "#FF0000", 20, 20)
    # @screen.wrapText("Here is a long paragraph that is going to have to be wrapped, y'all! It's super long and now two line breaks approach.\n\nMore stuff here, because why not? And we'll get it to break too, haha. 123456789012345678901234567890123456789012345678901234567890", "#FFFFFF", 0, 0, 128)

  move: (x, y) =>
    @posX += x
    @posY += y
    if (@posX < 0) then @posX = 0 else if (@posX >= @width) then @posX = @width - 1
    if (@posY < 0) then @posY = 0 else if (@posY >= @height) then @posY = @height - 1
    @draw();

# -----------------------------------------------------------------------------

class ChooseCharacterView extends SelectView

  characters : null
  fiddles : 0

  constructor : (gurk, @type, @game) ->
    super(gurk, "CHOOSE", "DONE")

  doLayout : =>
    @characters = []
    for character in Data.characters
      if (character.type == @type)
        if (!character.after || Device.getSetting(character.after, false))
          @characters.push(character)
    @clearButton(7)
    @clearButton(9)
    @setButton(1, "INFO")
    @clear()
    y = 3;
    def = "a"
    if (@type == "archer")
      def = "an"
    @addLabelCentered("Choose #{def} #{Util.capitalize(@type)}", "#FFF", 0, y, 128, Screen.FONT.fontHeight)
    y += 8
    @addLabelCentered("(Press INFO to learn more)", "#A0A0A0", 0, y, 128, Screen.FONT.fontHeight)
    # bestAttribute = Util.capitalize(@characters[0].bestAttribute)
    y += 12
    for character in @characters
      @addIcon(character.icon, 2, y)
      @addOption(character.name, "#FFF", 20, y)
      y += 8
      @addLabel("Level 1 #{character.job}", "#A0A0A0", 20, y)
      # @doAttributes(y, character)
      y += 20

  itemSelected: (index, item) =>
    @gurk.pushView(new CharacterRollView(@gurk, @game, @characters[@selected]))

  itemHighlighted: (index, item) =>
    if (index == 0)
      @fiddles++
      if (@fiddles > 10)
        Device.setSetting("won", true)
        @doLayout()
        @fiddles = 0

  command : (text) =>
    if (text == "INFO")
      @gurk.pushView(new CharacterInfoView(@gurk, @characters[@selected]))
    else
      super(text)

  processResult : (result) =>
    if (result == "NEXT")
      @gurk.popView(result)

# -----------------------------------------------------------------------------

class CharacterInfoView extends InfoView

  @ATTRIBUTES = ["strength", "accuracy", "awareness", "constitution"]

  blurbY : 0

  constructor : (gurk, @character) ->
    super(gurk, "BACK")
    @addIcon(@character.icon, 3, 3)
    y = 4
    @addLabel("#{@character.name}", "#FFF", 20, y)
    y += 8
    @addLabel("Level 1 #{@character.job}", "#A0A0A0", 20, y)
    y += 12
    @blurbY =  @doAttributes(y) + 4

  doAttributes : (y) =>
    for attribute in CharacterInfoView.ATTRIBUTES
      if (@character[attribute])
        value = @character[attribute]
        if (value > 0)
          value = "+" + value
        name = Util.capitalize(attribute)
        if (name == "Constitution")
          name = "Toughness"
        @addLabel("#{name}: #{value}", "#FFF", 3, y)
        y += 8
    y

  doDraw : =>
    super()
    @screen.wrapText(@character.description, "#A0A0A0", 3, @blurbY, 122)

# -----------------------------------------------------------------------------

class CharacterRollView extends InfoView

  player : null

  constructor : (gurk, @game, @character) ->
    super(gurk, "KEEP")
    @setButton(1, "REROLL")
    @setButton(7, "BACK")
    @roll()

  roll : =>
    @player = new Player(@character)
    @clear()
    @addIcon(@player.character.icon, 3, 3)
    y = 4
    @addLabel(@player.character.name, "#FFF", 20, y)
    y += 8
    @addLabel("Level #{@player.level} #{@player.character.job}", "#FFF", 20, y)
    y += 8
    levelUp = Data.levels[@player.level + 1]
    @addLabel("XP: #{@player.experience}/#{levelUp}", "#FFF", 20, y)
    y += 8
    if (@player.maxSpellPoints > 0)
      @addLabel("HP: #{@player.hitPoints}/#{@player.maxHitPoints}, SP: #{@player.spellPoints}/#{@player.maxSpellPoints}", "#FFF", 20, y)
    else
      @addLabel("Hit Points: #{@player.hitPoints}/#{@player.maxHitPoints}", "#FFF", 20, y)
    y += 8
    @addLabel("Armor Class: #{@player.getArmorClass()}", "#FFF", 20, y)
    y += 16
    @addLabel("Strength: #{@player.getStrength()}", "#FFF", 20, y)
    y += 8
    strengthBonus = @player.getAttributeBonus(@player.getStrength())
    if (strengthBonus != 0)
      @addLabel("Damage Bonus: #{strengthBonus}", "#A0A0A0", 28, y)
    y += 10
    @addLabel("Accuracy: #{@player.getAccuracy()}", "#FFF", 20, y)
    y += 8
    accuracyBonus = @player.getAttributeBonus(@player.getAccuracy())
    if (accuracyBonus != 0)
      @addLabel("To-Hit Bonus: #{accuracyBonus}", "#A0A0A0", 28, y)
    y += 10
    @addLabel("Awareness: #{@player.getAwareness()}", "#FFF", 20, y)
    y += 8
    awarenessBonus = @player.getAttributeBonus(@player.getAwareness())
    if (awarenessBonus != 0)
      @addLabel("Armor Class Bonus: #{awarenessBonus}", "#A0A0A0", 28, y)
    y += 10
    @addLabel("Toughness: #{@player.getConstitution()}", "#FFF", 20, y)
    y += 8
    constitutionBonus = @player.getAttributeBonus(@player.getConstitution())
    if (constitutionBonus != 0)
      @addLabel("HP Bonus/Level: #{constitutionBonus}", "#A0A0A0", 28, y)

  command : (text) =>
    switch (text)
      when "KEEP"
        @game.addPlayer(@player)
        @gurk.popView("NEXT")
      when "BACK"
        @gurk.popView("BACK")
      when "REROLL"
        @roll()
        @draw()

# -----------------------------------------------------------------------------

class CreateView extends InfoView

  index : 0
  charIndex : 0
  types : null
  characters : null
  player : null
  game : null

  constructor : (gurk) ->
    super(gurk, "KEEP")
    @types = ["warrior", "archer", "mage"]
    @index = 0
    @setButton(1, "REROLL")
    @game = new Game()
    @getCharacters()
    @roll()

  getCharacters : =>
    @characters = []
    type = @types[@index]
    for character in Data.characters
      if (character.type == type)
        @characters.push(character)
    @charIndex = 0

  roll : =>
    character = @characters[@charIndex]
    @player = new Player(character)
    @clear()
    @addIcon(@player.character.icon, 3, 3)
    y = 4
    @addLabel(@player.character.name, "#FFF", 20, y)
    y += 8
    @addLabel("Level #{@player.level} #{@player.character.job}", "#FFF", 20, y)
    y += 8
    levelUp = Data.levels[@player.level + 1]
    @addLabel("XP: #{@player.experience}/#{levelUp}", "#FFF", 20, y)
    y += 8
    # todo - add spell points if there are any, use HP, SP
    if (@player.maxSpellPoints > 0)
      @addLabel("HP: #{@player.hitPoints}/#{@player.maxHitPoints}, SP: #{@player.spellPoints}/#{@player.maxSpellPoints}", "#FFF", 20, y)
    else
      @addLabel("Hit Points: #{@player.hitPoints}/#{@player.maxHitPoints}", "#FFF", 20, y)
    y += 8
    @addLabel("Armor Class: #{@player.getArmorClass()}", "#FFF", 20, y)
    y += 16
    @addLabel("Strength: #{@player.getStrength()}", "#FFF", 20, y)
    y += 8
    strengthBonus = @player.getAttributeBonus(@player.getStrength())
    if (strengthBonus != 0)
      @addLabel("Damage Bonus: #{strengthBonus}", "#A0A0A0", 28, y)
    y += 10
    @addLabel("Accuracy: #{@player.getAccuracy()}", "#FFF", 20, y)
    y += 8
    accuracyBonus = @player.getAttributeBonus(@player.getAccuracy())
    if (accuracyBonus != 0)
      @addLabel("To-Hit Bonus: #{accuracyBonus}", "#A0A0A0", 28, y)
    y += 10
    @addLabel("Awareness: #{@player.getAwareness()}", "#FFF", 20, y)
    y += 8
    awarenessBonus = @player.getAttributeBonus(@player.getAwareness())
    if (awarenessBonus != 0)
      @addLabel("Armor Class Bonus: #{awarenessBonus}", "#A0A0A0", 28, y)
    y += 10
    @addLabel("Toughness: #{@player.getConstitution()}", "#FFF", 20, y)
    y += 8
    constitutionBonus = @player.getAttributeBonus(@player.getConstitution())
    if (constitutionBonus != 0)
      @addLabel("HP Bonus/Level: #{constitutionBonus}", "#A0A0A0", 28, y)

  command : (text) =>
    switch (text)
      when "KEEP"
        @game.addPlayer(@player)
        @index++
        if (@index == @types.length)
          @gurk.startNewGame(@game)
        else
          @getCharacters()
          @roll()
          @draw()
      when "REROLL"
        @charIndex++
        if (@charIndex == @characters.length)
          @charIndex = 0
        @roll()
        @draw()

# -----------------------------------------------------------------------------

class SplashView extends TileView

  @TYPES : ["warrior", "archer", "mage"]

  index : 0
  game : null

  constructor : (gurk) ->
    super(gurk, "splashScreen")
    @name = "Splash"
    @offsetX = -Screen.HALF_UNIT
    @offsetY = -Screen.HALF_UNIT
    @index = 0

  doLayout : =>
    @setButton(1, "NEW")
    if (Device.hasSavedGame())
      @setButton(3, "LOAD")
    else
      @clearButton(3)
    @setButton(7, "OPTIONS")
    # Uncomment to have a hook to validate game data
    @setButton(9, "CHECK")

  doDraw : =>
    console.log("Splash View drawing.")
    for y in [0 ... @height]
      for x in [0 ... @width]
        tile = @getTerrainIcon(x, y)
        @drawTile(tile, x, y)
    for feature in @map.features
      @drawTile(feature.icon, feature.x, feature.y)

  showIntro : =>
    @gurk.pushView(new AlertView(@gurk, Data.icons.party, "Welcome", "Welcome to realm of Gurk!\n\nRoll the stats for your Warrior, Archer and Mage, then lead them on to thrilling adventure!", "CREATE"))

  command : (text) =>
    switch (text)
      when "NEW"
        if (Device.hasSavedGame())
          @gurk.pushView(new ConfirmView(@gurk, Data.icons.party, "Warning!", "Creating a new game will delete your existing game. Are you sure you want to do this?", "NEW", "CANCEL"))
        else
          # @gurk.startTestGame()
          @showIntro()
      when "LOAD"
        @gurk.startSavedGame()
      when "TEST"
        @gurk.startTestGame()
      when "OPTIONS"
        @gurk.showSettings()
      when "CHECK"
        Validate.run()
      when "FLOW"
        flow = new FlowView(@gurk, Data.icons.death, "Flow View", null)
        flow.addParagraph("Berserk", "#FFF")
        flow.addParagraph("While berserk, combatant will get an extra attack (or spell cast) each turn.", "#A0A0A0")
        flow.addGap()
        flow.addParagraph("Blinded", "#FFF")
        flow.addParagraph("When blinded, combatant's chance to hit when attack will be reduced considerably.", "#A0A0A0")
        flow.addGap()
        flow.addParagraph("Rooted", "#FFF")
        flow.addParagraph("A rooted combatant cannot move, although it may still attack and cast spells.", "#A0A0A0")
        @gurk.pushView(flow)

  processResult : (result) =>
    switch (result)
      when "NEW"
        #@gurk.startTestGame()
        @showIntro()
      when "CREATE"
        #@gurk.setView(new CreateView(@gurk))
        @game = new Game()
        @gurk.pushView(new ChooseCharacterView(@gurk, SplashView.TYPES[@index], @game))
      when "NEXT"
        @index++
        if (@index == SplashView.TYPES.length)
          @gurk.startNewGame(@game)
        else
          @gurk.pushView(new ChooseCharacterView(@gurk, SplashView.TYPES[@index], @game))

# -----------------------------------------------------------------------------

class MapView extends TileView

  @MAP_ICONS = {
    "shop" : [
      ['#764F00', '#FFFF48', '#764F00'],
      ['#764F00', '#000000', '#764F00'],
      ['#764F00', '#000000', '#764F00']
    ],
    "ship" : [
      [null, '#FFFFFF', null],
      ['#FFFFFF', '#FFFFFF', null],
      ['#AF7300', '#AF7300', '#AF7300']
    ],
    "temple" : [
      ['#FFFFFF', '#FF0000', '#FFFFFF'],
      ['#FF0000', '#FF0000', '#FF0000'],
      ['#FFFFFF', '#FF0000', '#FFFFFF']
    ],
  }

  @TRANSITION_ICONS = {
    "outdoor" : [
      ['#3CF000', '#3CF000', '#3CF000'],
      ['#32C800', '#32C800', '#32C800'],
      [null, '#AF7300', null]
    ],
    "dungeon" : [
      [null, '#FFFFFF', null],
      ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
      ['#FFFFFF', '#000000', '#FFFFFF']
    ],
    "up" : [
      [null, null, '#FFFFFF'],
      [null, '#FFFFFF', '#FFFFFF'],
      ['#FFFFFF', '#FFFFFF', '#FFFFFF']
    ],
    "down" : [
      ['#FFFFFF', null, null],
      ['#FFFFFF', '#FFFFFF', null],
      ['#FFFFFF', '#FFFFFF', '#FFFFFF']
    ],
    "town" : [
      ['#FFFFFF', null, '#FFFFFF'],
      ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
      ['#FFFFFF', '#AF7300', '#FFFFFF']
    ]
  }

  @FEATURE_TYPES = [
    "block",
    "barrier",
    "encounter",
    "goal",
    "alert",
    "dispatch",
    "transition",
    "shop",
    "temple",
    "ship",
    "sign",
    "override"
  ]

  game : null
  shadows : null
  test : null
  mapMode : false
  encounter : null
  upgrades : null
  shadowOverlay : null

  constructor: (gurk) ->
    super(gurk, gurk.game.map)
    @name = "MapView"
    @offsetX = -Screen.HALF_UNIT
    @offsetY = -Screen.HALF_UNIT
    @game = gurk.game
    @posX = @game.x
    @posY = @game.y
    @mapMode = false
    @shadowOverlay = Preloader.getImage("shadow" + Screen.SCALE + ".png")
    @setButton(1, "HEROES")
    @setButton(9, "MAP")
    @setButton(3, "SAVE")
    @setButton(7, "QUESTS")
    @shadows = Util.create2DArray(Screen.WIN_SIZE, Screen.WIN_SIZE)
    for y in [-1 .. 1]
      for x in [-1 .. 1]
        @shadows[y + Screen.CENTER_OFFSET][x + Screen.CENTER_OFFSET] = false
    @centerBanner = true
    @move(0, 0)

  toggleMap : =>
    @mapMode = !@mapMode
    if (@mapMode)
      @setButton(9, "NO MAP")
    else
      @setButton(9, "MAP")
    @draw()

  command: (text) =>
    switch text
      when View.LEFT then @move(-1, 0)
      when View.UP then @move(0, -1)
      when View.RIGHT then @move(1, 0)
      when View.DOWN then @move(0, 1)
      when "MAP", "NO MAP"
        @toggleMap()
      when "HEROES"
        @gurk.pushView(new PartyView(@gurk))
      when "QUESTS"
        @gurk.pushView(new QuestView(@gurk))
      when "SAVE"
        save = JSON.stringify(@game.saveGame())
        # console.log(save)
        Device.saveGame(save)
        @gurk.pushView(new AlertView(@gurk, Data.icons.party, "Game Saved", "Your game has been saved!", null))
      else
        @processFeature(text)

  checkVisibility: (x, y) =>
    dx = x - Screen.CENTER_OFFSET
    dy = y - Screen.CENTER_OFFSET
    yy = dy + @posY
    xx = dx + @posX
    if (yy >= 0 and yy < @height and xx >= 0 and xx < @width)
      nx = if dx > 0 then -1 else 1
      ny = if dy > 0 then -1 else 1
      if (dx == 0)
        @shadows[y][x] = @shadows[ny+y][x] or @getTerrain(xx, ny+yy).opaque
      else if (dy == 0)
        @shadows[y][x] = @shadows[y][nx+x] or @getTerrain(nx+xx, yy).opaque
      else if (dx == dy or dx == -dy)
        @shadows[y][x] = @shadows[ny+y][nx+x] or @getTerrain(nx+xx, ny+yy).opaque
      else
        t1 = @shadows[ny+y][x] or @getTerrain(xx, ny+yy).opaque
        t2 = @shadows[y][nx+x] or @getTerrain(nx+xx, yy).opaque
        t3 = @shadows[ny+y][nx+x] or @getTerrain(nx+xx, ny+yy).opaque
        @shadows[y][x] = t1 and t2 and t3
    else
      @shadows[y][x] = true

  computeShadows: () =>
    # Immediate surroundings are always visible
    C = Screen.CENTER_OFFSET
    # Move in a spiral pattern, inductively computing visibility
    for k in [2 .. 4]
      for i in [0 .. k]
        x = i + C
        y = k + C
        @checkVisibility(x, y)
        x = i + C
        y = -k + C
        @checkVisibility(x, y)
        if (i < k)
          y = i + C
          x = k + C
          @checkVisibility(x, y)
          y = i + C
          x = -k + C
          @checkVisibility(x, y)
        if (i > 0)
          x = -i + C
          y = k + C
          @checkVisibility(x, y)
          x = -i + C
          y = -k + C
          @checkVisibility(x, y)
          if (i < k)
            y = -i + C
            x = k + C
            @checkVisibility(x, y)
            y = -i + C
            x = -k + C
            @checkVisibility(x, y)
    false

  trackVisited : =>
    for y in [0...Screen.WIN_SIZE]
      yy = y + @posY - Screen.CENTER_OFFSET
      if (yy >= 0 and yy < @height)
        for x in [0...Screen.WIN_SIZE]
          xx = x + @posX - Screen.CENTER_OFFSET
          if (xx >= 0 and xx < @width)
            if (!@map.dark or !@shadows[y][x])
              @game.markVisited(xx, yy)

  getTerrain : (x, y) =>
    Data.tiles[@game.getTile(x, y)]

  doDraw: =>
    for y in [0...Screen.WIN_SIZE]
      yy = y + @posY - Screen.CENTER_OFFSET
      if (yy >= 0 and yy < @height)
        for x in [0...Screen.WIN_SIZE]
          xx = x + @posX - Screen.CENTER_OFFSET
          if (xx >= 0 and xx < @width)
            if (!@map.dark or !@shadows[y][x])
              tile = @getTerrainIcon(xx, yy)
              @drawTile(tile, x, y)
              if (@game.getFeatures(xx, yy))
                feature = @getTopFeature(xx, yy)
                if (feature and feature.icon)
                  @drawTile(feature.icon, x, y)
    partyIcon = if @game.aboard then Data.icons.ship else Data.icons.party
    @drawTile(partyIcon, Screen.CENTER_OFFSET, Screen.CENTER_OFFSET)
    if (@map.dark)
      @screen.drawImage(@shadowOverlay, 0, 0)
    if (@mapMode)
      sx = 128 - @width - 5
      if (sx < 10)
        sx = (128 - @width) / 2
      sy = 5
      @screen.setAlpha(0.5)
      @screen.fillRect("#000", sx - 3, sy - 3, @width + 6, @height + 6)
      @screen.setAlpha(1)
      @screen.fillRect("#aaa", sx - 1, sy - 1, @width + 2, @height + 2)
      for y in [0 ... @height]
        for x in [0 ... @width]
          if (@game.wasVisited(x, y))
            color = @getTerrain(x, y).color
          else
            color = "#000"
          @screen.drawPixel(color, x + sx, y + sy)
      # Next: features
      for y in [0 ... @height]
        for x in [0 ... @width]
          if (@game.wasVisited(x, y))
            feature = @getTopFeature(x, y)
            if (feature)
              icon = null
              switch (feature.type)
                when "shop", "ship", "temple"
                  icon = MapView.MAP_ICONS[feature.type]
                when "transition"
                  icon = MapView.TRANSITION_ICONS[feature.transitionType]
              if (icon)
                for yy in [0 ... 3]
                  for xx in [0 ... 3]
                    color = icon[yy][xx]
                    if (color)
                      @screen.drawPixel(color, sx + x + xx - 1, sy + y + yy - 1)
      # Finally, the adventurers
      @screen.drawPixel("#F00", @posX + sx - 1, @posY + sy)
      @screen.drawPixel("#F00", @posX + sx + 1, @posY + sy)
      @screen.drawPixel("#F00", @posX + sx, @posY + sy + 1)
      @screen.drawPixel("#F00", @posX + sx, @posY + sy - 1)
    else
      @drawBanner()
      @drawTopBanner()

  getTopFeature : (x, y) =>
    for type in MapView.FEATURE_TYPES
      feature = @game.getFeature(x, y, type)
      if (feature)
        return feature

  move : (x, y) =>
    realMove = !(x == 0 and y == 0)
    tx = @posX + x
    ty = @posY + y
    if (tx < 0 or tx >= @width or ty < 0 or ty >= @height)
      false
    else
      block = @game.getFeature(tx, ty, "block")
      if (block)
        return false
      barrier = @game.getFeature(tx, ty, "barrier")
      if (barrier)
        if (!!barrier.title)
          title = barrier.title
        else
          title = "Cannot Pass"
        @gurk.pushView(new AlertView(@gurk, barrier.icon, title, barrier.text, null))
        return false
      if (@getTerrain(tx, ty).passable or @getTerrain(tx, ty).shipPassable and (@game.aboard or @game.getFeature(tx, ty, "ship")))
        @clearBanner()
        if (realMove and @game.aboard and @game.getFeature(tx, ty, "ship"))
          # Move onto the next ship
          @game.disembark()
          if (@map.music)
            @gurk.playMusic(@map.music)
        @posX = tx
        @posY = ty
        if (@game.aboard and !@getTerrain(tx, ty).shipPassable)
          @game.disembark()
          if (@map.music)
            @gurk.playMusic(@map.music)
        if (realMove)
          @gurk.game.moveTo(@posX, @posY)
          @game.moveNum++
          if (@game.moveNum % 20 == 0)
            @game.regenerateParty()
        if (@map.dark)
          @computeShadows()
        @trackVisited()
        haveFeature = false
        if (!@game.aboard and @game.getFeature(tx, ty, "ship"))
          ship = @game.getFeature(tx, ty, "ship")
          if (@game.isChartered(ship.id) or !ship.charter or ship.charter == 0)
            @clearButton(5)
            @game.boardShip(@game.getFeature(tx, ty, "ship").id)
            if (@map.boatMusic)
              @gurk.playMusic(@map.boatMusic)
            else
              @gurk.playMusic(Data.boatMusic)
          else
            @setButton(5, "CHARTER")
            haveFeature = true
        if (@game.getFeatures(@posX, @posY))
          feature = @getTopFeature(@posX, @posY)
          if (feature)
            if (feature.type != "ship") # already handled
              haveFeature = true
              switch feature.type
                when "encounter"
                  @encounter = @gurk.game.getEncounter(feature)
                  if (@encounter.creatures.length == 0)
                    @game.setMarkers(feature.id)
                    @game.setMarkers(feature.sets)
                    gold = @encounter.gold ? 0
                    text = feature.text
                    if (gold > 0)
                      @game.gold += gold
                      text = text + "\n\nYou find #{gold} gold pieces!"
                    if (@encounter.items.length == 0)
                      @gurk.pushView(new AlertView(@gurk, feature.icon, "Treasure", text, null, feature.altIcon))
                    else
                      @gurk.pushView(new AlertView(@gurk, feature.icon, "Treasure", text, "treasure", feature.altIcon))
                  else
                    @gurk.playCombatMusic()
                    @gurk.pushView(new AlertView(@gurk, feature.icon, "Encounter", feature.text, "combat"))
                  return null
                when "alert"
                  if (realMove)
                    @gurk.game.setMarkers(feature.sets)
                    @gurk.pushView(new AlertView(@gurk, feature.icon, feature.title, feature.text, "alert", feature.altIcon))
                    return null
                when "goal"
                  @gurk.game.setMarkers(feature.sets)
                  @gurk.pushView(new AlertView(@gurk, feature.icon, feature.title, feature.text, "goal", feature.altIcon))
                  return null
                when "ship"
                  # Already handled, no-op
                else
                  @addButtonForFeature(feature, realMove)
        if (!haveFeature)
          @clearButton(5)
          # Make sure it's a "real" move
          if (realMove)
            if (@game.checkForRandomEncounter())
              @encounter = @game.createEncounter()
              if (@encounter.creatures.length > 0)
                if (@encounter.ambushed)
                  text = "Your adventurers have been ambushed!"
                else
                  text = "Your adventurers have been attacked!"
                @gurk.playCombatMusic()
                @gurk.pushView(new AlertView(@gurk, Data.icons.combat, "Encounter", text, "combat"))
                return null
        @draw()

  setMap : (mapName, x, y) =>
    super(mapName, x, y)
    if (@map.music)
      @gurk.playMusic(@map.music)

  addButtonForFeature: (feature, realMove) =>
    @clearButton(5)
    switch feature.type
      when "sign"
        if (feature.text)
          command = feature.action ? "LOOK"
          @setButton(5, command)
      when "transition"
        if (realMove)
          name = Data.maps[feature.target].name
          @setBanner(name)
        @setButton(5, "GO")
      when "shop"
        @setBanner(feature.name)
        @setButton(5, "SHOP")
      when "temple"
        @setButton(5, "HEAL")
      when "dispatch"
        @setButton(5, feature.action)

  processFeature: (command) =>
    feature = @getTopFeature(@posX, @posY)
    switch feature.type
      when "sign"
        @gurk.game.setMarkers(feature.sets)
        @gurk.pushView(new AlertView(@gurk, feature.icon, feature.title ? "Sign", feature.text, "sign", feature.altIcon))
      when "transition"
        @gurk.pushView(new ConfirmView(@gurk, feature.icon, "Go", feature.text, "transition", null))
      when "shop"
        @gurk.pushView(new ItemView(@gurk, null, ItemView.ACTION_BUY, feature))
      when "temple"
        if (feature.cost > @game.gold)
          @gurk.pushView(new AlertView(@gurk, feature.icon, "Cannot Pay", "The priests of the temple demand a tribute of #{feature.cost} gold pieces, but you cannot pay it!", null))
        else
          @gurk.pushView(new ConfirmView(@gurk, feature.icon, "Tribute", "To heal the adventurers, the priests require a tribute of #{feature.cost} gold pieces, will you pay it?", "heal", null))
      when "ship"
        if (feature.charter > @game.gold)
          @gurk.pushView(new AlertView(@gurk, feature.icon, "Cannot Pay", "The crew demand #{feature.charter} gold pieces to charter this vessel, but you cannot pay it!", null))
        else
          @gurk.pushView(new ConfirmView(@gurk, feature.icon, "Charter Ship", "Will you pay the crew #{feature.charter} gold pieces to charter this ship?", "charter", null))
      when "dispatch"
        @gurk.pushView(new ConfirmView(@gurk, feature.icon, feature.title, feature.text, "dispatch", null, feature.altIcon))

  processResult: (result) =>
    switch result
      when "goal"
        @move(0, 0)
        @draw()
      when "alert", "sign"
        @move(0, 0)
        @draw()
      when "transition"
        feature = @getTopFeature(@posX, @posY)
        @game.transitionTo(feature.target, feature.targetX, feature.targetY)
        @setMap(feature.target, feature.targetX, feature.targetY)
        # Process it as a move
        @move(0, 0)
        if (@mapMode)
          @toggleMap()
        @draw()
      when "victory"
        if (@game.aboard)
          if (@map.boatMusic)
            @gurk.playMusic(@map.boatMusic)
          else
            @gurk.playMusic(Data.boatMusic)
        else if (@map.music)
          @gurk.playMusic(@map.music)
        feature = @game.getFeature(@posX, @posY, "encounter")
        if (feature)
          @gurk.game.setMarkers(feature.id)
          @gurk.game.setMarkers(feature.sets)
        @move(0, 0) # Compute shadows, set visited, etc.
        treasure = @encounter.items
        gold = @encounter.gold
        @game.gold += gold
        action = null
        if (treasure.length > 0)
          action = "treasure"
          icon = Data.icons.treasure
          if (gold > 0)
            text = "You find #{gold} gold pieces and treasure amongst your defeated foes!"
          else
            text = "You find treasure amongst your defeated your foes!"
        else
          if (gold > 0)
            icon = Data.icons.gold
            text = "You find #{gold} gold pieces amongst your defeated foes!"
          else
            icon = Data.icons.party
            text = "You have defeated your foes!"
        @upgrades = @game.giveExperience(@encounter.creatures)
        if (@upgrades.length > 0)
          text += "\n"
          for upgrade in @upgrades
            text += "\n#{upgrade.player.character.name} gained a level!"
          action = "levelup"
        @gurk.pushView(new AlertView(@gurk, icon, "Victory", text, action))
      when "levelup"
        if (@encounter.items.length > 0)
          nextAction = "treasure"
        else
          nextAction = null
        @gurk.pushView(new LevelUpView(@gurk, @upgrades, nextAction))
      when "treasure"
        treasure = @encounter.items
        @gurk.pushView(new ItemView(@gurk, null, "GIVE", treasure))
      when "combat"
        combatView = new CombatView(@gurk, @gurk.game.getCombatMap(), @gurk.imageProcessor, @encounter.creatures, @encounter.ambushed)
        @gurk.pushView(combatView)
      when "heal"
        temple = @getTopFeature(@posX, @posY)
        @game.gold -= temple.cost
        @game.healParty()
      when "charter"
        ship = @getTopFeature(@posX, @posY)
        @game.gold -= ship.charter
        @game.boardShip(ship.id)
        if (@map.boatMusic)
          @gurk.playMusic(@map.boatMusic)
        else
          @gurk.playMusic(Data.boatMusic)
        @clearButton(5)
      when "dispatch"
        feature = @getTopFeature(@posX, @posY)
        @gurk.game.setMarkers(feature.sets)
      when "defeat"
        @game.death()
        start = @game.getStart()
        @map = start.map
        @x = start.x
        @y = start.y
        @game.transitionTo(start.map, start.x, start.y)
        @setMap(start.map, start.x, start.y)
        @move(0, 0)
        @gurk.pushView(new AlertView(@gurk, Data.icons.death, "Defeat", "You have been defeated! As blackness closes in, a strange feeling comes over the adventurers...", null))
      when "debug1"
        @game.players[0].takeDamage(3)
        image = @gurk.imageProcessor.rotate(Data.icons.death, ImageProcessor.LEFT)
        @fly(Data.icons.death, 1, 7, 7, 1, 75, @animDone, image)

# -----------------------------------------------------------------------------

class LevelUpView extends InfoView

  constructor : (gurk, upgrades, @nextAction) ->
    super(gurk, "OK")
    y = AlertView.ICON_Y
    textX = AlertView.ICON_X * 2 + Screen.UNIT
    @addLabelCentered("Levelling Up", "#FFF", 0, y, 128, y + 8)
    y += 12
    for upgrade in upgrades
      player = upgrade.player
      @addIcon(player.character.icon, AlertView.ICON_X, y)
      @addLabel("#{player.character.name}", "#FFF", textX, y)
      y += 8
      text = "HP +#{upgrade.hitPointBonus}"
      if (upgrade.spellPointBonus > 0)
        text += ", SP +#{upgrade.spellPointBonus}"
      if (upgrade.newSpells)
        text += " +spells"
        # @addLabel("New spells!", "#A0A0A0", textX, y)
      @addLabel(text, "#A0A0A0", textX, y)
      y += 8
      text = ""
      for i in [0 ... 4]
        attrBonus = upgrade.attrBonuses[i]
        if (attrBonus > 0)
          @addLabel("#{Player.ATTRIBUTES[i]} +#{attrBonus}", "#A0A0A0", textX, y)
          y += 8
      y += 4

  command: (text) =>
    @gurk.popView(@nextAction)

# -----------------------------------------------------------------------------

class PartyView extends SelectView

  game : null

  constructor : (gurk) ->
    super(gurk, "VIEW", "EXIT")
    @game = @gurk.game
    @setButton(1, "OPTIONS")

  doLayout : =>
    @clear()
    for marker, key of Data.keys
      if (@gurk.game.hasMarker(marker) and !@gurk.game.hasMarker(key.until))
        @addIcon(key.icon, 110, 10)
    y = 2;
    @addLabelCentered("The Adventurers", "#FFF", 0, y, 128, Screen.FONT.fontHeight)
    y += 10
    map = Data.maps[@game.map]
    @addLabel("In: #{map.name}", "#FFF", 3, y)
    y += 8
    @addLabel("Gold: #{@game.gold}", "#E8C627", 3, y)
    y += 10
    for player in @game.players
      @addIcon(player.character.icon, 2, y)
      color = if player.isAlive() then "#FFF" else "#999"
      @addOption(player.character.name, color, 20, y)
      y += 8
      @addLabel("Level #{player.level} #{player.character.job}", "#FFF", 20, y)
      stats = "HP: #{player.hitPoints}/#{player.maxHitPoints}"
      if (player.maxSpellPoints > 0)
        stats = stats + " SP: #{player.spellPoints}/#{player.maxSpellPoints}"
      y += 8
      @addLabel(stats, "#FFF", 20, y)
      y += 10
    if (@game.bag)
      @addIcon(@game.bag.character.icon, 2, y)
      @addOption(@game.bag.character.name, "#BBB", 20, y)
      y += 8
      if (@game.bag.items.length == 0)
        @addLabel("Empty", "#FFF", 20, y)
      else if (@game.bag.items.length == 1)
        @addLabel("1 item", "#FFF", 20, y)
      else
        @addLabel("#{@game.bag.items.length} items", "#FFF", 20, y)

  itemSelected: (index, item) =>
    if (index == 3)
      @gurk.pushView(new ItemView(@gurk, @gurk.game.bag, ItemView.ACTION_INFO))
    else
      @gurk.pushView(new PlayerView(@gurk, @game.players[index]))

  command: (text) =>
    if (text == "OPTIONS")
      @gurk.showSettings()
    else
      super(text)

# -----------------------------------------------------------------------------

class PlayerDialog extends SelectView

  @ACTION_HEAL : "HEAL"
  @ACTION_RESTORE : "RESTORE"
  @ACTION_GIVE : "GIVE"
  @ACTION_SELL : "SELL"

  game : null
  canSelect : null

  constructor : (gurk, @action, @preselect = null) ->
    super(gurk, @action, "CANCEL")
    @game = @gurk.game
    @canSelect = []
    y = 3;
    showBag = false
    switch (@action)
      when PlayerDialog.ACTION_HEAL
        message = "Heal which Adventurer?"
      when PlayerDialog.ACTION_RESTORE
        message = "Restore which Adventurer?"
      when PlayerDialog.ACTION_GIVE
        message = "Give to which Adventurer?"
        showBag = true
      when PlayerDialog.ACTION_SELL
        message = "Which Adenturer will Sell?"
        showBag = true
      else
        message = "Choose an Adventurer"
    @addLabelCentered(message, "#FFF", 0, y, 128, Screen.FONT.fontHeight)
    y += 12
    index = 0
    selectIndex = -1
    for player in @game.players
      @addIcon(player.character.icon, 2, y)
      active = true
      if (@action == PlayerDialog.ACTION_HEAL)
        if (!player.isAlive() or player.isHealed())
          active = false
      else if (@action == PlayerDialog.ACTION_RESTORE)
        if (!player.isAlive() or player.isRestored())
          active = false
      else if (@action == PlayerDialog.ACTION_GIVE)
        if (!player.canCarryMoreItems())
          active = false
      else if (@action == PlayerDialog.ACTION_SELL)
        if (player.numberOfItems() == 0)
          active = false
      @canSelect.push(active)
      if (active and @preselect and @preselect == player)
        selectIndex = index
      color = if active then "#FFF" else "#999"
      @addOption(player.character.name, color, 20, y)
      y += 8
      switch (@action)
        when PlayerDialog.ACTION_HEAL
          @addLabel("Hit Points: #{player.hitPoints}/#{player.maxHitPoints}", "#999", 20, y)
        when PlayerDialog.ACTION_RESTORE
          @addLabel("Spell Points: #{player.spellPoints}/#{player.maxSpellPoints}", "#999", 20, y)
        when PlayerDialog.ACTION_GIVE
          @addLabel("Can carry #{Player.MAX_ITEMS - player.numberOfItems()} more items.", "#999", 20, y)
        when PlayerDialog.ACTION_SELL
          @addLabel("Carrying #{player.numberOfItems()} items.", "#999", 20, y)
      y += 20
      index++
    if (showBag)
      bag = @gurk.game.bag
      if (bag)
        @addIcon(bag.character.icon, 2, y)
        active = true
        switch (@action)
          when PlayerDialog.ACTION_GIVE
            if (!bag.canCarryMoreItems())
              active = false
          when PlayerDialog.ACTION_SELL
            if (bag.numberOfItems() == 0)
              active = false
        @canSelect.push(active)
        color = if active then "#FFF" else "#999"
        @addOption(bag.character.name, color, 20, y)
        y += 8
        switch (@action)
          when PlayerDialog.ACTION_GIVE
            @addLabel("Room for #{Player.MAX_ITEMS - bag.numberOfItems()} more items.", "#999", 20, y)
          when PlayerDialog.ACTION_SELL
            @addLabel("Carrying #{bag.numberOfItems()} items.", "#999", 20, y)
    if (selectIndex >= 0)
      @selected = selectIndex
    @start()

  itemHighlighted: (index, item) =>
    if (@canSelect[index])
      @setSelectVerb(@action)
    else
      @turnOffSelection()

  itemSelected: (index, item) =>
    @gurk.popView(index)

# -----------------------------------------------------------------------------

class PlayerView extends InfoView

  constructor : (gurk, @player) ->
    super(gurk, "X")
    @setButton(7, "BACK")
    @setButton(9, "EXIT")
    @setButton(5, "GEAR")
    @setButton(1, "ITEMS")

  doLayout : =>
    hasSpells = @player.hasSpells()
    hasUse = @player.hasUsableItem(false)
    if (@player.isAlive())
      if (hasSpells and hasUse)
        @setButton(3, "CAST/USE")
      else if (hasSpells)
        @setButton(3, "SPELLS")
      else if (hasUse)
        @setButton(3, "USE")
    # Warning-- the below is repeated in CreateView verbatim, find way to merge?
    @clear()
    @addIcon(@player.character.icon, 3, 3)
    y = 4
    @addLabel(@player.character.name, "#FFF", 20, y)
    y += 8
    @addLabel("Level #{@player.level} #{@player.character.job}", "#FFF", 20, y)
    y += 8
    levelUp = Data.levels[@player.level]
    @addLabel("XP: #{@player.experience}/#{levelUp}", "#FFF", 20, y)
    y += 8
    # todo - add spell points if there are any, use HP, SP
    if (@player.maxSpellPoints > 0)
      @addLabel("HP: #{@player.hitPoints}/#{@player.maxHitPoints}, SP: #{@player.spellPoints}/#{@player.maxSpellPoints}", "#FFF", 20, y)
    else
      @addLabel("Hit Points: #{@player.hitPoints}/#{@player.maxHitPoints}", "#FFF", 20, y)
    y += 8
    @addLabel("Armor Class: #{@player.getArmorClass()}", "#FFF", 20, y)
    y += 8
    @addLabel("Resistance: #{@player.getResistance()}", "#FFF", 20, y)
    y += 12
    @addLabel("Strength: #{@player.getStrength()}", "#FFF", 20, y)
    y += 8
    strengthBonus = @player.getAttributeBonus(@player.getStrength())
    if (strengthBonus != 0)
      @addLabel("Damage Bonus: #{strengthBonus}", "#A0A0A0", 28, y)
    y += 10
    @addLabel("Accuracy: #{@player.getAccuracy()}", "#FFF", 20, y)
    y += 8
    accuracyBonus = @player.getAttributeBonus(@player.getAccuracy())
    if (accuracyBonus != 0)
      @addLabel("To-Hit Bonus: #{accuracyBonus}", "#A0A0A0", 28, y)
    y += 10
    @addLabel("Awareness: #{@player.getAwareness()}", "#FFF", 20, y)
    y += 8
    awarenessBonus = @player.getAttributeBonus(@player.getAwareness())
    if (awarenessBonus != 0)
      @addLabel("Armor Class Bonus: #{awarenessBonus}", "#A0A0A0", 28, y)
    y += 10
    @addLabel("Toughness: #{@player.getConstitution()}", "#FFF", 20, y)
    y += 8
    constitutionBonus = @player.getAttributeBonus(@player.getConstitution())
    if (constitutionBonus != 0)
      @addLabel("Resistance Bonus: #{constitutionBonus}", "#A0A0A0", 28, y)

  command: (text) =>
    switch text
      when "ITEMS" then @gurk.pushView(new ItemView(@gurk, @player, ItemView.ACTION_INFO))
      when "GEAR" then @gurk.pushView(new GearView(@gurk, @player))
      when "SPELLS", "CAST/USE" then @gurk.pushView(new SpellView(@gurk, @player))
      when "USE" then @gurk.pushView(new ItemView(@gurk, @player, ItemView.ACTION_USE, false))
      when "BACK" then @gurk.popView(null)
      when "EXIT" then @gurk.popToTopView(null)

# -----------------------------------------------------------------------------

class GearView extends SelectView

  @slotIcons : [
    Data.icons.noWeapon,
    Data.icons.noShield,
    Data.icons.noHat,
    Data.icons.noArmor,
    Data.icons.noBoots,
    Data.icons.noAmulet
  ]

  constructor : (gurk, @player) ->
    super(gurk, "EQUIP", "X")
    @setButton(7, "BACK")
    @setButton(9, "EXIT")

  doLayout : =>
    @clear()
    @addIcon(@player.character.icon, 2, 2)
    @addLabelCentered("#{@player.character.name}'s Gear", "#FFF", 0, 4, 128, 16)
    y = 2 + 16 + 2
    index = 0
    for k, item of @player.equipment
      color = "#FFF"
      if (item)
        icon = item.template.icon
        label = item.name
        color = item.getColor()
      else
        icon = GearView.slotIcons[index]
        label = "(none)"
      @addIcon(icon, 2, y)
      @addOption(label, color, 21, y + 4)
      index++
      y += 18
    @start()

  itemSelected: (index, item) =>
    @gurk.pushView(new ItemView(@gurk, @player, ItemView.ACTION_EQUIP, index))

  itemHighlighted: (index, item) =>
    type = Item.TYPES[index]
    if (@player.getEquipableItemsByType(type).length > 0)
      @setButton(5, "EQUIP")
    else
      @clearButton(5)
    if (@player.getEquippedItemByType(type))
      @setButton(1, "INFO")
    else
      @clearButton(1)

  command: (text) =>
    switch text
      when "BACK" then @gurk.popView(null)
      when "EXIT" then @gurk.popToTopView(null)
      when "INFO" then @gurk.pushView(new ItemInfoView(@gurk, @player.getEquippedItemByType(Item.TYPES[@selected])))
      else super(text)

  processResult: (item) =>
    if (item)
      if (item == ItemView.NONE)
        @player.unequipItemByType(Item.TYPES[@selected])
      else
        @player.equipItem(item)
        @changeIcon(@selected + 1, item.template.icon)
        @changeOption(@selected, item.name, "#FFF")

# -----------------------------------------------------------------------------

class QuestView extends SelectView

  constructor : (gurk) ->
    super(gurk, "VIEW", "EXIT")

  doLayout : =>
    @clear()
    @addLabelCentered("Quests", "#A0A0A0", 0, 1, 128, 8)
    haveQuests = false
    y = 9
    for quest,info of Data.quests
      if (@gurk.game.hasMarker(info.started))
        haveQuests = true
        if (@gurk.game.hasMarker(info.done))
          @addLabel("+", "#FFF", 1, y)
        @addOption(quest, "#FFF", 6, y)
        y += 8
    if (!haveQuests)
      @addLabel("(No quests yet)", "#FFF", 6, y)

  itemSelected: (index, label) =>
    questInfo = Data.quests[label.text]
    done = @gurk.game.hasMarker(questInfo.done)
    infoView = new AlertView(@gurk, questInfo.icon, label.text, questInfo.text, null)
    if (done)
      infoView.subtitle = "(Completed)"
    @gurk.pushView(infoView)

  command: (text) =>
    switch (text)
      when "EXIT" then @gurk.popToTopView(null)
      else super(text)


# -----------------------------------------------------------------------------

class ItemView extends SelectView

  @ACTION_EQUIP : "EQUIP"
  @ACTION_INFO : "INFO"
  @ACTION_BUY : "BUY"
  @ACTION_SELL : "SELL"
  @ACTION_GIVE : "GIVE"
  @ACTION_USE : "USE"
  @ACTION_DROP : "DROP"

  @NONE : "(none)"

  @itemType : null
  @items : null
  @shop : null
  @buyRate : 0
  @sellRate : 0

  @selectAction : null
  @sellingPlayer : null
  @inCombat : false

  constructor : (gurk, @player, @itemAction, @param = null, @melee = null, @summon = null, @combatant = null) ->
    super(gurk, @itemAction, "X")
    if (@itemAction == ItemView.ACTION_GIVE)
      @items = @param
    else if (@itemAction == ItemView.ACTION_BUY)
      @shop = @param
      @items = gurk.game.getShopItems(@shop.x, @shop.y)
      @buyRate = @shop.buyRate;
      @sellRate = @shop.sellRate;
    else if (@itemAction == ItemView.ACTION_SELL)
      @shop = @param
      @buyRate = @shop.buyRate
      @sellRate = @shop.sellRate
      @items = @player.items
    else if (@itemAction == ItemView.ACTION_USE)
      @inCombat = @param

  doLayout : =>
    @clear()
    switch (@itemAction)
      when ItemView.ACTION_EQUIP
        @addLabelCentered("#{@player.getName()}'s Items", "#A0A0A0", 0, 1, 128, 8)
        @setButton(1, "INFO")
        @setButton(7, "BACK")
        if (@melee) # True if this is an in-combat wield
          @clearButton(9)
        else
          @setButton(9, "EXIT")
        @items = @player.getEquipableItemsByType(Item.TYPES[@param])
        @items.push(ItemView.NONE)
      when ItemView.ACTION_INFO
        @addLabelCentered("#{@player.getName()}'s Items", "#A0A0A0", 0, 1, 128, 8)
        @setButton(9, "EXIT")
        @setButton(7, "BACK")
        @setButton(3, "GIVE")
        @setButton(1, "DROP")
        # todo - add "USE" option here that is enabled for healing items
        @items = @player.items
      when ItemView.ACTION_GIVE
        @addLabelCentered("Items", "#A0A0A0", 0, 1, 128, 8)
        @setButton(1, "INFO")
        @setButton(9, "EXIT")
      when ItemView.ACTION_BUY
        @addLabelCentered("Gold: #{@gurk.game.gold}", "#E8C627", 0, 1, 128, 8)
        @setButton(1, "INFO")
        @setButton(3, "SELL...")
        @setButton(9, "EXIT")
      when ItemView.ACTION_SELL
        @addLabelCentered("#{@player.getName()}'s Items", "#A0A0A0", 0, 1, 128, 8)
        @setButton(1, "INFO")
        @setButton(7, "BACK")
        @setButton(9, "EXIT")
      when ItemView.ACTION_USE
        @addLabelCentered("Choose Item to Use", "#A0A0A0", 0, 1, 128, 8)
        @setButton(1, "INFO")
        @setButton(7, "BACK")
        if (!@inCombat)
          @setButton(9, "EXIT")
        else
          @clearButton(9)
        @items = []
        for item in @player.items
          if (@player.canEmploy(item) and (item.isUseable() or (@combatant and @inCombat and item.getCombatSpell() and @player.isItemEquipped(item) and !@combatant.isCombatSpellUsed(item))))
            canUse = false
            if (@inCombat)
              spell = item.getSpell()
              if (spell.type == "summon" and @summon)
                canUse = true
              else if (spell.target != "touch" or @melee or spell.type == "heal")
                canUse = true
            else if (item.canUseOutsideOfCombat())
              canUse = true
            if (canUse)
              @items.push(item)
        if (@items.length == 0)
          @gurk.popView(null)
    @addIcon(Data.icons.blank, 128 - 17, 1)
    y = 9
    if (@items.length > 0)
      for item in @items
        if (item == ItemView.NONE)
          @addOption(ItemView.NONE, "#A0A0A0", 6, y)
        else
          color = item.getColor()
          if (@player and @player.isItemEquipped(item) and !@inCombat)
            @addLabel("+", "#FFF", 1, y)
          name = item.name
          spell = null
          if (item.charges > 0)
            name = name + " [#{item.charges}]"
            spell = item.getSpell()
          else if (item.getCombatSpell() and @inCombat)
            name = name + " [+]"
            spell = item.getCombatSpell()
          if (spell and @inCombat)
            if (spell.fast)
              @addLabel("|", "#A0A0A0", 1, y)
            else
              @addLabel("=", "#A0A0A0", 1, y)
          if (@itemAction == ItemView.ACTION_BUY)
            option = "#{name} (#{item.getShopValue(@buyRate)})"
            @addOption(option, "#FFF", 1, y)
            offset = 1
          else if (@itemAction == ItemView.ACTION_SELL)
            option = "#{name} (#{item.getShopValue(@sellRate)})"
            @addOption(option, "#FFF", 6, y)
            offset = 6
          else
            option = name
            @addOption(name, "#FFF", 6, y)
            offset = 6
          if (item.template.legendary)
            optionWidth = @getTextWidth(option)
            @addLabel("=", color, offset + optionWidth + 1, y)
        y += 8
    else
      @addLabel("(No items)", "#FFF", 6, y)
      @clearButton(1)
      @clearButton(3)
      @clearButton(5)
    @start()

  itemHighlighted: (index, item) =>
    if (item.text == ItemView.NONE)
      @changeIcon(0, GearView.slotIcons[@param])
    else
      @changeIcon(0, @items[index].template.icon)
      if (@itemAction == ItemView.ACTION_BUY)
        if (@gurk.game.gold >= @items[index].getShopValue(@buyRate))
          @setButton(5, "BUY")
        else
          @clearButton(5)

  itemSelected: (index, label) =>
    if (label == ItemView.NONE)
      @gurk.popView(label)
    else
      item = @items[index]
      if (@itemAction == ItemView.ACTION_EQUIP)
        @gurk.popView(item)
      if (@itemAction == ItemView.ACTION_SELL)
        price = item.getShopValue(@sellRate)
        @gurk.pushView(new ConfirmView(@gurk, item.template.icon, "Confirm Sale", "Sell #{item.name} for #{price} gold pieces?", "SELL_YES", "SELL_NO"))
      if (@itemAction == ItemView.ACTION_USE)
        if (@inCombat)
          @gurk.popView(item)
        else
          if (item.getSpell().healType == "restore")
            @gurk.pushView(new PlayerDialog(@gurk, PlayerDialog.ACTION_RESTORE, @player))
          else
            @gurk.pushView(new PlayerDialog(@gurk, PlayerDialog.ACTION_HEAL, @player))

  command: (text) =>
    @selectAction = text
    switch text
      when "BACK" then @gurk.popView(null)
      when "EXIT" then @gurk.popToTopView(null)
      when "INFO" then @gurk.pushView(new ItemInfoView(@gurk, @items[@selected]))
      when "GIVE", "BUY"
        @gurk.pushView(new PlayerDialog(@gurk, "GIVE"))
      when "SELL..."
        @gurk.pushView(new PlayerDialog(@gurk, "SELL"))
      when "DROP"
        item = @items[@selected]
        @gurk.pushView(new ConfirmView(@gurk, item.template.icon, "Confirm Drop", "Drop #{item.name}? It will be gone forever!", "DROP_YES", "DROP_NO"))
      else super(text)

  processResult: (param) =>
    item = @items[@selected]
    if (param == "SELL_YES")
      @gurk.game.gold += item.getShopValue(@sellRate)
      @player.dropItem(item)
      @doLayout()
    else if (param == "DROP_YES")
      @player.dropItem(item)
      @doLayout()
    else if (param == "DROP_NO")
      # no-op
      false
    else if (param == "SELL_NO")
      # no-op
      false
    else if (@selectAction == "SELL...")
      @selectAction = "SELL"
      if (param == 3)
        @sellingPlayer = @gurk.game.bag
      else
        @sellingPlayer = @gurk.game.players[param]
      @gurk.pushView(new ItemView(@gurk, @sellingPlayer, "SELL", @shop))
    else if (@selectAction == "USE")
      target = @gurk.game.players[param]
      spell = item.getSpell()
      bounds = item.getSpellRange()
      item.charges--
      if (item.charges == 0)
        @player.dropItem(item)
      if (spell.healType == "restore")
        orgSpellPoints = target.spellPoints
        target.spellPoints += Util.random(bounds.min, bounds.max)
        if (target.spellPoints > target.maxSpellPoints)
          target.spellPoints = target.maxSpellPoints
        restoreAmount = target.spellPoints - orgSpellPoints
        @gurk.pushView(new AlertView(@gurk, target.character.icon, "Restored", "#{target.character.name} was restored for #{restoreAmount} points.", null))
      else
        orgHitPoints = target.hitPoints
        target.hitPoints += Util.random(bounds.min, bounds.max)
        if (target.hitPoints > target.maxHitPoints)
          target.hitPoints = target.maxHitPoints
        healAmount = target.hitPoints - orgHitPoints
        @gurk.pushView(new AlertView(@gurk, target.character.icon, "Healed", "#{target.character.name} was healed for #{healAmount} points.", null))
    else # GIVE
      if (param == 3)
        target = @gurk.game.bag
      else
        target = @gurk.game.players[param]
      if (target)
        if (@player != target)
          item = @items[@selected]
          if (@player)
            @player.dropItem(item)
          else
            @items.splice(@selected, 1)
            if (@itemAction == ItemView.ACTION_BUY)
              @gurk.game.gold -= item.getShopValue(@buyRate)
          target.addItem(item)
          if (@items.length == 0)
            @gurk.popView(null)

# -----------------------------------------------------------------------------

class ItemInfoView extends InfoView

  @getUsedBy : (template) ->
    first = true
    text = ""
    for type in template.usedBy
      if (first)
        first = false
      else
        text += ", "
      switch (type)
        when "warrior"
          text += "Warriors"
        when "archer"
          text += "Archers"
        when "mage"
          text += "Mages"
    text

  constructor : (gurk, @item) ->
    super(gurk, "DONE")
    template = @item.template
    @addIcon(template.icon, 3, 3)
    y = 23
    x = 3
    if (template.legendary)
      @addLabelCentered(@item.name, @item.getColor(), 0, 3, 128, 8)
      @addLabelCentered("(Legendary Artifact)", "#A0A0A0", 0, 12, 128, 8)
    else
      @addLabelCentered(@item.name, @item.getColor(), 0, 4, 128, 16)
    @addLabel("(#{ItemInfoView.getUsedBy(template)})", "#FFF", x, y)
    y += 8
    # todo - show charges, and spell effect for usable items
    if (@item.isMeleeWeapon())
      @addLabel("Melee Damage: #{Math.max(1, @item.getMeleeMinDamage())} - #{Math.max(1, @item.getMeleeMaxDamage())}", "#FFF", x, y)
      y += 8
    if (@item.isRangeWeapon())
      @addLabel("Range Damage: #{Math.max(1, @item.getRangeMinDamage())} - #{Math.max(1, @item.getRangeMaxDamage())}", "#FFF", x, y)
      y += 8
    if (@item.getHitSpell())
      @addLabel("Hit Effect", "#A0A0A0", x, y)
      y += 8
      y = @showSpell(@item.getHitSpell(), 8, y, false, false)
    if (@item.getCombatSpell())
      speed = if @item.getCombatSpell().fast then "|" else "="
      @addLabel("Once per Combat #{speed}", "#A0A0A0", x, y)
      y += 8
      y = @showSpell(@item.getCombatSpell(), 8, y, true, true)
    if (@item.getExtraMoves() > 0)
      @addLabel("Extra Moves: #{@item.getExtraMoves()}", "#FFF", x, y)
      y += 8
    if (@item.getExtraAttacks() > 0)
      @addLabel("Extra Attacks: #{@item.getExtraAttacks()}", "#FFF", x, y)
      y += 8
    if (@item.getToHitBonus() != 0)
      @addLabel("To-Hit Bonus: #{@item.getToHitBonus()}", "#FFF", x, y)
      y += 8
    if (@item.getArmorClass() != 0)
      @addLabel("Armor Class Bonus: #{@item.getArmorClass()}", "#FFF", x, y)
      y += 8
    if (@item.getResistance() != 0)
      @addLabel("Resistance Bonus: #{@item.getResistance()}", "#FFF", x, y)
      y += 8
    if (@item.getStrengthBonus() != 0)
      @addLabel("Strength Bonus: #{@item.getStrengthBonus()}", "#FFF", x, y)
      y += 8
    if (@item.getAccuracyBonus() != 0)
      @addLabel("Accuracy Bonus: #{@item.getAccuracyBonus()}", "#FFF", x, y)
      y += 8
    if (@item.getAwarenessBonus() != 0)
      @addLabel("Awareness Bonus: #{@item.getAwarenessBonus()}", "#FFF", x, y)
      y += 8
    if (@item.getConstitutionBonus() != 0)
      @addLabel("Toughness Bonus: #{@item.getConstitutionBonus()}", "#FFF", x, y)
      y += 8
    if (@item.isUseable())
      @addLabel("Charges Left: #{@item.charges}", "#FFF", x, y)
      y += 8
      spell = @item.getSpell()
      speed = if spell.fast then "| Fast" else "= Normal"
      @addLabel("Speed: #{speed}", "#FFF", x, y)
      y += 8
      @showSpell(spell, x, y, true, true)

  showSpell : (spell, x, y, showRange = true, showDrainDamage = false) =>
    if (spell.type == "summon")
      @addLabel("Summons: #{spell.creature}", "#FFF", x, y)
      y += 8
    else
      range = @item.getSpellRange(spell)
      if (spell.type == "damage")
        effect = "Damage #{range.min} - #{range.max}"
      else if (spell.type == "teleport")
        effect = "Teleport"
      else if (spell.type == "drain")
        if (showDrainDamage)
          effect = "Drains Life #{range.min} - #{range.max}"
        else
          effect = "Drains Life"
      else if (spell.type == "heal")
        if (spell.healType == "restore")
          effect = "Restore #{range.min} - #{range.max}"
        else if (spell.healType == "remove")
          effect = "Cure Afflictions"
        else
          effect = "Heal #{range.min} - #{range.max}"
      else
        effect = spell.effect;
        if ("Poisoned" == effect)
          effect += " (" + spell.value + ")"
      if (showRange)
        # speed = if spell.fast then "|" else "="
        @addLabel("Effect: #{effect}", "#FFF", x, y)
      else
        @addLabel("#{effect}", "#FFF", x, y)
      y += 8
      if (showRange)
        if (spell.target == "touch")
          target = "Touch"
        else if (spell.target == "self")
          target = "Self"
        else if (spell.target == "range")
          target = "Range"
        else if (spell.target == "area")
          target = "Area"
        @addLabel("Target: #{target}", "#FFF", x, y)
        y += 8
    y

# -----------------------------------------------------------------------------

class SpellView extends SelectView

  @USE_NAME : "Use..."

  creature : null
  spells : null
  castable : null
  resultMode : null

  constructor : (gurk, @player, @inCombat = false, @melee = false, @hasSummonRoom = false, @combatant = null) ->
    super(gurk, "CAST", "X")
    if (@player.template)
      @creature = @player
    if (!@inCombat)
      @setButton(9, "EXIT")
      @setButton(7, "BACK")
    else
      @setButton(7, "CANCEL")
      @clearButton(9)
    @setButton(1, "INFO")

  doLayout : =>
    @clear()
    @spells = @player.getSpells()
    @castable = []
    # @addIcon(Data.icons.spell, 128 - 17, 1)
    if (@creature)
      @addLabelCentered("#{@creature.template.name}'s Spells (SP: #{@player.spellPoints})", "#A0A0A0", 0, 1, 128, 8)
    else
      @addLabelCentered("#{@player.character.name}'s Spells (SP: #{@player.spellPoints})", "#A0A0A0", 0, 1, 128, 8)
    y = 9
    spellPoints = @player.spellPoints
    index = 0
    for spell in @spells
      active = false
      if (spell.spellPoints <= spellPoints)
        if ((spell.type == "heal" and (@inCombat or spell.healType != "remove")) or ((spell.type == "enhance" or spell.type == "teleport") and @inCombat))
          active = true
        else if (@inCombat)
          if (spell.type == "summon" and @hasSummonRoom)
            active = true
          else if (spell.target == "touch" and @melee)
            active = true
          else if (spell.target == "range" or spell.target == "area")
            active = true
      @castable.push(active)
      color = if active then "#FFF" else "#888"
      if (active and @inCombat)
        if (spell.fast)
          @addLabel("|", "#A0A0A0", 1, y)
        else
          @addLabel("=", "#A0A0A0", 1, y)
      @addOption("#{spell.name} (#{spell.spellPoints})", color, 6, y)
      y += 8
      index++
    if (!@creature and @player.hasUsableItem(@inCombat, @melee, @hasSummonRoom, @combatant))
      @addOption(SpellView.USE_NAME, "#FFF", 6, y)
    @start()

  itemHighlighted: (index, item) =>
    if (item.text == SpellView.USE_NAME)
      @setButton(5, "USE")
    else if (@castable[index])
      @setButton(5, "CAST")
    else
      @clearButton(5)

  itemSelected: (index, item) =>
    if (@castable[index])
      if (@inCombat)
        @gurk.popView(@spells[index])
      else
        if (@gurk.game.playersNeedHealing())
          @gurk.pushView(new PlayerDialog(@gurk, PlayerDialog.ACTION_HEAL))
        else
          @gurk.pushView(new AlertView(@gurk, Data.icons.party, "Fully Healed", "There is nobody to target with that spell, all of the adventures are fully healed!", null))

  command: (text) =>
    @resultMode = "NORMAL"
    switch text
      when "BACK", "CANCEL" then @gurk.popView(null)
      when "EXIT" then @gurk.popToTopView(null)
      when "INFO" then @gurk.pushView(new SpellInfoView(@gurk, @player, @spells[@selected]))
      when "USE"
        @resultMode = "USE"
        @gurk.pushView(new ItemView(@gurk, @player, ItemView.ACTION_USE, @inCombat, @melee, @hasSummonRoom, @combatant))
      else super(text)

  processResult: (result) =>
    if (@resultMode == "USE")
      @gurk.popView(result)
    else
      target = @gurk.game.players[result]
      spell = @spells[@selected]
      @player.spellPoints -= spell.spellPoints
      bounds = @player.getSpellRange(spell)
      if (spell.healType == "restore")
        orgSpellPoints = target.spellPoints
        target.spellPoints += Util.random(bounds.min, bounds.max)
        if (target.spellPoints > target.maxSpellPoints)
          target.spellPoints = target.maxSpellPoints
        restoreAmount = target.spellPoints - orgSpellPoints
        @gurk.pushView(new AlertView(@gurk, target.character.icon, "Restored", "#{target.character.name} was restored for #{restoreAmount} points, now at #{target.spellPoints}/#{target.maxSpellPoints}.", null))
      else
        orgHitPoints = target.hitPoints
        target.hitPoints += Util.random(bounds.min, bounds.max)
        if (target.hitPoints > target.maxHitPoints)
          target.hitPoints = target.maxHitPoints
        healAmount = target.hitPoints - orgHitPoints
        @gurk.pushView(new AlertView(@gurk, target.character.icon, "Healed", "#{target.character.name} was healed for #{healAmount} points, now at #{target.hitPoints}/#{target.maxHitPoints}.", null))

# -----------------------------------------------------------------------------

class SpellInfoView extends InfoView

  constructor : (gurk, @player, @spell) ->
    super(gurk, "DONE")
    range = @player.getSpellRange(@spell)
    @addIcon(Data.icons.spell, 3, 3)
    @addLabelCentered(@spell.name, "#FFF", 0, 4, 128, 16)
    y = 23
    x = 3
    @addLabel("Level: #{@spell.level}", "#FFF", x, y)
    y += 8
    @addLabel("Casting Cost: #{@spell.spellPoints} SP", "#FFF", x, y)
    y += 8
    speed = if @spell.fast then "| Fast" else "= Normal"
    @addLabel("Speed: #{speed}", "#FFF", x, y)
    y += 8
    if (@spell.type == "summon")
      @addLabel("Summons: #{@spell.creature}", "#FFF", x, y)
      y += 8
    else
      if (@spell.type == "damage")
        effect = "Damage #{range.min} - #{range.max}"
      else if (@spell.type == "drain")
        effect = "Drains Life #{range.min} - #{range.max}"
      else if (@spell.type == "heal")
        if (@spell.healType == "restore")
          effect = "Restore"
        else if (@spell.healType == "remove")
          effect = "Remove Afflictions"
        else
          effect = "Heal #{range.min} - #{range.max}"
      else if (@spell.type == "teleport")
        effect = "Teleport"
      else
        if (@spell.effect == "Poisoned")
          effect = "Poisoned (#{@spell.value})"
        else
          effect = @spell.effect
      @addLabel("Effect: #{effect}", "#FFF", x, y)
      y += 8
      if (@spell.target == "touch")
        target = "Touch"
      else if (@spell.target == "self")
        target = "Self"
      else if (@spell.target == "range")
        target = "Range"
      else if (@spell.target == "area")
        target = "Area"
      @addLabel("Target: #{target}", "#FFF", x, y)
      y += 8

