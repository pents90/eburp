# -----------------------------------------------------------------------------
#
# Holds the core game structures, including heroes ("Players"), creatures and
# items.
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

# Static methods for accessing the library of game data
class Library

  @getItemTemplateByName: (name) =>
    for item in Data.items
      if (item.name == name)
        return item
    null

  @getItemTemplates: (level, groups) =>
    results = new Array()
    for item in Data.items
      if (item.level == level and (!groups or Util.hasCommonElements(groups, item.groups)))
        results.push(item)
    results

  @getCharacterByName : (name) =>
    for character in Data.characters
      if (character.name == name)
        return character
    null

  @getCreatureByName: (name) =>
    for creature in Data.creatures
      if (creature.name == name)
        return creature
    null

  @getCreatures: (level, groups) =>
    results = new Array()
    for creature in Data.creatures
      if (creature.level == level and (!groups or Util.hasCommonElements(groups, creature.groups)))
        results.push(creature)
    results

  @getLevelNear: (level) =>
    x = Util.random(0, 9999)
    a = Data.levelTransformations[level - 1]
    i = 0
    while (x > a[i])
      x -= a[i]
      i++
    i + 1

  @getSpellsForCharacterAndLevel : (character, level) =>
    type = character.type
    job = character.job
    results = new Array()
    for spell in Data.spells
      if ((spell.who == type or spell.who == job) and spell.level <= level)
        results.push(spell)
    results

  @newSpellsForCharacterAndLevel : (character, level) =>
    type = character.type
    job = character.job
    for spell in Data.spells
      if ((spell.who == type or spell.who == job) and spell.level == level)
        return true
    false

  @getSpellByName : (name) =>
    for spell in Data.spells
      if (spell.name == name)
        return spell
    null

# -----------------------------------------------------------------------------
# An instance of an item

class Item

  @TYPE_WEAPON: "weapon"
  @TYPE_SHIELD: "shield"
  @TYPE_HAT: "hat"
  @TYPE_ARMOR: "armor"
  @TYPE_BOOTS: "boots"
  @TYPE_AMULET: "amulet"
  @TYPE_USE: "use"

  @TYPES : [
    Item.TYPE_WEAPON,
    Item.TYPE_SHIELD,
    Item.TYPE_HAT,
    Item.TYPE_ARMOR,
    Item.TYPE_BOOTS,
    Item.TYPE_AMULET,
    Item.TYPE_USE,
  ]

  name : null

  constructor: (@template, @id, @bonus = 0, @charges = 0) ->
    @name = @template.name
    if (@bonus > 0)
      @name += " +" + @bonus
    else if (@bonus < 0)
      @name += " -" + (-@bonus)

  getColor : =>
    @template.legendary ? "#FFF"

  getType: =>
    @template.type

  isWeapon : =>
    @template.type == Item.TYPE_WEAPON

  getHitSpell : =>
    if (@template.hitSpell)
      Library.getSpellByName(@template.hitSpell)
    else
      null

  getCombatSpell : =>
    if (@template.combatSpell)
      Library.getSpellByName(@template.combatSpell)
    else
      null

  isUseable: =>
    @template.type == Item.TYPE_USE

  isEquipableBy: (characterType) =>
    return !@isUseable() && @isFor(characterType)

  isFor: (characterType) =>
    Util.hasElement(@template.usedBy, characterType)

  getSpell: =>
    if (@template.spell)
      Library.getSpellByName(@template.spell)
    else if (@template.combatSpell)
      Library.getSpellByName(@template.combatSpell)
    else
      null

  getSpellRange : (spell = null) =>
    if (!spell)
      spell = @getSpell()
    if (!spell)
      spell = @getHitSpell()
    {"min" : spell.minAmount + @bonus * spell.modifyAmount, "max" : spell.maxAmount + @bonus * spell.modifyAmount}

  canUseOutsideOfCombat: =>
    spell = @getSpell()
    @isUseable() and spell.type == "heal" and (spell.healType == "restore" or spell.healType == "heal" or !spell.healType)

  isMeleeWeapon: =>
    @isWeapon() and @template.meleeMinDamage

  isRangeWeapon: =>
    @isWeapon() and @template.rangeMinDamage

  isAreaWeapon: =>
    @isWeapon() and @template.target == "area"

  getMeleeMinDamage: =>
    @template.meleeMinDamage + @bonus

  getMeleeMaxDamage: =>
    @template.meleeMaxDamage + @bonus

  getRangeMinDamage: =>
    @template.rangeMinDamage + @bonus

  getRangeMaxDamage: =>
    @template.rangeMaxDamage + @bonus

  getToHitBonus: =>
    if @isWeapon()
      if @template.toHitBonus then @template.toHitBonus + @bonus else @bonus
    else
      0

  getArmorClass: =>
    if @template.armorClass then @template.armorClass + @bonus else 0

  getResistance: =>
    if @template.resistance then @template.resistance + @bonus else 0

  getExtraMoves : =>
    @template.extraMoves ? 0

  getExtraAttacks : =>
    @template.extraAttacks ? 0

  getStrengthBonus: =>
    if @template.strengthBonus then @template.strengthBonus + @bonus else 0

  getAccuracyBonus: =>
    if @template.accuracyBonus then @template.accuracyBonus + @bonus else 0

  getAwarenessBonus: =>
    if @template.awarenessBonus then @template.awarenessBonus + @bonus else 0

  getConstitutionBonus: =>
    if @template.constitutionBonus then @template.constitutionBonus + @bonus else 0

  getValue: =>
    value = @template.baseValue
    if (@isUseable())
      value *= @charges
      value = Math.round(value + (value * @bonus / 2))
    else
      if (@bonus > 0)
        for i in [0...@bonus]
          value = value * 1.8
      else if (@bonus < 0)
        for i in [@bonus...0]
          value = value / 1.5
        value = Math.max(1, value)
    Math.round(value)

  getShopValue: (modPerCent) =>
    value = Math.floor(@getValue() * modPerCent / 100)
    if (value < 1)
      value = 1
    value

  getSpellName: =>
    @template.spell

