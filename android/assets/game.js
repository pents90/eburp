var Data = {

    //// Miscellaneous icons referred to by the game directly.

    icons : {
        "party" : "party.png",
        "ship" : "ship.png",
        "gold" : "gold.png",
        "death" : "skull.png",
        "animation" : "animThrowingBone.png",
        "banner" : "banner.png",
        "bannerLeft" : "bannerLeft.png",
        "bannerRight" : "bannerRight.png",
        "noWeapon" : "noWeapon.png",
        "noShield" : "noShield.png",
        "noHat" : "noHat.png",
        "noArmor" : "noArmor.png",
        "noBoots" : "noBoots.png",
        "noAmulet" : "noAmulet.png",
        "treasure" : "chest.png",
        "blank" : "blank.png",
        "combat" : "longSword.png",
        "selectActive" : {"center" : "selectActive.png", "left" : "selectActiveLeft.png", "top" : "selectActiveTop.png", "right" : "selectActiveRight.png", "bottom" : "selectActiveBottom.png"},
        "selectTarget" : {"center" : "selectTarget.png", "left" : "selectTargetLeft.png", "top" : "selectTargetTop.png", "right" : "selectTargetRight.png", "bottom" : "selectTargetBottom.png"},
        "selectView" : {"center" : "selectView.png", "left" : "selectViewLeft.png", "top" : "selectViewTop.png", "right" : "selectViewRight.png", "bottom" : "selectViewBottom.png"},
        "animHit" : "animHit.png",
        "animPoison" : "animPoison.png",
        "animHitSpell" : "animHitSpell.png",
        "animMiss" : "animMiss.png",
        "animHeal" : "animSmoke.png",
        "animSpellCast" : "animSpellCast.png",
        "animResist" : "animResist.png",
        "spell" : "wand.png"
    },

    //// Experience Levels

    levels : [
        0,      // 1
        60,     // 2
        200,    // 3
        500,    // 4
        1000,    // 5
        2000,    // 6
        3600,   // 7
        6000,   // 8
        10000,   // 9
        20000,  // 10
        40000,  // 11
        80000,  // 12
        125000,  // 13
        180000, // 14
        245000, // 15
        320000, // 16
        400000, // 17
        500000, // 18
        600000, // 19
        700000, // 20
        800000, // 21
        900000, // 22
        1000000, // 23
        1100000, // 24
        1200000, // 25
        1300000, // 26
        1400000, // 27
        1500000, // 28
        1600000, // 29
        1700000, // 30
        1800000, // 31
        1900000, // 32
        2000000, // 33
        2100000, // 34
        2200000, // 35
        2300000, // 36
        2400000, // 37
        2500000, // 38
        2600000, // 39
        2700000, // 40
        2800000, // 41
        2900000, // 42
        100000000// END
    ],

    splashMusic : "gurk1",
    combatMusic : "gurk4",
    boatMusic : "jurk10",

    //// Level transformations, each row adds to 10,000, maps level -> level for encounters, treasure, etc.

    levelTransformations : [
        [9300, 500, 199, 1, 0, 0, 0, 0, 0, 0, 0, 0],           // 1
        [4650, 4650, 500, 199, 1, 0, 0, 0, 0, 0, 0, 0],        // 2
        [3100, 3100, 3100, 500, 199, 1, 0, 0, 0, 0, 0, 0],     // 3
        [600, 2900, 2900, 2900, 500, 199, 1, 0, 0, 0, 0, 0],   // 4
        [100, 600, 2850, 2850, 2900, 500, 199, 1, 0, 0, 0, 0], // 5
        [20, 80, 600, 2850, 2850, 2900, 500, 199, 1, 0, 0, 0], // 6
        [0, 20, 80, 600, 2850, 2850, 2900, 500, 199, 1, 0, 0], // 7
        [0, 0, 20, 80, 600, 2850, 2850, 2900, 500, 199, 1, 0], // 8
        [0, 0, 0, 20, 81, 600, 2850, 2850, 2900, 499, 199, 1], // 9
        [0, 0, 0, 0, 20, 82, 600, 2850, 2850, 2900, 499, 199], // 10
        [0, 0, 0, 0, 0, 40, 162, 699, 2850, 2850, 2900, 499],  // 11
        [0, 0, 0, 0, 0, 0, 80, 364, 956, 2850, 2850, 2900]     // 12
    ],

    //// Chance of a creature having treasure, by level. Anything over level 10 is the same as level 10.

    treasureChance : [
        150,
        160,
        180,
        210,
        250,
        300,
        350,
        400,
        450,
        500
    ],

    //// Descriptions of afflictions/enhancements

    effects : {
        "Berserk" : "While berserk, combatant will get an extra attack (or spell cast) each turn.",
        "Blessed" : "A blessed combatant suffers less damage from physical and magical attacks.",
        "Blinded" : "When blinded, combatant's chance to hit when attack will be reduced considerably.",
        "Eagle-eyed" : "An eagle-eyed combatant is more likely to hit with physical attacks.",
        "Paralyzed" : "When paralyzed, a combatant cannot do anything and its turn is skipped.",
        "Poisoned" : "A poisoned combatant suffers poison damage each turn, although it will not die from it.",
        "Protected" : "A protected combatant is harder to hit with physical attacks.",
        "Quick" : "A quick combatant can take additional steps when moving each turn.",
        "Resistant" : "A resistant combatant is less affected by magical attacks.",
        "Rooted" : "A rooted combatant cannot move, although it may still attack and cast spells.",
        "Sluggish" : "A sluggish combatant is easier to hit with phsyical attacks.",
        "Strong" : "A strong combatant inflicts more damage with physical attacks.",
        "Weakened" : "A weakened combatant inflicts less damage with physical attacks."
    },

    //// Classes

    characters : [
        {
            "name" : "Sir Rugnar",
            "job" : "Knight",
            "type" : "warrior",
            "icon" : "knight.png",
            "bestAttribute" : "strength",
            "description" : "Strong, proud and resolute, Sir Rugnar will always faithfully defend his companions valiantly.",
            "strength" : 3,
            "hitPoints" : 4
        },
        {
            "name" : "Borakash",
            "job" : "Barbarian",
            "type" : "warrior",
            "icon" : "fighter.png",
            "bestAttribute" : "strength",
            "description" : "Borakash hails from a long line of incredibly tough and independent barbarian hordesmen.",
            "strength" : 3,
            "constitution" : 5,
            "accuracy" : -5,
            "hitPoints" : 4
        },
        {
            "name" : "Lady Alwyn",
            "job" : "Amazon",
            "type" : "warrior",
            "icon" : "girlKnight.png",
            "bestAttribute" : "strength",
            "description" : "Lady Alwyn was trained in an elite and secretive female fighting force called the 'Amazons'.",
            "strength" : 3,
            "accuracy" : 5,
            "awareness" : -5,
            "hitPoints" : 4
        },
        {
            "name" : "Oloman",
            "after" : "won",
            "job" : "Mercenary",
            "type" : "warrior",
            "icon" : "mercenary.png",
            "bestAttribute" : "strength",
            "description" : "Oloman is an unscrupulous warrior-for-hire. His only two motivations are self-preservation and profit.",
            "strength" : 3,
            "awareness" : 5,
            "constitution" : -5,
            "hitPoints" : 4
        },
        {
            "name" : "Feraldan",
            "job" : "Marksman",
            "type" : "archer",
            "icon" : "ranger.png",
            "bestAttribute" : "accuracy",
            "description" : "Incredibly dedicated, Feraldan began learning the skill of archery as soon as he was old enough to hold a bow.",
            "accuracy" : 3,
            "hitPoints" : 2
        },
        {
            "name" : "Silvana",
            "job" : "Ranger",
            "type" : "archer",
            "icon" : "girlArcher.png",
            "bestAttribute" : "accuracy",
            "description" : "Raised in the deep Shavanoth forest, Silvana is extraordinarily tough while also very talented with a bow.",
            "accuracy" : 3,
            "constitution" : 5,
            "awareness" : -5,
            "hitPoints" : 2
        },
        {
            "name" : "Pardah",
            "job" : "Rogue",
            "type" : "archer",
            "icon" : "archer2.png",
            "bestAttribute" : "accuracy",
            "description" : "Pardah's skills were developed as an orphan in the city's streets. While not strong, he is very savvy.",
            "accuracy" : 3,
            "awareness" : 5,
            "strength" : -5,
            "hitPoints" : 2
        },
        {
            "name" : "Grath",
            "after" : "won",
            "job" : "Assassin",
            "type" : "archer",
            "icon" : "assassin.png",
            "bestAttribute" : "accuracy",
            "description" : "Grath belongs to the shadowy League of Assassins. He is deadly in combat, but where his loyalties lie are uncertain.",
            "accuracy" : 3,
            "strength" : 5,
            "constitution" : -5,
            "hitPoints" : 2
        },
        {
            "name" : "Gorlok",
            "job" : "Wizard",
            "type" : "mage",
            "icon" : "wizard.png",
            "bestAttribute" : "awareness",
            "description" : "Gorlok's diverse magical abilities are the result of a keen mind and assiduous studies.",
            "awareness" : 3,
            "hitPoints" : 1
        },
        {
            "name" : "Gaelabeth",
            "job" : "Druid",
            "type" : "mage",
            "icon" : "girlWizard.png",
            "bestAttribute" : "awareness",
            "description" : "Gaelabeth was trained in the non-violent Druidic arts, but left the Order to pursue a wider study of the occult.",
            "awareness" : 3,
            "constitution" : 5,
            "strength" : -5,
            "hitPoints" : 1
        },
        {
            "name" : "Tazatar",
            "job" : "Conjurer",
            "type" : "mage",
            "icon" : "wizard2.png",
            "bestAttribute" : "awareness",
            "description" : "Strong and willful, Tazatar was widely expected to become a warrior, but was drawn instead to the ancient conjuring arts.",
            "awareness" : 3,
            "strength" : 5,
            "accuracy" : -5,
            "hitPoints" : 1
        },
        {
            "name" : "B'Az Aptar",
            "after" : "won",
            "job" : "Necromancer",
            "type" : "mage",
            "icon" : "necromancer.png",
            "bestAttribute" : "awareness",
            "description" : "B'Az Aptar has broken the Oath of the Benevolent Magi and begun tinkering with the Dark Arts. But does he control the powerful undead forces, or do they control him?",
            "awareness" : 3,
            "accuracy" : 5,
            "constitution" : -5,
            "hitPoints" : 1
        },
        {
            "name" : "Bag of Holding",
            "job" : "Bag",
            "type" : "bag",
            "icon" : "bag.png",
            "bestAttribute" : "awareness",
            "description" : "The Bag of Holding can hold as much weight as a large person can carry, yet always remains as light to carry as it is when empty.",
            "awareness" : 1,
            "strength" : 1,
            "accuracy" : -1,
            "hitPoints" : 1
        }

    ],

    //// Spells

    spells : [
        {
            "name" : "Life Touch",
            "who" : "mage",
            "level" : 1,
            "spellPoints" : 1,
            "type" : "heal",
            "target" : "touch",
            "minAmount" : 1,
            "maxAmount" : 5,
            "modifyAmount" : 100
        },
        {
            "name" : "Magic Fist",
            "who" : "Wizard",
            "level" : 1,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "touch",
            "minAmount" : 1,
            "maxAmount" : 4,
            "modifyAmount" : 100
        },
        {
            "name" : "Magic Shield",
            "who" : "Druid",
            "level" : 1,
            "spellPoints" : 1,
            "type" : "enhance",
            "target" : "touch",
            "effect" : "Protected",
            "value" : 9,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Summon Rat Warrior",
            "level" : 1,
            "who" : "Conjurer",
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Rat Warrior"
        },
        {
            "name" : "Infection",
            "who" : "Necromancer",
            "level" : 1,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Poisoned",
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 4,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Summon Orc",
            "level" : 2,
            "who" : "Wizard",
            "spellPoints" : 3,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Orc"
        },
        {
            "name" : "Tangling Roots",
            "who" : "Druid",
            "level" : 2,
            "spellPoints" : 3,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Rooted",
            "value" : 1,
            "minAmount" : 2,
            "maxAmount" : 4,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Giant Growth",
            "who" : "Conjurer",
            "level" : 2,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "touch",
            "effect" : "Strong",
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Summon Skeleton",
            "level" : 2,
            "who" : "Necromancer",
            "spellPoints" : 4,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Skeleton"
        },
        {
            "name" : "Energy Ball",
            "who" : "mage",
            "level" : 3,
            "spellPoints" : 3,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 2,
            "maxAmount" : 4,
            "modifyAmount" : 100,
            "animation" : "animHotBall.png"
        },
        {
            "name" : "Touch of Terror",
            "who" : "Wizard",
            "level" : 3,
            "spellPoints" : 3,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Paralyzed",
            "value" : 1,
            "minAmount" : 1,
            "maxAmount" : 2
        },
        {
            "name" : "Lifeforce",
            "who" : "Druid",
            "level" : 3,
            "spellPoints" : 3,
            "type" : "heal",
            "target" : "range",
            "minAmount" : 4,
            "maxAmount" : 10,
            "modifyAmount" : 100,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Reverse Wounds",
            "who" : "Conjurer",
            "level" : 3,
            "spellPoints" : 3,
            "type" : "heal",
            "target" : "range",
            "minAmount" : 4,
            "maxAmount" : 10,
            "modifyAmount" : 100,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Blinding Ray",
            "who" : "Necromancer",
            "level" : 3,
            "spellPoints" : 3,
            "type" : "afflict",
            "target" : "area",
            "effect" : "Blinded",
            "animation" : "animSpellCast.png",
            "value" : 8,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Wizard Solace",
            "who" : "Wizard",
            "level" : 4,
            "spellPoints" : 3,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Blessed",
            "fast" : true,
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Noxious Cloud",
            "who" : "Druid",
            "level" : 4,
            "spellPoints" : 5,
            "type" : "afflict",
            "target" : "area",
            "effect" : "Poisoned",
            "animation" : "animSlimeBall.png",
            "value" : 3,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Summon Troll",
            "level" : 4,
            "who" : "Conjurer",
            "spellPoints" : 5,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Troll"
        },
        {
            "name" : "Soul Drain",
            "level" : 4,
            "who" : "Necromancer",
            "spellPoints" : 5,
            "type" : "drain",
            "target" : "touch",
            "minAmount" : 5,
            "maxAmount" : 13,
            "value" : 130,
            "modifyAmount" : 2
        },
        {
            "name" : "Summon Ogre",
            "level" : 5,
            "who" : "Wizard",
            "spellPoints" : 6,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Ogre"
        },
        {
            "name" : "Summon Oliphant",
            "level" : 5,
            "who" : "Druid",
            "spellPoints" : 6,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Oliphant Charger"
        },
        {
            "name" : "Shocking Grip",
            "who" : "Conjurer",
            "level" : 5,
            "spellPoints" : 6,
            "type" : "damage",
            "target" : "touch",
            "minAmount" : 12,
            "maxAmount" : 20,
            "modifyAmount" : 100
        },
        {
            "name" : "Maniacal Whisper",
            "who" : "Necromancer",
            "level" : 5,
            "spellPoints" : 6,
            "type" : "enhance",
            "target" : "touch",
            "effect" : "Berserk",
            "value" : 2,
            "minAmount" : 1,
            "maxAmount" : 2
        },
        {
            "name" : "Flame Chant",
            "who" : "mage",
            "level" : 6,
            "spellPoints" : 9,
            "type" : "damage",
            "target" : "area",
            "minAmount" : 6,
            "maxAmount" : 12,
            "modifyAmount" : 100,
            "animation" : "animFireBall.png"
        },
        {
            "name" : "Ice Blast",
            "who" : "Wizard",
            "level" : 7,
            "spellPoints" : 7,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 9,
            "maxAmount" : 21,
            "modifyAmount" : 100,
            "animation" : "animColdBallSmall.png"
        },
        {
            "name" : "Essence of Fury",
            "who" : "Druid",
            "level" : 7,
            "spellPoints" : 6,
            "type" : "enhance",
            "target" : "range",
            "effect" : "Berserk",
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 4,
            "animation" : "animHotBallSmall.png"
        },
        {
            "name" : "Blink",
            "who" : "Conjurer",
            "level" : 7,
            "spellPoints" : 2,
            "fast" : true,
            "type" : "teleport",
            "target" : "self",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 0
        },
        {
            "name" : "Summon Spectre",
            "level" : 7,
            "who" : "Necromancer",
            "spellPoints" : 8,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Spectre"
        },
        {
            "name" : "Psychic Assault",
            "who" : "mage",
            "level" : 8,
            "spellPoints" : 11,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 20,
            "maxAmount" : 40,
            "modifyAmount" : 100,
            "animation" : "animLightning.png"
        },
        {
            "name" : "Summon Golem",
            "level" : 8,
            "who" : "Wizard",
            "spellPoints" : 12,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Rock Golem"
        },
        {
            "name" : "Beam of Stasis",
            "who" : "Druid",
            "level" : 8,
            "spellPoints" : 8,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Paralyzed",
            "animation" : "animBeam.png",
            "value" : 0,
            "minAmount" : 1,
            "maxAmount" : 3
        },
        {
            "name" : "Summon Yeti",
            "level" : 8,
            "who" : "Conjurer",
            "spellPoints" : 10,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Yeti"
        },
        {
            "name" : "Unholy Strength",
            "who" : "Necromancer",
            "level" : 8,
            "spellPoints" : 9,
            "type" : "enhance",
            "target" : "range",
            "effect" : "Strong",
            "animation" : "animLightning.png",
            "fast" : true,
            "value" : 3,
            "minAmount" : 1,
            "maxAmount" : 3
        },
        {
            "name" : "Incantation of War",
            "who" : "Wizard",
            "level" : 9,
            "spellPoints" : 12,
            "type" : "enhance",
            "target" : "area",
            "effect" : "Strong",
            "animation" : "animLightning.png",
            "fast" : true,
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Summon Life",
            "level" : 9,
            "who" : "Druid",
            "spellPoints" : 14,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Life Golem"
        },
        {
            "name" : "Void of Insanity",
            "who" : "Conjurer",
            "level" : 9,
            "spellPoints" : 13,
            "type" : "damage",
            "target" : "touch",
            "minAmount" : 25,
            "maxAmount" : 55,
            "modifyAmount" : 200
        },
        {
            "name" : "Devastating Gaze",
            "level" : 9,
            "who" : "Necromancer",
            "spellPoints" : 12,
            "type" : "drain",
            "target" : "range",
            "minAmount" : 15,
            "maxAmount" : 35,
            "value" : 100,
            "modifyAmount" : 175,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Call of Armageddon",
            "who" : "mage",
            "level" : 10,
            "spellPoints" : 18,
            "type" : "damage",
            "target" : "area",
            "minAmount" : 25,
            "maxAmount" : 40,
            "modifyAmount" : 125,
            "animation" : "animFireBall.png"
        },
        {
            "name" : "Time Prism",
            "who" : "Wizard",
            "level" : 11,
            "spellPoints" : 20,
            "type" : "afflict",
            "target" : "area",
            "effect" : "Paralyzed",
            "animation" : "animLightning.png",
            "value" : 0,
            "minAmount" : 1,
            "maxAmount" : 2
        },
        {
            "name" : "Circle of Purity",
            "who" : "Druid",
            "level" : 11,
            "spellPoints" : 15,
            "type" : "afflict",
            "target" : "area",
            "effect" : "Blessed",
            "animation" : "animLightning.png",
            "value" : 3,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Summon Dragon",
            "level" : 11,
            "who" : "Conjurer",
            "spellPoints" : 20,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Black Dragon"
        },
        {
            "name" : "Black Death",
            "who" : "Necromancer",
            "level" : 11,
            "spellPoints" : 19,
            "type" : "afflict",
            "target" : "area",
            "effect" : "Poisoned",
            "animation" : "animGreenBall.png",
            "value" : 18,
            "minAmount" : 2,
            "maxAmount" : 5,
            "modifyAmount" : 1
        },

        //// Non-Mage Player Spells
        // Knight
        {
            "name" : "Valiant Charge",
            "who" : "Knight",
            "level" : 6,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Quick",
            "fast" : true,
            "value" : 2,
            "minAmount" : 1,
            "maxAmount" : 1
        },
        {
            "name" : "Intimidating Roar",
            "who" : "Knight",
            "level" : 8,
            "spellPoints" : 5,
            "type" : "afflict",
            "target" : "area",
            "effect" : "Weakened",
            "fast" : true,
            "value" : 2,
            "minAmount" : 1,
            "maxAmount" : 4,
            "modifyAmount" : 1,
            "animation" : "animYell.png"
        },
        {
            "name" : "Rally of Courage",
            "who" : "Knight",
            "level" : 10,
            "spellPoints" : 7,
            "type" : "enhance",
            "target" : "area",
            "effect" : "Blessed",
            "fast" : true,
            "value" : 2,
            "minAmount" : 1,
            "maxAmount" : 3,
            "animation" : "animSpellCast.png"
        },
        // Barbarian
        {
            "name" : "Hymn of Focus",
            "who" : "Barbarian",
            "level" : 6,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Eagle-eyed",
            "fast" : true,
            "value" : 6,
            "modifyAmount" : 1,
            "minAmount" : 1,
            "maxAmount" : 1
        },
        {
            "name" : "Hymn of Anger",
            "who" : "Barbarian",
            "level" : 8,
            "spellPoints" : 5,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Berserk",
            "fast" : true,
            "value" : 1,
            "minAmount" : 1,
            "maxAmount" : 1
        },
        {
            "name" : "Hymn of Defiance",
            "who" : "Barbarian",
            "level" : 10,
            "spellPoints" : 7,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Resistant",
            "fast" : true,
            "value" : 10,
            "modifyAmount" : 1,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        // Amazon
        {
            "name" : "Disarming Glare",
            "who" : "Amazon",
            "level" : 6,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "range",
            "animation" : "animSpellCast.png",
            "effect" : "Sluggish",
            "fast" : true,
            "value" : 6,
            "modifyAmount" : 1,
            "minAmount" : 1,
            "maxAmount" : 4
        },
        {
            "name" : "Inner Peace",
            "who" : "Amazon",
            "level" : 8,
            "spellPoints" : 3,
            "type" : "heal",
            "target" : "self",
            "fast" : true,
            "minAmount" : 5,
            "maxAmount" : 15,
            "modifyAmount" : 100
        },
        {
            "name" : "Shriek of Terror",
            "who" : "Amazon",
            "level" : 10,
            "spellPoints" : 7,
            "type" : "afflict",
            "target" : "range",
            "animation" : "animSpellCast.png",
            "effect" : "Paralyzed",
            "fast" : true,
            "value" : 1,
            "minAmount" : 1,
            "maxAmount" : 1
        },
        // Mercenary
        {
            "name" : "Knife Throw",
            "who" : "Mercenary",
            "level" : 6,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 4,
            "maxAmount" : 10,
            "fast" : true,
            "modifyAmount" : 100,
            "animation" : "animThrowingKnife.png"
        },
        {
            "name" : "Hire Bodyguard",
            "level" : 8,
            "who" : "Mercenary",
            "spellPoints" : 6,
            "type" : "summon",
            "target" : "touch",
            "fast" : true,
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Ogre"
        },
        {
            "name" : "Sixth Sense",
            "who" : "Mercenary",
            "level" : 10,
            "spellPoints" : 5,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Protected",
            "fast" : true,
            "value" : 10,
            "modifyAmount" : 1,
            "minAmount" : 2,
            "maxAmount" : 3
        },
        // Marksman
        {
            "name" : "Slow Exhale",
            "who" : "Marksman",
            "level" : 6,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Eagle-eyed",
            "fast" : true,
            "value" : 7,
            "modifyAmount" : 1,
            "minAmount" : 1,
            "maxAmount" : 1
        },
        {
            "name" : "Arrow of Destiny",
            "who" : "Marksman",
            "level" : 8,
            "spellPoints" : 5,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Strong",
            "fast" : true,
            "value" : 2,
            "modifyAmount" : 1,
            "minAmount" : 1,
            "maxAmount" : 1
        },
        {
            "name" : "Rain of Arrows",
            "who" : "Marksman",
            "level" : 10,
            "spellPoints" : 8,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Berserk",
            "fast" : true,
            "value" : 1,
            "minAmount" : 1,
            "maxAmount" : 1
        },
        // Ranger
        {
            "name" : "Field Medic",
            "who" : "Ranger",
            "level" : 6,
            "spellPoints" : 2,
            "type" : "heal",
            "target" : "touch",
            "fast" : true,
            "minAmount" : 2,
            "maxAmount" : 10,
            "modifyAmount" : 100
        },
        {
            "name" : "Summon Elf",
            "level" : 8,
            "who" : "Ranger",
            "spellPoints" : 5,
            "type" : "summon",
            "target" : "touch",
            "fast" : true,
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Elf Ranger"
        },
        {
            "name" : "Ancient Remedy",
            "level" : 10,
            "who" : "Ranger",
            "spellPoints" : 8,
            "fast" : true,
            "type" : "heal",
            "target" : "area",
            "animation" : "animSpellCast.png",
            "healType" : "remove",
            "minAmount" : 1,
            "maxAmount" : 1
        },
        // Rogue
        {
            "name" : "Lurk",
            "who" : "Rogue",
            "level" : 6,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Protected",
            "fast" : true,
            "value" : 10,
            "modifyAmount" : 1,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Poison Dart",
            "who" : "Rogue",
            "level" : 8,
            "spellPoints" : 4,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Poisoned",
            "fast" : true,
            "value" : 5,
            "minAmount" : 1,
            "maxAmount" : 5,
            "modifyAmount" : 1,
            "animation" : "animPoisonDart.png"
        },
        {
            "name" : "Shadow Sneak",
            "who" : "Rogue",
            "level" : 10,
            "spellPoints" : 3,
            "fast" : true,
            "type" : "teleport",
            "target" : "self",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 0
        },
        // Assassin
        {
            "name" : "Toxic Needle",
            "who" : "Assassin",
            "level" : 6,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Paralyzed",
            "fast" : true,
            "value" : 1,
            "minAmount" : 1,
            "maxAmount" : 2
        },
        {
            "name" : "Flaming Oil",
            "who" : "Assassin",
            "level" : 8,
            "spellPoints" : 4,
            "type" : "damage",
            "effect" : "Weakened",
            "target" : "area",
            "fast" : true,
            "minAmount" : 2,
            "maxAmount" : 9,
            "modifyAmount" : 100,
            "animation" : "animFireBall.png"
        },
        {
            "name" : "Touch of Death",
            "who" : "Assassin",
            "level" : 10,
            "spellPoints" : 7,
            "type" : "damage",
            "target" : "touch",
            "fast" : true,
            "minAmount" : 25,
            "maxAmount" : 60,
            "modifyAmount" : 200
        },

        //// Item/Creature Spells
        // "modifyAmount" is the amount that a bonus of +1 affects the amounts

        {
            "name" : "Basic Heal",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "target" : "self",
            "minAmount" : 2,
            "maxAmount" : 6,
            "modifyAmount" : 1
        },
        {
            "name" : "Kroga Heal",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "target" : "self",
            "fast" : true,
            "minAmount" : 20,
            "maxAmount" : 40,
            "modifyAmount" : 1
        },
        {
            "name" : "Good Heal",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "target" : "range",
            "minAmount" : 4,
            "maxAmount" : 10,
            "animation" : "animSpellCast.png",
            "modifyAmount" : 1
        },
        {
            "name" : "Normal Heal",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "target" : "self",
            "minAmount" : 5,
            "maxAmount" : 12,
            "fast" : true,
            "modifyAmount" : 1
        },
        {
            "name" : "Better Heal",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "target" : "self",
            "minAmount" : 4,
            "maxAmount" : 10,
            "modifyAmount" : 1
        },
        {
            "name" : "Merfolk Elixir",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "target" : "self",
            "fast" : true,
            "minAmount" : 4,
            "maxAmount" : 10,
            "modifyAmount" : 1
        },
        {
            "name" : "Even Better Heal",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "target" : "self",
            "minAmount" : 8,
            "maxAmount" : 18,
            "modifyAmount" : 2
        },
        {
            "name" : "Fast Heal",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "fast" : true,
            "target" : "self",
            "minAmount" : 12,
            "maxAmount" : 24,
            "modifyAmount" : 3
        },
        {
            "name" : "Best Heal",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "target" : "self",
            "minAmount" : 18,
            "maxAmount" : 36,
            "modifyAmount" : 4
        },
        {
            "name" : "Max Heal",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "target" : "self",
            "minAmount" : 50,
            "maxAmount" : 100,
            "modifyAmount" : 8
        },
        {
            "name" : "Wink",
            "level" : 1000,
            "spellPoints" : 2,
            "fast" : true,
            "type" : "teleport",
            "target" : "self",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 0
        },
        {
            "name" : "Portal",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "teleport",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 0
        },
        {
            "name" : "Fast Portal",
            "level" : 1000,
            "spellPoints" : 2,
            "fast" : true,
            "type" : "teleport",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 0
        },
        {
            "name" : "Cursed Slime",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 2,
            "maxAmount" : 6,
            "modifyAmount" : 1,
            "animation" : "animSlimeBall.png"
        },
        {
            "name" : "Hydro Blast",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 6,
            "maxAmount" : 12,
            "modifyAmount" : 1,
            "animation" : "animColdBallSmall.png"
        },
        {
            "name" : "Heedron Blast",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 12,
            "maxAmount" : 20,
            "modifyAmount" : 3,
            "animation" : "animColdBallSmall.png"
        },
        {
            "name" : "Dragon Fire",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 20,
            "maxAmount" : 45,
            "modifyAmount" : 3,
            "animation" : "animFireBall.png"
        },
        {
            "name" : "Bane Blast",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "damage",
            "target" : "touch",
            "minAmount" : 10,
            "maxAmount" : 30,
            "modifyAmount" : 3
        },
        {
            "name" : "Royal Slime",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 3,
            "maxAmount" : 6,
            "modifyAmount" : 1,
            "animation" : "animSlimeBall.png"
        },
        {
            "name" : "Electric Bolt",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 4,
            "maxAmount" : 10,
            "modifyAmount" : 1,
            "animation" : "animLightning.png"
        },
        {
            "name" : "Cloak Shock",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "touch",
            "minAmount" : 35,
            "maxAmount" : 70,
            "modifyAmount" : 3
        },
        {
            "name" : "Disrupt",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 25,
            "maxAmount" : 50,
            "modifyAmount" : 1,
            "animation" : "animBlackBallSmall.png"
        },
        {
            "name" : "Mystic Missile",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 1,
            "maxAmount" : 3,
            "modifyAmount" : 1,
            "animation" : "animHotBall.png"
        },
        {
            "name" : "Spark Blast",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 2,
            "maxAmount" : 9,
            "modifyAmount" : 1,
            "animation" : "animHotBall.png"
        },
        {
            "name" : "Mlonnix Blast",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "touch",
            "minAmount" : 21,
            "maxAmount" : 42,
            "modifyAmount" : 1
        },
        {
            "name" : "Test Area",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "damage",
            "target" : "area",
            "minAmount" : 1,
            "maxAmount" : 1,
            "modifyAmount" : 1,
            "animation" : "animHotBall.png"
        },
        {
            "name" : "Redeem",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "damage",
            "target" : "area",
            "minAmount" : 20,
            "maxAmount" : 45,
            "modifyAmount" : 4,
            "animation" : "animFireBall.png"
        },
        {
            "name" : "Dragon Blast",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "damage",
            "target" : "area",
            "minAmount" : 16,
            "maxAmount" : 34,
            "modifyAmount" : 4,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Aquatic Missile",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 2,
            "maxAmount" : 5,
            "modifyAmount" : 1,
            "animation" : "animColdBallSmall.png"
        },
        {
            "name" : "Reptilian Flash",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 1,
            "maxAmount" : 6,
            "modifyAmount" : 1,
            "animation" : "animHotBallSmall.png"
        },
        {
            "name" : "Lizard Blast",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 5,
            "maxAmount" : 11,
            "modifyAmount" : 1,
            "animation" : "animHotBallSmall.png"
        },
        {
            "name" : "Phantom Menace",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 2,
            "maxAmount" : 8,
            "modifyAmount" : 1,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Mind Flay",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 3,
            "maxAmount" : 6,
            "modifyAmount" : 1,
            "animation" : "animSpell4.png"
        },
        {
            "name" : "Righteous Missile",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 3,
            "maxAmount" : 12,
            "modifyAmount" : 1,
            "animation" : "animHotBallSmall.png"
        },
        {
            "name" : "Self Cure",
            "level" : 1000,
            "spellPoints" : 1,
            "fast" : true,
            "type" : "heal",
            "target" : "self",
            "healType" : "remove",
            "minAmount" : 1,
            "maxAmount" : 1,
            "modifyAmount" : 1
        },
        {
            "name" : "Range Cure",
            "level" : 1000,
            "spellPoints" : 1,
            "fast" : true,
            "type" : "heal",
            "target" : "range",
            "healType" : "remove",
            "minAmount" : 1,
            "maxAmount" : 1,
            "modifyAmount" : 1,
            "animation" : "animSpell4.png"
        },
        {
            "name" : "Basic Restore",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "healType" : "restore",
            "target" : "self",
            "minAmount" : 2,
            "maxAmount" : 6,
            "modifyAmount" : 1
        },
        {
            "name" : "Normal Restore",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "healType" : "restore",
            "target" : "self",
            "minAmount" : 3,
            "maxAmount" : 8,
            "modifyAmount" : 1
        },
        {
            "name" : "Better Restore",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "healType" : "restore",
            "target" : "self",
            "minAmount" : 6,
            "maxAmount" : 14,
            "modifyAmount" : 2
        },
        {
            "name" : "Fast Restore",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "healType" : "restore",
            "target" : "self",
            "fast" : true,
            "minAmount" : 7,
            "maxAmount" : 15,
            "modifyAmount" : 2
        },
        {
            "name" : "Best Restore",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "healType" : "restore",
            "target" : "self",
            "minAmount" : 12,
            "maxAmount" : 24,
            "modifyAmount" : 3
        },
        {
            "name" : "Max Restore",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "healType" : "restore",
            "target" : "self",
            "minAmount" : 36,
            "maxAmount" : 72,
            "modifyAmount" : 6
        },
        {
            "name" : "Summon Goblin",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Goblin"
        },
        {
            "name" : "Summon Imp2",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Imp"
        },
        {
            "name" : "Summon Oliphant 2",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Oliphant Sentry"
        },
        {
            "name" : "Summon Jade Golem",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Jade Golem"
        },
        {
            "name" : "Summon Charger",
            "level" : 1000,
            "spellPoints" : 2,
            "fast" : true,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Oliphant Charger"
        },
        {
            "name" : "Summon Brood Guard",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Brood Guard"
        },
        {
            "name" : "Summon Oliphant 3",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Oliphant"
        },
        {
            "name" : "Summon Giant Spider",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Giant Spider"
        },
        {
            "name" : "Summon Black Spider",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Black Spider"
        },
        {
            "name" : "Summon Swordfish",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Swordfish"
        },
        {
            "name" : "Summon Skeleton",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Skeleton Guard"
        },
        {
            "name" : "Summon Wraith",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Wraith"
        },
        {
            "name" : "Summon Wight",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Wight"
        },
        {
            "name" : "Summon Red Dragon",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Red Dragon"
        },
        {
            "name" : "Summon Spore",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Spore Soldier"
        },
        {
            "name" : "Summon Drone",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Mushroom Drone"
        },
        {
            "name" : "Summon Guard",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Kobold Guard"
        },
        {
            "name" : "Summon Mlonnix",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Mlonnix"
        },
        {
            "name" : "Summon Snake",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Giant Snake"
        },
        {
            "name" : "Summon Merman",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Merman"
        },
        {
            "name" : "Summon Cyclops",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Cyclops"
        },
        {
            "name" : "Summon Ice Golem",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Ice Golem"
        },
        {
            "name" : "Summon Flayer",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Mind Flayer"
        },
        {
            "name" : "Summon Clay Golem",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Clay Golem"
        },
        {
            "name" : "Summon Guardian",
            "level" : 1000,
            "spellPoints" : 2,
            "fast" : true,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Iron Golem"
        },
        {
            "name" : "Summon Ravenous Slime",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Ravenous Slime"
        },
        {
            "name" : "Summon Dragon2",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Golden Dragon"
        },
        {
            "name" : "Summon Snow Ogre",
            "level" : 1000,
            "spellPoints" : 6,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Snow Ogre"
        },
        {
            "name" : "Summon Phantom",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Phantom"
        },
        {
            "name" : "Summon Beholder",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Beholder"
        },
        {
            "name" : "Summon Shambling Mound",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "creature" : "Shambling Mound"
        },
        {
            "name" : "Summon Gargoyle Fast",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "fast" : true,
            "creature" : "Gargoyle"
        },
        {
            "name" : "Summon Black Dragon Fast",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "fast" : true,
            "creature" : "Black Dragon"
        },
        {
            "name" : "Summon Gargoyle",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "fast" : false,
            "creature" : "Gargoyle"
        },
        {
            "name" : "Summon Wyvern",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "summon",
            "target" : "touch",
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 1,
            "fast" : true,
            "creature" : "Wyvern"
        },
        {
            "name" : "Strike",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "damage",
            "target" : "touch",
            "minAmount" : 4,
            "maxAmount" : 11,
            "modifyAmount" : 2
        },
        {
            "name" : "Hellfire",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 22,
            "maxAmount" : 42,
            "modifyAmount" : 5,
            "animation" : "animFireBall.png"
        },
        {
            "name" : "Earth Shock",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "touch",
            "minAmount" : 6,
            "maxAmount" : 15,
            "modifyAmount" : 2
        },
        {
            "name" : "Thorn Stab",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "touch",
            "minAmount" : 4,
            "maxAmount" : 12,
            "modifyAmount" : 1
        },
        {
            "name" : "Blue Drain",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "drain",
            "target" : "touch",
            "value" : 50,
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 5
        },
        {
            "name" : "Blood Drain",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "drain",
            "target" : "touch",
            "value" : 50,
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 5
        },
        {
            "name" : "Bat Drain",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "drain",
            "target" : "touch",
            "value" : 75,
            "minAmount" : 0,
            "maxAmount" : 0,
            "modifyAmount" : 5
        },
        {
            "name" : "Test Drain",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "drain",
            "target" : "range",
            "minAmount" : 2,
            "maxAmount" : 5,
            "value" : 100,
            "modifyAmount" : 1,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Prism Drain",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "drain",
            "target" : "touch",
            "minAmount" : 25,
            "maxAmount" : 60,
            "value" : 75,
            "modifyAmount" : 5
        },
        {
            "name" : "Area Cure",
            "level" : 1000,
            "spellPoints" : 1,
            "fast" : true,
            "type" : "heal",
            "target" : "area",
            "animation" : "animSpellCast.png",
            "healType" : "remove",
            "minAmount" : 1,
            "maxAmount" : 1
        },
        {
            "name" : "Leech",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "drain",
            "target" : "range",
            "minAmount" : 14,
            "maxAmount" : 32,
            "value" : 65,
            "modifyAmount" : 1,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Self Strength",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Strong",
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Gladius Strength",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Strong",
            "fast" : true,
            "value" : 2,
            "minAmount" : 1,
            "maxAmount" : 3
        },
        {
            "name" : "Dwarf Strength",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Strong",
            "fast" : true,
            "value" : 2,
            "minAmount" : 1,
            "maxAmount" : 1
        },
        {
            "name" : "Refract",
            "level" : 1000,
            "spellPoints" : 3,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Resistant",
            "fast" : true,
            "value" : 10,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Aura of Luck",
            "level" : 1000,
            "spellPoints" : 3,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Resistant",
            "fast" : true,
            "value" : 9,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Field of Cold",
            "level" : 1000,
            "spellPoints" : 3,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Protected",
            "fast" : true,
            "value" : 2,
            "minAmount" : 1,
            "maxAmount" : 3
        },
        {
            "name" : "Self Speed",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Quick",
            "value" : 1,
            "minAmount" : 3,
            "maxAmount" : 7
        },
        {
            "name" : "Self Rage",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Berserk",
            "fast" : true,
            "value" : 1,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Fast Rage",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Berserk",
            "fast" : true,
            "value" : 1,
            "minAmount" : 1,
            "maxAmount" : 4
        },
        {
            "name" : "Freak Out",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Berserk",
            "fast" : true,
            "value" : 1,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Seriously Mad",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Berserk",
            "fast" : true,
            "value" : 1,
            "minAmount" : 1,
            "maxAmount" : 2
        },
        {
            "name" : "Eye Focus",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Eagle-eyed",
            "fast" : true,
            "value" : 10,
            "minAmount" : 1,
            "maxAmount" : 1
        },
        {
            "name" : "Nuth Focus",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Eagle-eyed",
            "fast" : true,
            "value" : 10,
            "minAmount" : 1,
            "maxAmount" : 2
        },
        {
            "name" : "Heal 1",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "heal",
            "target" : "self",
            "minAmount" : 1,
            "maxAmount" : 4,
            "modifyAmount" : 1,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Glomorg Heal",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "heal",
            "target" : "self",
            "fast": true,
            "minAmount" : 10,
            "maxAmount" : 25,
            "modifyAmount" : 1
        },
        {
            "name" : "Destiny Heal",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "heal",
            "target" : "self",
            "fast": true,
            "minAmount" : 25,
            "maxAmount" : 60,
            "modifyAmount" : 4
        },
        {
            "name" : "Heal 2",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "heal",
            "target" : "range",
            "minAmount" : 4,
            "maxAmount" : 10,
            "modifyAmount" : 3,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Weakening Bite",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Weakened",
            "value" : 2,
            "minAmount" : 1,
            "maxAmount" : 3
        },
        {
            "name" : "Weakening Acid",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Weakened",
            "value" : 2,
            "minAmount" : 1,
            "maxAmount" : 4
        },
        {
            "name" : "Demoralization",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Weakened",
            "value" : 2,
            "minAmount" : 1,
            "maxAmount" : 3
        },
        {
            "name" : "Undead Illness",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Weakened",
            "value" : 2,
            "minAmount" : 1,
            "maxAmount" : 3
        },
        {
            "name" : "Poison Touch",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Poisoned",
            "value" : 1,
            "minAmount" : 1,
            "maxAmount" : 4
        },
        {
            "name" : "Wasting",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Poisoned",
            "value" : 9,
            "minAmount" : 1,
            "maxAmount" : 3
        },
        {
            "name" : "Dragon Poison",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Poisoned",
            "value" : 6,
            "minAmount" : 1,
            "maxAmount" : 3
        },
        {
            "name" : "Poison Arrow",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Poisoned",
            "value" : 4,
            "minAmount" : 1,
            "maxAmount" : 4
        },
        {
            "name" : "Slowing Venom",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Sluggish",
            "value" : 5,
            "minAmount" : 1,
            "maxAmount" : 3
        },
        {
            "name" : "Fungal Trip",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Sluggish",
            "value" : 7,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Area Sluggish",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "area",
            "effect" : "Sluggish",
            "value" : 10,
            "minAmount" : 1,
            "maxAmount" : 3,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Glomorg Slow",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Sluggish",
            "fast" : true,
            "value" : 10,
            "minAmount" : 2,
            "maxAmount" : 4,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Nightmare Sluggish",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Sluggish",
            "fast" : true,
            "value" : 8,
            "minAmount" : 2,
            "maxAmount" : 4,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Kobold Focus",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "touch",
            "effect" : "Eagle-eyed",
            "value" : 5,
            "minAmount" : 3,
            "maxAmount" : 6
        },
        {
            "name" : "Elixir of Strength",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "touch",
            "effect" : "Strong",
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Memory of Abuse",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Strong",
            "fast" : true,
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 3
        },
        {
            "name" : "Gemini Strength",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Strong",
            "fast" : true,
            "value" : 2,
            "minAmount" : 1,
            "maxAmount" : 1
        },
        {
            "name" : "Poison Blade",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Poisoned",
            "value" : 2,
            "minAmount" : 1,
            "maxAmount" : 3
        },
        {
            "name" : "Jellyfish Sting",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Poisoned",
            "value" : 3,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Pachydermal Rage",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Berserk",
            "value" : 1,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Regenerate",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "heal",
            "fast" : true,
            "target" : "self",
            "minAmount" : 3,
            "maxAmount" : 8,
            "modifyAmount" : 1,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Major Regenerate",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "heal",
            "fast" : true,
            "target" : "self",
            "minAmount" : 10,
            "maxAmount" : 25,
            "modifyAmount" : 1,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Scare",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Paralyzed",
            "value" : 1,
            "minAmount" : 1,
            "maxAmount" : 1,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Orb Paralyze",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "area",
            "effect" : "Paralyzed",
            "animation" : "animLightning.png",
            "value" : 0,
            "minAmount" : 1,
            "maxAmount" : 2
        },
        {
            "name" : "Vial Paralyze",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "area",
            "fast" : true,
            "effect" : "Paralyzed",
            "animation" : "animGreenBall.png",
            "value" : 0,
            "minAmount" : 3,
            "maxAmount" : 6
        },
        {
            "name" : "Strangle",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Paralyzed",
            "value" : 1,
            "minAmount" : 1,
            "maxAmount" : 2,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Witchcraft",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Paralyzed",
            "fast" : true,
            "value" : 1,
            "minAmount" : 1,
            "maxAmount" : 2,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Beam of Paralysis",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Paralyzed",
            "value" : 1,
            "minAmount" : 1,
            "maxAmount" : 3,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Binding Silk",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Paralyzed",
            "value" : 1,
            "minAmount" : 1,
            "maxAmount" : 3
        },
        {
            "name" : "Crippling Fear",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Paralyzed",
            "value" : 1,
            "minAmount" : 1,
            "maxAmount" : 2
        },
        {
            "name" : "Web of Protection",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "touch",
            "effect" : "Protected",
            "value" : 5,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Justice Protect",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Protected",
            "fast" : true,
            "value" : 5,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Oyster Ointment",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "heal",
            "fast" : true,
            "target" : "touch",
            "minAmount" : 4,
            "maxAmount" : 10,
            "modifyAmount" : 1
        },
        {
            "name" : "Stone Heal",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "heal",
            "fast" : true,
            "target" : "self",
            "minAmount" : 5,
            "maxAmount" : 20,
            "modifyAmount" : 1
        },
        {
            "name" : "Speech Maniacal",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "range",
            "effect" : "Berserk",
            "value" : 1,
            "minAmount" : 2,
            "maxAmount" : 4,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Berserk Wish",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "range",
            "effect" : "Berserk",
            "value" : 1,
            "minAmount" : 2,
            "maxAmount" : 4,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Strong Wish",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "range",
            "effect" : "Strong",
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 4,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Blessed Wish",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "range",
            "effect" : "Blessed",
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 4,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Accurate Wish",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "range",
            "effect" : "Eagle-eyed",
            "value" : 10,
            "minAmount" : 2,
            "maxAmount" : 4,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Blast",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "damage",
            "target" : "range",
            "minAmount" : 8,
            "maxAmount" : 18,
            "modifyAmount" : 3,
            "animation" : "animColdBallSmall.png"
        },
        {
            "name" : "Tangle of Roots",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "area",
            "effect" : "Rooted",
            "fast" : false,
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 4,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Brood Trance",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "fast" : false,
            "effect" : "Eagle-eyed",
            "value" : 5,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Whithering Glare",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Weakened",
            "value" : 2,
            "minAmount" : 1,
            "maxAmount" : 4,
            "modifyAmount" : 1,
            "animation" : "animColdBallSmall.png"
        },
        {
            "name" : "Entwine",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Rooted",
            "value" : 2,
            "minAmount" : 1,
            "maxAmount" : 2,
            "modifyAmount" : 1
        },
        {
            "name" : "Weakening Ray",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Weakened",
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 6,
            "modifyAmount" : 1,
            "animation" : "animColdBallSmall.png"
        },
        {
            "name" : "Nightmare Weaken",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Weakened",
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 4,
            "modifyAmount" : 1,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Nightmare Rooted",
            "level" : 1000,
            "spellPoints" : 3,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Rooted",
            "value" : 1,
            "minAmount" : 2,
            "maxAmount" : 4,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Weakening Field",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "afflict",
            "target" : "area",
            "effect" : "Weakened",
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 4,
            "modifyAmount" : 1,
            "animation" : "animColdBallSmall.png"
        },
        {
            "name" : "Sickening Glow",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Poisoned",
            "value" : 3,
            "minAmount" : 1,
            "maxAmount" : 5,
            "modifyAmount" : 1,
            "animation" : "animColdBallSmall.png"
        },
        {
            "name" : "Lich Poison",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Poisoned",
            "fast" : true,
            "value" : 8,
            "minAmount" : 1,
            "maxAmount" : 4,
            "modifyAmount" : 2,
            "animation" : "animGreenBall.png"
        },
        {
            "name" : "Heal the Herd",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "heal",
            "fast" : true,
            "target" : "area",
            "minAmount" : 4,
            "maxAmount" : 9,
            "modifyAmount" : 1,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Friends",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "heal",
            "fast" : false,
            "target" : "area",
            "minAmount" : 8,
            "maxAmount" : 20,
            "modifyAmount" : 1,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Fungal Regrowth",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "heal",
            "fast" : false,
            "target" : "range",
            "minAmount" : 5,
            "maxAmount" : 12,
            "modifyAmount" : 1,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Vial Toss",
            "level" : 1000,
            "spellPoints" : 5,
            "type" : "damage",
            "target" : "area",
            "fast" : true,
            "minAmount" : 1,
            "maxAmount" : 5,
            "modifyAmount" : 1,
            "animation" : "animFireBall.png"
        },
        {
            "name" : "Fireball",
            "level" : 1000,
            "spellPoints" : 5,
            "type" : "damage",
            "target" : "area",
            "fast" : false,
            "minAmount" : 25,
            "maxAmount" : 50,
            "modifyAmount" : 4,
            "animation" : "animFireBall.png"
        },
        {
            "name" : "Enemies",
            "level" : 1000,
            "spellPoints" : 5,
            "type" : "damage",
            "target" : "area",
            "fast" : true,
            "minAmount" : 8,
            "maxAmount" : 18,
            "modifyAmount" : 1,
            "animation" : "animFireBall.png"
        },
        {
            "name" : "Kroga Blast",
            "level" : 1000,
            "spellPoints" : 5,
            "type" : "damage",
            "target" : "area",
            "minAmount" : 20,
            "maxAmount" : 40,
            "modifyAmount" : 1,
            "animation" : "animFireBall.png"
        },
        {
            "name" : "Vial Unmake",
            "level" : 1000,
            "spellPoints" : 5,
            "type" : "damage",
            "target" : "area",
            "fast" : true,
            "minAmount" : 18,
            "maxAmount" : 42,
            "modifyAmount" : 1,
            "animation" : "animFireBall.png"
        },
        {
            "name" : "Blast of Wrath",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "area",
            "minAmount" : 5,
            "maxAmount" : 15,
            "modifyAmount" : 1,
            "animation" : "animFireBall.png"
        },
        {
            "name" : "Fire",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "area",
            "minAmount" : 8,
            "maxAmount" : 20,
            "modifyAmount" : 2,
            "animation" : "animFireBall.png"
        },
        {
            "name" : "Destroy",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "damage",
            "target" : "area",
            "minAmount" : 25,
            "maxAmount" : 40,
            "modifyAmount" : 3,
            "animation" : "animLightning.png"
        },
        {
            "name" : "Staff Paralyze",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Paralyzed",
            "value" : 0,
            "minAmount" : 1,
            "maxAmount" : 3
        },
        {
            "name" : "Aura of Death",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "area",
            "effect" : "Paralyzed",
            "animation" : "animSpellCast.png",
            "value" : 0,
            "minAmount" : 1,
            "maxAmount" : 3
        },
        {
            "name" : "Kroga Paralyze",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "area",
            "effect" : "Paralyzed",
            "animation" : "animSpellCast.png",
            "value" : 0,
            "minAmount" : 1,
            "maxAmount" : 2
        },
        {
            "name" : "Blinding Spores",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Blinded",
            "value" : 6,
            "minAmount" : 1,
            "maxAmount" : 3,
            "modifyAmount" : 1
        },
        {
            "name" : "Jylix Blind",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Blinded",
            "value" : 8,
            "minAmount" : 1,
            "maxAmount" : 3,
            "modifyAmount" : 1
        },
        {
            "name" : "Whiteout",
            "level" : 1000,
            "spellPoints" : 3,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Blinded",
            "value" : 8,
            "minAmount" : 2,
            "maxAmount" : 4,
            "modifyAmount" : 1,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Nightmare Blind",
            "level" : 1000,
            "spellPoints" : 3,
            "type" : "afflict",
            "target" : "range",
            "effect" : "Blinded",
            "value" : 8,
            "fast" : true,
            "minAmount" : 1,
            "maxAmount" : 3,
            "modifyAmount" : 1,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Frozen Armor",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Protected",
            "value" : 5,
            "fast" : true,
            "minAmount" : 2,
            "maxAmount" : 3
        },
        {
            "name" : "Ice Snap",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Berserk",
            "fast" : true,
            "value" : 1,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Feline Divinity",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Blessed",
            "fast" : true,
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 3
        },
        {
            "name" : "Fast Bless",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Blessed",
            "fast" : true,
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Fast Touch Bless",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "touch",
            "effect" : "Blessed",
            "fast" : true,
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Vampire Bless",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "self",
            "effect" : "Blessed",
            "fast" : true,
            "value" : 3,
            "minAmount" : 2,
            "maxAmount" : 3
        },
        {
            "name" : "Rally of Might",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "area",
            "effect" : "Strong",
            "fast" : true,
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 4,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Aura of Blessing",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "enhance",
            "target" : "area",
            "effect" : "Blessed",
            "fast" : false,
            "value" : 2,
            "minAmount" : 2,
            "maxAmount" : 3,
            "animation" : "animSpellCast.png"
        },
        {
            "name" : "Hailstorm",
            "level" : 1000,
            "spellPoints" : 7,
            "type" : "damage",
            "target" : "area",
            "minAmount" : 4,
            "maxAmount" : 10,
            "modifyAmount" : 1,
            "animation" : "animColdBallSmall.png"
        },
        {
            "name" : "Unholy Miasma",
            "level" : 1000,
            "spellPoints" : 6,
            "type" : "afflict",
            "target" : "area",
            "effect" : "Poisoned",
            "animation" : "animBlackBallSmall.png",
            "value" : 5,
            "minAmount" : 2,
            "maxAmount" : 4
        },
        {
            "name" : "Ice Wall",
            "level" : 1000,
            "spellPoints" : 0,
            "type" : "afflict",
            "target" : "area",
            "minAmount" : 1,
            "maxAmount" : 2,
            "effect" : "Paralyzed",
            "value" : 1,
            "modifyAmount" : 1,
            "animation" : "animColdBallSmall.png"
        }
    ],

    //// Items

    items : [
        //// Level 1
        {
            "name" : "Short Sword",
            "type" : "weapon",
            "icon" : "shortSword.png",
            "rarity" : 900,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 4,
            "baseValue" : 12,
            "level" : 1,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Crude Club",
            "type" : "weapon",
            "icon" : "club.png",
            "rarity" : 1500,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 3,
            /*
            "rangeMinDamage" : 2, // TEMP
            "rangeMaxDamage" : 5, // TEMP
            "target" : "area", // TEMP
            "rangeAnimation" : "animFireBall.png", // TEMP
            */
            "baseValue" : 6,
            "level" : 1,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Goblin Scimitar",
            "type" : "weapon",
            "icon" : "scimitar.png",
            "rarity" : 1000,
            "groups" : ["goblin", "kobold"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 6,
            "toHitBonus" : -2,
            "baseValue" : 8,
            "level" : 1,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Sling",
            "type" : "weapon",
            "icon" : "sling.png",
            "rarity" : 1500,
            "groups" : ["default", "weapon"],
            "rangeMinDamage" : 1,
            "rangeMaxDamage" : 2,
            "baseValue" : 8,
            "level" : 1,
            "rangeAnimation" : "animRockSmall1.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Short Bow",
            "type" : "weapon",
            "icon" : "shortBow2.png",
            "rarity" : 900,
            "groups" : ["default", "weapon"],
            "rangeMinDamage" : 1,
            "rangeMaxDamage" : 3,
            "baseValue" : 15,
            "level" : 1,
            "rangeAnimation" : "animArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Goblin Crossbow",
            "type" : "weapon",
            "icon" : "crossbow3.png",
            "rarity" : 1000,
            "groups" : ["goblin", "kobold"],
            "rangeMinDamage" : 2,
            "rangeMaxDamage" : 4,
            "toHitBonus" : -2,
            "baseValue" : 12,
            "level" : 1,
            "rangeAnimation" : "animArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Short Staff",
            "type" : "weapon",
            "icon" : "shortStaff.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 2,
            "baseValue" : 5,
            "level" : 1,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Leather Armor",
            "type" : "armor",
            "icon" : "leatherArmor.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 2,
            "baseValue" : 18,
            "level" : 1,
            "usedBy" : ["warrior", "archer"]
        },
        {
            "name" : "Cloak",
            "type" : "armor",
            "icon" : "cloak.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 1,
            "baseValue" : 9,
            "level" : 1,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Leather Shield",
            "type" : "shield",
            "icon" : "leatherShield.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 1,
            "baseValue" : 6,
            "level" : 1,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Leather Helm",
            "type" : "hat",
            "icon" : "leatherHelm.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 1,
            "baseValue" : 8,
            "level" : 1,
            "usedBy" : ["warrior", "archer"]
        },
        {
            "name" : "Leather Boots",
            "type" : "boots",
            "icon" : "leatherBoots2.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 1,
            "baseValue" : 10,
            "level" : 1,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Healing Salve",
            "type" : "use",
            "icon" : "redSalve.png",
            "rarity" : 2500,
            "groups" : ["default", "potion", "elf"],
            "spell" : "Basic Heal",
            "chargesMin" : 1,
            "chargesMax" : 4,
            "baseValue" : 4,
            "level" : 1,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Imp Talisman",
            "type" : "use",
            "icon" : "impTalisman.png",
            "rarity" : 200,
            "groups" : ["default", "misc"],
            "spell" : "Summon Imp2",
            "chargesMin" : 1,
            "chargesMax" : 1,
            "baseValue" : 8,
            "level" : 1,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Staff of Weakening",
            "type" : "weapon",
            "icon" : "weakStaff.png",
            "legendary" : "#c4d21d",
            "rarity" : 50,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 3,
            "baseValue" : 50,
            "level" : 1,
            "combatSpell" : "Weakening Ray",
            "usedBy" : ["mage"]
        },
        //// Level 2
        {
            "name" : "Apprentice Hat",
            "type" : "hat",
            "icon" : "wizardHat1.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 1,
            "resistance" : 1,
            "baseValue" : 22,
            "level" : 2,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Helm of Clarity",
            "type" : "hat",
            "icon" : "blueGemHelm.png",
            "legendary" : "#909af0",
            "rarity" : 50,
            "groups" : ["default", "armor"],
            "armorClass" : 2,
            "accuracyBonus" : 4,
            "baseValue" : 90,
            "level" : 2,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Gorba's Cloak",
            "type" : "armor",
            "icon" : "gorbaCloak.png",
            "legendary" : "#3ab803",
            "rarity" : 0,
            "groups" : ["default", "armor"],
            "armorClass" : 2,
            "baseValue" : 98,
            "level" : 2,
            "combatSpell" : "Summon Guard",
            "usedBy" : ["mage"]
        },
        {
            "name" : "Snake Flute",
            "type" : "use",
            "icon" : "flute.png",
            "rarity" : 200,
            "groups" : ["default", "misc"],
            "spell" : "Summon Snake",
            "chargesMin" : 1,
            "chargesMax" : 4,
            "baseValue" : 10,
            "level" : 2,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Coral Helm",
            "type" : "hat",
            "icon" : "coralHelm.png",
            "rarity" : 1000,
            "groups" : ["water"],
            "armorClass" : 2,
            "baseValue" : 35,
            "level" : 2,
            "usedBy" : ["warrior", "archer"]
        },
        {
            "name" : "Fish-oil Salve",
            "type" : "use",
            "icon" : "yellowSalve.png",
            "rarity" : 1000,
            "groups" : ["water"],
            "spell" : "Better Heal",
            "chargesMin" : 2,
            "chargesMax" : 10,
            "baseValue" : 4,
            "level" : 2,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Wand of Striking",
            "type" : "use",
            "icon" : "blueWand2.png",
            "rarity" : 300,
            "groups" : ["default", "misc"],
            "spell" : "Strike",
            "chargesMin" : 1,
            "chargesMax" : 4,
            "baseValue" : 5,
            "level" : 2,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Goblin Staff",
            "type" : "weapon",
            "icon" : "staff2.png",
            "rarity" : 1000,
            "groups" : ["goblin", "kobold"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 6,
            "toHitBonus" : -1,
            "baseValue" : 12,
            "level" : 2,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Long Sword",
            "type" : "weapon",
            "icon" : "equipWeapon.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 8,
            "baseValue" : 20,
            "level" : 2,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Long Bow",
            "type" : "weapon",
            "icon" : "bow.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "rangeMinDamage" : 1,
            "rangeMaxDamage" : 5,
            "baseValue" : 35,
            "level" : 2,
            "rangeAnimation" : "animArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Long Staff",
            "type" : "weapon",
            "icon" : "staff.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 4,
            "baseValue" : 15,
            "level" : 2,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Studded Armor",
            "type" : "armor",
            "icon" : "studdedArmor.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 3,
            "baseValue" : 36,
            "level" : 2,
            "usedBy" : ["warrior", "archer"]
        },
        {
            "name" : "Iron Shield",
            "type" : "shield",
            "icon" : "ironShield.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 2,
            "baseValue" : 26,
            "level" : 2,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Iron Helm",
            "type" : "hat",
            "icon" : "equipHat.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 2,
            "baseValue" : 30,
            "level" : 2,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Energy Salve",
            "type" : "use",
            "icon" : "blueSalve.png",
            "rarity" : 2500,
            "groups" : ["default", "potion", "elf"],
            "spell" : "Basic Restore",
            "chargesMin" : 1,
            "chargesMax" : 6,
            "baseValue" : 5,
            "level" : 2,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        //// LEVEL 3
        {
            "name" : "Wand of Healing",
            "type" : "use",
            "icon" : "yellowWand.png",
            "rarity" : 400,
            "groups" : ["default", "misc", "elf"],
            "spell" : "Good Heal",
            "chargesMin" : 2,
            "chargesMax" : 6,
            "baseValue" : 6,
            "level" : 3,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Seaweed Armor",
            "type" : "armor",
            "icon" : "seaweedArmor.png",
            "rarity" : 1000,
            "groups" : ["water"],
            "armorClass" : 4,
            "baseValue" : 55,
            "level" : 3,
            "usedBy" : ["warrior", "archer"]
        },
        {
            "name" : "Merman Shield",
            "type" : "shield",
            "icon" : "mermanShield.png",
            "rarity" : 1000,
            "groups" : ["water"],
            "armorClass" : 3,
            "baseValue" : 45,
            "level" : 3,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Enchanted Skull",
            "type" : "use",
            "icon" : "skull.png",
            "rarity" : 200,
            "groups" : ["undead", "misc"],
            "spell" : "Summon Skeleton",
            "chargesMin" : 2,
            "chargesMax" : 5,
            "baseValue" : 15,
            "level" : 3,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Healing Potion",
            "type" : "use",
            "icon" : "redPotion.png",
            "rarity" : 2500,
            "groups" : ["default", "potion", "elf"],
            "spell" : "Even Better Heal",
            "chargesMin" : 2,
            "chargesMax" : 6,
            "baseValue" : 10,
            "level" : 3,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Broadsword",
            "type" : "weapon",
            "icon" : "sword2.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 10,
            "toHitBonus" : 1,
            "baseValue" : 35,
            "level" : 3,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Heavy Axe",
            "type" : "weapon",
            "icon" : "axe2.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 12,
            "baseValue" : 32,
            "level" : 3,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Fine Bow",
            "type" : "weapon",
            "icon" : "shortBow.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon", "elf"],
            "rangeMinDamage" : 2,
            "rangeMaxDamage" : 7,
            "toHitBonus" : 2,
            "baseValue" : 60,
            "level" : 3,
            "rangeAnimation" : "animArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Heavy Crossbow",
            "type" : "weapon",
            "icon" : "crossbow2.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "rangeMinDamage" : 3,
            "rangeMaxDamage" : 9,
            "baseValue" : 55,
            "level" : 3,
            "rangeAnimation" : "animArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Long Oak Staff",
            "type" : "weapon",
            "icon" : "hookedStaff.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon", "elf"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 6,
            "toHitBonus" : 1,
            "awarenessBonus" : 1,
            "baseValue" : 50,
            "level" : 3,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Coral Staff",
            "type" : "weapon",
            "icon" : "coralStaff.png",
            "rarity" : 1000,
            "groups" : ["water"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 7,
            "baseValue" : 45,
            "level" : 3,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Chain Mail Armor",
            "type" : "armor",
            "icon" : "equipArmor.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 4,
            "baseValue" : 60,
            "level" : 3,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Elvish Cloak",
            "type" : "armor",
            "icon" : "elvishCloak.png",
            "rarity" : 1000,
            "groups" : ["default", "armor", "elf"],
            "armorClass" : 2,
            "baseValue" : 48,
            "level" : 3,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Amulet of Protection",
            "type" : "amulet",
            "icon" : "equipAmulet.png",
            "rarity" : 1000,
            "groups" : ["default", "misc", "elf"],
            "armorClass" : 1,
            "baseValue" : 45,
            "level" : 3,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Narwhal Sword",
            "type" : "weapon",
            "icon" : "coralSword.png",
            "rarity" : 400,
            "groups" : ["water"],
            "meleeMinDamage" : 5,
            "meleeMaxDamage" : 10,
            "accuracyBonus" : 1,
            "baseValue" : 50,
            "level" : 3,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Goblinhyde Boots",
            "legendary" : "#809948",
            "type" : "boots",
            "icon" : "goblinBoots.png",
            "rarity" : 0,
            "groups" : ["default", "armor"],
            "armorClass" : 2,
            "resistance" : 2,
            "baseValue" : 150,
            "level" : 3,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Bow of Illness",
            "legendary" : "#bfc387",
            "type" : "weapon",
            "icon" : "bowOfIllness.png",
            "rarity" : 0,
            "groups" : ["default", "weapon"],
            "rangeMinDamage" : 3,
            "rangeMaxDamage" : 9,
            "toHitBonus" : 1,
            "baseValue" : 200,
            "level" : 4,
            "rangeAnimation" : "animArrow.png",
            "hitSpell" : "Poison Arrow",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Potion of Strength",
            "type" : "use",
            "icon" : "strengthPotion.png",
            "rarity" : 500,
            "groups" : ["default", "potion"],
            "spell" : "Self Strength",
            "chargesMin" : 2,
            "chargesMax" : 4,
            "baseValue" : 9,
            "level" : 3,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Potion of Speed",
            "type" : "use",
            "icon" : "speedPotion.png",
            "rarity" : 500,
            "groups" : ["default", "potion"],
            "spell" : "Self Speed",
            "chargesMin" : 2,
            "chargesMax" : 4,
            "baseValue" : 11,
            "level" : 3,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        //// Level 4
        {
            "name" : "Energy Potion",
            "type" : "use",
            "icon" : "bluePotion2.png",
            "rarity" : 2500,
            "groups" : ["default", "potion", "elf"],
            "spell" : "Better Restore",
            "chargesMin" : 2,
            "chargesMax" : 6,
            "baseValue" : 12,
            "level" : 4,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Curing Potion",
            "type" : "use",
            "icon" : "yellowPotion.png",
            "rarity" : 500,
            "groups" : ["default", "potion", "elf"],
            "spell" : "Self Cure",
            "chargesMin" : 3,
            "chargesMax" : 8,
            "baseValue" : 10,
            "level" : 4,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Merman Talisman",
            "type" : "use",
            "icon" : "mermanTalisman.png",
            "rarity" : 200,
            "groups" : ["water"],
            "spell" : "Summon Merman",
            "chargesMin" : 2,
            "chargesMax" : 6,
            "baseValue" : 20,
            "level" : 4,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Seaweed Cloak",
            "type" : "armor",
            "icon" : "seaweedCloak.png",
            "rarity" : 1000,
            "groups" : ["water"],
            "armorClass" : 4,
            "baseValue" : 90,
            "level" : 4,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Wand of Blasting",
            "type" : "use",
            "icon" : "blueWand2.png",
            "rarity" : 1000,
            "groups" : ["default"],
            "spell" : "Blast",
            "chargesMin" : 2,
            "chargesMax" : 10,
            "baseValue" : 10,
            "level" : 4,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Battle-axe",
            "type" : "weapon",
            "icon" : "battleAxe.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 5,
            "meleeMaxDamage" : 14,
            "baseValue" : 70,
            "level" : 4,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Great Sword",
            "type" : "weapon",
            "icon" : "sword.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 4,
            "meleeMaxDamage" : 12,
            "toHitBonus" : 2,
            "baseValue" : 75,
            "level" : 4,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Elvish Staff",
            "type" : "weapon",
            "icon" : "elvishStaff.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon", "elf"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 8,
            "toHitBonus" : 2,
            "awarenessBonus" : 1,
            "baseValue" : 90,
            "level" : 4,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Spark Staff",
            "type" : "weapon",
            "legendary" : "#ff7da8",
            "icon" : "sparkStaff.png",
            "rarity" : 35,
            "groups" : ["default", "weapon", "elf"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 8,
            "toHitBonus" : 1,
            "awarenessBonus" : 1,
            "baseValue" : 290,
            "level" : 4,
            "combatSpell" : "Spark Blast",
            "usedBy" : ["mage"]
        },
        {
            "name" : "Elvish Bow",
            "type" : "weapon",
            "icon" : "greenBow.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon", "elf"],
            "rangeMinDamage" : 3,
            "rangeMaxDamage" : 10,
            "toHitBonus" : 3,
            "baseValue" : 100,
            "level" : 4,
            "rangeAnimation" : "animArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Elvish Armor",
            "type" : "armor",
            "icon" : "elvishArmor.png",
            "rarity" : 1000,
            "groups" : ["default", "armor", "elf"],
            "armorClass" : 4,
            "baseValue" : 90,
            "level" : 4,
            "usedBy" : ["warrior", "archer"]
        },
        {
            "name" : "Spiked Shield",
            "type" : "shield",
            "icon" : "equipShield.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 3,
            "baseValue" : 70,
            "level" : 4,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Great Helm",
            "type" : "hat",
            "icon" : "greatHelm.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 3,
            "baseValue" : 80,
            "level" : 4,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Amulet of Thought",
            "type" : "amulet",
            "icon" : "amulet.png",
            "rarity" : 1000,
            "groups" : ["default", "misc"],
            "awarenessBonus" : 2,
            "baseValue" : 100,
            "level" : 4,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Amulet of Precision",
            "type" : "amulet",
            "icon" : "amulet3.png",
            "rarity" : 1000,
            "groups" : ["default", "misc"],
            "accuracyBonus" : 2,
            "baseValue" : 100,
            "level" : 4,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Amulet of Might",
            "type" : "amulet",
            "icon" : "amulet2.png",
            "rarity" : 1000,
            "groups" : ["default", "misc"],
            "strengthBonus" : 2,
            "baseValue" : 100,
            "level" : 4,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Sharkbone Bow",
            "type" : "weapon",
            "icon" : "sharkBow.png",
            "rarity" : 500,
            "groups" : ["water"],
            "rangeMinDamage" : 5,
            "rangeMaxDamage" : 12,
            "toHitBonus" : 2,
            "baseValue" : 150,
            "level" : 4,
            "rangeAnimation" : "animArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Elvish Hat",
            "type" : "hat",
            "icon" : "elvishHat.png",
            "rarity" : 800,
            "groups" : ["default", "armor", "elf"],
            "armorClass" : 2,
            "resistance" : 2,
            "awareness" : 1,
            "baseValue" : 123,
            "level" : 4,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Elvish Boots",
            "type" : "boots",
            "icon" : "elvishBoots.png",
            "rarity" : 1000,
            "groups" : ["default", "armor", "elf"],
            "armorClass" : 2,
            "baseValue" : 80,
            "level" : 4,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Merfolk Regalia",
            "legendary" : "#c09bd5",
            "type" : "armor",
            "icon" : "mermanRegalia.png",
            "rarity" : 30,
            "groups" : ["water"],
            "armorClass" : 4,
            "resistance" : 2,
            "combatSpell" : "Merfolk Elixir",
            "baseValue" : 205,
            "level" : 3,
            "usedBy" : ["warrior", "archer"]
        },

        //// Level 5
        {
            "name" : "Military Boots",
            "type" : "boots",
            "icon" : "militaryBoots.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 3,
            "baseValue" : 130,
            "level" : 5,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Explosive Vial",
            "type" : "use",
            "icon" : "explosiveVial.png",
            "rarity" : 800,
            "groups" : ["default", "potion", "water"],
            "spell" : "Vial Toss",
            "chargesMin" : 3,
            "chargesMax" : 9,
            "baseValue" : 19,
            "level" : 5,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Anti-Magic Amulet",
            "type" : "amulet",
            "icon" : "amulet12.png",
            "rarity" : 800,
            "groups" : ["default", "misc"],
            "resistance" : 2,
            "baseValue" : 140,
            "level" : 5,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Serpentine Robes",
            "type" : "armor",
            "icon" : "serpentRobes.png",
            "rarity" : 333,
            "groups" : ["default", "armor"],
            "armorClass" : 4,
            "resistance" : 2,
            "baseValue" : 160,
            "level" : 5,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Shield of Thorns",
            "legendary" : "#94b980",
            "type" : "shield",
            "icon" : "thornShield.png",
            "rarity" : 45,
            "groups" : ["swamp"],
            "armorClass" : 3,
            "resistance" : 1,
            "combatSpell" : "Thorn Stab",
            "baseValue" : 245,
            "level" : 4,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Magic Sword",
            "type" : "weapon",
            "icon" : "magicSword.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 18,
            "toHitBonus" : 3,
            "baseValue" : 175,
            "level" : 5,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Hydrosword",
            "type" : "weapon",
            "legendary" : "#5d66cc",
            "icon" : "itemWaterSword.png",
            "rarity" : 0,
            "groups" : ["water"],
            "meleeMinDamage" : 4,
            "meleeMaxDamage" : 18,
            "toHitBonus" : 1,
            "resistance" : 1,
            "baseValue" : 520,
            "level" : 5,
            "combatSpell" : "Hydro Blast",
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Dark Sword",
            "type" : "weapon",
            "icon" : "blackSword.png",
            "rarity" : 300,
            "groups" : ["undead"],
            "meleeMinDamage" : 5,
            "meleeMaxDamage" : 25,
            "toHitBonus" : 3,
            "constitutionBonus" : -5,
            "baseValue" : 200,
            "level" : 5,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Magic Bow",
            "type" : "weapon",
            "icon" : "magicBow.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "rangeMinDamage" : 4,
            "rangeMaxDamage" : 12,
            "toHitBonus" : 3,
            "baseValue" : 175,
            "level" : 5,
            "rangeAnimation" : "animArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Dark Bow",
            "type" : "weapon",
            "icon" : "blackBow.png",
            "rarity" : 300,
            "groups" : ["undead"],
            "rangeMinDamage" : 6,
            "rangeMaxDamage" : 18,
            "toHitBonus" : 2,
            "constitutionBonus" : -5,
            "baseValue" : 210,
            "level" : 5,
            "rangeAnimation" : "animArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Magic Staff",
            "type" : "weapon",
            "icon" : "blueStaff.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 10,
            "rangeMinDamage" : 1,
            "rangeMaxDamage" : 5,
            "rangeAnimation" : "animSpell4.png",
            "toHitBonus" : 3,
            "awarenessBonus" : 2,
            "baseValue" : 195,
            "level" : 5,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Dark Staff",
            "type" : "weapon",
            "icon" : "blackStaff.png",
            "rarity" : 300,
            "groups" : ["undead"],
            "meleeMinDamage" : 4,
            "meleeMaxDamage" : 12,
            "rangeMinDamage" : 2,
            "rangeMaxDamage" : 6,
            "rangeAnimation" : "animBlackBallSmall.png",
            "toHitBonus" : 2,
            "constitutionBonus" : -8,
            "awarenessBonus" : 2,
            "baseValue" : 255,
            "level" : 5,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Jewel of Health",
            "type" : "use",
            "icon" : "redGem.png",
            "rarity" : 2500,
            "groups" : ["default", "potion", "water"],
            "spell" : "Best Heal",
            "chargesMin" : 2,
            "chargesMax" : 5,
            "baseValue" : 45,
            "level" : 5,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Scale Mail Armor",
            "type" : "armor",
            "icon" : "scaleArmor.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 5,
            "baseValue" : 150,
            "level" : 5,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Elvish Helm",
            "type" : "hat",
            "icon" : "elvishHelm.png",
            "rarity" : 1000,
            "groups" : ["default", "armor", "elf"],
            "armorClass" : 3,
            "resistance" : 1,
            "baseValue" : 140,
            "level" : 5,
            "usedBy" : ["warrior", "archer"]
        },
        {
            "name" : "Amulet of Sight",
            "type" : "amulet",
            "icon" : "amulet7.png",
            "rarity" : 1000,
            "groups" : ["default", "misc", "water"],
            "accuracyBonus" : 4,
            "baseValue" : 150,
            "level" : 5,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Amulet of Life",
            "type" : "amulet",
            "icon" : "amulet4.png",
            "rarity" : 1000,
            "groups" : ["default", "misc", "water"],
            "constitutionBonus" : 5,
            "baseValue" : 150,
            "level" : 5,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Oliphant Talisman",
            "type" : "use",
            "icon" : "oliphantTalisman.png",
            "rarity" : 500,
            "groups" : ["default", "misc"],
            "spell" : "Summon Oliphant 2",
            "chargesMin" : 2,
            "chargesMax" : 4,
            "baseValue" : 35,
            "level" : 5,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Brood Figurine",
            "type" : "use",
            "icon" : "broodStatue.png",
            "rarity" : 500,
            "groups" : ["swamp"],
            "spell" : "Summon Brood Guard",
            "chargesMin" : 2,
            "chargesMax" : 4,
            "baseValue" : 36,
            "level" : 5,
            "usedBy" : ["warrior", "archer", "mage"]
        },

        //// Level 6
        {
            "name" : "Flamberge",
            "type" : "weapon",
            "icon" : "flamberge2.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 8,
            "meleeMaxDamage" : 17,
            "toHitBonus" : 3,
            "accuracyBonus" : 2,
            "baseValue" : 255,
            "level" : 6,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Potion of Rage",
            "type" : "use",
            "icon" : "ragePotion.png",
            "rarity" : 500,
            "groups" : ["default", "potion", "water"],
            "spell" : "Self Rage",
            "chargesMin" : 3,
            "chargesMax" : 7,
            "baseValue" : 35,
            "level" : 6,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Blink Gem",
            "type" : "use",
            "icon" : "turqoiseGem.png",
            "rarity" : 750,
            "groups" : ["default", "potion", "water"],
            "spell" : "Wink",
            "chargesMin" : 2,
            "chargesMax" : 5,
            "baseValue" : 41,
            "level" : 6,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Staff of Wrath",
            "legendary" : "#ff0066",
            "type" : "weapon",
            "icon" : "staffOfWrath.png",
            "rarity" : 0,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 4,
            "meleeMaxDamage" : 12,
            "toHitBonus" : 4,
            "awarenessBonus" : 2,
            "strengthBonus" : 1,
            "baseValue" : 625,
            "combatSpell" : "Blast of Wrath",
            "level" : 6,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Bow of Rooting",
            "legendary" : "#cdaa7b",
            "type" : "weapon",
            "icon" : "bowOfRooting.png",
            "rarity" : 30,
            "groups" : ["default", "weapon"],
            "rangeMinDamage" : 5,
            "rangeMaxDamage" : 13,
            "toHitBonus" : 3,
            "baseValue" : 640,
            "hitSpell" : "Entwine",
            "level" : 6,
            "rangeAnimation" : "animRootArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Third Eye Amulet",
            "legendary" : "#bbc9ff",
            "type" : "amulet",
            "icon" : "eyeAmulet.png",
            "rarity" : 30,
            "groups" : ["default", "misc"],
            "accuracyBonus" : 4,
            "armorClass" : 1,
            "resistance" : 1,
            "combatSpell" : "Eye Focus",
            "baseValue" : 745,
            "level" : 6,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Wand of Fire",
            "type" : "use",
            "icon" : "redWand2.png",
            "rarity" : 400,
            "groups" : ["default", "misc"],
            "spell" : "Fire",
            "chargesMin" : 2,
            "chargesMax" : 5,
            "baseValue" : 80,
            "level" : 6,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Wand of Blessing",
            "type" : "use",
            "icon" : "whiteWand.png",
            "rarity" : 500,
            "groups" : ["default", "misc", "water"],
            "spell" : "Aura of Blessing",
            "chargesMin" : 2,
            "chargesMax" : 5,
            "baseValue" : 65,
            "level" : 6,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Wand of Paralysis",
            "type" : "use",
            "icon" : "redWand.png",
            "rarity" : 500,
            "groups" : ["default", "misc", "water"],
            "spell" : "Beam of Paralysis",
            "chargesMin" : 3,
            "chargesMax" : 8,
            "baseValue" : 56,
            "level" : 6,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Speed Boots",
            "type" : "boots",
            "icon" : "speedBoots.png",
            "rarity" : 800,
            "groups" : ["default", "armor"],
            "armorClass" : 3,
            "baseValue" : 290,
            "extraMoves" : 1,
            "level" : 6,
            "usedBy" : ["warrior", "archer"]
        },
        {
            "name" : "Sheepskin Boots",
            "type" : "boots",
            "icon" : "winterBoots.png",
            "rarity" : 1000,
            "groups" : ["tundra", "armor"],
            "armorClass" : 3,
            "constitutionBonus" : 3,
            "baseValue" : 265,
            "level" : 6,
            "usedBy" : ["warrior", "archer"]
        },
        {
            "name" : "Archer's Helm",
            "type" : "hat",
            "icon" : "enchantedHelm.png",
            "rarity" : 750,
            "groups" : ["default", "armor"],
            "armorClass" : 4,
            "resistance" : 2,
            "baseValue" : 305,
            "level" : 6,
            "usedBy" : ["archer"]
        },
        {
            "name" : "Wizard Hat",
            "type" : "hat",
            "icon" : "wizardHat2.png",
            "rarity" : 500,
            "groups" : ["default", "armor", "elf"],
            "armorClass" : 3,
            "resistance" : 3,
            "awareness" : 2,
            "baseValue" : 318,
            "level" : 6,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Ogre Talisman",
            "type" : "use",
            "icon" : "ogreTalisman.png",
            "rarity" : 200,
            "groups" : ["default", "misc"],
            "spell" : "Summon Ogre",
            "chargesMin" : 2,
            "chargesMax" : 3,
            "baseValue" : 120,
            "level" : 6,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Jewel of Energy",
            "type" : "use",
            "icon" : "blueGem.png",
            "rarity" : 2500,
            "groups" : ["default", "potion", "water"],
            "spell" : "Best Restore",
            "chargesMin" : 3,
            "chargesMax" : 6,
            "baseValue" : 70,
            "level" : 6,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Embroidered Cloak",
            "type" : "armor",
            "icon" : "embroideredCloak.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 5,
            "resistance" : 2,
            "baseValue" : 330,
            "level" : 6,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Tempered Shield",
            "type" : "shield",
            "icon" : "forceShield.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 4,
            "resistance" : 1,
            "baseValue" : 300,
            "level" : 6,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Helm of Valor",
            "type" : "hat",
            "icon" : "fancyHelm.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 4,
            "resistance" : 1,
            "baseValue" : 300,
            "level" : 6,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Hammer of the North",
            "type" : "weapon",
            "legendary" : "#beb6d5",
            "icon" : "northHammer.png",
            "rarity" : 0,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 4,
            "meleeMaxDamage" : 33,
            "toHitBonus" : 4,
            "resistance" : 2,
            "constitutionBonus" : 4,
            "baseValue" : 610,
            "level" : 6,
            "usedBy" : ["warrior"]
        },
        //// Level 7
        {
            "name" : "Winter's Hood",
            "legendary" : "#cbccce",
            "type" : "hat",
            "icon" : "wolfCowl.png",
            "rarity" : 30,
            "groups" : ["tundra"],
            "armorClass" : 4,
            "resistance" : 4,
            "awareness" : 3,
            "baseValue" : 780,
            "level" : 7,
            "combatSpell" : "Normal Restore",
            "usedBy" : ["mage"]
        },
        {
            "name" : "Trollhelm",
            "legendary" : "#d8c8b1",
            "type" : "hat",
            "icon" : "hornedHelm.png",
            "rarity" : 0,
            "groups" : ["tundra"],
            "armorClass" : 5,
            "resistance" : 1,
            "constitution" : 3,
            "baseValue" : 840,
            "level" : 7,
            "combatSpell" : "Normal Heal",
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Helm of Seeing",
            "type" : "hat",
            "icon" : "helmOfSeeing.png",
            "legendary" : "#b6cde4",
            "rarity" : 0,
            "groups" : ["default", "armor"],
            "armorClass" : 4,
            "resistance" : 2,
            "baseValue" : 960,
            "level" : 7,
            "combatSpell" : "Eye Focus",
            "usedBy" : ["warrior", "archer"]
        },
        {
            "name" : "Cycloptic Statue",
            "type" : "use",
            "icon" : "cyclopsTalisman.png",
            "rarity" : 500,
            "groups" : ["default", "misc"],
            "spell" : "Summon Cyclops",
            "chargesMin" : 2,
            "chargesMax" : 3,
            "baseValue" : 150,
            "level" : 7,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Healing Vial",
            "type" : "use",
            "icon" : "vialOfHealth.png",
            "rarity" : 1750,
            "groups" : ["default", "potion", "water"],
            "spell" : "Fast Heal",
            "chargesMin" : 2,
            "chargesMax" : 5,
            "baseValue" : 130,
            "level" : 7,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Vial of Frost",
            "type" : "use",
            "icon" : "cyclopsTalisman.png",
            "rarity" : 500,
            "groups" : ["tundra", "misc"],
            "spell" : "Summon Ice Golem",
            "chargesMin" : 2,
            "chargesMax" : 5,
            "baseValue" : 140,
            "level" : 7,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Wand of Curing",
            "type" : "use",
            "icon" : "yellowWand2.png",
            "rarity" : 1000,
            "groups" : ["default", "misc", "water"],
            "spell" : "Range Cure",
            "chargesMin" : 3,
            "chargesMax" : 9,
            "baseValue" : 115,
            "level" : 7,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Wand of Disruption",
            "type" : "use",
            "icon" : "greenWand.png",
            "rarity" : 1000,
            "groups" : ["default", "misc", "water"],
            "spell" : "Disrupt",
            "chargesMin" : 2,
            "chargesMax" : 5,
            "baseValue" : 130,
            "level" : 7,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "War Amulet",
            "type" : "amulet",
            "icon" : "amulet9.png",
            "rarity" : 750,
            "groups" : ["default", "misc", "water"],
            "armorClass" : 1,
            "strengthBonus" : 3,
            "accuracyBonus" : 2,
            "constitutionBonus" : 1,
            "baseValue" : 500,
            "level" : 7,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Amulet of Shadow",
            "type" : "amulet",
            "icon" : "amulet5.png",
            "rarity" : 750,
            "groups" : ["default", "misc", "water"],
            "armorClass" : 2,
            "accuracyBonus" : 4,
            "constitutionBonus" : 1,
            "baseValue" : 500,
            "level" : 7,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Amulet of Light",
            "type" : "amulet",
            "icon" : "amulet10.png",
            "rarity" : 750,
            "groups" : ["default", "misc", "water"],
            "armorClass" : 3,
            "constitutionBonus" : 1,
            "awarenessBonus" : 4,
            "baseValue" : 500,
            "level" : 7,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Strengthsword",
            "type" : "weapon",
            "icon" : "magicSword2.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 10,
            "meleeMaxDamage" : 30,
            "toHitBonus" : 5,
            "strengthBonus" : 5,
            "baseValue" : 600,
            "level" : 7,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Bow of Seeking",
            "type" : "weapon",
            "icon" : "magicBow2.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "rangeMinDamage" : 5,
            "rangeMaxDamage" : 20,
            "toHitBonus" : 5,
            "accuracyBonus" : 3,
            "baseValue" : 610,
            "level" : 7,
            "rangeAnimation" : "animArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Staff of Wisdom",
            "type" : "weapon",
            "icon" : "yellowStaff.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 5,
            "meleeMaxDamage" : 15,
            "rangeMinDamage" : 4,
            "rangeMaxDamage" : 10,
            "rangeAnimation" : "animColdBallSmall.png",
            "toHitBonus" : 5,
            "awarenessBonus" : 3,
            "resistance" : 1,
            "baseValue" : 675,
            "level" : 7,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Familiar Staff",
            "legendary" : "#D0D0D0",
            "type" : "weapon",
            "icon" : "whiteStaff.png",
            "rarity" : 30,
            "groups" : ["tundra", "weapon"],
            "meleeMinDamage" : 6,
            "meleeMaxDamage" : 18,
            "toHitBonus" : 5,
            "awarenessBonus" : 1,
            "resistance" : 1,
            "accuracy" : 1,
            "baseValue" : 1050,
            "level" : 7,
            "combatSpell" : "Summon Snow Ogre",
            "usedBy" : ["mage"]
        },
        {
            "name" : "Platemail Armor",
            "type" : "armor",
            "icon" : "plateMail.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 6,
            "resistance" : 1,
            "constitutionBonus" : 1,
            "baseValue" : 720,
            "level" : 7,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Armored Boots",
            "type" : "boots",
            "icon" : "armoredBoots.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 4,
            "baseValue" : 540,
            "level" : 7,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Dwarvenkin",
            "type" : "weapon",
            "legendary" : "#f6e487",
            "icon" : "dwarvenkin.png",
            "rarity" : 0,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 12,
            "meleeMaxDamage" : 32,
            "toHitBonus" : 5,
            "resistance" : 1,
            "strengthBonus" : 3,
            "combatSpell" : "Dwarf Strength",
            "baseValue" : 1020,
            "level" : 7,
            "usedBy" : ["warrior"]
        },
        //// Level 8
        {
            "name" : "Cloak of Displacement",
            "type" : "armor",
            "icon" : "purpleCloak.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 6,
            "resistance" : 3,
            "baseValue" : 965,
            "level" : 8,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Energy Vial",
            "type" : "use",
            "icon" : "vialOfEnergy.png",
            "rarity" : 1750,
            "groups" : ["default", "potion", "elf", "water"],
            "spell" : "Fast Restore",
            "chargesMin" : 2,
            "chargesMax" : 5,
            "baseValue" : 120,
            "level" : 8,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Mithril Armor",
            "type" : "armor",
            "icon" : "mithrilArmor.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 7,
            "resistance" : 2,
            "baseValue" : 1350,
            "level" : 8,
            "usedBy" : ["archer"]
        },
        {
            "name" : "Force Shield",
            "type" : "shield",
            "icon" : "bigShield.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 5,
            "constitutionBonus" : 2,
            "baseValue" : 1100,
            "level" : 8,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Amulet of Awe",
            "type" : "amulet",
            "icon" : "amulet11.png",
            "rarity" : 1000,
            "groups" : ["default", "misc", "water"],
            "armorClass" : 3,
            "strengthBonus" : 3,
            "accuracyBonus" : 3,
            "constitutionBonus" : 3,
            "awarenessBonus" : 3,
            "baseValue" : 1200,
            "level" : 8,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Charm Amulet",
            "legendary" : "#16cb27",
            "type" : "amulet",
            "icon" : "charmAmulet.png",
            "rarity" : 0,
            "groups" : ["default", "misc"],
            "armorClass" : 4,
            "resistance" : 2,
            "baseValue" : 1750,
            "level" : 8,
            "combatSpell" : "Aura of Luck",
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Blood Amulet",
            "legendary" : "#c21a0c",
            "type" : "amulet",
            "icon" : "bloodAmulet.png",
            "rarity" : 30,
            "groups" : ["default", "misc"],
            "constitutionBonus" : 6,
            "awarenessBonus" : -6,
            "baseValue" : 1550,
            "level" : 8,
            "combatSpell" : "Leech",
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Coven's Hat",
            "type" : "hat",
            "icon" : "witchHat.png",
            "rarity" : 0,
            "groups" : ["default", "armor"],
            "armorClass" : 4,
            "resistance" : 3,
            "combatSpell" : "Witchcraft",
            "baseValue" : 1480,
            "level" : 8,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Dimensional Staff",
            "legendary" : "#aa72fc",
            "type" : "weapon",
            "icon" : "dimensionalStaff.png",
            "rarity" : 30,
            "groups" : ["default", "weapon", "water"],
            "meleeMinDamage" : 8,
            "meleeMaxDamage" : 23,
            "toHitBonus" : 6,
            "strengthBonus" : 3,
            "baseValue" : 1850,
            "level" : 8,
            "hitSpell" : "Portal",
            "usedBy" : ["mage"]
        },
        {
            "name" : "Gladius Enigmus",
            "legendary" : "#aa85cd",
            "type" : "weapon",
            "icon" : "weirdSword.png",
            "rarity" : 35,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 16,
            "meleeMaxDamage" : 32,
            "toHitBonus" : 6,
            "awarenessBonus" : 4,
            "baseValue" : 1770,
            "level" : 8,
            "combatSpell" : "Wink",
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Sword of Vengeance",
            "legendary" : "#d2145f",
            "type" : "weapon",
            "icon" : "rubySword.png",
            "rarity" : 30,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 16,
            "meleeMaxDamage" : 38,
            "toHitBonus" : 5,
            "strengthBonus" : 4,
            "awarenessBonus" : -4,
            "baseValue" : 1770,
            "level" : 8,
            "combatSpell" : "Freak Out",
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Bow of the Oliphants",
            "legendary" : "#aa85cd",
            "type" : "weapon",
            "icon" : "oliphantBow.png",
            "rarity" : 0,
            "groups" : ["default", "weapon"],
            "rangeMinDamage" : 8,
            "rangeMaxDamage" : 18,
            "toHitBonus" : 5,
            "resistance" : 1,
            "combatSpell" : "Summon Charger",
            "baseValue" : 1795,
            "level" : 8,
            "rangeAnimation" : "animArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Enchanted Boots",
            "type" : "boots",
            "icon" : "enchantedBoots.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 3,
            "resistance" : 1,
            "baseValue" : 940,
            "extraMoves" : 1,
            "level" : 8,
            "usedBy" : ["archer", "mage"]
        },
        {
            "name" : "Enchanted Helm",
            "type" : "hat",
            "icon" : "enchantedHelm2.png",
            "rarity" : 750,
            "groups" : ["default", "armor"],
            "armorClass" : 5,
            "resistance" : 2,
            "accuracyBonus" : 1,
            "baseValue" : 550,
            "level" : 8,
            "usedBy" : ["archer"]
        },
        {
            "name" : "Flayer Talisman",
            "type" : "use",
            "icon" : "flayerTalisman.png",
            "rarity" : 500,
            "groups" : ["default", "misc"],
            "spell" : "Summon Flayer",
            "chargesMin" : 2,
            "chargesMax" : 4,
            "baseValue" : 300,
            "level" : 8,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        //// Level 9
        {
            "name" : "Star of Health",
            "type" : "use",
            "icon" : "redStar.png",
            "rarity" : 1500,
            "groups" : ["default", "potion", "water"],
            "spell" : "Max Heal",
            "chargesMin" : 2,
            "chargesMax" : 4,
            "baseValue" : 500,
            "level" : 9,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Helm of the Magi",
            "type" : "hat",
            "icon" : "wingedHelm.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 5,
            "constitutionBonus" : 3,
            "resistance" : 3,
            "baseValue" : 1200,
            "level" : 9,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Sword of Wasting",
            "legendary" : "#bbd3b9",
            "type" : "weapon",
            "icon" : "swordOfWasting.png",
            "rarity" : 0,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 22,
            "meleeMaxDamage" : 45,
            "toHitBonus" : 6,
            "strengthBonus" : 4,
            "constitutionBonus" : -4,
            "baseValue" : 2370,
            "level" : 9,
            "hitSpell" : "Wasting",
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Dark Armor",
            "type" : "armor",
            "icon" : "darkArmor.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 8,
            "resistance" : 2,
            "constitutionBonus" : 1,
            "baseValue" : 1500,
            "level" : 9,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Dark Helm",
            "type" : "hat",
            "icon" : "maskHelm.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 5,
            "resistance" : 1,
            "accuracyBonus" : 1,
            "baseValue" : 1250,
            "level" : 9,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Dark Shield",
            "type" : "shield",
            "icon" : "darkShield.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 5,
            "resistance" : 2,
            "awarenessBonus" : 1,
            "baseValue" : 1400,
            "level" : 9,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Dark Boots",
            "type" : "boots",
            "icon" : "darkBoots.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 5,
            "extraMoves" : 1,
            "baseValue" : 1375,
            "level" : 9,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Wand of Destruction",
            "type" : "use",
            "icon" : "destroyWand.png",
            "rarity" : 1000,
            "groups" : ["default", "misc"],
            "spell" : "Destroy",
            "chargesMin" : 1,
            "chargesMax" : 2,
            "baseValue" : 1000,
            "level" : 9,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Wand of Purity",
            "type" : "use",
            "icon" : "whiteWand2.png",
            "rarity" : 1000,
            "groups" : ["default", "misc", "water"],
            "spell" : "Area Cure",
            "chargesMin" : 2,
            "chargesMax" : 5,
            "baseValue" : 850,
            "level" : 9,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Ethereal Potion",
            "type" : "use",
            "icon" : "etherealPotion.png",
            "rarity" : 1250,
            "groups" : ["default", "potion"],
            "spell" : "Fast Bless",
            "chargesMin" : 2,
            "chargesMax" : 5,
            "baseValue" : 225,
            "level" : 9,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Bow of Virtue",
            "type" : "weapon",
            "icon" : "purpleBow.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "rangeMinDamage" : 20,
            "rangeMaxDamage" : 36,
            "armorClass" : 2,
            "toHitBonus" : 8,
            "strengthBonus" : 4,
            "accuracyBonus" : 2,
            "constitutionBonus" : 2,
            "baseValue" : 3200,
            "level" : 9,
            "rangeAnimation" : "animArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Kingsword",
            "type" : "weapon",
            "icon" : "kingSword.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 25,
            "meleeMaxDamage" : 50,
            "rangeMinDamage" : 8,
            "rangeMaxDamage" : 15,
            "armorClass" : 2,
            "toHitBonus" : 8,
            "strengthBonus" : 4,
            "accuracyBonus" : 2,
            "constitutionBonus" : 1,
            "baseValue" : 3000,
            "level" : 9,
            "rangeAnimation" : "animFireBall.png",
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Staff of Power",
            "type" : "weapon",
            "icon" : "purpleStaff.png",
            "rarity" : 1000,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 15,
            "meleeMaxDamage" : 25,
            "rangeMinDamage" : 10,
            "rangeMaxDamage" : 25,
            "armorClass" : 2,
            "toHitBonus" : 8,
            "accuracyBonus" : 4,
            "awarenessBonus" : 5,
            "baseValue" : 3100,
            "level" : 9,
            "rangeAnimation" : "animSpell4.png",
            "usedBy" : ["mage"]
        },
        {
            "name" : "Dimensional Cloak",
            "type" : "armor",
            "icon" : "crazyCloak.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 7,
            "resistance" : 3,
            "accuracyBonus" : 2,
            "awarenessBonus" : 2,
            "baseValue" : 1700,
            "level" : 9,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Helm of the Archers",
            "type" : "hat",
            "icon" : "enchantedHelm3.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 6,
            "strengthBonus" : 2,
            "accuracyBonus" : 3,
            "constitutionBonus" : 1,
            "baseValue" : 2500,
            "level" : 9,
            "usedBy" : ["archer"]
        },
        //// Level 10
        {
            "name" : "Star of Energy",
            "type" : "use",
            "icon" : "blueStar.png",
            "rarity" : 1000,
            "groups" : ["default", "potion", "water"],
            "spell" : "Max Restore",
            "chargesMin" : 2,
            "chargesMax" : 5,
            "baseValue" : 750,
            "level" : 10,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Bloodsword",
            "legendary" : "#7c0000",
            "type" : "weapon",
            "icon" : "bloodSword.png",
            "rarity" : 30,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 24,
            "meleeMaxDamage" : 48,
            "toHitBonus" : 9,
            "constitutionBonus" : 5,
            "accuracyBonus" : 2,
            "baseValue" : 4000,
            "level" : 10,
            "hitSpell" : "Blood Drain",
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Vampire Bow",
            "legendary" : "#a28375",
            "type" : "weapon",
            "icon" : "vampireBow.png",
            "rarity" : 30,
            "groups" : ["default", "weapon"],
            "rangeMinDamage" : 22,
            "rangeMaxDamage" : 35,
            "rangeAnimation" : "animVampireArrow.png",
            "toHitBonus" : 8,
            "constitutionBonus" : 5,
            "accuracyBonus" : 2,
            "baseValue" : 4800,
            "level" : 10,
            "hitSpell" : "Blood Drain",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Staff of the Unliving",
            "legendary" : "#8e8d82",
            "type" : "weapon",
            "icon" : "skullStaff.png",
            "rarity" : 0,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 16,
            "meleeMaxDamage" : 28,
            "rangeMinDamage" : 12,
            "rangeMaxDamage" : 24,
            "toHitBonus" : 8,
            "accuracyBonus" : 4,
            "awarenessBonus" : 5,
            "baseValue" : 4700,
            "hitSpell" : "Undead Illness",
            "combatSpell" : "Summon Wraith",
            "level" : 10,
            "rangeAnimation" : "animSpell4.png",
            "usedBy" : ["mage"]
        },
        {
            "name" : "Vial of Unmaking",
            "type" : "use",
            "icon" : "vialOfUnmaking.png",
            "rarity" : 1000,
            "groups" : ["default", "potion"],
            "spell" : "Vial Unmake",
            "chargesMin" : 1,
            "chargesMax" : 3,
            "baseValue" : 1250,
            "level" : 10,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Orb of Time",
            "type" : "use",
            "icon" : "purpleOrb.png",
            "rarity" : 500,
            "groups" : ["default", "misc"],
            "spell" : "Orb Paralyze",
            "chargesMin" : 1,
            "chargesMax" : 3,
            "baseValue" : 1200,
            "level" : 10,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Guardian Shield",
            "legendary" : "#797979",
            "type" : "shield",
            "icon" : "guardianShield.png",
            "rarity" : 30,
            "groups" : ["default", "armor"],
            "armorClass" : 6,
            "resistance" : 2,
            "strengthBonus" : 1,
            "baseValue" : 3925,
            "combatSpell" : "Summon Guardian",
            "level" : 10,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Armor of the Rangers",
            "legendary" : "#73836c",
            "type" : "armor",
            "icon" : "archerArmor.png",
            "rarity" : 30,
            "groups" : ["default", "armor"],
            "armorClass" : 8,
            "resistance" : 4,
            "constitutionBonus" : 1,
            "baseValue" : 3775,
            "level" : 10,
            "usedBy" : ["archer"]
        },
        {
            "name" : "Electric Cloak",
            "legendary" : "#bc4b17",
            "type" : "armor",
            "icon" : "lightningCloak.png",
            "rarity" : 0,
            "groups" : ["default", "armor"],
            "armorClass" : 7,
            "resistance" : 4,
            "combatSpell" : "Cloak Shock",
            "baseValue" : 3366,
            "level" : 10,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Dragonboots",
            "type" : "boots",
            "icon" : "dragonBoots.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 4,
            "extraMoves" : 2,
            "constitutionBonus" : 1,
            "baseValue" : 2025,
            "level" : 10,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Amulet of Truth",
            "type" : "amulet",
            "icon" : "amulet8.png",
            "rarity" : 1000,
            "groups" : ["default", "misc"],
            "armorClass" : 3,
            "resistance" : 2,
            "accuracyBonus" : 2,
            "constitutionBonus" : 1,
            "awarenessBonus" : 6,
            "baseValue" : 5000,
            "level" : 10,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        //// Level 11
        {
            "name" : "Pendant of Honor",
            "type" : "amulet",
            "legendary" : "#951203",
            "icon" : "redPendant.png",
            "rarity" : 30,
            "groups" : ["default", "misc"],
            "armorClass" : 4,
            "resistance" : 2,
            "accuracyBonus" : 4,
            "strengthBonus" : 4,
            "combatSpell" : "Fast Touch Bless",
            "baseValue" : 7750,
            "level" : 11,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Dragonstone",
            "type" : "use",
            "icon" : "dragonStone.png",
            "rarity" : 500,
            "groups" : ["default", "misc"],
            "spell" : "Summon Dragon2",
            "chargesMin" : 1,
            "chargesMax" : 1,
            "baseValue" : 4000,
            "level" : 11,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Warhelm",
            "type" : "hat",
            "icon" : "evilHelm.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 6,
            "resistance" : 3,
            "accuracyBonus" : 2,
            "baseValue" : 5550,
            "level" : 11,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Armor of Ashes",
            "type" : "armor",
            "legendary" : "#424242",
            "icon" : "darkArmor2.png",
            "rarity" : 30,
            "groups" : ["default", "armor"],
            "armorClass" : 10,
            "resistance" : 4,
            "extraMoves" : 1,
            "baseValue" : 6660,
            "level" : 11,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Soul Prism",
            "type" : "use",
            "icon" : "prism.png",
            "rarity" : 1000,
            "groups" : ["default", "misc"],
            "spell" : "Prism Drain",
            "chargesMin" : 1,
            "chargesMax" : 3,
            "baseValue" : 3150,
            "level" : 11,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Shield of Justice",
            "legendary" : "#715557",
            "type" : "shield",
            "icon" : "justiceShield.png",
            "rarity" : 30,
            "groups" : ["default", "armor"],
            "armorClass" : 5,
            "resistance" : 4,
            "strengthBonus" : 2,
            "awarenessBonus" : 2,
            "combatSpell" : "Justice Protect",
            "baseValue" : 5225,
            "level" : 11,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Bow of Legends",
            "type" : "weapon",
            "legendary" : "#e1cd55",
            "icon" : "magicBow3.png",
            "rarity" : 50,
            "groups" : ["default", "weapon"],
            "rangeMinDamage" : 22,
            "rangeMaxDamage" : 44,
            "armorClass" : 2,
            "toHitBonus" : 10,
            "strengthBonus" : 4,
            "accuracyBonus" : 4,
            "constitutionBonus" : 2,
            "baseValue" : 6400,
            "level" : 11,
            "rangeAnimation" : "animArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Genesis Bow",
            "type" : "weapon",
            "legendary" : "#ffffff",
            "icon" : "ivoryBow.png",
            "rarity" : 10,
            "groups" : ["default", "weapon"],
            "rangeMinDamage" : 25,
            "rangeMaxDamage" : 50,
            "armorClass" : 2,
            "toHitBonus" : 11,
            "strengthBonus" : 6,
            "accuracyBonus" : 5,
            "combatSpell" : "Summon Wyvern",
            "baseValue" : 8100,
            "level" : 11,
            "rangeAnimation" : "animArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Daemonsword",
            "type" : "weapon",
            "icon" : "serpentSword.png",
            "legendary" : "#a62212",
            "rarity" : 50,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 30,
            "meleeMaxDamage" : 60,
            "rangeMinDamage" : 15,
            "rangeMaxDamage" : 25,
            "armorClass" : 3,
            "toHitBonus" : 10,
            "strengthBonus" : 4,
            "accuracyBonus" : 4,
            "constitutionBonus" : 2,
            "baseValue" : 6000,
            "level" : 11,
            "rangeAnimation" : "animFireBall.png",
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Staff of Ascension",
            "type" : "weapon",
            "icon" : "redStaff.png",
            "legendary" : "#ff5000",
            "rarity" : 50,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 18,
            "meleeMaxDamage" : 30,
            "rangeMinDamage" : 20,
            "rangeMaxDamage" : 32,
            "armorClass" : 3,
            "toHitBonus" : 10,
            "accuracyBonus" : 4,
            "awarenessBonus" : 5,
            "rangeAnimation" : "animFireBall.png",
            "baseValue" : 5500,
            "level" : 11,
            "usedBy" : ["mage"]
        },
        //// Level 12
        {
            "name" : "Bow of Redemption",
            "type" : "weapon",
            "legendary" : "#aeaeae",
            "icon" : "grayBow.png",
            "rarity" : 30,
            "groups" : ["default", "weapon"],
            "rangeMinDamage" : 30,
            "rangeMaxDamage" : 55,
            "toHitBonus" : 12,
            "strengthBonus" : 5,
            "accuracyBonus" : 5,
            "baseValue" : 10500,
            "level" : 12,
            "combatSpell" : "Redeem",
            "rangeAnimation" : "animArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Hovering Shield",
            "type" : "shield",
            "icon" : "hoveringShield.png",
            "rarity" : 500,
            "groups" : ["default", "armor"],
            "armorClass" : 4,
            "resistance" : 3,
            "baseValue" : 6500,
            "level" : 12,
            "usedBy" : ["warrior", "archer"]
        },
        {
            "name" : "Badge of Honor",
            "type" : "shield",
            "legendary" : "#0000FF",
            "icon" : "ribbon.png",
            "rarity" : 0,
            "groups" : ["default", "armor"],
            "armorClass" : 5,
            "resistance" : 10,
            "baseValue" : 20000,
            "level" : 12,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Vial of Embalming",
            "type" : "use",
            "icon" : "vialOfEmbalming.png",
            "rarity" : 1000,
            "groups" : ["default", "misc"],
            "spell" : "Vial Paralyze",
            "chargesMin" : 1,
            "chargesMax" : 3,
            "baseValue" : 2900,
            "level" : 12,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Royal Pendant",
            "type" : "amulet",
            "icon" : "bluePendant.png",
            "rarity" : 1000,
            "groups" : ["default", "misc"],
            "armorClass" : 4,
            "strengthBonus" : 5,
            "accuracyBonus" : 5,
            "constitutionBonus" : 5,
            "awarenessBonus" : 5,
            "resistance" : 3,
            "baseValue" : 8750,
            "level" : 12,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Destiny Amulet",
            "type" : "amulet",
            "legendary" : "#c7cbfe",
            "icon" : "amulet13.png",
            "rarity" : 30,
            "groups" : ["default", "misc"],
            "armorClass" : 5,
            "resistance" : 7,
            "combatSpell" : "Destiny Heal",
            "baseValue" : 9950,
            "level" : 12,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Jade Statue",
            "type" : "use",
            "icon" : "jadeStatue.png",
            "rarity" : 1000,
            "groups" : ["default", "misc"],
            "spell" : "Summon Jade Golem",
            "chargesMin" : 1,
            "chargesMax" : 3,
            "baseValue" : 2950,
            "level" : 12,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Doomsday Cloak",
            "legendary" : "#808080",
            "type" : "armor",
            "icon" : "rainbowRobe.png",
            "rarity" : 30,
            "groups" : ["default", "armor"],
            "armorClass" : 9,
            "resistance" : 6,
            "extraMoves" : 1,
            "combatSpell" : "Summon Gargoyle",
            "baseValue" : 10800,
            "level" : 12,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Wisdom Hat",
            "type" : "hat",
            "legendary" : "#548d7c",
            "icon" : "witchHat2.png",
            "rarity" : 30,
            "groups" : ["default", "armor"],
            "armorClass" : 7,
            "awarenessBonus" : 6,
            "resistance" : 5,
            "baseValue" : 9800,
            "level" : 12,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Gemini Bow",
            "type" : "weapon",
            "legendary" : "#ffcc33",
            "icon" : "goldenBow.png",
            "rarity" : 5,
            "groups" : ["default", "weapon"],
            "rangeMinDamage" : 20,
            "rangeMaxDamage" : 40,
            "toHitBonus" : 12,
            "strengthBonus" : 2,
            "accuracyBonus" : 7,
            "extraAttacks" : 1,
            "baseValue" : 14500,
            "level" : 12,
            "combatSpell" : "Gemini Strength",
            "rangeAnimation" : "animArrow.png",
            "usedBy" : ["archer"]
        },
        {
            "name" : "Master Helm",
            "type" : "hat",
            "icon" : "plumeHelm.png",
            "rarity" : 1000,
            "groups" : ["default", "armor"],
            "armorClass" : 7,
            "resistance" : 4,
            "strengthBonus" : 3,
            "accuracyBonus" : 4,
            "combatSpell" : "Eye Focus",
            "baseValue" : 9100,
            "level" : 12,
            "usedBy" : ["archer"]
        },
        {
            "name" : "Staff of Cursing",
            "type" : "weapon",
            "icon" : "energyStaff.png",
            "legendary" : "#ffffa9",
            "rarity" : 30,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 25,
            "meleeMaxDamage" : 35,
            "rangeMinDamage" : 18,
            "rangeMaxDamage" : 25,
            "armorClass" : 3,
            "toHitBonus" : 10,
            "accuracyBonus" : 3,
            "awarenessBonus" : 3,
            "hitSpell" : "Staff Paralyze",
            "rangeAnimation" : "animLightning.png",
            "baseValue" : 8500,
            "level" : 12,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Flamestaff",
            "type" : "weapon",
            "icon" : "fireStaff.png",
            "legendary" : "#e64512",
            "rarity" : 5,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 30,
            "meleeMaxDamage" : 50,
            "rangeMinDamage" : 30,
            "rangeMaxDamage" : 50,
            "armorClass" : 4,
            "toHitBonus" : 12,
            "accuracyBonus" : 4,
            "awarenessBonus" : 4,
            "combatSpell" : "Summon Red Dragon",
            "rangeAnimation" : "animFireBall.png",
            "baseValue" : 12500,
            "level" : 12,
            "usedBy" : ["mage"]
        },
        {
            "name" : "Gladius Infernus",
            "type" : "weapon",
            "icon" : "flameSword.png",
            "legendary" : "#e67714",
            "rarity" : 30,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 36,
            "meleeMaxDamage" : 70,
            "rangeMinDamage" : 20,
            "rangeMaxDamage" : 33,
            "armorClass" : 3,
            "toHitBonus" : 12,
            "awarenessBonus" : 4,
            "accuracyBonus" : 4,
            "constitutionBonus" : 2,
            "baseValue" : 9500,
            "combatSpell" : "Gladius Strength",
            "level" : 12,
            "rangeAnimation" : "animFireBall.png",
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Oversword",
            "type" : "weapon",
            "icon" : "overSword.png",
            "legendary" : "#e5ceea",
            "rarity" : 5,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 45,
            "meleeMaxDamage" : 90,
            "rangeMinDamage" : 25,
            "rangeMaxDamage" : 45,
            "armorClass" : 5,
            "toHitBonus" : 14,
            "accuracyBonus" : 5,
            "strengthBonus" : 6,
            "baseValue" : 11750,
            "combatSpell" : "Fast Rage",
            "level" : 12,
            "rangeAnimation" : "animSpellCast.png",
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Gladius Dominus",
            "type" : "weapon",
            "icon" : "crystalSword.png",
            "legendary" : "#c7cbfe",
            "rarity" : 1,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 65,
            "meleeMaxDamage" : 130,
            "armorClass" : 5,
            "toHitBonus" : 15,
            "constitutionBonus" : 8,
            "strengthBonus" : 12,
            "baseValue" : 16500,
            "combatSpell" : "Wink",
            "level" : 12,
            "usedBy" : ["warrior"]
        },
        {
            "name" : "Mystic Boots",
            "type" : "boots",
            "icon" : "archerBoots.png",
            "legendary" : "#784235",
            "rarity" : 0,
            "groups" : ["default", "armor"],
            "armorClass" : 6,
            "extraMoves" : 1,
            "resistance" : 2,
            "baseValue" : 9430,
            "combatSpell" : "Wink",
            "level" : 12,
            "usedBy" : ["warrior", "archer", "mage"]
        },
        {
            "name" : "Dragonshield",
            "legendary" : "#a2685e",
            "type" : "shield",
            "icon" : "dragonShield.png",
            "rarity" : 30,
            "groups" : ["default", "armor"],
            "armorClass" : 6,
            "resistance" : 4,
            "strengthBonus" : 3,
            "accuracyBonus" : 3,
            "combatSpell" : "Dragon Fire",
            "baseValue" : 9670,
            "level" : 12,
            "usedBy" : ["warrior"]
        }

    ],

    //// Creatures

    creatures : [
        //// LEVEL 1
        {
            "name" : "Goblin Scout",
            "icon" : "goblinScout.png",
            "groups" : ["goblin", "dungeon"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 3,
            "level" : 1,
            "minHitPoints" : 1,
            "maxHitPoints" : 5,
            "experienceValue" : 3,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 5,
            "description" : "Small and nimble, the Goblin Scout may not be the most imposing of the goblins, but it can sneak in and do quick damage while deftly avoiding counter-attacks."
        },
        {
            "name" : "Goblin",
            "icon" : "goblin.png",
            "groups" : ["goblin", "dungeon"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 3,
            "level" : 1,
            "minHitPoints" : 2,
            "maxHitPoints" : 7,
            "experienceValue" : 4,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 3,
            "description" : "The object of many a child's nightmare, Goblins are cruel and vicious creatures. While certainly not a threat in individual combat, they can often overwhelm with sheer numbers."
        },
        {
            "name" : "Goblin Swashbuckler",
            "icon" : "goblin6.png",
            "groups" : ["goblin", "dungeon"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 3,
            "level" : 1,
            "minHitPoints" : 2,
            "maxHitPoints" : 6,
            "experienceValue" : 5,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 2,
            "description" : "Goblin Swashbucklers are trained in the breeding pits to fight more viciously than other Goblins. While this makes them a dangerous foe, it also dramatically reduces their life expectancy."
        },
        {
            "name" : "Imp",
            "icon" : "imp.png",
            "groups" : ["dungeon", "outdoor", "kobold"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 2,
            "level" : 1,
            "minHitPoints" : 1,
            "maxHitPoints" : 4,
            "experienceValue" : 5,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 4,
            "description" : "Small but mean, the Imp can attack very quickly, doing considerable damage before an opponent can counter-attack."
        },
        {
            "name" : "Giant Spider",
            "icon" : "greenSpider.png",
            "groups" : ["outdoor", "dungeon", "kobold", "swamp"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 3,
            /*
            "rangeMinDamage" : 1, //temp
            "rangeMaxDamage" : 1, //temp
            "target" : "area", //temp
            "rangeAnimation" : "animHotBallSmall.png", //temp
            */
            "level" : 1,
            "minHitPoints" : 3,
            "maxHitPoints" : 8,
            "experienceValue" : 5,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 1,
            "description" : "These incredible beasts are almost the size of a full-grown man. They are notoriously hard to kill."
        },
        {
            "name" : "Rat Warrior",
            "icon" : "rat.png",
            "groups" : ["outdoor"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 2,
            "level" : 100,
            "minHitPoints" : 2,
            "maxHitPoints" : 4,
            "experienceValue" : 5,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 1,
            "description" : "Neither ferocious nor particularly loyal, these large, bipedal rodents are nevertheless popular among aspiring Conjurers, owing to their ease of summoning."
        },
        {
            "name" : "Giant Snake",
            "icon" : "snake.png",
            "groups" : ["outdoor", "desert", "kobold", "swamp"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 4,
            "level" : 1,
            "minHitPoints" : 1,
            "maxHitPoints" : 4,
            "experienceValue" : 5,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 2,
            "description" : "While not poisonous, the Giant Snake has been known to take down and devour very large prey, including people!"
        },
        {
            "name" : "Kobold",
            "icon" : "kobold.png",
            "groups" : ["outdoor", "dungeon", "desert", "kobold"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 3,
            "level" : 1,
            "minHitPoints" : 1,
            "maxHitPoints" : 4,
            "experienceValue" : 4,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 4,
            "description" : "Thought to be the result of an unfortunate cross-breeding experiment, these dog-like men are diminutive, but hunt effectively in packs."
        },
        {
            "name" : "Kobold Guard",
            "icon" : "koboldGuard.png",
            "groups" : ["outdoor", "dungeon", "desert", "kobold"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 4,
            "level" : 100,
            "minHitPoints" : 2,
            "maxHitPoints" : 4,
            "experienceValue" : 7,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 5,
            "description" : "Kobolds are generally not known for their discipline, but the members of the elite and mysterious 'Kobold Guard' are tireless defenders and admirably loyal."
        },
        {
            "name" : "Wererat",
            "icon" : "wererat.png",
            "groups" : ["dungeon", "kobold"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 2,
            "level" : 1,
            "minHitPoints" : 2,
            "maxHitPoints" : 4,
            "experienceValue" : 6,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 3,
            "hitSpell" : "Weakening Bite",
            "description" : "An infernal subterranean pest, the bite of a Wererat has a toxin that weakens its victim."
        },
        {
            "name" : "Swordfish",
            "icon" : "swordFish.png",
            "groups" : ["water"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 4,
            "level" : 1,
            "minHitPoints" : 2,
            "maxHitPoints" : 5,
            "experienceValue" : 6,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 2,
            "hitModifier" : 1,
            "description" : "Possessed and controlled by the Merfolk, these poor, everyday fish have been coerced to take up arms against all who walk on dry land."
        },
        //// LEVEL 2
        {
            "name" : "Skeleton",
            "icon" : "skeleton.png",
            "groups" : ["undead", "skeleton"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 3,
            "rangeMinDamage" : 1,
            "rangeMaxDamage" : 2,
            "level" : 2,
            "rangeAnimation" : "animThrowingBone.png",
            "minHitPoints" : 2,
            "maxHitPoints" : 9,
            "experienceValue" : 8,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 5,
            "description" : "Skeletons are crude and artless undead re-animations. They are easily dispatched in hand-to-hand combat, but have the annoying habit of standing at a distance and lobbing bones plucked from their own body at their opponents."
        },
        {
            "name" : "Goblin Warrior",
            "icon" : "goblin7.png",
            "groups" : ["goblin"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 6,
            "level" : 2,
            "minHitPoints" : 3,
            "maxHitPoints" : 9,
            "experienceValue" : 8,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 6,
            "hitModifier" : 1,
            "description" : "Only the largest and most fearsome goblins are granted the title of 'Goblin Warrior'. Besides being bigger, they are also generally better-equipped for combat than their weaker brethren."
        },
        {
            "name" : "Orc",
            "icon" : "goblin4.png",
            "groups" : ["dungeon", "desert"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 7,
            "level" : 2,
            "minHitPoints" : 3,
            "maxHitPoints" : 10,
            "experienceValue" : 9,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 5,
            "hitModifier" : 1,
            "description" : "Orcs are related to goblins, and are often found in their company. They are larger than goblins, but far less intelligent."
        },
        {
            "name" : "Giant Bear",
            "icon" : "bear.png",
            "groups" : ["outdoor"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 5,
            "level" : 2,
            "minHitPoints" : 6,
            "maxHitPoints" : 12,
            "experienceValue" : 9,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 3,
            "hitModifier" : 1,
            "description" : "The Giant Bear is typically docile and reclusive. However, when angered, its rage and aggression can be unmatched."
        },
        {
            "name" : "Zombie",
            "icon" : "zombie3.png",
            "groups" : ["undead"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 5,
            "level" : 2,
            "minHitPoints" : 4,
            "maxHitPoints" : 8,
            "experienceValue" : 8,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 3,
            "hitModifier" : 1,
            "hitSpell" : "Poison Touch",
            "description" : "A Zombie is the rotting carcass of the deceased that, for whatever reason, was reanimated by black magic. Its bite can infect the victim with a debilitating illness."
        },
        {
            "name" : "Black Spider",
            "icon" : "blackSpider.png",
            "groups" : ["outdoor", "dungeon", "desert", "swamp"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 8,
            "level" : 2,
            "minHitPoints" : 4,
            "maxHitPoints" : 9,
            "experienceValue" : 9,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 1,
            "hitSpell" : "Slowing Venom",
            "description" : "The Black Spider looks similar to the giant spider, but it possesses a venom that slows the reactions of its target, rendering them easy prey."
        },
        {
            "name" : "Kobold Fighter",
            "icon" : "koboldSwordsman.png",
            "groups" : ["outdoor", "dungeon", "desert"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 4,
            "level" : 2,
            "minHitPoints" : 3,
            "maxHitPoints" : 8,
            "experienceValue" : 9,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 1,
            "hitModifier" : 1,
            "description" : "The Kobold Fighter is a surprisingly well-trained warrior. It can wield two weapons with amazing dexterity."
        },
        {
            "name" : "Kobold Mystic",
            "icon" : "koboldShaman.png",
            "groups" : ["outdoor", "dungeon", "desert"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 2,
            "level" : 2,
            "minHitPoints" : 2,
            "maxHitPoints" : 6,
            "experienceValue" : 10,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 1,
            "spells" : [
                {
                    "name" : "Kobold Focus",
                    "weight" : 40
                },
                {
                    "name" : "Mystic Missile",
                    "weight" : 80
                }
            ],
            "description" : "The Kobold Mystic can attack at range with spells, and uses foul magic to boost the abilities of its allies in combat."
        },
        {
            "name" : "Sea Snake",
            "icon" : "blueSnake.png",
            "groups" : ["water"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 6,
            "level" : 2,
            "minHitPoints" : 3,
            "maxHitPoints" : 9,
            "experienceValue" : 8,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 4,
            "hitModifier" : 2,
            "hitSpell" : "Poison Touch",
            "description" : "The Sea Snake looks fairly harmless, but it is not to be trifled with as its bite carries a poisonous venom."
        },
        {
            "name" : "Craw Fighter",
            "icon" : "crawFighter.png",
            "groups" : ["water"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 5,
            "level" : 2,
            "minHitPoints" : 4,
            "maxHitPoints" : 10,
            "experienceValue" : 9,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 6,
            "hitModifier" : 2,
            "description" : "The Craw Fighter is a skilled and well-armored protector of the sanctity of the seas. Landlubbers, beware!"
        },
        //// LEVEL 3
        {
            "name" : "Goblin Shaman",
            "icon" : "goblinWizard.png",
            "groups" : ["goblin"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 2,
            "level" : 3,
            "minHitPoints" : 2,
            "maxHitPoints" : 10,
            "experienceValue" : 14,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 5,
            "hitModifier" : 1,
            "spells" : [
                {
                    "name" : "Cursed Slime",
                    "weight" : 80
                },
                {
                    "name" : "Elixir of Strength",
                    "weight" : 40
                }
            ],
            "description" : "The Goblin Shaman often accompanies large groups of goblins and orcs. It administers noxious elixirs that boost the strength of its allies."
        },
        {
            "name" : "Goblin Archer",
            "icon" : "goblinArcher.png",
            "groups" : ["goblin"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 2,
            "rangeMinDamage" : 3,
            "rangeMaxDamage" : 6,
            "level" : 3,
            "rangeAnimation" : "animArrow.png",
            "minHitPoints" : 4,
            "maxHitPoints" : 11,
            "experienceValue" : 14,
            "numAttacks" : 1,
             "numMoves" : 1,
            "armorClass" : 6,
            "hitModifier" : 3,
            "description" : "Female goblins are typically recruited and trained as archers, where they become astonishingly adept, especially considering the poor quality of their bows."
        },
        {
            "name" : "Hobgoblin",
            "icon" : "dude.png",
            "groups" : ["dungeon", "desert", "tundra"],
            "meleeMinDamage" : 4,
            "meleeMaxDamage" : 8,
            "level" : 3,
            "minHitPoints" : 5,
            "maxHitPoints" : 17,
            "experienceValue" : 16,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 6,
            "hitModifier" : 2,
            "description" : "Despite its name, the Hobgoblin is more closely related to trolls than goblins. It is formidable, but fights without dignity, delivering vicious bites with its large and toothy mouth."
        },
        {
            "name" : "Blue Goblin",
            "icon" : "blueGoblin.png",
            "groups" : ["tundra"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 7,
            "level" : 3,
            "minHitPoints" : 7,
            "maxHitPoints" : 15,
            "experienceValue" : 16,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 5,
            "resistance" : 3,
            "hitModifier" : 2,
            "description" : "This Northern species is stronger, faster and deadlier than the more common varietal. Indeed, the Blue Goblin lists its temperate cousins amongst its favorite foods."
        },
        {
            "name" : "Treant",
            "icon" : "treant.png",
            "groups" : ["outdoor"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 6,
            "level" : 3,
            "minHitPoints" : 8,
            "maxHitPoints" : 24,
            "experienceValue" : 15,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 2,
            "resistance" : 5,
            "hitModifier" : 2,
            "description" : "Once regarded as gentle giants, the Treants have recently turned against humankind, blaming them for the degradation of the forests."
        },
        {
            "name" : "Skeleton Guard",
            "icon" : "skeletonGuard.png",
            "groups" : ["undead", "skeleton"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 5,
            "rangeMinDamage" : 2,
            "rangeMaxDamage" : 5,
            "level" : 3,
            "rangeAnimation" : "animThrowingBone.png",
            "minHitPoints" : 3,
            "maxHitPoints" : 12,
            "experienceValue" : 16,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 7,
            "resistance" : 2,
            "hitModifier" : 2,
            "description" : "The Skeleton Guard is a better-equipped and more resolute skeletal automaton than the garden-variety. They are not to be trifled with."
        },
        {
            "name" : "Merman",
            "icon" : "mermanFighter.png",
            "groups" : ["water"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 6,
            "level" : 3,
            "minHitPoints" : 2,
            "maxHitPoints" : 15,
            "experienceValue" : 14,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 7,
            "resistance" : 2,
            "hitModifier" : 3,
            "description" : "The Merfolk once had a tenuous alliance with the Helenikan Empire, but they now regard all sea-going vessels as a threat to their oceanic sovereignty."
        },
        {
            "name" : "Giant Crab",
            "icon" : "crab.png",
            "groups" : ["water"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 10,
            "level" : 3,
            "minHitPoints" : 4,
            "maxHitPoints" : 10,
            "experienceValue" : 15,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 4,
            "resistance" : 1,
            "hitModifier" : 2,
            "description" : "This species of crab is enormous and eats anything that moves. Its claws are tremendously powerful."
        },
        {
            "name" : "Spitting Spider",
            "icon" : "redSpider.png",
            "groups" : ["outdoor", "desert", "swamp"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 3,
            "rangeMinDamage" : 3,
            "rangeMaxDamage" : 6,
            "level" : 3,
            "rangeAnimation" : "animHotBallSmall.png",
            "minHitPoints" : 4,
            "maxHitPoints" : 10,
            "experienceValue" : 15,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 4,
            "hitModifier" : 2,
            "description" : "The Spitting Spider can project acidic venom with astounding accuracy over great distances. It's an insect worth avoiding."
        },
        {
            "name" : "Orc Champion",
            "icon" : "bugbear.png",
            "groups" : ["dungeon", "desert", "tundra"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 7,
            "level" : 3,
            "minHitPoints" : 6,
            "maxHitPoints" : 15,
            "experienceValue" : 14,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 6,
            "hitModifier" : 3,
            "resistance" : 1,
            "spells" : [
                {
                    "name" : "Memory of Abuse",
                    "weight" : 15
                }
            ],
            "description" : "These orcs are believed to have been transformed via evil magic and gruelling conditioning. They develop an innate ability to temporarily increase their strength, to devastating effect."
        },
        {
            "name" : "Lizard Man",
            "icon" : "lizardMan.png",
            "groups" : ["lizard", "desert"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 7,
            "level" : 3,
            "minHitPoints" : 5,
            "maxHitPoints" : 12,
            "experienceValue" : 13,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 8,
            "resistance" : 2,
            "hitModifier" : 5,
            "description" : "Typically found in swampy or subterranean environments, the Lizard Man is not a true lizard, but is actually amphibious. It moves very quickly, and spares no mercy for humankind."
        },
        {
            "name" : "Spore Soldier",
            "icon" : "sporeSoldier.png",
            "groups" : ["swamp"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 5,
            "level" : 100,
            "minHitPoints" : 4,
            "maxHitPoints" : 10,
            "experienceValue" : 12,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 8,
            "hitModifier" : 7,
            "resistance" : 3,
            "description" : "These overgrown spores are pushed into military service at far too young an age. They are quick, but dangerous only in great numbers."
        },
        {
            "name" : "Broodling",
            "icon" : "broodling.png",
            "groups" : ["swamp"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 4,
            "level" : 3,
            "minHitPoints" : 3,
            "maxHitPoints" : 10,
            "experienceValue" : 15,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 6,
            "resistance" : 4,
            "hitModifier" : 4,
            "hitSpell" : "Poison Blade",
            "description" : "These strange insectoids are found deep in the Urlani Marshlands. They attack ambidextrously and their blades are tipped with a foul poison."
        },
        //// LEVEL 4
        {
            "name" : "Oliphant",
            "icon" : "oliphant2.png",
            "groups" : ["desert"],
            "meleeMinDamage" : 4,
            "meleeMaxDamage" : 9,
            "level" : 4,
            "minHitPoints" : 8,
            "maxHitPoints" : 16,
            "experienceValue" : 22,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 6,
            "resistance" : 2,
            "hitModifier" : 4,
            "description" : "Oliphants are a race of elephant-like humanoids. They are fiercely reclusive and suspicious of humans."
        },
        {
            "name" : "Troll",
            "icon" : "troll.png",
            "groups" : ["outdoor", "dungeon", "tundra"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 8,
            "rangeMinDamage" : 3,
            "rangeMaxDamage" : 7,
            "level" : 4,
            "rangeAnimation" : "animRockSmall1.png",
            "minHitPoints" : 6,
            "maxHitPoints" : 24,
            "experienceValue" : 26,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 7,
            "resistance" : 3,
            "hitModifier" : 3,
            "description" : "Trolls are large, nasty and devious humanoids. Their preferred method of attack is to hurl large rocks at their opponent, with devastating efficiency."
        },
        {
            "name" : "Frost Snake",
            "icon" : "whiteSnake.png",
            "groups" : ["tundra"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 5,
            "rangeMinDamage" : 4,
            "rangeMaxDamage" : 10,
            "level" : 4,
            "rangeAnimation" : "animColdBallSmall.png",
            "minHitPoints" : 7,
            "maxHitPoints" : 19,
            "experienceValue" : 28,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 6,
            "resistance" : 8,
            "hitModifier" : 4,
            "description" : "The large and mischievous Frost Snake uses dense balls of ice as a projectile weapon, expertly spitting at opponents from range. It is also fairly resistant to magical attacks."
        },
        {
            "name" : "Bugbear",
            "icon" : "bugbear2.png",
            "groups" : ["outdoor", "dungeon", "desert", "tundra"],
            "meleeMinDamage" : 5,
            "meleeMaxDamage" : 12,
            "level" : 4,
            "minHitPoints" : 8,
            "maxHitPoints" : 24,
            "experienceValue" : 30,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 7,
            "resistance" : 3,
            "hitModifier" : 4,
            "spells" : [
                {
                    "name" : "Regenerate",
                    "weight" : 10
                }
            ],
            "description" : "The Bugbear is a race of large and vicious humanoids. They possess the ability to regenerate their wounds, which matches well with their highly aggressive combat style."
        },
        {
            "name" : "Ghoul",
            "icon" : "ghoul.png",
            "groups" : ["undead"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 7,
            "level" : 4,
            "minHitPoints" : 10,
            "maxHitPoints" : 22,
            "experienceValue" : 32,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 8,
            "resistance" : 3,
            "hitModifier" : 5,
            "spells" : [
                {
                    "name" : "Scare",
                    "weight" : 15
                }
            ],
            "limit" : true,
            "description" : "One of the most frightening incarnations of the undead, the Ghoul can emit a fearsome shriek that will freeze an opponent in its tracks."
        },
        {
            "name" : "Lizard Gladiator",
            "icon" : "giantLizard.png",
            "groups" : ["lizard", "desert"],
            "meleeMinDamage" : 4,
            "meleeMaxDamage" : 14,
            "level" : 4,
            "minHitPoints" : 8,
            "maxHitPoints" : 20,
            "experienceValue" : 35,
            "numAttacks" : 1,
            "numMoves" : 1,
            "hitModifier" : 4,
            "armorClass" : 5,
            "resistance" : 4,
            "description" : "The Lizard Gladiators are literally raised from birth on the hallowed grounds of the battle arenas, resulting in strong, skilled and fearless warriors."
        },
        {
            "name" : "Spider Queen",
            "icon" : "hugeSpider.png",
            "groups" : ["outdoor", "dungeon", "desert", "swamp"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 6,
            "level" : 4,
            "spells" : [
                {
                    "name" : "Summon Black Spider",
                    "weight" : 50
                },
                {
                    "name" : "Web of Protection",
                    "weight" : 20
                }
            ],
            "minHitPoints" : 18,
            "maxHitPoints" : 32,
            "experienceValue" : 35,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 5,
            "resistance" : 3,
            "hitModifier" : 3,
            "limit" : true,
            "description" : "The glorious Spider Queen can summon her numerous children with but a whisper. She also spins reinforcing webs to protect her brood."
        },
        {
            "name" : "Merman Swordsman",
            "icon" : "merman.png",
            "groups" : ["water"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 8,
            "level" : 4,
            "minHitPoints" : 5,
            "maxHitPoints" : 18,
            "experienceValue" : 28,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 6,
            "resistance" : 3,
            "hitModifier" : 4,
            "description" : "Training with a sword underwater results in an incredible amount of precision an speed, making the Merman Swordsman a highly respected opponent in battle, both in and out of water."
        },
        {
            "name" : "Merman Sorcerer",
            "icon" : "mermanWizard.png",
            "groups" : ["water"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 4,
            "level" : 4,
            "spells" : [
                {
                    "name" : "Summon Swordfish",
                    "weight" : 40
                },
                {
                    "name" : "Aquatic Missile",
                    "weight" : 80
                },
                {
                    "name" : "Oyster Ointment",
                    "weight" : 20
                }
            ],
            "minHitPoints" : 6,
            "maxHitPoints" : 16,
            "experienceValue" : 25,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 5,
            "resistance" : 6,
            "hitModifier" : 3,
            "description" : "Some legends claim that the Merfolk were the very first discoverers of sorcery, although it is disputed. The Merman Sorcerers can heal allies and summon oceanic brethren to aid in their battles."
        },
        {
            "name" : "Goblin King",
            "icon" : "goblinKing.png",
            "groups" : ["goblin"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 2,
            "level" : 4,
            "spells" : [
                {
                    "name" : "Summon Goblin",
                    "weight" : 40
                },
                {
                    "name" : "Royal Slime",
                    "weight" : 60
                },
                {
                    "name" : "Speech Maniacal",
                    "weight" : 20
                }
            ],
            "minHitPoints" : 18,
            "maxHitPoints" : 28,
            "experienceValue" : 40,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 4,
            "resistance" : 4,
            "hitModifier" : 2,
            "limit" : true,
            "description" : "There are a conspicuously large number of Goblins claiming to be monarchs, and each has legions of followers, who can be whipped into a bloodthirsty frenzy."
        },
        {
            "name" : "Mushroom Drone",
            "icon" : "mushroomDrone.png",
            "groups" : ["swamp"],
            "meleeMinDamage" : 4,
            "meleeMaxDamage" : 10,
            "hitSpell" : "Fungal Trip",
            "level" : 100,
            "spells" : [
                {
                    "name" : "Summon Spore",
                    "weight" : 20
                }
            ],
            "minHitPoints" : 12,
            "maxHitPoints" : 26,
            "experienceValue" : 25,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 6,
            "resistance" : 4,
            "hitModifier" : 4,
            "description" : "Mushroom Drones inject a fungal toxin that dulls reflexes significantly. They also are capable of summoning hordes of Spores when threatened."
        },
        {
            "name" : "Treant Elder",
            "icon" : "treantElder.png",
            "groups" : ["outdoor"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 15,
            "level" : 4,
            "minHitPoints" : 22,
            "maxHitPoints" : 32,
            "experienceValue" : 42,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 4,
            "resistance" : 8,
            "hitModifier" : 4,
            "spells" : [
                {
                    "name" : "Tangle of Roots",
                    "weight" : 20
                }
            ],
            "description" : "The ancient Treant Elders can summon the forces of nature to spontaneously sprout roots, entrapping its adversaries."
        },
        {
            "name" : "Brood Guard",
            "icon" : "swampGuard.png",
            "groups" : ["swamp"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 8,
            "level" : 4,
            "minHitPoints" : 7,
            "maxHitPoints" : 18,
            "experienceValue" : 28,
            "numAttacks" : 2,
            "numMoves" : 2,
            "armorClass" : 6,
            "resistance" : 2,
            "hitModifier" : 4,
            "spells" : [
                {
                    "name" : "Brood Trance",
                    "weight" : 10
                }
            ],
            "description" : "Brood Guards are highly trained and quick-moving warriors. They can enter a trance that further enhances the accuracy of their movements."
        },
        //// LEVEL 5
        {
            "name" : "Skeleton Wizard",
            "icon" : "skeletonWizard.png",
            "groups" : ["undead", "skeleton"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 8,
            "level" : 5,
            "spells" : [
                {
                    "name" : "Summon Skeleton",
                    "weight" : 20
                },
                {
                    "name" : "Electric Bolt",
                    "weight" : 70
                },
                {
                    "name" : "Whithering Glare",
                    "weight" : 10
                }
            ],
            "minHitPoints" : 18,
            "maxHitPoints" : 30,
            "experienceValue" : 45,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 6,
            "resistance" : 6,
            "hitModifier" : 5,
            "limit" : true,
            "description" : "Unlike most raised spirits, the Skeleton Wizards willingly joined the undead, and are hence more powerful. They can summon skeletons and weaken their opponents with their gaze."
        },
        {
            "name" : "Lizard Wizard",
            "icon" : "lizardWizard.png",
            "groups" : ["lizard", "desert"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 4,
            "level" : 5,
            "minHitPoints" : 15,
            "maxHitPoints" : 24,
            "experienceValue" : 50,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 5,
            "hitModifier" : 5,
            "resistance" : 6,
            "spells" : [
                {
                    "name" : "Sickening Glow",
                    "weight" : 20
                },
                {
                    "name" : "Reptilian Flash",
                    "weight" : 75
                }
            ],
            "description" : "The Lizard Wizards are cunning practitioners of spellcraft. They can launch a flurry of magical attacks, and have mastered spells to weaken their opponents in combat."
        },
        {
            "name" : "Lizard Elite",
            "icon" : "lizardKing.png",
            "groups" : ["lizard"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 9,
            "level" : 100,
            "minHitPoints" : 41,
            "maxHitPoints" : 55,
            "experienceValue" : 90,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 7,
            "resistance" : 8,
            "hitModifier" : 7,
            "spells" : [
                {
                    "name" : "Weakening Field",
                    "weight" : 20
                },
                {
                    "name" : "Lizard Blast",
                    "weight" : 75
                }
            ],
            "description" : "The Lizard Elite are a mysterious and powerful group in the culture of Lizard Men. Their magic can weaken their enemies, allowing their allies to strike without fear of counter-attack."
        },
        {
            "name" : "Giant Jellyfish",
            "icon" : "jellyfish.png",
            "groups" : ["water"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 8,
            "level" : 5,
            "minHitPoints" : 15,
            "maxHitPoints" : 30,
            "experienceValue" : 45,
            "numAttacks" : 1,
            "numMoves" : 1,
            "hitModifier" : 5,
            "armorClass" : 4,
            "resistance" : 7,
            "hitSpell" : "Jellyfish Sting",
            "description" : "The Giant Jellyfish not only has a size advantage, but its sting delivers a poisonous toxin to its victim."
        },
        {
            "name" : "Oliphant Sentry",
            "icon" : "oliphant4.png",
            "groups" : ["desert"],
            "meleeMinDamage" : 5,
            "meleeMaxDamage" : 9,
            "level" : 5,
            "minHitPoints" : 14,
            "maxHitPoints" : 32,
            "experienceValue" : 38,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 10,
            "resistance" : 4,
            "hitModifier" : 5,
            "spells" : [
                {
                    "name" : "Pachydermal Rage",
                    "weight" : 10
                }
            ],
            "description" : "The Oliphant Sentry's training imbues it with a maniacal instinct to preserve the well-being of the herd. It can fly off in to a wild rage when it feels that its brethren are threatened."
        },
        {
            "name" : "Ogre",
            "icon" : "ogre.png",
            "groups" : ["outdoor", "dungeon", "desert", "tundra"],
            "meleeMinDamage" : 4,
            "meleeMaxDamage" : 12,
            "level" : 5,
            "minHitPoints" : 18,
            "maxHitPoints" : 36,
            "experienceValue" : 40,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 9,
            "resistance" : 4,
            "hitModifier" : 6,
            "description" : "The common Ogre is the scourge of civilized people everywhere, as civilized people is the food of choice for the common Ogre."
        },
        {
            "name" : "Mummy",
            "icon" : "mummy.png",
            "groups" : ["undead"],
            "meleeMinDamage" : 4,
            "meleeMaxDamage" : 10,
            "level" : 5,
            "minHitPoints" : 16,
            "maxHitPoints" : 30,
            "experienceValue" : 40,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 10,
            "resistance" : 4,
            "hitModifier" : 6,
            "hitSpell" : "Weakening Bite",
            "description" : "A Mummy is the reanimated corpse of a wealthy noble or ruler. It can move with surprising speed, and its vicious bite weakens its victim."
        },
        {
            "name" : "Phantom",
            "icon" : "phantom2.png",
            "groups" : ["undead"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 6,
            "level" : 5,
            "minHitPoints" : 14,
            "maxHitPoints" : 28,
            "experienceValue" : 40,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 8,
            "resistance" : 10,
            "hitModifier" : 6,
            "spells" : [
                {
                    "name" : "Phantom Menace",
                    "weight" : 75
                }
            ],
            "description" : "A Phantom is an undead spirit that is only partially present in the corporeal realm. It attacks with magic at range, yet is itself very resistant to magical effects."
        },
        {
            "name" : "Fire Snake",
            "icon" : "redSnake.png",
            "groups" : ["outdoor", "dungeon", "desert", "marsh"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 6,
            "rangeMinDamage" : 1,
            "rangeMaxDamage" : 6,
            "target" : "area",
            "rangeAnimation" : "animFireball.png",
            "level" : 5,
            "minHitPoints" : 15,
            "maxHitPoints" : 25,
            "experienceValue" : 50,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 6,
            "resistance" : 3,
            "hitModifier" : 8,
            "description" : "One of the most dangerous animals ever documented, the combustible venom of the Fire Snake can engulf hapless opponents in blistering flames."
        },
        {
            "name" : "Fungus Keeper",
            "icon" : "fungusKeeper.png",
            "groups" : ["swamp"],
            "meleeMinDamage" : 4,
            "meleeMaxDamage" : 10,
            "level" : 5,
            "minHitPoints" : 11,
            "maxHitPoints" : 23,
            "experienceValue" : 40,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 7,
            "resistance" : 6,
            "hitModifier" : 6,
            "hitSpell" : "Blinding Spores",
            "spells" : [
                {
                    "name" : "Regenerate",
                    "weight" : 50
                }
            ],
            "description" : "The mysterious Fungus Keeper can quickly heal its own wounds. When it attacks, blinding spores are propelled in to the eyes of its target."
        },
        {
            "name" : "Ice Troll",
            "icon" : "iceTroll.png",
            "groups" : ["tundra"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 10,
            "rangeMinDamage" : 2,
            "rangeMaxDamage" : 7,
            "level" : 5,
            "rangeAnimation" : "animRockSmall1.png",
            "minHitPoints" : 14,
            "maxHitPoints" : 23,
            "experienceValue" : 50,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 7,
            "resistance" : 6,
            "hitModifier" : 6,
            "spells" : [
                {
                    "name" : "Frozen Armor",
                    "weight" : 40
                }
            ],
            "description" : "The Ice Troll is not the largest of trolls, but it is skilled in hurling rocks at its opponents, and is able to protect itself at will in a sheath of hardened ice."
        },
        {
            "name" : "Drow Elf",
            "icon" : "drowElf.png",
            "groups" : ["tundra"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 5,
            "rangeMinDamage" : 1,
            "rangeMaxDamage" : 5,
            "level" : 5,
            "rangeAnimation" : "animArrow.png",
            "minHitPoints" : 13,
            "maxHitPoints" : 22,
            "experienceValue" : 55,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 8,
            "resistance" : 7,
            "hitModifier" : 6,
            "description" : "The Drow are a subspecies of elf that long ago abandoned the forests for the Northern taiga. Reclusive and nocturnal, they are even more adept with a bow than their arboreal cousins."
        },
        {
            "name" : "Elf Ranger",
            "icon" : "gnome3.png",
            "groups" : ["outdoor"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 4,
            "rangeMinDamage" : 2,
            "rangeMaxDamage" : 6,
            "level" : 100,
            "rangeAnimation" : "animArrow.png",
            "minHitPoints" : 15,
            "maxHitPoints" : 21,
            "experienceValue" : 55,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 8,
            "resistance" : 3,
            "hitModifier" : 7,
            "description" : "The Elf Rangers are a reclusive but loyal group of forest defenders. Adept archers, they will appear when called up on by their Ranger brethren."
        },
        {
            "name" : "Snow Ogre",
            "icon" : "snowman.png",
            "groups" : ["tundra"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 10,
            "level" : 5,
            "minHitPoints" : 16,
            "maxHitPoints" : 32,
            "minSpellPoints": 2,
            "maxSpellPoints": 5,
            "experienceValue" : 42,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 7,
            "resistance" : 5,
            "hitModifier" : 7,
            "spells" : [
                {
                    "name" : "Ice Snap",
                    "weight" : 50
                }
            ],
            "description" : "While not as large as its warm-weather cousins, the Snow Ogre is no less dangerous. It will snap quite suddenly into a rage, attacking its enemies with wild abandon."
        },
        {
            "name" : "Painted Spider",
            "icon" : "paintedSpider.png",
            "groups" : ["outdoor", "swamp"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 7,
            "level" : 5,
            "minHitPoints" : 12,
            "maxHitPoints" : 27,
            "experienceValue" : 40,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 6,
            "resistance" : 4,
            "hitModifier" : 6,
            "spells" : [
                {
                    "name" : "Binding Silk",
                    "weight" : 60
                }
            ],
            "description" : "The colorful markings on the Painted Spider are a warning to all that cross its path. Its silk can render its victims helpless."
        },
        //// LEVEL 6
        {
            "name" : "Mother Fungus",
            "icon" : "motherFungus.png",
            "groups" : ["swamp"],
            "attackWeight" : 0,
            "moveWeight" : 0,
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 1,
            "level" : 6,
            "spells" : [
                {
                    "name" : "Summon Drone",
                    "weight" : 30
                },
                {
                    "name" : "Fungal Regrowth",
                    "weight" : 50
                }
            ],
            "minHitPoints" : 22,
            "maxHitPoints" : 32,
            "experienceValue" : 70,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 4,
            "hitModifier" : 7,
            "resistance" : 5,
            "limit" : true,
            "description" : "Enormous and immobile, the Mother Fungus produces offspring at a prodigious rate, and can heal her brood as well."
        },
        {
            "name" : "Spectre",
            "icon" : "spectre.png",
            "groups" : ["undead"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 15,
            "rangeMinDamage" : 3,
            "rangeMaxDamage" : 8,
            "level" : 6,
            "rangeAnimation" : "animHotBallSmall.png",
            "minHitPoints" : 24,
            "maxHitPoints" : 36,
            "experienceValue" : 80,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 11,
            "resistance" : 4,
            "hitModifier" : 8,
            "description" : "A mysterious undead form, the insidious Spectre is nearly invisible, making it a very difficult opponent to defeat."
        },
        {
            "name" : "Two-headed Troll",
            "icon" : "twoHeadedTroll.png",
            "groups" : ["outdoor", "dungeon", "tundra"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 6,
            "rangeMinDamage" : 2,
            "rangeMaxDamage" : 6,
            "level" : 6,
            "rangeAnimation" : "animRockSmall1.png",
            "minHitPoints" : 25,
            "maxHitPoints" : 45,
            "experienceValue" : 85,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 10,
            "resistance" : 4,
            "hitModifier" : 8,
            "description" : "While Two-headed Trolls are notorious for their continuous self-bickering, this belies their coordination and skill in combat."
        },
        {
            "name" : "Cave Peeper",
            "icon" : "cavePeeper.png",
            "groups" : ["outdoor", "dungeon", "swamp"],
            "meleeMinDamage" : 6,
            "meleeMaxDamage" : 12,
            "level" : 6,
            "minHitPoints" : 25,
            "maxHitPoints" : 39,
            "experienceValue" : 68,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 9,
            "resistance" : 7,
            "hitModifier" : 9,
            "spells" : [
                {
                    "name" : "Wink",
                    "weight" : 50
                }
            ],
            "description" : "The unnerving Cave Peeper is a very dangerous creature, with the astonishing knack of suddenly appearing right beside an unwary adventurer."
        },
        {
            "name" : "Oliphant Charger",
            "icon" : "oliphant3.png",
            "groups" : ["desert"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 10,
            "level" : 6,
            "minHitPoints" : 22,
            "maxHitPoints" : 33,
            "experienceValue" : 75,
            "numAttacks" : 2,
            "numMoves" : 2,
            "armorClass" : 9,
            "resistance" : 5,
            "hitModifier" : 8,
            "description" : "The Charger is not a quick-witted Oliphant, but it relies on its superior speed and size to carry the day."
        },
        {
            "name" : "Cat Warrior",
            "icon" : "catWarrior.png",
            "groups" : ["desert"],
            "meleeMinDamage" : 4,
            "meleeMaxDamage" : 11,
            "level" : 6,
            "minHitPoints" : 18,
            "maxHitPoints" : 30,
            "experienceValue" : 75,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 8,
            "resistance" : 7,
            "hitModifier" : 10,
            "spells" : [
                {
                    "name" : "Feline Divinity",
                    "weight" : 25
                }
            ],
            "description" : "The scourge of the Badlands, the marauding Cat Warriors are adept at swordplay, and they can invoke a shamanistic magic to shield themselves from damage."
        },
        {
            "name" : "Kraken",
            "icon" : "kraken.png",
            "groups" : ["water"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 8,
            "level" : 6,
            "minHitPoints" : 25,
            "maxHitPoints" : 45,
            "experienceValue" : 80,
            "numAttacks" : 3,
            "numMoves" : 1,
            "armorClass" : 8,
            "resistance" : 4,
            "hitModifier" : 8,
            "description" : "The murderous Kraken can tear limbs from a body the way a child tears leaves from a twig. Upon encountering these overgrown squids, it is advised to set sail for dry land straight away."
        },
        {
            "name" : "Clay Golem",
            "icon" : "clayGolem.png",
            "groups" : ["outdoor", "dungeon", "swamp"],
            "meleeMinDamage" : 6,
            "meleeMaxDamage" : 18,
            "level" : 6,
            "minHitPoints" : 28,
            "maxHitPoints" : 49,
            "experienceValue" : 70,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 10,
            "resistance" : 4,
            "hitModifier" : 8,
            "description" : "Stoic and enormous, the Clay Golem is a mindless yet effective instrument of punishment."
        },
        {
            "name" : "Ice Golem",
            "icon" : "iceGolem.png",
            "groups" : ["tundra"],
            "meleeMinDamage" : 5,
            "meleeMaxDamage" : 12,
            "level" : 6,
            "minHitPoints" : 25,
            "maxHitPoints" : 42,
            "experienceValue" : 75,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 10,
            "resistance" : 5,
            "hitModifier" : 8,
            "description" : "The Ice Golem is deceptively agile, considering its blocky construction. Whilst being crushed by its fist, one should remain mindful of the second fist, which is rarely far behind."
        },
        {
            "name" : "Ogre Assassin",
            "icon" : "ogre2.png",
            "groups" : ["outdoor", "dungeon", "desert", "tundra"],
            "meleeMinDamage" : 9,
            "meleeMaxDamage" : 20,
            "level" : 6,
            "minHitPoints" : 20,
            "maxHitPoints" : 32,
            "experienceValue" : 80,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 11,
            "resistance" : 6,
            "hitModifier" : 8,
            "description" : "The Ogre Assassins are well-trained, resulting in a quicker and more intelligent foe than a standard Ogre. Their preferred method of attack is the ambush."
        },
        {
            "name" : "Cyclops",
            "icon" : "cyclops.png",
            "groups" : ["outdoor", "dungeon", "desert"],
            "meleeMinDamage" : 9,
            "meleeMaxDamage" : 16,
            "level" : 6,
            "minHitPoints" : 30,
            "maxHitPoints" : 48,
            "experienceValue" : 65,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 9,
            "resistance" : 6,
            "hitModifier" : 9,
            "description" : "One-eyed and wicked, the Cyclops delights in tormenting creatures smaller or weaker than itself."
        },
        //// Level 7
        {
            "name" : "Oliphant Priestess",
            "icon" : "oliphant.png",
            "groups" : ["desert"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 9,
            "level" : 7,
            "spells" : [
                {
                    "name" : "Summon Oliphant 3",
                    "weight" : 50
                },
                {
                    "name" : "Righteous Missile",
                    "weight" : 75
                },
                {
                    "name" : "Heal the Herd",
                    "weight" : 50
                }
            ],
            "minHitPoints" : 25,
            "maxHitPoints" : 40,
            "experienceValue" : 150,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 8,
            "hitModifier" : 10,
            "resistance" : 8,
            "limit" : true,
            "description" : "The Priestesses rule the Oliphant herd societies. They can magically summon their brethren, and can heal whole groups of compatriots at a time."
        },
        {
            "name" : "Mind Flayer",
            "icon" : "mindFlayer.png",
            "groups" : ["outdoor", "dungeon"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 10,
            "level" : 7,
            "minHitPoints" : 34,
            "maxHitPoints" : 55,
            "experienceValue" : 160,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 9,
            "resistance" : 7,
            "hitModifier" : 8,
            "spells" : [
                {
                    "name" : "Mind Flay",
                    "weight" : 75
                }
            ],
            "description" : "The Mind Flayer is the stuff of nightmares, a merciless killer that attacks its victims' minds with agonizing psychic damage."
        },
        {
            "name" : "Ice Magus",
            "icon" : "iceMage.png",
            "groups" : ["tundra"],
            "meleeMinDamage" : 3,
            "meleeMaxDamage" : 6,
            "level" : 7,
            "minHitPoints" : 25,
            "maxHitPoints" : 41,
            "minSpellPoints": 25,
            "maxSpellPoints": 35,
            "experienceValue" : 160,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 7,
            "resistance" : 6,
            "hitModifier" : 6,
            "spells" : [
                {
                    "name" : "Hailstorm",
                    "weight" : 40
                },
                {
                    "name" : "Refract",
                    "weight" : 20
                },
                {
                    "name" : "Whiteout",
                    "weight" : 30
                },
                {
                    "name" : "Summon Snow Ogre",
                    "weight" : 30
                }
            ],
            "limit" : true,
            "description" : "The Ice Magi are infamous throughout the Fiefdoms for their spell-casting prowess. Intelligent and unpredictable, they can defeat an opponent a number of different ways."
        },
        {
            "name" : "Yeti",
            "icon" : "yeti.png",
            "groups" : ["tundra"],
            "meleeMinDamage" : 10,
            "meleeMaxDamage" : 18,
            "level" : 7,
            "minHitPoints" : 43,
            "maxHitPoints" : 65,
            "experienceValue" : 175,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 7,
            "hitModifier" : 10,
            "resistance" : 12,
            "description" : "The Yeti are an ancient and reclusive race, with a natural resistance to magic. When angered they are quite formidable in combat."
        },
        {
            "name" : "Forest Dweller",
            "icon" : "forestMan.png",
            "groups" : ["outdoor"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 5,
            "attackWeight" : 0,
            "level" : 7,
            "minHitPoints" : 32,
            "maxHitPoints" : 55,
            "experienceValue" : 175,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 7,
            "hitModifier" : 11,
            "resistance" : 6,
            "spells" : [
                {
                    "name" : "Strangle",
                    "weight" : 35
                },
                {
                    "name" : "Earth Shock",
                    "weight" : 75
                }
            ],
            "description" : "Forest Dwellers are fanatical about defending natural habitats from interlopers. They can call upon Nature herself to paralyze opponents, then inflict considerable damage."
        },
        {
            "name" : "Sea Monster",
            "icon" : "seaSerpent.png",
            "groups" : ["water"],
            "meleeMinDamage" : 9,
            "meleeMaxDamage" : 22,
            "level" : 7,
            "minHitPoints" : 43,
            "maxHitPoints" : 71,
            "experienceValue" : 175,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 9,
            "hitModifier" : 9,
            "resistance" : 10,
            "description" : "The dreaded Sea Monster haunts the nightmares of all sailors. Enormous and unstoppable, it has destroyed whole ships with a mere swing of its tail."
        },
        {
            "name" : "Rock Golem",
            "icon" : "rockGolem.png",
            "groups" : ["outdoor", "dungeon", "desert"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 10,
            "rangeMinDamage" : 4,
            "rangeMaxDamage" : 15,
            "level" : 7,
            "rangeAnimation" : "animRockSmall1.png",
            "minHitPoints" : 40,
            "maxHitPoints" : 62,
            "experienceValue" : 160,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 10,
            "resistance" : 6,
            "hitModifier" : 10,
            "description" : "The Rock Golem attacks by hurling the very stuff that it is made of: rocks. Its geologic construction has few weaknesses."
        },
        {
            "name" : "Minotaur",
            "icon" : "minotaur.png",
            "groups" : ["dungeon", "outdoor"],
            "meleeMinDamage" : 12,
            "meleeMaxDamage" : 20,
            "level" : 7,
            "minHitPoints" : 45,
            "maxHitPoints" : 70,
            "experienceValue" : 150,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 9,
            "resistance" : 6,
            "hitModifier" : 12,
            "description" : "The mighty Minotaur is among the greatest of warriors. Few have survived hand-to-hand combat with the murderous creatures."
        },
        {
            "name" : "Death Viper",
            "icon" : "blackSnake.png",
            "groups" : ["dungeon", "desert", "outdoor", "swamp"],
            "meleeMinDamage" : 15,
            "meleeMaxDamage" : 30,
            "level" : 7,
            "minHitPoints" : 25,
            "maxHitPoints" : 40,
            "experienceValue" : 150,
            "numAttacks" : 1,
            "numMoves" : 3,
            "armorClass" : 10,
            "resistance" : 4,
            "hitModifier" : 10,
            "description" : "Aptly named, the Death Viper is incredibly quick, and incredibly deadly. Once it has spotted you, standing your ground is the only option, as you cannot outrun it."
        },
        {
            "name" : "Baron Vloyansk",
            "icon" : "dwarfSkeleton.png",
            "groups" : ["dungeon"],
            "meleeMinDamage" : 12,
            "meleeMaxDamage" : 25,
            "level" : 100,
            "minHitPoints" : 70,
            "maxHitPoints" : 85,
            "experienceValue" : 225,
            "numAttacks" : 1,
            "numMoves" : 3,
            "armorClass" : 14,
            "resistance" : 12,
            "hitModifier" : 12,
            "hitSpell" : "Blue Drain",
            "spells" : [
                {
                    "name" : "Summon Phantom",
                    "weight" : 30
                }
            ],
            "description" : "The Baron was once a fierce and noble leader of Dwarves. But to retain the Blue Throne, he allowed himself to be converted into a horrific undead monster that can drain life from its opponents."
        },
        {
            "name" : "Wyvern",
            "icon" : "wyvern.png",
            "groups" : ["outdoor"],
            "meleeMinDamage" : 12,
            "meleeMaxDamage" : 24,
            "rangeMinDamage" : 9,
            "rangeMaxDamage" : 18,
            "level" : 7,
            "rangeAnimation" : "animFireBall.png",
            "minHitPoints" : 55,
            "maxHitPoints" : 80,
            "experienceValue" : 250,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 9,
            "resistance" : 6,
            "hitModifier" : 11,
            "description" : "The flightless cousin of the mighty Dragons, the enormous Wyvern is a fierce opponent, capable of breathing fire at range and devastating in melee combat with its tail and claws."
        },
        {
            "name" : "Wraith",
            "icon" : "wraith2.png",
            "groups" : ["undead", "dungeon"],
            "meleeMinDamage" : 4,
            "meleeMaxDamage" : 8,
            "rangeMinDamage" : 5,
            "rangeMaxDamage" : 12,
            "level" : 7,
            "rangeAnimation" : "animColdBallSmall.png",
            "minHitPoints" : 25,
            "maxHitPoints" : 45,
            "experienceValue" : 150,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 15,
            "resistance" : 4,
            "hitModifier" : 10,
            "description" : "A Wraith is the undead incarnation of a soul that was simply too angry to remain properly dead. It is very hard to injure and can deal considerable damage at range."
        },
        {
            "name" : "Undead Prince",
            "icon" : "undeadPrince.png",
            "groups" : ["default"],
            "meleeMinDamage" : 8,
            "meleeMaxDamage" : 20,
            "level" : 100,
            "minHitPoints" : 62,
            "maxHitPoints" : 70,
            "experienceValue" : 180,
            "numAttacks" : 1,
            "numMoves" : 1,
            "resistance" : 9,
            "armorClass" : 15,
            "hitModifier" : 11,
            "potency" : 2,
            "spells" : [
                {
                    "name" : "Unholy Miasma",
                    "weight" : 40
                }
            ],
            "description" : "Royalty in the undead is a known, but not well-understood phenomenon. It is believed that they draw their power from feasting on the energy of lesser undead forms."
        },
        //// Level 8
        {
            "name" : "Beholder",
            "icon" : "beholder.png",
            "groups" : ["dungeon"],
            "meleeMinDamage" : 8,
            "meleeMaxDamage" : 20,
            "rangeMinDamage" : 9,
            "rangeMaxDamage" : 25,
            "level" : 8,
            "rangeAnimation" : "animLightning.png",
            "minHitPoints" : 45,
            "maxHitPoints" : 65,
            "experienceValue" : 320,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 12,
            "resistance" : 6,
            "hitModifier" : 13,
            "description" : "A mysterious and magical denizen of deep dungeons, the Beholder is an enormous hovering eyeball. It can deal substantial damage with only its gaze."
        },
        {
            "name" : "Dark Mage",
            "icon" : "darkMage.png",
            "groups" : ["dungeon"],
            "meleeMinDamage" : 5,
            "meleeMaxDamage" : 15,
            "rangeMinDamage" : 5,
            "rangeMaxDamage" : 11,
            "level" : 8,
            "rangeAnimation" : "animSpell4.png",
            "minHitPoints" : 45,
            "maxHitPoints" : 55,
            "experienceValue" : 350,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 10,
            "hitModifier" : 12,
            "description" : "The Dark Mages are a sect of evil magic wielders, bent on misery and destruction. They overwhelm opponents with vicious magical attacks."
        },
        {
            "name" : "Iron Golem",
            "icon" : "golem.png",
            "groups" : ["dungeon"],
            "meleeMinDamage" : 12,
            "meleeMaxDamage" : 25,
            "level" : 8,
            "minHitPoints" : 55,
            "maxHitPoints" : 80,
            "experienceValue" : 300,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 13,
            "resistance" : 10,
            "hitModifier" : 13,
            "description" : "A marvel of modern conjuring, the Iron Golem is an engineering feat of equal parts genius and lunacy. It is devastating in hand-to-hand combat."
        },
        {
            "name" : "Nuth Swordsman",
            "icon" : "nuthSwordsman.png",
            "groups" : ["dungeon", "outdoor", "desert"],
            "meleeMinDamage" : 7,
            "meleeMaxDamage" : 11,
            "level" : 8,
            "minHitPoints" : 48,
            "maxHitPoints" : 62,
            "experienceValue" : 290,
            "numAttacks" : 2,
            "numMoves" : 2,
            "armorClass" : 12,
            "resistance" : 7,
            "hitModifier" : 14,
            "spells" : [
                {
                    "name" : "Nuth Focus",
                    "weight" : 30
                }
            ],
            "description" : "The Nuth are legendary for their sword-fighting prowess. Rarely do they take a swing that does not inflict damage and hence are considered by many to be the most skilled warriors to ever pick up a sword."
        },
        {
            "name" : "Leviathan",
            "icon" : "leviathan.png",
            "groups" : ["water"],
            "meleeMinDamage" : 15,
            "meleeMaxDamage" : 28,
            "level" : 8,
            "minHitPoints" : 50,
            "maxHitPoints" : 85,
            "experienceValue" : 175,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 9,
            "hitModifier" : 11,
            "resistance" : 14,
            "description" : "The Leviathan is an impossibly large shark, once believed to only exist in the imaginations of drunken sailors. Sadly, they are quite real, in a very tactile and unpleasant way."
        },
        {
            "name" : "Vampire Bat",
            "icon" : "vampireBat.png",
            "groups" : ["dungeon"],
            "level" : 8,
            "meleeMinDamage" : 8,
            "meleeMaxDamage" : 20,
            "hitSpell" : "Bat Drain",
            "minHitPoints" : 20,
            "maxHitPoints" : 40,
            "experienceValue" : 275,
            "numAttacks" : 1,
            "numMoves" : 3,
            "armorClass" : 14,
            "resistance" : 4,
            "hitModifier" : 13,
            "description" : "One of the most vile creatures to ever take to the skies, the Vampire Bat moves with lightning quickness and can consume the life force of the victims it bites."
        },
        {
            "name" : "Life Golem",
            "icon" : "lifeGolem.png",
            "groups" : ["outdoor", "dungeon"],
            "meleeMinDamage" : 7,
            "meleeMaxDamage" : 12,
            "level" : 8,
            "minHitPoints" : 101,
            "maxHitPoints" : 133,
            "experienceValue" : 300,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 11,
            "resistance" : 15,
            "hitModifier" : 12,
            "description" : "The Life Golem is an animated collection of algae, moss and lichens. While not particularly powerful, it is able to absorb incredible amounts of damage, an is highly resistant to magic."
        },
        {
            "name" : "Ravenous Slime",
            "icon" : "slime.png",
            "groups" : ["dungeon"],
            "meleeMinDamage" : 8,
            "meleeMaxDamage" : 15,
            "level" : 8,
            "spells" : [
                {
                    "name" : "Summon Ravenous Slime",
                    "weight" : 40
                }
            ],
            "minHitPoints" : 15,
            "maxHitPoints" : 30,
            "experienceValue" : 300,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 12,
            "hitModifier" : 11,
            "limit" : true,
            "description" : "Ravenous Slimes are all the offspring of a single organism that was imbued with an unholy appetite in an experiment gone horribly awry. It devours nearly anything and reproduces at a frightening rate."
        },
        {
            "name" : "Wight",
            "icon" : "wight.png",
            "groups" : ["dungeon"],
            "meleeMinDamage" : 12,
            "meleeMaxDamage" : 25,
            "level" : 8,
            "minHitPoints" : 40,
            "maxHitPoints" : 65,
            "experienceValue" : 290,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 10,
            "resistance" : 10,
            "hitModifier" : 13,
            "potency" : 2,
            "hitSpell" : "Crippling Fear",
            "description" : "The Wights are the great warriors of the undead. Their cursed weaponry inflicts a crippling fear in those who are struck, rendering them completely helpless."
        },
        {
            "name" : "Warpling",
            "icon" : "warpling.png",
            "groups" : ["dungeon", "outdoor", "west"],
            "meleeMinDamage" : 5,
            "meleeMaxDamage" : 13,
            "level" : 8,
            "minHitPoints" : 25,
            "maxHitPoints" : 40,
            "experienceValue" : 250,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 8,
            "resistance" : 7,
            "hitModifier" : 15,
            "hitSpell" : "Portal",
            "spells" : [
                {
                    "name" : "Wink",
                    "weight" : 30
                }
            ],
            "description" : "Warplings are small, unusual creatures that have developed an ability to warp space around them. While not exactly dangerous, they prove to be a very frustrating opponent."
        },
        //// Level 9
        {
            "name" : "Drogann",
            "icon" : "monster.png",
            "groups" : ["dungeon"],
            "meleeMinDamage" : 10,
            "meleeMaxDamage" : 20,
            "rangeMinDamage" : 6,
            "rangeMaxDamage" : 12,
            "level" : 9,
            "rangeAnimation" : "animPurpleBallSmall.png",
            "minHitPoints" : 50,
            "maxHitPoints" : 80,
            "experienceValue" : 490,
            "numAttacks" : 2,
            "numMoves" : 3,
            "armorClass" : 13,
            "resistance" : 9,
            "hitModifier" : 15,
            "description" : "The Drogann are a cruel and intelligent race, bent on dominating all lesser creatures in their wake."
        },
        {
            "name" : "Shambling Mound",
            "icon" : "mudGolem.png",
            "groups" : ["dungeon", "outdoor"],
            "meleeMinDamage" : 20,
            "meleeMaxDamage" : 40,
            "level" : 9,
            "minHitPoints" : 95,
            "maxHitPoints" : 145,
            "experienceValue" : 390,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 12,
            "hitModifier" : 15,
            "resistance" : 15,
            "description" : "The Shambling Mound is a large, enormous pile of dirt and mud. It is thought to be the remnants of an ancient and powerful golem that has been worn down physically, yet its anger and determination remains."
        },
        {
            "name" : "Skeleton King",
            "icon" : "skeletonKing.png",
            "groups" : ["undead"],
            "meleeMinDamage" : 12,
            "meleeMaxDamage" : 25,
            "rangeMinDamage" : 8,
            "rangeMaxDamage" : 20,
            "level" : 9,
            "rangeAnimation" : "animLightning.png",
            "minHitPoints" : 45,
            "maxHitPoints" : 75,
            "experienceValue" : 550,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 12,
            "hitModifier" : 15,
            "description" : "The vast realms of the dead are ruled by the Skeleton Kings, who are often able to visit and wreak destruction on the worlds of the living, as well."
        },
        {
            "name" : "Hydra",
            "icon" : "hydra.png",
            "groups" : ["dungeon", "outdoor", "desert"],
            "meleeMinDamage" : 10,
            "meleeMaxDamage" : 20,
            "level" : 9,
            "minHitPoints" : 75,
            "maxHitPoints" : 105,
            "experienceValue" : 600,
            "numAttacks" : 3,
            "numMoves" : 2,
            "armorClass" : 13,
            "hitModifier" : 14,
            "description" : "A three-headed monstrosity, the Hydra can move and attack with unnerving speed and efficiency."
        },
        {
            "name" : "Bane Mage",
            "icon" : "baneMage.png",
            "groups" : ["dungeon"],
            "meleeMinDamage" : 10,
            "meleeMaxDamage" : 20,
            "attackWeight" : 0,
            "level" : 9,
            "minHitPoints" : 42,
            "maxHitPoints" : 68,
            "experienceValue" : 600,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 11,
            "resistance" : 18,
            "hitModifier" : 16,
            "potency" : 4,
            "spells" : [
                {
                    "name" : "Bane Blast",
                    "weight" : 50
                }
            ],
            "description" : "The Bane Mage has the appearance of a frail and elderly wizard. But it often surprises its opponent by attacking in close with powerful magic."
        },
        {
            "name" : "Golem Maker",
            "icon" : "undeadWizard.png",
            "groups" : ["dungeon", "outdoor"],
            "meleeMinDamage" : 5,
            "meleeMaxDamage" : 15,
            "rangeMinDamage" : 6,
            "rangeMaxDamage" : 11,
            "level" : 9,
            "rangeAnimation" : "animSpell4.png",
            "spells" : [
                {
                    "name" : "Summon Clay Golem",
                    "weight" : 50
                }
            ],
            "minHitPoints" : 45,
            "maxHitPoints" : 60,
            "experienceValue" : 600,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 11,
            "hitModifier" : 14,
            "limit" : true,
            "description" : "These fell conjurers summon enormous automatons, usually for the purpose of battling each other for supremacy. However, the Golem Makers are just as dangerous as their creations in combat."
        },
        {
            "name" : "White Dragon",
            "icon" : "whiteDragon.png",
            "groups" : ["tundra"],
            "meleeMinDamage" : 18,
            "meleeMaxDamage" : 36,
            "rangeMinDamage" : 12,
            "rangeMaxDamage" : 20,
            "target" : "area",
            "level" : 9,
            "rangeAnimation" : "animColdBallSmall.png",
            "minHitPoints" : 120,
            "maxHitPoints" : 140,
            "experienceValue" : 820,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 12,
            "resistance" : 10,
            "spells" : [
                {
                    name : "Field of Cold",
                    weight : 20
                }
            ],
            "limit" : true,
            "hitModifier" : 13,
            "description" : "The smallest of the dragons, the White Dragon is still quite large, and inhabits caves in only the coldest regions. It has a tendency to encase itself in an icy armor, making it very difficult to subdue."
        },
        {
            "name" : "Blue Dragon",
            "icon" : "blueDragon.png",
            "groups" : ["water"],
            "meleeMinDamage" : 18,
            "meleeMaxDamage" : 30,
            "rangeMinDamage" : 11,
            "rangeMaxDamage" : 25,
            "rangeAnimation" : "animColdBallSmall.png",
            "level" : 9,
            "minHitPoints" : 130,
            "maxHitPoints" : 140,
            "experienceValue" : 820,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 13,
            "resistance" : 13,
            "hitModifier" : 16,
            "limit" : true,
            "description" : "The Blue Dragon inhabits islands and other coastal areas, where it completely dominates and terrorizes the skies and seas. It guzzles large volumes of water while diving, then attacks at range with a high-powered stream."
        },
        {
            "name" : "Green Dragon",
            "icon" : "greenDragon.png",
            "groups" : ["dungeon", "outdoor"],
            "meleeMinDamage" : 15,
            "meleeMaxDamage" : 30,
            "rangeMinDamage" : 5,
            "rangeMaxDamage" : 10,
            "level" : 9,
            "rangeAnimation" : "animGreenBall.png",
            "minHitPoints" : 130,
            "maxHitPoints" : 160,
            "experienceValue" : 640,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 13,
            "potency" : 3,
            "hitSpell" : "Dragon Poison",
            "hitModifier" : 17,
            "limit" : true,
            "description" : "The Green Dragon can be found in nearly any temperate habitat, including underground. It attacks with its poisonous breath, leaving all in its wake to waste away."
        },
        {
            "name" : "Abomination",
            "icon" : "abomination.png",
            "groups" : ["dungeon"],
            "meleeMinDamage" : 4,
            "meleeMaxDamage" : 8,
            "rangeMinDamage" : 8,
            "rangeMaxDamage" : 14,
            "target" : "area",
            "level" : 9,
            "rangeAnimation" : "animFireBall.png",
            "minHitPoints" : 45,
            "maxHitPoints" : 60,
            "experienceValue" : 550,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 10,
            "hitModifier" : 15,
            "description" : "Abominations are diminutive in size, but those who have made the mistake of trifling with them are no longer with us. They are capable of incredible magical destruction."
        },
        {
            "name" : "Orgolon",
            "icon" : "arenaChampion2.png",
            "groups" : ["dungeon"],
            "meleeMinDamage" : 12,
            "meleeMaxDamage" : 24,
            "level" : 100,
            "minHitPoints" : 205,
            "maxHitPoints" : 230,
            "experienceValue" : 500,
            "numAttacks" : 2,
            "numMoves" : 2,
            "armorClass" : 10,
            "resistance" : 10,
            "hitModifier" : 15,
            "spells" : [
                {
                    "name" : "Self Rage",
                    "weight" : 30
                }
            ],
            "hitSpell" : "Demoralization",
            "description" : "Hailing from parts unknown, the mighty Orgolon has dominated the Tuumbak Arena for years on end. His size, speed and seemingly limitless anger have served him well in gladiatorial combat."
        },
        //// Level 10
        {
            "name" : "Vampire",
            "icon" : "vampire.png",
            "groups" : ["dungeon"],
            "level" : 10,
            "meleeMinDamage" : 18,
            "meleeMaxDamage" : 29,
            "hitSpell" : "Bat Drain",
            "minHitPoints" : 60,
            "maxHitPoints" : 85,
            "experienceValue" : 860,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 14,
            "resistance" : 13,
            "hitModifier" : 17,
            "spells" : [
                {
                    "name" : "Vampire Bless",
                    "weight" : 30
                }
            ],
            "description" : "The Vampire is one of the most wicked forms of undead. It feeds on the blood of the living, from which it derives great power, making it nearly invulnerable."
        },
        {
            "name" : "Stone Guardian",
            "icon" : "stoneGuardian.png",
            "groups" : ["dungeon"],
            "level" : 10,
            "meleeMinDamage" : 20,
            "meleeMaxDamage" : 35,
            "minHitPoints" : 60,
            "maxHitPoints" : 95,
            "experienceValue" : 850,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 11,
            "resistance" : 18,
            "hitModifier" : 16,
            "spells" : [
                {
                    "name" : "Stone Heal",
                    "weight" : 30
                }
            ],
            "description" : "Stone Guardians are created by powerful wizards to serve as ideal guards and warriors. They are highly resistant to magical attacks and can heal themselves during combat."
        },
        {
            "name" : "Jade Golem",
            "icon" : "jadeGolem.png",
            "groups" : ["dungeon"],
            "level" : 10,
            "meleeMinDamage" : 23,
            "meleeMaxDamage" : 38,
            "minHitPoints" : 80,
            "maxHitPoints" : 120,
            "experienceValue" : 845,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 16,
            "resistance" : 8,
            "hitModifier" : 17,
            "description" : "Large and finely-crafted masterpieces of golemic construction, physical attacks are rarely effective against the mighty Jade Golems."
        },
        {
            "name" : "Jylix",
            "icon" : "hornedMonster.png",
            "groups" : ["dungeon"],
            "level" : 10,
            "meleeMinDamage" : 10,
            "meleeMaxDamage" : 20,
            "minHitPoints" : 55,
            "maxHitPoints" : 85,
            "experienceValue" : 840,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 13,
            "resistance" : 9,
            "hitModifier" : 19,
            "spells" : [
                {
                    "name" : "Wink",
                    "weight" : 30
                }
            ],
            hitSpell : "Jylix Blind",
            "description" : "Little is known of the origins of the Jylix, but it is an excellent fighter and can teleport at will."
        },
        {
            "name" : "Djinn",
            "icon" : "djinn.png",
            "groups" : ["dungeon"],
            "level" : 10,
            "meleeMinDamage" : 15,
            "meleeMaxDamage" : 28,
            "rangeMinDamage" : 11,
            "rangeMaxDamage" : 22,
            "attackWeight" : 10,
            "rangeAnimation" : "animColdBallSmall.png",
            "minHitPoints" : 50,
            "maxHitPoints" : 80,
            "experienceValue" : 810,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 15,
            "resistance" : 10,
            "hitModifier" : 19,
            "spells" : [
                {
                    "name" : "Berserk Wish",
                    "weight" : 15
                },
                {
                    "name" : "Strong Wish",
                    "weight" : 15
                },
                {
                    "name" : "Blessed Wish",
                    "weight" : 15
                },
                {
                    "name" : "Accurate Wish",
                    "weight" : 15
                }
            ],
            "description" : "The Djinn are mighty magical creatures, granting wishes to their allies and casting aspersions on their enemies."
        },
        {
            "name" : "Gargoyle",
            "icon" : "gargoyle.png",
            "groups" : ["dungeon"],
            "level" : 10,
            "meleeMinDamage" : 18,
            "meleeMaxDamage" : 30,
            "rangeMinDamage" : 15,
            "rangeMaxDamage" : 28,
            "rangeAnimation" : "animBlackBallSmall.png",
            "minHitPoints" : 50,
            "maxHitPoints" : 90,
            "experienceValue" : 825,
            "numAttacks" : 1,
            "numMoves" : 3,
            "armorClass" : 12,
            "resistance" : 16,
            "hitModifier" : 19,
            "description" : "Gargoyles are powerful and nasty creatures with a natural resistance to magic. They attack on the wing, mostly from range."
        },
        {
            "name" : "Gurgeez",
            "icon" : "blinkBasher.png",
            "groups" : ["bonus"],
            "level" : 10,
            "meleeMinDamage" : 12,
            "meleeMaxDamage" : 38,
            "minHitPoints" : 55,
            "maxHitPoints" : 95,
            "experienceValue" : 865,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 11,
            "resistance" : 18,
            "hitModifier" : 19,
            "spells" : [
                {
                    "name" : "Wink",
                    "weight" : 50
                }
            ],
            "description" : "Absolutely nothing is known about this curious creature!"
        },
        {
            "name" : "Qeego",
            "icon" : "pounder2.png",
            "groups" : ["bonus"],
            "level" : 10,
            "meleeMinDamage" : 15,
            "meleeMaxDamage" : 33,
            "minHitPoints" : 60,
            "maxHitPoints" : 100,
            "experienceValue" : 905,
            "numAttacks" : 2,
            "numMoves" : 2,
            "armorClass" : 10,
            "resistance" : 12,
            "hitModifier" : 19,
            "spells" : [
                {
                    "name" : "Eye Focus",
                    "weight" : 25
                }
            ],
            "description" : "Absolutely nothing is known about this curious creature!"
        },
        {
            "name" : "Uulog",
            "icon" : "bandit.png",
            "groups" : ["bonus"],
            "level" : 10,
            "meleeMinDamage" : 8,
            "meleeMaxDamage" : 15,
            "minHitPoints" : 45,
            "maxHitPoints" : 79,
            "experienceValue" : 855,
            "numAttacks" : 4,
            "numMoves" : 2,
            "armorClass" : 15,
            "resistance" : 9,
            "hitModifier" : 19,
            "description" : "Absolutely nothing is known about this curious creature!"
        },
        {
            "name" : "Black Dragon",
            "icon" : "blackDragon.png",
            "groups" : ["default"],
            "level" : 10,
            "meleeMinDamage" : 20,
            "meleeMaxDamage" : 35,
            "rangeMinDamage" : 10,
            "rangeMaxDamage" : 20,
            "target" : "area",
            "rangeAnimation" : "animGreenBall.png",
            "minHitPoints" : 90,
            "maxHitPoints" : 125,
            "experienceValue" : 890,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 15,
            "resistance" : 13,
            "limit" : true,
            "potency" : 2,
            "hitSpell" : "Weakening Acid",
            "hitModifier" : 20,
            "description" : "A fell and thoroughly nasty creature, the nocturnal Black Dragon weakens its pray with a foul toxin, then goes in for the easy kill."
        },
        //// Level 11
        {
            "name" : "Red Dragon",
            "icon" : "redDragon.png",
            "groups" : ["default"],
            "meleeMinDamage" : 15,
            "meleeMaxDamage" : 25,
            "rangeMinDamage" : 13,
            "rangeMaxDamage" : 23,
            "target" : "area",
            "level" : 11,
            "rangeAnimation" : "animFireBall.png",
            "minHitPoints" : 120,
            "maxHitPoints" : 160,
            "experienceValue" : 1900,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 14,
            "resistance" : 11,
            "limit" : true,
            "hitModifier" : 19,
            "description" : "Red Dragons are typically dungeon and mountain dwellers, but can roam over great distances. They attack with a fiery breath at range, and the results are devastating."
        },
        {
            "name" : "Vogloon",
            "icon" : "rex.png",
            "groups" : ["bonus"],
            "level" : 11,
            "meleeMinDamage" : 11,
            "meleeMaxDamage" : 25,
            "rangeMinDamage" : 12,
            "rangeMaxDamage" : 20,
            "rangeAnimation" : "animHotBallSmall.png",
            "minHitPoints" : 50,
            "maxHitPoints" : 90,
            "experienceValue" : 1575,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 13,
            "resistance" : 17,
            "hitSpell" : "Entwine",
            "hitModifier" : 20,
            "description" : "Nothing is known about this unusual creature, except for the obvious anger-management issues."
        },
        {
            "name" : "Shammaq",
            "icon" : "shambler2.png",
            "groups" : ["bonus"],
            "level" : 11,
            "meleeMinDamage" : 15,
            "meleeMaxDamage" : 40,
            "minHitPoints" : 70,
            "maxHitPoints" : 105,
            "experienceValue" : 1595,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 18,
            "resistance" : 10,
            "hitSpell" : "Binding Silk",
            "hitModifier" : 20,
            "spells" : [
                {
                    "name" : "Major Regenerate",
                    "weight" : 40
                }
            ],
            "description" : "Nothing is known about this unusual creature, except for the obvious anger-management issues."
        },
        {
            "name" : "Undead Dragon",
            "icon" : "undeadDragon.png",
            "groups" : ["default", "undead"],
            "meleeMinDamage" : 15,
            "meleeMaxDamage" : 25,
            "rangeMinDamage" : 18,
            "rangeMaxDamage" : 32,
            "rangeAnimation" : "animBlackBallSmall.png",
            "level" : 11,
            "minHitPoints" : 105,
            "maxHitPoints" : 150,
            "experienceValue" : 1850,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 14,
            "resistance" : 9,
            "limit" : true,
            "hitModifier" : 21,
            "potency" : 4,
            "spells" : [
                {
                    "name" : "Aura of Death",
                    "weight" : 40
                }
            ],
            "description" : "A veritable worst-case scenario creature to encounter, the Undead Dragon has been reanimated by very powerful and evil magic. It is so ghastly that it can render an entire party of adventurers immobilized by fear."
        },
        {
            "name" : "Keeper",
            "icon" : "keeper.png",
            "groups" : ["default"],
            "meleeMinDamage" : 5,
            "meleeMaxDamage" : 12,
            "level" : 11,
            "minHitPoints" : 65,
            "maxHitPoints" : 80,
            "experienceValue" : 1630,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 13,
            "resistance" : 10,
            "hitModifier" : 21,
            "potency" : 5,
            "spells" : [
                {
                    "name" : "Enemies",
                    "weight" : 50
                },
                {
                    "name" : "Friends",
                    "weight" : 30
                }
            ],
            "description" : "Kroga's devoted clerics are simply referred to as 'Keepers'. They lash out violently at their enemies and heal their allies."
        },
        {
            "name" : "Red Guard",
            "icon" : "redGuard.png",
            "groups" : ["default"],
            "level" : 11,
            "meleeMinDamage" : 15,
            "meleeMaxDamage" : 24,
            "rangeMinDamage" : 20,
            "rangeMaxDamage" : 35,
            "rangeAnimation" : "animHotBall.png",
            "minHitPoints" : 60,
            "maxHitPoints" : 90,
            "experienceValue" : 1560,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 14,
            "resistance" : 11,
            "hitModifier" : 20,
            "spells" : [
                {
                    "name" : "Eye Focus",
                    "weight" : 30
                }
            ],
            "description" : "Little is known of Kroga's mysterious 'Red Guards', except that they are extremely tall and attack at range with great force."
        },
        {
            "name" : "Gargantuan Worm",
            "icon" : "grub.png",
            "groups" : ["default"],
            "level" : 11,
            "meleeMinDamage" : 15,
            "meleeMaxDamage" : 30,
            "minHitPoints" : 140,
            "maxHitPoints" : 210,
            "experienceValue" : 1590,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 14,
            "resistance" : 10,
            "hitModifier" : 22,
            "spells" : [
                {
                    "name" : "Seriously Mad",
                    "weight" : 50
                }
            ],
            "description" : "The mythic Gargantuan Worms live deep underground, but occasionally find their way into dungeons or even the surface, where they tend to thrash about and inflict tremendous damage."
        },
        {
            "name" : "Glomorg",
            "icon" : "glomorg.png",
            "groups" : ["default"],
            "meleeMinDamage" : 5,
            "meleeMaxDamage" : 12,
            "level" : 11,
            "minHitPoints" : 40,
            "maxHitPoints" : 70,
            "experienceValue" : 1500,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 13,
            "resistance" : 16,
            "hitModifier" : 21,
            "potency" : 5,
            "spells" : [
                {
                    "name" : "Summon Beholder",
                    "weight" : 15
                },
                {
                    "name" : "Glomorg Heal",
                    "weight" : 15
                },
                {
                    "name" : "Glomorg Slow",
                    "weight" : 15
                },
                {
                    "name" : "Fast Portal",
                    "weight" : 15
                },
                {
                    "name" : "Summon Shambling Mound",
                    "weight" : 5
                }
            ],
            "description" : "One of the least pleasant creatures of all time, the diminutive Glomorg summons creatures to do its bidding, while escaping harm with trickery and magic."
        },
        //// Level 12
        {
            "name" : "Flame Daemon",
            "icon" : "flameDaemon.png",
            "groups" : ["default"],
            "level" : 12,
            "meleeMinDamage" : 25,
            "meleeMaxDamage" : 45,
            "minHitPoints" : 70,
            "maxHitPoints" : 110,
            "experienceValue" : 2600,
            "numAttacks" : 1,
            "numMoves" : 3,
            "armorClass" : 14,
            "resistance" : 12,
            "hitModifier" : 24,
            "potency" : 3,
            "spells" : [
                {
                    "name" : "Hellfire",
                    "weight" : 40
                }
            ],
            "description" : "Composed of magical fire, the Flame Daemon is a very fast mover and equally vicious in close as it is at range."
        },
        {
            "name" : "Hoogon",
            "icon" : "slammer.png",
            "groups" : ["bonus"],
            "level" : 12,
            "meleeMinDamage" : 18,
            "meleeMaxDamage" : 34,
            "minHitPoints" : 120,
            "maxHitPoints" : 190,
            "experienceValue" : 2870,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 15,
            "resistance" : 8,
            "hitModifier" : 22,
            "spells" : [
                {
                    "name" : "Seriously Mad",
                    "weight" : 50
                }
            ],
            "description" : "This enormous biped is completely unknown to science!"
        },
        {
            "name" : "Irrelephant",
            "icon" : "oliphantSkeleton.png",
            "groups" : ["bonus"],
            "level" : 12,
            "meleeMinDamage" : 18,
            "meleeMaxDamage" : 34,
            "rangeMinDamage" : 18,
            "rangeMaxDamage" : 30,
            "rangeAnimation" : "animBlackBallSmall.png",
            "minHitPoints" : 120,
            "maxHitPoints" : 190,
            "experienceValue" : 2870,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 14,
            "resistance" : 19,
            "hitModifier" : 22,
            "hitSpell" : "Portal",
            "spells" : [
                {
                    "name" : "Area Sluggish",
                    "weight" : 20
                }
            ],
            "description" : "This Oliphant-esque monstrosity is a new and unwelcome addition to the already over-stuffed bestiary."
        },
        {
            "name" : "Lich",
            "icon" : "lich.png",
            "groups" : ["default", "undead"],
            "level" : 12,
            "meleeMinDamage" : 10,
            "meleeMaxDamage" : 35,
            "minHitPoints" : 90,
            "maxHitPoints" : 150,
            "experienceValue" : 2900,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 12,
            "resistance" : 15,
            "hitModifier" : 23,
            "hitSpell" : "Bat Drain",
            "potency" : 5,
            "spells" : [
                {
                    "name" : "Summon Wight",
                    "weight" : 20
                },
                {
                    "name" : "Summon Wraith",
                    "weight" : 20
                },
                {
                    "name" : "Lich Poison",
                    "weight" : 45
                }
            ],
            "description" : "A Lich is what remains when a powerful, evil magician throws off its mortal coil. It can inflict a potent poison on its enemies, and summon lesser undead forms."
        },
        {
            "name" : "Heedron",
            "icon" : "heedron.png",
            "groups" : ["default", "undead"],
            "level" : 12,
            "meleeMinDamage" : 5,
            "meleeMaxDamage" : 20,
            "attackWeight" : 20,
            "moveWeight" : 10,
            "minHitPoints" : 90,
            "maxHitPoints" : 135,
            "experienceValue" : 2750,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 17,
            "resistance" : 13,
            "hitModifier" : 24,
            "potency" : 4,
            "spells" : [
                {
                    "name" : "Heedron Blast",
                    "weight" : 70
                }
            ],
            "description" : "While physically unimposing, the Heedron should not be underestimated as they are powerful magic-wielders with a knack for depraved cruelty."
        },
        {
            "name" : "Nightmare",
            "icon" : "nightmare2.png",
            "groups" : ["default"],
            "level" : 12,
            "meleeMinDamage" : 12,
            "meleeMaxDamage" : 24,
            "minHitPoints" : 110,
            "maxHitPoints" : 140,
            "experienceValue" : 2850,
            "numAttacks" : 2,
            "numMoves" : 2,
            "armorClass" : 12,
            "resistance" : 11,
            "hitModifier" : 24,
            "potency" : 3,
            "spells" : [
                {
                    "name" : "Nightmare Blind",
                    "weight" : 12
                },
                {
                    "name" : "Nightmare Weaken",
                    "weight" : 12
                },
                {
                    "name" : "Nightmare Rooted",
                    "weight" : 9
                },
                {
                    "name" : "Nightmare Sluggish",
                    "weight" : 12
                }
            ],
            "description" : "A physical manifestation of bad dreams, the Nightmare renders its victims weak and helpless before finally finishing them off."
        },
        {
            "name" : "Golden Dragon",
            "icon" : "goldDragon.png",
            "groups" : ["default"],
            "meleeMinDamage" : 20,
            "meleeMaxDamage" : 40,
            "rangeMinDamage" : 20,
            "rangeMaxDamage" : 35,
            "target" : "area",
            "level" : 12,
            "rangeAnimation" : "animFireBall.png",
            "minHitPoints" : 120,
            "maxHitPoints" : 160,
            "experienceValue" : 2800,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 15,
            "resistance" : 10,
            "limit" : true,
            "hitModifier" : 25,
            "description" : "The largest of all the dragons, the Golden Dragon breaths incredibly hot fire and can also do considerable damage at close range with its tail."
        },
        {
            "name" : "Silver Dragon",
            "icon" : "silverDragon.png",
            "groups" : ["default"],
            "meleeMinDamage" : 18,
            "meleeMaxDamage" : 30,
            "level" : 12,
            "minHitPoints" : 105,
            "maxHitPoints" : 135,
            "experienceValue" : 2750,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 16,
            "resistance" : 14,
            "limit" : true,
            "hitModifier" : 26,
            "potency" : 5,
            "spells" : [
                {
                    "name" : "Dragon Blast",
                    "weight" : 60
                }
            ],
            "description" : "The Silver Dragons are not as large as their golden cousins, but they make up for it with their powerful magical attacks that decimate their enemies."
        },
        //// Special Creatures
        {
            "name" : "Kroga Trinth",
            "icon" : "kroga.png",
            "groups" : ["default"],
            "meleeMinDamage" : 30,
            "meleeMaxDamage" : 60,
            "level" : 100,
            "minHitPoints" : 260,
            "maxHitPoints" : 290,
            "experienceValue" : 10000,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 25,
            "resistance" : 16,
            "limit" : true,
            "hitModifier" : 30,
            "hitSpell" : "Portal",
            "potency" : 9,
            "spells" : [
                {
                    "name" : "Kroga Blast",
                    "weight" : 30
                },
                {
                    "name" : "Kroga Heal",
                    "weight" : 40
                },
                {
                    "name" : "Kroga Paralyze",
                    "weight" : 20
                },
                {
                    "name" : "Summon Gargoyle Fast",
                    "weight" : 25
                }
            ],
            "description" : "The brilliant younger brother of the Empress Vella, Kroga has turned to dark magic and begun to build an army in the Forbidden World."
        },
        {
            "name" : "Author",
            "icon" : "author.png",
            "groups" : ["bonus"],
            "meleeMinDamage" : 35,
            "meleeMaxDamage" : 70,
            "level" : 100,
            "minHitPoints" : 500,
            "maxHitPoints" : 590,
            "experienceValue" : 25000,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 28,
            "resistance" : 18,
            "limit" : true,
            "hitModifier" : 34,
            "hitSpell" : "Portal",
            "potency" : 11,
            "spells" : [
                {
                    "name" : "Kroga Blast",
                    "weight" : 30
                },
                {
                    "name" : "Kroga Heal",
                    "weight" : 40
                },
                {
                    "name" : "Kroga Paralyze",
                    "weight" : 20
                },
                {
                    "name" : "Summon Black Dragon Fast",
                    "weight" : 25
                }
            ],
            "description" : "Thought to have wasted the prime years of its life in front of glowing rectangles, the Author is extraordinarily bitter and knows no remorse."
        },
        {
            "name" : "Keendu",
            "icon" : "evilOrb.png",
            "groups" : ["bonus"],
            "meleeMinDamage" : 20,
            "meleeMaxDamage" : 40,
            "rangeMinDamage" : 25,
            "rangeMaxDamage" : 50,
            "rangeAnimation" : "animFireBall.png",
            "level" : 100,
            "minHitPoints" : 290,
            "maxHitPoints" : 340,
            "experienceValue" : 10000,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 24,
            "resistance" : 16,
            "limit" : true,
            "hitModifier" : 30,
            "hitSpell" : "Crippling Fear",
            "potency" : 9,
            "description" : "This hovering orb is not documented anywhere in the old codices."
        },
        {
            "name" : "Mlonnix",
            "icon" : "monster3.png",
            "groups" : ["bonus"],
            "meleeMinDamage" : 10,
            "meleeMaxDamage" : 20,
            "attackWeight" : 0,
            "moveWeight" : 80,
            "level" : 100,
            "minHitPoints" : 180,
            "maxHitPoints" : 240,
            "experienceValue" : 10000,
            "numAttacks" : 2,
            "numMoves" : 4,
            "armorClass" : 26,
            "resistance" : 16,
            "limit" : true,
            "hitModifier" : 28,
            "potency" : 10,
            "spells" : [
                {
                    "name" : "Summon Mlonnix",
                    "weight" : 3
                },
                {
                    "name" : "Mlonnix Blast",
                    "weight" : 80
                }
            ],
            "description" : "Virtually nothing is known about this strange creature!"
        },
        {
            "name" : "King Gorba",
            "icon" : "koboldKing.png",
            "groups" : ["default"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 3,
            "rangeMinDamage" : 2,
            "rangeMaxDamage" : 4,
            "level" : 100,
            "rangeAnimation" : "animColdBallSmall.png",
            "minHitPoints" : 17,
            "maxHitPoints" : 22,
            "experienceValue" : 50,
            "numAttacks" : 1,
            "numMoves" : 1,
            "armorClass" : 6,
            "resistance" : 3,
            "spells" : [
                {
                    "name" : "Summon Guard",
                    "weight" : 100
                }
            ],
            "description" : "King Gorba is known more for his insatiable appetite than his strong leadership qualities. However, his elite guard is very loyal to him."
        },
        {
            "name" : "Troll Lord",
            "icon" : "trollKing.png",
            "groups" : ["default"],
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 5,
            "rangeMinDamage" : 4,
            "rangeMaxDamage" : 8,
            "level" : 100,
            "rangeAnimation" : "animRockSmall1.png",
            "minHitPoints" : 39,
            "maxHitPoints" : 50,
            "experienceValue" : 150,
            "numAttacks" : 2,
            "numMoves" : 1,
            "armorClass" : 8,
            "resistance" : 7,
            "hitModifier" : 9,
            "description" : "Little is known about the Troll aristocracy, except that they are generally larger, meaner and smellier than their commoner counterparts."
        }
    ],

    //// Map tile definitions

    tiles : {
        "X" : {icon : "wall.png", passable : false, shipPassable : false, opaque : true, color : "#585858"},
        "." : {icon : "floor.png", passable : true, shipPassable : false, opaque : false, color : "#8e8e8e"},
        "~" : {icon : "water2.png", passable : false, shipPassable : true, opaque : false, color : "#2828f0"},
        "*" : {icon : "lava.png", passable : false, shipPassable : false, opaque : false, color : "#c62700"},
        "=" : {icon : "grass.png", passable : true, shipPassable : false, opaque : false, color : "#28f028"},
        "P" : {icon : "rubble.png", passable : true, shipPassable : false, opaque : false, color : "#282828"},
        "!" : {icon : "treeAlt.png", passable : true, shipPassable : false, opaque : true, color : "#008c00"},
        "F" : {icon : "treeAlt.png", passable : false, shipPassable : false, opaque : true, color : "#008c00"},
        "(" : {icon : "deadTree.png", passable : true, shipPassable : false, opaque : true, color : "#544d19"},
        ")" : {icon : "stump.png", passable : true, shipPassable : false, opaque : true, color : "#544d19"},
        "M" : {icon : "mountain.png", passable : false, shipPassable : false, opaque : true, color : "#a01414"},
        "'" : {icon : "caveFloor.png", passable : true, shipPassable : false, opaque : false, color : "#925e1a"},
        "C" : {icon : "caveWall.png", passable : false, shipPassable : false, opaque : true, color : "#5c3708"},
        "d" : {icon : "deck.png", passable : true, shipPassable : false, opaque : false, color : "#925e1a"},
        "l" : {icon : "gunnelLeft.png", passable : false, shipPassable : false, opaque : true, color : "#5c3708"},
        "r" : {icon : "gunnelRight.png", passable : false, shipPassable : false, opaque : true, color : "#5c3708"},
        "#" : {icon : "swamp.png", passable : true, shipPassable : false, opaque : true, color : "#416f2c"},
        ":" : {icon : "desert.png", passable : true, shipPassable : false, opaque : false, color : "#cd964e"},
        "-" : {icon : "bridgeHorizontal.png", passable : true, shipPassable : false, opaque : false, color : "#63390e"},
        "|" : {icon : "bridgeVertical.png", passable : true, shipPassable : false, opaque : false, color : "#63390e"},
        "D" : {icon : "doorInWall.png", passable : true, shipPassable : false, opaque : true, color : "#631c0e"},
        "G" : {icon : "dungeonGate.png", passable : true, shipPassable : false, opaque : true, color : "#202020"},
        "K" : {icon : "lockedDoor.png", passable : true, shipPassable : false, opaque : true, color : "#631c0e"},
        "T" : {icon : "palmTree.png", passable : true, shipPassable : false, opaque : false, color : "#a0ab40"},
        "/" : {icon : "waterMountain.png", passable : false, shipPassable : false, opaque : true, color : "#a01414"},
        "A" : {icon : "desertMountain.png", passable : false, shipPassable : false, opaque : true, color : "#a01414"},
        ";" : {icon : "savannah3.png", passable : true, shipPassable : false, opaque : false, color : "#ddcd42"},
        "I" : {icon : "savannahTree3.png", passable : true, shipPassable : false, opaque : false, color : "#73630a"},
        "?" : {icon : "darkWall.png", passable : false, shipPassable : false, opaque : true, color : "#585858"},
        "`" : {icon : "darkFloor.png", passable : true, shipPassable : false, opaque : false, color : "#8e8e8e"},
        "@" : {icon : "lava.png", passable : false, shipPassable : false, opaque : false, color : "#e13e29"},
        "[" : {icon : "darkDoor.png", passable : true, shipPassable : false, opaque : true, color : "#000000"},
        "_" : {icon : "darkBridgeHorizontal.png", passable : true, shipPassable : false, opaque : false, color : "#8e6464"},
        "]" : {icon : "darkBridgeVertical.png", passable : true, shipPassable : false, opaque : false, color : "#8e6464"},
        "R" : {icon : "river.png", passable : false, shipPassable : true, opaque : false, color : "#06796d"},
        "m" : {icon : "mangrove.png", passable : true, shipPassable : false, opaque : false, color : "#646b18"},
        "%" : {icon : "iceMountain.png", passable : false, shipPassable : false, opaque : true, color : "#909090"},
        "i" : {icon : "ice.png", passable : true, shipPassable : false, opaque : false, color : "#ffffff"},
        "S" : {icon : "tundra.png", passable : true, shipPassable : false, opaque : false, color : "#525f47"},
        "Y" : {icon : "iceberg.png", passable : true, shipPassable : false, opaque : false, color : "#9eb8be"},
        "," : {icon : "woodFloor.png", passable : true, shipPassable : false, opaque : false, color : "#b0a38a"},
        "W" : {icon : "woodWall.png", passable : false, shipPassable : false, opaque : true, color : "#5a3d19"},
        "p" : {icon : "pool.png", passable : false, shipPassable : false, opaque : false, color : "#0808D0"},
        "0" : {icon : "space.png", passable : false, shipPassable : false, opaque : false, color : "#000000"},
        "f" : {icon : "iceFloor.png", passable : true, shipPassable : false, opaque : false, color : "#a8c4dd"},
        "w" : {icon : "iceWall.png", passable : false, shipPassable : false, opaque : true, color : "#5b7497"},
        "s" : {icon : "rock.png", passable : false, shipPassable : false, opaque : true, color : "#404040"},
        "O" : {icon : "faces.png", passable : false, shipPassable : false, opaque : false, color : "#c59c27"},
        "o" : {icon : "faces2.png", passable : false, shipPassable : false, opaque : false, color : "#c59c27"},
        "{" : {icon : "facesLeft.png", passable : false, shipPassable : false, opaque : false, color : "#c59c27"},
        "}" : {icon : "facesRight.png", passable : false, shipPassable : false, opaque : false, color : "#c59c27"},
        "L" : {icon : "columnTile.png", passable : false, shipPassable : false, opaque : true, color : "#222222"}
    },

    //// Quests

    quests : {
        "Kobold Raids" :
            {
                started : "koboldStart",
                done : "koboldDone",
                icon : "oldMan.png",
                text : "Defeat the kobolds in the Barrier Caverns north of the town of Rivercross."
            },
        "Lighthouse Cyclops" :
            {
                started : "cyclopsStart",
                done : "cyclopsDone",
                icon : "pirate.png",
                text : "Regain Crowhook Lighthouse from the enormous Cyclops that occupies it, west of Port Yester."
            },
        "Breeding Pits" :
            {
                started : "pitsStart",
                done : "pitsDone",
                icon : "man3.png",
                text : "Disrupt the goblin breeding pits west of Port Yester."
            },
        "Worgen Pass" :
            {
                started : "keepStart",
                done : "keepDone",
                icon : "oldMan2.png",
                text : "Capture Worgen Keep and reopen the mountain pass to the Northern Forestlands."
            },
        "Academy Tower" :
            {
                started : "towerStart",
                done : "towerDone",
                icon : "gnomeKing.png",
                text : "Investigate the source of evil in Academy Tower that is destroying Shavanoth Forest."
            },
        "Pi-Yun Temple" :
            {
                started : "swampStart",
                done : "swampDone",
                icon : "emperor.png",
                text : "Regain the ancient Pi-Yun Temple from the clutches of the undead."
            },
        "Keshak Ice Maze" :
            {
                started : "iceMazeStart",
                done : "iceMazeDone",
                icon : "dwarfKing.png",
                text : "Recover the crystal chalice from the ice maze Northeast of Gurnstaad."
            },
        "Tuumbak Arena" :
            {
                started : "arenaStart",
                done : "arenaDone",
                icon : "orangeElder.png",
                text : "Triumph at the Tuumbak Arena in Teshvar to be granted passage out of Pajoon."
            },
        "Telden's Landing" :
            {
                started : "teldenStart",
                done : "teldenDone",
                icon : "man2.png",
                text : "Seek out the evil presence in the ruins of Telden's Landing on the South coast of the Thowan Moors."
            },
        "Blayside Citadel" :
            {
                started : "blaysideStart",
                done : "blaysideDone",
                icon : "prisoner2.png",
                text : "Rescue Vella Trinth from Blayside Citadel."
            },
        "The Trinexus" :
            {
                started : "trinexusStart",
                done : "trinexusDone",
                icon : "vella2.png",
                text : "Seek out the Trinexus and use it to return to the Wildernesse. Then meet Vella Trinth at Castle Hilenika."
            },
        "Hilenikan Sewers" :
            {
                started : "sewersStart",
                done : "sewersDone",
                icon : "vella.png",
                text : "Track Kroga through the sewers beneath Castle Hilenika."
            },
        "Kroga Trinth" :
            {
                started : "krogaStart",
                done : "gameOver",
                icon : "vella.png",
                text : "Enter the Forbidden World via the Trinexus and defeat Kroga Trinth."
            }
    },

    //// Keys

    keys : {
        "pitsKey" :
            {
                icon : "silverKey.png",
                until : "pitsDone"
            },
        "keepStart" :
            {
                icon : "goldKey.png",
                until : "keepDone"
            },
        "sigilGiven" :
            {
                icon : "sigil.png",
                until : "swampStart"
            },
        "scrollGiven" :
            {
                icon : "rolledScroll.png",
                until : "piyunOpen"
            },
        "iceMazeDone" :
            {
                icon : "iceChalice.png",
                until : "blueTowerEntered"
            },
        "redKeyGiven" :
            {
                icon : "redExisKey.png",
                until : "sealBroken"
            },
        "greenKeyGiven" :
            {
                icon : "greenExisKey.png",
                until : "sealBroken"
            },
        "yellowKeyGiven" :
            {
                icon : "yellowExisKey.png",
                until : "sealBroken"
            },
        "blueKeyGiven" :
            {
                icon : "blueExisKey.png",
                until : "sealBroken"
            },
        "arenaStart" :
            {
                icon : "scroll.png",
                until : "arenaDone"
            },
        "passageGranted" :
            {
                icon : "rolledScrollBlue.png",
                until : "gameOver"
            },
        "trinexusKey" :
            {
                icon : "ancientKey.png",
                until : "trinexusDone"
            },
        "sewersDone" :
            {
                icon : "blackKey.png",
                until : "forbiddenOpen"
            }
    },

    //// Maps

    maps : {
        "wilderness" : {
            name: "The Wildernesse",
			map : "\
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%MMMMMMMMMMMMMMMMMMMMMM\
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%MM%MMMMMMMMMMMMMMMMMMMMMMMMM\
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%MMMMMMMMMMMMMMMMMMMMMMMMMMMM\
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%MMMMMMMMMMMMMMMMMMMMMMMMMMMMM\
%%%%%%%ii%%%%iiiiii%%%%%%%%%%%ii%ii%%%%%%%%%%%%i%i%%%%%%%%%%iiiiiii%%%%%%SSSSSS%%%%%%%%%%%%%MMMMMMMMMMMMMMMMM===MMMMMMMMMM\
%%%%%%ii%%ii%iiiii%%iii%%%%iiiiiiiiii%%%iiii%iiiiiiii%%%%%%iiiiiiiiiiiSSSSSSSSS%i%%%SSSS%%%%MMM=MMMMMMM==~~=MMM===MM=MMMMM\
%%%%%iiiiiiiiiiiii%%iii%%iiiiiiiiiiiiiii%iiiiiiiiiiiiii%%iiiiiiiiiiiiSSSSSSSSSS%iSSSSSSS%%%%MM=!=MMMMMM=~~~~~~MMM=M==MMMMM\
%%%%%iiiiiiiiiiiii%iiii%iiiiiiiiiiiii%iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiSSSSSSSi%%SSSSSSS%%%%MMMM!MMM====!~~~~~==)=)==MMMMM\
%%%%iiiiiiiiiiiiiiii%%%%ii%iiiiiiiiiiii%iiiiiiiiiiiiiiiiiiiiiiiiiiSSSSSSiSSSSiii%%SSSSS%%%%MMMMM!MMM==(~~~~~~~()(=M=MMMMMM\
%%%%iiiiiiiiiiiiiii%%iiii%%iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiSSSSSiiiiiiiii%iSSS%%%~MMMMMM!MM==!!~~~~!(!((((MMMMMMMM\
%%%%%iiiii%iiiiiiii%%%%ii%iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiSiiiSSSSSSSSSSSSSSiSiS%%%%~MMM!!=!MM====~~~~~~!(((!=MMMMMMM\
%%%%%iiiiiiiiiiiiii%iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiSSiiSSSS~~~SiSiSSSS%~~~~MM=MMMMM==(==~~~~~~!!!!(!=MMMMM\
%%%%%%iiiiiiiiiii%i%%iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiS~~~~~~i~~SSS%%~~~MMM=MM====!!(=!!~~~~~!!!!!(MMMMM\
%%%%%%iiiiiiiiiiiiii%iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiSiiiSiSi~~~~~~~SSS%%~~~~MMM======!(!!!!~~~~~~!!=!!(MMMMM\
%%%%%%iiiiiiiiiii%iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii~~S~~~~~S%%%~~!~MMMMM!===!!!!!!~~~~~~!!=!!!=MMMM\
%%%%%%iiiiiiiiiiiiiiii%iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii~~~~~~~~SSS%%~~!!~MMMMM!==!!!!!(!~~!(!!!!!!!!!MMMM\
%%%%%iiiiiiiiiiiiiii%%%iiiiiiiiiiiiiiiiiiiiiiiii~iiiiiiiiiiiiiiiiiiiiSiiiSS~~~~SSSi%%~~!~~MMMMM===!!!(!!!~~!!!(!!!!!(!MMMM\
%%%%%iiiiiiiiii%iii%%%%iiiiiiiiiiiiiiiiiiiiiiiii~~~~iiiiii~iiiii~iiiiiiiSSSSSSSSSSS%~~~!~~~MMM===!!!!!!!!!~(!!!!!!!!(MMMMM\
%%%%%iiiiiiiiiiiiiiiiiiiiiiiiiiiiiSiiiiiiiiiSiiiiii~ii~iii~iiiii~iiiiiiSSSSSSSSSS%%%~/~~~~~~====!!!!!!!(!!~~!(!!!!!(!MMMMM\
%%%%%iiiiiiiiiiiiiiiiiiiiiiiiiiiiSSSSSSiiSiiiSiiiii~~i~iii~iiiii~iiiiiiSSSi%%SSS%%%~~~~~~~~~=!!!!!!!!!!!(!!~!!(!(!!!MMMMMM\
%%%%iiiiiiiiiiiiiiiiiiiiiiiiSiiiiSSSSSSiiiiiSiiSiiii~i~~ii~~iiii~iiiiiiii%%%%%%%%%~~/~~~~!!!!!!!!!!!!!!!!!~~(!!(!!(!MMMMMM\
%%%%iiiiiiiiiiiiiiiiiiiiiiiiiiiiSSSSSSSiiiiiSSiiiiii~ii~iii~~~~~~iiiiiiii%%%%%%%%%~~~~~~!!!!!!!!!!!!!!!!!!~!!!(!!(!(MMMMMM\
%%%%%iiiiiiiiiiiiiiiiiiiiiiiiiiiSSSSSSiiiSiiSSSSiiii~i~~iii~iiiiiiiiii%%%%~~~~%%~~~~~~~~!!!!!!!!!!!!!!!!!!~~~~!!!)!!MMMMMM\
%%%%iiiiiiiiiiiiiiiiiiiiiiiiiiiSSSSSSSiSiiiSi%SSSiii~~Y~i~~~iiiiiii%%%%%~~~~~%%%~//~~~~!!!!!!!!!!!!!!!======!~!(!!((MMMMMM\
%%%%i%iiiii%iiiiiiiiiiiiiiiiSiiSiSSSSSSii%%%%%SSSSiii~~~i~Siiiiiii%%%%%~~~~~~%%~~/~~~~~!!!!!!!!!!!!!!!=!!~~|~~!(!!!=!MMMMM\
%%%%ii%iiii%iiiiiiiii%iiiiiiSSSSSSSSSSS%%%%%i%%SSSSii%~~~~iiiiiiii%%/~~~~~~~~~~~~~~~~~~!!!!!!!!!====!!=!!~!!!!!!!!!!=MMMMM\
%%%%iiiiiii%iiiiiii%%%%iiiiSiSSSSSSS%%%%%%i%~%%%%%%%iSS~SSiSii%%i%%~~~~~///~~/~~~~~~~~~!!!!!!!!!==!=!==!!~!!(!!!((!!!MMMMM\
%%%%%iiiiii%%i%%iiSSS%%%iiiiSSS%i%%%~~~~~~~~~%%%~~%%%%S~SS%S%%%%%%%~~~~~~~///~~~~~~~~~~~!!!~!=====M=M=!!~~!!!!((!!(!!!MMMM\
%%%%%%iiiiiii%%%~~~~~S%%i%%%%%%%%%~/~~~~//~/~~~~~~%%~%%~%%%%~~~~%%%%~%~~~~~~~~~~~~~~~~~~~~~~!!==MMMMM=!!~!!(((!(!(((!!MMMM\
%%%%iiiiiiii%%~~~~~~~~~%%%~~~~~~~~~/~~~~~~~~~~~~~~~~~~~~~%%%~~~~~~~%%%%~~~~~~~~~~~~~~~~~~~~~~!==!MM!M===~!!!(!)(!!)((=MMMM\
%%%%%iiiiii%~~~~~~~~~~%%%%%~~~~~~~~~~~~~~/~///~~~~~~~~Y~~%%~~~~~~~%%~%%%%~~~~~~~~~~~~~~~~~~======MM=M=M=~~!!!(!(!)!!!MMMMM\
%%%%%SSiiii%%~~~~~~~~~%%%~~~~~~~~~~~~~~~~~~~~~~~~~~~Y~~~~~~~~~~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~=MM==MM=M=M==~!!!!((((((!MMMMM\
%%%%%%SiiiSS%~~~~~~~~~/%/~~~~~~~~~~~~~~~~~~~~~~~/~~~~~~~~Y~~~~~~~~~//~/~~~~~~~~~~~~~~~~~~~~===MMMM==M=M==~~~!!(((!((=!MMMM\
%%%%%%Siii%%%~~~~i~~~~///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Y~~~~~~~~~~~~~~~~~/~~~~~~~~~~~~~~~~~======M===M======~~(()!(((=MMMMM\
%%%%%SiiSS%/~~~~%i%~~~//~~~~~~~~~~~~~~~~~~~~~~~~~~Y~~~~~~Y~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~====MM=MMMMM=====~=(((())=MMMMM\
%%%%%iiS%%~/~~~~%%%~~///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~==MMM=====M=====~=((((===MMMMM\
%%%%iii%%M////~~~~~~////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~====MMM=MM=====~~~=((((==~~MMMM\
%%%%==%MMM~///~~~~~~~//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~====MM==M======~=M==(==~~~MMMMM\
%%MM=MMMM~~////~~~~~///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-==MM=MMM=M==~~~~~====(=~~~~~MMMM\
%MMMMMMM~~==////~~~~///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MMMM===M=M~=====MM(((~/~~MMMMM\
MMMMMMM~~=MM/////////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/~~MMM==MMMMM~==MM!M==((~~~=MMMMM\
MMMMMM~~==M//////////~~~~##~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MMM===MMMM=~===MMMM==(~=~=MMMMM\
/MMMMM~=MMMM####//####~#~##~~~~~##~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/~~~~/~~~M=MMM=MM=M=~~==MM!MM==~===MMMMM\
/////~~=MM==####//###~~######~~####~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~M==MM==M=M==~~==M==M~~~()=MMMMM\
///MM!==M==##########~#####~~~#######~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/~M==M===M=MM==~======~((((=MMMMM\
MMMMM!!==#################~~#~~######m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/~~~====MMM=M===~====~=~((!(!MMMMM\
MMMMMM!=#####RRm###########~~~#####mmm~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/~~~~~~~~~~=====M==M==~~==~~~~~(!!!!!MMMM\
MMMMMM!!######Rm############~#####mm###-~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/~===M=MM==M==!~~~~!=!(!!(!!!MMMM\
MMMMMM!!######R###################mm#m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/~~~~==MM==M=====~~===!!!!!!!!!!MMMM\
MMMMMM!!######RRRRRRRRm##########mm##m~#~~m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/~~~/~~~~~~~~~==M==MM=====~===!!!!!!!!!!!MMMM\
MMMMMMM!######mmmmmm#RRR######mmmmm#mm~#m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=~===M========~~=M!!!!!!!!!!==MMMM\
MMMMMM!#########mmm###mR####mmmmmmm#~~~~~~#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/~~~/~~~~~~~~~=====M===!!===~======!!!!!=!=MMMMM\
MMMMM!!################Rmm##mmmRRRRR~#m##~m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~///~~~~~~~~~~============!====~===M=!!!!!!!=MMMMMM\
MMMM!!!################RRR##RRRRmm##~~~#m~~~~~~~~~~~~~~~~~~~~~~~~~~~~MMMMM//~~~~~~~~~=====!===!!!!=~~~~~===M=!!!!!==MMMMMM\
MMMMM!!!=################RR|Rmmm####m#~~~~#~~~~~~~~~~~~~~~~~~~~~~~~~~~M/MMMM~~~~~~~~===!==!=!=!!!!=~!!!~=====!!!!!====MMMM\
MMMMM!!!==###############Rm##########~~m~##~~~~~~~~~~~~~~~~~~~~~~~~~~~~!===M~~~~~~~~==!!!!!!!!!!!!=~!!!~===!!!=======MMMMM\
MMMMM!!!==###m##mm######mR#######m###m~~~m~~~~~~~~~~~~~~~~~~~~~~~~~~~-====MM~~~=~~~~==!!!!!!!!!!!!=~!=!~~~!!!!===~~===MMMM\
MMMMM!!#==##RRRRRRRm###RRR####mmmmmm##mm~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=!MMM~~~~==~====!!!!!!!!!!!==~!=!!=~~~~~~==~===MMMMM\
MMMMM!!######mmmm#RRRRRRm#######mmmmm##~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=MMM~~~~~~~~~====!!!=!!!!!==~~!=========~~~~===MMMMM\
MMMMM!!#############mmRRm##mm#####mmmm~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/MMM~~~~~~~~~~~===!!!!!!!!!!=~~=========M====~===MMMMM\
MMMMM!!!############RRRRm###m###mmm#mm~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/~~~~~~~~~~~~=====!!!!!!!!!=~===========M=======MMMMM\
MMMMMM~~############R##Rm###m##mm####m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=====!!!!!!!===-==========M====M===MMMMM\
MMMMMMM~########RRRRR##R###mm##m#####~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~====!!!!!!!===~========!MMM==MMM===MMMM\
MMMMMMMMM#######Rm#####R##mm#######~~~M~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~===!!!!!====~========MM=====MMM=MMMMM\
MMMMMMMM==######Rm####RR##m########=~MM~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~====!!=====~~=======!!MMM===MMMMMMMMM\
MMMMMMMM==######Rm##mRR###m#######==MM/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=============~========MMM======M==MMMMM\
MMMMM!M!=#####RRR###mR#######mmm##==M~//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~==~~=======!!~~=====M=!MMMM========MMMMM\
MMMMMMM==#####Rm####mR#########m##=MM~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=~~=~====~~~~========!MMM==========MMMM\
MMMMMM##=#####Rm####mR#mm#########=M~~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~===!~===========!MM=====~====MMMMM\
MMMM!!########Rm####RR###########==M~~//~~~~~~~~~~~~~~~=~~~~~~~~~~~~~~~~~~~~~~~~~~~~!=~~~=~~~===========MMM=====~====MMMMM\
MMMMM!#=###RRRR#####Rm######RRRR#==M~~//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~==~~~~~~============!M=======~~~=MMMMMM\
MMMMMM~####Rmm##mm##R#######R####=M~~~~//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=~=~!==========MM==MM====!==~===MMMMMM\
MMMM!~#####R########R###RRRRR###==M~~/////~~~~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~===========!M==M====!!!=~===MMMMMM\
MMMM!!#RRRRR#######RRRR#R#######=MM~~~~/~//~~~~/~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~==~!==!===M===!M=======!!=~~==MMMMMMM\
MMMM!!##########m#RR##RRR#######=MM~~~~~~~/~~~~/~~~~~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!========M=M=====!==~===MMMMMMM\
MMMMM!!#######mmm#Rm###R###RRRR#==MM~~~~~~/~~~~~~~~~~~//~~~~~~~~~~~=~~~~~~~~~~~~~~~~=~~!!!!!==~=======M======~~~==MMMMMMMM\
MMMMM!!#######mm##RmmmmRRRRR#mR##==M~~~~~~~~~~~~~~=~~~~~~~~~~~~~~~~=~~~~~~~~~~~~~~~======!!===~~~=====MM====~~=====M=MMMMM\
MMMMM!==######mmRRR#mmmR####mmR###=MM~~~~~~//~~~~=M~~~~~~~~~~~~~~~==~~~~~~~~~~~~~~~~~=======M===~=====MM====~!!!=====MMMMM\
MMMM!!====####RRR#mmmmmR#####mRR##=MM~~~~~~~~~~~~~=M~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=======!!====~======M===!~~!!!M===MMMMM\
MMMMM!===####RR#RmmmmmmRm#####m###==MMMM~~~~~~~~=M=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=====!!!=!=~~=========!!~!!!!MM=MMMMMM\
MMMMM!!=####mR##RmmmmmmRR#########==MMMM~~~~~/~~~MM=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~====!!M!===~========!!!~~!!!M!!MMMMMM\
MMMMM!!#####mR##RRRmmmmmRm###m####==M~~M~~/~~/~~~~=~~~~~~~~~~~~~~~~~~~~~~~~/~~~~~~~~~=!!==MMM===~========!!!=~==M!!!MMMMM/\
MMMMM!!#=###mR###mRRmmmmRR#########=#~~~~~~/~/~~/~=~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=!!=!=MM=====~~=======!!!=-==!!M!=MMM//\
MMMMM!!==###mR####mRmmmmmRm###m####mm~mm#~~~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~/~=/~~~~~==!=!!!M=======~~==~====!!=~~===~==M////\
MMMMM!!=##m#mR####mRRRmmmR########mmm~~mm#~~~~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~===~~~!!!!=!!MMM=====~~==!~~!===!!!~==M~~=/////\
MMMMM!!MM#mRRR######mRm###########mmmm~~m#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~===!!!!=!==MMM===~~~~~~~~~~~!!!!!!~====~~~////\
MMMMM!!M##RR########mRm##########mmmmmm~m#~~/~~~~/~~~~~~~~~~~~~~~~~~~~~~~~/~~=!!!!!!!!!M=====~~~~~~~~~~~~~!!!!~=====~~////\
MMMMM!!M#############R########mmmmmmmm~~m#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=!!==!!!!======~~~~~~~~~~~~~~~~~~~===!=~~////\
MMMMM!MMM####################mmmmmmm~~~mm#~~~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!=========~~=~~~~~~~~~~~~~~~~~~=~~=~~////\
MMMMMMM//#mmmm#########mmmmmmmm~~~m~~~mm#~~/~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=!~!!~~~~~=~~~~~~=~/~~~~~~~~~~~~~~|~~~~~////\
MMMMMMM///~mmmmmmmmmmmm~~~~~~~~~#~~~mm##~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=~=~~=~~~~~~~~~~~~~~~~~~~~~/////\
MMMMM/////~~~~~~~~mmmm~~~~~~#####~~~~#~~~~~~~~/~~~~~~~~~~~/~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=M=~~~~~~~~~~~~~~~~~~~~/////\
MMMM////////////~~~~~~~#~/~~~~~~~~/~~~~~~~~/~//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=~~~~~~~~~~~~~~~~~~~~~~~~~/////\
MMM////////////////~~~~~~//~~~~////~~//~~~~~~//~~~~~~~~/~~~~~~////~====~~~~~~~~~~~~~~~~~~~~~~~/~~~~~~~~~~/~~~~~~~~~///////\
M//////////////////////////!===////~~//~~~~~~/////~~~~~~~~~//////////!=!!~~~~~~~~~~//~~~~~~~~~~~~~/~~////~~~~~~~~/////////\
////////////////////////////!=////~~~///~~///////~~~/////////////////////~~~///~~/~///~~~~///~////~~~~~///~~~~////////////\
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
",
			width : 122,
			height : 100,
            music : "jurk1",
            dark: false,
            level: 1,
            encounterChance : 25,
            combatMap: "outdoorCombat",
            groups: ["outdoor", "default"],
            terrain : {
                "~" : {
                    level : 3,
                    encounterChance: 30,
                    combatMap : "shipCombat",
                    groups: ["water"]
                },
                "!" : {
                    level : 2,
                    encounterChance: 30,
                    combatMap : "outdoorCombat",
                    groups: ["outdoor", "default"]
                },
                "(" : {
                    level : 2,
                    encounterChance: 30,
                    combatMap : "outdoorCombat",
                    groups: ["outdoor", "default"]
                },
                ")" : {
                    level : 2,
                    encounterChance: 30,
                    combatMap : "outdoorCombat",
                    groups: ["outdoor", "default"]
                },
                "#" : {
                    level : 4,
                    encounterChance: 30,
                    combatMap : "swampCombat",
                    groups: ["swamp", "undead", "default"]
                },
                "R" : {
                    level : 4,
                    encounterChance: 30,
                    combatMap : "shipCombat",
                    groups: ["swamp", "undead", "default"]
                },
                "m" : {
                    level : 4,
                    encounterChance: 30,
                    combatMap : "swampCombat",
                    groups: ["swamp", "undead", "default"]
                },
                "i" : {
                    level : 5,
                    encounterChance: 30,
                    combatMap : "tundraCombat",
                    groups: ["tundra", "default"]
                },
                "S" : {
                    level : 5,
                    encounterChance: 30,
                    combatMap : "tundraCombat",
                    groups: ["tundra", "default"]
                },
                "Y" : {
                    level : 5,
                    encounterChance: 30,
                    combatMap : "tundraCombat",
                    groups: ["tundra", "default"]
                }
            },
            features : [
                {
                    type : "transition",
                    x : 75,
                    y : 83,
                    icon : "lighthouse.png",
                    text : "Enter Crowhook Lighthouse?",
                    target : "lighthouse1",
                    transitionType : "town",
                    targetX : 10,
                    targetY : 17
                },
                {
                    type : "transition",
                    x : 117,
                    y : 62,
                    icon : "doorway.png",
                    text : "Will you suppress all self-preservation instincts and clamber down into the notorious Barrier Caverns?",
                    target : "cave1",
                    transitionType : "dungeon",
                    targetX : 5,
                    targetY : 33
                },
                {
                    type : "transition",
                    x : 116,
                    y : 76,
                    icon : "doorway.png",
                    text : "At the entrance of this cavern, a weathered sign is barely legible. It reads, \"TROLLS - DO NOT ENTER\". Will you scoff at the warning and boldly enter the cave?",
                    target : "trollLair",
                    transitionType : "dungeon",
                    targetX : 9,
                    targetY : 24
                },
                {
                    type : "transition",
                    x : 90,
                    y : 83,
                    icon : "doorway.png",
                    text : "Horrific sounds, sights and smells await you in the Goblin Breeding Pits below, will you steel yourself and enter?",
                    target : "pits1",
                    transitionType : "dungeon",
                    targetX : 4,
                    targetY : 9
                },
                {
                    type : "transition",
                    x : 97,
                    y : 43,
                    icon : "keep.png",
                    text : "Here stands Worgen Keep, once a bastion of defense for the Kingdom, now a festering den of evil. Dare you enter?",
                    target : "worgenKeep1",
                    transitionType : "dungeon",
                    targetX : 19,
                    targetY : 4
                },
                {
                    type : "sign",
                    x : 95,
                    y : 42,
                    icon : "blockadeLeft.png",
                    until : "keepDone"
                },
                {
                    type : "barrier",
                    x : 96,
                    y : 42,
                    icon : "blockadeCenter.png",
                    title : "Blockade",
                    text : "The blockade can only be opened by activating the mechanism in Worgen Keep!",
                    until : "keepDone"
                },
                {
                    type : "sign",
                    x : 97,
                    y : 42,
                    icon : "blockadeRight.png",
                    until : "keepDone"
                },
                {
                    type : "sign",
                    x : 54,
                    y : 28,
                    icon : "iceGateLeft.png",
                    until : "swampDone"
                },
                {
                    type : "barrier",
                    x : 55,
                    y : 28,
                    icon : "iceGateCenter.png",
                    title : "Blocked",
                    text : "An enormous, impassible block of solid ice prevents your passage into the Northern Fiefdoms!",
                    until : "swampDone"
                },
                {
                    type : "sign",
                    x : 56,
                    y : 28,
                    icon : "iceGateRight.png",
                    until : "swampDone"
                },
                {
                    type : "transition",
                    x : 113,
                    y : 69,
                    icon : "city.png",
                    text : "Enter the town of Rivercross?",
                    target : "rivercross",
                    transitionType : "town",
                    targetX : 9,
                    targetY : 4
                },
                {
                    type : "transition",
                    x : 111,
                    y : 87,
                    icon : "city.png",
                    text : "Enter the Port of Yester?",
                    target : "yester",
                    transitionType : "town",
                    targetX : 23,
                    targetY : 4
                },
                {
                    type : "transition",
                    x : 90,
                    y : 58,
                    icon : "city.png",
                    text : "Enter the village of Lycea?",
                    target : "lycea",
                    transitionType : "town",
                    targetX : 4,
                    targetY : 15
                },
                {
                    type : "transition",
                    x : 90,
                    y : 38,
                    icon : "city.png",
                    text : "Will you enter Brinfort?",
                    target : "brinfort",
                    transitionType : "town",
                    targetX : 26,
                    targetY : 14
                },
                {
                    type : "transition",
                    x : 55,
                    y : 69,
                    icon : "city.png",
                    text : "Enter Sailor's Cove?",
                    target : "cove",
                    transitionType : "town",
                    targetX : 14,
                    targetY : 10
                },
                {
                    type : "transition",
                    x : 35,
                    y : 51,
                    icon : "city.png",
                    text : "Enter the City of Urlopolis?",
                    target : "urlopolis",
                    transitionType : "town",
                    targetX : 4,
                    targetY : 35
                },
                {
                    type : "transition",
                    x : 55,
                    y : 19,
                    icon : "city.png",
                    text : "Enter the Village of Haerhagen?",
                    target : "haerhagen",
                    transitionType : "town",
                    targetX : 9,
                    targetY : 5
                },
                {
                    type : "transition",
                    x : 32,
                    y : 27,
                    icon : "doorway.png",
                    text : "You stand at the mouth of a dark an ominous cavern, will you enter?",
                    target : "caveTown",
                    transitionType : "town",
                    targetX : 7,
                    targetY : 4
                },
                {
                    type : "transition",
                    x : 21,
                    y : 6,
                    icon : "blueTower.png",
                    text : "Taller than you had ever dared to imagine, the fabled Blue Tower looms over you. Will you enter?",
                    target : "blueTower1",
                    transitionType : "dungeon",
                    targetX : 11,
                    targetY : 21
                },
                {
                    type : "transition",
                    x : 79,
                    y : 12,
                    icon : "keep.png",
                    text : "You stand before the mighty Gurnstaad Citadel. Enter?",
                    target : "gurnstaad",
                    transitionType : "town",
                    targetX : 22,
                    targetY : 4
                },
                {
                    type : "transition",
                    x : 87,
                    y : 5,
                    icon : "doorway.png",
                    text : "You stand at the entrance of the Ice Maze, once a right of passage for young Keshak warriors. Dare you enter?",
                    target : "iceMaze",
                    transitionType : "dungeon",
                    targetX : 4,
                    targetY : 5
                },
                {
                    type : "transition",
                    x : 109,
                    y : 4,
                    icon : "tower.png",
                    text : "An ancient tower looms over you, will you enter?",
                    target : "tower1",
                    transitionType : "dungeon",
                    targetX : 12,
                    targetY : 20
                },
                {
                    type : "transition",
                    x : 50,
                    y : 79,
                    icon : "doorway.png",
                    text : "A cavern below appears to open up on to a subterranean sea, will you enter?",
                    target : "undersea",
                    transitionType : "dungeon",
                    targetX : 26,
                    targetY : 10
                },
                {
                    type : "transition",
                    x : 8,
                    y : 86,
                    icon : "doorway.png",
                    text : "You stand before the entrance to the Curzon River Caves. Will you enter?",
                    target : "swampCave1",
                    transitionType : "dungeon",
                    targetX : 54,
                    targetY : 12
                },
                {
                    type : "transition",
                    x : 27,
                    y : 64,
                    icon : "dome.png",
                    text : "You stand at the entryway of the sacred Pi-Yun Temple, enter?",
                    target : "temple1",
                    transitionType : "dungeon",
                    targetX : 20,
                    targetY : 38
                },
                {
                    type : "transition",
                    x : 107,
                    y : 24,
                    icon : "city.png",
                    text : "Will you enter Bridgetown?",
                    target : "bridgetown",
                    transitionType : "town",
                    targetX : 9,
                    targetY : 4
                },
                {
                    type : "sign",
                    x : 113,
                    y : 13,
                    icon : "bigTreeTop.png"
                },
                {
                    type : "transition",
                    x : 113,
                    y : 14,
                    icon : "bigTreeBottom.png",
                    text : "You stand in awe of the largest tree in the entire Empire. An entire city lays within its excavated trunk, will you enter?",
                    target : "greatTree",
                    transitionType : "town",
                    targetX : 22,
                    targetY : 40
                },
                {
                    type : "sign",
                    x : 72,
                    y : 55,
                    icon : "bigCastleLeft.png"
                },
                {
                    type : "sign",
                    x : 74,
                    y : 55,
                    icon : "bigCastleRight.png"
                },
                {
                    type : "barrier",
                    x : 73,
                    y : 55,
                    icon : "bigCastleCenter.png",
                    text : "The castle door is sealed and you cannot force it open!",
                    until : "sewersStart",
                    title : "Sealed"
                },
                {
                    type : "transition",
                    x : 73,
                    y : 55,
                    icon : "bigCastleCenter.png",
                    text : "The guards shout, 'Noble adventurers, great tales of your deeds in the East precede you. By the emperial order of Vella Trinth, we open the gates to Castle Helinika, Grand Capital of the Empire of the Hilenikan Kingdoms. Enter!'",
                    after : "sewersStart",
                    target : "hilenika",
                    transitionType : "town",
                    targetX : 26,
                    targetY : 24
                },
                {
                    type : "transition",
                    x : 17,
                    y : 34,
                    icon : "doorway.png",
                    text : "Ice cold, yet somehow fetid air emerges from this cavern, will you steel yourself and enter?",
                    target : "dragonCave",
                    transitionType : "dungeon",
                    targetX : 5,
                    targetY : 4
                },
                {
                    type : "transition",
                    x : 4,
                    y : 29,
                    icon : "doorway.png",
                    text : "An immaculately-constructed tunnel begins here, will you step within?",
                    target : "passage",
                    transitionType : "dungeon",
                    targetX : 81,
                    targetY : 11
                },
                {
                    type : "sign",
                    x : 5,
                    y : 30,
                    icon : "cleric.png",
                    action : "TALK",
                    after : "blueKeyGiven",
                    text : "You have done well to collect the Exis Keys, but your quest is not yet at an end. The Westerlandes are wild and dangerous. If Vella yet survives there, she must be found and returned to Hilenika.",
                    title : "Cleric"
                },
                {
                    type : "ship",
                    x : 112,
                    y : 90,
                    icon : "ship.png",
                    id : "yesterShip",
                    after : "cyclopsDone",
                    charter : 100
                },
                {
                    type : "ship",
                    x : 88,
                    y : 38,
                    icon : "ship.png",
                    id : "brinfortShip",
                    charter : 35
                },
                {
                    type : "ship",
                    x : 68,
                    y : 56,
                    icon : "ship.png",
                    id : "hilenikaShip",
                    charter : 125
                },
                {
                    type : "ship",
                    x : 40,
                    y : 47,
                    icon : "ship.png",
                    id : "urlopolisShip",
                    charter : 80
                },
                {
                    type : "ship",
                    x : 17,
                    y : 28,
                    icon : "ship.png",
                    id : "caveShip",
                    charter : 0
                },
                {
                    type : "encounter",
                    id : "giantSpiders",
                    x : 117,
                    y : 67,
                    icon : "greenSpider.png",
                    text : "Enormous Giant Spiders descend from their webs and attack!",
                    gold : 4,
                    creatures : [
                        {"name" : "Giant Spider", "bonus" : 1},
                        {"name" : "Giant Spider"},
                        {"name" : "Giant Spider"}
                    ],
                    items : [
                        {"name" : "Leather Helm"}
                    ]
                },
                {
                    type : "encounter",
                    id : "treants",
                    x : 101,
                    y : 56,
                    icon : "treant.png",
                    text : "Three towering Treants bear down on you!",
                    fast : true,
                    gold : 11,
                    creatures : [
                        {"name" : "Treant", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Treant"},
                        {"name" : "Treant"}
                    ],
                    items : [
                        {"name" : "Long Oak Staff"}
                    ]
                },
                {
                    type : "encounter",
                    id : "merfolk",
                    x : 91,
                    y : 92,
                    icon : "merman.png",
                    text : "This island is crawling with Merfolk, and they are taking your intrusion rather poorly!",
                    gold : 27,
                    creatures : [
                        {name : "Merman", bonus : 1, hitPoints : 10},
                        {name : "Merman"},
                        {name : "Merman"},
                        {name : "Merman"},
                        {name : "Merman Swordsman"},
                        {name : "Merman Swordsman"},
                        {name : "Merman Sorcerer"}
                    ],
                    items : [
                        {name : "Seaweed Cloak"},
                        {name : "Fish-oil Salve", bonus : 2}
                    ]
                },
                {
                    type : "encounter",
                    id : "bigOgre",
                    x : 109,
                    y : 40,
                    icon : "ogre.png",
                    text : "These hills are the domain of a pair of giant Ogres. They attack!",
                    ambushed : true,
                    gold : 27,
                    creatures : [
                        {name : "Ogre", bonus : 1, hitPoints : 40},
                        {name : "Ogre", bonus : 1, hitPoints : 30}
                    ],
                    items : [
                        {name : "Battle-axe", bonus : 1}
                    ]
                },
                {
                    type : "encounter",
                    id : "hugeTroll",
                    x : 94,
                    y : 6,
                    icon : "twoHeadedTroll.png",
                    text : "A giant Two-headed Troll emerges from its cliffside home and begins to hurl rocks at you!",
                    ambushed : true,
                    gold : 39,
                    creatures : [
                        {name : "Two-headed Troll", bonus : 3, hitPoints : 35}
                    ],
                    items : [
                        {name : "Amulet of Might", bonus : 1}
                    ]
                },
                {
                    type : "encounter",
                    id : "snakesEverywhere",
                    x : 22,
                    y : 75,
                    icon : "redSnake.png",
                    text : "The sounds of angry hissing rises up as you step boldly forth into this den of snakes!",
                    gold : 12,
                    creatures : [
                        {name : "Fire Snake", bonus : 1, hitPoints : 10},
                        {name : "Sea Snake", bonus : 1, hitPoints : 10},
                        {name : "Sea Snake"},
                        {name : "Sea Snake"},
                        {name : "Giant Snake"},
                        {name : "Giant Snake"},
                        {name : "Giant Snake"},
                        {name : "Giant Snake"}
                    ],
                    items : [
                        {name : "Serpentine Robes"}
                    ]
                },
                {
                    type : "encounter",
                    id : "ogres",
                    x : 44,
                    y : 23,
                    icon : "ogre2.png",
                        text : "You have stumbled into the camp of an ogre raiding party! They eagerly attack.",
                    gold : 44,
                    creatures : [
                        {"name" : "Ogre Assassin", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Ogre Assassin"},
                        {"name" : "Snow Ogre", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Snow Ogre", "bonus" : 1},
                        {"name" : "Ogre", "bonus" : 2, hitPoints : 10},
                        {"name" : "Ogre", "bonus" : 1, hitPoints : 10},
                        {"name" : "Ogre"}
                    ],
                    items : [
                        {"name" : "Sheepskin Boots", bonus : 1},
                        {"name" : "Vial of Frost"}
                    ]
                },
                {
                    type : "encounter",
                    id : "trollConclave",
                    x : 8,
                    y : 4,
                    icon : "iceTroll.png",
                        text : "A sizeable conclave of Trolls is conducting a ceremony of some sort, and your presence at the gathering is entirely unwelcome!",
                    gold : 67,
                    creatures : [
                        {"name" : "Troll Lord", "bonus" : 2, "hitPoints" : 20},
                        {"name" : "Two-headed Troll"},
                        {"name" : "Two-headed Troll"},
                        {"name" : "Ice Troll"},
                        {"name" : "Ice Troll"},
                        {"name" : "Ice Troll"},
                        {"name" : "Ice Troll"},
                        {"name" : "Ice Troll"},
                        {"name" : "Troll"},
                        {"name" : "Troll"}
                    ],
                    items : [
                        {"name" : "Trollhelm"}
                    ]
                }
            ]
        },
        "rivercross" : {
            name : "Rivercross",
			map : "\
===================\
===================\
===================\
===XXXXX!=!XXXXX===\
===X!!!XXDXX!!!X===\
===X!==X...X==!X===\
===X=====.===!!X===\
~==X====...==!!X===\
~==X!!.....====X==~\
~==X=!.=.....=~~~~~\
~~=X==.=====.=~X===\
~~=X=..=!~~~|~~X===\
~~=X!.==~~!=.=!X===\
~~~X!.!~~!==.==X===\
~~~~!.!~!===..=X===\
~~~~!=!~!=!=!.=X===\
~~~~!~!~~~===.=X===\
~~~~~~!!~~~!===X===\
~~~~~~~~~~~~===X===\
~~=!==~~~~~~XXXX===\
~~~~~!~~~~~~~======\
~~~~~~~~~~~~~~=====\
~~~~~~~~~~~~~~=====\
",
			width : 19,
			height : 23,
            music : "jurk3",
            dark : false,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 9,
                    y : 4,
                    icon : "doorInWall.png",
                    text : "Will you exit the safe confines of the city and explore the Wildernesse?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 113,
                    targetY : 69
                },
                {
                    type : "block",
                    x : 9,
                    y : 3
                },
                {
                    type : "sign",
                    x : 9,
                    y : 8,
                    icon : "fountain.png"
                },
                {
                    type : "sign",
                    x : 8,
                    y : 5,
                    icon : "soldier.png",
                    action : "TALK",
                    title : "Guard",
                    text : "Wishing you the best on your adventures! Be sure to stick close to the town at first, these are very dangerous times."
                },
                {
                    type : "sign",
                    x : 11,
                    y : 13,
                    icon : "man.png",
                    action : "TALK",
                    title : "Citizen",
                    text : "Last night I was set upon by a band of kobolds and wererats! If it wasn't for the town guards intervening, I surely would not have survived."
                },
                {
                    type : "sign",
                    x : 10,
                    y : 5,
                    icon : "soldier.png",
                    action : "TALK",
                    title : "Guard",
                    text : "Our work is cut out for us with the town being so close to the Barrier Caverns. We've had kobold raids nearly every night for weeks."
                },
                {
                    type : "temple",
                    x : 5,
                    y : 15,
                    icon : "temple.png",
                    cost : 15
                },
                {
                    type : "shop",
                    name : "Grimlorg's Provisions",
                    x : 13,
                    y : 17,
                    icon : "shop.png",
                    level : 1,
                    groups : ["default"],
                    buyRate : 100,
                    sellRate : 35
                },
                {
                    type : "dispatch",
                    x : 11,
                    y : 10,
                    icon : "oldMan.png",
                    action : "TALK",
                    sets : "koboldStart",
                    until : "koboldStart",
                    title : "Lord of Rivercross",
                    text : "Our town's very existence is at stake! The kobolds have the Barrier Caverns north of the town must be defeated! Will you brave band of adventurers take on this perilous quest?"
                },
                {
                    type : "sign",
                    x : 11,
                    y : 10,
                    icon : "oldMan.png",
                    action : "TALK",
                    after : "koboldStart",
                    until : "koboldDone",
                    title : "Lord of Rivercross",
                    text : "Please, defeat the kobolds to prevent further raids on our humble town!"
                },
                {
                    type : "sign",
                    x : 11,
                    y : 10,
                    icon : "oldMan.png",
                    action : "TALK",
                    after : "koboldDone",
                    title : "Lord of Rivercross",
                    text : "It is with the deepest gratitude that the citizens of Rivercross thank you for your heroic victory over the kobolds! Please travel South to Port Yester, they urgently need your help!"
                },
                {
                    type : "encounter",
                    id : "koboldReward",
                    x : 11,
                    y : 9,
                    icon : "chest.png",
                    text : "The town has presented you with a reward for eliminating the kobold threat!",
                    gold : 20,
                    after : "koboldDone",
                    creatures : [
                    ],
                    items : [
                    ]
                }
            ]
        },
        "yester" : {
            name : "Port Yester",
			map : "\
==!===================!=!======!!!!\
============XXXXXX====!=!=======!!!\
=======!===XX~!~~XX===!=!==========\
====XXXXXXXX~~~~~~XXXXX=XXXXXXX====\
===XX!!!====~~~~~~====XDX=====XX===\
=!=X!!=====~~~~~~~~========!===X===\
===X====~~~~~==~~~=============X===\
===X====~======================X===\
===X====~==========!=========!!X===\
===X====~~~=======!!==========!X===\
===X!=====~=======!!!========!!X!==\
===X!=====~~=======!=========!!X!==\
===X!!=====-================!!!X!!=\
===X!!=====~================!!!X!!=\
=!=X!======~~~============!!!!XX!!=\
===XX=!!====~~~=========!XXXXXX!!!=\
====X==!!!!===~~~====!!!XX!!!!!!!!!\
==~~~=~!!!!==~~~~~~~~~~!X!!!===!!!!\
=~~~~~~~~~~~~~~~~~~~~~~~~~~~====!!!\
=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~===!!\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~====\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~==\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~==\
",
			width : 35,
			height : 23,
            music : "jurk3",
            dark : false,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 23,
                    y : 4,
                    icon : "doorInWall.png",
                    text : "Exit Port Yester and return to the Wildernesse?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 111,
                    targetY : 87
                },
                {
                    type : "shop",
                    name : "Scrimsand Market",
                    x : 27,
                    y : 9,
                    icon : "shop.png",
                    level : 2,
                    groups : ["default"],
                    buyRate : 110,
                    sellRate : 30
                },
                {
                    type : "temple",
                    x : 5,
                    y : 17,
                    icon : "temple.png",
                    cost : 20
                },
                {
                    type : "sign",
                    x : 15,
                    y : 18,
                    icon : "ship.png"
                },
                {
                    type : "sign",
                    x : 22,
                    y : 5,
                    icon : "soldier2.png",
                    action : "TALK",
                    title : "Guard",
                    text : "You have no idea how happy I am that some non-Goblins just came through this gate!"
                },
                {
                    type : "sign",
                    x : 24,
                    y : 5,
                    icon : "soldier2.png",
                    action : "TALK",
                    title : "Guard",
                    text : "There are rumors that the breeding pits to the West are being ruled by at least two Goblin Kings! Thousand rally around them."
                },
                {
                    type : "dispatch",
                    x : 20,
                    y : 9,
                    icon : "man3.png",
                    action : "TALK",
                    sets : "pitsStart",
                    until : "pitsStart",
                    title : "Lord Yester",
                    text : "Our town is well-armed, but goblin hordes are attacking us endlessly! We can't hold out against them much longer. They are being bred in subterranean pits located west of town. Can you stop them?"
                },
                {
                    type : "alert",
                    x : 20,
                    y : 8,
                    icon : "silverKey.png",
                    after : "pitsStart",
                    until : "pitsKey",
                    sets : "pitsKey",
                    title : "Silver Key",
                    text : "Take this key, it was discovered on the person of a Goblin General that we vanquished during a raid last week."
                },
                {
                    type : "sign",
                    x : 20,
                    y : 9,
                    icon : "man3.png",
                    action : "TALK",
                    after : "pitsStart",
                    until : "pitsDone",
                    title : "Lord Yester",
                    text : "The Goblin Breeding Pits can be found to the west, nestled in the hills on the far bank of the River Trinth."
                },
                {
                    type : "sign",
                    x : 20,
                    y : 9,
                    icon : "man3.png",
                    action : "TALK",
                    after : "pitsDone",
                    title : "Lord Yester",
                    text : "What an enormous relief, we can finally resume our regular business activities here in the Port without fear of disruption. Thank you, brave heroes! I beseech you to travel North and West to Lycea, the Kingdom is in grave danger!"
                },
                {
                    type : "encounter",
                    id : "pitsReward",
                    x : 20,
                    y : 8,
                    icon : "chest.png",
                    text : "Here is your reward for disrupting the activities of the nefarious Goblin Breeding Pits!",
                    gold : 25,
                    after : "pitsDone",
                    creatures : [
                    ],
                    items : [
                    ]
                },
                {
                    type : "dispatch",
                    x : 18,
                    y : 16,
                    icon : "pirate.png",
                    action : "TALK",
                    sets : "cyclopsStart",
                    until : "cyclopsStart",
                    title : "Sailor",
                    text : "We be landlubbers since that curs'd cyclops began with its occupatin' of yonder lighthouse out West! Nary an anchor can be weighed 'til the lighthouse be regained. Can ye help us, matey?"
                },
                {
                    type : "sign",
                    x : 18,
                    y : 16,
                    icon : "pirate.png",
                    action : "TALK",
                    after : "cyclopsStart",
                    until : "cyclopsDone",
                    title : "Sailor",
                    text : "Scupper ye blubberin' and make haste to the lighthouse out West! Me longclothes be itchin', and that cyclops be gettin' no smaller while ye wait."
                },
                {
                    type : "sign",
                    x : 18,
                    y : 16,
                    icon : "pirate.png",
                    action : "TALK",
                    after : "cyclopsDone",
                    title : "Sailor",
                    text : "Well I'll be a midshipman's trousers, ye did it! Weigh the anchor, trim the topgallant and sturdy the mizzenmast, for we be marooned no more... huzzah!"
                },
                {
                    type : "encounter",
                    id : "cyclopsReward",
                    x : 18,
                    y : 15,
                    icon : "chest.png",
                    text : "For liberating the lighthouse, the sailors have rewarded you with hard currency!",
                    gold : 45,
                    after : "cyclopsDone",
                    creatures : [
                    ],
                    items : [
                    ]
                },
                {
                    type : "block",
                    x : 23,
                    y : 3
                }
            ]
        },
        "cave1" : {
            name : "Barrier Caverns",
			map : "\
CCCCCCCCCCCCCCCCCCCCCCC\
CCCCCCCCCCCCCCCCCCCCCCC\
CCCCCCCCCCCCCCCCCCCCCCC\
CCCCCCCCCCCCCCCCCCCCCCC\
CCCCCCCCC'CCCCCCCCCCCCC\
CCCCCCC''''''CCCCC'CCCC\
CCCCC''''''''CCC'''CCCC\
CCCCC'''''''CCCC'C'CCCC\
CCCC'''''C'''CC''C'CCCC\
CCCC'''''CCCCCC'CC'CCCC\
CCCC''''CC''CCC'CC'CCCC\
CCCCC''''C''''''CC'CCCC\
CCCCC''''CCCC'''C''CCCC\
CCCCC'''''''C'CCC'CCCCC\
CCCCCCC''C'''''CC'CCCCC\
CCCCCCC'CC'CCCCCC'CCCCC\
CCCCCCC'CCCCCCCC'''CCCC\
CCCCC''''''CCCCCC'CCCCC\
CCCC''CC''CCCCCCCCCCCCC\
CCCC'CCC'CCC''CCCCCCCCC\
CCCC''CC'''''''''CCCCCC\
CCCC''''''''''''''CCCCC\
CCCCCC''''''~'~''CCCCCC\
CCCCCCCC~~~~~~~''CCCCCC\
CCCCC~~~~'~~~~~'''CCCCC\
CCC~~~''''''~~''''CCCCC\
~~~~~'''''''''''''CCCCC\
CC~~C''C'''''''''CCCCCC\
CCC~CC''''CC''CC'''CCCC\
CC~~CC''''CC'CCC'''CCCC\
~~~~CCCCCCCCCC'''C'CCCC\
CCCCCCCCCCCCCC'CCC'CCCC\
CCCC'''CCC'''CCCC''CCCC\
CCCC''''CC'C''''''CCCCC\
CCCC'''''''CCCCCCCCCCCC\
CCCCCCCCCCCCCCCCCCCCCCC\
CCCCCCCCCCCCCCCCCCCCCCC\
CCCCCCCCCCCCCCCCCCCCCCC\
CCCCCCCCCCCCCCCCCCCCCCC\
",
			width : 23,
			height : 39,
            music : "jurk14",
            dark : true,
            level : 1,
            groups : ["kobold", "default"],
            encounterChance: 40,
            combatMap: "caveCombat",
            features : [
                {
                    type : "transition",
                    x : 5,
                    y : 33,
                    icon : "doorway.png",
                    text : "Escape the Barrier Caverns to the Wildernesse above?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 117,
                    targetY : 62
                },
                {
                    type : "encounter",
                    id : "caveEntrance",
                    x : 7,
                    y : 34,
                    icon : "koboldSwordsman.png",
                    text : "The cave entrance is guarded by a squadron of kobolds. They attack without hesitation!",
                    gold : 4,
                    creatures : [
                        {"name" : "Kobold Fighter", "bonus" : 1},
                        {"name" : "Kobold"},
                        {"name" : "Kobold"},
                        {"name" : "Kobold"},
                        {"name" : "Kobold"}
                    ],
                    items : [
                    ]

                },
                {
                    type : "encounter",
                    id : "caveShamans",
                    x : 9,
                    y : 24,
                    icon : "koboldShaman.png",
                    text : "Chanting by the water's edge are three Kobold Mystics. They turn to you and their chants give way to curses and shrieks of rage!",
                    gold : 2,
                    creatures : [
                        {"name" : "Kobold Mystic", "bonus" : 1},
                        {"name" : "Kobold Mystic", "bonus" : 1},
                        {"name" : "Kobold Mystic"}
                    ],
                    items : [
                        {"name" : "Energy Salve"}
                    ]
                },
                {
                    type : "encounter",
                    id : "caveRats",
                    x : 10,
                    y : 17,
                    icon : "wererat.png",
                    text : "You are suddenly set upon by a family of Wererats!",
                    ambushed : true,
                    gold : 1,
                    creatures : [
                        {"name" : "Wererat", "bonus" : 1},
                        {"name" : "Wererat", "bonus" : 2},
                        {"name" : "Wererat"},
                        {"name" : "Wererat"},
                        {"name" : "Wererat"}
                    ],
                    items : [
                        {"name" : "Leather Armor"}
                    ]
                },
                {
                    type : "encounter",
                    id : "caveGroup",
                    x : 10,
                    y : 10,
                    icon : "kobold.png",
                    text : "Too late, you determine that this room must be serving as the barracks. You are attacked by a large group of kobolds!",
                    ambushed : false,
                    gold : 6,
                    creatures : [
                        {"name" : "Kobold Mystic"},
                        {"name" : "Kobold"},
                        {"name" : "Kobold"},
                        {"name" : "Kobold"},
                        {"name" : "Kobold"},
                        {"name" : "Kobold"},
                        {"name" : "Kobold"},
                        {"name" : "Kobold"},
                        {"name" : "Kobold"},
                        {"name" : "Kobold"}
                    ],
                    items : [
                        {"name" : "Goblin Crossbow"},
                        {"name" : "Goblin Scimitar"}
                    ]
                },
                {
                    type : "encounter",
                    id : "cavePotion",
                    x : 12,
                    y : 8,
                    icon : "redSalve.png",
                    text : "You find here a discarded healing salve.",
                    gold : 0,
                    creatures : [
                    ],
                    items : [
                        {"name" : "Healing Salve", "bonus" : 1}
                    ]
                },
                {
                    type : "encounter",
                    id : "caveEliteGuard",
                    x : 17,
                    y : 6,
                    icon : "koboldSwordsman.png",
                    text : "Two enormous kobold guards confidently stride towards you. They growl, 'King Gorba is not receiving visitors!'",
                    gold : 4,
                    creatures : [
                        {"name" : "Kobold Fighter", "bonus" : 4},
                        {"name" : "Kobold Fighter", "bonus" : 3}
                    ],
                    items : [
                    ]

                },
                {
                    type : "sign",
                    x : 14,
                    y : 31,
                    icon : "man.png",
                    action : "TALK",
                    until : "koboldDone",
                    title : "Cave Explorer",
                    text : "Please help, I've been hiding here for a week! The minions in this cavern are taking their orders from an enormous kobold named 'Gorba'. Defeat him, and I believe the rest will disperse!"
                },
                {
                    type : "sign",
                    x : 17,
                    y : 13,
                    icon : "carpetS.png"
                },
                {
                    type : "sign",
                    x : 17,
                    y : 14,
                    icon : "carpetNS.png"
                },
                {
                    type : "sign",
                    x : 17,
                    y : 15,
                    icon : "carpetNS.png"
                },
                {
                    type : "sign",
                    x : 17,
                    y : 16,
                    icon : "carpetN.png"
                },
                {
                    type : "encounter",
                    id : "caveGorba",
                    x : 17,
                    y : 17,
                    icon : "koboldKing.png",
                    text : "You face the enormous 'Gorba', so-called king of the Barrier Caverns! He waddles off his throne and instructs his minions to attack!",
                    gold : 5,
                    after : "koboldStart",
                    sets : "koboldDone",
                    creatures : [
                        {"name" : "Kobold Fighter", "bonus" : 1},
                        {"name" : "Kobold Fighter", "bonus" : 1},
                        {"name" : "Kobold Mystic", "bonus" : 1},
                        {"name" : "Kobold Mystic", "bonus" : 1},
                        {"name" : "King Gorba"}
                    ],
                    items : [
                        {"name" : "Healing Salve"},
                        {"name" : "Gorba's Cloak"}
                    ]

                }
            ]
        },
        "trollLair" : {
            name : "Troll's Lair",
			map : "\
CCXXXXXCCCCCCCCCCCC\
CCX'''XXXXXXCCCCCCC\
CCX'''D''''XCCCCCCC\
CCX'''XXXX'XXCCCCCC\
CCXXXXX'''''XCCCCCC\
CCCCCX'''~~''CCCCCC\
CCCCCX'~~~~~''CCCCC\
CCCCCXX~~~~~~'CCCCC\
CCCCC~~~~~~~~''CCCC\
CCCC'~~~~~~~~'''CCC\
CCCC''~~~~~~~'''CCC\
CCCCC'~~~~~~''C'CCC\
CCCCC''~~C~~'CCCCCC\
CCC''''~~C~''CCCCCC\
CCC'CC''CCC'CCCCCCC\
CCCCCCC'C'''CCCCCCC\
CCCCCCC'''''CCCCCCC\
CCCCCC''''CCCCCCCCC\
CCCCCC'CC'CCCCCCCCC\
CCCCC''CCCCCCCCCCCC\
CCCCC'''CCCCCCCCCCC\
CCCCCCC''CCCCCCCCCC\
CCCCCCCC''CCCCCCCCC\
CCCCCCCC'''CCCCCCCC\
CCCCCCCCC'CCCCC====\
C=====CCC=C!!======\
=======C==!!=======\
===========!=======\
===========!=======\
",
			width : 19,
			height : 29,
            music : "jurk14",
            dark : true,
            level : 1,
            groups : ["dungeon", "default"],
            encounterChance : 0,
            combatMap : "caveCombat",
            features : [
                {
                    type : "transition",
                    x : 9,
                    y : 24,
                    icon : "caveFloor.png",
                    text : "Exit the Troll's Lair?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 116,
                    targetY : 76
                },
                {
                    type : "encounter",
                    id : "lairSpiders",
                    x : 3,
                    y : 14,
                    icon : "blackSpider.png",
                    text : "You have stumbled in to a nest of spiders. They attack!",
                    gold : 2,
                    creatures : [
                        {"name" : "Black Spider", "bonus" : 1},
                        {"name" : "Black Spider"},
                        {"name" : "Spitting Spider"}
                    ],
                    items : [
                        {"name" : "Imp Talisman", "bonus" : 3}
                    ]

                },
                {
                    type : "encounter",
                    id : "lairTrolls",
                    x : 10,
                    y : 4,
                    icon : "troll.png",
                    text : "The trolls are extraordinarily offended at your intrusion into their home. They attack!",
                    gold : 0,
                    creatures : [
                        {"name" : "Troll", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Troll", "hitPoints" : 5}
                    ],
                    items : [
                    ]

                },
                {
                    type : "encounter",
                    id : "lairTreasure",
                    x : 4,
                    y : 2,
                    icon : "chest.png",
                    text : "You have discovered the trolls' stash of treasure!",
                    gold : 16,
                    creatures : [
                    ],
                    items : [
                        {"name" : "Crude Club", "bonus" : 2},
                        {"name" : "Long Staff"},
                        {"name" : "Leather Armor", "bonus" : 1}
                    ]
                },
                {
                    type : "block",
                    x : 9,
                    y : 25
                }
            ]
        },
        "dragonCave" : {
            name : "Frost Cavern",
			map : "\
~~~~~~~~~~~\
~~~~~~~~~~~\
~~%~~~~~~~~\
~%%~~~~~~%~\
%%%%~i~~%%%\
%%%%%i%%%%%\
%%%%%i%%%%%\
%%%%%iiii%%\
%%%%%%i%i%%\
%%i%%%iii%%\
%iii%%%%i%%\
%iii%%%%i%%\
%iiii%%%ii%\
%iiii%%%%i%\
%%iiiiiiii%\
%%%%%%%%%%%\
%%%%%%%%%%%\
",
			width : 11,
			height : 17,
            music : "gurk2",
            dark : true,
            level : 1,
            groups : ["dungeon", "default"],
            encounterChance : 0,
            combatMap : "iceCombat",
            features : [
                {
                    type : "transition",
                    x : 5,
                    y : 4,
                    icon : "ice.png",
                    text : "Exit the Cavern?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 17,
                    targetY : 34
                },
                {
                    type : "encounter",
                    id : "caveWhiteDragon",
                    x : 2,
                    y : 10,
                    icon : "whiteDragon.png",
                    text : "You face a creature that you had only heard whispered in tales... a Dragon! This one is pure white and enormous, and you have invaded the sanctity of its lair!",
                    gold : 0,
                    creatures : [
                        {"name" : "White Dragon", "bonus" : 1}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "caveDragonTreasure",
                    x : 2,
                    y : 9,
                    icon : "chest.png",
                    text : "In the Dragon's chest you discover the legendary weapon 'Dwarvenkin'!",
                    gold : 273,
                    creatures : [
                    ],
                    items : [
                        {"name" : "Dwarvenkin"}
                    ]
                },
                {
                    type : "sign",
                    x : 1,
                    y : 12,
                    icon : "discardedSkull.png"
                },
                {
                    type : "sign",
                    x : 4,
                    y : 12,
                    icon : "discardedSkull.png"
                },
                {
                    type : "sign",
                    x : 3,
                    y : 14,
                    icon : "discardedSkull.png"
                },
                {
                    type : "sign",
                    x : 5,
                    y : 3,
                    icon : "ship.png"
                }
            ]
        },
        "passage" : {
            name : "Western Passage",
			map : "\
:::::AXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX%iiiii\
:A:::AXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX%%iiii\
::A::AXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX%%%iii\
:T:TAAXXXXXXXX...XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX%%iiii\
TTTTTAXXXXXXX.....XXX.......XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX%%iSii\
:::::XXXXXXX...X...XX.XX....XXXXXXXXXXXXXX.........XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX%S%Sii\
::::::................X.....XXXXXXXXXXXXXX.XXXXXXX.XXXX..X..X..XXXXXXXXXXXXXXXXXX%iSiii\
:::::XXXXXXX...X...XX.XX....XXXXXXXXXXXXXX.XXXXXXX................XXXXXX.XXXXXXXX%%Siii\
TTTTTAXXXXXXX.....XXX.........XXXXXXXXXXXX.XXXXXXXXXXXX..X..X..XX.XXXXX...XXXXXXX%Siiii\
:T:T:AXXXXXXXX...XXXXXXXXXXXX.XXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXX.XXXX.....XXXXXX%iiiSi\
:::::AXXXXXXXXX.XXXXXXXXXXXXX.XXXXXXXXXXXX....XXXXXXXXXXXXXXXXXXX.XXX...X...XXXXXXiiiii\
:::::AXXXXXXXXXXXXXXXXXXXXXXX.XXXXXXXXXXXX.XX.XXXXXXXXXXXXXXXXXXX................iiiiii\
::::AAXXXXXXXXXXXXXXXXXXXXXXX..............XX....XXXXXXXXXXXXXXXXXXXX...X...XXXXXXiSiii\
::A:AAXXXXXXXXXXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXX.....XXXXXX%%iiii\
:::AAAXXXXXXXXXXXXXXXXXXXXX...XXXXXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXX...XXXXXXX%%%Sii\
:::::AXXXXXXXXXXXXXX........XXXXXXXXXXXXXXXXXXXX.XX..XXXXXXXXXXXXXXXXXXX.XXXXXXXX%%%iii\
:::::AXXXXXXXXXXXXXX.....XXXXXXXXXXXXXXXXXXXXXXX..D..XXXXXXXXXXXXXXXXXXXXXXXXXXXX%%%iii\
:::::AXXXXXXXXXXXXXX..p..XXXXXXXXXXXXXXXXXXXXXXXXXX..XXXXXXXXXXXXXXXXXXXXXXXXXXXX%%%%%i\
:::::AXXXXXXXXXXXXXX.....XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX%%%iii\
:::::AXXXXXXXXXXXXXX.....XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX%%%iii\
:::::AXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX%iiiii\
:::::AXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX%%iiii\
:::::AXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX%iiiii\
",
			width : 87,
			height : 23,
            music : "jurk9",
            dark : true,
            level : 7,
            groups : ["dungeon", "undead", "default"],
            encounterChance : 30,
            combatMap : "dungeonCombat",
            features : [
                {
                    type : "transition",
                    x : 81,
                    y : 11,
                    icon : "ice.png",
                    text : "Exit the Western Passage?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 4,
                    targetY : 29
                },
                {
                    type : "block",
                    x : 82,
                    y : 11
                },
                {
                    type : "encounter",
                    id : "passageRockGolems",
                    x : 69,
                    y : 11,
                    icon : "rockGolem.png",
                    text : "You are assailed by creatures formed from animated solid rock!",
                    ambushed : true,
                    gold : 12,
                    creatures : [
                        {"name" : "Rock Golem", "bonus" : 1},
                        {"name" : "Rock Golem", "hitPoints" : 10},
                        {"name" : "Rock Golem"}
                    ],
                    items : [
                        {name : "Armored Boots", bonus : 1}
                    ]
                },
                {
                    type : "encounter",
                    id : "passageVipers",
                    x : 29,
                    y : 12,
                    icon : "blackSnake.png",
                    text : "Three Death Vipers emerge and strike with unexpected speed!",
                    ambushed : true,
                    gold : 49,
                    creatures : [
                        {"name" : "Death Viper", "bonus" : 1},
                        {"name" : "Death Viper"},
                        {"name" : "Death Viper"}
                    ],
                    items : [
                        {name : "Platemail Armor"},
                        {name : "Staff of Wisdom"}
                    ]
                },
                {
                    type : "encounter",
                    id : "passageBeholder",
                    x : 52,
                    y : 16,
                    icon : "beholder.png",
                    text : "A very curious creature inhabits this room. It is a floating eyeball and its gaze is angrily fixed upon you!",
                    gold : 89,
                    creatures : [
                        {"name" : "Beholder", "bonus" : 1, "hitPoints" : 50}
                    ],
                    items : [
                        {name : "Bow of Seeking"}
                    ]
                },
                {
                    type : "barrier",
                    x : 76,
                    y : 11,
                    icon : "exisGate.png",
                    until : "blueKeyGiven",
                    text : "You stand before a smooth gate made of solid stone. This must be the 'Exis Gate', as there are four receptacles that appear to fit your Exis Keys.",
                    title : "Exis Gate"
                },
                {
                    type : "alert",
                    x : 76,
                    y : 11,
                    icon : "exisGate.png",
                    until : "sealBroken",
                    sets : "sealBroken",
                    text : "You carefully insert the four Exis Keys into their respective slots. There is the sound of something very heavy dropping in to place, then slowly the gate grinds open. The Western Seal has been broken!",
                    title : "Exis Gate"
                },
                {
                    type : "barrier",
                    x : 11,
                    y : 6,
                    icon : "exisGate.png",
                    after : "westGate",
                    until : "sewersStart",
                    text : "The gate looks identical to the Exis Gate you opened on the other side. You are trapped in the Westerlandes!",
                    title : "Stone Gate"
                },
                {
                    type : "alert",
                    x : 10,
                    y : 6,
                    icon : "floor.png",
                    until : "westGate",
                    sets : "westGate",
                    text : "As you exit the chamber you are startled by a bone-shakingly loud slamming sound behind you!",
                    title : "Slam"
                },
                /*
                {
                    type : "barrier",
                    x : 6,
                    y : 6,
                    icon : "author.png",
                    text : "I hope you have enjoyed Gurk III so far! We'll have a new beta release ready soon that will let you explore the Westerlandes!",
                    title : "Author"
                },
                */
                {
                    type : "transition",
                    x : 5,
                    y : 6,
                    icon : "desert.png",
                    text : "Exit the Western Passage and enter the Westerlandes?",
                    target : "west",
                    transitionType : "outdoor",
                    targetX : 117,
                    targetY : 37
                },
                {
                    type : "block",
                    x : 4,
                    y : 6
                }
            ]
        },
        "swampCave1" : {
            name : "Curzon River Caves",
			map : "\
CCCCCCCCCCCCCCCCCCCCCCCCCCCRCCCCCCCCCCCCCCCCCCCCCCCCCCC####\
CCCCCCCCCCCCCCCCCCCC'''CCCCRCCCCCCCCCCCCCCCCCCCCCCCCCC#####\
CCCCCCCCCCCCCCCCCCCC'C'CCCCRCCCCCCCCCCCCCC'''''CCCCCCC#####\
CCCCCCCCCCCCCCCCCCCC'''''CCRCCCCCCCCCCCCC'''''''CCCCC######\
CCCCCCCCCCCCCCCCCCCC'C'C'CCRCCCCCCCCCCCC'''''''''CCCCC#####\
CCCCCCCCCCCCCCCCCCCC'''C'CRRCCCCCCCCCCCC'''''''''CCCCC#####\
CCCCCCCCCCCCCCCCCCCCCCCC'CRRCCCCCCCCCCCCCC'C'C'CCCCCCC#####\
CCCCCCCCCCCCCCCCCCCCCCCC'CRCCCCCCCCCCCCCCCCC'CCCCCCCCC#####\
CCCCCCCCCCCCCCCCCC'''CCC'CRCCCCCCCCCCCCCCCCC''''CCCCCC#####\
CCCCCCCCCCCCCCCC'''R''''''-'''''''''''''CCCCCCC'CCCCCC#####\
CCCCCCCCC''''''''RRR''CC'CR'C'C'C'RR|RR''CCCCCC'CCCCCCC####\
CCCCCCCCC''RR'RRRRRRRRCC'CRRRRRRRRRR|RRR'CCCCCC'CCCCCCC##mm\
CCC'''CCC'RRRRRRRRRRRRRC'CCRRRRRRRRC'RRR''CCCCC''CCCCC'#mRR\
CCC'''CCC'RRRRRRRRRRRRRC'''''RRRCCCC''RRR'''CC'''''''''RRRR\
CCC'''''''R'CRRRRRRRRRRC'CRRRRRCCCCC'''RRRR''''RRR''RRRRRmR\
CCC'''CC'RRR'RRRRRRRRRR''RRRRRRCC''''C'RRRRRRRRRRRRRRRRRRRR\
CCCCCCCC'''RRRRRRRRRRRRRRRRRRRCCC'CCCC''RRRRRRRRRRRRRRRRRRm\
CCCCCCCCCC'''RRRRRRRRRRRRRRRCCCCC'CCCCC''R''RR''''RRCCCCRRR\
CCCCCCCCC'''''RRRRRRRRRRCCCCCCCC''CCCCCC''''''''''CCCCCC###\
CCCCCCCCC'R'RRRRRRRRRRRCCCCCCCCC'CCCCCCCC''''''CCCCCCCCCC##\
RRRRRCCRRRR|RRRRRRRRRRRCCCCCCCCC'CCCCCCCCC'''CCCCCCCCCCCC##\
CCCCRRRRCRR'''RRRRRRRRCCCCCCCCCC'CCCCCCCCCCCCCCCCCCCCCCCC##\
CCCCCCCCCCCCC'''RR''R'CCCCCCCC''''CCCCCCCCCCCCCCCCCCCCCCC##\
CCCCCCCCCCCCCCC'''''R''CCCCCC''''''CCCCCCCCCCCCCCCCCCCCCC##\
CCCCCXXXXXCCCCCC'''''''CCCCCC''CC''CCCCCCCCCCCCCCCCCCCCCC##\
CCCCXX...XXCCCCC'''''''CCCCCC''CC''CCCCCCCCCCCCCCCCCCCCCCC#\
CXXXX.....XCCCCCCC'CCCCCCCCCC''''''CCCCCCCCCCCCCCCCCCCCCCC#\
CX.....p..D''''''''CCCCCCCCCCC''''CCCCCCCCCCCCCCCCCCCCCCCCC\
CXXXX.....XCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC\
CCCCXX...XXCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC\
CCCCCXXXXXCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC\
CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC\
CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC\
",
			width : 59,
			height : 33,
            music : "jurk11",
            dark : true,
            level : 5,
            groups : ["swamp", "default"],
            encounterChance : 30,
            combatMap : "caveCombat",
            features : [
                {
                    type : "transition",
                    x : 54,
                    y : 12,
                    icon : "caveFloor.png",
                    text : "Exit the cave system and return to the marsh?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 8,
                    targetY : 86
                },
                {
                    type : "block",
                    x : 55,
                    y : 12
                },
                {
                    type : "encounter",
                    id : "curzonGuard",
                    x : 52,
                    y : 13,
                    icon : "swampGuard.png",
                    text : "You have intruded on the ancestral home of the Fungus Brood! They attack with blades rapidly whirring.",
                    ambushed : true,
                    gold : 18,
                    creatures : [
                        {"name" : "Brood Guard", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Brood Guard"},
                        {"name" : "Brood Guard", "hitPoints" : 5},
                        {"name" : "Broodling", "bonus" : 2, "hitPoints" : 10},
                        {"name" : "Broodling"},
                        {"name" : "Broodling"}
                    ],
                    items : [
                        {"name" : "Military Boots"}
                    ]

                },
                {
                    type : "encounter",
                    id : "curzonGuard2",
                    x : 20,
                    y : 9,
                    icon : "fungusKeeper.png",
                    text : "You face a group a of humanoid creatures with skin completely covered in a thick fungus. They attack!",
                    ambushed : false,
                    gold : 8,
                    creatures : [
                        {"name" : "Fungus Keeper", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Fungus Keeper"},
                        {"name" : "Fungus Keeper"},
                        {"name" : "Fungus Keeper"}
                    ],
                    items : [
                        {"name" : "Jewel of Health", "bonus" : 1}
                    ]

                },
                {
                    type : "encounter",
                    id : "curzonMotherFungus",
                    x : 4,
                    y : 13,
                    icon : "motherFungus.png",
                    text : "This chamber appears to be some kind of incubator! An enormous, egg-shaped fungus begins emitting a high-pitched keening noise.",
                    ambushed : false,
                    gold : 13,
                    creatures : [
                        {"name" : "Mother Fungus", "bonus" : 1, "hitPoints" : 20},
                        {"name" : "Mushroom Drone"},
                        {"name" : "Mushroom Drone", "hitPoints" : 5}
                    ],
                    items : [
                        {"name" : "Amulet of Life"}
                    ]

                },
                {
                    type : "encounter",
                    id : "curzonCavePeeper",
                    x : 20,
                    y : 1,
                    icon : "cavePeeper.png",
                    text : "You are set upon by two unusual cave-dwelling creatures with bulbous, glassy eyes!",
                    ambushed : true,
                    gold : 19,
                    creatures : [
                        {"name" : "Cave Peeper", "bonus" : 1},
                        {"name" : "Cave Peeper"}
                    ],
                    items : [
                        {"name" : "Blink Gem"}
                    ]

                },
                {
                    type : "encounter",
                    id : "curzonSpiders",
                    x : 44,
                    y : 20,
                    icon : "paintedSpider.png",
                    text : "You have stumbled into an enormous den of spiders! The bones of their pray are littered all around, will yours soon join them?",
                    ambushed : false,
                    gold : 62,
                    creatures : [
                        {"name" : "Painted Spider", "bonus" : 1},
                        {"name" : "Painted Spider"},
                        {"name" : "Spider Queen", "hitPoints" : 5},
                        {"name" : "Spitting Spider"},
                        {"name" : "Black Spider"},
                        {"name" : "Black Spider"},
                        {"name" : "Black Spider"},
                        {"name" : "Black Spider"}
                    ],
                    items : [
                        {"name" : "Battle-axe", "bonus" : 2},
                        {"name" : "Elvish Armor", "bonus" : 1},
                        {"name" : "Great Helm"}
                    ]
                },
                {
                    type : "encounter",
                    id : "curzonSkeletonWizard",
                    x : 9,
                    y : 27,
                    icon : "skeletonWizard.png",
                    text : "The room you have entered appears to be a recent construction. It is defended by a large group of undead!",
                    ambushed : false,
                    gold : 33,
                    creatures : [
                        {"name" : "Skeleton Wizard", "bonus" : 1, "hitPoints" : 15},
                        {"name" : "Ghoul"},
                        {"name" : "Skeleton Guard"},
                        {"name" : "Skeleton Guard"},
                        {"name" : "Zombie"},
                        {"name" : "Zombie"},
                        {"name" : "Skeleton"},
                        {"name" : "Skeleton"},
                        {"name" : "Skeleton"},
                        {"name" : "Skeleton"}
                    ],
                    items : [
                        {"name" : "Magic Staff"}
                    ]

                },
                {
                    type : "sign",
                    x : 51,
                    y : 14,
                    icon : "cleric.png",
                    action : "TALK",
                    after : "swampDone",
                    title : "Cleric",
                    text : "Thank you for your bravery at Pi-Yun! The long, slow healing of the Urlani Marshlands has begun."
                },
                {
                    type : "transition",
                    x : 2,
                    y : 27,
                    after : "swampStart",
                    icon : "doorway.png",
                    text : "There are narrow stairs here leading to an underground chamber, descend?",
                    target : "swampCave2",
                    transitionType : "dungeon",
                    targetX : 9,
                    targetY : 19
                }
            ]
        },
        "swampCave2" : {
            name : "Underground Prison",
			map : "\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
XXXXXXXXXXXXX.G.G.XXXXXXXXXXXXXXXXXXXXXXX\
XXXXX.G..XXXX.X.X.XXXXXXXXXXXXXXXXXXXXXXX\
XXXXX.X..XXXX.X.X.XXXXXXXXXXXXXXXXX..XXXX\
XXXXX.XXXXXXX.X.X.X...D...........G..XXXX\
XXXXX.G..XXXXXX.XXX...XXXXXXDXXXXXXXXXXXX\
XXXXX.X..XXXXXX.XXX...XXXXXX....XXXXXXXXX\
XXXX..XXXXXXXXXDXXX...XXX.XXXXX.XXXXXXXXX\
XXXX.XXXXXXXX.....D...XX...XXXX.XXXXXXXXX\
XXXX.XXXXXXXX.XXXXXXX.XX...XXXX.XXXXXXXXX\
XXXX....XXXXX.XXXXXXX.XX...XXXX..D......X\
X..X.XX.XXXXX.X...XXX..G...XXXXX.XXXGXGXX\
X..G.XX.XXXXX.D...XXXXXXX.XXXXXX.XX..X..X\
X..XXXX.XXXXXXX...XXXXXXXXXXXXXX.XX..X..X\
XXXXXXX.XXXXXXXXDXXXXXXXXXXXXXXX.XXXXXXXX\
XXXXXXX.XXXXXXXX.XXXXXXXXXXXXXXX.XXXXXXXX\
XXXXXXXDXXXXXXXX.XXX..XXXXXX.....XXXXXXXX\
XXXXXXX.....XXXX.XXX...XXXXX.XXX.XXXXXXXX\
XXX..G..XXX.XXXX.XX....G.....XXX.XX..XXXX\
XXX..XX.....XXXX.XXX...XXXXXXXXX..G...XXX\
XXXXXXX.....XXXX.XXX..XXXXXXXXXX.XX..XXXX\
XXX..G..XXX.XXXX.XXXXXXXXXXXXXXX.XXXXXXXX\
XXX..XX.....D....XXXXXXXXXXXXXXX.XXXXXXXX\
XXXXXXXXXXXXXXXXXXXXXXXXXXXX...X.XXXXXXXX\
XXXXXXXXXXXXXXXXXXXXXXXXXXXX...G.XXXXXXXX\
XXXXXXXXXXXXXXXXXXXXXXXXXXXX...XXXXXXXXXX\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
",
			width : 41,
			height : 27,
            music : "jurk11",
            dark : true,
            level : 5,
            groups : ["undead", "swamp", "default"],
            encounterChance : 30,
            combatMap : "caveCombat",
            features : [
                {
                    type : "transition",
                    x : 9,
                    y : 19,
                    icon : "doorway.png",
                    text : "Climb back up into the caves?",
                    target : "swampCave1",
                    transitionType : "dungeon",
                    targetX : 2,
                    targetY : 27
                },
                {
                    type : "encounter",
                    id : "curzonUndeadFungus",
                    x : 15,
                    y : 12,
                    icon : "skeletonWizard.png",
                    text : "As you approach the Skeleton Wizard, you hear it mumbling, 'Once we can fully control the fungus races, our numbers will be overwhelming!'",
                    ambushed : false,
                    gold : 26,
                    creatures : [
                        {"name" : "Skeleton Wizard", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Skeleton Guard"},
                        {"name" : "Mother Fungus"},
                        {"name" : "Mother Fungus"}
                    ],
                    items : [
                        {"name" : "Wizard Hat"},
                        {"name" : "Energy Potion"}
                    ]
                },
                {
                    type : "encounter",
                    id : "curzonMother",
                    x : 25,
                    y : 9,
                    icon : "motherFungus.png",
                    text : "An enormous Mother Fungus fills the entire room!",
                    ambushed : true,
                    gold : 0,
                    creatures : [
                        {"name" : "Mother Fungus", "bonus" : 2, "hitPoints" : 50}
                    ],
                    items : [
                        {"name" : "Brood Figurine", "bonus" : 1}
                    ]
                },
                {
                    type : "encounter",
                    id : "curzonPhantoms",
                    x : 29,
                    y : 24,
                    icon : "phantom2.png",
                    text : "You sense a foul, unnatural presence in this cell...",
                    ambushed : false,
                    gold : 17,
                    creatures : [
                        {"name" : "Phantom", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Phantom"},
                        {"name" : "Phantom"},
                        {"name" : "Phantom"},
                        {"name" : "Phantom"}
                    ],
                    items : [
                        {"name" : "Dark Sword", "bonus" : 1}
                    ]
                },
                {
                    type : "encounter",
                    id : "curzonJailers",
                    x : 24,
                    y : 18,
                    icon : "mummy.png",
                    text : "There is a large squadron of undead guarding this jail cell, somebody very important must be held inside!",
                    ambushed : false,
                    gold : 7,
                    creatures : [
                        {"name" : "Mummy", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Mummy"},
                        {"name" : "Ghoul", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Ghoul"},
                        {"name" : "Skeleton Guard", "bonus" : 2, "hitPoints" : 5},
                        {"name" : "Skeleton Guard"},
                        {"name" : "Skeleton Guard"}
                    ],
                    items : [
                        {"name" : "Enchanted Skull", "bonus" : 4}
                    ]
                },
                {
                    type : "sign",
                    x : 8,
                    y : 3,
                    icon : "prisoner.png",
                    action : "TALK",
                    title : "Prisoner",
                    text : "We are prisoners of the undead... please help us!"
                },
                {
                    type : "sign",
                    x : 8,
                    y : 5,
                    icon : "prisoner.png",
                    action : "TALK",
                    title : "Prisoner",
                    text : "Our spirits would have long been broken, but for the noble efforts of the cleric who is a prisoner here with us."
                },
                {
                    type : "sign",
                    x : 3,
                    y : 19,
                    icon : "prisoner.png",
                    action : "TALK",
                    title : "Prisoner",
                    text : "We are not sure what they are keeping us for, but many of us fear the worse... fungus food!"
                },
                {
                    type : "sign",
                    x : 4,
                    y : 21,
                    icon : "prisoner.png",
                    action : "TALK",
                    title : "Prisoner",
                    text : "Do not worry about us-- carry on with your quest to regain the temple! Our spirits are buoyed by your efforts!"
                },
                {
                    type : "sign",
                    x : 36,
                    y : 3,
                    icon : "prisoner.png",
                    action : "TALK",
                    title : "Prisoner",
                    text : "They feed us mushrooms... and they feed US to the mushrooms..."
                },
                {
                    type : "sign",
                    x : 19,
                    y : 18,
                    icon : "cleric.png",
                    altIcon : "rolledScroll.png",
                    action : "TALK",
                    sets : "scrollGiven",
                    until : "swampDone",
                    title : "Cleric",
                    text : "The prisoners and even the fungal denizens of this cavern are subjugated by the undead. I must stand by them. But please travel to the Pi-Yun Temple with great haste. Read this scroll at the entrance, and the doors will open for you."
                }
            ]
        },
        "temple1" : {
            name : "Pi-Yun Temple",
			map : "\
####################X####################\
###################XXX###################\
##################XX#XX##################\
#################XX#m#XX#################\
################XXRRRRRXX################\
###############XX#Rm.mR#XX###############\
##############XX#mR...Rm#XX##############\
#############XX#mmR...Rmm#XX#############\
############XXRRRRR...RRRRRXX############\
###########XX#Rm....p....mR#XX###########\
##########XX#mR...........Rm#XX##########\
#########XX#mmR...p...p...Rmm#XX#########\
########XXRRRRR.....X.....RRRRRXX########\
#######XX#Rm....p..XXX..p....mR#XX#######\
######XX#mR.......XX.XX.......Rm#XX######\
#####XX#mmR...p..XX...XX..p...Rmm#XX#####\
####XXRRRRR.....XX.....XX.....RRRRRXX####\
R##XX#Rm....p..XX.......XX..p....mR#XX##R\
RRXX#mRm......XX..XXXXX..XX......mRm#XXRR\
RXX#mmRm.....XX...X...X...XX.....mRmm#XXR\
XXRRRRR#..p..D....X...X....D..p..#RRRRRXX\
RXX#mmRm.....XX...X...X...XX.....mRmm#XXR\
RRXX#mRm......XX..XXDXX..XX......mRm#XXRR\
R##XX#Rm....p..XX.......XX..p....mR#XX##R\
####XXRRRRR.....XX.....XX.....RRRRRXX####\
#####XX#mmR...p..XX...XX..p...Rmm#XX#####\
######XX#mR.......XX.XX.......Rm#XX######\
#######XX#Rm....p..XXX..p....mR#XX#######\
########XXRRRRR.....X.....RRRRRXX########\
#########XX#mmR...p...p...Rmm#XX#########\
##########XX#mR...........Rm#XX##########\
###########XX#Rm....p....mR#XX###########\
############XXRRRRR...RRRRRXX############\
#############XX#mmR...Rmm#XX#############\
##############XX#mR...Rm#XX##############\
###############XX#RR.RR#XX###############\
################XXmR|RmXX################\
#################XXX.XXX#################\
##################XX.XX##################\
###################XXX###################\
####################X####################\
",
			width : 41,
			height : 41,
            music : "jurk11",
            dark : true,
            level : 5,
            groups : ["undead", "default"],
            encounterChance : 30,
            combatMap : "dungeonCombat",
            features : [
                {
                    type : "transition",
                    x : 20,
                    y : 38,
                    icon : "doorway.png",
                    text : "Exit Pi-Yun?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 27,
                    targetY : 64
                },
                {
                    type : "barrier",
                    x : 20,
                    y : 37,
                    icon : "keylessGate.png",
                    until : "scrollGiven",
                    "title" : "Gate",
                    text : "You cannot force your way through this heavy gate, and it does not even appear to have a lock or hinges that would suggest that it could ever be opened!"
                },
                {
                    type : "block",
                    x : 19,
                    y : 34,
                    icon : "column.png"
                },
                {
                    type : "block",
                    x : 21,
                    y : 34,
                    icon : "column.png"
                },
                {
                    type : "alert",
                    x : 20,
                    y : 37,
                    icon : "keylessGate.png",
                    altIcon : "rolledScroll.png",
                    title : "Recitation",
                    text : "You open the scroll and pronounce the words you see written: 'Sicul Amina Mutarg'. The gate vibrates, then disintegrates, as does the scroll. You step in to the erstwhile sacred temple of Pi-Yun!",
                    sets : "piyunOpen",
                    until : "piyunOpen",
                    after : "scrollGiven"
                },
                {
                    type : "encounter",
                    id : "piyunGuards",
                    x : 20,
                    y : 33,
                    icon : "spectre.png",
                    text : "Whispering in soft but malevolent tones, a sentry of Spectres approach!",
                    ambushed : false,
                    gold : 19,
                    creatures : [
                        {"name" : "Spectre", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Spectre"},
                        {"name" : "Spectre", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Spectre"}
                    ],
                    items : [
                        {"name" : "Dark Bow"}
                    ]
                },
                {
                    type : "encounter",
                    id : "piyunWizard",
                    x : 20,
                    y : 10,
                    icon : "skeletonWizard.png",
                    text : "A Skeleton Wizard is directing an unholy sermon to undead disciples. Upon spying you, it orders its minions to attack!",
                    ambushed : false,
                    gold : 19,
                    creatures : [
                        {"name" : "Skeleton Wizard", "bonus" : 2, "hitPoints" : 20},
                        {"name" : "Skeleton Guard"},
                        {"name" : "Skeleton Guard"},
                        {"name" : "Zombie", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Zombie", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Zombie", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Zombie", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Skeleton", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Skeleton", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Skeleton", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Skeleton", "bonus" : 1, "hitPoints" : 5}
                    ],
                    items : [
                        {"name" : "Wand of Blasting", "bonus" : 1},
                        {"name" : "Energy Potion", "bonus" : 1}
                    ]
                },
                {
                    type : "encounter",
                    id : "piyunDoorGuards",
                    x : 20,
                    y : 23,
                    icon : "mummy.png",
                    text : "Guarding the door are three large and ancient-looking mummies. They suddenly spring into attack!",
                    ambushed : true,
                    gold : 7,
                    creatures : [
                        {"name" : "Mummy", "bonus" : 2, "hitPoints" : 25},
                        {"name" : "Mummy", "bonus" : 2, "hitPoints" : 25},
                        {"name" : "Mummy", "bonus" : 2, "hitPoints" : 25}
                    ],
                    items : [
                    ]
                },
                {
                    type : "transition",
                    x : 20,
                    y : 20,
                    icon : "doorway.png",
                    text : "Ascend to the second level of the Pi-Yun Temple?",
                    target : "temple2",
                    transitionType : "up",
                    targetX : 16,
                    targetY : 16
                }
            ]
        },
        "temple2" : {
            name : "Pi-Yun Temple",
			map : "\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
XXX......XXXXXXXXXXXXXXX......XXX\
XXX.XXXX.XXXXXXXXXXXXXXX.XXXX.XXX\
XXXXXXXX.....X..X..X.....XXXXXXXX\
XXXXXXXX.XXX.X.XXX.X.XXX.XXXXXXXX\
XXXXX....XXX.X.XXX.X.XXX....XXXXX\
XXXXX.XXXXX..X..X..X..XXXXX.XXXXX\
XXXXX.X..XX.XXX.X.XXX.XXXXXXXXXXX\
XXXXX.X..XX.....X.....XXXXXXXXXXX\
XXX.X....XXXX.XXXXX.XXXXXXXXX.XXX\
XXX.XXXXXXXXX.XXXXX.XXXXXXXXX.XXX\
XXX.....XXXXX.XXXXX.XXXXX.....XXX\
XXXXXXX.....X.......X.....XXXXXXX\
XXXXXXX.XXX.XXXX.XXXX.XXX.XXXXXXX\
XX......XXX.XXXX.XXXX.XXX......XX\
XXXXXXXXXXX...XX.XX...XXXXXXXXXXX\
XX......XXX.X.......X.XXX......XX\
XXXXXXX.XXX.XXXX.XXXX.XXX.XXXXXXX\
XXXXXXX.....XXXX.XXXX.....XXXXXXX\
XXX.....XXXXXXXX.XXXXXXXX.....XXX\
XXX.XXXXXXXXX.......XXXXXXXXX.XXX\
XXX.X.....XXX.XXXXX.XXX.....X.XXX\
XXXXX.XXX.XXX.XXXXX.XXX.XXX.XXXXX\
XXXXXXXXX.XX...XXX...XX.XXXXXXXXX\
XXXXXXXXX....p.XXX.p....XXXXXXXXX\
XXXXXXXXXXXX...XXX...XXXXXXXXXXXX\
XXXXXXXXXXXXX.XXXXX.XXXXXXXXXXXXX\
XXXXXXXXXXXXX.XXXXX.XXXXXXXXXXXXX\
XX............XXXXX............XX\
XX.XXXXXXXX.XXX...XXX.XXXXXXXX.XX\
X..XXXXXXXX...........XXXXXXXX..X\
X.XXXXXXXXXXXXX...XXXXXXXXXXXXX.X\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
",
			width : 33,
			height : 33,
            music : "jurk11",
            dark : true,
            level : 5,
            groups : ["undead", "default"],
            encounterChance : 20,
            combatMap : "dungeonCombat",
            features : [
                {
                    type : "transition",
                    x : 16,
                    y : 16,
                    icon : "doorway.png",
                    text : "Descend to the first level of the Pi-Yun Temple?",
                    target : "temple1",
                    transitionType : "down",
                    targetX : 20,
                    targetY : 20
                },
                {
                    type : "encounter",
                    id : "piyunWraith",
                    x : 16,
                    y : 30,
                    icon : "wraith2.png",
                    text : "A menacing Wraith glares at you! 'Prepare for an eternity of pain, misery and regret!' it shrieks as it attacks!",
                    ambushed : false,
                    gold : 59,
                    creatures : [
                        {"name" : "Wraith", "hitPoints" : 10},
                        {"name" : "Skeleton Wizard"},
                        {"name" : "Skeleton Wizard"},
                        {"name" : "Ghoul"},
                        {"name" : "Ghoul"}
                    ],
                    items : [
                        {"name" : "Staff of Wrath"}
                    ]
                },
                {
                    type : "encounter",
                    id : "piyunPrince",
                    x : 7,
                    y : 9,
                    icon : "undeadPrince.png",
                    text : "An imposing undead figure stands before you. 'You are too late, the power of Pi-Yun is melting the Keshak barrier, now our legions in the North shall surge forth!'",
                    ambushed : false,
                    gold : 105,
                    sets : "swampDone",
                    creatures : [
                        {"name" : "Undead Prince"},
                        {"name" : "Phantom"},
                        {"name" : "Phantom"},
                        {"name" : "Phantom"},
                        {"name" : "Zombie", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Zombie", "bonus" : 1, "hitPoints" : 5}
                    ],
                    items : [
                        {"name" : "Wand of Paralysis"}
                    ]
                },
                {
                    type : "alert",
                    x : 8,
                    y : 7,
                    icon : "energyBeam.png",
                    title : "Energy Beam",
                    text : "As you approach the energy beam, it emits one final burst of tremendous power, then dies out! The undead menace in Pi-Yun has been defeated, but what has happened up North?",
                    sets : "beamOff",
                    until : "beamOff"
                },
                {
                    type : "sign",
                    x : 8,
                    y : 7,
                    icon : "energyBeamOff.png",
                    title : "Energy Beam",
                    text : "The energy beam has died out, and the mechanism appears to be completely destroyed, it was likely burned out by the reckless use by the Undead Prince.",
                    after : "beamOff"
                }
            ]
        },
        "iceMaze" : {
            name : "Ice Maze",
			map : "\
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
wwwwwwwwwwwwwwwwwwwwwwffffwwwwwwffffw\
Swwwffwwwwwwwffwwffffwfwwfwwwwwwfwwfw\
iSwwwffwwfffwwfwwfwwwwfwwfwwwffffwwfw\
iiSSwwfwwwwfwwffffwwwwfwwfffffwwwwwww\
iiiifffwwwwfwwfwwwwffffwwfwwwwwfwwwfw\
iiSSwwfwwffffffwwwwfwwwwwfwfffffwwffw\
iSwwwwffffwwwwfwwwwfwwffffwfwwwwwffww\
Swwffffwwwwwwwfwwwwfwwwwfwwfwfffffffw\
wwwfwwfwwwwfwwfffwwffwwwfwwfwfwwwffww\
wwwfwwfwwfwfwwwwfwwwfffwfwwfwfwwwwffw\
wwwfwwfwwfwfffwwfwwwfwwwffwfwfwwwwwfw\
wwwfwwffffwwwfwwwwwwfwwwwfwfffwwwwwww\
wfffwwwwwfwwwffffffffwfwwfwwwfffffwww\
wfwwwwwwwfwwwfwwwwwwwwffwfwwwwwwwfwww\
wfwwwwfwwwwwwfwwfwwwwwfwwfwwwwwwwfwww\
wfwwwwffffffffwwfffffffwwffffwwwwfffw\
wfwwwwwfwwwfwwwwfwwwfwwwwwwwfwwwwfwfw\
wfffffffwwwffffffwwwfwwwwwfffwwwwfwfw\
wwwwwwwwwwwwwwwwwwwwfffffwwwffffffwww\
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww\
",
			width : 37,
			height : 21,
            music : "jurk5",
            dark : true,
            level : 6,
            groups : ["tundra", "default"],
            encounterChance : 30,
            combatMap : "iceMazeCombat",
            features : [
                {
                    type : "transition",
                    x : 4,
                    y : 5,
                    icon : "doorway.png",
                    text : "Exit the Ice Maze?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 87,
                    targetY : 5
                },
                {
                    type : "block",
                    x : 3,
                    y : 5
                },
                {
                    type : "alert",
                    x : 20,
                    y : 2,
                    title : "Bag of Holding",
                    sets : "bagOfHolding",
                    until : "bagOfHolding",
                    icon : "bag.png",
                    "text" : "You have found a Bag of Holding! You can now store an additional 15 items in the bag."
                },
                {
                    type : "encounter",
                    id : "iceMazeGolems",
                    x : 34,
                    y : 8,
                    icon : "iceGolem.png",
                    text : "Four enormous Ice Golems break themselves off from the walls and attack!",
                    ambushed : true,
                    gold : 0,
                    creatures : [
                        {name : "Ice Golem", bonus : 1, hitPoints : 20},
                        {name : "Ice Golem", bonus : 1, hitPoints : 20},
                        {name : "Ice Golem", bonus : 1, hitPoints : 20},
                        {name : "Ice Golem", bonus : 1, hitPoints : 20}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "iceMazeReward",
                    x : 35,
                    y : 8,
                    icon : "chest.png",
                    altIcon : "iceChalice.png",
                    text : "In this chest you find some gold, some treasure and a beautiful old chalice!",
                    sets : "iceMazeDone",
                    gold : 85,
                    creatures : [
                    ],
                    items : [
                        {name : "Hammer of the North"},
                        {name : "Jewel of Health"}
                    ]
                }
            ]
        },
        "blueTower1" : {
            name : "Blue Tower",
			map : "\
wwwwwwwwwwwwwwwwwwwwwww\
wwwwwfffwwfffwwfffffffw\
wfffffffwfffffwfffwwwfw\
wfwwwwfwwwwfwwwfffwwwfw\
wfwwwwwwwwwfwwwwwwwwwfw\
wffffffwwwwfwwwwwwwwwfw\
wwfwfwfwwwwfwwwwwwwwwfw\
wwfwfwffffwfwwwffwwwwfw\
wwfwfwfwwfwfwffffwwwwfw\
wwfffffwwfwfwfwwwwwwffw\
wwfwwwwwwfwfwfwwwwwwfww\
wwfwwwwwwfwfwfwffffffww\
wwfwwwwwwfwfwfwfwfwwfww\
wwfwwwwwwfwfwfffwfwwfww\
wwfwwwwfffwfwfwwwfwwfww\
wwfffwwfwwwfwfwwwwwwfww\
wwfffwwfffwfwfffwwwwfww\
wwfffwwfwfwfwfwfwwfffww\
wwwwfwwfwfffffwfwwfwfww\
wwwwffffwwfffwwffffffww\
wwwwwwwwwwwfwwwwwwwwwww\
wwwwwwwwwwwfwwwwwwwwwww\
iiiiiSSSSSwiwSSSSSiiiii\
iiiiiiiiSSiiiSSiiiiiiii\
iiiiiiiiiSSiSSiiiiiiiii\
iiiiiiiiiiSiSiiiiiiiiii\
iiiiiiiiiiiiiiiiiiiiiii\
",
			width : 23,
			height : 27,
            music : "jurk5",
            dark : true,
            level : 6,
            groups : ["tundra", "default"],
            encounterChance : 0,
            combatMap : "iceMazeCombat",
            features : [
                {
                    type : "transition",
                    x : 11,
                    y : 21,
                    icon : "doorway.png",
                    text : "Will you depart from the Blue Tower?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 21,
                    targetY : 6
                },
                {
                    type : "transition",
                    x : 11,
                    y : 1,
                    icon : "portal.png",
                    text : "There is a strange chamber here, bathed in an eerie blue light. Will you step into it?",
                    target : "blueTower6",
                    transitionType : "up",
                    targetX : 3,
                    targetY : 1
                },
                {
                    type : "transition",
                    x : 6,
                    y : 3,
                    icon : "doorway.png",
                    text : "Ascend to the second level of the Blue Tower?",
                    target : "blueTower2",
                    transitionType : "up",
                    targetX : 2,
                    targetY : 2
                },
                {
                    type : "block",
                    x : 11,
                    y : 22
                },
                {
                    type : "override",
                    x : 9,
                    y : 17,
                    tile : "w",
                    until : "blueKeyGiven"
                },
                {
                    type : "override",
                    x : 13,
                    y : 17,
                    tile : "w",
                    until : "blueKeyGiven"
                },
                {
                    type : "barrier",
                    x : 11,
                    y : 18,
                    icon : "dwarfGuard.png",
                    until : "iceMazeDone",
                    title : "Dwarf Guard",
                    text : "The large dwarf stares at you impassively. 'None may pass into the blue tower,' he says in a cold, strange voice."
                },
                {
                    type : "alert",
                    x : 11,
                    y : 18,
                    icon : "dwarfGuard.png",
                    after : "iceMazeDone",
                    sets : "blueTowerEntered",
                    until : "blueTowerEntered",
                    title : "Dwarf Guard",
                    text : "For what seems like an eternity the large dwarf guard stares at the Chalice, as if trying to recall something from the distant past. Finally, he simply says, 'Enter,' and steps aside."
                },
                {
                    type : "sign",
                    x : 11,
                    y : 18,
                    icon : "dwarfGuard.png",
                    after : "blueTowerEntered",
                    action : "TALK",
                    until : "blueKeyGiven",
                    title : "Dwarf Guard",
                    text : "The guard studies you for a while, then seems to recognize you. 'Enter,' he says, monotonically."
                },
                {
                    type : "sign",
                    x : 11,
                    y : 18,
                    icon : "dwarfGuard.png",
                    action : "TALK",
                    after : "blueKeyGiven",
                    title : "Dwarf Guard",
                    text : "Thank ye for releasing us from the dreadful curse o' servin' the foul undead! We wish ye the very best on your journey to the Westerlandes."
                },
                {
                    type : "sign",
                    x : 10,
                    y : 18,
                    icon : "dwarfGuard.png",
                    until : "blueKeyGiven",
                    title : "Dwarf Guard",
                    text : "The guard stares right through you, as if you didn't even exist!"
                },
                {
                    type : "sign",
                    x : 10,
                    y : 18,
                    icon : "dwarfGuard.png",
                    after : "blueKeyGiven",
                    action : "TALK",
                    title : "Dwarf Guard",
                    text : "We were in a trance... couldn't control our own actions... t'was a curse worse than a thousand hot summers..."
                },
                {
                    type : "sign",
                    x : 12,
                    y : 18,
                    icon : "dwarfGuard.png",
                    until : "blueKeyGiven",
                    title : "Dwarf Guard",
                    text : "The guard looks at you with a strange expression on his face, but says nothing!"
                },
                {
                    type : "sign",
                    x : 12,
                    y : 18,
                    icon : "dwarfGuard.png",
                    after : "blueKeyGiven",
                    title : "Dwarf Guard",
                    action : "TALK",
                    text : "Many thanks, Southerners! If it is the passage to the Westerlandes you seek, head South and West, and you shall discover the ancient passageway."
                },
                {
                    type : "encounter",
                    id : "blueTowerYeti",
                    x : 16,
                    y : 2,
                    icon : "yeti.png",
                    text : "This room is inhabited by a pair of enormous Yetis! They howl and attack!",
                    ambushed : true,
                    gold : 39,
                    creatures : [
                        {name : "Yeti", bonus : 1, hitPoints : 60},
                        {name : "Yeti", hitPoints : 40}
                    ],
                    items : [
                        {name : "Helm of Seeing"}
                    ]
                }
            ]
        },
        "blueTower2" : {
            name : "Blue Tower",
			map : "\
wwwwwwwwwwwwwwwwwwww\
wfffwwfffwwfffwwfffw\
wffffffffffffffffffw\
wfffwwfffwwfffwwfffw\
wwfwwwwfwwwwfwwwwfww\
wwfwwwwfwwwwfwwwwfww\
wfffwwfffwwfffwwfffw\
wffffffffffffffffffw\
wfffwwfffwwfffwwfffw\
wwfwwwwfwwwwfwwwwfww\
wwfwwwwfwwwwfwwwwfww\
wfffwwfffwwfffwwfffw\
wffffffffffffffffffw\
wfffwwfffwwfffwwfffw\
wwfwwwwfwwwwfwwwwfww\
wwfwwwwfwwwwfwwwwfww\
wfffwwfffwwfffwwfffw\
wffffffffffffffffffw\
wfffwwfffwwfffwwfffw\
wwwwwwwwwwwwwwwwwwww\
",
			width : 20,
			height : 20,
            music : "jurk5",
            dark : true,
            level : 6,
            groups : ["tundra", "default"],
            encounterChance : 30,
            combatMap : "iceMazeCombat",
            features : [
                {
                    type : "transition",
                    x : 2,
                    y : 2,
                    icon : "doorway.png",
                    text : "Will you descend to the ground level of the Blue Tower?",
                    target : "blueTower1",
                    transitionType : "down",
                    targetX : 6,
                    targetY : 3
                },
                {
                    type : "transition",
                    x : 17,
                    y : 17,
                    icon : "doorway.png",
                    text : "Will you climb up to the third level of the Blue Tower?",
                    target : "blueTower3",
                    transitionType : "up",
                    targetX : 14,
                    targetY : 14
                }
            ]
        },
        "blueTower3" : {
            name : "Blue Tower",
			map : "\
wwwwwwwwwwwwwwwww\
wwfffffwwwffffffw\
wwfwwwfwwwfwwwwfw\
wwwwwwfwfwfwwwwfw\
wffwfffffwfwwwwfw\
wfwwfwwwfwwwwwwfw\
wffffwwwfwffffffw\
wwwwfwwwfwfwwwwww\
wwwfffffffffffwww\
wwwwwwfwfwwwfwwww\
wffffffwfwwwffffw\
wfwwwwwwfwwwfwwfw\
wfwwwwfwfffffwffw\
wfwwwwfwfwfwwwwww\
wfwwwwfwwwfwwwfww\
wffffffwwwfffffww\
wwwwwwwwwwwwwwwww\
",
			width : 17,
			height : 17,
            music : "jurk5",
            dark : true,
            level : 6,
            groups : ["tundra", "undead", "default"],
            encounterChance : 30,
            combatMap : "iceMazeCombat",
            features : [
                {
                    type : "transition",
                    x : 14,
                    y : 14,
                    icon : "doorway.png",
                    text : "Descend to the second level of the Blue Tower?",
                    target : "blueTower2",
                    transitionType : "down",
                    targetX : 17,
                    targetY : 17
                },
                {
                    type : "encounter",
                    id : "blueTowerMercenaries",
                    x : 8,
                    y : 8,
                    icon : "ogre2.png",
                    text : "A group of mercenaries attack you!",
                    ambushed : true,
                    gold : 39,
                    creatures : [
                        {"name" : "Ogre Assassin", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Ogre Assassin"},
                        {"name" : "Snow Ogre", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Snow Ogre"},
                        {"name" : "Drow Elf", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Drow Elf"}
                    ],
                    items : [
                        {name : "Helm of Valor", bonus : 1},
                        {name : "Speed Boots", bonus : 1},
                        {name : "Ogre Talisman"}
                    ]
                },
                {
                    type : "transition",
                    x : 2,
                    y : 4,
                    icon : "doorway.png",
                    text : "Ascend to the fourth level of the Blue Tower?",
                    target : "blueTower4",
                    transitionType : "up",
                    targetX : 11,
                    targetY : 11
                }
            ]
        },
        "blueTower4" : {
            name : "Blue Tower",
			map : "\
wwwwwwwwwwwwww\
wffffffffffffw\
wfwwwfwwwfwwfw\
wfwfffwfffwwfw\
wfwfwwwfwwwwfw\
wfffwffffffwfw\
wfwwwffffffwfw\
wfwffffwfffwww\
wfwfwffffwfffw\
wfffwfffwwwwfw\
wfwwwffffwfffw\
wfwwwwwwfwfffw\
wffffffwfffffw\
wwwwwwwwwwwwww\
",
			width : 14,
			height : 14,
            music : "jurk5",
            dark : true,
            level : 6,
            groups : ["tundra", "undead", "default"],
            encounterChance : 30,
            combatMap : "iceMazeCombat",
            features : [
                {
                    type : "transition",
                    x : 11,
                    y : 11,
                    icon : "doorway.png",
                    text : "Descend to the third level of the Blue Tower?",
                    target : "blueTower3",
                    transitionType : "down",
                    targetX : 2,
                    targetY : 4
                },
                {
                    type : "encounter",
                    id : "blueTowerGolem1",
                    x : 9,
                    y : 12,
                    icon : "iceGolem.png",
                    text : "An enormous Ice Golem guards this passage!",
                    gold : 0,
                    creatures : [
                        {"name" : "Ice Golem", "bonus" : 1, "hitPoints" : 70}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "blueTowerGolem2",
                    x : 12,
                    y : 9,
                    icon : "iceGolem.png",
                    text : "An enormous Ice Golem guards this passage!",
                    gold : 0,
                    creatures : [
                        {"name" : "Ice Golem", "bonus" : 1, "hitPoints" : 70}
                    ],
                    items : [
                        {name : "Amulet of Light", bonus : 1}
                    ]
                },
                {
                    type : "transition",
                    x : 6,
                    y : 12,
                    icon : "doorway.png",
                    text : "Climb to the fifth level of the Blue Tower?",
                    target : "blueTower5",
                    transitionType : "up",
                    targetX : 9,
                    targetY : 1
                }
            ]
        },
        "blueTower5" : {
            name : "Blue Tower",
			map : "\
wwwwwwwwwww\
wfffffffffw\
wfwwwwwwwww\
wfwfffffffw\
wfwfwwwwwfw\
wfwfwfffffw\
wfwfwfwwwww\
wfwfwfwfffw\
wfwfwfwfwfw\
wfffwfffwfw\
wwwwwwwwwww\
",
			width : 11,
			height : 11,
            music : "jurk5",
            dark : true,
            level : 6,
            groups : ["tundra", "undead", "default"],
            encounterChance : 30,
            combatMap : "iceMazeCombat",
            features : [
                {
                    type : "transition",
                    x : 9,
                    y : 1,
                    icon : "doorway.png",
                    text : "Shall you descend to the fourth level of the Blue Tower?",
                    target : "blueTower4",
                    transitionType : "down",
                    targetX : 6,
                    targetY : 12
                },
                {
                    type : "transition",
                    x : 9,
                    y : 9,
                    icon : "doorway.png",
                    text : "Mount the stairs to the top floor of the Blue Tower?",
                    target : "blueTower6",
                    transitionType : "up",
                    targetX : 3,
                    targetY : 5
                },
                {
                    type : "encounter",
                    id : "blueTowerMages",
                    x : 1,
                    y : 8,
                    icon : "iceMage.png",
                    text : "You are set upon by a group of Ice Magi!",
                    ambushed : true,
                    gold : 73,
                    creatures : [
                        {"name" : "Ice Magus"},
                        {"name" : "Ice Magus"},
                        {"name" : "Ice Magus"},
                        {"name" : "Ice Magus", "bonus" : 1, "hitPoints" : 10}
                    ],
                    items : [
                        {name : "Wand of Disruption"}
                    ]
                }
            ]
        },
        "blueTower6" : {
            name : "Blue Tower",
			map : "\
wwwwwww\
wfwfwfw\
wfffffw\
wfffffw\
wfwfwfw\
wfwfwfw\
wwwwwww\
",
			width : 7,
			height : 7,
            music : "jurk5",
            dark : true,
            level : 6,
            groups : ["tundra", "default"],
            encounterChance : 0,
            combatMap : "iceMazeCombat",
            features : [
                {
                    type : "transition",
                    x : 3,
                    y : 5,
                    icon : "doorway.png",
                    text : "Will you descend the stairs to the fifth level of the Blue Tower?",
                    target : "blueTower5",
                    transitionType : "down",
                    targetX : 9,
                    targetY : 9
                },
                {
                    type : "sign",
                    x : 1,
                    y : 1,
                    icon : "phantom2.png",
                    title : "Phantom",
                    action : "LOOK",
                    until : "baronDefeated",
                    text : "The phantom ignores you, it appears to focus exclusively on the Baron, waiting for a signal."
                },
                {
                    type : "sign",
                    x : 1,
                    y : 2,
                    icon : "phantom2.png",
                    title : "Phantom",
                    action : "LOOK",
                    until : "baronDefeated",
                    text : "The phantom ignores you, it appears to focus exclusively on the Baron, waiting for a signal."
                },
                {
                    type : "sign",
                    x : 1,
                    y : 3,
                    icon : "phantom2.png",
                    title : "Phantom",
                    action : "LOOK",
                    until : "baronDefeated",
                    text : "The phantom ignores you, it appears to focus exclusively on the Baron, waiting for a signal."
                },
                {
                    type : "sign",
                    x : 1,
                    y : 4,
                    icon : "phantom2.png",
                    title : "Phantom",
                    action : "LOOK",
                    until : "baronDefeated",
                    text : "The phantom ignores you, it appears to focus exclusively on the Baron, waiting for a signal."
                },
                {
                    type : "sign",
                    x : 1,
                    y : 5,
                    icon : "phantom2.png",
                    title : "Phantom",
                    action : "LOOK",
                    until : "baronDefeated",
                    text : "The phantom ignores you, it appears to focus exclusively on the Baron, waiting for a signal."
                },
                {
                    type : "sign",
                    x : 5,
                    y : 1,
                    icon : "phantom2.png",
                    title : "Phantom",
                    action : "LOOK",
                    until : "baronDefeated",
                    text : "The phantom ignores you, it appears to focus exclusively on the Baron, waiting for a signal."
                },
                {
                    type : "sign",
                    x : 5,
                    y : 2,
                    icon : "phantom2.png",
                    title : "Phantom",
                    action : "LOOK",
                    until : "baronDefeated",
                    text : "The phantom ignores you, it appears to focus exclusively on the Baron, waiting for a signal."
                },
                {
                    type : "sign",
                    x : 5,
                    y : 3,
                    icon : "phantom2.png",
                    title : "Phantom",
                    action : "LOOK",
                    until : "baronDefeated",
                    text : "The phantom ignores you, it appears to focus exclusively on the Baron, waiting for a signal."
                },
                {
                    type : "sign",
                    x : 5,
                    y : 4,
                    icon : "phantom2.png",
                    title : "Phantom",
                    action : "LOOK",
                    until : "baronDefeated",
                    text : "The phantom ignores you, it appears to focus exclusively on the Baron, waiting for a signal."
                },
                {
                    type : "sign",
                    x : 5,
                    y : 5,
                    icon : "phantom2.png",
                    title : "Phantom",
                    action : "LOOK",
                    until : "baronDefeated",
                    text : "The phantom ignores you, it appears to focus exclusively on the Baron, waiting for a signal."
                },
                {
                    type : "encounter",
                    id : "undeadBaron",
                    x : 3,
                    y : 3,
                    icon : "dwarfSkeleton.png",
                    text : "Here stands Baron Vloyansk, but he has been transformed into something terrible! 'The Ice Chalice is a pleasant surprise, but what I really appreciate is the other three Exis Keys that you have graciously brought to me.' He attacks!",
                    sets : "baronDefeated",
                    gold : 0,
                    creatures : [
                        {"name" : "Baron Vloyansk"},
                        {"name" : "Wraith"},
                        {"name" : "Wraith"},
                        {"name" : "Phantom", "bonus" : 1},
                        {"name" : "Phantom", "bonus" : 1}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "baronTreasure",
                    x : 3,
                    y : 4,
                    icon : "chest.png",
                    sets : "blueKeyGiven",
                    altIcon : "blueExisKey.png",
                    text : "Searching through the late Baron's effects, you find gold, some precious items and the Blue Exis Key, completing your set!",
                    gold : 86,
                    creatures : [
                    ],
                    items : [
                        {name : "Jewel of Energy"}
                    ]
                }
            ]
        },
        "undersea" : {
            name : "Underground Sea",
			map : "\
///////////////////////////////////////\
///////////////////////////////////////\
///////////////////////////////////////\
///////////////////////////////////////\
///////////''''//////////~/////////////\
///////~/''''''////////~~~~~~~~~~//////\
//////~~~~~~~~''///////~~/~/////~~/////\
/////~~~~~~~~~~~///~~//~~/~~~~~//~~////\
/////~~~/~~~///////~~/~~~///~~~//~~////\
////~~~~~~~~/~~~~~~~~/~~~'//~~~~~~~////\
////~~~~~~~~~~~~~~~~~~~~-''//~~~~~~////\
////~~~//~~~~~~~~~~~~~~~~'///~~~~~/////\
/////~~//~~~/~~~~~~~~~/////~~~~~~~/////\
/////~~~//~~/~~~~~~~~~~/~~~~~~~~~~/////\
//////~~//~~//~~~~~/~~~~~~/~~~~~~//////\
//////~///////~~~//~~~~~~///~~~~///////\
//////////////~~~//~/~~~~~/~~~/////////\
//////////////~~~////~~~~~~~///////////\
/////'/////~~~~~~////~~~~~~~~//~~~/////\
/////''////~~~~~~~~~~~~~~~~~~~~~~~~////\
//////~~/~~~~~~~~~~~~~~/~~/~~~~~~~~////\
/////~~~~/~~~~~~~~~~~~~//~~~~~~~/~~////\
////~~~~~~~~~~~~~~~///////~~~~~~//~////\
/////~~~~~~~~~~////////////////~~/~////\
/////~~~~~~/////////~~////////////~////\
/////~~~~~~//////////~~~~~~~///~~~~////\
////~~~~~~~~~~~////////////~///~~~~////\
/////~/~~~~~~/~~~////////~~~~~~~~~/////\
/////~//~~~///~~~~~/~/~~~~~~~~~~~//////\
/////~///~~//////~~/~/~~~~~~~~~~~//////\
////~~////~~//~//~~~~/~~~~~~~~~~///////\
////~~////~//~~~~~//~/~~~~~~~~~~///////\
//////////////~/////~/~~~~~~~/~~~//////\
/////////////~~~///~~~~~~~~~///////////\
/////////////~~~///~/~~~~~~~~~~////////\
//////////~~~~/~~//~~~~~~~~~///////////\
//////////~~~~~~~~/~/~~~/~~~///////////\
//////////~~///~~~~~~~~///~/////''/////\
/////////~~~////~~/~/~~~~/~~/////'/////\
/////////~~~/~///~/~~~~~~/~~/////~~////\
//////////~~/~~~~~~~/~~~//~~//////~////\
//////////~~///~~~~~~~~///~~~~////~////\
////////'~~~//~~~///~~~///~~~~~/~~~////\
////////'~~~~///~~//~~~//'~~~~~~~//////\
////////'~//~~~~~~~~~~~/''~~~~~~~//////\
////////'~//~~~~~~~~~~~~~~~~~~~~///////\
/////////~~/~~/~~~~~~~~~~~~~~~~////////\
//////////~/~////~~~~~~~~//~~~~~///////\
//////////~~~//////~/~~//////~~~~~/////\
///////////////////////////////////////\
///////////////////////////////////////\
///////////////////////////////////////\
///////////////////////////////////////\
",
			width : 39,
			height : 53,
            music : "gurk2",
            boatMusic : "gurk2",
            dark : true,
            level : 4,
            groups : ["water"],
            encounterChance : 35,
            combatMap : "wetCaveCombat",
            terrain : {
                "~" : {
                    level : 4,
                    encounterChance: 35,
                    combatMap : "shipCombat",
                    groups: ["water"]
                }
            },
            features : [
                {
                    type : "transition",
                    x : 26,
                    y : 10,
                    icon : "doorway.png",
                    text : "Will you exit the Underground Sea and return to sunlight above?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 50,
                    targetY : 79
                },
                {
                    type : "ship",
                    x : 23,
                    y : 10,
                    icon : "ship.png",
                    id : "underShip"
                },
                {
                    type : "encounter",
                    id : "underSeaMonster",
                    x : 33,
                    y : 38,
                    icon : "seaSerpent.png",
                    text : "You face an enormous Sea Monster!",
                    gold : 0,
                    creatures : [
                        {"name" : "Sea Monster", "bonus" : 3, "hitPoints" : 25}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "underMerman",
                    x : 14,
                    y : 32,
                    icon : "merman.png",
                    text : "You face a Merman!",
                    gold : 10,
                    creatures : [
                        {"name" : "Merman", "bonus" : 1, "hitPoints" : 5}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "underHydrosword",
                    x : 32,
                    y : 37,
                    icon : "itemWaterSword.png",
                    text : "In a shallow pond, orbited by thousands of tiny iridescent fish, you find the legendary Hydrosword!",
                    gold : 0,
                    creatures : [
                    ],
                    items : [
                        {"name" : "Hydrosword"}
                    ]
                }
            ]
        },
        "pits1" : {
            name : "Breeding Pits",
			map : "\
CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC\
CCCCCCCCCCCCCCCCCCCCCCCCCCCC~~CCC\
CCCCCCCCCCCCCCCCCCCCCCCCCCC~~~~~C\
CCCCCCCCCCCCCCCCCCCCCCCCCCC~~~~~C\
CCCCCC''''''''CCCCCCCCCCCC~~~~~~C\
CCCCCC'CC''CC'''CC'CCCCC~~~~~~~~C\
CCCC'''C''CCCCCCC''CC~~~~~~'~~~CC\
CCCC'CCC'CCCCCC'''''''''~~~~~~~CC\
CCCC'CC''CCCCCC'C'CCCCC''~~~~~~CC\
CCCC'CC'CCCCCC''CCCCC''''~~~~~~CC\
CCCCCCC'''CCC''CCCCC''CC'C~~~~~CC\
CCCCCCCCC'CCCC'CCCC''CCC'C~~'~~CC\
CCCCCCCC'''CC''CC''''CCCCC~~'~~CC\
CCCCCCCC'''CCC'CC'CC'''CCCCC'~~CC\
CCCCCCCCC''''''CC''C'C''CCCC'CCCC\
CCCCCCCCCCCCCCCCC'CC'CC''CC''CCCC\
CCCCCCCCCCCCCCCCCCCC'''''''''CCCC\
CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC\
CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC\
CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC\
CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC\
",
			width : 33,
			height : 21,
            music : "jurk4",
            dark : true,
            level : 1,
            groups : ["goblin", "default"],
            encounterChance: 35,
            combatMap: "caveCombat",
            features : [
                {
                    type : "transition",
                    x : 4,
                    y : 9,
                    icon : "doorway.png",
                    text : "Exit the foul Breeding Pits and return to the clean air of the Wildernesse above?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 90,
                    targetY : 83
                },
                {
                    type : "encounter",
                    id : "pitsGuard",
                    x : 8,
                    y : 4,
                    icon : "goblin7.png",
                    text : "Four enormous Goblins block your passage. They grumble in unison, \"No humans in the Pits!\"",
                    gold : 4,
                    creatures : [
                        {"name" : "Goblin Warrior", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Goblin Warrior", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Goblin Warrior"},
                        {"name" : "Goblin Warrior"}
                    ],
                    items : [
                        {"name" : "Goblin Scimitar", "bonus" : 1}
                    ]

                },
                {
                    type : "encounter",
                    id : "pitsScouts",
                    x : 24,
                    y : 11,
                    icon : "goblinScout.png",
                    text : "With surprising speed, a pack of small but viscious Goblin Scouts lunge towards you!",
                    ambushed : true,
                    gold : 6,
                    creatures : [
                        {"name" : "Goblin Scout", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Goblin Scout", "bonus" : 1, "hitPoints" : 3},
                        {"name" : "Goblin Scout"},
                        {"name" : "Goblin Scout"},
                        {"name" : "Goblin Scout"},
                        {"name" : "Goblin Scout"}
                    ],
                    items : [
                        {"name" : "Goblin Crossbow", "bonus" : 1}
                    ]

                },
                {
                    type : "encounter",
                    id : "pitsShamans",
                    x : 28,
                    y : 12,
                    icon : "goblinWizard.png",
                    text : "Goblin Shamans screech and wail as you approach. \"They must not be allowed in the pits!\"",
                    gold : 9,
                    creatures : [
                        {"name" : "Goblin Shaman", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Goblin Shaman", "bonus" : 1, "hitPoints" : 3},
                        {"name" : "Goblin"},
                        {"name" : "Goblin"},
                        {"name" : "Goblin"},
                        {"name" : "Goblin"}
                    ],
                    items : [
                        {"name" : "Goblin Staff", "bonus" : 1}
                    ]

                },
                {
                    type : "barrier",
                    x : 28,
                    y : 14,
                    icon : "caveGate.png",
                    until : "pitsKey",
                    title : "Gate",
                    text : "This heavy iron gate is locked, you cannot get through!"
                },
                {
                    type : "sign",
                    x : 28,
                    y : 14,
                    icon : "caveGate.png",
                    after : "pitsKey"
                },
                {
                    type : "alert",
                    x : 28,
                    y : 14,
                    icon : "caveGate.png",
                    altIcon : "silverKey.png",
                    title : "Unlocked",
                    text : "You use the silver key to unlock the heavy gate.",
                    sets : "alertPitsKey",
                    until : "alertPitsKey",
                    after : "pitsKey"
                },
                {
                    type : "transition",
                    x : 28,
                    y : 11,
                    icon : "doorway.png",
                    text : "You hear various unpleasant-sounding shrieks and grunts through the heat and humidity emitting from below. Descend?",
                    target : "pits2",
                    transitionType : "up",
                    targetX : 4,
                    targetY : 7
                }
            ]
        },
        "pits2" : {
            name : "Breeding Pits",
			map : "\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~'''~~~~~~~~~''~~~~~~~\
~~~~~~~CC''C~~~~~~~'''C~~~~~~\
~~~~~~'''''C~~~~~~~~'~~~~~~~~\
~~~~~~'''''C'~~~~~~~~~~~~~~~~\
~~~~'''''''''~~~~~~~~'~~~~~~~\
~~~~~~C''''''~~~'~~~''~~~~~~~\
~~~~~~~'''''''~''~~''~~~~~~~~\
~~~~~~~~~~~'''~~~~~'''~CC~~~~\
~~~~~~~~~~~'C'~~C~''''''C~~~~\
~~~~~~~~~~''~~~~C'''''''C~~~~\
~~~~~~~~~'''~~~~C''''C''C~~~~\
~~~~~~~'~'''''~~'''''C''C~~~~\
~~~~~~~'''''''~'''''''''C~~~~\
~~~~~~~'''''''-''CC'''''C~~~~\
~~~~~~~~''''''~'''C~'''C~~~~~\
~~~~~~~~~~''~'~~'''~~''~~~~~~\
~~~~~~~~~~~~~~~~~''~''~~~~~~~\
~~~~~~~~~~~~~~~~~~~~''~~~~~~~\
~~~~~~~~~~~~~~~~'C~~'~~~~~~~~\
~~~~~~~~~~~~~~~''C''''~~~~~~~\
~~~~~~~~~~~~~~~''''CC~~~~~~~~\
~~~~~~~~~~~~~~~~~~'~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
",
			width : 29,
			height : 29,
            music : "jurk4",
            dark : true,
            level : 2,
            groups : ["goblin", "default"],
            encounterChance: 40,
            combatMap: "wetCaveCombat",
            features : [
                {
                    type : "encounter",
                    id : "pitsBreeders",
                    x : 11,
                    y : 11,
                    icon : "goblin.png",
                    text : "A large pack of breeders approach, chanting, \"Cut them up and eat them! Taste them on your tongue! Take their bones and smash them! Feed them to the young!\"",
                    gold : 7,
                    creatures : [
                        {"name" : "Goblin Shaman", "bonus" : 2, "hitPoints" : 18},
                        {"name" : "Goblin"},
                        {"name" : "Goblin"},
                        {"name" : "Goblin"},
                        {"name" : "Goblin"},
                        {"name" : "Goblin"},
                        {"name" : "Goblin"},
                        {"name" : "Goblin"},
                        {"name" : "Goblin"}
                    ],
                    items : [
                    ]

                },
                {
                    type : "encounter",
                    id : "pitsKing1",
                    x : 15,
                    y : 16,
                    icon : "goblinKing.png",
                    text : "Through the thick steam you perceive a mighty Goblin King standing at the far end of the bridge. He and his consort suddenly attack!",
                    ambushed : true,
                    gold : 15,
                    creatures : [
                        {"name" : "Goblin King"},
                        {"name" : "Goblin Warrior"},
                        {"name" : "Goblin Warrior"}
                    ],
                    items : [
                        {"name" : "Wand of Striking"}
                    ]
                },
                {
                    type : "encounter",
                    id : "pitsKing2",
                    x : 15,
                    y : 22,
                    icon : "goblinKing.png",
                    sets : "pitsDone",
                    text : "A far bigger Goblin King glowers at you, while two enormous creatures stand guard at his side. \"If we fall, the Pits are doomed, attack them!\"",
                    gold : 20,
                    creatures : [
                        {"name" : "Goblin King", "bonus" : 2, "hitPoints" : 15},
                        {"name" : "Hobgoblin"},
                        {"name" : "Hobgoblin"}
                    ],
                    items : [
                        {"name" : "Studded Armor"},
                        {"name" : "Broadsword"},
                        {"name" : "Energy Salve"}
                    ]
                },
                {
                    type : "transition",
                    x : 4,
                    y : 7,
                    icon : "doorway.png",
                    text : "Return to the upper level of the Breeding Pits?",
                    target : "pits1",
                    transitionType : "up",
                    targetX : 28,
                    targetY : 11
                }
            ]
        },
        "sewer" : {
            name : "The Sewers",
			map : "\
XXXXXXXXXXXXXXXXXRRXRRXXXXXRXXXXXRXXXXX\
X....XXXXXXXXXXXXXRXRXXXXXXRXXXXXRXXXXX\
X....XXXXXXXXXXXXXRXRXXXXXXRXXXXXRXXXXX\
X..............XXXRXRXXXXXXRXXXXXRXXXXX\
X....XXXXXXXXX.XX.RRR.XXXXXRRRRRRRXXXXX\
XXX.XXXXXXXXXX.XX.RRR..XXXXXXXRXXXXXXXX\
XXX.......XXXX....---....XXXXXRXXXXXXXX\
XXXXXXXXX.XXXXXXX.RRR.........-.....XXX\
XXXXXXXXX.XXXXXXX.RRRRRRRRRRRRRXXXX.XXX\
XXXXXXXXX.XXXXXXX.RXR......XXXRXXXX.XXX\
XXXXXXXXX.XXXXXXX.RRR....XXXXXRXXX...XX\
XX...........XXXX.RXR..XXXXXXXRXXX...XX\
XX.XXX.XXXXX.XXXX.RRR.XXXXXXXXRXXX...XX\
XX.XXX.XXXXX.XXXX.RXR.XXXXXXXXRXXX...XX\
XX.RRR.RXXXX.XXXX.RRR.XXXXXXXXRXXX...XX\
XX.R.R.RXXX...XXX.RXR.XXXXXXXXRXXX...XX\
XX.R.R.RXXX.R.XXX.RRR.XXXXXXXXRXXX.XXXX\
XX.R.R.RXXX.R.XXX.RXR.XXXXXXXXRXXX.XXXX\
XX.R.R.RXXX.R.XXX.RRR.XXXXXXXXRRRR|RRRR\
XX.R.R.RXXX.R.XXX.RXR.XXXXXXXXRXXX.XXXX\
XX.R.R.RXXX.R.XXX.RRR.XXXXXXXXRXXX.XXXX\
XX.R.R.RXXX.R.XXX.RRR.XXXXXXXXRXXX..XXX\
XX.R.R|RRRRRRRRRX.RRR.XXXXXXXXRXXXX.XXX\
XX.R.R.RX.......X.RRR.XXXXXXXXRXXXX.XXX\
XX.R.R.RXXXX.XXXX.RRR.XXXXXXXXRXXX..XXX\
XX.R.R.RX.......X.RRR.XXXXXXXXRXXX..XXX\
XX.R.R.RXXXX.XXXX.RRR.XXXXXXXXRXXX..XXX\
XX.R.R.RXX.....XX.RRR.XXXXXXXXRXXXX.XXX\
XX.R.R.RXXXX.XXXX.RRR.XXXXXRRRRXXXX.XXX\
XX.R.R.RXXX...XXX.RRR.........-..XX...X\
XX.R.R.RXXXX.XXXX.RRR.XX.XXRRRRX.XXXX.X\
XX.R.R.RXXX...XXX.RRR.XX.XXXXXRX.XXXX.X\
XX.R.R.RXXXX.XXXX.RRRXXX.XXXXXRX.XXXX.X\
XX.R.R.RXXXX.XXXX.RRRXXX.XXXXXRX.XXXX.X\
XX.R.R.RXXXX.XXXX.RRR.XX.XXXXXRX.XXXX.X\
XX.R.R.RXXXX.XXXX.RRR.XX.....XRX.XXXX.X\
XX.R.R.RXXXX......RRR.XX.....XRX.XXXX.X\
XX.R.R.RXXXXXXXXX.RRR.XX..X..XRX.X....X\
XX.X.R.RXXXXXXXXX.RRR.XX.....XRX.X.XXXX\
XX...X.RRXXXXXXXXXRRR.XX..X..XRX...XXXX\
XX.XXX.RRRRRRRRRRRRRR.XX.....XRRRRRRRRR\
XX.XXX..........XXRRR.XX..X..XRX...XXXX\
XX.XXXXXXXXXXXX...RRR.XXX.X.XXRX...XXXX\
XX....XXXXXXXXXXX.RR....X.X.XXRX....XXX\
XX....XXXXXXXXXXX..RR.X.......RXXXX.XXX\
XX...........XXXX.RR..XXXXXXXXRXXXX.XXX\
XX....XXXX.~.XXXX..RR.XXXXXXXXRXXXX.XXX\
XX....XXXX...XXXX.RR..XXXXXXXXRXXXX.XXX\
XXXXXXXXXXXXXXXXX..RR.XXXXXXXXRXXXX.XXX\
XXXXXXXXXXXXXXXXX.RR..XXXXXXXXRXXXX.XXX\
XXXX...............RR.XXXXRRRRRXX....XX\
XXXX.XXXXXXXXXXXX.RR..XXXXXXXXRXX.XX.XX\
XXXX.XXXXXXXXXXXX..RR.XXXXXXXXRXX.XX.XX\
RRRR|RRRRRRRRXXXX.RR..XXXXXXXXRXX.XX.XX\
XXXX.XXXXXXXRXXXX..RR.XXXXXXXXRXX.XX.XX\
XXXX.XXXXXXXRXXXX.RRR.XXXXXXXXRXX.XX.XX\
XXXX.XXXXXXXRXXXX.RRR.........-...XX.XX\
XXXX.XXXXXXRRRRRRRRRRRRRRRRRRRRXXXXX.XX\
X.....XXXXXR......RRR.XXX...XXRXXXXX.XX\
X.....XXXXXR..XXX.RXR.XXXX.XXXRXXX...XX\
X..X..........XXX.RRR.XXXX.XXXRXXX.XXXX\
X.....XXX.XXXXXXX.RRR.XXXX.XXXRXXX.XXXX\
X.....XXX.XXXXXXX.RXR.XXXX.XXXRRRR|RRRR\
XXXXXXXXX.XXXXXXX.RRR..............XXXX\
XXXXXXX......XXXX.RRR.XXXXXXXXXXXX.XXXX\
XXXXXXX......XXXX.RXR.XXXXXXXXXXXX...XX\
XXXXXXX......XXXX.RRR.XXXXXXXX...XXX.XX\
XXXXXXX......XXXX.RRR.XXXXXXXX.X.....XX\
XXXXXXX......XXXX.RXR.XXXXXXXX...XXX.XX\
XXXXXXXXXX.XXXXXX.RRR.XXXXXXXXX.XXXX.XX\
XXXXXXXXXX.XXXXXXXRRR.XXXXXXXXX......XX\
XXXXXXXXXX.XXXXXXXRXR.XXXXXRRRRRRR...XX\
XXXXXXXXXX.XXXXXXXRRR.XXXXXR.R.R.R...XX\
XXXXXXXXXX........RRR......RXRXRXR.XXXX\
XXXXXXXXXXXXXXXXX.RXRRRRRR|RRRRRRRRRRRR\
XXXXXXXXXXXXXXXXX.RRR.XXXX.RXRXRXR.XXXX\
XXXXXXXXXXXXXXXXX.RRR.XXXX.R.R.R.R...XX\
XXXXXXXXXXXXXXXXX.RXR.XXXX.RRRRRRR.X.XX\
XXXXXXXXXXXXXXXXX.RRR.XXXX.........X.XX\
XXXXXXXXXXXXXXXXX.RRR.XXXXXXXXXXXXXX.XX\
XXXXXXXXXXXXXXXXX.RRR..............X.XX\
XXXXXXXXXXXXXXXXX.RRRXXXXXX.X.X.X..X.XX\
XX....XXXXXXXXXXX.RRRRRRRRRRRRRRR..X.XX\
XX.RR.............RRRX.............X.XX\
XX.RRRRRRRR|RRRRRRRRRRRRRRRRRRRRR..X.XX\
XX.X.XX...........RRRXXXXXX.X.X.X..X.XX\
XX...XXXXXXXXXXXX.RRR..............X.XX\
XXXXXXXXXXXXXXXXXRRRRRXXXXXXXX.XXXXX.XX\
XXXXXXXXXXXXXXXXRRRRRRRXXXXXXX.......XX\
XXXXXXXXXXXXXXXRRRRRRRRRXXXXXXXXXXXXXXX\
XXXXXXXXXXXXRRRRRRRRRRRRRRRXXXXXXXXXXXX\
",
			width : 39,
			height : 91,
            music : "gurk7",
            dark : true,
            level : 10,
            groups : ["dungeon", "undead", "default"],
            encounterChance: 30,
            combatMap: "dungeonCombat",
            features : [
                {
                    type : "transition",
                    x : 4,
                    y : 85,
                    icon : "doorway.png",
                    text : "Will you exit this foul sewer and greedily gulp the fresh air above?",
                    target : "hilenika",
                    transitionType : "town",
                    targetX : 7,
                    targetY : 1
                },
                {
                    type : "encounter",
                    id : "sewer1",
                    x : 17,
                    y : 79,
                    icon : "vampire.png",
                    text : "Four Vampires lurking in the sewers suddenly attack!",
                    ambushed : true,
                    gold : 473,
                    creatures : [
                        {name : "Vampire"},
                        {name : "Vampire"},
                        {name : "Vampire"},
                        {name : "Vampire"}
                    ],
                    items : [
                        {name : "Amulet of Truth"}
                    ]
                },
                {
                    type : "encounter",
                    id : "sewerDaemon",
                    x : 23,
                    y : 83,
                    icon : "flameDaemon.png",
                    text : "You face a large creature made entirely of flames! It hisses, 'You are too late! Kroga has mastered the Trinexus and accessed the Forbidden World! There will soon be hundreds like us roaming this land!'",
                    gold : 0,
                    creatures : [
                        {name : "Flame Daemon"},
                        {name : "Stone Guardian"},
                        {name : "Stone Guardian"},
                        {name : "Jade Golem"},
                        {name : "Jade Golem"},
                        {name : "Shambling Mound"},
                        {name : "Shambling Mound"}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "sewerKey",
                    x : 22,
                    y : 83,
                    icon : "blackBox.png",
                    sets : "sewersDone",
                    altIcon : "blackKey.png",
                    text : "As you open the box, an apparatus is tripped and a bridge extends across the sewer. Inside the box is a black key and a red pendant.",
                    gold : 0,
                    creatures : [
                    ],
                    items : [
                        {name : "Pendant of Honor"}
                    ]
                },
                {
                    type : "override",
                    x : 21,
                    y : 83,
                    tile : ".",
                    after : "sewersDone"
                },
                {
                    type : "override",
                    x : 20,
                    y : 83,
                    tile : "-",
                    after : "sewersDone"
                },
                {
                    type : "override",
                    x : 19,
                    y : 83,
                    tile : "-",
                    after : "sewersDone"
                },
                {
                    type : "override",
                    x : 18,
                    y : 83,
                    tile : "-",
                    after : "sewersDone"
                }
            ]
        },
        "worgenKeep1" : {
            name : "Worgen Keep",
			map : "\
=================!===!=================\
=================!!=!!=================\
=================!===!=================\
================!!!=!!!================\
====XXXXXXXXXXXXXXXDXXXXXXXXXXXXXXX====\
====X......K....XXX.X....D........X====\
====X.XX.XXXXXXXXXX.XX...X..XXXDX.X====\
====X..X.D....X..X...XXXXX.XX...X.X====\
====X.XXXX....X..XX.XX...X.X....X.X====\
====X.X..X....D...X.X....X.X....X.X====\
====X.X..XXDXXXXXXX.XXXXDX.XXXXXX.X====\
====X.X..X..X.....D...............X====\
====X.X..XX.X.XXXXX.XXXXXXXXXXXXXXX====\
====X.X..D..X.X...X.D.............X====\
====X.XXXXXXX.X...XXXXX.X.X.X....XX====\
====X.X.......X...X...X.........XXX====\
====X.XDXXXXXXXXXDX...X.X.X.X..XXXX====\
====X...........X.....X.......XXXXX====\
====XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX====\
=======================================\
=======================================\
=======================================\
=======================================\
",
			width : 39,
			height : 23,
            music : "jurk6",
            dark : true,
            level : 2,
            groups : ["dungeon", "goblin", "kobold", "default"],
            encounterChance: 30,
            combatMap: "dungeonCombat",
            features : [
                {
                    type : "block",
                    x : 19,
                    y : 3
                },
                {
                    type : "encounter",
                    id : "keepGuard",
                    x : 19,
                    y : 7,
                    icon : "bugbear.png",
                    text : "Enormous orcs approach, with ear-splitting grins. \"Easy pickings!\" they cheer as they attack.",
                    ambushed : true,
                    gold : 22,
                    creatures : [
                        {"name" : "Orc Champion", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Orc Champion", "bonus" : 1, "hitPoints" : 4},
                        {"name" : "Orc Champion"},
                        {"name" : "Orc Champion"},
                        {"name" : "Orc Champion"}
                    ],
                    items : [
                        {"name" : "Heavy Crossbow"}
                    ]
                },
                {
                    type : "encounter",
                    id : "keepMages",
                    x : 23,
                    y : 6,
                    icon : "goblinWizard.png",
                    text : "\"How dare you disturb this chamber while important magicking is being undertaken!?\"",
                    gold : 15,
                    creatures : [
                        {"name" : "Goblin Shaman", "bonus" : 2, "hitPoints" : 10},
                        {"name" : "Goblin Shaman", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Hobgoblin", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Hobgoblin", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Hobgoblin"},
                        {"name" : "Hobgoblin"}
                    ],
                    items : [
                        {"name" : "Long Oak Staff", "bonus" : 1}
                    ]
                },
                {
                    type : "encounter",
                    id : "keepTraining",
                    x : 30,
                    y : 8,
                    icon : "dude.png",
                    text : "You have barged unwittingly into a training barracks!",
                    gold : 7,
                    creatures : [
                        {"name" : "Hobgoblin", "bonus" : 3, "hitPoints" : 15},
                        {"name" : "Goblin Warrior", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Goblin Warrior", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Goblin Warrior", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Kobold Fighter"},
                        {"name" : "Kobold Fighter"},
                        {"name" : "Kobold Fighter"},
                        {"name" : "Orc"},
                        {"name" : "Orc"},
                        {"name" : "Orc"},
                        {"name" : "Goblin Archer"},
                        {"name" : "Goblin Archer"},
                        {"name" : "Goblin Archer"}
                    ],
                    items : [
                        {"name" : "Studded Armor", "bonus" : 1},
                        {"name" : "Iron Shield", "bonus" : 1},
                        {"name" : "Healing Salve", "bonus" : 1}
                    ]
                },
                {
                    type : "encounter",
                    id : "keepSpiders",
                    x : 8,
                    y : 5,
                    icon : "redSpider.png",
                    text : "A group of very dangeous-looking spiders suddenly drop from the ceiling!",
                    gold : 3,
                    creatures : [
                        {"name" : "Spitting Spider", "bonus" : 2, "hitPoints" : 10},
                        {"name" : "Black Spider", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Black Spider", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Black Spider", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Spitting Spider"},
                        {"name" : "Spitting Spider"}
                    ],
                    items : [
                    ]
                },
                {
                    type : "transition",
                    x : 19,
                    y : 4,
                    icon : "doorInWall.png",
                    text : "Exit Worgen Keep?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 97,
                    targetY : 43
                },
                {
                    type : "transition",
                    x : 15,
                    y : 5,
                    icon : "doorway.png",
                    text : "There are stairs going up here, ascend?",
                    target : "worgenKeep2",
                    transitionType : "dungeon",
                    targetX : 15,
                    targetY : 5
                },
                {
                    type : "barrier",
                    x : 11,
                    y : 5,
                    icon : "lockedDoor.png",
                    title : "Heavy Door",
                    text : "The door is locked and holds firm to your attempts to force it!",
                    until : "keepStart"
                },
                {
                    type : "alert",
                    x : 11,
                    y : 5,
                    icon : "lockedDoor.png",
                    altIcon : "goldKey.png",
                    title : "Heavy Door",
                    text : "The gold key you acquired in Lycea unlocks the door!",
                    sets : "heavyDoorOpen",
                    until : "heavyDoorOpen",
                    after : "keepStart"
                }
            ]
        },
        "worgenKeep2" : {
            name : "Worgen Keep",
			map : "\
=======================================\
=======================================\
=======================================\
=======================================\
====XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX====\
====X..X.X...XX.XXX.X.X.X.........X====\
====X..X.X..XXXDXXX.X.X.X.X.X.X.X.X====\
====X..X.X..X.....X...X...........X====\
====XXDXDXDXX.....X.X.X.X.X.X.X.X.X====\
====X.......X.....X.X.X.X.........X====\
====X.......X.....X.X.X.X.X.....X.X====\
====X.......D.....X.X.X.X.........X====\
====XXXXXXXXX.....X.X.X.X.X.....X.X====\
====X.X.X.X.D.....X.X.X.X.........X====\
====X.......X.....X.X.X.X.X.X.X.X.X====\
====X.......X.....X.X...X.........X====\
====X.......X.....X.X.X.X.X.X.X.X.X====\
====X.X.X.X.X.......X.X.X.........X====\
====XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX====\
=======================================\
=======================================\
=======================================\
=======================================\
",
			width : 39,
			height : 23,
            music : "jurk6",
            dark : true,
            level : 3,
            groups : ["dungeon", "goblin", "kobold", "default"],
            encounterChance: 30,
            combatMap: "dungeonCombat",
            features : [
                {
                    type : "encounter",
                    id : "keepBugbears",
                    x : 15,
                    y : 7,
                    icon : "bugbear2.png",
                    text : "You face an impressive group of large, grizzled Bugbears!",
                    gold : 11,
                    creatures : [
                        {"name" : "Bugbear", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Bugbear", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Bugbear"},
                        {"name" : "Bugbear"}
                    ],
                    items : [
                        {"name" : "Great Sword"}
                    ]
                },
                {
                    type : "encounter",
                    id : "keepTrolls",
                    x : 24,
                    y : 7,
                    icon : "troll.png",
                    text : "A sentry of Trolls blocks your passage. You are subject to a barrage of hurled stones!",
                    gold : 16,
                    creatures : [
                        {"name" : "Troll", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Troll", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Troll"}
                    ],
                    items : [
                        {"name" : "Amulet of Protection"}
                    ]
                },
                {
                    type : "alert",
                    x : 29,
                    y : 10,
                    icon : "goblinScout.png",
                    sets : "keepScoutAlert",
                    until : "keepScoutAlert",
                    title : "Goblin Scout",
                    text : "Before scampering off, the puny Goblin Scout turns towards the stairs and hollers, \"They are coming, they are coming!\""
                },
                {
                    type : "transition",
                    x : 15,
                    y : 5,
                    icon : "doorway.png",
                    text : "There are stairs down here, descend?",
                    target : "worgenKeep1",
                    transitionType : "dungeon",
                    targetX : 15,
                    targetY : 5
                },
                {
                    type : "transition",
                    x : 29,
                    y : 11,
                    icon : "doorway.png",
                    text : "Stairs ascend to the top level of the keep, will you climb them?",
                    target : "worgenKeep3",
                    transitionType : "dungeon",
                    targetX : 11,
                    targetY : 1
                }
            ]
        },
        "worgenKeep3" : {
            name : "Worgen Keep",
			map : "\
XXXXXXXXXXXXXXXXXXXXXXX\
XXXXXXXXXX...XXXXXXXXXX\
XXXXXXXX.XX.XX.XXXXXXXX\
XXXXXX...........XXXXXX\
XXXXXX..XXX.XXX..XXXXXX\
XXXXXX..X.X.X.X..XXXXXX\
XXXXXX...........XXXXXX\
XXXXXX.XXX.X.XXX.XXXXXX\
XXXXXX.X.X.X.X.X.XXXXXX\
XXXXX.............XXXXX\
XXX....p.p.p.p.p....XXX\
X.....................X\
XX...XX..p.p.p..XX...XX\
X....XX.........XX....X\
XX.........p.........XX\
X.......X.....X.......X\
XXDX...XXXX.XXXX...XDXX\
X..XXXXXXXXXXXXXXXXX..X\
XX......D.....D......XX\
X.....XXXX.p.XXXX.....X\
XX....D..X...X..D....XX\
XXXXXXX..XX.XX..XXXXXXX\
XXXXXXXXXXXXXXXXXXXXXXX\
",
			width : 23,
			height : 23,
            music : "jurk6",
            dark : true,
            level : 3,
            groups : ["dungeon", "goblin", "kobold", "default"],
            encounterChance: 35,
            combatMap: "dungeonCombat",
            features : [
                {
                    type : "encounter",
                    id : "keepBigBear",
                    x : 11,
                    y : 3,
                    icon : "troll.png",
                    text : "A Troll of incredible size emerges and attacks!",
                    gold : 12,
                    creatures : [
                        {"name" : "Troll", "bonus" : 2, "hitPoints" : 35}
                    ],
                    items : [
                        {"name" : "Healing Potion"}
                    ]
                },
                {
                    type : "encounter",
                    id : "keepSpiderQueen",
                    x : 11,
                    y : 16,
                    icon : "hugeSpider.png",
                    text : "You have disturbed the nest of an enormous Spider Queen!",
                    gold : 17,
                    creatures : [
                        {"name" : "Spider Queen", "bonus" : 3, "hitPoints" : 25},
                        {"name" : "Spitting Spider", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Spitting Spider", "bonus" : 1, "hitPoints" : 5}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "keepStash",
                    x : 8,
                    y : 21,
                    icon : "chest.png",
                    text : "You find here a cache of supplies!",
                    gold : 0,
                    creatures : [
                    ],
                    items : [
                        {"name" : "Healing Potion", "bonus" : 1},
                        {"name" : "Energy Potion"},
                        {"name" : "Curing Potion"}
                    ]
                },
                {
                    type : "encounter",
                    id : "keepTrollLord",
                    x : 11,
                    y : 20,
                    icon : "trollKing.png",
                    text : "A huge Troll sits on a throne in front of a giant lever. He hollers, \"By Kroga's orders, the blockade shall remain in place!\"",
                    gold : 41,
                    creatures : [
                        {"name" : "Troll Lord"},
                        {"name" : "Troll", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Goblin Shaman", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Hobgoblin", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Hobgoblin", "bonus" : 1, "hitPoints" : 5}
                    ],
                    items : [
                        {"name" : "Potion of Speed"},
                        {"name" : "Goblinhyde Boots"}
                    ]
                },
                {
                    type : "goal",
                    x : 11,
                    y : 21,
                    until : "keepDone",
                    sets : "keepDone",
                    icon : "leverOn.png",
                    title : "Worgen Pass",
                    text : "It takes all of your might to pull the massive lever. Down below, you hear the creaking of metal and stone. Worgen Pass is reopened!"
                },
                {
                    type : "sign",
                    x : 11,
                    y : 21,
                    after : "keepDone",
                    icon : "leverOff.png"
                },
                {
                    type : "transition",
                    x : 11,
                    y : 1,
                    icon : "doorway.png",
                    text : "There are stairs leading down here, descend?",
                    target : "worgenKeep2",
                    transitionType : "dungeon",
                    targetX : 29,
                    targetY : 11
                }
            ]
        },
        "tower1" : {
            name : "Academy Tower",
			map : "\
XXXXXXXXXXXXXXXXXXXXXXXXX\
XXXXXXXXXXXXXXXXXXX.....X\
XXXXXXXXXX.X.X.XX.D.....X\
XXXXX.............X.....X\
XXXXX.X.XX.....XX.XXXXXXX\
XXXXX...XXXXDXXXX.X.....X\
XXXXXDXXXXXX.XXXX.D.....X\
X.........XX.XXXX.X.....X\
X.........XX.XXXX.XXXXXXX\
X.........XX.XXXX.X.....X\
X.........XX.XXXX.D.....X\
X.........XX.XXXX.X.....X\
X.........XX.XXXX.XXXXXXX\
X.........XX.XXXX.X.....X\
X.........XX.XXXX.D.....X\
X.......XXXX.XXXX.X.....X\
X.........XXDXXXX.XXXXXXX\
X.......XXX...XXX.X.....X\
X.........X...XXX.D.....X\
X.........X...XXXXX.....X\
XXXXXXXXXXXXDXXXXXXXXXXXX\
))))))))))((=)())))))))))\
)))))))))()==))))))))))))\
))))))())()=())()))))))))\
)))))))))))=)))))))))))))\
",
			width : 25,
			height : 25,
            music : "gurk7",
            dark : true,
            level : 3,
            groups : ["dungeon", "goblin", "kobold", "lizard", "default"],
            encounterChance: 30,
            combatMap: "dungeonCombat",
            features : [
                {
                    type : "block",
                    x : 12,
                    y : 21
                },
                {
                    type : "encounter",
                    id : "towerGuard",
                    x : 12,
                    y : 4,
                    icon : "lizardMan.png",
                    text : "The Tower is overrun with Lizard Men! They hiss, spit and attack!",
                    ambushed : true,
                    gold : 11,
                    creatures : [
                        {"name" : "Lizard Man", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Lizard Man", "bonus" : 1, "hitPoints" : 4},
                        {"name" : "Lizard Man"},
                        {"name" : "Lizard Man"},
                        {"name" : "Lizard Man"}
                    ],
                    items : [
                        {"name" : "Heavy Axe", "bonus" : 1}
                    ]
                },
                {
                    type : "transition",
                    x : 12,
                    y : 20,
                    icon : "doorInWall.png",
                    text : "Exit Academy Tower?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 109,
                    targetY : 4
                },
                {
                    type : "transition",
                    x : 9,
                    y : 16,
                    icon : "doorway.png",
                    text : "There are stairs going up here, ascend?",
                    target : "tower2",
                    transitionType : "dungeon",
                    targetX : 6,
                    targetY : 11
                }
            ]
        },
        "tower2" : {
            name : "Academy Tower",
			map : "\
XXXXXXXXXXXXXXXXXXX\
X....X..X..X..X...X\
X....X..X..X..X...X\
X....XXDXXDXXDXX..X\
X....D.........XDXX\
X....X..XXXXXX.X..X\
X....X.XXXX..D.D..X\
X....X.X..X..X.XXXX\
X....X.X..X..X.X..X\
X....X.D..X..X.D..X\
X....X.X..XXXX.XXXX\
XXXXXX.X..X..X.X..X\
XX...XXXXXX..X.D..X\
X.....X...X..D.XXXX\
X.....X...X..X.D..X\
X.....X...X..X.X..X\
XXXDXXXXXDXXXX.X..X\
X..............X..X\
XXXXXXXXXXXXXXXXXXX\
",
			width : 19,
			height : 19,
            music : "gurk7",
            dark : true,
            level : 4,
            groups : ["dungeon", "goblin", "kobold", "lizard", "default"],
            encounterChance: 30,
            combatMap: "dungeonCombat",
            features : [
                {
                    type : "encounter",
                    id : "towerKings",
                    x : 16,
                    y : 2,
                    icon : "goblinKing.png",
                    text : "You have barged in on a counsel meeting of Goblin Kings!",
                    ambushed : false,
                    gold : 35,
                    creatures : [
                        {"name" : "Goblin King", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Goblin King", "bonus" : 1, "hitPoints" : 4},
                        {"name" : "Goblin King"},
                        {"name" : "Goblin King"},
                        {"name" : "Goblin Archer"},
                        {"name" : "Goblin Shaman"}
                    ],
                    items : [
                        {"name" : "Goblin Staff", "bonus" : 3}
                    ]
                },
                {
                    type : "transition",
                    x : 6,
                    y : 11,
                    icon : "doorway.png",
                    text : "Return to the first level of the tower?",
                    target : "tower1",
                    transitionType : "dungeon",
                    targetX : 9,
                    targetY : 16
                },
                {
                    type : "transition",
                    x : 3,
                    y : 12,
                    icon : "doorway.png",
                    text : "Climb to the third level of the tower?",
                    target : "tower3",
                    transitionType : "dungeon",
                    targetX : 6,
                    targetY : 11
                }
            ]
        },
        "tower3" : {
            name : "Academy Tower",
			map : "\
XXXXXXXXXXXXX\
XXX.......XXX\
XXXXXX.XXXXXX\
X...........X\
XXDXXXXXXXDXX\
X...X...X...X\
X.....p.....X\
X...p...p...X\
XX....p....XX\
XX.X.....X.XX\
XXXXX...XXXXX\
XXXXXX.XXXXXX\
XXXXXXXXXXXXX\
",
			width : 13,
			height : 13,
            music : "gurk7",
            dark : true,
            level : 4,
            groups : ["dungeon", "goblin", "kobold", "lizard", "default"],
            encounterChance: 40,
            combatMap: "dungeonCombat",
            features : [
                {
                    type : "encounter",
                    id : "towerGiantLizard",
                    x : 6,
                    y : 10,
                    icon : "giantLizard.png",
                    text : "Four large, mean Lizard Men lunge at you!",
                    ambushed : false,
                    gold : 8,
                    creatures : [
                        {"name" : "Lizard Gladiator", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Lizard Gladiator", "bonus" : 1, "hitPoints" : 4},
                        {"name" : "Lizard Gladiator"},
                        {"name" : "Lizard Gladiator"}
                    ],
                    items : [
                        {"name" : "Wand of Blasting"}
                    ]
                },
                {
                    type : "encounter",
                    id : "towerLizardWizards",
                    x : 6,
                    y : 2,
                    icon : "lizardWizard.png",
                    text : "You face a powerful Lizard mage! \"Do not let them get to the top floor of the tower!\" it shrieks.",
                    ambushed : false,
                    gold : 17,
                    creatures : [
                        {"name" : "Lizard Wizard", "bonus" : 1, "hitPoints" : 15},
                        {"name" : "Lizard Gladiator", "bonus" : 1, "hitPoints" : 4},
                        {"name" : "Lizard Man"},
                        {"name" : "Lizard Man"}
                    ],
                    items : [
                        {"name" : "Elvish Armor"}
                    ]
                },
                {
                    type : "transition",
                    x : 6,
                    y : 11,
                    icon : "doorway.png",
                    text : "Descend to the second level of the tower?",
                    target : "tower2",
                    transitionType : "dungeon",
                    targetX : 3,
                    targetY : 12
                },
                {
                    type : "transition",
                    x : 3,
                    y : 1,
                    icon : "doorway.png",
                    text : "Climb to the fourth level of the tower?",
                    target : "tower4",
                    transitionType : "dungeon",
                    targetX : 1,
                    targetY : 2
                }
            ]
        },
        "tower4" : {
            name : "Academy Tower",
			map : "\
XXXXXXXXX\
X...F.F.X\
X.F.....X\
XFFFFFF.X\
X.===F..X\
X.FF=FF.X\
X.FFFF..X\
X.......X\
XXXXXXXXX\
",
			width : 9,
			height : 9,
            music : "gurk7",
            dark : true,
            level : 4,
            groups : ["dungeon", "goblin", "kobold", "lizard", "default"],
            encounterChance: 30,
            combatMap: "dungeonCombat",
            features : [
                {
                    type : "encounter",
                    id : "towerElite",
                    x : 3,
                    y : 4,
                    icon : "lizardKing.png",
                    text : "An imposing Lizard Man bellows, \"With the power we draw from this forest, we can dominate the entire Wildernesse!\"",
                    ambushed : true,
                    gold : 22,
                    creatures : [
                        {"name" : "Lizard Elite"},
                        {"name" : "Lizard Wizard"},
                        {"name" : "Lizard Gladiator"},
                        {"name" : "Lizard Man"}
                    ],
                    items : [
                        {"name" : "Bow of Illness"}
                    ]
                },
                {
                    type : "sign",
                    x : 4,
                    y : 5,
                    action : "SMASH",
                    sets : "towerDone",
                    until : "towerDone",
                    icon : "grayStatue.png",
                    text : "Feeling the mysterious statue pull at your life force, you smash it into pieces. It glows briefly a bright white, then fades. You are overcome with a sense of peace!"
                },
                {
                    type : "transition",
                    x : 1,
                    y : 2,
                    icon : "doorway.png",
                    text : "Descend to the third level of the tower?",
                    target : "tower3",
                    transitionType : "dungeon",
                    targetX : 3,
                    targetY : 1
                }
            ]
        },
        "lycea" : {
            name : "Lycea",
			map : "\
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\
!!!!XXXXXXXXXXXXXXXXXXXXXX!!!\
!!!!X!!!=.D...X==!!!!!!X=X!!!\
!!!!X=!!=.X...X=====!!!!!X!!!\
!!!!X=!!=.X...X!==!====XXX!!!\
!!!!X=!!..X...X!!=====XX.X!!!\
!!!!X=!=..XXXDX!!!====X..X!!!\
!!!!X===..X...X!!==!=!X..X!!!\
!!!!X!=...X...X!=====XX..X!!!\
!!!!X!=...XXXXX==!==!Xp..X!!!\
!!!!X=.........=====!X...X!!!\
=!!!XXX.......XX=!=!XXp..X!!!\
===!X.X........=====X....X!!!\
====D.........XX=!==D....X!!!\
===!X.X........=====X....X!!!\
=!!!XXX.......XX=!=!XXp..X!!!\
!!!!X..........=====!X...X!!!\
!!!!XDXXXXDXXXX==!==!Xp..X!!!\
!!!!X....X....X!=====XX..X!!!\
!!!!X....X....X!!==!=!X..X!!!\
!!!!X....X....X!!!====X..X!!!\
!!!!X....X....X!!=====XX.X!!!\
!!!!X....X....X!==!====XXX!!!\
!!!!X....X....X=====!!!!!X!!!\
!!!!X..XXX..XXX==!!!!!!X=X!!!\
!!!!XXXXXXXXXXXXXXXXXXXXXX!!!\
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\
",
			width : 29,
			height : 31,
            music : "jurk7",
            dark : true,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 4,
                    y : 15,
                    icon : "doorInWall.png",
                    text : "Exit Lycea?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 90,
                    targetY : 58
                },
                {
                    type : "shop",
                    name : "Trading Post",
                    x : 7,
                    y : 24,
                    icon : "shop.png",
                    level : 1,
                    groups : ["default"],
                    buyRate : 100,
                    sellRate : 40
                },
                {
                    type : "shop",
                    name : "Lycean Antiquities",
                    x : 12,
                    y : 24,
                    icon : "shop.png",
                    level : 2,
                    groups : ["default"],
                    buyRate : 120,
                    sellRate : 25
                },
                {
                    type : "barrier",
                    x : 19,
                    y : 15,
                    icon : "guard1.png",
                    title : "Guard",
                    until : "pitsDone",
                    text : "The Sacraneceum is off limits to all but the monks, elders and heroes of the Kingdom of Trintha!"
                },
                {
                    type : "sign",
                    x : 5,
                    y : 14,
                    icon : "soldier2.png",
                    action : "TALK",
                    title : "Guard",
                    text : "Welcome, adventurers, to the humble town of Lycea!"
                },
                {
                    type : "sign",
                    x : 5,
                    y : 16,
                    icon : "soldier2.png",
                    action : "TALK",
                    title : "Guard",
                    text : "It's a tough time to be a guard at this post, but we're holding it together!"
                },
                {
                    type : "temple",
                    x : 5,
                    y : 5,
                    icon : "temple.png",
                    cost : 10
                },
                {
                    type : "dispatch",
                    x : 24,
                    y : 15,
                    icon : "oldMan2.png",
                    altIcon : "goldKey.png",
                    action : "TALK",
                    sets : "keepStart",
                    until : "keepStart",
                    title : "Steward of Trintha",
                    text : "Brave adventurers, we are cut off from the Northern Forests by the barrier at Worgen Pass. Will you take this key to Worgen Keep, defeat the occupiers within and break the blockade?"
                },
                {
                    type : "sign",
                    x : 24,
                    y : 15,
                    icon : "oldMan2.png",
                    action : "TALK",
                    after : "keepStart",
                    until : "keepDone",
                    title : "Steward of Trintha",
                    text : "You will find Worgen Keep just North and East of Lycea. It was once the capital of Trintha, but has since fallen into the hands of evil."
                },
                {
                    type : "sign",
                    x : 24,
                    y : 15,
                    icon : "oldMan2.png",
                    action : "TALK",
                    after : "keepDone",
                    title : "Steward of Trintha",
                    text : "With the blockade broken, we can finally reopen communications with Shavanothia! The Empire may yet unite against the evil that oppresses it. Take the Red Exis Key now to The Great Tree and acquire the Green Exis Key from the Elves."
                },
                {
                    type : "encounter",
                    id : "redExisKeyReward",
                    x : 23,
                    y : 15,
                    icon : "chest.png",
                    altIcon : "redExisKey.png",
                    text : "In this chest you find some gold and the Red Exis Key of Trintha!",
                    sets : "redKeyGiven",
                    gold : 25,
                    after : "keepDone",
                    creatures : [
                    ],
                    items : [
                    ]
                },
                {
                    type : "sign",
                    x : 19,
                    y : 14,
                    icon : "oldMan4.png",
                    action : "TALK",
                    title : "Lycean Elder",
                    until : "pitsDone",
                    text : "Brave adventurers, prove yourselves in the South, then you will be granted an audience in the Sacrineceum."
                },
                {
                    type : "sign",
                    x : 19,
                    y : 14,
                    icon : "oldMan4.png",
                    action : "TALK",
                    title : "Lycean Elder",
                    after : "pitsDone",
                    text : "Past this door is a very sacred place, the 'Sacrineceum'. Be sure to confer with each of the monks so that you may learn the plight of the Empire."
                },
                {
                    type : "sign",
                    x : 24,
                    y : 7,
                    icon : "monk.png",
                    action : "TALK",
                    title : "Monk",
                    text : "The Helinikan Empire once included the Kingdom of Trintha (where we now reside), the Shavanoth Forest to the North, the Urlani Marshlands across the Sea, and the Keshak Fiefdoms in the Far North."
                },
                {
                    type : "sign",
                    x : 24,
                    y : 9,
                    icon : "monk.png",
                    action : "TALK",
                    title : "Monk",
                    text : "The Empress, Vella Trinth, was born in this very town. She ruled the entire Empire fairly and with grace. But her younger brother, Kroga, was a talented mage and envious of her power."
                },
                {
                    type : "sign",
                    x : 24,
                    y : 11,
                    icon : "monk.png",
                    action : "TALK",
                    title : "Monk",
                    text : "Kroga Trinth made dark alliances in the distant Westerlandes. He lured Vella West on a diplomatic pretense. We know not what transpired there, but she has never returned."
                },
                {
                    type : "sign",
                    x : 24,
                    y : 13,
                    icon : "monk.png",
                    action : "TALK",
                    title : "Monk",
                    text : "Rather than ruling in her stead, Kroga simply disappeared. Mighty Hilen Castle on the Grand Isle remains empty and listless. However, dark forces have begun to materialize all over the empire, and we believe Kroga is somehow involved."
                },
                {
                    type : "sign",
                    x : 24,
                    y : 17,
                    icon : "monk.png",
                    action : "TALK",
                    title : "Monk",
                    text : "The Four Kingdoms of the Empire are now split apart, and weakened by the gathering storm of evil. All the old alliances in Hilenika are forgotten, only distrust and strife remains."
                },
                {
                    type : "sign",
                    x : 24,
                    y : 19,
                    icon : "monk.png",
                    action : "TALK",
                    title : "Monk",
                    text : "The underground passage to the Westerlandes via the Keshak territory is magically sealed and only those who possess all four of the \"Exis Keys\" can break the seal."
                },
                {
                    type : "sign",
                    x : 24,
                    y : 21,
                    icon : "monk.png",
                    action : "TALK",
                    title : "Monk",
                    text : "We possess the Red Exis Key here in the Sacrineceum. The Green Key is in Shavanothia. The Yellow Key is in the possession of the Urlani, and we believe that the Blue Key is somewhere in the Keshak Lands."
                },
                {
                    type : "sign",
                    x : 24,
                    y : 23,
                    icon : "monk.png",
                    action : "TALK",
                    title : "Monk",
                    text : "If you can somehow gather the Exis Keys together, you can enter the Westerlandes, discover what befell the Empress and reunite the Empire! She may yet live, we pray here hourly for her safe keeping."
                },
                {
                    type : "block",
                    x : 3,
                    y : 15
                }
            ]
        },
        "bridgetown" : {
            name : "Bridgetown",
			map : "\
~~!!!=========!!!~~\
~~~l!=d=d=d=d=!r~~~\
~~~ldddddddddddr~~~\
~~~lXXXXdddXXXXr~~~\
~~~ldddXXDXXdddr~~~\
~~~ldddddddddddr~~~\
~~~lXXdddddddXXr~~~\
~~~ldXdXdXdXdXdr~~~\
~~~ldXdXdXdXdXdr~~~\
~~~ldXdddddddXdr~~~\
~~~ldXdddddddXdr~~~\
~~~ldXddXdXddXdr~~~\
~~~ldXXXXDXXXXdr~~~\
~~~ldXdddddddXdr~~~\
~~~ldXdddddddXdr~~~\
~~~ldXdddddddXdr~~~\
~~~ldXdddddddXdr~~~\
~~~ldddddddddddr~~~\
~~~ldXdddddddXdr~~~\
~~~ldXdddddddXdr~~~\
~~~ldXdddddddXdr~~~\
~~~ldXdddddddXdr~~~\
~~~ldXdddddddXdr~~~\
~~~ldXXdddddXXdr~~~\
~~~ldXXXXdXXXXdr~~~\
~~~ldXdXXdXXdXdr~~~\
~~~ldXdddddddXdr~~~\
~~~ldXdddddddXdr~~~\
~~~ldXXXXDXXXXdr~~~\
~~~ldXdddddddXdr~~~\
~~~ldXdddddddXdr~~~\
~~~ldXdXXDXXdXdr~~~\
~~~lXXXXdddXXXXr~~~\
~~~ldddddddddddr~~~\
~~~l!=d=d=d=d=!r~~~\
~~!!!=========!!!~~\
~!!=!!=!===!=!!=!!~\
",
			width : 19,
			height : 37,
            music : "jurk3",
            dark : false,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 9,
                    y : 4,
                    icon : "doorInWall.png",
                    text : "Exit Bridgetown and return to the Shavanoth Forest?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 107,
                    targetY : 24
                },
                {
                    type : "block",
                    x : 9,
                    y : 3
                },
                {
                    type : "sign",
                    x : 4,
                    y : 21,
                    icon : "man4.png",
                    action : "TALK",
                    title : "Man",
                    text : "Welcome to Bridgetown! I'm afraid the town is a bit quieter than it once was. With the Forest dying, there isn't much lumberjack work around here anymore."
                },
                {
                    type : "shop",
                    name : "Bula's Unctions",
                    x : 7,
                    y : 19,
                    icon : "shop.png",
                    level : 3,
                    groups : ["potion"],
                    buyRate : 105,
                    sellRate : 30
                },
                {
                    type : "transition",
                    x : 9,
                    y : 31,
                    icon : "doorInWall.png",
                    text : "Exit Bridgetown and return to the Shavanoth Forest?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 107,
                    targetY : 24
                },
                {
                    type : "block",
                    x : 9,
                    y : 32
                }
            ]
        },
        "greatTree" : {
            name : "The Great Tree",
			map : "\
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\
WWWWWWWWWWWWWWWWWWW,,,,,,,WWWWWWWWWWWWWWWWWWW\
WWWWWWWWWWWWWWW,,,,,,,,,,,,,,,WWWWWWWWWWWWWWW\
WWWWWWWWWWWW,W,,,WWWWWWWWWWW,,,W,WWWWWWWWWWWW\
WWWWWWWWWW,,,W,,,,,W,W,W,W,,,,,W,,,WWWWWWWWWW\
WWWWWWWWW,,,,W,,,,,W,,,,,W,,,,,W,,,,WWWWWWWWW\
WWWWWWWW,,,,,WW,,,,,,,,,,,,,,,WW,,,,,WWWWWWWW\
WWWWWWW,,,,,,,WW,,,,,,,,,,,,,WW,,,,,,,WWWWWWW\
WWWWWWW,,,,,,,,WWW,W,W,W,W,WWW,,,,,,,,WWWWWWW\
WWWWWW,,,,,,,,,,,W,W,W,W,W,W,,,,,,,,,,,WWWWWW\
WWWWWWWWWWWWWWWW,W,W,W,W,W,W,WWWWWWWWWWWWWWWW\
WWWWWW,,,,,,,,,W,W,W,,,,,W,W,W,,,,,,,,,WWWWWW\
WWWWW,,,,,,,,,,W,W,,,,,,,,,W,W,,,,,,,,,,WWWWW\
WWWWW,,,,,,,,,,W,W,,,,,,,,,W,W,,,,,,,,,,WWWWW\
WWWWW,,,,,,,,,,W,,,,,,,,,,,,,W,,,,,,,,,,WWWWW\
WWWWWW,,,,,,,,WWW,,,,~~~,,,,WWW,,,,,,,,WWWWWW\
WWWW,,,,,,,,,,,,,,,~~~~~~~,,,,,,,,,,,,,,,WWWW\
WWWWWWW,,,,,,,WWW,,~~~~~~~,,WWW,,,,,,,WWWWWWW\
WWWW,,,,,,,,,,,,,,~~~~~~~~~,,,,,,,,,,,,,,WWWW\
WWWWWWWWW,,,,,WWW,~~~~,~~~~,WWW,,,,,WWWWWWWWW\
WWWW,,,,,,,,,,W,,,~~~~~~~~~,,,W,,,,,,,,,,WWWW\
WWWWWWW,,,,,,,W,,,,~~~~~~~,,,,W,,,,,,,WWWWWWW\
WWWW,,,,,,,,,,W,,,,~~~~~~~,,,,W,,,,,,,,,,WWWW\
WWWWWW,,,,,,,,W,W,,,,~~~,,,,W,W,,,,,,,,WWWWWW\
WWWWW,,,,,,,,,W,W,,,,,,,,,,,W,W,,,,,,,,,WWWWW\
WWWWW,,,,,,,,,W,W,W,,,,,,,W,W,W,,,,,,,,,WWWWW\
WWWWW,,,,,,,,,W,W,W,W,,,W,W,W,W,,,,,,,,,WWWWW\
WWWWWW,,,,,,,WW,W,W,W,W,W,W,W,WW,,,,,,,WWWWWW\
WWWWWWWWWWWWWW,,W,W,W,W,W,W,W,,WWWWWWWWWWWWWW\
WWWWWW,,,,,,,,,,W,W,W,W,W,W,W,,,,,,,,,,WWWWWW\
WWWWWWW,W,W,,,W,W,W,W,W,W,W,W,W,,,W,W,WWWWWWW\
WWWWWWW,,,,,W,,,W,W,W,,,W,W,W,,,W,,,,,WWWWWWW\
WWWWWWWW,,W,,,W,W,W,,,,,,,W,W,W,,,W,,WWWWWWWW\
WWWWWWWWW,,,W,,,W,,,,,,,,,,,W,,,W,,,WWWWWWWWW\
WWWWWWWWWW,,,,W,W,,,,W,W,,,,W,W,,,,WWWWWWWWWW\
WWWWWWWWWWWW,,,,W,,,,W,W,,,,W,,,,WWWWWWWWWWWW\
WWWWWWWWWWWWWWW,,,,W,W,W,W,,,,WWWWWWWWWWWWWWW\
WWWWWWWWWWWWWWWWWWWW,W,W,WWWWWWWWWWWWWWWWWWWW\
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\
",
			width : 45,
			height : 45,
            music : "jurk7",
            dark : true,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 22,
                    y : 40,
                    icon : "treeDoor.png",
                    text : "Exit the Great Tree and return to Shavanothia?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 113,
                    targetY : 14
                },
                {
                    type : "sign",
                    x : 18,
                    y : 24,
                    icon : "gnome.png",
                    action : "TALK",
                    title : "Elf",
                    text : "Our beloved forest is slowing dying... we know not why. Fell creatures now roam it freely, and great swaths of stumps replace what was once great forest."
                },
                {
                    type : "shop",
                    name : "Fine Elvish Wares",
                    x : 38,
                    y : 16,
                    icon : "shop.png",
                    level : 3,
                    groups : ["elf"],
                    buyRate : 110,
                    sellRate : 34
                },
                {
                    type : "sign",
                    x : 34,
                    y : 17,
                    icon : "gnome3.png",
                    action : "TALK",
                    title : "Elf",
                    text : "Our beloved friends, the Treants, have lost their minds. They are now angry and attack all those with two legs. We fear the end of our forest!"
                },
                {
                    type : "sign",
                    x : 8,
                    y : 24,
                    icon : "gnome2.png",
                    action : "TALK",
                    title : "Elf",
                    text : "The Elves would reward anyone who could stop the death of the forest with anything we could offer!"
                },
                {
                    type : "dispatch",
                    x : 22,
                    y : 7,
                    icon : "gnomeKing.png",
                    action : "TALK",
                    sets : "towerStart",
                    until : ["towerStart", "towerDone"],
                    title : "Forest Chieftain",
                    text : "Friends from the South, our forest is threatened by an evil magic! We have traced the evil to the old Academy Tower to the North, but cannot penetrate its defenses. Will you investigate the Tower?"
                },
                {
                    type : "sign",
                    x : 22,
                    y : 7,
                    icon : "gnomeKing.png",
                    action : "TALK",
                    after : "towerStart",
                    until : "towerDone",
                    title : "Forest Chieftain",
                    text : "The Academy Tower was a training ground for mages during the grand years of the Empire, but has since fallen into ruin. You will find it in the hills North of the Great Tree."
                },
                {
                    type : "sign",
                    x : 22,
                    y : 7,
                    icon : "gnomeKing.png",
                    action : "TALK",
                    after : "towerDone",
                    sets : "greenKeyGiven",
                    title : "Forest Chieftain",
                    text : "The Forest may yet recover thanks to your heroic actions! It is with our gratitude that we present the Exis Key of Shavanothia. Now go speak with Ol-yun in Brinfort!"
                },
                {
                    type : "encounter",
                    id : "greenExisKeyReward",
                    x : 22,
                    y : 8,
                    icon : "chest.png",
                    altIcon : "greenExisKey.png",
                    text : "In this chest you find some gold and the Green Exis Key of Shavanothia!",
                    sets : "greenKeyGiven",
                    gold : 45,
                    after : "towerDone",
                    creatures : [
                    ],
                    items : [
                    ]
                },
                {
                    type : "barrier",
                    x : 22,
                    y : 37,
                    icon : "gnome2.png",
                    until : "redKeyGiven",
                    title : "Elven Guard",
                    "text" : "Halt! Trinthians are no longer allowed in the Great Tree."
                }
            ]
        },
        "brinfort" : {
            name : "Brinfort",
			map : "\
~~~~~~~~~~~~~~~~~~~~~~~~==!!===\
~~~~~~~~~~~~~~~~~~~~~~~!!!!!!==\
~~~~~~~~~~~~~~~~~~~~~~~~~~~!!==\
~~~~XXXXXXXXXXXXXXXXXXXXXX~!===\
~~~~X....D...............X~!===\
~~~~X....XXXXXXXXXXXXXX..X~!===\
~~~~X....X!!==!======!XX.X~!===\
~~~~X....X============!X.X~!===\
~~~~XXXXXX!==!=!=.=!=!=X.X~!===\
~~~~~~~X!!!======.=====X.X~!===\
~~~~XX~XXXXX!====.=====X.X~!===\
~~~~X~~~~X..!=!=!.!=!=!X.X~!===\
~~~~X~~--..............X.X~!===\
~~~~~~~~~....X...........X~!!!!\
~~~~~~~--....X...........---===\
~~~~~~~~~....X...........X~!!!!\
~~~~X~~--..............X.X~!===\
~~~~X~~~~X..!=!=!.!=!=!X.X~!===\
~~~~XX~XXXXX!====.=====X.X~!===\
~~~~~~~X!!!======.=====X.X~!===\
~~~~XXXXXX!==!=!=.=!=!=X.X~!===\
~~~~X....X============!X.X~!===\
~~~~X....X!!==!======!XX.X~!===\
~~~~X....XXXXXXXXXXXXXX..X~!===\
~~~~X....D...............X~!===\
~~~~XXXXXXXXXXXXXXXXXXXXXX~!!==\
~~~~~~~~~~~~~~~~~~~~~~~~~~~!!==\
~~~~~~~~~~~~~~~~~~~~~!!!!!!!!==\
~~~~~~~~~~~~~~~~~~=====!!======\
",
			width : 31,
			height : 29,
            music : "jurk3",
            dark : false,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 26,
                    y : 14,
                    icon : "bridgeHorizontal.png",
                    text : "Exit Brinfort and return to the Wildernesse?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 90,
                    targetY : 38
                },
                {
                    type : "block",
                    x : 27,
                    y : 14
                },
                {
                    type : "sign",
                    x : 15,
                    y : 14,
                    icon : "oldMan3.png",
                    altIcon : "sigil.png",
                    action : "TALK",
                    after : "greenKeyGiven",
                    sets : "sigilGiven",
                    until : "sigilGiven",
                    title : "Ol-Yun",
                    text : "Noble heroes! You will not be granted permission to enter my once-glorious home of Urlopolis without displaying a family seal. Please take mine, and good luck on your quest!"
                },
                {
                    type : "sign",
                    x : 15,
                    y : 14,
                    icon : "oldMan3.png",
                    altIcon : "sigil.png",
                    action : "TALK",
                    after : "sigilGiven",
                    until : "riverStart",
                    title : "Ol-Yun",
                    text : "Honorable adventurers, I see that you still have my family seal. I beseech you to please make haste to Urlopolis across the Sea so that you might gather the yellow Exis key!"
                },
                {
                    type : "sign",
                    x : 5,
                    y : 14,
                    icon : "ship.png"
                },
                {
                    type : "sign",
                    x : 23,
                    y : 13,
                    icon : "soldier4.png",
                    action : "TALK",
                    title : "Guard",
                    text : "Greetings heroes, make yourselves at home here at Brinfort!"
                },
                {
                    type : "sign",
                    x : 23,
                    y : 15,
                    icon : "soldier4.png",
                    action : "TALK",
                    title : "Guard",
                    text : "May your stay here at Brinfort be a pleasant one!"
                },
                {
                    type : "sign",
                    x : 6,
                    y : 5,
                    icon : "soldier3.png",
                    action : "TALK",
                    title : "Guard",
                    text : "We used to receive ships here from the dwarves of the Keshak Fifedoms up North. But it has been years since we've heard anything but rumors from there. As much as we're suffering here, the stories from Keshak sound far worse..."
                },
                {
                    type : "sign",
                    x : 6,
                    y : 22,
                    icon : "soldier3.png",
                    action : "TALK",
                    title : "Guard",
                    text : "The City of Urlopolis across the Sea was once the greatest in the Empire! But it has fallen on hard times, and little trade flows through there anymore."
                },
                {
                    type : "shop",
                    name : "Brinfort Arms",
                    x : 17,
                    y : 7,
                    icon : "shop.png",
                    level : 3,
                    groups : ["weapon"],
                    buyRate : 115,
                    sellRate : 25
                },
                {
                    type : "shop",
                    name : "Brinfort Armors",
                    x : 17,
                    y : 21,
                    icon : "shop.png",
                    level : 3,
                    groups : ["armor"],
                    buyRate : 115,
                    sellRate : 25
                }
            ]
        },
        "cove" : {
            name : "Sailor's Cove",
			map : "\
~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~/~~~~~~~~~~~~~~~~~\
~~~~~MM~~~/~~~~~~~~~~~~~~~\
~~~~~~!!~~~~~~~~~~~~=~~~~~\
~~~~~~~!!!!=!!!!!!=~=~~~~~\
~~~~~/~=======!!!!!==~~~~~\
~~~~~~~!=!!======!!=~~~~~~\
~~~/~~~~!===========~~~~~~\
~~~~~~~~!==========!!~~~~~\
~~~~~~!~=====~|~====!!~~~~\
~~~~~!======~~~~====!~~~~~\
~~~~======~~~~~~~===~~~~~~\
~~~~=~~==~~~~=======~~~~~~\
~~~~~~~~~~~~~~~===~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~\
",
			width : 26,
			height : 20,
            music : "jurk10",
            dark : false,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 14,
                    y : 10,
                    icon : "bridgeHorizontal.png",
                    text : "Board your ship and resume sailing the Great Sea?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 55,
                    targetY : 69
                },
                {
                    type : "sign",
                    x : 14,
                    y : 11,
                    icon : "ship.png"
                },
                {
                    type : "sign",
                    x : 15,
                    y : 14,
                    icon : "pirate2.png",
                    action : "TALK",
                    title : "Pirate",
                    text : "'Tis a wondrous sea underground, not a day's sail South 'n West. Fabulous treasures await he who explores it, but for each gold coin, a dozen vicious creatures lurk. Why, t'was there where I done lost me leg."
                },
                {
                    type : "shop",
                    name : "Four Kingdoms Market",
                    x : 12,
                    y : 7,
                    icon : "shop.png",
                    level : 4,
                    groups : ["default", "water"],
                    buyRate : 120,
                    sellRate : 20
                }
            ]
        },
        "hilenika" : {
            name : "Castle Hilenika",
			map : "\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
X.....X.X.X.X.X.XXXXX...........XXXXX.X.X.X.X.X.....X\
X.....X.X.X.X.X.X..XX..p.....p..XX..X.X.X.X.X.X.....X\
X.....X.X.X.X.X.X..XXX.........XXX..X.X.X.X.X.X.....X\
X.....XDXDXDXDXDX...XX.........XX...XDXDXDXDXDX.....X\
X.....D.........D...XXX.......XXX...D.........D.....X\
XDXXXXXXXXXXXXXXX....XXXXL.LXXXX....XXXXXXXXXXXXXXXDX\
X.X=============X.....XXXXDXXXX.....X=============X.X\
X.X=!!!!!!!!!!!=Xpp....XX...XX....ppX=!!!!!!!!!!!=X.X\
X.X=!~~~~~~~~~!=Xpp....D.....D....ppX=!~~~~~~~~~!=X.X\
X.X=!~~~~~~~~~!=XXXXXDXXX...XXXDXXXXX=!~~~~~~~~~!=X.X\
X.X=!~~~~~~~~~!=.D.....X.p.p.X.....D.=!~~~~~~~~~!=X.X\
X.X=!~~~~~~~~~!=.XXXXXXXX...XXXXXXXX.=!~~~~~~~~~!=X.X\
X.X=!~~~~~~~~~!=.XX....D.....D....XX.=!~~~~~~~~~!=X.X\
X.X=!~~~~~~~~~!=.=X....XX...XX....X=.=!~~~~~~~~~!=X.X\
X.X=!~~~~~~~~~!=.=XX...X.....X...XX=.=!~~~~~~~~~!=X.X\
X.X=!!!!!!!!!!!=.==XX..X.....X..XX==.=!!!!!!!!!!!=X.X\
X.X=============.===XXXXXXDXXXXXX===.=============X.X\
XDXXXX==========.===!!!!!!.!!!!!!===.==========XXXXDX\
X....XX!======!!.=========.=========.!!======!XX....X\
X.....X!!=====!...=!=!=!=!.!=!=!=!=...!=====!!X.....X\
X.....X!!!====!.......................!====!!!X.....X\
X.....X!!!!===!...!!=!=!=!.!=!=!=!!...!===!!!!X.....X\
X.....X!!!!!!!!!!!!======X.X======!!!!!!!!!!!!X.....X\
XXXXXXXXXXXXXXXXXXXXXXXXXXDXXXXXXXXXXXXXXXXXXXXXXXXXX\
=======================!!!.!!!=======================\
==========================.==========================\
=========================!.!=========================\
==========================.==========================\
",
			width : 53,
			height : 29,
            music : "jurk6",
            dark : true,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 26,
                    y : 24,
                    icon : "doorInWall.png",
                    text : "Exit the castle and return to the Grand Isle?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    after : "sewersStart",
                    targetX : 73,
                    targetY : 55
                },
                {
                    type : "shop",
                    name : "Hilenikan Market",
                    x : 16,
                    y : 21,
                    icon : "shop.png",
                    level : 8,
                    groups : ["default"],
                    buyRate : 118,
                    sellRate : 25
                },
                {
                    type : "temple",
                    x : 36,
                    y : 21,
                    icon : "temple.png",
                    cost : 50
                },
                {
                    type : "barrier",
                    x : 26,
                    y : 24,
                    icon : "doorInWall.png",
                    text : "The castle gate is sealed and you cannot force it open!",
                    until : "sewersStart",
                    title : "Sealed"
                },
                {
                    type : "block",
                    x : 26,
                    y : 25
                },
                {
                    type : "dispatch",
                    x : 26,
                    y : 1,
                    icon : "vella.png",
                    sets : "sewersStart",
                    until : "sewersStart",
                    action : "TALK",
                    text : "Heroes of the Hilenikan Empire, welcome back! Kroga has yet to be found, but his minions are occupying the sewers below the Castle. Will you search out Kroga and his minions in the sewers?",
                    title : "Vella Trinth"
                },
                {
                    type : "sign",
                    x : 26,
                    y : 1,
                    icon : "vella.png",
                    after : "sewersStart",
                    until : "sewersDone",
                    action : "TALK",
                    text : "Make haste to seek out Kroga in the sewers! You will find the entrance in a chamber just West of this hall.",
                    title : "Vella Trinth"
                },
                {
                    type : "dispatch",
                    x : 26,
                    y : 1,
                    icon : "vella.png",
                    after : "sewersDone",
                    until : "krogaStart",
                    sets : "krogaStart",
                    action : "TALK",
                    text : "So Kroga resides in the Forbidden World? He must plan to merge it with our world. Will you enter the Forbidden World via the Trinexus and defeat him there?",
                    title : "Vella Trinth"
                },
                {
                    type : "sign",
                    x : 26,
                    y : 1,
                    icon : "vella.png",
                    after : "krogaStart",
                    until : "gameOver",
                    action : "TALK",
                    text : "Defeat my brother Kroga in the Forbidden World to save the Empire!",
                    title : "Vella Trinth"
                },
                {
                    type : "sign",
                    x : 26,
                    y : 1,
                    icon : "vella.png",
                    after : "gameOver",
                    action : "TALK",
                    text : "The Empire is saved thanks to your bravery! I shall now begin the long but rewarding task of healing the Hilenikan Empire.",
                    title : "Vella Trinth"
                },
                {
                    type : "transition",
                    x : 26,
                    y : 4,
                    icon : "portal.png",
                    text : "Step back into the Trinexus device?",
                    target : "trinexus",
                    transitionType : "up",
                    targetX : 6,
                    targetY : 7
                },
                {
                    type : "transition",
                    x : 7,
                    y : 1,
                    icon : "doorway.png",
                    text : "Foul, stinking air wafts upwards as you peer into the entrance of the subterranean sewers beneath the castle. Descend?",
                    target : "sewer",
                    transitionType : "dungeon",
                    targetX : 4,
                    targetY : 85
                }
            ]
        },
        "urlopolis" : {
            name : "Urlopolis",
			map : "\
###RRR#####################mm~~~~~~~~~~\
##RRRR#####################mmm~~~~~~~~~\
#RRRRRRRR###################mm~~~~~~~~~\
##RXXXXXXXXXXXXXXXXXXXXXXXXXX#mm~~~~~~~\
###XRRRRRm####.............X###m~~~~~~~\
###XmmR#RRm#####...........XXX#m~~~~~~~\
###X#mR##RRRRR###............XXX~~~~~~~\
###X##m######RRRRRRR...........X~~~~~~~\
###X#RR##mm######RRRR.........XX~~~~~~~\
###X#####RR##..##RRRRR........X~~~~~~~~\
###X##m###Rm##....RRRRR...RRRRR~~~~~~~~\
###X#mR#####R#....RRRRRR|RR...X~~~~~~~~\
###Xm#########..XXXXRRR.......XXX~~~~~~\
###X##m##mR##R#.X................--~~~~\
###X##mR##Rm##m.X...............X~~~~~~\
###X#R#######...X................--~~~~\
###X#m#######...X...............X~~~~~~\
###X###.###......................--~~~~\
###X##..........................X~~~~~~\
###X#............................--~~~~\
###X............................X~~~~~~\
###X....XRX...XRX...............X~~~~~~\
###X....XRX...XRX...............X~~~~~~\
###X....XRX...XRX...............X~~~~~~\
###XX.XXXRX...XRX...XRX.........X~~~~~~\
###XR|RXXRXX.XXRXX.XXRXXXXXX.....--~~~~\
###XRRRRRRRR|RRRRR|RRRRRRRRX....X~~~~~~\
###XRRRXXRXX.XXRXX.XXXXXXXRX.....--~~~~\
###XXXXXXRX...XRX........XRX....X~~~~~~\
###X....XRX...XRX........XRX.....--~~~~\
###X....XRX...XRX........XRX..XXX~~~~~~\
###X....XRX...XRX......##XRX.XXRR~~~~~~\
###X.................#####RR|RRRX~.X~~~\
##XX..............#mmRRRRRR..XXXXX.X~~~\
mmmXXXXXX.........#RRR####.........X~~~\
....D...D.......##mR##.........XXXXX~~~\
mmmXXXXXX.....#mR|RR.............XXX~~~\
##XX....D...mmRRR##........X.X.....~~~~\
###X....X...mRRm##.......XXXDXXX...~~~~\
###X....X.m.RRmmmm.......X.....X..~~~~~\
###X....XmRRRm#mm........X.....X..~~~~~\
###X....XRRRR##.........#XXXXXXXXXX~~~~\
##mX....RRR##mmmmXX|XX##mRRR###RR#X~~~~\
#mmXR|RRRRRRRRRmmmR|RmmmRRRRRmmRRRX~~~~\
mmRRRRRRRRmRRRRRRRRRRRRRRRRRRRRRR~R~~~~\
mRRRRRRmRRRRRRRmRRRRRRRRRRRRRRRRRR~~R~~\
RRRRRRRRRmRRRRRRRRRRRmRRRRRRRRRR~R~~~~~\
RRRRRRmRRRRRRRRRRRRRRRRRRRRRRRRRR~R~R~~\
RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR~~~~~~~~\
",
			width : 39,
			height : 49,
            music : "jurk8",
            dark : false,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 4,
                    y : 35,
                    icon : "doorInWall.png",
                    text : "Depart from Urlopolis and adventure out into the Urlani Marshlands?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 35,
                    targetY : 51
                },
                {
                    type : "block",
                    x : 3,
                    y : 35
                },
                {
                    type : "barrier",
                    x : 6,
                    y : 35,
                    icon : "guard2.png",
                    title : "Guard",
                    text : "With humble apologies, we must refuse entry. The Padishah has closed the city to all but those who present an Urlani family seal.",
                    until : "sigilGiven"
                },
                {
                    type : "sign",
                    x : 28,
                    y : 37,
                    icon : "guard2.png",
                    altIcon : "sigil.png",
                    title : "Guard",
                    text : "Noble heroes of the East, I see that you present the Ol-Yun sigil in good faith. You are granted an audience with the Padishah.",
                    action : "TALK",
                    after : "sigilGiven"
                },
                {
                    type : "dispatch",
                    x : 28,
                    y : 40,
                    icon : "emperor.png",
                    action : "TALK",
                    sets : "swampStart",
                    until : "swampStart",
                    title : "Padishah",
                    text : "Our most sacred Pi-Yun Temple is in the grip of unspeakable evil. Undead now roam its hallowed chambers. I will grant the Yellow Exis Key to those who restore the Temple, will you accept the quest?"
                },
                {
                    type : "sign",
                    x : 28,
                    y : 40,
                    icon : "emperor.png",
                    action : "TALK",
                    after : "swampStart",
                    until : "swampDone",
                    title : "Padishah",
                    text : "Speak to the townspeople about the Temple and how it may be accessed."
                },
                {
                    type : "sign",
                    x : 28,
                    y : 40,
                    icon : "emperor.png",
                    altIcon : "yellowExisKey.png",
                    action : "TALK",
                    after : "swampDone",
                    sets : "yellowKeyGiven",
                    title : "Padishah",
                    text : "You have restored the dignity of the Urlani peoples! It is with gratitude that I award you the Yellow Exis Key. Now travel with urgency to the Keshak Fiefdoms to see what damage has been caused there!"
                },
                {
                    type : "sign",
                    x : 13,
                    y : 9,
                    icon : "oolanMaster.png",
                    until : "scrollGiven",
                    text : "None can enter the Pi-Yun temple South of the river but the original Clerics. Most have been eradicated by the undead, but one is believed to be held prisoner in the Curzon River Caves to the Southwest. His rescue may be your only way in to Pi-Yun!",
                    title : "Urlani Elder",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 13,
                    y : 9,
                    icon : "oolanMaster.png",
                    after : "scrollGiven",
                    text : "Many thanks, noble adventurers, for helping the Urlani during our darkest hour!",
                    title : "Urlani Elder",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 31,
                    y : 16,
                    icon : "tarrMan2.png",
                    title : "Urlani Citizen",
                    text : "The Urlani Marshlands have long been a haven for the undead. But in recent years, they have absolutely overwhelmed us. We have been reduced to cowering in this city.",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 11,
                    y : 22,
                    icon : "tarrMan2.png",
                    title : "Urlani Citizen",
                    text : "The town is literally surrounded by undead! I'm so frightened...",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 9,
                    y : 34,
                    icon : "tarrSoldier.png",
                    title : "Guard",
                    text : "Adventurers from across the Sea, welcome to the City of Urlopolis!",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 9,
                    y : 36,
                    icon : "tarrSoldier.png",
                    title : "Guard",
                    text : "The Urlani welcome you.",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 30,
                    y : 7,
                    icon : "tarrMan3.png",
                    title : "Urlani Citizen",
                    text : "If you decide to explore the caves at the head of the Curzon River, beware the denizens that dwell there. The fungal broods will aggressively defend their territory.",
                    action : "TALK"
                },
                {
                    type : "shop",
                    name : "Cur-Lani Armors",
                    x : 18,
                    y : 14,
                    icon : "shop.png",
                    level : 4,
                    groups : ["armor"],
                    buyRate : 120,
                    sellRate : 30
                },
                {
                    type : "shop",
                    name : "Cur-Lani Arms",
                    x : 20,
                    y : 14,
                    icon : "shop.png",
                    level : 4,
                    groups : ["weapon"],
                    buyRate : 120,
                    sellRate : 30
                },
                {
                    type : "shop",
                    name : "Ur-Izan Artifacts",
                    x : 6,
                    y : 30,
                    icon : "shop.png",
                    level : 4,
                    groups : ["misc"],
                    buyRate : 120,
                    sellRate : 20
                },
                {
                    type : "shop",
                    name : "Wi-zun's Apothecary",
                    x : 14,
                    y : 41,
                    icon : "shop.png",
                    level : 4,
                    groups : ["potion"],
                    buyRate : 120,
                    sellRate : 22
                },
                {
                    type : "temple",
                    x : 7,
                    y : 5,
                    icon : "temple.png",
                    cost : 45
                },
                {
                    type : "sign",
                    x : 36,
                    y : 26,
                    icon : "ship.png"
                },
                {
                    type : "sign",
                    x : 24,
                    y : 1,
                    icon : "skeleton.png"
                },
                {
                    type : "sign",
                    x : 2,
                    y : 17,
                    icon : "skeletonGuard.png"
                },
                {
                    type : "sign",
                    x : 1,
                    y : 41,
                    icon : "skeleton.png"
                },
                {
                    type : "sign",
                    x : 18,
                    y : 45,
                    icon : "ship.png"
                }
            ]
        },
        "haerhagen" : {
            name : "Haerhagen",
			map : "\
~~~~~Siiiiiiiiiiiii\
~~~~~Siiiiiiiiiiiii\
~~~~~iiiiiiiiiiiiii\
~~~~~Siiiiiiiiiiiii\
~~~~~XXSXiXiXXXXiii\
~~~~iSXXXDXXXiiXiii\
~~~~iiiiiiiSXiiXiii\
~~~~iiiiiiiiXDXXiii\
~~~~iiiiiiiiiiXiiii\
~~~~~iiiiiiSSSXiiii\
~~~~~iiiiiiiiSXiiii\
~~~~~iiiiiSiSXXiiii\
~~~~~iiiiiiSSXiiiii\
~~~~~iiiiSiSSXiiiii\
~~~~iiiiiiiSSXiiiii\
~~~~iiiiiiiSSXiiiii\
~~~~iiiiiiSSSXiiiii\
~~~~iiiiiSXXXXiiiii\
~~~~iiiiSSXiiiiiiii\
~~~~~iiiSSXiiiiiiii\
~~~~~iiiSXXiiiiiiii\
~~~~~~iiSXiiiiiiiii\
~~~~~~~~~Xiiiiiiiii\
~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~\
",
			width : 19,
			height : 27,
            music : "jurk3",
            dark : false,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 9,
                    y : 5,
                    icon : "doorInWall.png",
                    text : "Exit the Village of Haerhagen?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 55,
                    targetY : 19
                },
                {
                    type : "block",
                    x : 9,
                    y : 4
                },
                {
                    type : "sign",
                    x : 14,
                    y : 5,
                    icon : "dwarf4.png",
                    text : "When the trouble began, we assumed meddling from the South, so we sealed the Glacierway. That was a grave error...",
                    title : "Dwarf Warrior",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 4,
                    y : 8,
                    icon : "dwarf3.png",
                    text : "Only the Gurnstaad and Vloyansk Fiefdoms remain, and they are shadows of their former glory. I would venture East to Gurnstaad, they have always been friendlier with Southerners.",
                    title : "Dwarf",
                    action : "TALK"
                },
                {
                    type : "temple",
                    x : 5,
                    y : 16,
                    icon : "temple.png",
                    cost : 45
                },
                {
                    type : "shop",
                    name : "Keshak Bazaar",
                    x : 11,
                    y : 11,
                    icon : "shop.png",
                    level : 5,
                    groups : ["misc"],
                    buyRate : 128,
                    sellRate : 33
                }
            ]
        },
        "caveTown" : {
            name : "Islann Cavern",
			map : "\
iiiiiiiiiiiiiii\
SiSiSiiiiSiiSS%\
SSSSSSiiiiSSS%%\
SSS%%SSiSS%%%%%\
%%%%%%%i%%%%%%%\
%%%%%%%i%%%%%%%\
%%%iiiii%%%%%%%\
%%%i%%%i%%%%%%%\
%%ii%%%ii%%%%%%\
%%i%%%%%i%%%%%%\
%ii%%%%%iiii%%%\
%iiii%iii%ii%%%\
%~~ii%%%i%%%%%%\
%%~~i%%%ii%%%%%\
%%~~%%%%%ii%%%%\
%%~%%%iiiii%%%%\
%%~%%iii%%ii%%%\
~~~%%%%%%%i%%%%\
%%%%%%iiiiiiii%\
%%%%%iiiii%iii%\
%%%%%ii%i%%iii%\
%%%%%%iii%%%%%%\
%%%%%%%%%%%%%%%\
",
			width : 15,
			height : 23,
            music : "jurk5",
            dark : true,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 7,
                    y : 4,
                    icon : "ice.png",
                    text : "Exit Islann Cavern and return to the Keshak Tundralands?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 32,
                    targetY : 27
                },
                {
                    type : "block",
                    x : 7,
                    y : 3
                },
                {
                    type : "block",
                    icon : "campfire.png",
                    x : 12,
                    y : 19
                },
                {
                    type : "sign",
                    x : 12,
                    y : 18,
                    icon : "dwarf2.png",
                    text : "We be the last o' the survivors of the fallen Keshak clans. T'think that we'd be reduced to hiding out in caverns, t'is an enormous shame to our proud family names... Yet, I must ask ye to tell no other soul that we be residin' here.",
                    title : "Dwarf",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 11,
                    y : 20,
                    icon : "dwarf2.png",
                    text : "An enormous White Dragon wiped out me entire clan. Yet it remains unavenged, terrorizin' those of us fool-headed to remain around these parts. The days of glory have slipp'd into the past, m'thinks.",
                    title : "Dwarf",
                    action : "TALK"
                },
                {
                    type : "temple",
                    x : 3,
                    y : 12,
                    icon : "temple.png",
                    cost : 5
                },
                {
                    type : "shop",
                    name : "Islann Refectory",
                    x : 5,
                    y : 19,
                    icon : "shop.png",
                    level : 6,
                    groups : ["potion"],
                    buyRate : 115,
                    sellRate : 36
                }
            ]
        },
        "gurnstaad" : {
            name : "Gurnstaad Citadel",
			map : "\
iiiiiiiiiiiiiiiiiiiiiSiSiiiiiiiiiiiiiiiiiiiii\
iiiiiiiiiiiiSiiiiiiiSSiSSiiiiiiiiiiSiiSSiiiii\
iiiiiiiiiiiiiSiiiiiiSSiSSiiiiiiiiiiiiiSSiSiii\
iiiiiiiiiiiiiiiiiiSSSSiSSSSiiiiiSiiiiiiSSiiSi\
iii~~~~~~~~~~~~~~~~~~~|~~~~~~~~~~~~~~~~~~~iii\
iii~~iiiiiiSiSiSiSiSiS.SiSiSiSiSiSiiiiii~~iii\
iii~iiSSi...........................iSSii~iii\
iii~iXXXi.SSSSSSSSSSSi.iSSSSSSSSSSS.iXXXi~iii\
iii~iX.Xi.SXXXXXXXXXXi.iXXXXXXXXXXS.iX.Xi~iii\
iii~iX.Di.SX...X....XXDXX........XS.iD.Xi~iSi\
iSi~iXXXi.SX...X.....X.X...p.p.p.XS.iXXXi~iii\
iSi~iiiii.SX...X.....X...........XS.iiiii~iii\
iii~iiSSi.SX...XXXDXXX.X.p.p.p.p.XS.iSSii~iiS\
Sii~iSSSi.SX...D.....D...........XS.iSSSi~iii\
Sii~iSSSi.SXXXXX.....X.X...p.p.p.XS.iSSSi~iii\
iiS~iiSSi.SX..D.....XXDXX........XS.iSSii~iii\
iii~iiiii.SX..XXXXXXX...XXXXXXXXXXS.iiiii~iii\
iSS~iXXXi.SX..X..XX.......XX.....XS.iXXXi~iii\
iSi~iX.Di.SX..X..D.........D.....XS.iD.Xi~Sii\
iSi~iX.Xi.SXXXXXXXXXXXXXXXXXXXXXXXS.iX.Xi~iii\
iiS~iXXXi.SSSSSSSSSSSSSSSSSSSSSSSSS.iXXXi~iii\
iii~iiSSi...........................iSSii~iiS\
iSS~~iiiiiiXX~|~XXiiiiiiiiiiiiiiiiiiiiii~~iii\
SSS~~~~~~~~~X~~~X~~~~~~~~~~~~~~~~~~~~~~~~~iii\
S~~~~~~~~~~~X~~~X~~~~~~~~~~~~~~~~~~~~SSiSSiii\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Siiiiiiiiiii\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SiiiS~iii\
",
			width : 45,
			height : 27,
            music : "jurk6",
            dark : true,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 22,
                    y : 4,
                    icon : "bridgeVertical.png",
                    text : "Will you exit the Gurnstaad Citadel?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 79,
                    targetY : 12
                },
                {
                    type : "block",
                    x : 22,
                    y : 3
                },
                {
                    type : "sign",
                    x : 21,
                    y : 8,
                    icon : "dwarf4.png",
                    text : "Greetings, Southerners. We knew not when ye would come, but we knew to expect ye.",
                    title : "Dwarven Guard",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 23,
                    y : 8,
                    icon : "dwarf4.png",
                    text : "Access is granted to the Citadel, please be proceedin' to the audience room o' the Baron.",
                    title : "Dwarven Guard",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 6,
                    y : 8,
                    icon : "dwarf2.png",
                    text : "Aye, the Fiefdoms have all but fallen. The oldest're left guarding the Citadel, as the young'uns have nearly all been slain in battle.",
                    title : "Dwarf",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 38,
                    y : 19,
                    icon : "dwarf2.png",
                    text : "While we've new and more horrific enemies these days, I'll never forget me grudge 'gainst the House o' Vloyansk. If ye must deal with 'em, make not the mistake of trusting 'em.",
                    title : "Dwarf",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 22,
                    y : 18,
                    icon : "dwarfKing.png",
                    text : "The Blue Exis Key, aye I know it. But I don't have it, the Baron at Vloyansk does. But he'll ne'er grant an audience to a Southerner, 'less you bring him something he badly wants. What ye need is the Ice Chalice, talk to my treasurer 'bout it.",
                    title : "Gurnstaad Baron",
                    sets : "talkedBaron",
                    until : "iceMazeStart",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 22,
                    y : 18,
                    icon : "dwarfKing.png",
                    text : "Quit botherin' me here! If ye are gettin' that Chalice, then get to it, 'fore it melts.",
                    title : "Gurnstaad Baron",
                    after : "iceMazeStart",
                    until : "iceMazeDone",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 22,
                    y : 18,
                    icon : "dwarfKing.png",
                    text : "If I know Vloyansk, and I'd bet me beard that I do, then he won't be able to turn down that old Chalice. Why it even warms me cold heart to see it once more. Now head West!",
                    title : "Gurnstaad Baron",
                    after : "iceMazeDone",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 13,
                    y : 10,
                    icon : "dwarf.png",
                    text : "I'm the treasurer of this Barony. But there ain't much left to count.",
                    title : "Treasurer",
                    until : "talkedBaron",
                    action : "TALK"
                },
                {
                    type : "dispatch",
                    x : 13,
                    y : 10,
                    icon : "dwarf.png",
                    text : "Durin' the ol' Fiefdom wars, we fought for decades o'er a single crystal chalice. Seems meaningless now. Yet, if ye could retrieve it from the Ice Maze just Northeast of here, it may get Vloyansk's attention. Will you attempt it?",
                    title : "Treasurer",
                    after : "talkedBaron",
                    sets : "iceMazeStart",
                    until : "iceMazeStart",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 13,
                    y : 10,
                    icon : "dwarf.png",
                    text : "The Ice Maze t'was once a proving ground for the young'uns. But it has been years since anyone done stepp'd foot in there.",
                    title : "Treasurer",
                    after : "iceMazeStart",
                    until : "iceMazeDone",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 13,
                    y : 10,
                    icon : "dwarf.png",
                    text : "Ye have the Chalice! An impressive feat for a thin-skinned Southerner. Present that to Vloyansk, and ye may get inside the Blue Tower.",
                    title : "Treasurer",
                    after : "iceMazeDone",
                    action : "TALK"
                },
                {
                    type : "temple",
                    x : 15,
                    y : 17,
                    icon : "temple.png",
                    cost : 25
                },
                {
                    type : "shop",
                    name : "Gurnstaad Armory",
                    x : 30,
                    y : 11,
                    icon : "shop.png",
                    level : 5,
                    groups : ["armor"],
                    buyRate : 125,
                    sellRate : 29
                },
                {
                    type : "shop",
                    name : "Gurnstaad Arms",
                    x : 30,
                    y : 13,
                    icon : "shop.png",
                    level : 5,
                    groups : ["weapon"],
                    buyRate : 125,
                    sellRate : 29
                }
            ]
        },
        "lighthouse1" : {
            name: "Crowhook Lighthouse",
			map : "\
~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~/~~~\
~~~~~~/~~~~~~~~~~~~~~\
~~/~~~~~XXXXX~~~~~~~~\
~~~~~~XXX...XXX~~~~~~\
~~~~~XX......XXX~~~~~\
~~~~XX........XXX~~~~\
~~~~X...XXXX...XX~~~~\
~~~XX..XX..XX..XXX~~~\
~~~X..XX....X...XX~~~\
~~~X..X..XX.X...XX~~~\
~~~X..X...XXX..XXX~~~\
~~~XX.XX.......XXX~~~\
~~~~X..XXXX...XXX~~~~\
~~~~XX....XXXXXXX~~~~\
~~~~~XX.....XXXX~~~/~\
~~~~~~XXX...XXX~~~~~~\
~~~~~~~=XXDXX=~~~~~~~\
~~~~~/~==M====~~~~~~~\
~~~~~~~~===M=~~~~~~~~\
~~~~~~~~M===~~~/~~~~~\
",
			width : 21,
			height : 21,
            music : "jurk14",
            dark: true,
            level: 1,
            groups : ["dungeon", "default"],
            encounterChance: 0,
            combatMap: "dungeonCombat",
            features : [
                {
                    type : "transition",
                    x : 10,
                    y : 17,
                    icon : "doorInWall.png",
                    text : "Exit the Lighthouse and return to the Wildernesse?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 75,
                    targetY : 83
                },
                {
                    type : "block",
                    x : 10,
                    y : 18
                },
                {
                    type : "sign",
                    x : 11,
                    y : 15,
                    icon : "beardMan.png",
                    action : "TALK",
                    after : "cyclopsStart",
                    until : "cyclopsDone",
                    title : "Lighthouse Keeper",
                    text : "I am the lighthouse keeper, but I daren't go up there! That Cyclops is enormous, it could eat me whole without even chewing!"
                },
                {
                    type : "sign",
                    x : 11,
                    y : 15,
                    icon : "beardMan.png",
                    action : "TALK",
                    after : "cyclopsDone",
                    title : "Lighthouse Keeper",
                    text : "The cyclops is gone? Thank you so kindly, this is a day I hadn't dreamed would ever come. I will now begin the long task of cleaning up the mess it made!"
                },
                {
                    type : "transition",
                    x : 11,
                    y : 10,
                    icon : "doorway.png",
                    text : "Climb to the top of the Lighthouse?",
                    target : "lighthouse2",
                    transitionType : "up",
                    targetX : 7,
                    targetY : 10
                }
            ]
        },
        "lighthouse2" : {
            name: "Crowhook Lighthouse",
            dark: false,
            music : "jurk14",
            level: 1,
            groups : ["dungeon", "default"],
            encounterChance: 0,
            combatMap: "dungeonCombat",
			map : "\
~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~\
~~~~~XXXXX~~~~~\
~~~~XX...XX~~~~\
~~~XX.....XX~~~\
~~~X.......X~~~\
~~~X.......X~~~\
~~~X.......X~~~\
~~~XX.....XX~~~\
~~~~XX...XX~~~~\
~~~~~XXXXX~~~~~\
~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~\
",
			width : 15,
			height : 15,
            features : [
                {
                    type : "transition",
                    x : 7,
                    y : 10,
                    icon : "doorway.png",
                    text : "Descend the Lighthouse stairs?",
                    target : "lighthouse1",
                    transitionType : "down",
                    targetX : 11,
                    targetY : 10
                },
                {
                    type : "encounter",
                    id : "lighthouseCyclops",
                    x : 7,
                    y : 4,
                    icon : "cyclops.png",
                    text : "You face the mighty Cyclops of the Lighthouse, and it is even larger than you had dared to imagine!",
                    after : "cyclopsStart",
                    sets : "cyclopsDone",
                    gold : 28,
                    creatures : [
                        {"name" : "Cyclops", "bonus" : 1, "hitPoints" : 25}
                    ],
                    items : [
                        {"name" : "Amulet of Precision"}
                    ]
                },
                {
                    type : "sign",
                    x : 7,
                    y : 7,
                    icon : "brightLight.png",
                    title : "Light",
                    text : "The extraordinarily bright light casts a magical glow, while exuding no heat."
                }
            ]
        },
        "west" : {
            name : "Westerlandes",
			map : "\
MMMMMMM///////MMMMMMMMMMMMMMMMMMMMMAAAAAAAAAAAAAAAAAAAAAA///////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
MMMMMM//////////MMMMMMMMMMMMMMMMMAAAAAAAAAAAAAAAAAAAAAAAAAA////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
MMMMMMM//MMMM////MMMMMMMMMMMMMMMAAAAAAAAAAAAAAAAAAAAAAAAAAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
MMMMMMMMMMMMM//MMMMMMMMMMMMMMMMMMMAAAAAAAAAAAAAAAAAAAAAAAAAAA//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
MMMMMMMMMMMMMM/M=MMMM=MMMMMMMMMMAATTTTATT:A:AAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAATAAAAAAAAA:AAAA:AAAAAAAAAAAAAAAAAAAAAAA\
MMMMMMMMMMM!=M/M=!MM==MMMMMMMM=MAAA:TTTTT:::ATT::A:AA::AAAAAAAA~AAAAAAA:::AA::AATTATTTTAAA:::::::::::::::::AAAAAAAAAAAAAAA\
MMMMMMMMMM!===~M===M===MMM=M===MMAATTTT:TT:::::::::AA:AT~AAAAAAA~AAAAAA:::::::AA:::T::AAAA::::::::::::::::::::AAAAAAAAAAAA\
MMMMMMMMMM===~~MMM=MM==MMM====MMMAAATTT:T:T:::::::::A:TT~~~~~~~~~AA:::::::::::::::::T:::A::::::::::::::::::A::::AAAAAAAAAA\
MMMMMMMM=M!===~~~~==M===M======MMMAAATT:::::::::::::A::TTTTT~TTTTTAA:::::::::::::::::::::A:::::::::::A:::::A:::AAAAAAAAAAA\
MMMMMM!==========~~=M=======!===MMAAAA~:TT:::::::::::::::TTT~TTTTTTA:::::::::::::::::::::::::::::::::::::AAAAA:ATTTAAAAAAA\
MMMMMM=========MM=~=========!====MAAAA~~~TTT:::::::::AA:::::~~:::::ATA:::::::::::::::::::::::::::::::::::::AAAAAT:::AAAAAA\
MMMM========~~~~~~~========!!====MAAAAA~~~:TTT:::::::::::::::~~~~:::::::::::::::::::::::::::::::::::::::::::ATTT::::AAAAAA\
MMMMMMMM==!~~!!!!~~~~~~===!!===!=M~~~~~~~~::::::::::::AA:::AA:TT~T:A:::A::AAA:::::::::::::::::::::::::::::::::::::::AAAAAA\
MMMMMMMM==!~M=!!!~!=======!======~MMAA~A~~~:::::::::::A::::AAA:T~T::::::::::::::::::::::::::::::::::::A::::::::::::::AAAAA\
MMMMMMMM===!M=!!!~!!===============MA:-:---::::::::::::::AAAAA:T~~::AA::::A::::::AAAAA:::::::::::::AAA:AA::::::::::::AAAAA\
MMMMM=MM===!M====-=============MMMMAAA~AA~~::::::::::::::::AAA:::~TAAA::AA::A::AAAAAAAAA::::::::::::AAA::A::::::::::::AAAA\
MMMMM==!==!M===!!~!!!===========MAAAAA~~~~~::::TT:::::::::A:A::T~~TA:A:::::::::AAATTTAAA::::::::::::::::A:::A::::T::::AAAA\
MMMM=M====!M===!!~!!!!=========~~MMAAAAAAA~::::::T::::::::::::::~AAA::::::::::AATT~T~TAAA:::::::::::::::::::::A::::::AAAAA\
MMMMMM====!M====!~~~!!========~~~~MMMA:AAA~::TTT::::::A::::TTTT~~:AA:::::::::AAA~~~~~TAAAA:::::::::::::::::::::::::::AAAAA\
MMMMMMMM===M====!!!~!!!=======~~~~~MM~~AA~~~:TTTT:::::A:::~~~~~~T::A::::::::::::~:::~AAAAA::::::::::::::::::T:::::::AAAAAA\
MMMMMMMM=====M=!!~~~!!!!!====MM~~M~M~~~~~~~~TTTT:::::::A::~T:::T::AA:::::::::A::::::TAAAA::::::::::::::::::::::::::::AAAAA\
MMMMMMMM=====M=MFM!~~~~!!=====M~~M~~~~~~~~~~::TT:::::::A:T~TT:TT::AA:::::::::AATTATATAA:::::::::::::::::::::::T:::::::AAAA\
MMMMMM=======M=MM~~~!!!!!==MMM~~~~~~~~~~~~T~~::::T:::::A::~~~:T:AAA::::::::::AAAAAAAAAA:::::::::::::::::AA::::::::::::AAAA\
MMMMMMMM====M~~~~~~!!!!!=====M!~M~~~=~~~~T:~~:::::::::::A::T~:T:AA::::::::::::ATTAAAA:::::::::::::T:::::A:::::::::::::AAAA\
MMMMMMMM=====!~~~~~!!!!!====M=!~~~/~~~~~~::~~::::::::::::A::-::::::::::::::::::::::::::::::::::::T:T::::AAA::::::A:::AAAAA\
MMMMMMM=====!~~!!~!!!!!!===!==!~MMM~~~~~~T~~:::::::::::::::T~TT:AA::::::::::::::::::::::::::::::::::::::::A:::::AA:::AAAAA\
MMMMMM=====!!~~~~~~!!!!!======!~~~~~~~~~~~~~:::::A::::A:::T~~::AA:::::::::::::::::::::::::::::::::::::::::::::::AAA:::AAAA\
MMMMMMMM==!!!~~~~~~!!!====!!==!~~~~~~~~~~~~T:::::::::::::~~~T:AA:::::::::AAA::::::::::::::::::::::::A:::::::A:::A:A:::AAAA\
MMMMMMM===!!!!~~~~!!!!!!==!==MMMMM~~~~~~~~~~~~:::::A::A::~T:::A:::::::::A::A::::::::::::::::::::::::::::::::A:::A:::AAAAAA\
MMMMMMM==!!!!!~~!!!!!!!==!!===~M~~~~~~~~~~~~~~:AAAAAAAA::~T:::A:::::::::::A:::::::::::::::::::::::::::::::::::::AAA:::AAAA\
MMMMMM==!!!!!!!~!!!!!===!=====~~M~~~~~~~~~~~T~~:::A:AAA:~~T::AA:::::::::::::::::::::::::::::::::::A:A:AA::::::::TAA::AAAAA\
MMMMMMM=!!!!!!!~!!!!!===!=====~~~~~~~~~~~~~~~~~~::::AAA::~~T:AA:::::::::::::::::::::A:AT:::::::::::::::::::::::TTA:::AAAAA\
MMMMMMM==!!!!!!~!!!!!!!!!!!==!!~~~M~~~~~~~~~~~~~~~::AAA:::~::AA::::::::::::::::::::AAAAAT::::::::::::::::::::::TTA:::AAAAA\
MMMMMMMM=!~!!!!~!!!!!!!!!!!!=!!!MMM~~~~~~~~~~~~~/~~~:AAAA:~~TTT::::::::::::::::::::::AAAATT::TT::::::A::::::::TTA:::AAAAAA\
MMMMMMMM=!~!!!~~!!!!!!!!!!=!====!MM~~~~~~~~~~~~~~~~~:AA:AAA~~AT::::::::::::::::::::::::AATTTTT:::::::::::::::::TT:::AAAAAA\
MMMMMMM~~!~!!!~!!!!=!!!!!!~!!!!=!!M~~~~~~~~~~~~~~~/~~::AAAAA~~AAT:::::::::::::AA:::::AAATTTTT:::::::::::::::::::::::AAAAAA\
MMMMMMM~~~~~=!~!!!===!!!!!~~!!!=!!M~~~~~~~~~~~~~~~~~~~::A:AAA~~~AAA::::::::::::AA:::AAAAAATT:::::::::AAAA::::::::A:AAAAAAA\
MMMMMMM~~~~~~~~!!!=!==!~~!~~~~!=!!!M~~~~~~~~~~~~~~~~~/~~AAAAAAA~~~A:::::::T::AAAAAAAAAAAAAAAA::AA:AAAAAAAAAA:TT:::::::AAAA\
MMMMMMM~~~~~~~~~!!===~~~~~~~~~!=!!MM~~~~~~~~~~~~~~~~~~~~~~AAAAAAA~AT::::TT~TAAAAAAAAAAAAAAAAA:AAA::AAAAAAAAATATTTAAA:AAAAA\
MMMMMMM~~~~~~~~~~~~~==~~~~~~~=!=!!MM~~~~~~~~~~~~~~~~~~/~/~AA:AA::~A:T::T~~~TAAAAAAAAAAAAAAAAAAAA::AAAAAAAAAAAAAAAAAAAAAAAA\
MMMMMM~~~~~~~~~~~~~~~~~~~~~=~~!=!MM~~~~~~~~~~~~~~~~~~~~~~~~~:AA:A~AA:::~~TT:AAA//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
MMMMMM~~~~~~~~~~~~~~~~~~~~~~~~!=(!~~/~~~~~~~~~~~~~~~~~~~~~~::::::~:A:~~~~AAAAAA///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/\
MMMMM~~~~~~~~~~~~~~~~~~~~~=~~~(=()~~~~~~~~~~~~~~~~~~~~~~~/~:::~~~~~:::-~~~~AAAA//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//\
MMMMM~M~~~~~~~~~~~~~=~~~~~~~~-===)~~~~~~~~~~~~~~~~~~~~~~~~~~::~:TT~~::~~~~~/A/////AAAA////AAAAAAAAAAAAAAAAAAAAAAAAA///////\
/MMMM~~~~~~~~~~M~~~====~~~~~~~()((~~=~~~~~~~~~~~~~~~~~~~~~~~~~~T::T~:~~~~~~//~///AAA~~~~~~~AAAA//AAA~~~~~~AAAAAAAA////////\
//M/MM~~~~~~~~==~~~=====~~~~~~~~~~~~=!~~~~~~~~~~~~~~~~~~~~~~~~~~::~~~~~~~~~~~~~~~~~~~~~~~~~~////~~~~~~A~~~~/////~~~///////\
//MMM~~~~~~~~~==MM~~=!!=~=!!~~~~!~~~===~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~:~~~~~~~///~~~~~///////\
//MMMM~~~~~~/~~===~==~~===!==!~~~~~~~==~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/~~~~~~~~//~~~~/~~//~~~~~~~~~~~~~~~~~~////////\
///MMMMM~~~~/~MM==~===~=====!!~~~~~~~=!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/~~/~~~~~~~/~~~~~~~~~~~~~~~~~~~~~~~~~~MM//~////\
//MMMMMM~/M//~~===~!======!!!!!~~~~===!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//~~~~~~~~~~~~~~~~~~~~~~~~~/MM/~~////\
//MMMMM~~==M/~M===~!!====!!!!!~~!~~~=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MMMMM~/////\
//MMMMM~~~!/~~===!~~!=!!!!!=!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MM=M/=~/////\
///MM/~~~~~/~===!=!~==!!!!==~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!=M=M!=~/////\
////M//~~~~~~!=!!==~=!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/~~~~~~~~~~~~~~~~~~~~~~======~~~////\
///////~~~~~~~==!====!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!=~~~~~/////\
///////~~~~~/~======!!!!!=~~~~~~~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//MMMM\
////////~~~~~~=~===!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!~~~~~~~~~~MMMMMM\
///////~/~~~~~~~~==!!!!~!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!==!~~~~~~~/MMMMMMM\
///////~/~~/~~~~~~!!=!!~~~~~~~~MMMM~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=====~~~~~~/MM/MMMM\
///////~~~~~~M=~==!!!!!!~~~~~MMMMM~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~====~~~~////M/MMMMMM\
///////~/~~~~M=!==!!!~~!~~~~~MMMMMM~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~XXXXXXX///MMMMMMMMMM\
/////////~~~~~=!==!!!~~~~~~M~MMMM~~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~X###R####MMMMMMMMMMM\
////////~~~!~~M!==!!!!~~~~~M~MM==-~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~XXXXX###RR##MMMMMMMMMMMM\
///////~~~~~~~M!!!!!!~~~~~~MMM!=M~~/~~~~~~~~~~~~~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=X#######R#R#MMMMMMMMMMMM\
///////~~~~~~~~M!!!!!~~=~~~MM===MM~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~==XXRR#####R#R#M#M#MMMMMMMM\
////////~~=~!~~!MM!!~~~~~~~MMMM=MMM//~~~~~~~~~~~A:T~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~===XX#####R##R########M##MMMM\
///////~~~~~~~~MM!!!~~~~~~~~MMMMMMM~~~~~~~~~~~:A:::T~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~==XX######RRRR###R######MMMMM\
///////~~~~~~~M~~~~~~~==~~~~~MMM~~~~~~~~~~~~/~~T:::~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~==X####R###R########R###MMMMM\
////////~~~~/~~~~~~~~~~~~~~~~~~M~~~~~~~~~~~~~~~~~~T~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=XR####RR###RRRRR##RRRRMMMMM\
/////////~~~~~~~~~~=~~~~~~~~~~~M~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~==XRRR###R##RR###R##R####MMMM\
/////////~~=~~!~~=~~~~~~~~~~~/~M~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=XX##R###R###R###RR####MMMMMM\
///////~~~~~~~~~~~~~~~=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=X######RRRR#R#R##R####RMMMMM\
////////~~~~~~~~~~~~~==~~~~~~~~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=X####RRR##R#R#R#RR#R####MMMM\
/////////~~~~~~~~~~~==~~~~~~~~~~//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~X##RRR####RRRRR#R##R###MMMMM\
////////~~~~~~~~~~~~!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~X####R######R###R##R#MMMMMMM\
////////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~X###RR#RRRR#####R#####MMMMMM\
/////////~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=~=XXX#######R###RRR####MMMMMMM\
////////////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!===X#############RRMMMMMMMMMM\
///////////~~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!===XRRRRR##RRRR###MMMMMMMMMMM\
////////////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~==XXXXXXXXXXXX=XXMMMMMMMMMMM\
/////////////~~//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//~////~///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=====~~~~~~X===XXMMMMMMMMMM\
/////////////~///~~~/~~~~~~~~~~~~~~~//~~~~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~X====!MMMMMMMMMM\
/////////////~//~~/~~~~~~~~~~~~~~~~~//////~~~~~~~~~~//~~~~~~~~~~~~~~~~~/~~~~~~~~~/~~~~~~~~~~~~~~~~~~~~~/~~MM~===!MMMMMMMMM\
///////////////////~~/~~~~~~~~~~/~//~~~~~~~~~~~~~~~//~~~~~~~~~~~//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/~~~~/MM~!==!M!=!!MMMM\
A/////////////////~~~~~~~~~~~~~~~~~~~~//~/~~~~~~~~~/~~~~~~/~~~~~~///~~~~~~~~~~~~~~~~/~~~~~~~~~~~~~~~~//~~MMMMM!=====~~/MMM\
AAA////////////////~~~~~~~~~~~~~///~~///~~~~~~~~~~~~~~~~~~~~~~~~~~/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//~~~~~M=====~~~MMMM\
AAA/////////////~~~~~~~~~~~~~~~~//////~~~~~~~~~~~~/~~~~~~~~M=~~~~~/~~~~/~~~~~~~~/~~~~~~~~~~~~~~~~~~~~//MM/~~-==M~~=~~/MMMM\
AAAA//////////////~~~/~~~~~~~~///////~~///~~~~//~///~~~~/~~=M~~~~~~~~///~~~~~~~~~~/~~~~~~/~~~~~~~~~~~~/MMM/~~M!M!~~~!MMMMM\
AAAAA/////////////~~~~~~/~~~~~~~~///////////////~///~~~~~~M==M~~~~~~~///~~~~~~~~~~~~~~~~/~~~~///~~~~~~~M/MM/MMMM~~MMMMMMMM\
AAAAA//////////////~~~~~~~~~~~~~////////////////~///~~~//~M~M~~~~~///////~~~//~~/~/~~/~~~/~~~~~~~~~~//////MMMMMM~MMMMMMMMM\
AAAA::~~~//////////~~~~~~~~~~~~~~//~////////////~////~~~~~~~~~~~~~///////~~~///~~~////~~~/~~~~/~~/~~//////MM//M//MMMMMMMMM\
AAAAA/~~~/~~//////////~~/~~~~~~~~~~~/////////////////~~~~~~~~~~~~///////~~~~///~~~///~~~~~~~/~~~//~~~/////////MMMMMMMM////\
AAAAA///~~~~/~///////~~~/~~~~~~~~~~/////////////////////~//~~~~~~~~//////~~/////~~//////~/~~//~~///~///////////MM/M///////\
AAAA///////~~~~/~~~////~~~/~~~~~~///////////////////////~//~/~/~~////////~//////////////~//~///////////////////MMM/MM/////\
AAA///////////~~~/~//~~~~~~~~~~/~//////////////////////////~~~~~~/////////////////////////////////////////////////////////\
AA////////////////~~~~~~~~~~//~//////////////////////////////~////////////////////////////////////////////////////////////\
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
",
			width : 122,
			height : 100,
            music : "gurk1",
            dark : false,
            level : 7,
            encounterChance : 25,
            combatMap: "outdoorCombat",
            groups: ["outdoor", "default"],
            terrain : {
                "~" : {
                    level : 7,
                    encounterChance: 25,
                    combatMap : "shipCombat",
                    groups: ["water"]
                },
                ":" : {
                    level : 6,
                    encounterChance: 25,
                    combatMap : "desertCombat",
                    groups: ["desert", "default"]
                },
                "T" : {
                    level : 6,
                    encounterChance: 25,
                    combatMap : "desertCombat",
                    groups: ["desert", "default"]
                },
                "#" : {
                    level : 9,
                    encounterChance: 35,
                    combatMap : "swampRiverCombat",
                    groups: ["outdoor", "undead", "default"]
                }
            },
            features : [
                {
                    type : "transition",
                    x : 117,
                    y : 37,
                    icon : "doorway.png",
                    text : "Re-enter the Western Passage?",
                    target : "passage",
                    transitionType : "dungeon",
                    targetX : 5,
                    targetY : 6
                },
                {
                    type : "transition",
                    x : 113,
                    y : 33,
                    icon : "city.png",
                    text : "Will you enter the walled village of Herazni?",
                    target : "herazni",
                    transitionType : "town",
                    targetX : 9,
                    targetY : 18
                },
                {
                    type : "sign",
                    x : 81,
                    y : 19,
                    icon : "palaceLeft.png"
                },
                {
                    type : "transition",
                    x : 82,
                    y : 19,
                    icon : "palaceCenter.png",
                    text : "You stand before Teshvar, a grand palace of astonishing architectural beauty. Will you enter?",
                    target : "palace",
                    transitionType : "town",
                    targetX : 48,
                    targetY : 38
                },
                {
                    type : "sign",
                    x : 83,
                    y : 19,
                    icon : "palaceRight.png"
                },
                {
                    type : "barrier",
                    x : 42,
                    y : 14,
                    until : "passageGranted",
                    icon : "orangeGuard2.png",
                    title : "Pajoon Guard",
                    text : "Halt! Westward lies the Thowan Moors. No subjects may leave the Sultanate of Pajoon without Royal Authority."
                },
                {
                    type : "transition",
                    x : 37,
                    y : 14,
                    icon : "doorway.png",
                    text : "Ahead is a treacherous mountain pass, will you attempt to cross it?",
                    target : "pass",
                    transitionType : "dungeon",
                    targetX : 55,
                    targetY : 32
                },
                {
                    type : "transition",
                    x : 34,
                    y : 14,
                    icon : "doorway.png",
                    text : "Will you navigate the Thowan Pass towards the Pajoon Badlands?",
                    target : "pass",
                    transitionType : "dungeon",
                    targetX : 4,
                    targetY : 32
                },
                {
                    type : "transition",
                    x : 4,
                    y : 90,
                    icon : "doorway.png",
                    text : "There is a narrow, but navigable passageway ahead, will you enter?",
                    target : "edge",
                    transitionType : "dungeon",
                    targetX : 15,
                    targetY : 15
                },
                {
                    type : "transition",
                    x : 29,
                    y : 21,
                    icon : "city.png",
                    text : "Above is the cliffside village of Sparrowcrest, will you climb up to it?",
                    target : "sparrowCrest",
                    transitionType : "town",
                    targetX : 12,
                    targetY : 4
                },
                {
                    type : "transition",
                    x : 32,
                    y : 43,
                    icon : "keep.png",
                    text : "Tree stumps still smoulder as you look upon the blasted ruins of Telden's Landing. Will you enter and explore the ruins?",
                    target : "teldensLanding",
                    transitionType : "town",
                    targetX : 16,
                    targetY : 4
                },
                {
                    type : "transition",
                    x : 29,
                    y : 64,
                    icon : "tower.png",
                    text : "You stand at the entryway of the mighty Blayside Citadel. Will you enter?",
                    target : "citadel1",
                    transitionType : "dungeon",
                    targetX : 18,
                    targetY : 10
                },
                {
                    type : "transition",
                    x : 114,
                    y : 86,
                    icon : "city.png",
                    text : "Nestled on the lakeshore is the ancient Village of Shuunia. Will you pass through its gates?",
                    target : "shuunia",
                    transitionType : "town",
                    targetX : 13,
                    targetY : 4
                },
                {
                    type : "transition",
                    x : 112,
                    y : 51,
                    icon : "doorway.png",
                    text : "A desolate cave yawns open here. Around it skulls and bones have been strewn. Dare you enter?",
                    target : "vampireCave",
                    transitionType : "dungeon",
                    targetX : 6,
                    targetY : 18
                },
                {
                    type : "transition",
                    x : 117,
                    y : 65,
                    icon : "keep2.png",
                    text : "The ancient Ubon Fortress was thought to be abandoned for centuries, yet you see evidence that it has seen recent use. Will you enter?",
                    target : "fortress",
                    transitionType : "dungeon",
                    targetX : 4,
                    targetY : 22
                },
                {
                    type : "barrier",
                    x : 70,
                    y : 42,
                    until : "passageGranted",
                    icon : "orangeGuard2.png",
                    title : "Pajoon Guard",
                    text : "Halt! No subjects may leave the Sultanate of Pajoon without royal authority."
                },
                {
                    type : "ship",
                    x : 71,
                    y : 42,
                    icon : "ship.png",
                    id : "pajoonShip",
                    charter : 125
                },
                {
                    type : "ship",
                    x : 28,
                    y : 43,
                    icon : "ship.png",
                    id : "thowanShip",
                    charter : 90
                },
                {
                    type : "encounter",
                    id : "blueDragon",
                    x : 32,
                    y : 62,
                    icon : "blueDragon.png",
                    text : "From a perch high above on a cliff, a enormous Blue Dragon swoops down and attacks!",
                    ambushed : true,
                    gold : 177,
                    creatures : [
                        {name : "Blue Dragon", bonus : 2, hitPoints : 100}
                    ],
                    items : [
                        {name : "Bow of Virtue"}
                    ]
                },
                {
                    type : "encounter",
                    id : "catWarriors",
                    x : 110,
                    y : 9,
                    icon : "catWarrior.png",
                    text : "You face a pride of Cat Warriors!",
                    gold : 57,
                    creatures : [
                        {"name" : "Cat Warrior", "bonus" : 2, "hitPoints" : 30},
                        {"name" : "Cat Warrior"},
                        {"name" : "Cat Warrior"},
                        {"name" : "Cat Warrior"},
                        {"name" : "Cat Warrior"},
                        {"name" : "Cat Warrior"}
                    ],
                    items : [
                        {"name" : "Tempered Shield"},
                        {"name" : "Speed Boots"}
                    ]
                },
                {
                    type : "encounter",
                    id : "oliphants",
                    x : 39,
                    y : 6,
                    icon : "oliphant.png",
                    text : "This is the ancestral home of the mighty Oliphants, and you are violating the sanctity of their territory!",
                    gold : 72,
                    creatures : [
                        {"name" : "Oliphant Priestess", "bonus" : 1, "hitPoints" : 20},
                        {"name" : "Oliphant Charger", "bonus" : 1, "hitPoints" : 20},
                        {"name" : "Oliphant Charger"},
                        {"name" : "Oliphant Sentry"},
                        {"name" : "Oliphant Sentry"},
                        {"name" : "Oliphant Sentry"},
                        {"name" : "Oliphant"},
                        {"name" : "Oliphant"},
                        {"name" : "Oliphant"},
                        {"name" : "Oliphant"},
                        {"name" : "Oliphant"}
                    ],
                    items : [
                        {"name" : "Oliphant Talisman", bonus : 2},
                        {"name" : "Flamberge", bonus : 1}
                    ]
                },
                {
                    type : "encounter",
                    id : "bigWyvern",
                    x : 16,
                    y : 4,
                    icon : "wyvern.png",
                    text : "In this remote valley, you encounter a gigantic Wyvern!",
                    gold : 88,
                    creatures : [
                        {"name" : "Wyvern", "bonus" : 3, "hitPoints" : 110}
                    ],
                    items : [
                        {"name" : "War Amulet"}
                    ]
                },
                {
                    type : "encounter",
                    id : "bigMinotaurs",
                    x : 10,
                    y : 50,
                    icon : "minotaur.png",
                    text : "You are beset by two large and ferocious minotaurs!",
                    gold : 45,
                    ambushed : true,
                    creatures : [
                        {"name" : "Minotaur", "bonus" : 3, "hitPoints" : 50},
                        {"name" : "Minotaur", "bonus" : 2, "hitPoints" : 30}
                    ],
                    items : [
                        {"name" : "Tempered Shield", bonus : 1},
                        {"name" : "Wand of Curing"}
                    ]
                },
                {
                    type : "encounter",
                    id : "forestDwellers",
                    x : 20,
                    y : 58,
                    icon : "forestMan.png",
                    text : "As you traverse the forest, a feeling comes over you of not being alone. And sure enough, you are suddenly attacked by the forest itself!",
                    gold : 21,
                    ambushed : true,
                    creatures : [
                        {"name" : "Forest Dweller", "bonus" : 2, "hitPoints" : 20},
                        {"name" : "Forest Dweller", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Forest Dweller"},
                        {"name" : "Treant Elder", "bonus" : 3, hitPoints : 40},
                        {"name" : "Treant Elder", "bonus" : 2, hitPoints : 20},
                        {"name" : "Treant Elder", "bonus" : 3, hitPoints : 10},
                        {"name" : "Treant Elder", "bonus" : 3},
                        {"name" : "Treant", "bonus" : 3, "hitPoints" : 30},
                        {"name" : "Treant", "bonus" : 3},
                        {"name" : "Treant", "bonus" : 3}
                    ],
                    items : [
                        {"name" : "Strengthsword"},
                        {"name" : "Healing Vial", bonus : 1}
                    ]
                },
                {
                    type : "encounter",
                    id : "hugeLeviathan",
                    x : 12,
                    y : 93,
                    icon : "leviathan.png",
                    text : "While sailing through this narrow pass, the water suddenly begins to churn and boil. Suddenly, an enormous Leviathan breaches and attacks!",
                    gold : 0,
                    ambushed : true,
                    creatures : [
                        {"name" : "Leviathan", "bonus" : 3, "hitPoints" : 135}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "greenDragon",
                    x : 109,
                    y : 86,
                    icon : "greenDragon.png",
                    text : "Circling high above is an ancient Green Dragon. It swoops in and attacks!",
                    ambushed : true,
                    gold : 211,
                    creatures : [
                        {name : "Green Dragon", bonus : 2, hitPoints : 125}
                    ],
                    items : [
                        {name : "Dragonboots"}
                    ]
                },
                {
                    type : "encounter",
                    id : "blackDragon",
                    x : 59,
                    y : 87,
                    icon : "blackDragon.png",
                    text : "On this island is the lair of an ancient Black Dragon!",
                    gold : 231,
                    creatures : [
                        {name : "Black Dragon", bonus : 2, hitPoints : 125}
                    ],
                    items : [
                        {name : "Orb of Time"},
                        {name : "Amulet of Truth"}
                    ]
                }
            ]
        },
        "herazni" : {
            name : "Herazni",
			map : "\
:::::::::::::::::::\
:::::::::::::::::::\
:::::::::::::::::::\
:::XXXXXXXXXXXXX:::\
:::XTTTXX:XXT::X:::\
:::X:::X:::X:::X:::\
:::X:TTTT:TT::TX:::\
:::XTT:T::::::TX:::\
:::X::::::::::TX:::\
:::XTTT:::::T::X:::\
:::X::::::::T::X:::\
:::X::::::::::TX:::\
:::X::::::::::TX:::\
:::XTT::::::T::X:::\
:::XT::::::::TTX:::\
:::X:::T::::T::X:::\
:::XTT::::::::TX:::\
:::X:T:::::::TTX:::\
:::XXXXXXDXXXXXX:::\
::::TTTTX:XTTTT::::\
:::::::::::::::::::\
:::::::::::::::::::\
:::::::::::::::::::\
",
			width : 19,
			height : 23,
            music : "jurk3",
            dark : false,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 9,
                    y : 18,
                    icon : "doorInWall.png",
                    text : "Exit the Town of Herazni?",
                    target : "west",
                    transitionType : "outdoor",
                    targetX : 113,
                    targetY : 33
                },
                {
                    type : "block",
                    x : 9,
                    y : 19
                },
                {
                    type : "sign",
                    x : 8,
                    y : 5,
                    icon : "column.png"
                },
                {
                    type : "sign",
                    x : 10,
                    y : 5,
                    icon : "column.png"
                },
                {
                    type : "sign",
                    x : 6,
                    y : 7,
                    icon : "well.png"
                },
                {
                    type : "sign",
                    x : 4,
                    y : 15,
                    icon : "orangeWoman.png",
                    text : "Yes, I have seen Vella. She was taken through here as a prisoner some years ago. I will never forget the calm and resolve on her face. She was taken to Teshvar, the Pajoon capital at the oasis, so you should look there.",
                    title : "Woman",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 9,
                    y : 16,
                    icon : "orangeGuard.png",
                    text : "I was but a child the last time an Easterner passed through here. You are always welcome, as it is a peaceful town. But step carefully in Teshvar, for the Pajoon peoples have suffered at the hands of an Easterner recently.",
                    title : "Guard",
                    action : "TALK"
                },
                {
                    type : "temple",
                    x : 9,
                    y : 4,
                    icon : "temple.png",
                    cost : 40
                },
                {
                    type : "shop",
                    name : "Pajoon Apothecary",
                    x : 14,
                    y : 10,
                    icon : "shop.png",
                    level : 6,
                    groups : ["potion"],
                    buyRate : 122,
                    sellRate : 33
                }
            ]
        },
        "palace" : {
            name : "Teshvar",
			map : "\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~X~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TXXXXXXXXXXXXXXXXXT~~~~~~~~~TT~~~~~~~~~~~~~~~~~~~~~~X~~~~~\
::::XXT~~~~~~~~~~~~~:TTT~~~~~~~~~~~~~~::XX...X.....X...XX::~~T~~~~~T~~~~~~~:~TT~~~~~TTT:~~~XX::::\
:::XXTTT~::::::::::::::T:T~~~~TT~:~~~~~:X..p.........p..X:~~:T:~T~T:~~~~:TT:::::::::::::T~~~XX:::\
:::XT::T::XXXXXXXXX:::::::TT~~T~~:T::~~:X...............X:~~::::T~~~~:TTT:::::XXXXXXXXX::T~TTX:::\
:::X:::::XXT.....TXX:::::::T~~::::::::~~~~~~~~~...~~~~~~~~~T::T:::T~~:::T::::XX:XT:TX:XX:::::X:::\
:::X:T::XXT.......TXX::::::~~~::::::::::X.....~~|~~.....X:::::::::::T:::TT::XX:TXT:TXT:XX::::X:::\
:::X::::XT.........TX:::::::~:::::::XXXXXXXXX.......XXXXXXXXXX:::T:::::T::::X:T:XX:XX:T:X::::X:::\
:::X::::X....p.p....X:::::T~~:::::::X.......D.......X....X...X::::::::T:::::XT:T:T:T:T:TX::::X:::\
:::X::::X...........D...::T~::::::::X.......X.......X....X...X::::::::::::::X:T:::::::T:X::::X:::\
:::X::::X....p.p....X::.:T~~:::::TXXXXXXXXDXX.......D....D..XXXX::::::::::::XT:T:::::T:TX::::X:::\
:::X::::XT.........TX::.:~~T:::::TX....D...XXXXXXXXXXX...X..X..X:::XXXXX::::X:T:T:::T:T:X::::X:::\
:::X::::XXT.......TXX::..-........D....XXXXX:::X:::::XXXXX..D..X:XXXTTTX::::XX:T:T:T:T:XX::::X:::\
:::X:T:::XXT.....TXX:::::~T:.::::TXXXXXX::X::::X:::::X:::XXXX..XXXTT:T:XXX:::XX:T:::T:XX:::::X:::\
:::X::::::XXXXDXXXX::::T~~:T.:XX:TXXX:X:::X:::XX:::XXX:::X::XXXXT::...:TTX::::XXXXDXXXX:::::TX:::\
:::X::::T:::::.:::::::::~:::.:TX:XX:::X::XX:::X::::X::::XX::X:XX::T.p.T::X::::::::.:::::::::TX:::\
:::X::::::::::..::::T::T~T:T.:TXXXXX::X::X::::X::::X::::X:::X::XTT:....::X::::::::.::::::::TTX:::\
:::X::T:::T:::T.T:::::T~~TT:.::TX..XX:X::X::::X::::X::::X:::XX:XXTT.p..TTXX:::::::.::::::TTTTX:::\
:::X::::T:::T::.:::::T~~T:::....G...X::::::::::::::::::::::::::X..........D........:::::::T:TX:::\
:::X::T:::T:::T.T:::::~:::T...:TX..XX:X::X::::X::::X::::X:::XX:XXTT.p..TTXX:::.:::.:::::TTT:TX:::\
:::X::::T:............-.....p.TXXXXX::X::X::::X::::X::::X:::X::XTT:....::X:::T.:::.T::::::T::X:::\
:::X::T::T.T::T.T::TT:~:::T...TX:XX:::X::XX:::XX:::XXX::XX::X:XX::T.p.T::X.....:::.TTTTT::T:TX:::\
:::X::::T:.:T::.::::::~::::TTTXX::XXX:X:::X::::X:::::X:::X::XXXXT::...:TTX.:::.:::.....:T::TTX:::\
:::X::T::T.T::T.T::::~~~::::::::::XXXXXX::X::::X:::::X:::XXXX..XXXTT:T:XXX.::T.T::::::.:T::::X:::\
:::X::::T:.:T::.::XXXXXXXXXXX:::::X....XXXXX:::X:::::XXXXX.....D:XXXTTTXTT.:TXDXT:::::.::::T:X:::\
:::X::T::T.T::T.:TXTT~~~TTTTXT::::D........XXXXXXXXXXX.......XXX:::XXXXX::.:XX.XX:::::.::::::X:::\
:::X::::::.::::.XXX=========XXX:::XXX........................X::::::::::::.TX...X:::::.::::::X:::\
:::X::::XXDXX::.XT==F=F=F=F==TX:::::D........................D::T:::::::::.:X...X:::XXDXX::::X:::\
:::X:::XX...XX:.XT=F=F===F=F=TX:::::XXXX..................XXXX:::::T::::::.:X...X::XX...XX:::X:::\
:::X:::X.....X:.XT====...====TXTTT:::::XXXXXXXXXXXXXXXXXXXX::::::::::::::T.:XX.XX::X.....X:::X:::\
:::X:::X.....X:........p..........:T:T:T:T:T:TTTTTT::TTT::::::::::T::T::::.:TXXXT::X.....X:::X:::\
:::X:::X.....X::XT====...====TXTT...........................................:::::::X.....X:::X:::\
:::X:::XX...XX::XT=F=F===F=F=TX::T:T:T:T:T:T:T::.::::TTT::::.::.::.::.::.::....::::XX...XX:::X:::\
:::XX:::XXXXX:::XT==F=F=F=F==TX:::::::::::::::XXDXX::::::::T.:T.:T.:T.:T.:T.:T.:::::XXXXX:::XX:::\
::::X:::::::::::XXX=========XXX::::::::::::::XX:.:XX::::::XXDXXDXXDXXDXXDXXDXXDX::::::::::::X::::\
::::XX:::::::::::TXTTTTTTTTTXT::::::::::::TTTXT:.:TX::::::X..X..X..X..X..X..X..X:::::::::::XX::::\
:::::XXX::::::::::XXXXXXXXXXX::::TTT:TTTT:TTXXXXGXXXX:::::X..X..X..X..X..X..X..X:::::::::XXX:::::\
:::::::XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXTXT:TXTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:::::::\
::::::::::::::::::::::::::::::::::::::::::::::T:::T::::::::::::::::::::::::::::::::::::::::::::::\
:::::::::::::::::::::::::::::::::::::::::::T:::::::::T:::::::::::::::::::::::::::::::::::::::::::\
:::::::::::::::::::::::::::::::::::::::::::::::T:T:::::::::::::::::::::::::::::::::::::::::::::::\
",
			width : 97,
			height : 43,
            music : "jurk12",
            dark : true,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 48,
                    y : 38,
                    icon : "dungeonGate.png",
                    text : "Exit the palace and return to the Pajoon Desert?",
                    target : "west",
                    transitionType : "outdoor",
                    targetX : 82,
                    targetY : 19
                },
                {
                    type : "block",
                    x : 48,
                    y : 39
                },
                {
                    type : "sign",
                    x : 47,
                    y : 7,
                    icon : "column.png"
                },
                {
                    type : "sign",
                    x : 46,
                    y : 4,
                    icon : "column.png"
                },
                {
                    type : "sign",
                    x : 47,
                    y : 4,
                    icon : "orangeAttendantLeft.png"
                },
                {
                    type : "sign",
                    x : 49,
                    y : 4,
                    icon : "orangeAttendantRight.png"
                },
                {
                    type : "sign",
                    x : 48,
                    y : 5,
                    icon : "carpetS.png"
                },
                {
                    type : "sign",
                    x : 48,
                    y : 6,
                    icon : "carpetNS.png"
                },
                {
                    type : "sign",
                    x : 48,
                    y : 7,
                    icon : "carpetN.png"
                },
                {
                    type : "sign",
                    x : 50,
                    y : 4,
                    icon : "column.png"
                },
                {
                    type : "sign",
                    x : 49,
                    y : 7,
                    icon : "column.png"
                },
                {
                    type : "sign",
                    x : 78,
                    y : 29,
                    icon : "well.png"
                },
                {
                    type : "sign",
                    x : 23,
                    y : 34,
                    icon : "orangeWoman.png",
                    text : "I love coming to this garden, it is my second favorite thing to do. My first favorite is watching the battles in the arena, of course!",
                    title : "Woman",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 47,
                    y : 36,
                    icon : "orangeGuard.png",
                    text : "Easternfolk, welcome to the Great Palace of Teshvar, capital of the Pajoon Sultanate!",
                    title : "Guard",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 49,
                    y : 36,
                    icon : "orangeGuard.png",
                    text : "Welcome, travellers from the East.",
                    title : "Guard",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 10,
                    y : 32,
                    icon : "orangeGuard.png",
                    text : "To the West of Pajoon are the Thowan Moors. It is a barely civilized region, very dangerous country.",
                    title : "Guard",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 86,
                    y : 32,
                    icon : "orangeGuard.png",
                    text : "To the South is the Lonely Sea, with the Ilstock Isles to the West, and the walled ruins of the old Shuunia Kingdom to the East.",
                    title : "Guard",
                    action : "TALK"
                },
                {
                    type : "barrier",
                    x : 34,
                    y : 20,
                    until : "arenaStart",
                    icon : "guard2.png",
                    text : "Only gladiators may enter the Tuumbak Arena, move along.",
                    title : "Guard"
                },
                {
                    type : "barrier",
                    x : 75,
                    y : 20,
                    until : "arenaDone",
                    icon : "guard2.png",
                    text : "This chamber is reserved for victors of the Tuumbak Arena, and members of the royal court. Be gone!",
                    title : "Guard"
                },
                {
                    type : "sign",
                    x : 34,
                    y : 19,
                    icon : "orangeFatMan.png",
                    after : "arenaStart",
                    text : "Welcome to the Tuumbak Arena, brave gladiators. Be well-prepared, as once you enter, the only way to exit alive is to win!",
                    title : "Arena Master",
                    action : "TALK"
                },
                {
                    type : "transition",
                    x : 35,
                    y : 20,
                    icon : "doorway.png",
                    text : "Will you enter the Tuumbak Arena and fight for for glory?",
                    target : "arena",
                    transitionType : "dungeon",
                    targetX : 4,
                    targetY : 12
                },
                {
                    type : "sign",
                    x : 49,
                    y : 9,
                    icon : "orangeGuard2.png",
                    text : "Easterners, you have been granted an audience with the Great Sultan of Pajoon!",
                    title : "Guard",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 47,
                    y : 9,
                    icon : "orangeGuard2.png",
                    text : "I've got my eye on you...",
                    title : "Guard",
                    action : "TALK"
                },
                {
                    type : "dispatch",
                    x : 48,
                    y : 4,
                    icon : "orangeElder.png",
                    altIcon : "scroll.png",
                    sets : "arenaStart",
                    until : "arenaStart",
                    text : "'All people in Pajoon are my subjects, no matter where they hail from. So I will only grant passage out of Pajoon if you can prevail in the Tuumbak Arena. Take this scroll to the Arena entrance, and prepare for gladiatorial combat!' Will you fight in the arena?",
                    title : "Sultan",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 48,
                    y : 4,
                    icon : "orangeElder.png",
                    after : "arenaStart",
                    until : "arenaDone",
                    text : "My subjects... let us adjourn to the Tuumbak Arena in the center of the palace so that the games may begin!",
                    title : "Sultan",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 69,
                    y : 20,
                    icon : "orangeElder.png",
                    altIcon : "rolledScrollBlue.png",
                    after : "arenaDone",
                    sets : "passageGranted",
                    until : "passageGranted",
                    text : "\"Brave heroes, that was a thrilling victory! With this royal proclamation, you are free to travel about the Westerlandes. Speak to my Chamberlain here about the whereabouts of this 'Vella' that you seek.\"",
                    title : "Sultan",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 69,
                    y : 20,
                    icon : "orangeElder.png",
                    after : "passageGranted",
                    text : "My friends, you should consider giving up this foolish quest and becoming professional gladiators here in Teshvar. Fame and fortune would be yours!",
                    title : "Sultan",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 70,
                    y : 21,
                    icon : "orangeChamberlain.png",
                    after : "arenaDone",
                    text : "The vile Kroga passed through here with his sister as his prisoner. He offended the good name of our Sultan and continued on to the Thowan Moors in the West. It is rumored that Vella is imprisoned there.",
                    title : "Sultan",
                    action : "TALK"
                },
                {
                    type : "temple",
                    x : 82,
                    y : 7,
                    icon : "temple.png",
                    cost : 75
                },
                {
                    type : "shop",
                    name : "Teshvari Arms",
                    x : 11,
                    y : 11,
                    icon : "shop.png",
                    level : 7,
                    groups : ["weapon"],
                    buyRate : 130,
                    sellRate : 25
                },
                {
                    type : "shop",
                    name : "Teshvari Armors",
                    x : 17,
                    y : 11,
                    icon : "shop.png",
                    level : 7,
                    groups : ["armor"],
                    buyRate : 130,
                    sellRate : 25
                },
                {
                    type : "shop",
                    name : "Antiquities of Tuumbak",
                    x : 14,
                    y : 8,
                    icon : "shop.png",
                    level : 6,
                    groups : ["misc"],
                    buyRate : 130,
                    sellRate : 25
                },
                {
                    type : "shop",
                    name : "Alchemical Elixirs",
                    x : 14,
                    y : 14,
                    icon : "shop.png",
                    level : 5,
                    groups : ["potion"],
                    buyRate : 130,
                    sellRate : 25
                }
            ]
        },
        "arena" : {
            name : "Tuumbak Arena",
			map : "\
OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\
OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\
OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\
OOOOOOOOOO}XXXXXXXXXX{}XXX{}XXXXXXXXXX{OOOOOOOOOO\
OOOOOOO}XXXXX::::X::XoXX:XXoX::X::::XXXXX{OOOOOOO\
OOOOO}XXX::X:::::X::XXX:::XXX::X:::::XTTXXX{OOOOO\
OOOO}XX::::X:::::X::::XXXXX::::X:::::XT:::XX{OOOO\
OOOO}X:::::X:::::X:::::::::::::X:::::X::T:TX{OOOO\
XXO}XX:::::X:::::XX:::::X:::::XX:::::X:::::XX{OOO\
.XO}X::::::X::::::X:::::X:::::X::::::XT:T::TX{OOO\
.XO}X::::::X::::::X:::::X:::::X::::::X:::::TX{OOO\
.XXXX::::::X::::::X:::::X:::::X::::::XT:T:TTXX{OO\
....::::::::::::::::::::X::::::::::::::::::::X{OO\
.XXXX::::::X::::::X:::::X:::::X::::::XT:T:TTXX{OO\
.XO}X::::::X::::::X:::::X:::::X::::::X:::::TX{OOO\
.XO}X::::::X::::::X:::::X:::::X::::::XT:T::TX{OOO\
XXO}XX:::::X:::::XX:::::X:::::XX:::::X:::::XX{OOO\
OOOO}X:::::X:::::X::::::X::::::X:::::X::T:TX{OOOO\
OOOO}XX::::X:::::X::::::X::::::X:::::XT:::XX{OOOO\
OOOOO}XXX::X:::::X::::::X::::::X:::::XTTXXX{OOOOO\
OOOOOOO}XXXXX::::X::::::X::::::X::::XXXXX{OOOOOOO\
OOOOOOOOOO}XXXXXXXXXXXXXXXXXXXXXXXXXXX{OOOOOOOOOO\
OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\
OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\
OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\
",
			width : 49,
			height : 25,
            music : "jurk12",
            dark : false,
            level : 7,
            groups : ["outdoor", "default"],
            encounterChance : 15,
            combatMap : "arenaCombat",
            features : [
                {
                    type : "transition",
                    x : 44,
                    y : 12,
                    icon : "doorway.png",
                    text : "Emerge victorious from the Great Arena of Tuumbak?",
                    target : "palace",
                    transitionType : "city",
                    targetX : 64,
                    targetY : 20
                },
                {
                    type : "transition",
                    x : 0,
                    y : 9,
                    icon : "doorway.png",
                    text : "Escape from the arena?",
                    target : "palace",
                    transitionType : "city",
                    targetX : 35,
                    targetY : 20
                },
                {
                    type : "block",
                    x : 3,
                    y : 12
                },
                {
                    type : "encounter",
                    id : "arena1",
                    x : 10,
                    y : 12,
                    icon : "catWarrior.png",
                    text : "Your first opponents are a group of wily Cat Warriors!",
                    gold : 0,
                    creatures : [
                        {name : "Cat Warrior", bonus : 2, hitPoints : 25},
                        {name : "Cat Warrior", bonus : 1, hitPoints : 15},
                        {name : "Cat Warrior", hitPoints : 10},
                        {name : "Cat Warrior", hitPoints : 10},
                        {name : "Cat Warrior"},
                        {name : "Cat Warrior"}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "arena2",
                    x : 17,
                    y : 12,
                    icon : "minotaur.png",
                    text : "The second challenge comes from a phalanx of Minotaurs!",
                    gold : 0,
                    creatures : [
                        {name : "Minotaur", bonus : 1, hitPoints : 20},
                        {name : "Minotaur", bonus : 1},
                        {name : "Minotaur"},
                        {name : "Minotaur"},
                        {name : "Minotaur"}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "arena3",
                    x : 23,
                    y : 7,
                    icon : "oliphant3.png",
                    text : "The Sultan roars with delight as you are set upon next by a herd of enraged Oliphants!",
                    ambushed : true,
                    gold : 0,
                    creatures : [
                        {name : "Oliphant Priestess", bonus : 1, hitPoints : 25},
                        {name : "Oliphant Sentry", bonus : 1},
                        {name : "Oliphant Sentry", bonus : 1},
                        {name : "Oliphant Sentry"},
                        {name : "Oliphant Charger", bonus : 1},
                        {name : "Oliphant Charger"},
                        {name : "Oliphant Charger"}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "arena4",
                    x : 25,
                    y : 7,
                    icon : "nuthSwordsman.png",
                    text : "'Why, this is the greatest arena battle in years!' the Sultan exclaims, as four Nuth gladiators calmly approach.",
                    gold : 0,
                    creatures : [
                        {name : "Nuth Swordsman", bonus : 1, hitPoints : 20},
                        {name : "Nuth Swordsman"},
                        {name : "Nuth Swordsman"},
                        {name : "Nuth Swordsman"}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "arena5",
                    x : 29,
                    y : 12,
                    icon : "golem.png",
                    text : "Weary, but with resolve, you move on to your next opponents: enormous fighting automatons!",
                    gold : 0,
                    creatures : [
                        {name : "Clay Golem", bonus : 2, hitPoints : 45},
                        {name : "Iron Golem", bonus : 2, hitPoints : 30},
                        {name : "Rock Golem", bonus : 1, hitPoints : 20},
                        {name : "Rock Golem"}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "arena6",
                    x : 36,
                    y : 12,
                    icon : "arenaChampion2.png",
                    sets : "arenaDone",
                    text : "With the arena exit in view, you begin to believe that you will live to tell the tale of this ordeal... but hope is all but snuffed out when the mighty Orgolon emerges and attacks!",
                    ambushed : true,
                    gold : 0,
                    creatures : [
                        {name : "Orgolon"}
                    ],
                    items : [
                        {name : "Charm Amulet"}
                    ]
                },
                {
                    type : "sign",
                    x : 24,
                    y : 5,
                    icon : "orangeElder.png"
                },
                {
                    type : "sign",
                    x : 23,
                    y : 5,
                    icon : "orangeAttendantLeft.png"
                },
                {
                    type : "sign",
                    x : 25,
                    y : 5,
                    icon : "orangeAttendantRight.png"
                },
                {
                    type : "sign",
                    x : 24,
                    y : 4,
                    icon : "doorway.png"
                },
                {
                    type : "sign",
                    x : 8,
                    y : 10,
                    icon : "discardedSkull.png"
                },
                {
                    type : "sign",
                    x : 10,
                    y : 15,
                    icon : "discardedSkull.png"
                },
                {
                    type : "sign",
                    x : 15,
                    y : 18,
                    icon : "discardedSkull.png"
                },
                {
                    type : "sign",
                    x : 13,
                    y : 6,
                    icon : "discardedSkull.png"
                },
                {
                    type : "sign",
                    x : 22,
                    y : 15,
                    icon : "discardedSkull.png"
                },
                {
                    type : "sign",
                    x : 27,
                    y : 9,
                    icon : "discardedSkull.png"
                },
                {
                    type : "sign",
                    x : 36,
                    y : 8,
                    icon : "discardedSkull.png"
                },
                {
                    type : "sign",
                    x : 34,
                    y : 14,
                    icon : "discardedSkull.png"
                }
            ]
        },
        "pass" : {
            name : "Thowan Pass",
			map : "\
MMMMMMMMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
MMMMMMMMMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
MMMMMMMMMMAAAAAAAAAAAAAAAAAA~AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
MMMMMMMMMMAAAAAAAAAAAAAAAA~~~~~~AAAAAAAAAAAAAAAAAAAAAAAAAAA\
MMMMMMMMMMMAAAAAAAAAAAAAAA~~~~~~AAAAAAAAAAAAAAAAAAAAAAAAAAA\
MMMMMMMMMMMAAAAAAAAAAAAA~~~~~~~~~~~AAAAAAAAAAAA~AAAAAAAAAAA\
MMMMMMMMMMMAAAAAAAAAAAAA~~~~~~~~~~~AAAAAAAAAA~~~AAAAAAAAAAA\
MMMMMMMMMMMAAAAAAAAAAAMM~~~~~~~~~~~~~~~AAAAAAA~AAAAAAAAAAAA\
MMMMMMMMMMMAAAAAAAAAAAM~~~~~~:A~~~~~~~~AAAAAA~~AAAAAAAAAAAA\
MMMMMMMMMMMMAAAAAAAAA~~~~~AAA:::~~~~~~~AAAAAA~~AAAAAAAAAAAA\
MMMMMMMMMMMMAAAAAAAA~~~~~~AA::A:::~~~~~~~AAAA~AAAAAAAAAAAAA\
MMMMMMMMMMMMAAAAAAAA~~~~~~:::AAAA:AA~~~~~~AA~~AAAAAAAAAAAAA\
MMMMMMMMMMMMMAAAAAAAM~~A:::AAAAAA::A~~~A~~A~~AAAAAAAAAAAAAA\
MMMMMMMMMMMMMAAAAAA~~~~A:AAAAAAAAA::AA~~~~~~AAAAAAAAAAAAAAA\
MMMMMMMMMMMMAAAAAMM~~AA::AAAAAAAAAA::~~~~~AAAAAAAAAAAAAAAAA\
MMMMMMMMMMMMAAAAAA~~~A::AAAAAAAAAAAA::::~~~AAAAAAAAAAAAAAAA\
MMMMMMMMMMMMAAMMMM~~~::AAAAAAAAAAAAAAAA:~~~~AAAAAAAAAAAAAAA\
MMMMMMMMMMMMMAM~M~~AA::AAAAAAAAAAAAAAAA::~~~AAAAAAAAAAAAAAA\
MMMMMMMMMMMMMMM~MM~:A:AAAAAAAAAAAAAAAAAA:T~~~AAAAAAAAAAAAAA\
MMMMMMMMMMMMMM~~~M~:::AAAAAAAAAAA:AAAAAA:T~~~AAAAAAAAAAA~~~\
MMMMMMMMMMMMMM~~~~~:AAAAAAAAAAAA:::AAAAA::T~AAAAAAAAAAAA~~~\
MMMMMMMMM~~MMM~~~~~:AAAAAAAAAAAA:::AAAAAT:~~AAAAAAAAAA~~~~~\
MMMMMM~~~~~~~M~~~~::AAAAAAAAAAAAA:AAAAAAT:T~AAAAAAAAAA~~~~~\
MM~~~~~~~~M~~~~~~~A::AAAAAAAAAAAA:AAAAAT::~~~AAAAAAA~~~~~~~\
~~~~~~~~~~~~M~~~~AAA:%A%AAAAAAAAA:AAAAA::T~~AAAAAAAA~~~~~~~\
~~~~~~~~~~~~~~~~~~A%:%%%%AAAAAAAA:::::::AA~~AAAAAAAA~~~~~~~\
~~~~~~~~~~~~~~~~~AA%:%%%AAAAAAAAAAAA:AAAA~~~AAAAAAAA~~~~~~~\
~~~M~~~~~~~~~~~~AA%%i%%%%AAAAAAAAAA::AAAA~~AAAAAAAAA~~::~~~\
~~~~~~M~~~~MM~~AA%%%i%%%AAAAAAAAAAA:AAAAA~~AAAAAAAA~~~::~~~\
~~~~~==MMMMMMMMM%%%%i%%%%AAAAAAAAA::AAA~~~~~AAAAAA~~~T:~~AA\
~~~M===MMMMMMMM%%%Sii%%%%AAAAAAAAA::AAA~~~~~AAAA~~~~~~~~~AA\
~MMM=M=MMMMMM%%%%%iiS%%%%AAAAAAAAA:AAAA~~~~~~AA~~~~~~~~AAAA\
MMMM=M==MMMM%M%%iiiS%%%%%AAAAAAAAA::AAA~~~~~~~~~~~~:::::AAA\
MMMMMMM=MM===iiii%S%%%%%AAAAAAAAAAA:AAA~~~~~~~~~~~::AAAAAAA\
MMMMMMM====%MM%%%%SS%%%%AAAAAAAAAAA::AAAAA~::~:::::AAAAAAAA\
MMMMMMM!==MM%%M%%%%%%%%%AAAAAAAAAAAA:AA::::::::AAAAAAAAAAAA\
MMMMMMMM!!MMMMM%%%%%%%%%AAAAAAAAAAAA::::AAAAAAAAAAAAAAAAAAA\
MMMMMMMMMMMMM%M%%%%%%%AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
MMMMMMMMMMMMMM%%%%%%%%AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
MMMMMMMMMMMMM%M%%%%%%AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
MMMMMMMMMMMMMM%%%%A%AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
MMMMMMMMMMMMMM%%%%%AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
MMMMMMMMMMMMM%%A%AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
",
			width : 59,
			height : 43,
            music : "jurk4",
            dark : true,
            level : 8,
            groups : ["outdoor", "dungeon", "default"],
            encounterChance : 30,
            combatMap : "desertMountainCombat",
            features : [
                {
                    type : "transition",
                    x : 55,
                    y : 32,
                    icon : "doorway.png",
                    text : "Beyond the gate, stairs descend from the Thowan Pass into the Pajoon Badlands. Will you exit the Pass?",
                    target : "west",
                    transitionType : "outdoor",
                    targetX : 37,
                    targetY : 14
                },
                {
                    type : "transition",
                    x : 4,
                    y : 32,
                    icon : "doorway.png",
                    text : "A gate indicates the Eastern border of the Thowan Moors. Will you enter the Moors?",
                    target : "west",
                    transitionType : "outdoor",
                    targetX : 34,
                    targetY : 14
                },
                {
                    type : "encounter",
                    id : "pass1",
                    x : 41,
                    y : 35,
                    icon : "baneMage.png",
                    text : "You are set upon by four vicious Bane Mages!",
                    ambushed : true,
                    gold : 73,
                    creatures : [
                        {name : "Bane Mage", bonus : 1},
                        {name : "Bane Mage"},
                        {name : "Bane Mage"},
                        {name : "Bane Mage"}
                    ],
                    items : [
                        { name : "Enchanted Boots"}
                    ]
                },
                {
                    type : "encounter",
                    id : "pass2",
                    x : 33,
                    y : 21,
                    icon : "hornedMonster.png",
                    text : "You have stumbled into the lair of two unusual, one-eyed creatures. They angrily attack!",
                    ambushed : true,
                    gold : 0,
                    creatures : [
                        {name : "Jylix"},
                        {name : "Jylix"}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "pass2Treasure",
                    x : 33,
                    y : 19,
                    icon : "chest.png",
                    text : "You raid the Jylixs' loot!",
                    ambushed : true,
                    gold : 187,
                    creatures : [
                    ],
                    items : [
                        {name : "Sword of Wasting"},
                        {name : "Helm of the Archers"},
                        {name : "Energy Vial"}
                    ]
                },
                {
                    type : "encounter",
                    id : "pass3",
                    x : 17,
                    y : 32,
                    icon : "iceMage.png",
                    text : "As the path approaches its summit, you are met by two wizards and their over-sized pets!",
                    gold : 89,
                    creatures : [
                        {name : "Ice Magus", bonus : 2, hitPoints : 30},
                        {name : "Ice Magus", bonus : 1, hitPoints : 20},
                        {name : "Yeti", bonus : 2, hitPoints : 30},
                        {name : "Yeti", bonus : 1, hitPoints : 20}
                    ],
                    items : [
                        {name : "Wand of Curing"},
                        {name : "Jewel of Energy"}
                    ]
                },
                {
                    type : "encounter",
                    id : "pass4",
                    x : 7,
                    y : 33,
                    icon : "undeadWizard.png",
                    text : "A mysterious wizard steps out to oppose you, flanked by two enormous golems!",
                    gold : 125,
                    creatures : [
                        {name : "Golem Maker", bonus : 1, hitPoints : 20},
                        {name : "Life Golem"},
                        {name : "Life Golem"}
                    ],
                    items : [
                        {name : "Dimensional Cloak"}
                    ]
                }
            ]
        },
        "sparrowCrest" : {
            name : "Sparrowcrest",
			map : "\
MMMMMMMMMMMMM=MMMMMMMMMMMMMMMMMMM\
MMMMMMMMMMMMM=MMMMMMMMMMMMMMMMMMM\
MMMMMMMMMMMM==MMMMMMMMMMMMMMMMMMM\
MMMMMMMMMMMM=MMMMMMMMMMMMMMMMMMMM\
MMMMMMMMMMMMDMMMMMMMMMMMMMMMMMMMM\
MMMMMM=MMMMM=MMMMMMMMMMMMMMMMMMMM\
MMMMM====MM!=M=M==M=!!MMMMMMMMMMM\
MMMM==MM==!=============MMMMMMMMM\
MMMMM===========M==M=====!!!!MMMM\
MMMMMM!=!!MM====M==MMMM===!MMMMMM\
MMMMMMMMMMM===M====!!!=======MMMM\
MMMMMMMMMMMMM=MM==========!MMMM~~\
~MMMMMMMMMMMMMM==========!!MMM~~~\
~~~~MMMMMM~~~M===MMM~~~=!MM~~~~/~\
~~~~~~MM~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~/~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
",
			width : 33,
			height : 19,
            music : "jurk3",
            dark : true,
            level : 8,
            groups : ["dungeon", "default"],
            encounterChance : 0,
            combatMap : "dungeonCombat",
            features : [
                {
                    type : "transition",
                    x : 12,
                    y : 4,
                    icon : "doorway.png",
                    text : "Climb down and return to the Thowan Moors?",
                    target : "west",
                    transitionType : "outdoor",
                    targetX : 29,
                    targetY : 21
                },
                {
                    type : "block",
                    x : 12,
                    y : 3
                },
                {
                    type : "sign",
                    x : 13,
                    y : 8,
                    icon : "fountain.png"
                },
                {
                    type : "sign",
                    x : 14,
                    y : 8,
                    icon : "oldMan.png",
                    action : "TALK",
                    text : "We Thowans dared to oppose Kroga, and he has all but destroyed us... our Kingdom has been nearly wiped out, save for this small, remote town.",
                    title : "Thowan Elder"
                },
                {
                    type : "dispatch",
                    x : 22,
                    y : 12,
                    icon : "man2.png",
                    action : "TALK",
                    sets : "teldenStart",
                    until : "teldenStart",
                    text : "If you seek Kroga's prisoner, then make haste to the ruins of our great city on the coast, Telden's Landing. An evil presence remains, and most likely Vella is being held there as well. Will you accept this quest?",
                    title : "Thowan Man"
                },
                {
                    type : "sign",
                    x : 22,
                    y : 12,
                    icon : "man2.png",
                    action : "TALK",
                    after : "teldenStart",
                    until : "teldenDone",
                    text : "Head South to Telden's Landing, they may not keep Vella in custody there long!",
                    title : "Thowan Man"
                },
                {
                    type : "sign",
                    x : 22,
                    y : 12,
                    icon : "man2.png",
                    action : "TALK",
                    after : "teldenDone",
                    text : "May the hearts and minds of the Thowan peoples be with you, no matter where your travels lead.",
                    title : "Thowan Man"
                },
                {
                    type : "temple",
                    x : 28,
                    y : 10,
                    icon : "temple.png",
                    cost : 145
                },
                {
                    type : "shop",
                    name : "Marketplace",
                    x : 17,
                    y : 11,
                    icon : "shop.png",
                    level : 7,
                    groups : ["default"],
                    buyRate : 111,
                    sellRate : 32
                }
            ]
        },
        "teldensLanding" : {
            name : "Telden's Landing",
			map : "\
~~~~~========================================\
~~~~!!=========(=(===========================\
~~~~~~!=======)===(==========================\
~~~~~~~!!!=====(=(===========================\
~~~~~~~XXXXX=XXX.XXX=XXXXXXXXXXXXXXXXXXXXX===\
~~~~~!!====XXX.....XXX=================!!X===\
~~~~~~!======XXP.PPX=======(=========!!!!X===\
~~~~~~~!========.=======((=====!(=====!==X===\
~~~~~~~!=======(.(=======((========!===!=X===\
~~~~~~~~==(=====.==XXPX=====(===========!X===\
~~~~~~~~!====(==.==X..X=============!=!==X===\
~~~~~~~!!=======...D..X==================X===\
~~~~~~!!=====(==.==X..X====XPDPXX========X===\
~~~~~~!(========.==XXXX===XX....X=======XX===\
~~~~~~=====(====.=========X.....X=====XXXX===\
~~~~~~==========................X==XXXX..X===\
~~~~~~~=========.=========X.....XXXX.X...X===\
~~~~~~~~========.=========X.....D....G...X===\
~~~~~~~~~~==.....=========X.....XXXX.X...X===\
~~~~~~~~~===.===..........D.....X==XXXX..X===\
~~~~~~~--....((===========X.....X=====XXXX===\
~~~~~~~~~===.==(==========XX....X=======XX===\
~~~~~~~--....(=)!==(=======XXDXXX========X===\
~~~~~~~~~===.(=((=(===(======.======(====X===\
~~~~~~~--....=(==============.===========X===\
~~~~~~~~~===.((==============.=XPX====(=!X===\
~~~~~~~=====...................D.X=====)!X===\
~~~~~~~=======.======.====.====XXX======!X===\
~~~~~~========.======.====.===========((!X===\
~~~~~~~=.......==(==X.X==X.X==========(!(X===\
~~~~~~)(.)(======!==X.X==X.X===(=====)!!!X===\
~~~~~~~(.)~~~=======XXX==XXX======!(=!!(!X===\
~~~~~=~~=~~=~~===================!!!!!!!!X===\
~~~~~==~~~===~~XXXXXXXXXXXXXXXXXXXXXXXXXXX===\
~~~~~========~~==============================\
~~~~==========~~~============================\
~~~~==~=========~~~~=========================\
",
			width : 45,
			height : 37,
            music : "jurk9",
            dark : true,
            level : 9,
            groups : ["dungeon", "default"],
            encounterChance : 20,
            combatMap : "ruinsCombat",
            features : [
                {
                    type : "transition",
                    x : 16,
                    y : 4,
                    icon : "floor.png",
                    text : "Exit the ruins of Telden's Landing?",
                    target : "west",
                    transitionType : "outdoor",
                    targetX : 32,
                    targetY : 43
                },
                {
                    type : "block",
                    x : 16,
                    y : 3
                },
                {
                    type : "encounter",
                    id : "telden1",
                    x : 16,
                    y : 5,
                    icon : "abomination.png",
                    text : "The entrance is guarded by a single child-sized creature with an enormous head!",
                    gold : 96,
                    creatures : [
                        {name : "Abomination", bonus : 1, hitPoints : 50}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "telden2",
                    x : 31,
                    y : 17,
                    icon : "slime.png",
                    text : "The door here is covered in some manner of sickly slime. It suddenly leaps from the door at you and attacks!",
                    ambushed : true,
                    gold : 17,
                    creatures : [
                        {name : "Ravenous Slime", bonus : 1, hitPoints : 20},
                        {name : "Ravenous Slime"},
                        {name : "Ravenous Slime"}
                    ],
                    items : [
                    ]
                },
                {
                    type : "sign",
                    x : 38,
                    y : 16,
                    icon : "column.png"
                },
                {
                    type : "sign",
                    x : 38,
                    y : 18,
                    icon : "column.png"
                },
                {
                    type : "encounter",
                    id : "telden3",
                    x : 38,
                    y : 17,
                    icon : "stoneGuardian.png",
                    text : "Guarding a makeshift prison cell are large warriors with stone-like skin. They attack!",
                    ambushed : true,
                    sets : "teldenDone",
                    gold : 35,
                    creatures : [
                        {name : "Stone Guardian"},
                        {name : "Stone Guardian"},
                        {name : "Stone Guardian"}
                    ],
                    items : [
                        {name : "Dark Helm"}
                    ]
                },
                {
                    type : "sign",
                    x : 40,
                    y : 17,
                    until : "teldenDone",
                    icon : "vella2.png"
                },
                {
                    type : "sign",
                    x : 40,
                    y : 16,
                    until : "teldenDone",
                    icon : "gargoyle.png"
                },
                {
                    type : "dispatch",
                    x : 39,
                    y : 19,
                    icon : "prisoner2.png",
                    sets : "blaysideStart",
                    until : "blaysideStart",
                    action : "TALK",
                    text : "I was the Lord of Telden's Landing, before Kroga and the Dragon came. I am grateful for your rescue. The Gargoyle has carried Vella off to Blayside Citadel of the Ilstock Isles. Will you sail there to save her?",
                    title : "Thowan Elder"
                },
                {
                    type : "sign",
                    x : 39,
                    y : 19,
                    icon : "prisoner2.png",
                    after : "blaysideStart",
                    until : "blaysideDone",
                    action : "TALK",
                    text : "There is a ship outside the city that you can sail to the Ilstock Isles. Go quickly, as Vella is our only chance to get to Kroga before it is too late!",
                    title : "Thowan Elder"
                },
                {
                    type : "sign",
                    x : 39,
                    y : 19,
                    icon : "prisoner2.png",
                    after : "blaysideDone",
                    action : "TALK",
                    text : "I am overjoyed to hear that Vella was saved. I wish you the best of luck on your continuing quest to defeat Kroga!",
                    title : "Thowan Elder"
                }
            ]
        },
        "citadel1" : {
            name : "Blayside Citadel",
			map : "\
=====XXXXXXXXXXX=======\
==XXXX.X.X..X.XXXX=====\
=XX....X.X..D.D..XX====\
=X.....X.X..X.X...X====\
XXXDXXDXDXXXX.XXXXXX===\
X....X........X....X===\
X....X.X..XXXXX....X===\
XX...X.XXXX...X....X===\
XXXXXX.XX.....XDXXXX===\
XXX..X.X......X.X.X====\
XXX..X.D..........D====\
XXX..X.X......X.X.X====\
XXXDXX.XX.....XDXXXX===\
XX...X.XXXX...X....X===\
X....X.X..XXXXX....X===\
X....X........X....X===\
XXDXXXDXDXXXX.XXXXXX===\
=X.....X.X..X.X...X====\
=XX....X.X..D.D..XX====\
==XXX..X.X..X.XXXX=====\
====XXXXXXXXXXXX=======\
",
			width : 23,
			height : 21,
            music : "jurk11",
            dark : true,
            level : 9,
            groups : ["dungeon", "default"],
            encounterChance : 30,
            combatMap : "dungeonCombat",
            features : [
                {
                    type : "transition",
                    x : 18,
                    y : 10,
                    icon : "doorInWall.png",
                    text : "Exit the Citadel and return to the Westerlandes?",
                    target : "west",
                    transitionType : "outdoor",
                    targetX : 29,
                    targetY : 64
                },
                {
                    type : "transition",
                    x : 19,
                    y : 3,
                    icon : "doorInWall.png",
                    text : "Exit the Citadel and return to the Westerlandes?",
                    target : "west",
                    transitionType : "outdoor",
                    targetX : 29,
                    targetY : 64
                },
                {
                    type : "block",
                    x : 19,
                    y : 10
                },
                {
                    type : "transition",
                    x : 4,
                    y : 9,
                    icon : "doorway.png",
                    text : "Climb to the second level of the Blayside Citadel?",
                    target : "citadel2",
                    transitionType : "up",
                    targetX : 3,
                    targetY : 9
                },
                {
                    type : "encounter",
                    id : "citadel1",
                    x : 16,
                    y : 10,
                    icon : "gargoyle.png",
                    text : "Four imposing Gargoyles stand in your way!",
                    gold : 96,
                    creatures : [
                        {name : "Gargoyle", bonus : 1, hitPoints : 25},
                        {name : "Gargoyle"},
                        {name : "Gargoyle"},
                        {name : "Gargoyle"}
                    ],
                    items : [
                        {name : "Amulet of Awe"}
                    ]
                },
                {
                    type : "encounter",
                    id : "citadel2",
                    x : 3,
                    y : 13,
                    icon : "skeletonKing.png",
                    text : "In this room stands an imposing monarch of the undead! An eerie chill is felt as its gaze settles upon you...",
                    gold : 185,
                    creatures : [
                        {name : "Skeleton King", bonus : 1, hitPoints : 50},
                        {name : "Wight"},
                        {name : "Wight"},
                        {name : "Wraith"},
                        {name : "Wraith"}
                    ],
                    items : [
                        {name : "Staff of Power"}
                    ]
                }
            ]
        },
        "citadel2" : {
            name : "Blayside Citadel",
			map : "\
===XXXXXXXXXXXXX===\
=XXX...........XXX=\
=X.........XXX...X=\
XX...XX......XXXXXX\
X....XX...........X\
X.........XXXXXXX.X\
XXX.............X.X\
X...........XXX.X.X\
X.XXX....XXXX.X.X.X\
X.X.X.........X.X.X\
X...X....XXXX.X.XXX\
XXXXX.......XXX...X\
X.............XXXXX\
X.........XXX.....X\
X....XX.....XXXXX.X\
XX...XX.........XXX\
=X.........XXXX..X=\
=XXX..........XXXX=\
===XXXXXXXXXXXXX===\
",
			width : 19,
			height : 19,
            music : "jurk11",
            dark : true,
            level : 9,
            groups : ["dungeon", "default"],
            encounterChance : 30,
            combatMap : "dungeonCombat",
            features : [
                {
                    type : "transition",
                    x : 3,
                    y : 9,
                    icon : "doorway.png",
                    text : "Return to the first floor of the Citadel?",
                    target : "citadel1",
                    transitionType : "down",
                    targetX : 4,
                    targetY : 9
                },
                {
                    type : "transition",
                    x : 17,
                    y : 11,
                    icon : "doorway.png",
                    text : "Ascend to the third level of Blayside Citadel?",
                    target : "citadel3",
                    transitionType : "up",
                    targetX : 5,
                    targetY : 1
                },
                {
                    type : "encounter",
                    id : "citadel3",
                    x : 16,
                    y : 11,
                    icon : "djinn.png",
                    text : "You face, among other opponents, an ethereal creature resembling a whisp of smoke. 'Let us do them in with our might, magic and trickery!' it cackles.",
                    gold : 185,
                    creatures : [
                        {name : "Djinn", hitPoints : 20},
                        {name : "Death Viper"},
                        {name : "Wyvern"},
                        {name : "Beholder"},
                        {name : "Warpling"}
                    ],
                    items : [
                        {name : "Ethereal Potion"},
                        {name : "Kingsword"}
                    ]
                }
            ]
        },
        "citadel3" : {
            name : "Blayside Citadel",
			map : "\
=XXXXXXXXX=\
XX.......XX\
X.........X\
X.........X\
X.........X\
X.........X\
X...X.X...X\
X..XXGXX..X\
X..X...X..X\
XX.X...X.XX\
=XXXXXXXXX=\
",
			width : 11,
			height : 11,
            music : "jurk11",
            dark : true,
            level : 9,
            groups : ["dungeon", "default"],
            encounterChance : 30,
            combatMap : "dungeonCombat",
            features : [
                {
                    type : "transition",
                    x : 5,
                    y : 1,
                    icon : "doorway.png",
                    text : "Descend to the second floor of the Citadel?",
                    target : "citadel2",
                    transitionType : "down",
                    targetX : 17,
                    targetY : 11
                },
                {
                    type : "encounter",
                    id : "citadel4",
                    x : 5,
                    y : 5,
                    icon : "undeadDragon.png",
                    text : "Before you is a sight you never expected to behold, an Undead Dragon! Its roar is a wheezing screech that chills your bones as it attacks!",
                    gold : 350,
                    creatures : [
                        {name : "Undead Dragon", hitPoints : 50, bonus : 1},
                        {name : "Gargoyle"},
                        {name : "Gargoyle"}
                    ],
                    items : [
                        {name : "Vial of Unmaking"},
                        {name : "Electric Cloak"}
                    ]
                },
                {
                    type : "sign",
                    x : 5,
                    y : 9,
                    icon : "vella2.png",
                    sets : "blaysideDone",
                    until : "blaysideDone",
                    action : "TALK",
                    text : "Thank you for your rescue, brave heroes of the Empire! We must move quickly, or Kroga will soon destroy the world as we know it. I must go now, but we will meet again back in Hilenika, please read the scroll that I have left!",
                    title : "Vella Trinth"
                },
                {
                    type : "dispatch",
                    x : 6,
                    y : 9,
                    icon : "scroll.png",
                    sets : "trinexusStart",
                    until : "trinexusStart",
                    action : "READ",
                    text : "Seek the 'Trinexus', a device that can return you to your homeland, then we shall meet at Castle Hilenika. The Trinexus is hidden in the Shuunia Wastes in the Southeast of the Westerlandes. Will you accept this quest?",
                    title : "Scroll"
                }
            ]
        },
        "edge" : {
            name : "The Edgeland",
			map : "\
00000000000000AAA\
00000000000000AAA\
0000000000000AAAA\
0000000000000AAAA\
0000000000000AAAA\
0000000000000AAAA\
000000000000AAAAA\
000000000000AAAAA\
0000000::0AAAAAAA\
000000::AAAAAAAAA\
0000::::::::::AAA\
000000::AAAAA:AAA\
0000000AAA::::AAA\
000000000A:AAAAAA\
000000000A::AAAAA\
000000000AA:::::A\
000000000AAAAAAAA\
0000000000AAAAAAA\
00000000000AAAAAA\
000000000000AAAAA\
0000000000000AAAA\
0000000000000AAAA\
0000000000000AAAA\
",
			width : 17,
			height : 23,
            music : "gurk2",
            dark : true,
            level : 8,
            groups : ["dungeon", "default"],
            encounterChance : 0,
            combatMap : "dungeonCombat",
            features : [
                {
                    type : "transition",
                    x : 15,
                    y : 15,
                    icon : "doorway.png",
                    text : "Exit this strange place and return to the Westerlandes?",
                    target : "west",
                    transitionType : "outdoor",
                    targetX : 4,
                    targetY : 90
                },
                {
                    type : "sign",
                    x : 7,
                    y : 11,
                    icon : "hoodedFigure.png",
                    action : "TALK",
                    text : "Approach the end of things, forego birth, love and breath. Step closer, darkness brings, the end of pain, loss and death.",
                    title : "Hooded Figure"
                },
                {
                    type : "encounter",
                    id : "edgeStaff",
                    x : 8,
                    y : 8,
                    icon : "skullStaff.png",
                    text : "You find here an unusual staff with a skull mounted at its end.",
                    gold : 0,
                    creatures : [
                    ],
                    items : [
                        {name : "Staff of the Unliving"}
                    ]
                }
            ]
        },
        "vampireCave" : {
            name : "Desolate Cave",
			map : "\
CCCCCCCCCCCCC\
CCCCCCC'''CCC\
CCCCCC'''''CC\
CCCC''''''''C\
CCCCCC'''''CC\
CC'CCC'C'C'CC\
CC''CCCC'CCCC\
CCC''''''CCCC\
CC'''CCCCCCCC\
CC'CCCCCCCCCC\
CC''CCCCCCCCC\
CCC''CCCCCCCC\
CCCC''''CCCCC\
CCCCCC'''''CC\
CCCCCCC'CC'CC\
CCCCC'''CC''C\
CCCCC''CCCCCC\
MMMMCC'CMMMMM\
MMMMMM'MMMMMM\
MMMMM==MMMMMM\
MMMM===!!MMMM\
MMMM====M!MMM\
MM!!===M!M!MM\
",
			width : 13,
			height : 23,
            music : "jurk13",
            dark : true,
            level : 8,
            groups : ["dungeon", "default"],
            encounterChance : 0,
            combatMap : "caveCombat",
            features : [
                {
                    type : "transition",
                    x : 6,
                    y : 18,
                    icon : "caveFloor.png",
                    text : "Exit this desolate cavern?",
                    target : "west",
                    transitionType : "outdoor",
                    targetX : 112,
                    targetY : 51
                },
                {
                    type : "block",
                    x : 6,
                    y : 19
                },
                {
                    type : "sign",
                    x : 5,
                    y : 20,
                    icon : "discardedSkull.png"
                },
                {
                    type : "sign",
                    x : 6,
                    y : 22,
                    icon : "discardedSkull.png"
                },
                {
                    type : "sign",
                    x : 7,
                    y : 4,
                    icon : "discardedSkull.png"
                },
                {
                    type : "sign",
                    x : 10,
                    y : 3,
                    icon : "discardedSkull.png"
                },
                {
                    type : "sign",
                    x : 2,
                    y : 5,
                    icon : "discardedSkull.png"
                },
                {
                    type : "encounter",
                    id : "vampireBats",
                    x : 7,
                    y : 14,
                    icon : "vampireBat.png",
                    text : "You are disoriented as a number of viscious bats suddenly flutter overhead and attack!",
                    gold : 0,
                    ambushed : true,
                    creatures : [
                        {name : "Vampire Bat"},
                        {name : "Vampire Bat"},
                        {name : "Vampire Bat"},
                        {name : "Vampire Bat"},
                        {name : "Vampire Bat"},
                        {name : "Vampire Bat"}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "vampires",
                    x : 8,
                    y : 1,
                    icon : "vampire.png",
                    text : "This cavern is inhabited by Vampires! They salivate at the good fortune of a tasty meal being delivered directly to their lair.",
                    gold : 0,
                    creatures : [
                        {name : "Vampire", bonus : 1, hitPoints : 15},
                        {name : "Vampire"},
                        {name : "Vampire Bat"},
                        {name : "Vampire Bat"},
                        {name : "Vampire Bat"}
                    ],
                    items : [
                        {name : "Wand of Destruction"},
                        {name : "Dark Boots"}
                    ]
                }
            ]
        },
        "shuunia" : {
            name : "Shuunia",
			map : "\
~~~~~~~~====!=!=======~~~\
~~~~~~~===!=====!====~~~~\
~~~~~~~=====!=!======~~~~\
~~~~~~~X===!X=X!===X~~~~~\
~~~~~~~XXXXXXDXXXXXX~~~~~\
~~~~~~!!!!!X===X!!!!!~~~~\
~~~~~!!!===!===!==!!!!~~~\
~~~~~!==============!~~~~\
~~~~~=============~~~~~~~\
~~~~===!!========~~=!~~~~\
~~~~~===!======!!~!==~~~~\
~~~~=====!====~~~~!=~~~~~\
~~~~======!===!!~~==~~~~~\
~~~~=!!==!!=====!!==~~~~~\
~~~~!~~==!!=========!~~~~\
~~~~=~!=======!====!~~~~~\
~~~~!~~=============!~~~~\
~~~~=~~============!~~~~~\
~~~~!~!=====!!=====!~=~~~\
~~~~=~====!=~~!====~~=~~~\
~~~~~~===!~|~~~!====~~~~~\
~~~~~====~~~~~!=====~~~~~\
~~~~~====!~~!!===!!~~~~~~\
~~~~!====!~!=====!~~~~~~~\
~~~~===!==~======~~=!~~~~\
~~~~!==!==!======--==~~~~\
~~~~~==!======!==~~=!~~~=\
~~~~~=!==========~~=~~~~~\
~~~~!=====!!======~!!~~~~\
~~~~!====~~~====!~~~~~~=~\
~~~~~!!!~~~~~==!~~~~~~~~~\
~~~~~~~~~~~~~~~~~~~~~=~~~\
~~~~~~~~~~~~~~~~~!~~~=~~~\
~~~~~~~~~~~~~~~~~~~~=!!~~\
~~~~~~~~~~~~~~~~~~~~~~~~~\
",
			width : 25,
			height : 35,
            music : "jurk15",
            dark : false,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 13,
                    y : 4,
                    icon : "doorInWall.png",
                    text : "Will you exit the Village of Shuunia?",
                    target : "west",
                    transitionType : "outdoor",
                    targetX : 114,
                    targetY : 86
                },
                {
                    type : "block",
                    x : 13,
                    y : 3
                },
                {
                    type : "sign",
                    x : 16,
                    y : 24,
                    icon : "column.png"
                },
                {
                    type : "sign",
                    x : 16,
                    y : 26,
                    icon : "column.png"
                },
                {
                    type : "sign",
                    x : 4,
                    y : 17,
                    icon : "woman2.png",
                    text : "This village has stood here for thousands of years. We have witnessed times of war, peace, famine and plenty. But now we sense that the balance of life is being disturbed in a way that could risk the fate of the world itself.",
                    title : "Woman",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 12,
                    y : 5,
                    icon : "soldier6.png",
                    text : "All who carry peace in their hearts are welcome in the humble village of Shuunia. Enter, my friends.",
                    title : "Guard",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 14,
                    y : 5,
                    icon : "soldier6.png",
                    text : "Welcome, noble travellers. Stay in our village as long as you please. But, I advise against venturing North into the Wastes, for no soul that entered that land has ever returned.",
                    title : "Guard",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 4,
                    y : 11,
                    icon : "man7.png",
                    text : "Long ago, 'Shuunia' was the name of a vast and mighty empire. It controlled the entire world via a device called the 'Trinexus'. But it inevitably fell. This village and the swamp to the north are all that remains of it.",
                    title : "Man",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 11,
                    y : 24,
                    icon : "man6.png",
                    text : "The Trinexus still exists? If so, it could be used to connect distant parts of the world, or even connect this world to others. Seek it out at great peril in the Shuunia Wastes to the North.",
                    title : "Village Elder",
                    action : "TALK"
                },
                {
                    type : "temple",
                    x : 20,
                    y : 25,
                    icon : "temple.png",
                    cost : 25
                },
                {
                    type : "shop",
                    name : "Antiquitates",
                    x : 13,
                    y : 29,
                    icon : "shop.png",
                    level : 8,
                    groups : ["default"],
                    buyRate : 110,
                    sellRate : 32
                }
            ]
        },
        "fortress" : {
            name : "Ubon Fortress",
			map : "\
====XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXX.....G......XXXXXXXXXXXXXXXXXX...XXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXX...XXXXXXX.XXXXXXXXXXXXXXX.........XXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXX..p..XXXXXX.XXXXXXXXXXXXX.............XXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXX...XXXXXXX.XXXXXXXXXXXX...............XXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXX.....XXXXXX.XXXXXXXXXXX.................XXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXGXXXXXX...XXXXXXXXXX...................XXXXXXXXXXXXXXXX\
====(XXXXXXXXXXXXXXX.XXXXXX.XXXXXXXXXXXX...................XXXXXXXXXXXXXXXX\
=====XXXXXXXXXXXXXXX.XXXXXX.XXXXXXXXXXX.....................XXXXXXXXXXXXXXX\
==(==XXXXXXXXXXXXXXX.XXXXXX.XXXXXXXXXXX.....................XXXXXXXXXXXXL.X\
====(XXXXXXXXXXXXXXX.XXXXXX.XXXXXXXXXXX.....................XXXX..XXXXXX..X\
=(==XX.............XGXXXXXX.XXXXXXXXXX.......................X....XXXXXL..X\
====G..L.L.L.L.L.L...G....X..........G.......................G.XX.G.......X\
=(==XX.............XGXXXXXXXXXXXXXXXXX.......................X....XXXXXL..X\
====(XXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXX.....................XXXX..XXXXXX..X\
==(==XXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXX.....................XXXXXXXXXXXXL.X\
=====XXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXX.....................XXXXXXXXXXXXXXX\
====(XXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXX...................XXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXGXXXXXXXXXXXXXXXXXXX...................XXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXX.....XXXXXXXXXXXXXXXXXX.................XXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXX...XXXXXXXXXXXXXXXXXXXX...............XXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXX..p..XXXXXXXXXXXXXXXXXXXX.............XXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXX...XXXXXXXXXXXXXXXXXXXXXXX.........XXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXX.....G...XXXXXXXXXXXXXXXXXXXXX...XXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXX.X..X..X..X..XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXX.X..X..X..X..XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXX.X..X..X..X..XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXX.X..X..X..X..XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXX.XGXXGXXGXXGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXX............XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
====XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
",
			width : 75,
			height : 47,
            music : "gurk7",
            dark : true,
            level : 10,
            groups : ["dungeon", "undead", "default"],
            encounterChance : 30,
            combatMap : "dungeonCombat",
            features : [
                {
                    type : "transition",
                    x : 4,
                    y : 22,
                    icon : "dungeonGate.png",
                    text : "Exit Ubon Fortress and return to the Shuunia Wastes?",
                    target : "west",
                    transitionType : "outdoor",
                    targetX : 117,
                    targetY : 65
                },
                { // Hack for a trapped user
                    type : "transition",
                    x : 1,
                    y : 1,
                    icon : "dungeonGate.png",
                    text : "Exit Ubon Fortress and return to the Shuunia Wastes?",
                    target : "west",
                    transitionType : "outdoor",
                    targetX : 117,
                    targetY : 65
                },
                {
                    type : "transition",
                    x : 73,
                    y : 22,
                    icon : "portal.png",
                    text : "You stand before the legendary 'Trinexus'. It exudes an eerie, magical glow. Dare you step inside of it?",
                    target : "trinexus",
                    transitionType : "up",
                    targetX : 6,
                    targetY : 7
                },
                {
                    type : "block",
                    x : 3,
                    y : 22
                },
                {
                    type : "sign",
                    x : 3,
                    y : 21,
                    icon : "column.png"
                },
                {
                    type : "sign",
                    x : 3,
                    y : 23,
                    icon : "column.png"
                },
                {
                    type : "sign",
                    x : 47,
                    y : 14,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 51,
                    y : 14,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 49,
                    y : 15,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 45,
                    y : 16,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 53,
                    y : 16,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 47,
                    y : 17,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 51,
                    y : 17,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 44,
                    y : 18,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 49,
                    y : 18,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 54,
                    y : 18,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 42,
                    y : 19,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 46,
                    y : 19,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 52,
                    y : 19,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 56,
                    y : 19,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 44,
                    y : 20,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 48,
                    y : 20,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 50,
                    y : 20,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 54,
                    y : 20,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 42,
                    y : 21,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 46,
                    y : 21,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 52,
                    y : 21,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 56,
                    y : 21,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 42,
                    y : 23,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 46,
                    y : 23,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 52,
                    y : 23,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 56,
                    y : 23,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 44,
                    y : 24,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 48,
                    y : 24,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 50,
                    y : 24,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 54,
                    y : 24,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 42,
                    y : 25,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 46,
                    y : 25,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 52,
                    y : 25,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 56,
                    y : 25,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 44,
                    y : 26,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 49,
                    y : 26,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 54,
                    y : 26,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 47,
                    y : 27,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 51,
                    y : 27,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 45,
                    y : 28,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 53,
                    y : 28,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 49,
                    y : 29,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 47,
                    y : 30,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 51,
                    y : 30,
                    icon : "keeper.png"
                },
                {
                    type : "encounter",
                    id : "fortress1",
                    x : 19,
                    y : 22,
                    icon : "jadeGolem.png",
                    text : "You are set upon by a squadron of Jade Golems!",
                    gold : 252,
                    creatures : [
                        {name : "Jade Golem", bonus : 1, hitPoints : 25},
                        {name : "Jade Golem"},
                        {name : "Jade Golem"},
                        {name : "Jade Golem"}
                    ],
                    items : [
                        {name : "Vial of Unmaking"}
                    ]
                },
                {
                    type : "encounter",
                    id : "fortress2",
                    x : 49,
                    y : 22,
                    icon : "lich.png",
                    text : "An unnerving ceremony is underway, officiated by an impossibly ancient undead wizard. It shrieks and howls at your interruption!",
                    sets : "lichKilled",
                    gold : 475,
                    creatures : [
                        {name : "Lich", bonus : 1, hitPoints : 25},
                        {name : "Keeper"},
                        {name : "Keeper"},
                        {name : "Keeper"},
                        {name : "Keeper"}
                    ],
                    items : [
                        {name : "Soul Prism"}
                    ]
                },
                {
                    type : "sign",
                    x : 51,
                    y : 22,
                    icon : "undeadKing.png",
                    altIcon : "ancientKey.png",
                    title : "Undead Emperor",
                    after : "lichKilled",
                    sets : "trinexusKey",
                    until : "trinexusKey",
                    text : "Before you stands an ancient undead emperor! 'Make haste, before the Lich reforms, use this key to access the Trinexus...' The emperor collapses into a pile of bones and dust!",
                    action : "TALK"
                },
                {
                    type : "barrier",
                    x : 61,
                    y : 22,
                    icon : "dungeonGate.png",
                    until : "trinexusKey",
                    text : "This gate is locked and you cannot force it!",
                    title : "Gate"
                },
                {
                    type : "alert",
                    x : 61,
                    y : 22,
                    icon : "dungeonGate.png",
                    sets : "trinexusDone",
                    until : "trinexusDone",
                    after : "trinexusKey",
                    text : "You use the key from the undead emperor to unlock the heavy gate.",
                    title : "Gate"
                }
            ]
        },
        "trinexus" : {
            name : "The Trinexus",
			map : "\
?????????????\
?```?```?```?\
?```?```?```?\
?```?```?```?\
??[???[???[??\
??`???`???`??\
??`````````??\
?????```?????\
?????????????\
",
			width : 13,
			height : 9,
            music : "gurk8",
            dark : true,
            level : 8,
            groups : ["dungeon", "default"],
            encounterChance : 0,
            combatMap : "darkCombat",
            features : [
                {
                    type : "transition",
                    x : 2,
                    y : 2,
                    icon : "portal.png",
                    text : "Travel via the Trinexus to Castle Hilenika?",
                    target : "hilenika",
                    transitionType : "city",
                    targetX : 26,
                    targetY : 4
                },
                {
                    type : "transition",
                    x : 6,
                    y : 2,
                    icon : "portal.png",
                    text : "Travel via the Trinexus to Ubon Fortress?",
                    target : "fortress",
                    transitionType : "city",
                    targetX : 73,
                    targetY : 22
                },
                {
                    type : "transition",
                    x : 10,
                    y : 2,
                    icon : "portal.png",
                    text : "Travel via the Trinexus to the Forbidden World?",
                    target : "forbidden",
                    transitionType : "dungeon",
                    targetX : 9,
                    targetY : 32
                },
                {
                    type : "barrier",
                    x : 10,
                    y : 4,
                    icon : "darkDoor.png",
                    until : "sewersDone",
                    text : "You cannot force this door open as it is held fast, seemingly by some form of powerful magic!",
                    title : "Door"
                },
                {
                    type : "alert",
                    x : 10,
                    y : 4,
                    icon : "darkDoor.png",
                    after : "sewersDone",
                    sets : "forbiddenOpen",
                    until : "forbiddenOpen",
                    text : "As you hold out the key, it leaps from your hands, inserts itself into the lock and the big door swings open!",
                    title : "Door"
                },
                {
                    type : "encounter",
                    id : "trinexusBattle",
                    x : 10,
                    y : 3,
                    icon : "nightmare2.png",
                    text : "As giant, shadowy figures approach, you feel an unbearable evil creep towards you... was it a mistake to open this door?",
                    gold : 138,
                    creatures : [
                        {name : "Nightmare", bonus : 1, hitPoints : 25},
                        {name : "Nightmare"},
                        {name : "Nightmare"}
                    ],
                    items : [
                        {name : "Dark Armor", bonus : 1}
                    ]
                }
            ]
        },
        "forbidden" : {
            name : "Forbidden World",
			map : "\
@@@@@@@?????@@@@@@@\
@@@@@@@?```?@@@@@@@\
@@@@@@@?```?@@@@@@@\
@@@@@@@?```?@@@@@@@\
@@@@@@@??`??@@@@@@@\
@@@@@@@@@]@@@@@@@@@\
@@@@@@@??[??@@@@@@@\
@@@@@@@?```?@@@@@@@\
@@@@@@@?```?@@@@@@@\
@@@@`@@`````@@`@@@@\
@@@@@@@?```?@@@@@@@\
@@@@@@@?```?@@@@@@@\
@`@@`@@@@`@@@@`@@`@\
@@@@``@@@]@@@``@@@@\
@@@@```````````@@@@\
@@@@@`````````@@@@@\
@???@@```````@@???@\
????`@```````@`????\
?????@@`???`@@?????\
?????`@`````@`?????\
??????@@```@@??????\
??????`@@]@@`??????\
@@@?????@]@?????@@@\
@@@@@@@@@]@@@@@@@@@\
?@@@@@@`@]@`@@@@@@?\
????@@@@@]@@@@@????\
????????@]@????????\
????????```????????\
?????????`?????????\
?????????`?????????\
?????????[?????????\
????????```????????\
????????```????????\
????????```????????\
???????????????????\
",
			width : 19,
			height : 35,
            music : "jurk11",
            dark : true,
            level : 10,
            groups : ["dungeon", "undead", "default"],
            encounterChance : 30,
            combatMap : "darkCombat",
            features : [
                {
                    type : "sign",
                    x : 7,
                    y : 24,
                    icon : "undeadDragon.png"
                },
                {
                    type : "sign",
                    x : 11,
                    y : 24,
                    icon : "undeadDragon.png"
                },
                {
                    type : "sign",
                    x : 12,
                    y : 21,
                    icon : "nightmare2.png"
                },
                {
                    type : "sign",
                    x : 13,
                    y : 19,
                    icon : "nightmare2.png"
                },
                {
                    type : "sign",
                    x : 14,
                    y : 17,
                    icon : "nightmare2.png"
                },
                {
                    type : "sign",
                    x : 4,
                    y : 17,
                    icon : "nightmare2.png"
                },
                {
                    type : "sign",
                    x : 5,
                    y : 19,
                    icon : "nightmare2.png"
                },
                {
                    type : "sign",
                    x : 6,
                    y : 21,
                    icon : "nightmare2.png"
                },
                {
                    type : "sign",
                    x : 4,
                    y : 9,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 14,
                    y : 9,
                    icon : "keeper.png"
                },
                {
                    type : "sign",
                    x : 17,
                    y : 12,
                    icon : "undeadKing.png"
                },
                {
                    type : "sign",
                    x : 1,
                    y : 12,
                    icon : "undeadKing.png"
                },
                {
                    type : "transition",
                    x : 9,
                    y : 32,
                    icon : "portal.png",
                    text : "Step back into the Trinexus?",
                    target : "trinexus",
                    transitionType : "up",
                    targetX : 10,
                    targetY : 2
                },
                {
                    type : "barrier",
                    x : 9,
                    y : 6,
                    icon : "darkDoor.png",
                    until : "gameOver",
                    text : "You cannot force this door open as it is held fast, seemingly by some form of powerful magic!",
                    title : "Door"
                },
                {
                    type : "encounter",
                    id : "krogaBattle",
                    x : 9,
                    y : 14,
                    icon : "kroga.png",
                    text : "While horrifically transfigured, you somehow recognize Kroga's voice as he shouts, 'When I unite the three realms, I shall be as great a ruler as the emperors of old!' He and his minions attack!",
                    ambushed : false,
                    gold : 0,
                    creatures : [
                        {name : "Kroga Trinth"},
                        {name : "Red Guard"},
                        {name : "Red Guard"},
                        {name : "Keeper"},
                        {name : "Keeper"}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "krogaTreasure",
                    x : 9,
                    y : 12,
                    icon : "blackBox.png",
                    text : "Congratulations, Kroga has been defeated, and the world has been saved! Inside, you find copious amounts of gold and a wondrous amulet.",
                    sets : "gameOver",
                    gold : 1250,
                    creatures : [
                    ],
                    items : [
                        {name : "Destiny Amulet"}
                    ]
                },
                {
                    type : "sign",
                    icon : "author.png",
                    title : "Thanks!",
                    text : "Thanks for beta testing, hope you enjoyed it! The full version will have a bonus dungeon here. Please give us feedback so we can make the game better!",
                    action : "THANKS"
                },

                {
                    type : "transition",
                    x : 9,
                    y : 2,
                    icon : "doorway.png",
                    text : "Your glorious quest is completed, yet the Forbidden World remains unexplored... will you venture forth?",
                    target : "bonus1",
                    transitionType : "down",
                    targetX : 4,
                    targetY : 6
                }
            ]
        },
        "bonus1" : {
            name : "Forbidden World",
			map : "\
*************************************\
*************************************\
*************************************\
*************************************\
********`*********`******************\
****`````````*****``````*************\
***?`?***`**`*****`****`******????***\
***???***`**```````**```******?``?***\
*********`**`*****`**`*****```[``?***\
*********`**`*****`**`***```**?``?***\
*********`***********`````****????***\
*************************************\
*************************************\
*************************************\
*************************************\
",
			width : 37,
			height : 15,
            music : "chip3",
            dark : true,
            level : 10,
            groups : ["dungeon", "undead", "bonus", "default"],
            encounterChance : 35,
            combatMap : "darkCombat",
            features : [
                {
                    type : "transition",
                    x : 4,
                    y : 6,
                    icon : "doorway.png",
                    text : "Climb ack up to Kroga's chamber?",
                    target : "forbidden",
                    transitionType : "up",
                    targetX : 9,
                    targetY : 2
                },
                {
                    type : "encounter",
                    id : "keendu",
                    x : 31,
                    y : 8,
                    icon : "evilOrb.png",
                    text : "A hovering orb grimaces at you and spits!",
                    ambushed : false,
                    gold : 1873,
                    creatures : [
                        {name : "Keendu"},
                        {name : "Glomorg"},
                        {name : "Heedron"}
                    ],
                    items : [
                        {name: "Mystic Boots"}
                    ]
                },
                {
                    type : "transition",
                    x : 32,
                    y : 8,
                    icon : "doorway.png",
                    text : "A strange, sulfurous odor greets you as you approach this doorway. Will you enter?",
                    target : "bonus2",
                    transitionType : "down",
                    targetX : 1,
                    targetY : 4
                }
            ]
        },
        "bonus2" : {
            name : "Forbidden World",
			map : "\
??????????****************?????????????????????????????????????????????????\
????????*******************?```????????????????????????????????????????????\
??????????***************???```?????```````??????????````?????????????```??\
???????????***************?``???????`?????`??????????````?????????????```??\
?`````??```**************```??`??`??`?????`???????????[?????`````??``````??\
?????`??`??*************``???`````````????`?``````````````??`````??`???????\
?????`??`???*************`????```````?????`?`?`?`?`??????`??`````??`???????\
?????`??`???*************]***??`````?????*`??????????????`??[??????`???????\
?????`??`??***********???`??*****`********``````````?????`??`??????`???????\
???```??`?****```*?***???``?????*`*????*?***???`???`?????`??`????```???????\
????```````**`````????????`````?*]*?`??*??**???`???`?``[``````???```???????\
????`?????`**``````???????`???`?*]*?`??????????`````?``??????`??````???????\
????```???****`````[```````???`?*`*?`??????????????`?????????`?```~``??????\
??????`????**`````????????????`?*`*?`??????????????`?????????```~~~~`??????\
??????`?????**``*`*?????```````````````````????????`????????```~~~~``??????\
??????`?????**]****???```````````````````````??????`????????```~~````??????\
?????``?????**`**????`````````````````````````?????`????????```~~~~``??????\
??????````????`*?????`````````````````````````?????`??????????``~~~`???????\
?????????`????`?????```````````````````````````???`````???????```~~`???????\
?????????`????[?????```````````````````````````???`???`?????```~~~`````????\
??`````??`???```????`````````````?`````````````???`???`?????```~````??``???\
??????`??`???`?`????````````````***````````````???`???`????``````??????`???\
??????`??`???```????````````````***````````````???`??``????``````??????`???\
??????`??`???`?`????`````````````?`````````````??``???`????````????????`???\
???```````???```????```````````````````````````??`????`?????`??????????`???\
???`???????????????````````````````````````````??`?*```?????`??????????`???\
???`????????????````?`````````````````````````???`????`?????`??????????`???\
???`????????????`????`````````````````````````???````````````??????????`???\
???`````````????`?????```````````````````````????????????????????*`*???``??\
??????`??`?`????`???????```````````````````???????????``????????**]**???`??\
??????`??```????`?????????????????????????????????????`???????????`?????`??\
??????`?????????`???????????????????????????????````??`???????????[?????`??\
??????`?????????`??????```???```???```???```????`??`??`??``???????```````??\
??????`????``````?????`````?`````?`````?`````???`??`??`??```???????????????\
??????`????`???????`````@`````@`````@`````@```````````````?``??????????????\
??????````?`?`?????`??`````?`````?`````?`````?????`????`????``?????????????\
?????????`?`?```````???```???```???```???```??????`????`?????``????????????\
?????????`?`????`??`???????????????????????????````????`??????``???????????\
?????????`?`?```````???????????????????????????`??????```??????``??????????\
?????????`?`????`??`???```????``````???????????``????`````??????``````````?\
???```````?`````````?????`????`????``?``??????```???```````??????????????`?\
???`????????????`??`?????`???``????`````???``?`???????```????????????????`?\
???`??????????````````````???```???????````````????????`?????????????????`?\
???`??????????`??????????????????????????????????????????????????????????`?\
???`?????????????????????????????????????????????????????????????????????`?\
???`[```````````````````````````````````````````````````````````````````[`?\
?????????????????????????????????????????????????????????????????????????`?\
???????????????????????????????????????????????????```````````````````````?\
???????????????????????????????????????????????????????????????????????????\
",
			width : 75,
			height : 49,
            music : "chip3",
            dark : true,
            level : 11,
            groups : ["dungeon", "undead", "bonus", "default"],
            encounterChance : 35,
            combatMap : "darkCombat",
            features : [
                {
                    type : "transition",
                    x : 1,
                    y : 4,
                    icon : "doorway.png",
                    text : "Ascend to the higher level?",
                    target : "bonus1",
                    transitionType : "up",
                    targetX : 32,
                    targetY : 8
                },
                {
                    type : "encounter",
                    id : "mlonnix",
                    x : 60,
                    y : 23,
                    icon : "monster3.png",
                    text : "A very unusual creature looks at you with a curious expression... and then suddenly attacks!",
                    ambushed : true,
                    gold : 2384,
                    creatures : [
                        {name : "Mlonnix"},
                        {name : "Keeper"},
                        {name : "Keeper"},
                        {name : "Keeper"},
                        {name : "Keeper"}
                    ],
                    items : [
                        {name: "Hovering Shield", bonus : 1},
                        {name: "Vial of Embalming", bonus : 1}
                    ]
                },
                {
                    type : "transition",
                    x : 65,
                    y : 15,
                    icon : "doorway.png",
                    text : "You are surprised to encounter fresh water in this miserable place. A long staircase leads up, will you ascend?",
                    target : "bonus3",
                    transitionType : "up",
                    targetX : 53,
                    targetY : 29
                },
                {
                    type : "transition",
                    x : 66,
                    y : 28,
                    icon : "city.png",
                    text : "There is a small town here, will you enter?",
                    target : "bonusTown",
                    transitionType : "town",
                    targetX : 5,
                    targetY : 4
                }
            ]
        },
        "bonus3" : {
            name : "Forbidden World",
			map : "\
***********************************************************\
***********************************************************\
***********************************************************\
***********************************************************\
******````````````````````?`***`?````````````````````******\
*****`````````````````````````````````````````````````*****\
****```````````````````````?```?```````````````````````****\
****````````````````````?`````````?````````````````````****\
****````*********************]*********************````****\
****````*????????????????????`????????????????????*````****\
****````*?=======!=======!!`````!!====!!!===!!!=!?*````****\
****````*?!===!=============```==========!!====!=?*????****\
****````*?==!======!=!====!==`==!===============!?*?``?****\
****````*?===================`===========!=======?*````****\
****````*?======!==========!=`=!==========!==!===?*````****\
****````*?===================`=======!===========?*````****\
****````*?=!==!====~~========`==============!====?*````****\
****````*?=======~=~~~~~====!`!========!=========?*````****\
****````*?!======~~~~~=~=====`================!==?*````****\
****````*?=====~~~~~~~========================!==?*````****\
****````*?!=====~~~~~~~~=========!========!======?*````****\
****````*?======~~~~~~~!===========!==~~~======!=?*````****\
****````*?=====~~~~~~!==!==============!~=~======?*````****\
****````*?=====~~~~~~~!!!=======!=====~~~|~!!==!=?*````****\
****````*?====~~~~~~==!!!!==========!~~~~~~~!!!==?*````****\
****````*?=!=~~~~~~~~===!=!======!==!~~~~~~~~!===?*````****\
****````*?===~~~~~~~~~=!!!!!=====!==~~~~~~~~~!===?*````****\
****````*?=====~~~~~~~~=!!==========~~~~~~~~~!=!=?*````****\
****````*?====~~~~~~~~~!!=======!!==!~~~~~~~~~===?*````****\
****````*?===~~~~~~~~~~~======!=!===~~~~~~~~~~~==?*````****\
****````*?!==~~~~~~~~~~~==!===!!=====~~~~~~~~~===?*````****\
****````*?==~~~~=~~!=~~~~=!==!!=========~~~~~~~=!?*````****\
****````*?!===~===~=~~~~~=============~~~~~~~~===?*````****\
****````*?=!====~~~~~~~=============~~~~~~~~~~!==?*````****\
****````*?=!====~~~~~~~============~~~~~~~~~~!===?*````****\
****````*?==!=!~~~~~~==============~~~~~~~~~~~===?*````****\
****````*?====!!~~~~~=======~|~~~====~~~~`~~~~===?*````****\
****````*?==!==!!=~~=======~~===~===~~~~~~~~~~~~=?*````****\
****````*?==!=====~~=~~=~~~~====~~~=~~~~~~~~~~~==?*````****\
****````*?=========~~~~~~========~~~~~~~~~~=~~~==?*````****\
****````*?===!=======~====!=========~~~~~~==~~===?*````****\
****````*?==!==!=====================~~~~~~==~===?*````****\
****````*?=!!=========!====??[??==!==~~~~~~!=~~~=?*````****\
****````*?!!!==!=========???```???===~~~~~~======?*````****\
****````*?!!!!!!=!=======?```````?======~~~~===!=?*````****\
****````*?!!!!!!=========?`*```*`?===============?*````****\
****````*?!!!!!!!!===!!==?```````?=========!=====?*````****\
****````*?!!!!!!!!!======?`?```?`?=====!=========?*````****\
****````*?!!!!!!!!!======?`?????`?==============!?*````****\
****````*?????????????????????????????????????????*````****\
****````*******************************************````****\
****```````````````````````````````````````````````````****\
****```````````````````````````````````````````````````****\
*****`````````````````````````````````````````````````*****\
******```````````````````````````````````````````````******\
***********************************************************\
***********************************************************\
***********************************************************\
***********************************************************\
",
			width : 59,
			height : 59,
            music : "chip3",
            dark : true,
            level : 12,
            groups : ["dungeon", "undead", "bonus", "default"],
            encounterChance : 40,
            combatMap : "darkCombat",
            features : [
                {
                    type : "transition",
                    x : 53,
                    y : 29,
                    icon : "doorway.png",
                    text : "Descend?",
                    target : "bonus2",
                    transitionType : "down",
                    targetX : 65,
                    targetY : 15
                },
                {
                    type : "encounter",
                    id : "authorEnd",
                    x : 29,
                    y : 47,
                    icon : "author.png",
                    text : "A voice intones, \"Honestly, stop playing! I've completely run out of ideas!\"",
                    ambushed : true,
                    gold : 16384,
                    creatures : [
                        {name : "Author"},
                        {name : "Flame Daemon"},
                        {name : "Vampire"},
                        {name : "Beholder"},
                        {name : "Ice Golem"},
                        {name : "Oliphant"},
                        {name : "Kobold Mystic"}
                    ],
                    items : [
                        {name: "Badge of Honor"}
                    ]
                }
            ]
        },
        "bonusTown" : {
            name : "Forbidden Town",
			map : "\
???????????\
??```````??\
?````*````?\
?```***```?\
??``*`*``??\
???`````???\
??```````??\
???`?`?`???\
???`?`?`???\
?????`?????\
???????????\
",
			width : 11,
			height : 11,
            music : "gurk8",
            dark : true,
            level : 11,
            groups : ["dungeon", "undead", "default"],
            encounterChance : 0,
            combatMap : "darkCombat",
            features : [
                {
                    type : "temple",
                    x : 5,
                    y : 9,
                    icon : "temple.png",
                    cost : 777
                },
                {
                    type : "shop",
                    name : "Spoils and Treasures",
                    x : 3,
                    y : 8,
                    icon : "shop.png",
                    level : 10,
                    groups : ["default"],
                    buyRate : 125,
                    sellRate : 25
                },
                {
                    type : "shop",
                    name : "Rations and Elixirs",
                    x : 7,
                    y : 8,
                    icon : "shop.png",
                    level : 8,
                    groups : ["potion"],
                    buyRate : 120,
                    sellRate : 15
                },
                {
                    type : "transition",
                    x : 5,
                    y : 4,
                    icon : "doorway.png",
                    text : "Return to the Forbidden World?",
                    target : "bonus2",
                    transitionType : "dungeon",
                    targetX : 66,
                    targetY : 28
                }
            ]
        },
        "outdoorCombat" : {
            name: "Outdoor Combat",
            width: 9,
            height: 8,
            map: "\
!=======!\
!=======!\
!=======!\
!=======!\
!=======!\
!=======!\
!=======!\
!=======!\
"
        },
        "ruinsCombat" : {
            name: "Ruins Combat",
            width: 9,
            height: 8,
            map: "\
X=======X\
X=======X\
X=======X\
X=======X\
X=======X\
X=======X\
X=======X\
X=======X\
"
        },
        "dungeonCombat" : {
            name: "Dungeon Combat",
            width: 9,
            height: 8,
            map: "\
X.......X\
X.......X\
X.......X\
X.......X\
X.......X\
X.......X\
X.......X\
X.......X\
"
        },
        "darkCombat" : {
            name: "Dark Combat",
            width: 9,
            height: 8,
            map: "\
?```````?\
?```````?\
?```````?\
?```````?\
?```````?\
?```````?\
?```````?\
?```````?\
"
        },
        "caveCombat" : {
            name: "Cave Combat",
            width: 9,
            height: 8,
            map: "\
C'''''''C\
C'''''''C\
C'''''''C\
C'''''''C\
C'''''''C\
C'''''''C\
C'''''''C\
C'''''''C\
"
        },
        "wetCaveCombat" : {
            name: "Wet Cave Combat",
            width: 9,
            height: 8,
            map: "\
~'''''''~\
~'''''''~\
~'''''''~\
~'''''''~\
~'''''''~\
~'''''''~\
~'''''''~\
~'''''''~\
"
        },
        "shipCombat" : {
            name: "Ship Combat",
            width: 9,
            height: 8,
            map: "\
ldddddddr\
ldddddddr\
ldddddddr\
ldddddddr\
ldddddddr\
ldddddddr\
ldddddddr\
ldddddddr\
"
        },
        "swampCombat" : {
            name: "Swamp Combat",
            width: 9,
            height: 8,
            map: "\
m#######m\
m#######m\
m#######m\
m#######m\
m#######m\
m#######m\
m#######m\
m#######m\
"
        },
        "swampRiverCombat" : {
            name: "Swamp Combat",
            width: 9,
            height: 8,
            map: "\
R#######R\
R#######R\
R#######R\
R#######R\
R#######R\
R#######R\
R#######R\
R#######R\
"
        },
        "tundraCombat" : {
            name: "Tundra Combat",
            width: 9,
            height: 8,
            map: "\
SiiiiiiiS\
SiiiiiiiS\
SiiiiiiiS\
SiiiiiiiS\
SiiiiiiiS\
SiiiiiiiS\
SiiiiiiiS\
SiiiiiiiS\
"
        },
        "iceCombat" : {
            name: "Ice Combat",
            width: 9,
            height: 8,
            map: "\
%iiiiiii%\
%iiiiiii%\
%iiiiiii%\
%iiiiiii%\
%iiiiiii%\
%iiiiiii%\
%iiiiiii%\
%iiiiiii%\
"
        },
        "iceMazeCombat" : {
            name: "Ice Maze Combat",
            width: 9,
            height: 8,
            map: "\
wfffffffw\
wfffffffw\
wfffffffw\
wfffffffw\
wfffffffw\
wfffffffw\
wfffffffw\
wfffffffw\
"
        },
        "desertCombat" : {
            name: "Desert Combat",
            width: 9,
            height: 8,
            map: "\
T:::::::T\
T:::::::T\
T:::::::T\
T:::::::T\
T:::::::T\
T:::::::T\
T:::::::T\
T:::::::T\
"
        },
        "desertMountainCombat" : {
            name: "Desert Mountain Combat",
            width: 9,
            height: 8,
            map: "\
A:::::::A\
A:::::::A\
A:::::::A\
A:::::::A\
A:::::::A\
A:::::::A\
A:::::::A\
A:::::::A\
"
        },
        "arenaCombat" : {
            name: "Arena Combat",
            width: 9,
            height: 8,
            map: "\
X:::::::X\
X:::::::X\
X:::::::X\
X:::::::X\
X:::::::X\
X:::::::X\
X:::::::X\
X:::::::X\
"
        },
        "splashScreen" : {
            name: "Splash Screen",
            width: 9,
            height: 9,
			map : "\
XXXXXXXXX\
..X...X..\
..D...D..\
XXXXGXXXX\
~~~~|~~~~\
T::::::TT\
::::::TTT\
::::::::T\
T::::TTTT\
",
			width : 9,
			height : 9,
            features : [
                {
                    type : "sign",
                    x : 1,
                    y : 6,
                    icon : "gurk_01.png"
                },
                {
                    type : "sign",
                    x : 2,
                    y : 6,
                    icon : "gurk_02.png"
                },
                {
                    type : "sign",
                    x : 3,
                    y : 6,
                    icon : "gurk_03.png"
                },
                {
                    type : "sign",
                    x : 4,
                    y : 6,
                    icon : "gurk_04.png"
                },
                {
                    type : "sign",
                    x : 1,
                    y : 7,
                    icon : "gurk_05.png"
                },
                {
                    type : "sign",
                    x : 2,
                    y : 7,
                    icon : "gurk_06.png"
                },
                {
                    type : "sign",
                    x : 3,
                    y : 7,
                    icon : "gurk_07.png"
                },
                {
                    type : "sign",
                    x : 4,
                    y : 7,
                    icon : "gurk_08.png"
                },
                {
                    type : "sign",
                    x : 1,
                    y : 2,
                    icon : "lich.png"
                },
                {
                    type : "sign",
                    x : 7,
                    y : 1,
                    icon : "discardedSkull.png"
                },
                {
                    type : "sign",
                    x : 3,
                    y : 1,
                    icon : "column.png"
                },
                {
                    type : "sign",
                    x : 5,
                    y : 1,
                    icon : "column.png"
                },
                {
                    type : "sign",
                    x : 4,
                    y : 1,
                    icon : "undeadKing.png"
                },
                {
                    type : "sign",
                    x : 7,
                    y : 7,
                    icon : "temple.png"
                },
                {
                    type : "sign",
                    x : 3,
                    y : 5,
                    icon : "oliphant4.png"
                },
                {
                    type : "sign",
                    x : 5,
                    y : 5,
                    icon : "oliphant4.png"
                }
            ]
        }
    },

    //// Game Start Data

    start : [
        {
            map : "rivercross",
            x : 9,
            y : 9,
            gold : 20
        },
        {
            after : "westGate",
            map : "herazni",
            x : 9,
            y : 11,
            gold : 20
        },
        {
            after : "trinexusStart",
            map : "shuunia",
            x : 13,
            y : 7,
            gold : 20
        }
    ]
};
