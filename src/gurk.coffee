# -----------------------------------------------------------------------------
#
# The entry point for the game, including game data validation.
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

class Test

  @assert: (condition, failDescription) =>
    if (!condition)
      console.log("ASSERTION FAILED: " + failDescription)

  @run: =>
    console.log("--- TESTING START ---")

    shortSwordTemplate = Library.getItemTemplateByName("Short Sword")
    Test.assert(shortSwordTemplate, "Short sword template not found by name")
    shortSword = new Item(shortSwordTemplate, 100, 2)
    Test.assert(shortSword.name == "Short Sword +2", "Short Sword name is wrong.")
    Test.assert(shortSword.getMeleeMinDamage() == 3, "Short Sword melee min damage is wrong.")
    Test.assert(shortSword.getMeleeMaxDamage() == 7, "Short Sword melee max damage is wrong.")
    Test.assert(shortSword.getToHitBonus() == 2, "Short Sword to hit bonus is wrong.")
    Test.assert(shortSword.getArmorClass() == 0, "Short Sword should have 0 AC.")
    leatherArmor = new Item(Library.getItemTemplateByName("Leather Armor"), 101, -1)
    Test.assert(leatherArmor.getArmorClass() == 1, "Leather Armor -1 should have 1 AC")
    rugnar = new Player(Data.characters[0])
    Test.assert(rugnar.strength >= rugnar.accuracy, "Strength is not greatest attribute.")
    Test.assert(rugnar.strength >= rugnar.awareness, "Strength is not greatest attribute.")
    Test.assert(rugnar.strength >= rugnar.constitution, "Strength is not greatest attribute.")
    Test.assert(rugnar.maxHitPoints > 0, "Max hit points not positive.")
    Test.assert(rugnar.hitPoints == rugnar.maxHitPoints, "Hit points not equal to max hit points.")
    rugnar.strength = 18
    Test.assert(rugnar.getAttributeBonus(rugnar.strength) == 3, "Strength bonus incorrect.")
    damage = rugnar.getMeleeDamageBounds()
    Test.assert(damage.min == 1 + 3, "Min damage is wrong")
    Test.assert(damage.max == 1 + 3, "Max damage is wrong")
    rugnar.addItem(shortSword)
    rugnar.equipItem(shortSword)
    damage = rugnar.getMeleeDamageBounds()
    Test.assert(damage.min == 1 + 2 + 3, "Min damage is wrong")
    Test.assert(damage.max == 5 + 2 + 3, "Max damage is wrong")
    rugnar.addItem(leatherArmor)
    rugnar.equipItem(leatherArmor)
    rugnar.awareness = 14
    Test.assert(rugnar.getArmorClass() == 1 + 1, "Rugnar armor class is wrong.")
    rugnar.unequipItem(leatherArmor)
    Test.assert(rugnar.getArmorClass() == 0 + 1, "Rugnar armor class is wrong after unequip.")
    rugnar.dropItem(leatherArmor)
    Test.assert(rugnar.items.length == 1, "Rugnar should have 1 item.")

    console.log("--- TESTING COMPLETED ---")

# -----------------------------------------------------------------------------