# -----------------------------------------------------------------------------

class Creature

  hitPoints : 0
  maxHitPoints : 0
  spellPoints : 0
  maxSpellPoints : 0

  constructor : (@template, @bonus = 0) ->
    @maxHitPoints = Util.random(@template.minHitPoints, @template.maxHitPoints) + @bonus
    if (@maxHitPoints < 1)
      @maxHitPoints = 1
    @hitPoints = @maxHitPoints
    if (@template.minSpellPoints)
      @maxSpellPoints = Util.random(@template.minSpellPoints, @template.maxSpellPoints) + @bonus
      @spellPoints = @maxSpellPoints
    @good = false

  canAttackRange : =>
    if (@template.rangeMinDamage) then true else false

  canAttackArea : =>
    if (@template.target == "area") then true else false

  canAttackMelee : =>
    if (@template.meleeMinDamage) then true else false

  getHitSpell : =>
    if (@template.hitSpell)
      Library.getSpellByName(@template.hitSpell)
    else
      null

  getToHitBonus : =>
    (@template.hitModifier ? 0) + @bonus

  getResistance : =>
    (@template.resistance ? 0) + @bonus

  getPotency : =>
    (@template.potency ? 0) + Math.floor(@template.level/2) + @bonus

  getArmorClass : =>
    (@template.armorClass ? 0) + @bonus

  getMeleeDamageBounds: =>
    min = Math.max(@template.meleeMinDamage + @bonus, 1)
    max = Math.max(@template.meleeMaxDamage + @bonus, 1)
    {"min" : min, "max" : max}

  getRangeDamageBounds: =>
    min = Math.max(@template.rangeMinDamage + @bonus, 1)
    max = Math.max(@template.rangeMaxDamage + @bonus, 1)
    {"min" : min, "max" : max}

  getSpellRange : (spell) =>
    min = spell.minAmount + @bonus
    max = spell.maxAmount + @bonus
    if (min < 1)
      min = 1
    if (max < 1)
      max = 1
    {"min" : min, "max" : max}

  getName : =>
    @template.name

  getSpells : =>
    list = @template.spells
    results = []
    if (list)
      for spell in list
        results.push(Library.getSpellByName(spell.name))
    results

