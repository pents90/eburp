var Data = {

    //// Miscellaneous icons referred to by the game directly.

    icons : { // You can change these, but don't get rid of any of them.
        "party" : "party.png",
        "ship" : "ship.png",
        "gold" : "gold.png",
        "death" : "skull.png",
        "animation" : "animThrowingBone.png", // This is just for testing, it isn't really used anywhere.
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

    //// Experience Levels, the amount of experience required to be at a certain level.

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
        100000000// END
    ],

    splashMusic : "gurkdemo7", // Music played during splash screen and character creation
    combatMusic : "gurkdemo8", // Music played when in combat
    boatMusic : "gurkdemo7", // Music played while on a ship

    //// Level transformations, each row adds to 10,000, maps level -> level for encounters, treasure, etc.

    levelTransformations : [
        [9300, 500, 199, 1, 0, 0, 0, 0, 0, 0, 0, 0],           // 1
        [4650, 4650, 500, 199, 1, 0, 0, 0, 0, 0, 0, 0],        // 2
        [3100, 3100, 3100, 500, 199, 1, 0, 0, 0, 0, 0, 0],     // 3
        [600, 2900, 2900, 2900, 500, 199, 1, 0, 0, 0, 0, 0],   // 4 (For example, this means that if the map is level 4, then there is a 1 in 10k chance that a level 7 creature will appear!)
        [100, 600, 2850, 2850, 2900, 500, 199, 1, 0, 0, 0, 0], // 5 (But the good news is, if you kill a creature that is level 5, there is a 1 in 10k chance that a level 8 item will appear as treasure!)
        [20, 80, 600, 2850, 2850, 2900, 500, 199, 1, 0, 0, 0], // 6
        [0, 20, 80, 600, 2850, 2850, 2900, 500, 199, 1, 0, 0], // 7
        [0, 0, 20, 80, 600, 2850, 2850, 2900, 500, 199, 1, 0], // 8
        [0, 0, 0, 20, 81, 600, 2850, 2850, 2900, 499, 199, 1], // 9
        [0, 0, 0, 0, 20, 82, 600, 2850, 2850, 2900, 499, 199], // 10
        [0, 0, 0, 0, 0, 40, 162, 699, 2850, 2850, 2900, 499],  // 11
        [0, 0, 0, 0, 0, 0, 80, 364, 956, 2850, 2850, 2900]     // 12
    ],

    //// Chance out of 1000 of a creature having treasure, by level. Anything over level 10 is the same as level 10.

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

    //// Character Classes

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
            "after" : "won", // Only appears after the game is won
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
            "name" : "Bag of Holding", // A 'hack' placeholder party member that just holds items.
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

    // Hero spells (just mage spells in this demo game)
    spells : [
        {
            "name" : "Life Touch",
            "who" : "mage", // Can either be a general class like 'mage' or a specific class like 'Wizard'
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

        //// Item/Creature Spells
        {
            "name" : "Basic Heal",
            "level" : 1000,
            "spellPoints" : 1,
            "type" : "heal",
            "target" : "self",
            "minAmount" : 2,
            "maxAmount" : 6,
            "modifyAmount" : 1 // the amount that a bonus of +1 affects the amounts
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
            "name" : "Jellyfish Sting",
            "level" : 1000,
            "spellPoints" : 2,
            "type" : "afflict",
            "target" : "touch",
            "effect" : "Poisoned",
            "value" : 3,
            "minAmount" : 2,
            "maxAmount" : 4
        }

    ],

    //// Items

    items : [
        //// Level 1
        {
            "name" : "Short Sword",
            "type" : "weapon",
            "icon" : "shortSword.png",
            "rarity" : 900, // Chance of the item coming up as random treasure, 1000 is about average, lower is rarer.
            "groups" : ["default", "weapon"], // These groups indicate on which maps (and in which shops) the item should appear.
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 4,
            "baseValue" : 12, // Base value to buy/sell
            "level" : 1,
            "usedBy" : ["warrior"] // Only general classes here, no specific allowed
        },
        {
            "name" : "Crude Club",
            "type" : "weapon",
            "icon" : "club.png",
            "rarity" : 1500,
            "groups" : ["default", "weapon"],
            "meleeMinDamage" : 1,
            "meleeMaxDamage" : 3,
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
            "icon" : "sharkbow.png",
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
        //// Level 7
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
        }

    ],

    //// Creatures

    creatures : [
        //// LEVEL 1
        {
            "name" : "Goblin Scout",
            "icon" : "goblinScout.png",
            "groups" : ["goblin", "dungeon"], // These groups are used to specify in which maps they should appear
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
                    "weight" : 40 // Relative chance that they use this spell, moving and attacking have default weights too and can be overridden
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
            "groups" : ["outdoor", "desert"],
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
            "meleeMinDamage" : 2,
            "meleeMaxDamage" : 6,
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
                    "weight" : 10
                }
            ],
            "limit" : true,
            "description" : "One of the most frightening incarnations of the undead, the Ghoul can emit a fearsome shriek that will freeze an opponent in its tracks."
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
            "groups" : ["outdoor", "dungeon", "desert"],
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
        //// LEVEL 6
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
            "groups" : ["outdoor", "dungeon"],
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
            "name" : "Vezu",
            "icon" : "vezu.png",
            "groups" : ["default"],
            "meleeMinDamage" : 12,
            "meleeMaxDamage" : 20,
            "rangeMinDamage" : 9,
            "rangeMaxDamage" : 15,
            "target" : "area",
            "level" : 1000, // Use a high level to ensure a special creature never shows up in a random encounter
            "rangeAnimation" : "animFireBall.png",
            "minHitPoints" : 110,
            "maxHitPoints" : 110,
            "experienceValue" : 1500,
            "numAttacks" : 1,
            "numMoves" : 2,
            "armorClass" : 12,
            "resistance" : 7,
            "limit" : true,
            "hitModifier" : 14,
            "description" : "Vezu the Ancient was thought to be destroyed when last he threatened the Three Kingdoms, but he survived inside the heart of the volcano and has emerged once again!"
        }

    ],

    //// Map tile definitions

    tiles : { // If you are using the MapEditor to make your maps, then these definitions must match tiles.txt, which is not cool at all.
        "X" : {icon : "wall.png", passable : false, shipPassable : false, opaque : true, color : "#585858"}, // Color is what shows up on the map overlay when the user presses 'MAP'
        "." : {icon : "floor.png", passable : true, shipPassable : false, opaque : false, color : "#8e8e8e"},
        "~" : {icon : "water2.png", passable : false, shipPassable : true, opaque : false, color : "#2828f0"},
        "*" : {icon : "lava.png", passable : false, shipPassable : false, opaque : false, color : "#c62700"},
        "&" : {icon : "volcano.png", passable : false, shipPassable : false, opaque : true, color : "#500000"},
        "=" : {icon : "grass.png", passable : true, shipPassable : false, opaque : false, color : "#28f028"},
        "P" : {icon : "rubble.png", passable : true, shipPassable : false, opaque : false, color : "#282828"},
        "!" : {icon : "treeAlt.png", passable : true, shipPassable : false, opaque : true, color : "#008c00"},
        "F" : {icon : "treeAlt.png", passable : false, shipPassable : false, opaque : true, color : "#008c00"},
        "(" : {icon : "deadTree.png", passable : true, shipPassable : false, opaque : true, color : "#544d19"},
        ")" : {icon : "stump.png", passable : true, shipPassable : false, opaque : false, color : "#544d19"},
        "M" : {icon : "mountain.png", passable : false, shipPassable : false, opaque : true, color : "#a01414"},
        "'" : {icon : "caveFloor.png", passable : true, shipPassable : false, opaque : false, color : "#925e1a"},
        "C" : {icon : "caveWall.png", passable : false, shipPassable : false, opaque : true, color : "#5c3708"},
        "d" : {icon : "deck.png", passable : true, shipPassable : false, opaque : false, color : "#925e1a"},
        "l" : {icon : "gunnelLeft.png", passable : false, shipPassable : false, opaque : true, color : "#5c3708"},
        "r" : {icon : "gunnelRight.png", passable : false, shipPassable : false, opaque : true, color : "#5c3708"},
        ":" : {icon : "desert.png", passable : true, shipPassable : false, opaque : false, color : "#cd964e"},
        "-" : {icon : "bridgeHorizontal.png", passable : true, shipPassable : false, opaque : false, color : "#63390e"},
        "|" : {icon : "bridgeVertical.png", passable : true, shipPassable : false, opaque : false, color : "#63390e"},
        "D" : {icon : "doorInWall.png", passable : true, shipPassable : false, opaque : true, color : "#631c0e"},
        "G" : {icon : "dungeonGate.png", passable : true, shipPassable : false, opaque : true, color : "#202020"},
        "K" : {icon : "lockedDoor.png", passable : true, shipPassable : false, opaque : true, color : "#631c0e"},
        "T" : {icon : "palmTree.png", passable : true, shipPassable : false, opaque : false, color : "#a0ab40"},
        "/" : {icon : "waterMountain.png", passable : false, shipPassable : false, opaque : true, color : "#a01414"},
        "A" : {icon : "desertMountain.png", passable : false, shipPassable : false, opaque : true, color : "#a01414"},
        "?" : {icon : "darkWall.png", passable : false, shipPassable : false, opaque : true, color : "#585858"},
        "`" : {icon : "darkFloor.png", passable : true, shipPassable : false, opaque : false, color : "#8e8e8e"},
        "@" : {icon : "lava.png", passable : false, shipPassable : false, opaque : false, color : "#e13e29"},
        "[" : {icon : "darkDoor.png", passable : true, shipPassable : false, opaque : true, color : "#000000"},
        "_" : {icon : "darkBridgeHorizontal.png", passable : true, shipPassable : false, opaque : false, color : "#8e6464"},
        "]" : {icon : "darkBridgeVertical.png", passable : true, shipPassable : false, opaque : false, color : "#8e6464"},
        "R" : {icon : "river.png", passable : false, shipPassable : true, opaque : false, color : "#06796d"},
        "%" : {icon : "iceMountain.png", passable : false, shipPassable : false, opaque : true, color : "#909090"},
        "i" : {icon : "ice.png", passable : true, shipPassable : false, opaque : false, color : "#ffffff"},
        "S" : {icon : "tundra.png", passable : true, shipPassable : false, opaque : false, color : "#525f47"},
        "Y" : {icon : "iceberg.png", passable : true, shipPassable : false, opaque : false, color : "#9eb8be"},
        "p" : {icon : "pool.png", passable : false, shipPassable : false, opaque : false, color : "#0808D0"},
        "f" : {icon : "iceFloor.png", passable : true, shipPassable : false, opaque : false, color : "#a8c4dd"},
        "w" : {icon : "iceWall.png", passable : false, shipPassable : false, opaque : true, color : "#5b7497"},
        "L" : {icon : "columnTile.png", passable : false, shipPassable : false, opaque : true, color : "#222222"}
    },

    //// Quests

    quests : { // This populates the QUESTS view. Quests are triggered by variables been set based on the map features below
        "Kinstown Ruins" :
            {
                started : "ruinsStart",
                done : "ruinsDone",
                icon : "oldMan.png",
                text : "Discover and defeat the evil force that is occupying the ruins of Kinstown Harbor."
            },
        "Forest of Nothia" :
            {
                started : "portStart",
                done : "portDone",
                icon : "man3.png",
                text : "Visit the Forest of Nothia and speak with the Elvish Council in Port Artha."
            },
        "Goblin Fortress" :
            {
                started : "goblinStart",
                done : "goblinDone",
                icon : "gnomeKing.png",
                text : "Defeat the Goblin King that is terrorizing the Nothian Forest."
            },
        "Castle Bashgar" :
            {
                started : "castleStart",
                done : "castleDone",
                icon : "gnomeKing.png",
                text : "Sail the Wandering Sea South and East to the Great Suvian Desert, then seek an audience with the King in Castle Bashgar."
            },
        "Ashvari Crypts" :
            {
                started : "cryptsStart",
                done : "cryptsDone",
                icon : "emperor.png",
                text : "Defeat the evil undead that has corrupted the ancient Ashvari Crypts."
            },
        "Roogard Keep" :
            {
                started : "keepStart",
                done : "keepStart",
                icon : "emperor.png",
                text : "Sail North and Eastto the Warvish Tundralands and beseech the Dwarvish Chieftan to open the gate to Mount Vezu."
            },
        "Vygurn Tower" :
            {
                started : "towerStart",
                done : "towerDone",
                icon : "dwarfKing.png",
                text : "Defeat the magi in Vygurn Tower to open the passage to Mount Vezu."
            },
        "Mount Vezu" :
            {
                started : "vezuStart",
                done : "gameOver",
                icon : "oolanMaster.png",
                text : "Sail North and West to the volcano, then confront the ancient dragon Vezu."
            }
    },

    //// Keys

    keys : { // Keys appear on the right side of the PARTY view, are also based on variables being set in the map features.
        "ruinsStart" :
            {
                icon : "silverKey.png",
                until : "ruinsDone"
            },
        "portStart" :
            {
                icon : "goldKey.png",
                until : "portDone"
            },
        "castleStart" :
            {
                icon : "rolledScroll.png",
                until : "castleDone"
            },
        "cryptsStart" :
            {
                icon : "ancientKey.png",
                until : "cryptsDone"
            },
        "keepStart" :
            {
                icon : "sigil.png",
                until : "keepDone"
            },
        "towerStart" :
            {
                icon : "prism.png",
                until : "towerDone"
            }
    },

    //// Maps

    maps : {
        "wilderness" : {
            name: "The Wildernesse",
            map : "@wild.txt", // This references a filename called 'wild.txt' in the 'maps' directory. Use the MapEditor java program to make maps, in concert with the tiles.txt file that it uses.
            music : "gurkdemo4",
            dark: false,
            level: 1, // This level is a guide as to what levels of creatures should be randomly encountered.
            encounterChance : 25, // Chance of a random encounter each step the party takes
            combatMap: "outdoorCombat", // The map used for combat
            groups: ["outdoor", "default"], // The groups for creatures and items (see the creature and item 'groups' attributes)
            terrain : { // The following overrides the above map-wide defaults for specific terrain
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
                ":" : {
                    level : 4,
                    encounterChance: 25,
                    combatMap : "desertCombat",
                    groups: ["desert", "default"]
                },
                "T" : {
                    level : 4,
                    encounterChance: 30,
                    combatMap : "desertCombat",
                    groups: ["desert", "default"]
                },
                "i" : {
                    level : 5,
                    encounterChance: 25,
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
            features : [ // Map features are how you place people, doors, encounters, ships, temples, shops, etc. on the maps
                {
                    type : "transition", // A door from one map to another. You have to specify both sides of the transition explicitly (in the case of 'portal' type doors, they may not be symmetric).
                    x : 16,
                    y : 51,
                    icon : "city.png",
                    text : "Enter the town of Bryarlake?",
                    target : "town",
                    transitionType : "town", // This indicates how the transition will appear on the map overlay. Allowed values are: 'outdoor', 'town', 'dungeon', 'up' and 'down'.
                    targetX : 12,
                    targetY : 4
                },
                {
                    type : "transition",
                    x : 17,
                    y : 43,
                    icon : "city.png",
                    text : "The once-beautiful city gates of Kinstown Harbor are now tarnished and crumbling. Will you enter the ruins?",
                    target : "ruins",
                    transitionType : "town",
                    targetX : 14,
                    targetY : 21
                },
                {
                    type : "transition",
                    x : 31,
                    y : 27,
                    icon : "city.png",
                    text : "Climb up to the cliffside village of Moorhaven?",
                    target : "village",
                    transitionType : "town",
                    targetX : 4,
                    targetY : 10
                },
                {
                    type : "transition",
                    x : 10,
                    y : 24,
                    icon : "city.png",
                    text : "Will you enter the Elvish town of Port Artha?",
                    target : "port",
                    transitionType : "town",
                    targetX : 20,
                    targetY : 4
                },
                {
                    type : "transition",
                    x : 23,
                    y : 12,
                    icon : "doorway.png",
                    text : "You stand at the entrance of the Goblin's Mountain Fortress. Horrific sights and smells await within, dare you enter?",
                    target : "fortress1",
                    transitionType : "dungeon",
                    targetX : 22,
                    targetY : 15
                },
                {
                    type : "sign", // A sign with nothing but a location and icon will simply be drawn overtop of the map on that square but not do anything else
                    x : 75,
                    y : 61,
                    icon : "palaceLeft.png"
                },
                {
                    type : "transition",
                    x : 76,
                    y : 61,
                    icon : "palaceCenter.png",
                    text : "You stand before Castle Bashgar, the capital of the Suvian Kingdom. Will you enter?",
                    target : "castle",
                    transitionType : "town",
                    targetX : 16,
                    targetY : 11
                },
                {
                    type : "sign",
                    x : 77,
                    y : 61,
                    icon : "palaceRight.png"
                },
                {
                    type : "transition",
                    x : 73,
                    y : 57,
                    icon : "dome.png",
                    text : "The sacred grounds of Ashvari have served as the burial grounds for the Suvian Kings for centuries. Dare you explore the Ashvari Crypts?",
                    target : "crypt",
                    transitionType : "dungeon",
                    targetX : 4,
                    targetY : 28
                },
                {
                    type : "transition",
                    x : 76,
                    y : 7,
                    icon : "keep.png",
                    text : "Through the swirling snow you perceive a large keep with tall, sheer walls coated in ice. Will you enter Rogaard Keep, last refuge of the Dwarves?",
                    target : "keep",
                    transitionType : "town",
                    targetX : 11,
                    targetY : 17
                },
                {
                    type : "transition",
                    x : 88,
                    y : 16,
                    icon : "tower.png",
                    text : "You stand before the mighty Vygurn Tower, a place of great mystery and intrigue. You are astonished to see that it is protected by no door, nor any guards. Step into Vygurn Tower?",
                    target : "tower1",
                    transitionType : "dungeon",
                    targetX : 4,
                    targetY : 9
                },
                {
                    type : "transition",
                    x : 83,
                    y : 46,
                    icon : "city.png",
                    text : "On this island you find a bustling village, mostly occupied by merchants, sailors and buccaneers. Will you warily enter and peruse their wares?",
                    target : "isle",
                    transitionType : "town",
                    targetX : 17,
                    targetY : 10
                },
                {
                    type : "sign",
                    x : 51,
                    y : 11,
                    icon : "iceGateLeft.png",
                    until : "towerDone"
                },
                {
                    type : "barrier", // This is a (usually temporary) barrier that prevents the party from getting into an area
                    x : 52,
                    y : 11,
                    icon : "iceGateCenter.png",
                    title : "Blocked",
                    text : "An enormous blockade prevents your passage!",
                    until : "towerDone" // Once this variable has been set, the barrier will disappear
                },
                {
                    type : "sign",
                    x : 53,
                    y : 11,
                    icon : "iceGateRight.png",
                    until : "towerDone"
                },
                {
                    type : "transition",
                    x : 51,
                    y : 5,
                    icon : "volcano.png",
                    text : "At the base of Mount Vezu, you find an entrance to a cavern. A sulfurous odor wells up from within. Will you steel your nerves and enter?",
                    target : "lair",
                    transitionType : "dungeon",
                    targetX : 14,
                    targetY : 46
                },
                {
                    type : "temple",
                    x : 60,
                    y : 8,
                    icon : "temple.png",
                    cost : 5
                },
                {
                    type : "temple",
                    x : 79,
                    y : 10,
                    icon : "temple.png",
                    cost : 50
                },
                {
                    type : "ship",
                    x : 7,
                    y : 23,
                    icon : "ship.png",
                    id : "portShip", // Every ship needs a unique ID
                    after : "castleStart" // This ship only appears after this variable has been set
                },
                {
                    type : "encounter", // This is a fixed combat encounter
                    id : "snakes", // Every encounter must have a unique ID.
                    x : 13,
                    y : 49,
                    icon : "snake.png",
                    text : "You are set upon by vicious snakes!",
                    gold : 4,
                    creatures : [
                        {"name" : "Giant Snake", "bonus" : 1}, // Can specify a bonus to jack up a specific creature. Can also specify bonus hit points with 'hitPoints' field.
                        {"name" : "Giant Snake"},
                        {"name" : "Giant Snake"}
                    ],
                    items : [
                        {"name" : "Leather Boots"}
                    ]
                }
            ]
        },
        "town" : {
            name : "Bryerlake",
            map : "@town.txt",
            music : "gurkdemo9",
            dark : false,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 12,
                    y : 4,
                    icon : "doorInWall.png",
                    text : "Will you exit the safety of Bryarlake and explore the great Wildernesse?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 16,
                    targetY : 51
                },
                {
                    type : "block", // This prevents passage, but unlike a barrier it doesn't react at all if the party tries to walk on this square. Always use these to block off an exit to a town or dungeon so the player doesn't get confused about where the exit is.
                    x : 12,
                    y : 3
                },
                {
                    type : "sign",
                    x : 11,
                    y : 6,
                    icon : "soldier.png",
                    action : "TALK", // This action must be in all-caps, and it appears on the center button when the party is on this square.
                    title : "Guard",
                    text : "May you find glory on your noble quest!"
                },
                {
                    type : "sign",
                    x : 13,
                    y : 6,
                    icon : "soldier.png",
                    action : "TALK",
                    title : "Guard",
                    text : "Be sure to avoid the forests at first, there are some really dangerous creatures lurking amongst the trees."
                },
                {
                    type : "sign",
                    x : 8,
                    y : 16,
                    icon : "man.png",
                    action : "TALK",
                    title : "Citizen",
                    text : "Ever since the volcano erupted up North, things have taken an awful turn. Monsters lurk everywhere, preventing regular folk from travelling or trading."
                },
                {
                    type : "temple",
                    x : 15,
                    y : 15,
                    icon : "temple.png",
                    cost : 15
                },
                {
                    type : "shop",
                    name : "Bryarlake Market",
                    x : 6,
                    y : 9,
                    icon : "shop.png",
                    level : 1, // This is not strict, items at neighboring levels can appear
                    groups : ["default"], // Only items with this group will appear
                    buyRate : 100, // The buy price of items will be item.baseValue * buyRate / 100
                    sellRate : 35 // The sell price of items will be item.baseValue * sellRate / 100
                },
                {
                    type : "dispatch", // This dispatches the party on a quest, if they respond "YES
                    x : 18,
                    y : 9,
                    icon : "oldMan.png",
                    altIcon : "silverKey.png", // You can specify a secondary icon to appear on the right. Usually used to show keys.
                    action : "TALK",
                    sets : "ruinsStart", // This variable is set if the party says "YES" only
                    until : "ruinsStart", // Always use an 'until' on a dispatch, otherwise you will keep dispatching the quest.
                    title : "Lord of Bryarlake",
                    text : "Our sister city, Kinstown Harbor, lies in ruins. We hear that they were overrun by creatures that emerged from their sewers! Will you three brave heroes enter the city with this key and regain Kinstown from the clutches of evil?"
                },
                {
                    type : "sign", // This what the party sees after they have accepted the quest but before they have completed it.
                    x : 18,
                    y : 9,
                    icon : "oldMan.png",
                    action : "TALK",
                    after : "ruinsStart",
                    until : "ruinsDone",
                    title : "Lord of Bryarlake",
                    text : "Please, liberate Kinstown Harbor so that we may rebuild her docks and resume trading by sea!"
                },
                {
                    type : "dispatch", // After they complete the first quest, they are dispatched on another.
                    x : 18,
                    y : 9,
                    icon : "oldMan.png",
                    action : "TALK",
                    after : "ruinsDone",
                    sets : "portStart",
                    until : "portStart",
                    title : "Lord of Bryarlake",
                    text : "Thank you, noble heroes for your brave efforts in Kinstown! We have received word that the elves of the North are in danger! Will you travel to Port Artha and meet with the Elvish Council?"
                },
                {
                    type : "sign",
                    x : 18,
                    y : 9,
                    icon : "oldMan.png",
                    action : "TALK",
                    after : "portStart",
                    until : "portDone",
                    title : "Lord of Bryarlake",
                    text : "The Elves of Nothian Forest are in dire need of your bravery! Head North and visit the Elvish Council in Port Artha."
                },
                {
                    type : "sign", // Once the two quests are done, they see this. It's pretty manual and easy to make mistakes. :(
                    x : 18,
                    y : 9,
                    icon : "oldMan.png",
                    action : "TALK",
                    after : "portDone",
                    title : "Lord of Bryarlake",
                    text : "As long as the town of Bryarlake still stands, your bravery will never be forgotten!"
                },
                {
                    type : "encounter", // An 'encounter' with only items/gold and no creatures is treated as treasure. So parsimonious! But also pretty lousy, sorry about that. :(
                    id : "ruinsReward",
                    x : 17,
                    y : 9,
                    icon : "chest.png",
                    text : "The town has presented you with a reward for liberating Kinstown Harbor!",
                    gold : 20,
                    after : "ruinsDone",
                    creatures : [
                    ],
                    items : [
                    ]
                }
            ]
        },
        "ruins" : {
            name : "Kinstown Ruins",
            map : "@ruins.txt",
            music : "gurkdemo7",
            dark : true, // When dark is true, the fairly-lame line-of-sight algorithm will be engaged.
            level : 1,
            groups : ["kobold", "default"],
            encounterChance: 40,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 14,
                    y : 21,
                    icon : "doorInWall.png",
                    text : "Exit the ruins and return to the Wildernesse?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 17,
                    targetY : 43
                },
                {
                    type : "block",
                    x : 15,
                    y : 21
                },
                {
                    type : "barrier",
                    x : 12,
                    y : 21,
                    icon : "dungeonGate.png",
                    title : "Locked",
                    text : "There is a heavy locked gate here, and you cannot force it open!",
                    until : "ruinsStart"
                },
                {
                    type : "alert", // Alerts appear immediately, unlike 'sign', where the user must engage.
                    x : 12,
                    y : 21,
                    icon : "dungeonGate.png",
                    altIcon : "silverKey.png",
                    title : "Unlocked",
                    text : "You use the key to unlock the gate and enter the ruins of Kinstown Harbor.",
                    sets : "alertRuinsKey",
                    until : "alertRuinsKey",
                    after : "ruinsStart"
                },
                {
                    type : "transition",
                    x : 14,
                    y : 9,
                    icon : "doorway.png",
                    text : "You see a doorway here leading down into the sewers below the town. Dare you explore them?",
                    target : "sewer",
                    transitionType : "dungeon",
                    targetX : 21,
                    targetY : 1
                }
            ]
        },
        "sewer" : {
            name : "Kinstown Sewers",
            map : "@sewer.txt",
            music : "gurkdemo7",
            dark : true,
            level : 1,
            groups : ["kobold", "default"],
            encounterChance: 40,
            combatMap: "dungeonCombat",
            features : [
                {
                    type : "transition",
                    x : 21,
                    y : 1,
                    icon : "doorway.png",
                    text : "Escape the sewers and return to the ruins above?",
                    target : "ruins",
                    transitionType : "town",
                    targetX : 14,
                    targetY : 9
                },
                {
                    type : "encounter",
                    id : "sewerEntrance",
                    x : 20,
                    y : 4,
                    icon : "wererat.png",
                    text : "The sewers are inhabited by Wererats! They attack!",
                    ambushed : true,
                    gold : 4,
                    creatures : [
                        {"name" : "Wererat", "bonus" : 1},
                        {"name" : "Wererat"},
                        {"name" : "Wererat"}
                    ],
                    items : [
                        {"name" : "Leather Helm"}
                    ]

                },
                {
                    type : "encounter",
                    id : "sewerKobolds",
                    x : 18,
                    y : 33,
                    icon : "koboldSwordsman.png",
                    text : "You are confronted by a pack of Kobolds!",
                    gold : 6,
                    creatures : [
                        {"name" : "Kobold Fighter"},
                        {"name" : "Kobold", "bonus" : 1},
                        {"name" : "Kobold", "bonus" : 1},
                        {"name" : "Kobold Fighter"}
                    ],
                    items : [
                        {"name" : "Energy Salve"}
                    ]
                },
                {
                    type : "encounter",
                    id : "sewerSpiders",
                    x : 7,
                    y : 25,
                    icon : "greenSpider.png",
                    text : "Enormous spiders drop from the ceiling and attack!",
                    ambushed : true,
                    gold : 1,
                    creatures : [
                        {"name" : "Giant Spider", "bonus" : 1},
                        {"name" : "Giant Spider"},
                        {"name" : "Giant Spider"},
                        {"name" : "Giant Spider"}
                    ],
                    items : [
                        {"name" : "Leather Armor"}
                    ]
                },
                {
                    type : "encounter",
                    id : "caveTalisman",
                    x : 7,
                    y : 2,
                    icon : "impTalisman.png",
                    text : "You discover here an unusual little statue.",
                    gold : 0,
                    creatures : [
                    ],
                    items : [
                        {"name" : "Imp Talisman", "bonus" : 1}
                    ]
                },
                {
                    type : "encounter",
                    id : "sewerKoboldElite",
                    x : 4,
                    y : 34,
                    icon : "koboldShaman.png",
                    text : "At long last, you find the source of the evil in Kinstown. Surrounded by roiling sewage water, you see a make-shift Kobold throne room! A shamanistic Kobold points at you and howls!",
                    gold : 12,
                    sets : "ruinsDone",
                    creatures : [
                        {"name" : "Kobold"},
                        {"name" : "Kobold"},
                        {"name" : "Kobold"},
                        {"name" : "Kobold"},
                        {"name" : "Kobold Fighter"},
                        {"name" : "Kobold Fighter"},
                        {"name" : "Kobold Mystic", "bonus" : 2, "hitPoints" : 12}
                    ],
                    items : [
                        {"name" : "Healing Salve", "bonus" : 1}, // You can specify bonuses on items, too. Here we have a 'Healing Salve +1'
                        {"name" : "Long Oak Staff"}
                    ]

                }
            ]
        },
        "village" : {
            name : "Moorhaven",
            map : "@village.txt",
            music : "gurkdemo9",
            dark : false,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 4,
                    y : 10,
                    icon : "doorway.png",
                    text : "Climb down the steep path back to the Wildernesse?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 31,
                    targetY : 27
                },
                {
                    type : "sign",
                    x : 8,
                    y : 7,
                    icon : "oldMan2.png",
                    action : "TALK",
                    title : "Elder",
                    text : "Legends tell of Vezu, a powerful ancient dragon that terrorized the Three Kingdoms. It was finally defeated in the North, then entombed in a mountain that bears his name. Could the volcanic eruption have awoken the dragon within?"
                },
                {
                    type : "shop",
                    name : "Trading Post",
                    x : 6,
                    y : 8,
                    icon : "shop.png",
                    level : 1,
                    groups : ["default"],
                    buyRate : 100,
                    sellRate : 45
                },
                {
                    type : "temple",
                    x : 6,
                    y : 14,
                    icon : "temple.png",
                    cost : 10
                }
            ]
        },
        "port" : {
            name : "Port Artha",
            map : "@port.txt",
            music : "gurkdemo9",
            dark : false,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 20,
                    y : 4,
                    icon : "doorway.png",
                    text : "Exit Port Artha and return to the Nothian Forest?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 10,
                    targetY : 24
                },
                {
                    type : "block",
                    x : 20,
                    y : 3
                },
                {
                    type : "sign",
                    x : 19,
                    y : 6,
                    icon : "gnome3.png",
                    action : "TALK",
                    title : "Elvish Guard",
                    text : "Welcome, travellers from the South."
                },
                {
                    type : "sign",
                    x : 21,
                    y : 6,
                    icon : "gnome3.png",
                    action : "TALK",
                    title : "Elvish Guard",
                    text : "May your stay in Port Artha be peaceful and restful, despite the difficulty of these times."
                },
                {
                    type : "sign",
                    x : 7,
                    y : 14,
                    icon : "gnome.png",
                    action : "TALK",
                    title : "Elf",
                    text : "We once sailed dozens of boats from this port. We traded with our kin, the Merfolk. But they have since become distrustful and aggressive, attacking all vessels that sail the Wandering Sea."
                },
                {
                    type : "shop",
                    name : "Nothian Wares",
                    x : 9,
                    y : 9,
                    icon : "shop.png",
                    level : 2,
                    groups : ["default"],
                    buyRate : 120,
                    sellRate : 25
                },
                {
                    type : "sign",
                    x : 16,
                    y : 17,
                    icon : "gnome2.png",
                    action : "TALK",
                    until : "goblinDone",
                    title : "Elvish Elder",
                    text : "We are struggling under the weight of endless Goblin assaults! It is believed that a powerful and ambitious Goblin King in the Eastern edge of the forest is behind the attacks."
                },
                {
                    type : "sign",
                    x : 16,
                    y : 17,
                    icon : "gnome2.png",
                    action : "TALK",
                    after : "goblinDone",
                    title : "Elvish Elder",
                    text : "Tales of your heroism will be sung by the Elvish people for all of eternity! Now sail the Wandering Sea and discover if even greater deeds await you."
                },
                {
                    type : "dispatch",
                    x : 15,
                    y : 17,
                    icon : "gnomeKing.png",
                    altIcon : "goldKey.png",
                    action : "TALK",
                    sets : ["portDone", "goblinStart"],
                    until : "goblinStart",
                    title : "Elvish Councillor",
                    text : "Welcome, heroes of Bryarlake. The Goblin King in the fortress in the eastern edge of the forest must be stopped! Will you take this key, sneak into the fortress, and defeat the king?"
                },
                {
                    type : "sign",
                    x : 15,
                    y : 17,
                    icon : "gnomeKing.png",
                    action : "TALK",
                    after : "goblinStart",
                    until : "goblinDone",
                    title : "Elvish Councillor",
                    text : "Please make haste to defeat the Goblin King in his fortress at the eastern extent of Nothian Forest!"
                },
                {
                    type : "dispatch",
                    x : 15,
                    y : 17,
                    icon : "gnomeKing.png",
                    altIcon : "rolledScroll.png",
                    action : "TALK",
                    after : "goblinDone",
                    sets : "castleStart",
                    until : "castleStart",
                    title : "Elvish Councillor",
                    text : "Your brave acts are enough for many lifetimes, yet we urge you to take this scroll by sea to the Great Suvian Desert, where the proud people of Castle Bashgar are in great danger. A boat is prepared for you outside the city, will you go?"
                },
                {
                    type : "sign",
                    x : 15,
                    y : 17,
                    icon : "gnomeKing.png",
                    action : "TALK",
                    after : "castleStart",
                    until : "castleDone",
                    title : "Elvish Councillor",
                    text : "Travel by sea South, then East until you arrive at the desert. The wondrous Castle Bashgar is located at the Eastern edge of the Suvian Kingdom."
                },
                {
                    type : "sign",
                    x : 15,
                    y : 17,
                    icon : "gnomeKing.png",
                    action : "TALK",
                    after : "castleDone",
                    title : "Elvish Councillor",
                    text : "You are and always will remain a friend of the Elvish peoples."
                },
                {
                    type : "encounter",
                    id : "goblinReward",
                    x : 15,
                    y : 16,
                    icon : "chest.png",
                    text : "The elves reward you for your defeat of the Goblin King!",
                    gold : 35,
                    after : "goblinDone",
                    creatures : [
                    ],
                    items : [
                    ]
                },
                {
                    type : "temple",
                    x : 20,
                    y : 17,
                    icon : "temple.png",
                    cost : 20
                }
            ]
        },
        "fortress1" : {
            name : "Goblin Fortress",
            map : "@fortress1.txt",
            music : "gurkdemo7",
            dark : true,
            level : 1,
            groups : ["goblin", "default"],
            encounterChance: 35,
            combatMap: "dungeonCombat",
            features : [
                {
                    type : "transition",
                    x : 22,
                    y : 15,
                    icon : "dungeonGate.png",
                    text : "Will you slip out of the Goblin Fortress and return to the Nothian Forest?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 23,
                    targetY : 12
                },
                {
                    type : "block",
                    x : 23,
                    y : 15
                },
                {
                    type : "encounter",
                    id : "goblinGuard",
                    x : 13,
                    y : 15,
                    icon : "goblin7.png",
                    text : "A pack of Goblins block your passage!",
                    gold : 5,
                    creatures : [
                        {"name" : "Goblin Warrior", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Goblin Warrior"},
                        {"name" : "Goblin"},
                        {"name" : "Goblin"},
                        {"name" : "Goblin"},
                        {"name" : "Goblin"}
                    ],
                    items : [
                        {name : "Goblin Crossbow", bonus : 1}
                    ]

                },
                {
                    type : "encounter",
                    id : "goblinScouts",
                    x : 24,
                    y : 11,
                    icon : "goblinScout.png",
                    text : "You are suddenly confronted by nasty and quick-moving Goblins!",
                    ambushed : true,
                    gold : 6,
                    creatures : [
                        {"name" : "Goblin Scout", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Goblin Scout", "bonus" : 1, "hitPoints" : 3},
                        {"name" : "Goblin Scout"},
                        {"name" : "Goblin Scout"},
                        {"name" : "Goblin Scout"}
                    ],
                    items : [
                        {"name" : "Goblin Scimitar", "bonus" : 1}
                    ]

                },
                {
                    type : "encounter",
                    id : "pitsShamans",
                    x : 3,
                    y : 5,
                    icon : "goblinWizard.png",
                    text : "A Goblin spiritual leader of some variety shouts curses as you approach!",
                    gold : 9,
                    creatures : [
                        {"name" : "Goblin Shaman", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Goblin Warrior", "bonus" : 1, "hitPoints" : 8},
                        {"name" : "Goblin Warrior", "bonus" : 1, "hitPoints" : 8}
                    ],
                    items : [
                        {"name" : "Goblin Staff", "bonus" : 1}
                    ]

                },
                {
                    type : "barrier",
                    x : 19,
                    y : 15,
                    icon : "dungeonGate.png",
                    until : "goblinStart",
                    title : "Gate",
                    text : "There is no way to slip past the heavy gate!"
                },
                {
                    type : "alert",
                    x : 19,
                    y : 15,
                    icon : "dungeonGate.png",
                    altIcon : "goldKey.png",
                    title : "Unlocked",
                    text : "You use the golden key provided by the Elves to unlock the heavy gate.",
                    sets : "alertGoblinKey",
                    until : "alertGoblinKey",
                    after : "goblinStart"
                },
                {
                    type : "transition",
                    x : 3,
                    y : 3,
                    icon : "doorway.png",
                    text : "Unspeakable sounds and smells fill the air as you peer down a long staircase. Dare you descend?",
                    target : "fortress2",
                    transitionType : "down",
                    targetX : 23,
                    targetY : 12
                }
            ]
        },
        "fortress2" : {
            name : "Goblin Fortress",
            map : "@fortress2.txt",
            music : "gurkdemo7",
            dark : true,
            level : 2,
            groups : ["goblin", "default"],
            encounterChance: 40,
            combatMap: "dungeonCombat",
            features : [
                {
                    type : "encounter",
                    id : "goblinArchers",
                    x : 16,
                    y : 3,
                    icon : "goblinArcher.png",
                    text : "You are targeted by skilled Goblin archers!",
                    gold : 7,
                    creatures : [
                        {"name" : "Goblin Archer"},
                        {"name" : "Goblin Archer"},
                        {"name" : "Goblin Warrior"},
                        {"name" : "Goblin Warrior"},
                        {"name" : "Goblin"},
                        {"name" : "Goblin"}
                    ],
                    items : [
                        {name : "Wand of Striking", bonus : 2}
                    ]

                },
                {
                    type : "encounter",
                    id : "goblinPotion",
                    x : 18,
                    y : 20,
                    icon : "chest.png",
                    text : "You find here a small cache of potions.",
                    ambushed : true,
                    gold : 15,
                    creatures : [
                    ],
                    items : [
                        {name : "Energy Salve"},
                        {name : "Healing Salve", bonus : 1}
                    ]
                },
                {
                    type : "sign",
                    x : 8,
                    y : 18,
                    icon : "carpetS.png"
                },
                {
                    type : "sign",
                    x : 8,
                    y : 19,
                    icon : "carpetNS.png"
                },
                {
                    type : "sign",
                    x : 8,
                    y : 20,
                    icon : "carpetNS.png"
                },
                {
                    type : "sign",
                    x : 8,
                    y : 21,
                    icon : "carpetNS.png"
                },
                {
                    type : "sign",
                    x : 8,
                    y : 22,
                    icon : "carpetN.png"
                },
                {
                    type : "encounter",
                    id : "pitsKing2",
                    x : 8,
                    y : 23,
                    icon : "goblinKing.png",
                    sets : "goblinDone",
                    text : "You face your enemy, the King of the Goblins! He is enormous and flanked by well-equipped soldiers.",
                    gold : 23,
                    creatures : [
                        {"name" : "Goblin King", "bonus" : 2, "hitPoints" : 10},
                        {"name" : "Goblin Archer"},
                        {"name" : "Goblin Warrior"},
                        {"name" : "Goblin"},
                        {"name" : "Goblin Shaman"}
                    ],
                    items : [
                        {"name" : "Leather Armor", bonus : 1},
                        {"name" : "Heavy Axe"},
                        {"name" : "Elvish Helm"}
                    ]
                },
                {
                    type : "transition",
                    x : 23,
                    y : 12,
                    icon : "doorway.png",
                    text : "Return to the lower level of the fortess?",
                    target : "fortress1",
                    transitionType : "down",
                    targetX : 3,
                    targetY : 3
                }
            ]
        },
        "castle" : {
            name : "Castle Bashgar",
            map : "@castle.txt",
            music : "gurkdemo9",
            dark : true,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 16,
                    y : 11,
                    icon : "dungeonGate.png",
                    text : "Pass through the gates of Castle Bashgar and return to the Great Suvian Desert?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 76,
                    targetY : 61
                },
                {
                    type : "block",
                    x : 16,
                    y : 12
                },
                {
                    type : "barrier",
                    x : 16,
                    y : 9,
                    icon : "guard2.png",
                    title : "Guard",
                    text : "The Castle is closed to all but heroes of the Three Kingdoms! Prove yourself elsewhere before demanding an audience of the Suvian King!",
                    until : "goblinDone"
                },
                {
                    type : "sign",
                    x : 15,
                    y : 5,
                    icon : "tarrSoldier.png",
                    title : "Guard",
                    text : "Welcome to the royal court of the King in the South!",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 17,
                    y : 5,
                    icon : "tarrSoldier.png",
                    title : "Guard",
                    text : "Welcome, Westerners! Be sure to visit our great shops to purchase equipment and supplies for your travels.",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 16,
                    y : 1,
                    icon : "emperor.png",
                    altIcon : "rolledScroll.png",
                    action : "TALK",
                    sets : "castleDone",
                    until : "cryptsStart",
                    title : "King",
                    text : "This scroll carries foul tidings... if the Elves are right, then our sacred Ashvari Crypts have been overrun with evil magic. Talk to my viceroy, he will provide you with the key to the Crypts."
                },
                {
                    type : "sign",
                    x : 16,
                    y : 1,
                    icon : "emperor.png",
                    action : "TALK",
                    after : "cryptsStart",
                    until : "cryptsDone",
                    title : "King",
                    text : "The evil unleashed by that volcano in the North is spreading throughout the Three Kingdoms... I fear the worst for my people."
                },
                {
                    type : "dispatch",
                    x : 16,
                    y : 1,
                    icon : "emperor.png",
                    altIcon : "sigil.png",
                    action : "TALK",
                    after : "cryptsDone",
                    sets : "keepStart",
                    title : "King",
                    text : "We would feast for weeks in celebration of your victory, but you must warn the Dwarves in the Tundralands that Vezu has returned. Take this Sigil to Rogaard Keep so they know you have my blessing. Will you go?"
                },
                {
                    type : "sign",
                    x : 16,
                    y : 1,
                    icon : "emperor.png",
                    action : "TALK",
                    after : "keepStart",
                    until : "keepDone",
                    title : "King",
                    text : "Please visit the Dwarves at Rogaard Keep at once! The Chieftan must be informed that Vezu seeks domination of our realm."
                },
                {
                    type : "sign",
                    x : 16,
                    y : 1,
                    icon : "emperor.png",
                    action : "TALK",
                    after : "keepDone",
                    title : "King",
                    text : "May your travels be blessed and fruitful, heroes of the realm."
                },
                {
                    type : "sign",
                    x : 15,
                    y : 1,
                    icon : "oolanMaster.png",
                    until : "castleDone",
                    text : "Welcome, brave heroes! We have been expecting you.",
                    title : "Suvian Viceroy",
                    action : "TALK"
                },
                {
                    type : "dispatch",
                    x : 15,
                    y : 1,
                    icon : "oolanMaster.png",
                    altIcon : "ancientKey.png",
                    after : "castleDone",
                    sets : "cryptsStart",
                    until : "cryptsStart",
                    text : "We fear that the peace of the dead has been disturbed in the crypts. Take this key and be wary of black magic! Will you explore the crypts?",
                    title : "Suvian Viceroy",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 15,
                    y : 1,
                    icon : "oolanMaster.png",
                    after : "cryptsStart",
                    until : "cryptsDone",
                    text : "Travel North to the Crypts with haste, lest our ancestors souls be forever damned!",
                    title : "Suvian Viceory",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 15,
                    y : 1,
                    icon : "oolanMaster.png",
                    after : "cryptsDone",
                    text : "The Desert Peoples bestow upon you one thousand and one thanks for your bravery in the Crypts!",
                    title : "Suvian Viceory",
                    action : "TALK"
                },
                {
                    type : "encounter",
                    id : "cryptsReward",
                    x : 16,
                    y : 2,
                    icon : "chest.png",
                    text : "The King has rewarded you for your victory in the Crypts!",
                    gold : 65,
                    after : "cryptsDone",
                    creatures : [
                    ],
                    items : [
                    ]
                },
                {
                    type : "sign",
                    x : 3,
                    y : 9,
                    icon : "tarrMan2.png",
                    title : "Citizen",
                    text : "Since the volcano erupted in the North, the world has become increasingly evil and dangerous. Only the most stalwart adventurers can safely travel beyond the castle walls.",
                    action : "TALK"
                },
                {
                    type : "shop",
                    name : "Suvian Armors",
                    x : 30,
                    y : 4,
                    icon : "shop.png",
                    level : 3,
                    groups : ["armor"],
                    buyRate : 120,
                    sellRate : 30
                },
                {
                    type : "shop",
                    name : "Suvian Arms",
                    x : 26,
                    y : 4,
                    icon : "shop.png",
                    level : 3,
                    groups : ["weapon"],
                    buyRate : 120,
                    sellRate : 30
                },
                {
                    type : "shop",
                    name : "Suvian Artifacts",
                    x : 28,
                    y : 2,
                    icon : "shop.png",
                    level : 3,
                    groups : ["misc"],
                    buyRate : 120,
                    sellRate : 20
                },
                {
                    type : "shop",
                    name : "Ashvari Apothecary",
                    x : 4,
                    y : 8,
                    icon : "shop.png",
                    level : 3,
                    groups : ["potion"],
                    buyRate : 120,
                    sellRate : 22
                },
                {
                    type : "temple",
                    x : 4,
                    y : 2,
                    icon : "temple.png",
                    cost : 40
                },
                {
                    type : "sign",
                    x : 28,
                    y : 8,
                    icon : "well.png"
                },
                {
                    type : "sign",
                    x : 16,
                    y : 6,
                    icon : "blueBannerDoor.png"
                }
            ]
        },
        "crypt" : {
            name : "Ashvari Crypts",
            map : "@crypt.txt",
            music : "gurkdemo7",
            dark : true,
            level : 4,
            groups : ["undead", "default"],
            encounterChance: 35,
            combatMap: "dungeonCombat",
            terrain : {
                "~" : {
                    level : 4,
                    encounterChance: 35,
                    combatMap : "shipCombat",
                    groups: ["undead", "default"]
                }
            },
            features : [
                {
                    type : "transition",
                    x : 4,
                    y : 28,
                    icon : "dungeonGate.png",
                    text : "Will you escape the Ashvari Crypts and return to the land of the living?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 73,
                    targetY : 57
                },
                {
                    type : "block",
                    x : 3,
                    y : 28
                },
                {
                    type : "sign",
                    icon : "column.png",
                    x : 3,
                    y : 27
                },
                {
                    type : "sign",
                    icon : "column.png",
                    x : 3,
                    y : 29
                },
                {
                    type : "encounter",
                    id : "cryptsSkeletons",
                    x : 8,
                    y : 33,
                    icon : "skeletonGuard.png",
                    text : "A squadron of Skeletons attack!",
                    gold : 12,
                    creatures : [
                        {"name" : "Skeleton Guard", "bonus" : 2},
                        {"name" : "Skeleton Guard", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Skeleton Guard"},
                        {"name" : "Skeleton"},
                        {"name" : "Skeleton"},
                        {"name" : "Skeleton"},
                        {"name" : "Skeleton"}
                    ],
                    items : [
                        {name : "Spiked Shield"},
                        {name : "Curing Potion"}
                    ]

                },
                {
                    type : "encounter",
                    id : "cryptsGhoul",
                    x : 19,
                    y : 35,
                    icon : "ghoul.png",
                    text : "As you pass through the door, you are ambushed by horrific, frightening creatures!",
                    ambushed : true,
                    gold : 19,
                    creatures : [
                        {"name" : "Ghoul", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Ghoul"}
                    ],
                    items : [
                        {"name" : "Great Sword", "bonus" : 1}
                    ]

                },
                {
                    type : "encounter",
                    id : "cryptsPhantom",
                    x : 14,
                    y : 22,
                    icon : "phantom2.png",
                    text : "Two phantasmal forms emerge, seemingly only partially present in this realm.",
                    gold : 9,
                    creatures : [
                        {"name" : "Phantom", "bonus" : 1, "hitPoints" : 10},
                        {"name" : "Phantom", "bonus" : 1, "hitPoints" : 4}
                    ],
                    items : [
                        {"name" : "Fine Bow", "bonus" : 2}
                    ]
                },
                {
                    type : "ship",
                    x : 8,
                    y : 14,
                    icon : "ship.png",
                    id : "cryptsShip"
                },
                {
                    type : "encounter",
                    id : "cryptsWizard",
                    x : 10,
                    y : 2,
                    icon : "skeletonWizard.png",
                    text : "A Skeleton Wizard shrieks, \"With Vezu's power, we can convert the dead into an an unstoppable army against the living!\" It and its minions attack!",
                    ambushed : true,
                    gold : 37,
                    creatures : [
                        {"name" : "Skeleton Wizard", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Ghoul"},
                        {"name" : "Zombie"},
                        {"name" : "Zombie"},
                        {"name" : "Skeleton Guard"},
                        {"name" : "Skeleton"}
                    ],
                    items : [
                        {"name" : "Amulet of Thought", "bonus" : 2}
                    ]
                },
                {
                    type : "sign",
                    x : 10,
                    y : 1,
                    icon : "dragonStone.png",
                    title : "Tablet",
                    sets : "cryptsDone",
                    text : "You see here a tablet bearing a depiction of the dragon Vezu. You must inform the King that the Crypts are somehow linked to the dragon!",
                    action : "LOOK"
                },
                {
                    type : "barrier",
                    x : 23,
                    y : 17,
                    icon : "lockedDoor.png",
                    until : "cryptsStart",
                    title : "Locked",
                    text : "There is an unusual-looking, narrow door here, but is locked!"
                },
                {
                    type : "alert",
                    x : 23,
                    y : 17,
                    icon : "lockedDoor.png",
                    altIcon : "ancientKey.png",
                    title : "Unlocked",
                    text : "You use the ancient key provided by the King to open the narrow door.",
                    sets : "alertCryptsKey",
                    until : "alertCryptsKey",
                    after : "cryptsStart"
                }
            ]
        },
        "keep" : {
            name : "Rogaard Keep",
            map : "@keep.txt",
            music : "gurkdemo9",
            dark : true,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 11,
                    y : 17,
                    icon : "dungeonGate.png",
                    text : "Will you exit Rogaard Keep and return to the Warvish Tundralands?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 76,
                    targetY : 7
                },
                {
                    type : "block",
                    x : 11,
                    y : 18
                },
                {
                    type : "barrier",
                    x : 11,
                    y : 14,
                    icon : "dwarfGuard.png",
                    title : "Guard",
                    text : "During times of war, the Keep is off duty to all but those with Royal Decree!",
                    until : "keepStart"
                },
                {
                    type : "alert",
                    x : 11,
                    y : 14,
                    icon : "dwarfGuard.png",
                    altIcon : "sigil.png",
                    title : "Guard",
                    text : "I see you carry the sigil of the Southern King. Enter and speak your business with the Grand Chieftain of the Warvish Tribes!",
                    after : "keepStart",
                    sets : "keepDone",
                    until : "keepDone"
                },
                {
                    type : "sign",
                    x : 11,
                    y : 14,
                    icon : "dwarfGuard.png",
                    title : "Guard",
                    text : "Fare thee well, travellers.",
                    after : "alertKeepSigil"
                },
                {
                    type : "dispatch",
                    x : 11,
                    y : 1,
                    icon : "dwarfKing.png",
                    altIcon : "prism.png",
                    action : "TALK",
                    sets : "towerStart",
                    until : "towerStart",
                    title : "Chieftain",
                    text : "So our worst fears have been realized... for Vezu to be stopped, the barricade must be broken. Wielding this prism at the top of the Vygurn Tower could break Vezu's barricade, but the Magi worship Vezu, and welcome his return. Will you defeat the Magi and break the barricade?"
                },
                {
                    type : "sign",
                    x : 11,
                    y : 1,
                    icon : "dwarfKing.png",
                    action : "TALK",
                    after : "towerStart",
                    until : "towerDone",
                    title : "Chieftain",
                    text : "Travel East across the Tundralands to reach the Vygurn, the infamous Tower of the Magi. The fate of the Three Kingdoms depends on it!"
                },
                {
                    type : "dispatch",
                    x : 11,
                    y : 1,
                    icon : "dwarfKing.png",
                    action : "TALK",
                    after : "towerDone",
                    sets : "vezuStart",
                    until : "vezuStart",
                    title : "Chieftain",
                    text : "With the Magi defeated and the barricade broken, there is a chance that Vezu could be defeated. Will you face your destiny at Mount Vezu and fight the dragon?"
                },
                {
                    type : "sign",
                    x : 11,
                    y : 1,
                    icon : "dwarfKing.png",
                    action : "TALK",
                    after : "vezuStart",
                    until : "gameOver",
                    title : "Chieftain",
                    text : "Travel North by ship to Mount Vezu, the fates of the Warvish peoples are in your hands!"
                },
                {
                    type : "sign",
                    x : 11,
                    y : 1,
                    icon : "dwarfKing.png",
                    action : "TALK",
                    after : "gameOver",
                    title : "Chieftain",
                    text : "The peoples of the Three Kingdoms shall sing songs of your victory until the end of time!"
                },
                {
                    type : "sign",
                    x : 10,
                    y : 11,
                    icon : "dwarf2.png",
                    until : "towerStart",
                    text : "Vezu must be defeated, yet he has barricaded himself until his strength reaches its peak. We must find a way to break that barricade before he sallies forth on his on accord...",
                    title : "Dwarf Elder",
                    action : "TALK"
                },
                {
                    type : "sign",
                    x : 10,
                    y : 11,
                    icon : "dwarf2.png",
                    after : "towerStart",
                    text : "May fortune favor you, brave adventurers!",
                    title : "Dwarf Elder",
                    action : "TALK"
                },
                {
                    type : "encounter",
                    id : "towerReward",
                    x : 11,
                    y : 2,
                    icon : "chest.png",
                    text : "The Warvish citizenry have gathered together their wealth to support you in your great quest to defeat Vezu!",
                    gold : 110,
                    after : "towerDone",
                    creatures : [
                    ],
                    items : [
                    ]
                },
                {
                    type : "shop",
                    name : "Dwarven Armors",
                    x : 7,
                    y : 6,
                    icon : "shop.png",
                    level : 4,
                    groups : ["armor"],
                    buyRate : 125,
                    sellRate : 28
                },
                {
                    type : "shop",
                    name : "Dwarven Arms",
                    x : 15,
                    y : 6,
                    icon : "shop.png",
                    level : 4,
                    groups : ["weapon"],
                    buyRate : 125,
                    sellRate : 28
                },
                {
                    type : "shop",
                    name : "Warvian Antiquities",
                    x : 7,
                    y : 10,
                    icon : "shop.png",
                    level : 4,
                    groups : ["misc"],
                    buyRate : 125,
                    sellRate : 25
                },
                {
                    type : "shop",
                    name : "Potions and Elixirs",
                    x : 15,
                    y : 10,
                    icon : "shop.png",
                    level : 4,
                    groups : ["potion"],
                    buyRate : 115,
                    sellRate : 22
                }
            ]
        },
        "tower1" : {
            name : "Vygurn Tower",
            map : "@tower1.txt",
            music : "gurkdemo7",
            dark : true,
            level : 5,
            groups : ["tundra", "dungeon", "default"],
            encounterChance: 35,
            combatMap: "iceMazeCombat",
            features : [
                {
                    type : "transition",
                    x : 4,
                    y : 9,
                    icon : "iceFloor.png",
                    text : "Will you exit Vygurn Tower?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 88,
                    targetY : 16
                },
                {
                    type : "block",
                    x : 3,
                    y : 9
                },
                {
                    type : "encounter",
                    id : "towerGuard",
                    x : 8,
                    y : 16,
                    icon : "drowElf.png",
                    text : "Drow Elves and Snow Ogres approach you. \"You will regret setting foot in this tower!\"",
                    gold : 25,
                    creatures : [
                        {"name" : "Drow Elf", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Snow Ogre", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Drow Elf"},
                        {"name" : "Snow Ogre"}
                    ],
                    items : [
                        {name : "Magic Bow"}
                    ]
                },
                {
                    type : "transition",
                    x : 7,
                    y : 16,
                    icon : "doorway.png",
                    text : "Ascend to the second level of the tower?",
                    target : "tower2",
                    transitionType : "up",
                    targetX : 3,
                    targetY : 15
                }
            ]
        },
        "tower2" : {
            name : "Vygurn Tower",
            map : "@tower2.txt",
            music : "gurkdemo7",
            dark : true,
            level : 5,
            groups : ["tundra", "dungeon", "default"],
            encounterChance: 35,
            combatMap: "iceMazeCombat",
            features : [
                {
                    type : "transition",
                    x : 3,
                    y : 15,
                    icon : "doorway.png",
                    text : "Return to the first level of the tower?",
                    target : "tower1",
                    transitionType : "down",
                    targetX : 7,
                    targetY : 16
                },
                {
                    type : "encounter",
                    id : "towerGolem",
                    x : 9,
                    y : 9,
                    icon : "iceGolem.png",
                    text : "Two handlers release the bonds on a hulking monstrosity made entirely of ice! It lurches towards you!",
                    gold : 8,
                    creatures : [
                        {"name" : "Ice Golem", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Blue Goblin"},
                        {"name" : "Blue Goblin"}
                    ],
                    items : [
                        {name : "Amulet of Might", bonus : 1}
                    ]
                },
                {
                    type : "encounter",
                    id : "towerTrolls",
                    x : 5,
                    y : 3,
                    icon : "iceTroll.png",
                    text : "You are set upon by a group of trolls!",
                    ambushed : true,
                    gold : 8,
                    creatures : [
                        {"name" : "Ice Troll", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Ice Troll"},
                        {"name" : "Two-headed Troll"},
                        {"name" : "Troll"},
                        {"name" : "Troll"}
                    ],
                    items : [
                        {name : "Magic Sword"}
                    ]
                },
                {
                    type : "alert",
                    x : 9,
                    y : 3,
                    title : "Bag of Holding",
                    sets : "bagOfHolding",
                    until : "bagOfHolding",
                    icon : "bag.png",
                    "text" : "You have found the Bag of Holding! You can now store an additional 15 items in the bag."
                },
                {
                    type : "transition",
                    x : 1,
                    y : 5,
                    icon : "doorway.png",
                    text : "Climb to the top level of the tower?",
                    target : "tower3",
                    transitionType : "up",
                    targetX : 1,
                    targetY : 1
                }
            ]
        },
        "tower3" : {
            name : "Vygurn Tower",
            map : "@tower3.txt",
            music : "gurkdemo7",
            dark : true,
            level : 5,
            groups : ["tundra", "dungeon", "default"],
            encounterChance: 35,
            combatMap: "iceMazeCombat",
            features : [
                {
                    type : "transition",
                    x : 1,
                    y : 1,
                    icon : "doorway.png",
                    text : "Descend to the second level of the tower?",
                    target : "tower2",
                    transitionType : "down",
                    targetX : 1,
                    targetY : 5
                },
                {
                    type : "encounter",
                    id : "towerMagi",
                    x : 5,
                    y : 8,
                    icon : "iceMage.png",
                    text : "A group of Ice Magi block your passage! \"The power in the chamber beyond is no match for your feeble minds!\" They attack!",
                    gold : 47,
                    creatures : [
                        {"name" : "Ice Magus", "bonus" : 1, "hitPoints" : 5},
                        {"name" : "Ice Magus"},
                        {"name" : "Ice Magus"}
                    ],
                    items : [
                        {name : "Magic Staff", bonus : 1},
                        {name : "Energy Potion", bonus : 2}
                    ]
                },
                {
                    type : "sign",
                    x : 2,
                    y : 8,
                    icon : "plaque.png",
                    until : "towerStart",
                    text : "You have a complete view of the Tundralands below, as the sun shines in through the ice walls of the tower. There is a podium of some sort here, but you aren't sure what to do!",
                    title : "Podium",
                    action : "LOOK"
                },
                {
                    type : "sign",
                    x : 2,
                    y : 8,
                    icon : "plaque.png",
                    altIcon : "prism.png",
                    after : "towerStart",
                    sets : "towerDone",
                    until : "towerDone",
                    text : "You place the prism on the podium and there is a sudden, massive discharge of energy, destroying both the prism and the podium! Has the barricade in the North been broken?",
                    title : "Podium",
                    action : "PRISM"
                }
            ]
        },
        "isle" : {
            name : "Wandering Isle",
            map : "@isle.txt",
            music : "gurkdemo9",
            dark : false,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
                {
                    type : "transition",
                    x : 17,
                    y : 10,
                    icon : "bridgeVertical.png",
                    text : "Will you weigh anchor and set sail again upon the Wandering Sea?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 83,
                    targetY : 46
                },
                {
                    type : "sign",
                    x : 14,
                    y : 10,
                    icon : "pirate.png",
                    action : "TALK",
                    title : "Pirate",
                    text : "'Tis a foul wind a blownin' since that volcano blew its top. Me mates 'n I can barely sail, and there be nary finer sailors in the Kingdoms Three than me mates 'n me."
                },
                {
                    type : "sign",
                    x : 7,
                    y : 13,
                    icon : "pirate2.png",
                    action : "TALK",
                    title : "Pirate",
                    text : "Aye, we be stockin' none but the finest goods here on the Wanderin' Isle. Yet the trade be diminishin' in recent years."
                },
                {
                    type : "shop",
                    name : "Buccaneer's Bazaar",
                    x : 8,
                    y : 7,
                    icon : "shop.png",
                    level : 5,
                    groups : ["default", "water"],
                    buyRate : 130,
                    sellRate : 25
                },
                {
                    type : "sign",
                    x : 17,
                    y : 11,
                    icon : "ship.png"
                }
            ]
        },
        "lair" : {
            name : "Vezu's Lair",
            map : "@lair.txt",
            music : "gurkdemo7",
            dark : true,
            level : 6,
            groups : ["dungeon", "undead", "default"],
            encounterChance: 40,
            combatMap: "darkCombat",
            features : [
                {
                    type : "transition",
                    x : 14,
                    y : 46,
                    icon : "darkDoor.png",
                    text : "Will you escape from Vezu's foul lair?",
                    target : "wilderness",
                    transitionType : "outdoor",
                    targetX : 51,
                    targetY : 5
                },
                {
                    type : "encounter",
                    id : "vezuGuards",
                    x : 14,
                    y : 42,
                    icon : "spectre.png",
                    ambushed : true,
                    text : "The lair is guarded by foul undead denizens. They attack!",
                    gold : 28,
                    creatures : [
                        {"name" : "Spectre"},
                        {"name" : "Ghoul"},
                        {"name" : "Skeleton Guard"},
                        {"name" : "Zombie"}
                    ],
                    items : [
                        {name : "Wand of Fire"}
                    ]
                },
                {
                    type : "encounter",
                    id : "vezuCyclops",
                    x : 5,
                    y : 34,
                    icon : "cyclops.png",
                    ambushed : true,
                    text : "Enormous one-eyed humanoids lunge at you!",
                    gold : 15,
                    creatures : [
                        {"name" : "Cyclops"},
                        {"name" : "Cyclops"},
                        {"name" : "Cyclops"},
                        {"name" : "Cyclops"}
                    ],
                    items : [
                        {name : "Speed Boots"}
                    ]
                },
                {
                    type : "encounter",
                    id : "vezuWraith",
                    x : 8,
                    y : 19,
                    icon : "wraith2.png",
                    text : "A powerful undead form stands before you. \"Those who do not bow before Vezu shall be destroyed!\" it shrieks!",
                    gold : 37,
                    creatures : [
                        {"name" : "Wraith"},
                        {"name" : "Zombie", bonus : 2, hitPoints : 10},
                        {"name" : "Zombie", bonus : 2, hitPoints : 10},
                        {"name" : "Zombie", bonus : 2, hitPoints : 10},
                        {"name" : "Zombie", bonus : 2, hitPoints : 10}
                    ],
                    items : [
                        {name : "Potion of Rage"}
                    ]
                },
                {
                    type : "encounter",
                    id : "vezuGolems",
                    x : 24,
                    y : 5,
                    icon : "rockGolem.png",
                    text : "Mounds of clay and rock form into rudimentary bodies and start to shamble toward you, with murderous intent!",
                    gold : 15,
                    creatures : [
                        {"name" : "Rock Golem"},
                        {"name" : "Rock Golem"},
                        {"name" : "Clay Golem"},
                        {"name" : "Clay Golem"}
                    ],
                    items : [
                        {name : "Archer's Helm"}
                    ]
                },
                {
                    type : "encounter",
                    id : "vezu",
                    x : 3,
                    y : 3,
                    icon : "vezu.png",
                    text : "You face Vezu, the mighty and ancient Red Dragon! \"So these are the heroes that defeated my minions at Vygurn Tower? I am disappointed, I expected better!\" He snorts, then attacks!",
                    sets : "gameOver", // This variable 'gameOver' is special, it can unlock new character classes. See 'Mercenary' class above.
                    gold : 0,
                    creatures : [
                        {"name" : "Vezu"},
                        {"name" : "Ghoul"},
                        {"name" : "Mummy"}
                    ],
                    items : [
                    ]
                },
                {
                    type : "encounter",
                    id : "vezuTreasure",
                    x : 3,
                    y : 1,
                    icon : "chest.png",
                    text : "Congratulations, you have saved the Three Kingdoms from the evil Vezu! In celebration of your victory, you raid Vezu's loot!",
                    gold : 275,
                    creatures : [
                    ],
                    items : [
                    ]
                }
            ]
        },

        "outdoorCombat" : { // These are the combat maps. Note that map data can be specified inline instead of referring to a file.
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
        "splashScreen" : { // This special map appears when the player first starts the game
            name: "Splash Screen",
            width: 9,
            height: 9,
            map : "@splash.txt",
            features : [
                {
                    type : "sign",
                    x : 4,
                    y : 1,
                    icon : "gurk_01.png"
                },
                {
                    type : "sign",
                    x : 5,
                    y : 1,
                    icon : "gurk_02.png"
                },
                {
                    type : "sign",
                    x : 6,
                    y : 1,
                    icon : "gurk_03.png"
                },
                {
                    type : "sign",
                    x : 7,
                    y : 1,
                    icon : "gurk_04.png"
                },
                {
                    type : "sign",
                    x : 4,
                    y : 2,
                    icon : "gurk_05.png"
                },
                {
                    type : "sign",
                    x : 5,
                    y : 2,
                    icon : "gurk_06.png"
                },
                {
                    type : "sign",
                    x : 6,
                    y : 2,
                    icon : "gurk_07.png"
                },
                {
                    type : "sign",
                    x : 7,
                    y : 2,
                    icon : "gurk_08.png"
                },
                {
                    type : "sign",
                    x : 1,
                    y : 7,
                    icon : "ship.png"
                },
                {
                    type : "sign",
                    x : 1,
                    y : 3,
                    icon : "bigCastleLeft.png"
                },
                {
                    type : "sign",
                    x : 2,
                    y : 3,
                    icon : "bigCastleCenter.png"
                },
                {
                    type : "sign",
                    x : 3,
                    y : 3,
                    icon : "bigCastleRight.png"
                },
                {
                    type : "sign",
                    x : 7,
                    y : 7,
                    icon : "temple.png"
                }
            ]
        }
    },

    //// Game Start Data

    start : [ // This is where you start after making a new game
        {
            map : "town",
            x : 12,
            y : 10,
            gold : 20
        }/* // You can specify later starting positions based on set variables. The below would be a bad idea, though, since all ships are reset after death, so the party would be stranded without a boat.
        ,
        {
            after : "towerDone",
            map : "keep",
            x : 11,
            y : 9,
            gold : 20
        }
        */
    ]
}; // Well, that's it. Easy right? No, no it isn't.