class Validate

  @require : (object, item, name) ->
    if (!object.hasOwnProperty(item))
      console.log("#{name} is missing '#{item}'.")

  @run : ->
    console.log("--- VALIDATING ...")
    console.log("-- SPELLS")
    for spell in Data.spells
      if (spell.type == "summon")
        if (!spell.creature)
          console.log(" No creature for summon spell #{spell.name}.")
        else if (!Library.getCreatureByName(spell.creature))
          console.log(" Creature for summon spell #{spell.name} not found: '#{spell.creature}'.")
      if ((spell.target == "range" or spell.target == "area") and !spell.animation)
        console.log(" Animation missing for spell #{spell.name}")
    console.log("-- CREATURES")
    spellSet = {}
    for creature in Data.creatures
      Validate.require(creature, "icon", creature.name)
      Validate.require(creature, "groups", creature.name)
      Validate.require(creature, "meleeMinDamage", creature.name)
      Validate.require(creature, "meleeMaxDamage", creature.name)
      Validate.require(creature, "level", creature.name)
      Validate.require(creature, "minHitPoints", creature.name)
      Validate.require(creature, "maxHitPoints", creature.name)
      Validate.require(creature, "experienceValue", creature.name)
      Validate.require(creature, "numAttacks", creature.name)
      Validate.require(creature, "numMoves", creature.name)
      Validate.require(creature, "armorClass", creature.name)
      Validate.require(creature, "description", creature.name)
      if (creature.rangeMinDamage and !creature.rangeAnimation)
        console.log(" No range animation for #{creature.name}.")
      if (creature.hitSpell and !Library.getSpellByName(creature.hitSpell))
        console.log(" Missing hit spell #{creature.hitSpell} for #{creature.name}.")
      if (creature.hitSpell)
        spellSet[creature.hitSpell] = true
      if (creature.spells)
        for spell in creature.spells
          if (!Library.getSpellByName(spell.name))
            console.log(" Missing spell #{spell.name} for #{creature.name}.")
          else
            spellSet[spell.name] = true
    console.log("-- ITEMS")
    for item in Data.items
      Validate.require(item, "icon", item.name)
      Validate.require(item, "type", item.name)
      Validate.require(item, "groups", item.name)
      Validate.require(item, "rarity", item.name)
      Validate.require(item, "baseValue", item.name)
      Validate.require(item, "level", item.name)
      Validate.require(item, "usedBy", item.name)
      if (item.rangeMinDamage and !item.rangeAnimation)
        console.log(" No range animation for #{item.name}.")
      if (item.spell and !Library.getSpellByName(item.spell))
        console.log(" Missing spell #{item.spell} for #{item.name}.")
      if (item.hitSpell and !Library.getSpellByName(item.hitSpell))
        console.log(" Missing hit spell #{item.hitSpell} for #{item.name}.")
      if (item.combatSpell and !Library.getSpellByName(item.combatSpell))
        console.log(" Missing combat spell #{item.combatSpell} for #{item.name}.")
      if (item.spell)
        spellSet[item.spell] = true
      if (item.hitSpell)
        spellSet[item.hitSpell] = true
      if (item.combatSpell)
        spellSet[item.combatSpell] = true
    console.log("-- MAPS")
    idSet = {}
    locationSet = {}
    for name,map of Data.maps
      if (map.encounterChance and map.encounterChance > 0 and !map.combatMap)
        console.log(" Missing combat map for #{name}.")
      if (map.features)
        for feature in map.features
          if (feature.type == "transition")
            if (!feature.target)
              console.log(" Missing transition target in #{name}.")
            else if (!Data.maps[feature.target])
              console.log(" Transition target #{feature.target} not found in #{name}.")
            else
              target = Data.maps[feature.target]
              if (feature.targetX >= target.width or feature.targetY >= target.height)
                console.log(" Transition target location is not valid in #{feature.target} for #{name}.")
          else if (feature.type == "encounter")
            location = name + "-" + feature.x + "-" + feature.y
            if (locationSet[location])
              console.log(" More than one encounter at '#{name} : #{feature.x}, #{feature.y}'.")
            else
              locationSet[location] = true
            if (idSet[feature.id])
              console.log(" More than one encounter with id '#{feature.id}'.")
            else
              idSet[feature.id] = true
            if (feature.creatures)
              for creature in feature.creatures
                if (!Library.getCreatureByName(creature.name))
                  console.log(" Creature #{creature.name} not found in #{name}.")
            if (feature.items)
              for item in feature.items
                if (!Library.getItemTemplateByName(item.name))
                  console.log(" Item #{item.name} not found in #{name}.")
    for spell in Data.spells
      if (!spellSet[spell.name] && !spell.who)
        console.log(" Unused spell: #{spell.name}")
    console.log("--- VALIDATION COMPLETE.")

# -----------------------------------------------------------------------------

class SettingsView extends SelectView

  constructor : (gurk) ->
    super(gurk, "TOGGLE", "DONE")

  doLayout : =>
    @clear()
    y = 3
    @addLabelCentered("Settings", "#FFF", 0, y, 128, Screen.FONT.fontHeight)
    y += 12
    music = if @gurk.getMusicSetting() then "ON" else "OFF"
    combatMusic = if @gurk.getCombatMusicSetting() then "ON" else "OFF"
    sound = if @gurk.getSoundSetting() then "ON" else "OFF"
    fast = if @gurk.getFastSetting() then "ON" else "OFF"
    @addOption("Music is #{music}", "#FFF", 8, y)
    y += 8
    @addOption("Combat music is #{combatMusic}", "#FFF", 8, y)
    y += 8
    @addOption("Sound FX are #{sound}", "#FFF", 8, y)
    y += 8
    @addOption("Fast combat is #{fast}", "#FFF", 8, y)
    @start()

  itemSelected: (index, item) =>
    if (index == 0)
      @gurk.setMusicSetting(!@gurk.getMusicSetting())
    else if (index == 1)
      @gurk.setCombatMusicSetting(!@gurk.getCombatMusicSetting())
    else if (index == 2)
      @gurk.setSoundSetting(!@gurk.getSoundSetting())
    else if (index == 3)
      @gurk.setFastSetting(!@gurk.getFastSetting())
    @doLayout()
    @draw()