# -----------------------------------------------------------------------------
# A "hero", but also used to represent the bag of holding.
class Player

  @TYPE_WARRIOR : "warrior"
  @TYPE_ARCHER : "archer"
  @TYPE_MAGE : "mage"

  @ATTRIBUTES = ["Strength", "Accuracy", "Awareness", "Toughness"]

  @MAX_ITEMS : 15

  strength : 0
  accuracy : 0
  awareness : 0
  constitution : 0
  hitPoints : 0
  maxHitPoints : 0
  spellPoints : 0
  maxSpellPoints : 0
  experience : 0
  level : 0

  items : null
  equipment : null

  fromData : (data) ->
    Util.copyProperties(data, this)
    @items = new Array()
    @equipment = {}
    @equipment[Item.TYPE_WEAPON] = null
    @equipment[Item.TYPE_SHIELD] = null
    @equipment[Item.TYPE_HAT] = null
    @equipment[Item.TYPE_ARMOR] = null
    @equipment[Item.TYPE_BOOTS] = null
    @equipment[Item.TYPE_AMULET] = null
    for obj in data.items
      item = new Item(Library.getItemTemplateByName(obj.template), obj.id, obj.bonus, obj.charges)
      @items.push(item)
    for k,id of data.equipment
      if (id)
        @equipment[k] = @getItemById(id)

  constructor: (@character) ->
    @level = 1
    @experience = 0
    attributes = [Util.statRoll(), Util.statRoll(), Util.statRoll(), Util.statRoll()]
    attributes.sort((a,b) -> a-b)
    best = attributes[3]
    attributes.pop()
    Util.shuffle(attributes)
    if (@character.bestAttribute == "strength")
      @strength = best
      @accuracy = attributes[0]
      @awareness = attributes[1]
      @constitution = attributes[2]
    else if (@character.bestAttribute == "accuracy")
      @accuracy = best
      @strength = attributes[0]
      @awareness = attributes[1]
      @constitution = attributes[2]
    else if (@character.bestAttribute == "awareness")
      @awareness = best
      @accuracy = attributes[0]
      @strength = attributes[1]
      @constitution = attributes[2]
    else if (@character.bestAttribute == "constitution")
      @constitution = best
      @accuracy = attributes[0]
      @awareness = attributes[1]
      @strength = attributes[2]
    if (@character.strength)
      @strength += @character.strength
    if (@character.accuracy)
      @accuracy += @character.accuracy
    if (@character.awareness)
      @awareness += @character.awareness
    if (@character.constitution)
      @constitution += @character.constitution
    if (@strength < 1)
      @strength = 1
    if (@accuracy < 1)
      @accuracy = 1
    if (@awareness < 1)
      @awareness = 1
    if (@constitution < 1)
      @constitution = 1
    @maxHitPoints = Math.max(4, @computeNextLevelHitPoints()) + @character.hitPoints
    if (Library.getSpellsForCharacterAndLevel(@character, 1).length > 0)
      @maxSpellPoints = Math.max(2, @computeNextLevelSpellPoints())
    else
      @maxSpellPoints = 0
    @healCompletely()
    @items = new Array()
    @equipment = {}
    @equipment[Item.TYPE_WEAPON] = null
    @equipment[Item.TYPE_SHIELD] = null
    @equipment[Item.TYPE_HAT] = null
    @equipment[Item.TYPE_ARMOR] = null
    @equipment[Item.TYPE_BOOTS] = null
    @equipment[Item.TYPE_AMULET] = null
    # todo - starting items

  getName : =>
    @character.name

  canCarryMoreItems: =>
    @items.length < Player.MAX_ITEMS

  numberOfItems : =>
    @items.length

  addItem: (item) =>
    if (@canCarryMoreItems())
      @items.push(item)

  getItemById : (id) =>
    for item in @items
      if (item.id == id)
        return item
    null

  equipItem: (item) =>
    type = item.template.type
    if (type != Item.TYPE_USE)
      @equipment[type] = item

  isItemEquipped: (item) =>
    type = item.template.type
    @equipment[type] and @equipment[type].id == item.id

  unequipItem: (item) =>
    if (@isItemEquipped(item))
      type = item.template.type
      @equipment[type] = null
      true
    else
      false

  unequipItemByType : (type) =>
    item = @equipment[type]
    if (item)
      @unequipItem(item)

  dropItem: (item) =>
    @unequipItem(item)
    for i in [0...@items.length]
      if (@items[i].id == item.id)
        @items.splice(i, 1)
        return true
    false

  hasItem : (name) =>
    for item in @items
      if (item.template.name == name)
        return true
    false

  canEmploy: (item) =>
    item.isFor(@character.type)

  hasUsableItem: (inCombat, melee = false, summon = false, combatant = null) =>
    for item in @items
      if (item.isUseable() and @canEmploy(item) or combatant and inCombat and item.getCombatSpell() and !combatant.isCombatSpellUsed(item))
        spell = item.getSpell()
        if (spell)
          if (inCombat)
            if (spell.type == "summon" and summon)
              return true
            if (spell.target != "touch" or melee or spell.type == "heal")
              return true
          else if (spell.type == "heal" and spell.healType != "remove")
            return true
    false

  getEquipableItemsByType: (type) =>
    result = new Array()
    for item in @items
      if (item.template.type == type and item.isEquipableBy(@character.type))
        result.push(item)
    result

  getEquippedItemByType: (type) =>
    @equipment[type]

  getWeapon: =>
    @getEquippedItemByType(Item.TYPE_WEAPON)

  getHitSpell : =>
    weapon = @getWeapon()
    if (weapon)
      weapon.getHitSpell()
    else
      null

  getAttributeBonus: (value) =>
    Util.trunc((value - 1) / 2.4 - 4)

  computeNextLevelHitPoints: =>
    Util.random(1, 8) + @getAttributeBonus(@getConstitution())

  computeNextLevelSpellPoints: =>
    Util.random(1, 5) + @getAttributeBonus(@getAwareness())

  isAlive: =>
    return @hitPoints > 0

  takeDamage: (amount) =>
    @hitPoints -= amount
    if (@hitPoints < 0)
      @hitPoints = 0
    @hitPoints

  isRestored : =>
    @spellPoints == @maxSpellPoints

  isHealed : =>
    @hitPoints == @maxHitPoints

  healCompletely: =>
    @hitPoints = @maxHitPoints
    @spellPoints = @maxSpellPoints

  heal: =>
    if (@hitPoints > 0)
      @hitPoints = Math.min(@maxHitPoints, @hitPoints + 1)
      @spellPoints = Math.min(@maxSpellPoints, @spellPoints + 1)

  getExtraMoves : =>
    moves = 0
    for k, item of @equipment
      if (item)
        moves += item.getExtraMoves()
    moves

  getExtraAttacks : =>
    attacks = 0
    for k, item of @equipment
      if (item)
        attacks += item.getExtraAttacks()
    attacks

  getArmorClass: =>
    ac = @getAttributeBonus(@getAwareness())
    for k, item of @equipment
      if (item)
        ac += item.getArmorClass()
    ac

  getResistance: =>
    r = @getAttributeBonus(@getConstitution())
    for k, item of @equipment
      if (item)
        r += item.getResistance()
    r

  getPotency : =>
    Math.floor(@level / 2)

  getToHitBonus: =>
    toHit = @getAttributeBonus(@getAccuracy())
    weapon = @equipment[Item.TYPE_WEAPON]
    if (weapon)
      toHit += weapon.getToHitBonus()
    toHit

  getStrength : =>
    strength = @strength
    for k, item of @equipment
      if (item)
        strength += item.getStrengthBonus()
    strength

  getAccuracy : =>
    accuracy = @accuracy
    for k, item of @equipment
      if (item)
        accuracy += item.getAccuracyBonus()
    accuracy

  getAwareness : =>
    awareness = @awareness
    for k, item of @equipment
      if (item)
        awareness += item.getAwarenessBonus()
    awareness

  getConstitution : =>
    constitution = @constitution
    for k, item of @equipment
      if (item)
        constitution += item.getConstitutionBonus()
    constitution

  canAttackRange: =>
    weapon = @equipment[Item.TYPE_WEAPON]
    weapon and weapon.isRangeWeapon()

  canAttackArea: =>
    weapon = @equipment[Item.TYPE_WEAPON]
    weapon and weapon.isAreaWeapon()

  canAttackMelee: =>
    weapon = @equipment[Item.TYPE_WEAPON]
    weapon and weapon.isMeleeWeapon()

  getMeleeDamageBounds: =>
    weapon = @equipment[Item.TYPE_WEAPON]
    if (!weapon)
      min = 1
      max = 1
    else if (weapon.isMeleeWeapon())
      min = weapon.getMeleeMinDamage()
      max = weapon.getMeleeMaxDamage()
    else
      min = weapon.getRangeMinDamage()
      max = weapon.getRangeMaxDamage()
    bonus = @getAttributeBonus(@getStrength())
    min = Math.max(min + bonus, 1)
    max = Math.max(max + bonus, 1)
    {min : min, max : max}

  getRangeDamageBounds: =>
    weapon = @equipment[Item.TYPE_WEAPON]
    bonus = @getAttributeBonus(@getStrength())
    if (weapon.isRangeWeapon())
      min = weapon.getRangeMinDamage() + bonus
      max = weapon.getRangeMaxDamage() + bonus
      min = Math.max(min, 1)
      max = Math.max(max, 1)
      {min : min, max : max}
    else
      {min : 0, max : 0}

  getSpellRange : (spell) =>
    bonus = @getAttributeBonus(@getAwareness())
    levelDiff = @level - spell.level
    if (levelDiff < 0)
      levelDiff = 0
    bonus += Math.round(spell.modifyAmount * levelDiff / 100)
    min = spell.minAmount + bonus
    max = spell.maxAmount + bonus
    if (min < 1)
      min = 1
    if (max < 1)
      max = 1
    {"min" : min, "max" : max}

  hasSpells : =>
    return @getSpells().length > 0

  getSpells : =>
    Library.getSpellsForCharacterAndLevel(@character, @level)