# -----------------------------------------------------------------------------

class Gurk

  stack: null
  view : null
  screen : null
  buttonGrid : null
  game : null
  imageProcessor : null
  music : null

  startSavedGame: =>
    @game = new Game()
    @game.loadGame(Device.loadGame())
    mapView = new MapView(this)
    @setView(mapView)

  getSoundSetting : =>
    Device.getSetting("sound", true)

  setSoundSetting : (value) =>
    Device.setSetting("sound", value)

  getMusicSetting : =>
    Device.getSetting("music", true)

  setMusicSetting : (value) =>
    Device.setSetting("music", value)
    if (value)
      @resumeMusic()
    else
      @stopMusic()

  getCombatMusicSetting : =>
    Device.getSetting("combatMusic", true)

  setCombatMusicSetting : (value) =>
    Device.setSetting("combatMusic", value)

  getFastSetting : =>
    Device.getSetting("fast", false)

  setFastSetting : (value) =>
    Device.setSetting("fast", value)

  startNewGame : (game) =>
    @game = game
    club = @game.createItem(Library.getItemTemplateByName("Crude Club"))
    sling = @game.createItem(Library.getItemTemplateByName("Sling"))
    shortStaff = @game.createItem(Library.getItemTemplateByName("Short Staff"))

    @game.players[0].addItem(club)
    @game.players[0].equipItem(club)
    @game.players[1].addItem(sling)
    @game.players[1].equipItem(sling)
    @game.players[2].addItem(shortStaff)
    @game.players[2].equipItem(shortStaff)

    # TESTING
    ###
    bloodSword = @game.createItem(Library.getItemTemplateByName("Bloodsword"))
    @game.players[0].addItem(bloodSword)
    @game.players[0].equipItem(bloodSword)
    @game.gold = 20000
    @game.players[2].maxSpellPoints = 50;
    wandOfFire = @game.createItem(Library.getItemTemplateByName("Hydrosword"))
    @game.players[0].addItem(wandOfFire)

    for i in [0 ... 3]
      @game.players[i].maxHitPoints = 100;
      @game.players[i].maxSpellPoints = 100;
      @game.players[i].level = 10;
      @game.players[i].strength += 10;
      @game.players[i].accuracy += 10;
      @game.players[i].awareness += 10;
      @game.players[i].constitution += 10;
      @game.players[i].experience = 30000;

    @game.transitionTo("shuunia", 13, 7)
    ###
    # END TESTING

    mapView = new MapView(this)
    @setView(mapView)

  startTestGame: =>
    @game = new Game()
    warrior = new Player(Data.characters[0])
    shortSword = @game.createItem(Library.getItemTemplateByName("Short Sword"), 1)
    serpentSword = @game.createItem(Library.getItemTemplateByName("Serpentongue"))
    shortSword2 = @game.createItem(Library.getItemTemplateByName("Short Sword"), 2)
    shortSword3 = @game.createItem(Library.getItemTemplateByName("Short Sword"), -1)
    heavyAxe = @game.createItem(Library.getItemTemplateByName("Heavy Axe"))
    leatherArmor = @game.createItem(Library.getItemTemplateByName("Leather Armor"), 1)
    leatherBoots = @game.createItem(Library.getItemTemplateByName("Leather Boots"), 0)
    healingSalve = @game.createItem(Library.getItemTemplateByName("Healing Salve"), 1, 3)
    wandOfBlessing = @game.createItem(Library.getItemTemplateByName("Wand of Blessing"), 0, 2)
    wandOfBlessing2 = @game.createItem(Library.getItemTemplateByName("Wand of Blessing"), 0, 2)
    wandOfStriking = @game.createItem(Library.getItemTemplateByName("Wand of Striking"), 1, 2)
    warrior.addItem(serpentSword)
    warrior.addItem(shortSword)
    warrior.addItem(shortSword2)
    warrior.addItem(shortSword3)
    warrior.addItem(leatherArmor)
    warrior.addItem(heavyAxe)
    warrior.addItem(leatherBoots)
    warrior.addItem(wandOfBlessing)
    warrior.addItem(healingSalve)
    warrior.addItem(wandOfStriking)
    warrior.equipItem(serpentSword)
    warrior.equipItem(leatherArmor)
    warrior.equipItem(leatherBoots)
    warrior.hitPoints = 1
    warrior.experience = 49
    ranger = new Player(Data.characters[1])
    shortBow = @game.createItem(Library.getItemTemplateByName("Short Bow"), 1)
    bowOfFortune = @game.createItem(Library.getItemTemplateByName("Bow of Fortune"))
    speedBoots = @game.createItem(Library.getItemTemplateByName("Speed Boots"), 0)
    leatherBoots2 = @game.createItem(Library.getItemTemplateByName("Leather Boots"), 0)
    ranger.addItem(shortBow)
    ranger.addItem(bowOfFortune)
    ranger.equipItem(bowOfFortune)
    ranger.addItem(leatherBoots2)
    ranger.addItem(speedBoots)
    ranger.equipItem(speedBoots)
    wizard = new Player(Data.characters[2])
    wizard.level = 2
    wizard.maxSpellPoints = 20
    wizard.spellPoints = 20
    wizard.experience = 119
    wizard.addItem(wandOfBlessing2)
    @game.addPlayer(warrior)
    @game.addPlayer(ranger)
    @game.addPlayer(wizard)
    # Build features again to prevent legendary items for showing twice (wouldn't happen in a real game)
    @game.buildFeatures()
    mapView = new MapView(this)
    @setView(mapView)

  playSound : (sound) =>
    if (@getSoundSetting())
      playAudio(sound)

  playMusic : (track) =>
    @music = track
    console.log("Music setting: '" + @getMusicSetting() + "'.")
    if (@getMusicSetting())
      console.log("Play track '" + track + "'.")
      playTrack(track)

  playCombatMusic : =>
    if (@getCombatMusicSetting())
      playTrack(Data.combatMusic)

  stopMusic : =>
    stopTrack()

  resumeMusic : =>
    if (@music)
      @playMusic(@music)

  start: =>
    # @playSound("summon")
    console.log("Get contexts")
    ctx = document.getElementById("screenID").getContext("2d")
    ctxControl = document.getElementById("controlID").getContext("2d")
    canvasWork = document.getElementById("workID")
    ctxWork = canvasWork.getContext("2d")
    @stack = new Array()
    @screen = new Screen(ctx)
    @buttonGrid = new ButtonGrid(ctxControl, this)
    @imageProcessor = new ImageProcessor(canvasWork, ctxWork, @screen.icons)
    # @imageProcessor.shade(Data.icons.ship)
    splashView = new SplashView(this)
    @setView(splashView)
    console.log("Set splash view")
    @playMusic(Data.splashMusic)
#    touchstart = (e) =>
#      @buttonGrid.clicked(document.getElementById("controlID").relMouseCoords(e))
#    document.getElementById("controlID").addEventListener("touchstart", touchstart, false);

    # ENABLE THE TWO LINES BELOW FOR WEB CLICKS
#    document.getElementById("controlID").onclick = (e) =>
#      @buttonGrid.clicked(document.getElementById("controlID").relMouseCoords(e))
    clickHandler = (e) =>
      switch e.keyCode
        when 37 then @buttonGrid.forceClick(4)
        when 38 then @buttonGrid.forceClick(2)
        when 39 then @buttonGrid.forceClick(6)
        when 40 then @buttonGrid.forceClick(8)
        when 13 then @buttonGrid.forceClick(5) # Enter
        when 81 then @buttonGrid.forceClick(1) # Q
        when 87 then @buttonGrid.forceClick(2) # W
        when 69 then @buttonGrid.forceClick(3) # E
        when 65 then @buttonGrid.forceClick(4) # A
        when 83 then @buttonGrid.forceClick(5) # S
        when 68 then @buttonGrid.forceClick(6) # D
        when 90 then @buttonGrid.forceClick(7) # Z
        when 88 then @buttonGrid.forceClick(8) # X
        when 67 then @buttonGrid.forceClick(9) # C
        when 96 then @buttonGrid.forceClick(5) # Num Pad 0
        when 97 then @buttonGrid.forceClick(7) # Num Pad 1
        when 98 then @buttonGrid.forceClick(8) # Num Pad 2
        when 99 then @buttonGrid.forceClick(9) # Num Pad 3
        when 100 then @buttonGrid.forceClick(4) # Num Pad 4
        when 101 then @buttonGrid.forceClick(5) # Num Pad 5
        when 102 then @buttonGrid.forceClick(6) # Num Pad 6
        when 103 then @buttonGrid.forceClick(1) # Num Pad 7
        when 104 then @buttonGrid.forceClick(2) # Num Pad 8
        when 105 then @buttonGrid.forceClick(3) # Num Pad 9
        when 71 then @view.processResult("debug1") # Debug hook 1
        when 72 then @view.processResult("debug2") # Debug hook 2
        # todo - maybe add ESC -> 9 and BACKSPACE -> 7
    window.addEventListener('keydown', clickHandler)
    @buttonGrid.draw()
    # Test.run()

  phoneClick: (e, offsetX = 0, offsetY = 0) =>
    point = document.getElementById("controlID").relMouseCoords(e)
    point.x -= offsetX
    point.y -= offsetY
    @buttonGrid.clicked(point)

  constructor: ->
    # Get all the images in here
    #Screen.SCALE = 4
    console.log("Preloading..., scale is #{Screen.SCALE}")
    # Preloader.reset()
    Preloader.load("icons0-" + Screen.SCALE + ".png")
    Preloader.load("icons1-" + Screen.SCALE + ".png")
    Preloader.load("screen" + Screen.SCALE + ".png")
    Preloader.load("font_micro" + Screen.SCALE + ".png")
    Preloader.load("font_gurkoid" + Screen.SCALE + ".png")
    Preloader.load("button" + Screen.SCALE + ".png")
    Preloader.load("buttonoff" + Screen.SCALE + ".png")
    Preloader.load("buttontop" + Screen.SCALE + ".png")
    Preloader.load("shadow" + Screen.SCALE + ".png")
    console.log("Preloading started...")
    # End images
    Preloader.setCallback(@start)

  getScreen: () =>
    @screen

  setView: (view) =>
    console.log("Set View: " + view)
    @stack = new Array()
    @view = view
    @showView()

  showSettings : () =>
    @pushView(new SettingsView(this))

  showView: () =>
    console.log("View: #{@view.name}")
    @view.doLayout()
    @view.setButtons(@buttonGrid)
    @view.draw()

  pushView: (view) =>
    @stack.unshift(@view)
    @view = view
    @showView()

  popView: (result) =>
    parent = @stack.shift()
    if (parent != null)
      @view = parent
      if (result != null)
        @view.processResult(result)
      @showView()

  swapView: (result) =>
    @view = view
    if (result != null)
      @view.processResult(result)
    @showView()

  popToTopView: (result) =>
    if (@stack.length > 0)
      @view = @stack.shift()
      while (@stack.length > 0)
        @view = @stack.shift()
      if (result != null)
        @view.processResult(result)
      @showView()

  buttonPressed: (text) =>
    @view.command(text)

  showAlert: (icon, title, text, result) =>
    alert = new AlertView(this, icon, title, text, result)
    @pushView(alert)

  showConfirm: (icon, title, text, yesResult, noResult) =>
    confirm = new ConfirmView(this, icon, title, text, yesResult, noResult)
    @pushView(confirm)

  isCurrentView: (view) =>
    return @view == view

# -----------------------------------------------------------------------------

App = {}

window.App = App;

App.init = (platform) ->
  console.log('App init...')
  `
  /*
  function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do{
        totalOffsetX += currentElement.offsetLeft;
        totalOffsetY += currentElement.offsetTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x:canvasX, y:canvasY}
  }
  */
  function relMouseCoords(event) {
    //console.log("event.pageY: " + event.pageY + ", this.offsetTop: " + this.offsetTop);
    var x;
    var y;
    if ("ios" == platform) {
      x = event.pageX * 2 - this.offsetLeft;
      y = event.pageY * 2 - this.offsetTop;
    } else {
      x = event.pageX - this.offsetLeft;
      y = event.pageY - this.offsetTop;
    }
    return {"x":x, "y":y};
  }
  HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;`
  console.log('Starting E.B.U.R.P...')
  App.gurk = new Gurk()