# -----------------------------------------------------------------------------

class Game

  @MAX_ENCOUNTER_CREATURES = 18
  @NUM_SHOP_ITEMS = 15

  players : null
  bag : null
  gold : 0
  map : null
  x : 0
  y : 0
  itemId : 0
  moveNum : 0

  # Record of what squares have been visited
  visited : null

  # Transient - current map features
  features : null

  # Map of ship ID to current location (ship will not be here if not yet chartered)
  ships : null

  # Map of game variables to 'true' if completed.
  markers : null

  # Map of shop key to items (transient)
  shops : null

  # If currently in a ship, this will be its ID
  aboard : null

  constructor : ->
    @players = new Array()
    @map = Data.start[0].map
    @x = Data.start[0].x
    @y = Data.start[0].y
    @gold = Data.start[0].gold
    @ships = {}
    @markers = {}
    @shops = {}
    @visited = {}
    @moveNum = 0
    @buildFeatures()

  saveGame : =>
    copy = JSON.parse(JSON.stringify(this))
    delete copy.features
    for player in copy.players
      for item in player.items
        item.template = item.template.name
      for k,item of player.equipment
        if (item)
          player.equipment[k] = item.id
    if (copy.bag)
      for item in copy.bag.items
        item.template = item.template.name
    copy

  loadGame : (json) =>
    saved = JSON.parse(json)
    @players = []
    for obj in saved.players
      player = new Player(obj.character)
      player.fromData(obj)
      @players.push(player)
    @map = saved.map
    @x = saved.x
    @y = saved.y
    @gold = saved.gold
    @ships = saved.ships
    @markers = saved.markers
    @visited = saved.visited
    @moveNum = saved.moveNum
    @itemId = saved.itemId
    if (saved.bag)
      @bag = new Player(saved.bag.character)
      @bag.fromData(saved.bag)
    @buildFeatures()
    true

  createBag : =>
    if (!@bag)
      @bag = new Player(Library.getCharacterByName("Bag of Holding"))

  death : =>
    @ships = {}
    for player in @players
      player.healCompletely()
    @gold = 0
    @buildFeatures()

  getStart : =>
    best = Data.start[0]
    for start in Data.start
      if (start.after and @hasMarker(start.after))
        best = start
    best

  @getKey : (x, y) =>
    "" + x + "_" + y

  setMarkers : (listOrSingle) =>
    if (listOrSingle == "bagOfHolding" and !@bag)
      @createBag()
    if (listOrSingle == "gameOver")
      Device.setSetting("won", true)
    newMarkers = false
    if (listOrSingle)
      if (listOrSingle instanceof Array)
        for a in listOrSingle
          if (!@markers[a])
            @markers[a] = true
            newMarkers = true
      else
        if (!@markers[listOrSingle])
          @markers[listOrSingle] = true
          newMarkers = true
    if (newMarkers)
      @buildFeatures()
    newMarkers

  hasMarker : (marker) =>
    return !!@markers[marker]

  hasAllMarkers : (listOrSingle) =>
    if (listOrSingle)
      if (listOrSingle instanceof Array)
        for a in listOrSingle
          if (!@markers[a])
            return false
      else
        if (!@markers[listOrSingle])
          return false
    true

  hasAnyMarkers : (listOrSingle) =>
    if (listOrSingle)
      if (listOrSingle instanceof Array)
        for a in listOrSingle
          if (@markers[a])
            return true
      else
        if (@markers[listOrSingle])
          return true
    false

  buildFeatures : =>
    list = Data.maps[@map].features
    @features = {}
    @shops = {}
    if (list)
      for feature in list
        if (@hasAllMarkers(feature.after) and !@hasAnyMarkers(feature.until) && !@hasAnyMarkers(feature.id))
          x = feature.x
          y = feature.y
          # If it's a ship, it may have moved
          if (feature.type == "ship" and @ships[feature.id])
            {x, y} = @ships[feature.id]
          key = Game.getKey(x, y)
          object = @features[key]
          if (!object)
            object = {}
            @features[key] = object
          object[feature.type] = feature
          if (feature.type == "shop")
            @populateShopItems(key, feature)

  populateShopItems : (key, shop) =>
    items = []
    @shops[key] = items
    for i in [0 ... Game.NUM_SHOP_ITEMS]
      item = @getRandomItem(shop.level, shop.groups)
      if (item)
        items.push(item)

  getShopItems : (x, y) =>
    key = Game.getKey(x, y)
    @shops[key]

  isChartered : (shipID) =>
    if (@ships[shipID]) then true else false

  boardShip : (shipID) =>
    @aboard = shipID
    @moveShip(@x, @y)

  moveShip : (x, y) =>
    oldPos = @ships[@aboard]
    if (oldPos)
      oldKey = Game.getKey(oldPos.x, oldPos.y)
      object = @features[oldKey]
      if (object)
        feature = object["ship"]
        if (object)
          delete object["ship"]
          if (Util.isEmpty(object))
            delete @features[oldKey]
    else
      feature = @getFeature(x, y, "ship")
    key = Game.getKey(x, y)
    pos = {"x":x, "y":y}
    @ships[@aboard] = pos
    object = @features[key]
    if (!object)
      object = {}
    @features[key] = object
    object["ship"] = feature

  disembark : =>
    @aboard = null

  getCombatMap : =>
    @getTerrainInfo().combatMap

  getFeatures : (x, y) =>
    key = Game.getKey(x, y)
    @features[key]

  getFeature : (x, y, type) =>
    key = Game.getKey(x, y)
    object = @features[key]
    if (!object)
      return null
    else
      object[type]

  addPlayer : (player) =>
    @players.push(player)

  getVisitedArray : =>
    array = @visited[@map]
    if (!array)
      array = Util.create2DArray(Data.maps[@map].width, Data.maps[@map].height)
      for y in [0 ... Data.maps[@map].height]
        for x in [0 ... Data.maps[@map].width]
          array[y][x] = 0
      @visited[@map] = array
    array

  markVisited : (x, y) =>
    array = @getVisitedArray()
    array[y][x] = 1

  wasVisited : (x, y) =>
    array = @getVisitedArray()
    return array[y][x] == 1

  moveTo : (x, y) =>
    @x = x
    @y = y
    if (@aboard)
      @moveShip(x, y)

  transitionTo : (map, x, y) =>
    @map = map
    @buildFeatures()
    @x = x
    @y = y

  doesItemExist : (name) =>
    ## 1) Check all players
    for player in @players
      if (player.hasItem(name))
        return true
    if (@bag and @bag.hasItem(name))
      return true
    ## 2) Check all shops
    for k, shop of @shops
      for item in shop
        if (item.template.name == name)
          return true
    false

  createItem : (template, bonus = 0, charges = 0) =>
    @itemId++
    new Item(template, @itemId, bonus, charges)

  getRandomTemplate : (templates) =>
    sum = 0
    for template in templates
      sum += template.rarity ? 1000
    value = Util.random(0, sum-1)
    for template in templates
      rarity = template.rarity ? 1000
      if (rarity > value)
        return template
      else
        value -= rarity
    null

  getRandomItem : (mapLevel, groups) =>
    level = Library.getLevelNear(mapLevel)
    templates = Library.getItemTemplates(level, groups)
    realLevel = level
    while (templates == null and realLevel > 1)
      realLevel--
      templates = Library.getItemTemplates(realLevel, groups)
    level = realLevel
    if (templates and templates.length > 0)
      attempts = 0
      template = null
      while (template == null and attempts < 5)
        attempts++
        template = @getRandomTemplate(templates)
        if (template.legendary)
          if (@doesItemExist(template.name))
            template = null
      if (template == null)
        null
      else
        bonus = 0
        if (!template.legendary)
          modChance = 1
          levelDiffFactor = mapLevel - level + 2
          if (levelDiffFactor > 0)
            for i in [0 ... levelDiffFactor]
              modChance *= 2
          if (modChance > 75)
            modChance = 75
          chance = Util.random(0, 99)
          while (chance < modChance and bonus < 6)
            bonus++
            chance = Util.random(0, 99)
        if (template.chargesMin)
          charges = Util.random(template.chargesMin, template.chargesMax)
        else
          charges = 0
        @createItem(template, bonus, charges)
    else
      null

  playersNeedHealing: () =>
    for player in @players
      if (player.hitPoints < player.maxHitPoints)
        return true
    false

  healParty : =>
    for player in @players
      player.healCompletely()

  regenerateParty : =>
    for player in @players
      if (player.isAlive())
        if (player.hitPoints < player.maxHitPoints)
          player.hitPoints++
        if (player.spellPoints < player.maxSpellPoints)
          player.spellPoints++

  @getCreatureQuantity: (creatureLevel, mapLevel, limit = false) =>
    diff = creatureLevel - mapLevel
    if (diff < -3)
      diff = -3
    else if (diff > 3)
      diff = 3
    switch (diff)
      when -3 then amount = Util.random(3, 9)
      when -2 then amount = Util.random(2, 5)
      when -1 then amount = Util.random(1, 4)
      when 0 then amount = Util.random(1, 3)
      else amount = 1
    if (limit)
      amount = Math.round(amount / 2)
      if (amount < 1)
        amount = 1
      if (amount > 2)
        amount = 2
    amount

  getEncounter: (feature) =>
    creatures = []
    for creature in feature.creatures
      template = Library.getCreatureByName(creature.name)
      bonus = creature.bonus ? 0
      hpBonus = creature.hitPoints ? 0
      creature = new Creature(template, bonus)
      creature.maxHitPoints += hpBonus
      creature.hitPoints += hpBonus
      creatures.push(creature)
    items = []
    for item in feature.items
      template = Library.getItemTemplateByName(item.name)
      bonus = item.bonus ? 0
      if (template.chargesMin)
        charges = Util.random(template.chargesMin, template.chargesMax)
      else
        charges = 0
      items.push(@createItem(template, bonus, charges))
    gold = feature.gold ? 0
    if (feature.ambushed)
      ambushed = true
    else
      ambushed = false
    {"creatures" : creatures, "items" : items, "gold" : gold, "ambushed" : ambushed}

  giveExperience : (creatures) =>
    totalXP = 0
    for creature in creatures
      totalXP += creature.template.experienceValue
    totalPlayers = 0
    for player in @players
      if (player.isAlive())
        totalPlayers++
    xp = Math.ceil(totalXP / totalPlayers)
    upgrades = []
    for player in @players
      if (player.isAlive())
        player.experience += xp
        if (player.experience >= Data.levels[player.level])
          # Level up
          player.level++
          attrBonuses = [0, 0, 0, 0]
          for i in [0 ... 2]
            attr = Util.random(0, 3)
            attrBonuses[attr]++
            switch attr
              when 0
                player.strength++
              when 1
                player.accuracy++
              when 2
                player.awareness++
              when 3
                player.constitution++
          constitutionBonus = player.getAttributeBonus(player.getConstitution())
          awarenessBonus = player.getAttributeBonus(player.getAwareness())
          hitPointBonus = Util.random(2, 8) + constitutionBonus
          if (hitPointBonus < 1)
            hitPointBonus = 1
          if (player.hasSpells())
            spellPointBonus = Util.random(1, 5) + awarenessBonus
            if (spellPointBonus < 1)
              spellPointBonus = 1
            if (player.maxSpellPoints == 0)
              player.spellPoints = 0
          else
            spellPointBonus = 0
          player.maxHitPoints += hitPointBonus
          player.hitPoints += hitPointBonus
          player.maxSpellPoints += spellPointBonus
          player.spellPoints += spellPointBonus
          newSpells = Library.newSpellsForCharacterAndLevel(player.character, player.level)
          upgrades.push({"player" : player, "attrBonuses" : attrBonuses, "hitPointBonus" : hitPointBonus, "spellPointBonus" : spellPointBonus, "newSpells" : newSpells})
    upgrades

  getAveragePlayerLevel : =>
    total = 0
    for player in @players
      if (player.isAlive())
        total += player.level
    total / 3

  getTile : (x, y) =>
    override = @getFeature(x, y, "override")
    if (override)
      override.tile
    else
      index = y * Data.maps[@map].width + x
      Data.maps[@map].map.charAt(index)

  getTerrainInfo : =>
    tile = @getTile(@x, @y)
    terrain = Data.maps[@map].terrain?[tile]
    if (terrain)
      terrain
    else
      map = Data.maps[@map]
      {
        level : map.level,
        encounterChance: map.encounterChance,
        combatMap : map.combatMap,
        groups: map.groups
      }

  checkForRandomEncounter : =>
    terrain = @getTerrainInfo()
    encounterChance = terrain.encounterChance
    if (encounterChance)
      dungeonLevel = terrain.level
      chance = encounterChance
      if (dungeonLevel < 10) # Don't filter encounters over a certain level, for indefinite play
        chance = chance / Math.max(1, @getAveragePlayerLevel() - dungeonLevel - 1.5)
      if (Util.randomChance(chance, 1000))
        return true
    false

  createEncounter: () =>
    terrain = @getTerrainInfo()
    mapLevel = terrain.level
    groups = terrain.groups
    creatures = []
    k = Util.random(1, 3)
    full = false
    for i in [0 ... k]
      if (!full)
        level = Library.getLevelNear(mapLevel)
        candidates = Library.getCreatures(level, groups)
        while (candidates.length == 0 and level > 0)
          level--
          candidates = Library.getCreatures(level, groups)
        if (candidates.length > 0)
          template = Util.randomElement(candidates)
          n = Game.getCreatureQuantity(template.level, mapLevel, template.limit)
          if (template.summons)
            n = Math.min(n, 2)
          for j in [0 ... n]
            # Todo - maybe have a chance of an "uber" version of creature here, with a bonus?
            creatures.push(new Creature(template, 0))
            if (creatures.length == Game.MAX_ENCOUNTER_CREATURES)
              full = true
              break
    items = []
    gold = 0
    for creature in creatures
      maxGold = 2
      for i in [0 ... creature.template.level - 1]
        if (i > 9)
          maxGold = maxGold * 1.1
        else if (i > 2)
          maxGold = maxGold * 1.4
        else
          maxGold = maxGold * 1.8
      max = Math.round(maxGold)
      gold += Util.random(0, max)
      treasureLevel = creature.template.level
      if (treasureLevel > 10)
        treasureLevel = 10
      if (Util.randomChance(Data.treasureChance[treasureLevel - 1], 1000))
        item = @getRandomItem(creature.template.level, groups)
        if (item)
          if (item.template.legendary)
            unique = true
            for other in items
              if (other.template.name == item.template.name)
                unique = false
                break
            if (!unique)
              item = null
        if (item)
          items.push(item)
        if (items.length == 5)
          break
    ambushed = Util.randomChance(25, 100)
    {"creatures" : creatures, "items" : items, "gold" : gold, "ambushed" : ambushed}