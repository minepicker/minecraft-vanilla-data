/**
 * All possible MinecraftBiomeTypes
 */
declare enum MinecraftBiomeTypes {
    BambooJungle = "minecraft:bamboo_jungle",
    BambooJungleHills = "minecraft:bamboo_jungle_hills",
    BasaltDeltas = "minecraft:basalt_deltas",
    Beach = "minecraft:beach",
    BirchForest = "minecraft:birch_forest",
    BirchForestHills = "minecraft:birch_forest_hills",
    BirchForestHillsMutated = "minecraft:birch_forest_hills_mutated",
    BirchForestMutated = "minecraft:birch_forest_mutated",
    CherryGrove = "minecraft:cherry_grove",
    ColdBeach = "minecraft:cold_beach",
    ColdOcean = "minecraft:cold_ocean",
    ColdTaiga = "minecraft:cold_taiga",
    ColdTaigaHills = "minecraft:cold_taiga_hills",
    ColdTaigaMutated = "minecraft:cold_taiga_mutated",
    CrimsonForest = "minecraft:crimson_forest",
    DeepColdOcean = "minecraft:deep_cold_ocean",
    DeepDark = "minecraft:deep_dark",
    DeepFrozenOcean = "minecraft:deep_frozen_ocean",
    DeepLukewarmOcean = "minecraft:deep_lukewarm_ocean",
    DeepOcean = "minecraft:deep_ocean",
    DeepWarmOcean = "minecraft:deep_warm_ocean",
    Desert = "minecraft:desert",
    DesertHills = "minecraft:desert_hills",
    DesertMutated = "minecraft:desert_mutated",
    DripstoneCaves = "minecraft:dripstone_caves",
    ExtremeHills = "minecraft:extreme_hills",
    ExtremeHillsEdge = "minecraft:extreme_hills_edge",
    ExtremeHillsMutated = "minecraft:extreme_hills_mutated",
    ExtremeHillsPlusTrees = "minecraft:extreme_hills_plus_trees",
    ExtremeHillsPlusTreesMutated = "minecraft:extreme_hills_plus_trees_mutated",
    FlowerForest = "minecraft:flower_forest",
    Forest = "minecraft:forest",
    ForestHills = "minecraft:forest_hills",
    FrozenOcean = "minecraft:frozen_ocean",
    FrozenPeaks = "minecraft:frozen_peaks",
    FrozenRiver = "minecraft:frozen_river",
    Grove = "minecraft:grove",
    Hell = "minecraft:hell",
    IceMountains = "minecraft:ice_mountains",
    IcePlains = "minecraft:ice_plains",
    IcePlainsSpikes = "minecraft:ice_plains_spikes",
    JaggedPeaks = "minecraft:jagged_peaks",
    Jungle = "minecraft:jungle",
    JungleEdge = "minecraft:jungle_edge",
    JungleEdgeMutated = "minecraft:jungle_edge_mutated",
    JungleHills = "minecraft:jungle_hills",
    JungleMutated = "minecraft:jungle_mutated",
    LegacyFrozenOcean = "minecraft:legacy_frozen_ocean",
    LukewarmOcean = "minecraft:lukewarm_ocean",
    LushCaves = "minecraft:lush_caves",
    MangroveSwamp = "minecraft:mangrove_swamp",
    Meadow = "minecraft:meadow",
    MegaTaiga = "minecraft:mega_taiga",
    MegaTaigaHills = "minecraft:mega_taiga_hills",
    Mesa = "minecraft:mesa",
    MesaBryce = "minecraft:mesa_bryce",
    MesaPlateau = "minecraft:mesa_plateau",
    MesaPlateauMutated = "minecraft:mesa_plateau_mutated",
    MesaPlateauStone = "minecraft:mesa_plateau_stone",
    MesaPlateauStoneMutated = "minecraft:mesa_plateau_stone_mutated",
    MushroomIsland = "minecraft:mushroom_island",
    MushroomIslandShore = "minecraft:mushroom_island_shore",
    Ocean = "minecraft:ocean",
    PaleGarden = "minecraft:pale_garden",
    Plains = "minecraft:plains",
    RedwoodTaigaHillsMutated = "minecraft:redwood_taiga_hills_mutated",
    RedwoodTaigaMutated = "minecraft:redwood_taiga_mutated",
    River = "minecraft:river",
    RoofedForest = "minecraft:roofed_forest",
    RoofedForestMutated = "minecraft:roofed_forest_mutated",
    Savanna = "minecraft:savanna",
    SavannaMutated = "minecraft:savanna_mutated",
    SavannaPlateau = "minecraft:savanna_plateau",
    SavannaPlateauMutated = "minecraft:savanna_plateau_mutated",
    SnowySlopes = "minecraft:snowy_slopes",
    SoulsandValley = "minecraft:soulsand_valley",
    StoneBeach = "minecraft:stone_beach",
    StonyPeaks = "minecraft:stony_peaks",
    SunflowerPlains = "minecraft:sunflower_plains",
    Swampland = "minecraft:swampland",
    SwamplandMutated = "minecraft:swampland_mutated",
    Taiga = "minecraft:taiga",
    TaigaHills = "minecraft:taiga_hills",
    TaigaMutated = "minecraft:taiga_mutated",
    TheEnd = "minecraft:the_end",
    WarmOcean = "minecraft:warm_ocean",
    WarpedForest = "minecraft:warped_forest"
}
/**
 * Union type equivalent of the MinecraftBiomeTypes enum.
 */
type MinecraftBiomeTypesUnion = keyof typeof MinecraftBiomeTypes;

/**
 * All possible MinecraftBlockTypes
 */
declare enum MinecraftBlockTypes {
    AcaciaButton = "minecraft:acacia_button",
    AcaciaDoor = "minecraft:acacia_door",
    AcaciaDoubleSlab = "minecraft:acacia_double_slab",
    AcaciaFence = "minecraft:acacia_fence",
    AcaciaFenceGate = "minecraft:acacia_fence_gate",
    AcaciaHangingSign = "minecraft:acacia_hanging_sign",
    AcaciaLeaves = "minecraft:acacia_leaves",
    AcaciaLog = "minecraft:acacia_log",
    AcaciaPlanks = "minecraft:acacia_planks",
    AcaciaPressurePlate = "minecraft:acacia_pressure_plate",
    AcaciaSapling = "minecraft:acacia_sapling",
    AcaciaShelf = "minecraft:acacia_shelf",
    AcaciaSlab = "minecraft:acacia_slab",
    AcaciaStairs = "minecraft:acacia_stairs",
    AcaciaStandingSign = "minecraft:acacia_standing_sign",
    AcaciaTrapdoor = "minecraft:acacia_trapdoor",
    AcaciaWallSign = "minecraft:acacia_wall_sign",
    AcaciaWood = "minecraft:acacia_wood",
    ActivatorRail = "minecraft:activator_rail",
    Air = "minecraft:air",
    Allium = "minecraft:allium",
    Allow = "minecraft:allow",
    AmethystBlock = "minecraft:amethyst_block",
    AmethystCluster = "minecraft:amethyst_cluster",
    AncientDebris = "minecraft:ancient_debris",
    Andesite = "minecraft:andesite",
    AndesiteDoubleSlab = "minecraft:andesite_double_slab",
    AndesiteSlab = "minecraft:andesite_slab",
    AndesiteStairs = "minecraft:andesite_stairs",
    AndesiteWall = "minecraft:andesite_wall",
    Anvil = "minecraft:anvil",
    Azalea = "minecraft:azalea",
    AzaleaLeaves = "minecraft:azalea_leaves",
    AzaleaLeavesFlowered = "minecraft:azalea_leaves_flowered",
    AzureBluet = "minecraft:azure_bluet",
    Bamboo = "minecraft:bamboo",
    BambooBlock = "minecraft:bamboo_block",
    BambooButton = "minecraft:bamboo_button",
    BambooDoor = "minecraft:bamboo_door",
    BambooDoubleSlab = "minecraft:bamboo_double_slab",
    BambooFence = "minecraft:bamboo_fence",
    BambooFenceGate = "minecraft:bamboo_fence_gate",
    BambooHangingSign = "minecraft:bamboo_hanging_sign",
    BambooMosaic = "minecraft:bamboo_mosaic",
    BambooMosaicDoubleSlab = "minecraft:bamboo_mosaic_double_slab",
    BambooMosaicSlab = "minecraft:bamboo_mosaic_slab",
    BambooMosaicStairs = "minecraft:bamboo_mosaic_stairs",
    BambooPlanks = "minecraft:bamboo_planks",
    BambooPressurePlate = "minecraft:bamboo_pressure_plate",
    BambooSapling = "minecraft:bamboo_sapling",
    BambooShelf = "minecraft:bamboo_shelf",
    BambooSlab = "minecraft:bamboo_slab",
    BambooStairs = "minecraft:bamboo_stairs",
    BambooStandingSign = "minecraft:bamboo_standing_sign",
    BambooTrapdoor = "minecraft:bamboo_trapdoor",
    BambooWallSign = "minecraft:bamboo_wall_sign",
    Barrel = "minecraft:barrel",
    Barrier = "minecraft:barrier",
    Basalt = "minecraft:basalt",
    Beacon = "minecraft:beacon",
    Bed = "minecraft:bed",
    Bedrock = "minecraft:bedrock",
    BeeNest = "minecraft:bee_nest",
    Beehive = "minecraft:beehive",
    Beetroot = "minecraft:beetroot",
    Bell = "minecraft:bell",
    BigDripleaf = "minecraft:big_dripleaf",
    BirchButton = "minecraft:birch_button",
    BirchDoor = "minecraft:birch_door",
    BirchDoubleSlab = "minecraft:birch_double_slab",
    BirchFence = "minecraft:birch_fence",
    BirchFenceGate = "minecraft:birch_fence_gate",
    BirchHangingSign = "minecraft:birch_hanging_sign",
    BirchLeaves = "minecraft:birch_leaves",
    BirchLog = "minecraft:birch_log",
    BirchPlanks = "minecraft:birch_planks",
    BirchPressurePlate = "minecraft:birch_pressure_plate",
    BirchSapling = "minecraft:birch_sapling",
    BirchShelf = "minecraft:birch_shelf",
    BirchSlab = "minecraft:birch_slab",
    BirchStairs = "minecraft:birch_stairs",
    BirchStandingSign = "minecraft:birch_standing_sign",
    BirchTrapdoor = "minecraft:birch_trapdoor",
    BirchWallSign = "minecraft:birch_wall_sign",
    BirchWood = "minecraft:birch_wood",
    BlackCandle = "minecraft:black_candle",
    BlackCandleCake = "minecraft:black_candle_cake",
    BlackCarpet = "minecraft:black_carpet",
    BlackConcrete = "minecraft:black_concrete",
    BlackConcretePowder = "minecraft:black_concrete_powder",
    BlackGlazedTerracotta = "minecraft:black_glazed_terracotta",
    BlackShulkerBox = "minecraft:black_shulker_box",
    BlackStainedGlass = "minecraft:black_stained_glass",
    BlackStainedGlassPane = "minecraft:black_stained_glass_pane",
    BlackTerracotta = "minecraft:black_terracotta",
    BlackWool = "minecraft:black_wool",
    Blackstone = "minecraft:blackstone",
    BlackstoneDoubleSlab = "minecraft:blackstone_double_slab",
    BlackstoneSlab = "minecraft:blackstone_slab",
    BlackstoneStairs = "minecraft:blackstone_stairs",
    BlackstoneWall = "minecraft:blackstone_wall",
    BlastFurnace = "minecraft:blast_furnace",
    BlueCandle = "minecraft:blue_candle",
    BlueCandleCake = "minecraft:blue_candle_cake",
    BlueCarpet = "minecraft:blue_carpet",
    BlueConcrete = "minecraft:blue_concrete",
    BlueConcretePowder = "minecraft:blue_concrete_powder",
    BlueGlazedTerracotta = "minecraft:blue_glazed_terracotta",
    BlueIce = "minecraft:blue_ice",
    BlueOrchid = "minecraft:blue_orchid",
    BlueShulkerBox = "minecraft:blue_shulker_box",
    BlueStainedGlass = "minecraft:blue_stained_glass",
    BlueStainedGlassPane = "minecraft:blue_stained_glass_pane",
    BlueTerracotta = "minecraft:blue_terracotta",
    BlueWool = "minecraft:blue_wool",
    BoneBlock = "minecraft:bone_block",
    Bookshelf = "minecraft:bookshelf",
    BorderBlock = "minecraft:border_block",
    BrainCoral = "minecraft:brain_coral",
    BrainCoralBlock = "minecraft:brain_coral_block",
    BrainCoralFan = "minecraft:brain_coral_fan",
    BrainCoralWallFan = "minecraft:brain_coral_wall_fan",
    BrewingStand = "minecraft:brewing_stand",
    BrickBlock = "minecraft:brick_block",
    BrickDoubleSlab = "minecraft:brick_double_slab",
    BrickSlab = "minecraft:brick_slab",
    BrickStairs = "minecraft:brick_stairs",
    BrickWall = "minecraft:brick_wall",
    BrownCandle = "minecraft:brown_candle",
    BrownCandleCake = "minecraft:brown_candle_cake",
    BrownCarpet = "minecraft:brown_carpet",
    BrownConcrete = "minecraft:brown_concrete",
    BrownConcretePowder = "minecraft:brown_concrete_powder",
    BrownGlazedTerracotta = "minecraft:brown_glazed_terracotta",
    BrownMushroom = "minecraft:brown_mushroom",
    BrownMushroomBlock = "minecraft:brown_mushroom_block",
    BrownShulkerBox = "minecraft:brown_shulker_box",
    BrownStainedGlass = "minecraft:brown_stained_glass",
    BrownStainedGlassPane = "minecraft:brown_stained_glass_pane",
    BrownTerracotta = "minecraft:brown_terracotta",
    BrownWool = "minecraft:brown_wool",
    BubbleColumn = "minecraft:bubble_column",
    BubbleCoral = "minecraft:bubble_coral",
    BubbleCoralBlock = "minecraft:bubble_coral_block",
    BubbleCoralFan = "minecraft:bubble_coral_fan",
    BubbleCoralWallFan = "minecraft:bubble_coral_wall_fan",
    BuddingAmethyst = "minecraft:budding_amethyst",
    Bush = "minecraft:bush",
    Cactus = "minecraft:cactus",
    CactusFlower = "minecraft:cactus_flower",
    Cake = "minecraft:cake",
    Calcite = "minecraft:calcite",
    CalibratedSculkSensor = "minecraft:calibrated_sculk_sensor",
    Camera = "minecraft:camera",
    Campfire = "minecraft:campfire",
    Candle = "minecraft:candle",
    CandleCake = "minecraft:candle_cake",
    Carrots = "minecraft:carrots",
    CartographyTable = "minecraft:cartography_table",
    CarvedPumpkin = "minecraft:carved_pumpkin",
    Cauldron = "minecraft:cauldron",
    CaveVines = "minecraft:cave_vines",
    CaveVinesBodyWithBerries = "minecraft:cave_vines_body_with_berries",
    CaveVinesHeadWithBerries = "minecraft:cave_vines_head_with_berries",
    ChainCommandBlock = "minecraft:chain_command_block",
    ChemicalHeat = "minecraft:chemical_heat",
    CherryButton = "minecraft:cherry_button",
    CherryDoor = "minecraft:cherry_door",
    CherryDoubleSlab = "minecraft:cherry_double_slab",
    CherryFence = "minecraft:cherry_fence",
    CherryFenceGate = "minecraft:cherry_fence_gate",
    CherryHangingSign = "minecraft:cherry_hanging_sign",
    CherryLeaves = "minecraft:cherry_leaves",
    CherryLog = "minecraft:cherry_log",
    CherryPlanks = "minecraft:cherry_planks",
    CherryPressurePlate = "minecraft:cherry_pressure_plate",
    CherrySapling = "minecraft:cherry_sapling",
    CherryShelf = "minecraft:cherry_shelf",
    CherrySlab = "minecraft:cherry_slab",
    CherryStairs = "minecraft:cherry_stairs",
    CherryStandingSign = "minecraft:cherry_standing_sign",
    CherryTrapdoor = "minecraft:cherry_trapdoor",
    CherryWallSign = "minecraft:cherry_wall_sign",
    CherryWood = "minecraft:cherry_wood",
    Chest = "minecraft:chest",
    ChippedAnvil = "minecraft:chipped_anvil",
    ChiseledBookshelf = "minecraft:chiseled_bookshelf",
    ChiseledCopper = "minecraft:chiseled_copper",
    ChiseledDeepslate = "minecraft:chiseled_deepslate",
    ChiseledNetherBricks = "minecraft:chiseled_nether_bricks",
    ChiseledPolishedBlackstone = "minecraft:chiseled_polished_blackstone",
    ChiseledQuartzBlock = "minecraft:chiseled_quartz_block",
    ChiseledRedSandstone = "minecraft:chiseled_red_sandstone",
    ChiseledResinBricks = "minecraft:chiseled_resin_bricks",
    ChiseledSandstone = "minecraft:chiseled_sandstone",
    ChiseledStoneBricks = "minecraft:chiseled_stone_bricks",
    ChiseledTuff = "minecraft:chiseled_tuff",
    ChiseledTuffBricks = "minecraft:chiseled_tuff_bricks",
    ChorusFlower = "minecraft:chorus_flower",
    ChorusPlant = "minecraft:chorus_plant",
    Clay = "minecraft:clay",
    ClosedEyeblossom = "minecraft:closed_eyeblossom",
    CoalBlock = "minecraft:coal_block",
    CoalOre = "minecraft:coal_ore",
    CoarseDirt = "minecraft:coarse_dirt",
    CobbledDeepslate = "minecraft:cobbled_deepslate",
    CobbledDeepslateDoubleSlab = "minecraft:cobbled_deepslate_double_slab",
    CobbledDeepslateSlab = "minecraft:cobbled_deepslate_slab",
    CobbledDeepslateStairs = "minecraft:cobbled_deepslate_stairs",
    CobbledDeepslateWall = "minecraft:cobbled_deepslate_wall",
    Cobblestone = "minecraft:cobblestone",
    CobblestoneDoubleSlab = "minecraft:cobblestone_double_slab",
    CobblestoneSlab = "minecraft:cobblestone_slab",
    CobblestoneWall = "minecraft:cobblestone_wall",
    Cocoa = "minecraft:cocoa",
    ColoredTorchBlue = "minecraft:colored_torch_blue",
    ColoredTorchGreen = "minecraft:colored_torch_green",
    ColoredTorchPurple = "minecraft:colored_torch_purple",
    ColoredTorchRed = "minecraft:colored_torch_red",
    CommandBlock = "minecraft:command_block",
    Composter = "minecraft:composter",
    CompoundCreator = "minecraft:compound_creator",
    Conduit = "minecraft:conduit",
    CopperBars = "minecraft:copper_bars",
    CopperBlock = "minecraft:copper_block",
    CopperBulb = "minecraft:copper_bulb",
    CopperChain = "minecraft:copper_chain",
    CopperChest = "minecraft:copper_chest",
    CopperDoor = "minecraft:copper_door",
    CopperGolemStatue = "minecraft:copper_golem_statue",
    CopperGrate = "minecraft:copper_grate",
    CopperLantern = "minecraft:copper_lantern",
    CopperOre = "minecraft:copper_ore",
    CopperTorch = "minecraft:copper_torch",
    CopperTrapdoor = "minecraft:copper_trapdoor",
    Cornflower = "minecraft:cornflower",
    CrackedDeepslateBricks = "minecraft:cracked_deepslate_bricks",
    CrackedDeepslateTiles = "minecraft:cracked_deepslate_tiles",
    CrackedNetherBricks = "minecraft:cracked_nether_bricks",
    CrackedPolishedBlackstoneBricks = "minecraft:cracked_polished_blackstone_bricks",
    CrackedStoneBricks = "minecraft:cracked_stone_bricks",
    Crafter = "minecraft:crafter",
    CraftingTable = "minecraft:crafting_table",
    CreakingHeart = "minecraft:creaking_heart",
    CreeperHead = "minecraft:creeper_head",
    CrimsonButton = "minecraft:crimson_button",
    CrimsonDoor = "minecraft:crimson_door",
    CrimsonDoubleSlab = "minecraft:crimson_double_slab",
    CrimsonFence = "minecraft:crimson_fence",
    CrimsonFenceGate = "minecraft:crimson_fence_gate",
    CrimsonFungus = "minecraft:crimson_fungus",
    CrimsonHangingSign = "minecraft:crimson_hanging_sign",
    CrimsonHyphae = "minecraft:crimson_hyphae",
    CrimsonNylium = "minecraft:crimson_nylium",
    CrimsonPlanks = "minecraft:crimson_planks",
    CrimsonPressurePlate = "minecraft:crimson_pressure_plate",
    CrimsonRoots = "minecraft:crimson_roots",
    CrimsonShelf = "minecraft:crimson_shelf",
    CrimsonSlab = "minecraft:crimson_slab",
    CrimsonStairs = "minecraft:crimson_stairs",
    CrimsonStandingSign = "minecraft:crimson_standing_sign",
    CrimsonStem = "minecraft:crimson_stem",
    CrimsonTrapdoor = "minecraft:crimson_trapdoor",
    CrimsonWallSign = "minecraft:crimson_wall_sign",
    CryingObsidian = "minecraft:crying_obsidian",
    CutCopper = "minecraft:cut_copper",
    CutCopperSlab = "minecraft:cut_copper_slab",
    CutCopperStairs = "minecraft:cut_copper_stairs",
    CutRedSandstone = "minecraft:cut_red_sandstone",
    CutRedSandstoneDoubleSlab = "minecraft:cut_red_sandstone_double_slab",
    CutRedSandstoneSlab = "minecraft:cut_red_sandstone_slab",
    CutSandstone = "minecraft:cut_sandstone",
    CutSandstoneDoubleSlab = "minecraft:cut_sandstone_double_slab",
    CutSandstoneSlab = "minecraft:cut_sandstone_slab",
    CyanCandle = "minecraft:cyan_candle",
    CyanCandleCake = "minecraft:cyan_candle_cake",
    CyanCarpet = "minecraft:cyan_carpet",
    CyanConcrete = "minecraft:cyan_concrete",
    CyanConcretePowder = "minecraft:cyan_concrete_powder",
    CyanGlazedTerracotta = "minecraft:cyan_glazed_terracotta",
    CyanShulkerBox = "minecraft:cyan_shulker_box",
    CyanStainedGlass = "minecraft:cyan_stained_glass",
    CyanStainedGlassPane = "minecraft:cyan_stained_glass_pane",
    CyanTerracotta = "minecraft:cyan_terracotta",
    CyanWool = "minecraft:cyan_wool",
    DamagedAnvil = "minecraft:damaged_anvil",
    Dandelion = "minecraft:dandelion",
    DarkOakButton = "minecraft:dark_oak_button",
    DarkOakDoor = "minecraft:dark_oak_door",
    DarkOakDoubleSlab = "minecraft:dark_oak_double_slab",
    DarkOakFence = "minecraft:dark_oak_fence",
    DarkOakFenceGate = "minecraft:dark_oak_fence_gate",
    DarkOakHangingSign = "minecraft:dark_oak_hanging_sign",
    DarkOakLeaves = "minecraft:dark_oak_leaves",
    DarkOakLog = "minecraft:dark_oak_log",
    DarkOakPlanks = "minecraft:dark_oak_planks",
    DarkOakPressurePlate = "minecraft:dark_oak_pressure_plate",
    DarkOakSapling = "minecraft:dark_oak_sapling",
    DarkOakShelf = "minecraft:dark_oak_shelf",
    DarkOakSlab = "minecraft:dark_oak_slab",
    DarkOakStairs = "minecraft:dark_oak_stairs",
    DarkOakTrapdoor = "minecraft:dark_oak_trapdoor",
    DarkOakWood = "minecraft:dark_oak_wood",
    DarkPrismarine = "minecraft:dark_prismarine",
    DarkPrismarineDoubleSlab = "minecraft:dark_prismarine_double_slab",
    DarkPrismarineSlab = "minecraft:dark_prismarine_slab",
    DarkPrismarineStairs = "minecraft:dark_prismarine_stairs",
    DarkoakStandingSign = "minecraft:darkoak_standing_sign",
    DarkoakWallSign = "minecraft:darkoak_wall_sign",
    DaylightDetector = "minecraft:daylight_detector",
    DaylightDetectorInverted = "minecraft:daylight_detector_inverted",
    DeadBrainCoral = "minecraft:dead_brain_coral",
    DeadBrainCoralBlock = "minecraft:dead_brain_coral_block",
    DeadBrainCoralFan = "minecraft:dead_brain_coral_fan",
    DeadBrainCoralWallFan = "minecraft:dead_brain_coral_wall_fan",
    DeadBubbleCoral = "minecraft:dead_bubble_coral",
    DeadBubbleCoralBlock = "minecraft:dead_bubble_coral_block",
    DeadBubbleCoralFan = "minecraft:dead_bubble_coral_fan",
    DeadBubbleCoralWallFan = "minecraft:dead_bubble_coral_wall_fan",
    DeadFireCoral = "minecraft:dead_fire_coral",
    DeadFireCoralBlock = "minecraft:dead_fire_coral_block",
    DeadFireCoralFan = "minecraft:dead_fire_coral_fan",
    DeadFireCoralWallFan = "minecraft:dead_fire_coral_wall_fan",
    DeadHornCoral = "minecraft:dead_horn_coral",
    DeadHornCoralBlock = "minecraft:dead_horn_coral_block",
    DeadHornCoralFan = "minecraft:dead_horn_coral_fan",
    DeadHornCoralWallFan = "minecraft:dead_horn_coral_wall_fan",
    DeadTubeCoral = "minecraft:dead_tube_coral",
    DeadTubeCoralBlock = "minecraft:dead_tube_coral_block",
    DeadTubeCoralFan = "minecraft:dead_tube_coral_fan",
    DeadTubeCoralWallFan = "minecraft:dead_tube_coral_wall_fan",
    Deadbush = "minecraft:deadbush",
    DecoratedPot = "minecraft:decorated_pot",
    Deepslate = "minecraft:deepslate",
    DeepslateBrickDoubleSlab = "minecraft:deepslate_brick_double_slab",
    DeepslateBrickSlab = "minecraft:deepslate_brick_slab",
    DeepslateBrickStairs = "minecraft:deepslate_brick_stairs",
    DeepslateBrickWall = "minecraft:deepslate_brick_wall",
    DeepslateBricks = "minecraft:deepslate_bricks",
    DeepslateCoalOre = "minecraft:deepslate_coal_ore",
    DeepslateCopperOre = "minecraft:deepslate_copper_ore",
    DeepslateDiamondOre = "minecraft:deepslate_diamond_ore",
    DeepslateEmeraldOre = "minecraft:deepslate_emerald_ore",
    DeepslateGoldOre = "minecraft:deepslate_gold_ore",
    DeepslateIronOre = "minecraft:deepslate_iron_ore",
    DeepslateLapisOre = "minecraft:deepslate_lapis_ore",
    DeepslateRedstoneOre = "minecraft:deepslate_redstone_ore",
    DeepslateTileDoubleSlab = "minecraft:deepslate_tile_double_slab",
    DeepslateTileSlab = "minecraft:deepslate_tile_slab",
    DeepslateTileStairs = "minecraft:deepslate_tile_stairs",
    DeepslateTileWall = "minecraft:deepslate_tile_wall",
    DeepslateTiles = "minecraft:deepslate_tiles",
    Deny = "minecraft:deny",
    DetectorRail = "minecraft:detector_rail",
    DiamondBlock = "minecraft:diamond_block",
    DiamondOre = "minecraft:diamond_ore",
    Diorite = "minecraft:diorite",
    DioriteDoubleSlab = "minecraft:diorite_double_slab",
    DioriteSlab = "minecraft:diorite_slab",
    DioriteStairs = "minecraft:diorite_stairs",
    DioriteWall = "minecraft:diorite_wall",
    Dirt = "minecraft:dirt",
    DirtWithRoots = "minecraft:dirt_with_roots",
    Dispenser = "minecraft:dispenser",
    DoubleCutCopperSlab = "minecraft:double_cut_copper_slab",
    DragonEgg = "minecraft:dragon_egg",
    DragonHead = "minecraft:dragon_head",
    DriedGhast = "minecraft:dried_ghast",
    DriedKelpBlock = "minecraft:dried_kelp_block",
    DripstoneBlock = "minecraft:dripstone_block",
    Dropper = "minecraft:dropper",
    Element0 = "minecraft:element_0",
    Element1 = "minecraft:element_1",
    Element10 = "minecraft:element_10",
    Element100 = "minecraft:element_100",
    Element101 = "minecraft:element_101",
    Element102 = "minecraft:element_102",
    Element103 = "minecraft:element_103",
    Element104 = "minecraft:element_104",
    Element105 = "minecraft:element_105",
    Element106 = "minecraft:element_106",
    Element107 = "minecraft:element_107",
    Element108 = "minecraft:element_108",
    Element109 = "minecraft:element_109",
    Element11 = "minecraft:element_11",
    Element110 = "minecraft:element_110",
    Element111 = "minecraft:element_111",
    Element112 = "minecraft:element_112",
    Element113 = "minecraft:element_113",
    Element114 = "minecraft:element_114",
    Element115 = "minecraft:element_115",
    Element116 = "minecraft:element_116",
    Element117 = "minecraft:element_117",
    Element118 = "minecraft:element_118",
    Element12 = "minecraft:element_12",
    Element13 = "minecraft:element_13",
    Element14 = "minecraft:element_14",
    Element15 = "minecraft:element_15",
    Element16 = "minecraft:element_16",
    Element17 = "minecraft:element_17",
    Element18 = "minecraft:element_18",
    Element19 = "minecraft:element_19",
    Element2 = "minecraft:element_2",
    Element20 = "minecraft:element_20",
    Element21 = "minecraft:element_21",
    Element22 = "minecraft:element_22",
    Element23 = "minecraft:element_23",
    Element24 = "minecraft:element_24",
    Element25 = "minecraft:element_25",
    Element26 = "minecraft:element_26",
    Element27 = "minecraft:element_27",
    Element28 = "minecraft:element_28",
    Element29 = "minecraft:element_29",
    Element3 = "minecraft:element_3",
    Element30 = "minecraft:element_30",
    Element31 = "minecraft:element_31",
    Element32 = "minecraft:element_32",
    Element33 = "minecraft:element_33",
    Element34 = "minecraft:element_34",
    Element35 = "minecraft:element_35",
    Element36 = "minecraft:element_36",
    Element37 = "minecraft:element_37",
    Element38 = "minecraft:element_38",
    Element39 = "minecraft:element_39",
    Element4 = "minecraft:element_4",
    Element40 = "minecraft:element_40",
    Element41 = "minecraft:element_41",
    Element42 = "minecraft:element_42",
    Element43 = "minecraft:element_43",
    Element44 = "minecraft:element_44",
    Element45 = "minecraft:element_45",
    Element46 = "minecraft:element_46",
    Element47 = "minecraft:element_47",
    Element48 = "minecraft:element_48",
    Element49 = "minecraft:element_49",
    Element5 = "minecraft:element_5",
    Element50 = "minecraft:element_50",
    Element51 = "minecraft:element_51",
    Element52 = "minecraft:element_52",
    Element53 = "minecraft:element_53",
    Element54 = "minecraft:element_54",
    Element55 = "minecraft:element_55",
    Element56 = "minecraft:element_56",
    Element57 = "minecraft:element_57",
    Element58 = "minecraft:element_58",
    Element59 = "minecraft:element_59",
    Element6 = "minecraft:element_6",
    Element60 = "minecraft:element_60",
    Element61 = "minecraft:element_61",
    Element62 = "minecraft:element_62",
    Element63 = "minecraft:element_63",
    Element64 = "minecraft:element_64",
    Element65 = "minecraft:element_65",
    Element66 = "minecraft:element_66",
    Element67 = "minecraft:element_67",
    Element68 = "minecraft:element_68",
    Element69 = "minecraft:element_69",
    Element7 = "minecraft:element_7",
    Element70 = "minecraft:element_70",
    Element71 = "minecraft:element_71",
    Element72 = "minecraft:element_72",
    Element73 = "minecraft:element_73",
    Element74 = "minecraft:element_74",
    Element75 = "minecraft:element_75",
    Element76 = "minecraft:element_76",
    Element77 = "minecraft:element_77",
    Element78 = "minecraft:element_78",
    Element79 = "minecraft:element_79",
    Element8 = "minecraft:element_8",
    Element80 = "minecraft:element_80",
    Element81 = "minecraft:element_81",
    Element82 = "minecraft:element_82",
    Element83 = "minecraft:element_83",
    Element84 = "minecraft:element_84",
    Element85 = "minecraft:element_85",
    Element86 = "minecraft:element_86",
    Element87 = "minecraft:element_87",
    Element88 = "minecraft:element_88",
    Element89 = "minecraft:element_89",
    Element9 = "minecraft:element_9",
    Element90 = "minecraft:element_90",
    Element91 = "minecraft:element_91",
    Element92 = "minecraft:element_92",
    Element93 = "minecraft:element_93",
    Element94 = "minecraft:element_94",
    Element95 = "minecraft:element_95",
    Element96 = "minecraft:element_96",
    Element97 = "minecraft:element_97",
    Element98 = "minecraft:element_98",
    Element99 = "minecraft:element_99",
    ElementConstructor = "minecraft:element_constructor",
    EmeraldBlock = "minecraft:emerald_block",
    EmeraldOre = "minecraft:emerald_ore",
    EnchantingTable = "minecraft:enchanting_table",
    EndBrickStairs = "minecraft:end_brick_stairs",
    EndBricks = "minecraft:end_bricks",
    EndPortal = "minecraft:end_portal",
    EndPortalFrame = "minecraft:end_portal_frame",
    EndRod = "minecraft:end_rod",
    EndStone = "minecraft:end_stone",
    EndStoneBrickDoubleSlab = "minecraft:end_stone_brick_double_slab",
    EndStoneBrickSlab = "minecraft:end_stone_brick_slab",
    EndStoneBrickWall = "minecraft:end_stone_brick_wall",
    EnderChest = "minecraft:ender_chest",
    ExposedChiseledCopper = "minecraft:exposed_chiseled_copper",
    ExposedCopper = "minecraft:exposed_copper",
    ExposedCopperBars = "minecraft:exposed_copper_bars",
    ExposedCopperBulb = "minecraft:exposed_copper_bulb",
    ExposedCopperChain = "minecraft:exposed_copper_chain",
    ExposedCopperChest = "minecraft:exposed_copper_chest",
    ExposedCopperDoor = "minecraft:exposed_copper_door",
    ExposedCopperGolemStatue = "minecraft:exposed_copper_golem_statue",
    ExposedCopperGrate = "minecraft:exposed_copper_grate",
    ExposedCopperLantern = "minecraft:exposed_copper_lantern",
    ExposedCopperTrapdoor = "minecraft:exposed_copper_trapdoor",
    ExposedCutCopper = "minecraft:exposed_cut_copper",
    ExposedCutCopperSlab = "minecraft:exposed_cut_copper_slab",
    ExposedCutCopperStairs = "minecraft:exposed_cut_copper_stairs",
    ExposedDoubleCutCopperSlab = "minecraft:exposed_double_cut_copper_slab",
    ExposedLightningRod = "minecraft:exposed_lightning_rod",
    Farmland = "minecraft:farmland",
    FenceGate = "minecraft:fence_gate",
    Fern = "minecraft:fern",
    Fire = "minecraft:fire",
    FireCoral = "minecraft:fire_coral",
    FireCoralBlock = "minecraft:fire_coral_block",
    FireCoralFan = "minecraft:fire_coral_fan",
    FireCoralWallFan = "minecraft:fire_coral_wall_fan",
    FireflyBush = "minecraft:firefly_bush",
    FletchingTable = "minecraft:fletching_table",
    FlowerPot = "minecraft:flower_pot",
    FloweringAzalea = "minecraft:flowering_azalea",
    FlowingLava = "minecraft:flowing_lava",
    FlowingWater = "minecraft:flowing_water",
    Frame = "minecraft:frame",
    FrogSpawn = "minecraft:frog_spawn",
    FrostedIce = "minecraft:frosted_ice",
    Furnace = "minecraft:furnace",
    GildedBlackstone = "minecraft:gilded_blackstone",
    Glass = "minecraft:glass",
    GlassPane = "minecraft:glass_pane",
    GlowFrame = "minecraft:glow_frame",
    GlowLichen = "minecraft:glow_lichen",
    Glowstone = "minecraft:glowstone",
    GoldBlock = "minecraft:gold_block",
    GoldOre = "minecraft:gold_ore",
    GoldenRail = "minecraft:golden_rail",
    Granite = "minecraft:granite",
    GraniteDoubleSlab = "minecraft:granite_double_slab",
    GraniteSlab = "minecraft:granite_slab",
    GraniteStairs = "minecraft:granite_stairs",
    GraniteWall = "minecraft:granite_wall",
    GrassBlock = "minecraft:grass_block",
    GrassPath = "minecraft:grass_path",
    Gravel = "minecraft:gravel",
    GrayCandle = "minecraft:gray_candle",
    GrayCandleCake = "minecraft:gray_candle_cake",
    GrayCarpet = "minecraft:gray_carpet",
    GrayConcrete = "minecraft:gray_concrete",
    GrayConcretePowder = "minecraft:gray_concrete_powder",
    GrayGlazedTerracotta = "minecraft:gray_glazed_terracotta",
    GrayShulkerBox = "minecraft:gray_shulker_box",
    GrayStainedGlass = "minecraft:gray_stained_glass",
    GrayStainedGlassPane = "minecraft:gray_stained_glass_pane",
    GrayTerracotta = "minecraft:gray_terracotta",
    GrayWool = "minecraft:gray_wool",
    GreenCandle = "minecraft:green_candle",
    GreenCandleCake = "minecraft:green_candle_cake",
    GreenCarpet = "minecraft:green_carpet",
    GreenConcrete = "minecraft:green_concrete",
    GreenConcretePowder = "minecraft:green_concrete_powder",
    GreenGlazedTerracotta = "minecraft:green_glazed_terracotta",
    GreenShulkerBox = "minecraft:green_shulker_box",
    GreenStainedGlass = "minecraft:green_stained_glass",
    GreenStainedGlassPane = "minecraft:green_stained_glass_pane",
    GreenTerracotta = "minecraft:green_terracotta",
    GreenWool = "minecraft:green_wool",
    Grindstone = "minecraft:grindstone",
    HangingRoots = "minecraft:hanging_roots",
    HardBlackStainedGlass = "minecraft:hard_black_stained_glass",
    HardBlackStainedGlassPane = "minecraft:hard_black_stained_glass_pane",
    HardBlueStainedGlass = "minecraft:hard_blue_stained_glass",
    HardBlueStainedGlassPane = "minecraft:hard_blue_stained_glass_pane",
    HardBrownStainedGlass = "minecraft:hard_brown_stained_glass",
    HardBrownStainedGlassPane = "minecraft:hard_brown_stained_glass_pane",
    HardCyanStainedGlass = "minecraft:hard_cyan_stained_glass",
    HardCyanStainedGlassPane = "minecraft:hard_cyan_stained_glass_pane",
    HardGlass = "minecraft:hard_glass",
    HardGlassPane = "minecraft:hard_glass_pane",
    HardGrayStainedGlass = "minecraft:hard_gray_stained_glass",
    HardGrayStainedGlassPane = "minecraft:hard_gray_stained_glass_pane",
    HardGreenStainedGlass = "minecraft:hard_green_stained_glass",
    HardGreenStainedGlassPane = "minecraft:hard_green_stained_glass_pane",
    HardLightBlueStainedGlass = "minecraft:hard_light_blue_stained_glass",
    HardLightBlueStainedGlassPane = "minecraft:hard_light_blue_stained_glass_pane",
    HardLightGrayStainedGlass = "minecraft:hard_light_gray_stained_glass",
    HardLightGrayStainedGlassPane = "minecraft:hard_light_gray_stained_glass_pane",
    HardLimeStainedGlass = "minecraft:hard_lime_stained_glass",
    HardLimeStainedGlassPane = "minecraft:hard_lime_stained_glass_pane",
    HardMagentaStainedGlass = "minecraft:hard_magenta_stained_glass",
    HardMagentaStainedGlassPane = "minecraft:hard_magenta_stained_glass_pane",
    HardOrangeStainedGlass = "minecraft:hard_orange_stained_glass",
    HardOrangeStainedGlassPane = "minecraft:hard_orange_stained_glass_pane",
    HardPinkStainedGlass = "minecraft:hard_pink_stained_glass",
    HardPinkStainedGlassPane = "minecraft:hard_pink_stained_glass_pane",
    HardPurpleStainedGlass = "minecraft:hard_purple_stained_glass",
    HardPurpleStainedGlassPane = "minecraft:hard_purple_stained_glass_pane",
    HardRedStainedGlass = "minecraft:hard_red_stained_glass",
    HardRedStainedGlassPane = "minecraft:hard_red_stained_glass_pane",
    HardWhiteStainedGlass = "minecraft:hard_white_stained_glass",
    HardWhiteStainedGlassPane = "minecraft:hard_white_stained_glass_pane",
    HardYellowStainedGlass = "minecraft:hard_yellow_stained_glass",
    HardYellowStainedGlassPane = "minecraft:hard_yellow_stained_glass_pane",
    HardenedClay = "minecraft:hardened_clay",
    HayBlock = "minecraft:hay_block",
    HeavyCore = "minecraft:heavy_core",
    HeavyWeightedPressurePlate = "minecraft:heavy_weighted_pressure_plate",
    HoneyBlock = "minecraft:honey_block",
    HoneycombBlock = "minecraft:honeycomb_block",
    Hopper = "minecraft:hopper",
    HornCoral = "minecraft:horn_coral",
    HornCoralBlock = "minecraft:horn_coral_block",
    HornCoralFan = "minecraft:horn_coral_fan",
    HornCoralWallFan = "minecraft:horn_coral_wall_fan",
    Ice = "minecraft:ice",
    InfestedChiseledStoneBricks = "minecraft:infested_chiseled_stone_bricks",
    InfestedCobblestone = "minecraft:infested_cobblestone",
    InfestedCrackedStoneBricks = "minecraft:infested_cracked_stone_bricks",
    InfestedDeepslate = "minecraft:infested_deepslate",
    InfestedMossyStoneBricks = "minecraft:infested_mossy_stone_bricks",
    InfestedStone = "minecraft:infested_stone",
    InfestedStoneBricks = "minecraft:infested_stone_bricks",
    IronBars = "minecraft:iron_bars",
    IronBlock = "minecraft:iron_block",
    IronChain = "minecraft:iron_chain",
    IronDoor = "minecraft:iron_door",
    IronOre = "minecraft:iron_ore",
    IronTrapdoor = "minecraft:iron_trapdoor",
    Jigsaw = "minecraft:jigsaw",
    Jukebox = "minecraft:jukebox",
    JungleButton = "minecraft:jungle_button",
    JungleDoor = "minecraft:jungle_door",
    JungleDoubleSlab = "minecraft:jungle_double_slab",
    JungleFence = "minecraft:jungle_fence",
    JungleFenceGate = "minecraft:jungle_fence_gate",
    JungleHangingSign = "minecraft:jungle_hanging_sign",
    JungleLeaves = "minecraft:jungle_leaves",
    JungleLog = "minecraft:jungle_log",
    JunglePlanks = "minecraft:jungle_planks",
    JunglePressurePlate = "minecraft:jungle_pressure_plate",
    JungleSapling = "minecraft:jungle_sapling",
    JungleShelf = "minecraft:jungle_shelf",
    JungleSlab = "minecraft:jungle_slab",
    JungleStairs = "minecraft:jungle_stairs",
    JungleStandingSign = "minecraft:jungle_standing_sign",
    JungleTrapdoor = "minecraft:jungle_trapdoor",
    JungleWallSign = "minecraft:jungle_wall_sign",
    JungleWood = "minecraft:jungle_wood",
    Kelp = "minecraft:kelp",
    LabTable = "minecraft:lab_table",
    Ladder = "minecraft:ladder",
    Lantern = "minecraft:lantern",
    LapisBlock = "minecraft:lapis_block",
    LapisOre = "minecraft:lapis_ore",
    LargeAmethystBud = "minecraft:large_amethyst_bud",
    LargeFern = "minecraft:large_fern",
    Lava = "minecraft:lava",
    LeafLitter = "minecraft:leaf_litter",
    Lectern = "minecraft:lectern",
    Lever = "minecraft:lever",
    LightBlock0 = "minecraft:light_block_0",
    LightBlock1 = "minecraft:light_block_1",
    LightBlock10 = "minecraft:light_block_10",
    LightBlock11 = "minecraft:light_block_11",
    LightBlock12 = "minecraft:light_block_12",
    LightBlock13 = "minecraft:light_block_13",
    LightBlock14 = "minecraft:light_block_14",
    LightBlock15 = "minecraft:light_block_15",
    LightBlock2 = "minecraft:light_block_2",
    LightBlock3 = "minecraft:light_block_3",
    LightBlock4 = "minecraft:light_block_4",
    LightBlock5 = "minecraft:light_block_5",
    LightBlock6 = "minecraft:light_block_6",
    LightBlock7 = "minecraft:light_block_7",
    LightBlock8 = "minecraft:light_block_8",
    LightBlock9 = "minecraft:light_block_9",
    LightBlueCandle = "minecraft:light_blue_candle",
    LightBlueCandleCake = "minecraft:light_blue_candle_cake",
    LightBlueCarpet = "minecraft:light_blue_carpet",
    LightBlueConcrete = "minecraft:light_blue_concrete",
    LightBlueConcretePowder = "minecraft:light_blue_concrete_powder",
    LightBlueGlazedTerracotta = "minecraft:light_blue_glazed_terracotta",
    LightBlueShulkerBox = "minecraft:light_blue_shulker_box",
    LightBlueStainedGlass = "minecraft:light_blue_stained_glass",
    LightBlueStainedGlassPane = "minecraft:light_blue_stained_glass_pane",
    LightBlueTerracotta = "minecraft:light_blue_terracotta",
    LightBlueWool = "minecraft:light_blue_wool",
    LightGrayCandle = "minecraft:light_gray_candle",
    LightGrayCandleCake = "minecraft:light_gray_candle_cake",
    LightGrayCarpet = "minecraft:light_gray_carpet",
    LightGrayConcrete = "minecraft:light_gray_concrete",
    LightGrayConcretePowder = "minecraft:light_gray_concrete_powder",
    LightGrayShulkerBox = "minecraft:light_gray_shulker_box",
    LightGrayStainedGlass = "minecraft:light_gray_stained_glass",
    LightGrayStainedGlassPane = "minecraft:light_gray_stained_glass_pane",
    LightGrayTerracotta = "minecraft:light_gray_terracotta",
    LightGrayWool = "minecraft:light_gray_wool",
    LightWeightedPressurePlate = "minecraft:light_weighted_pressure_plate",
    LightningRod = "minecraft:lightning_rod",
    Lilac = "minecraft:lilac",
    LilyOfTheValley = "minecraft:lily_of_the_valley",
    LimeCandle = "minecraft:lime_candle",
    LimeCandleCake = "minecraft:lime_candle_cake",
    LimeCarpet = "minecraft:lime_carpet",
    LimeConcrete = "minecraft:lime_concrete",
    LimeConcretePowder = "minecraft:lime_concrete_powder",
    LimeGlazedTerracotta = "minecraft:lime_glazed_terracotta",
    LimeShulkerBox = "minecraft:lime_shulker_box",
    LimeStainedGlass = "minecraft:lime_stained_glass",
    LimeStainedGlassPane = "minecraft:lime_stained_glass_pane",
    LimeTerracotta = "minecraft:lime_terracotta",
    LimeWool = "minecraft:lime_wool",
    LitBlastFurnace = "minecraft:lit_blast_furnace",
    LitDeepslateRedstoneOre = "minecraft:lit_deepslate_redstone_ore",
    LitFurnace = "minecraft:lit_furnace",
    LitPumpkin = "minecraft:lit_pumpkin",
    LitRedstoneLamp = "minecraft:lit_redstone_lamp",
    LitRedstoneOre = "minecraft:lit_redstone_ore",
    LitSmoker = "minecraft:lit_smoker",
    Lodestone = "minecraft:lodestone",
    Loom = "minecraft:loom",
    MagentaCandle = "minecraft:magenta_candle",
    MagentaCandleCake = "minecraft:magenta_candle_cake",
    MagentaCarpet = "minecraft:magenta_carpet",
    MagentaConcrete = "minecraft:magenta_concrete",
    MagentaConcretePowder = "minecraft:magenta_concrete_powder",
    MagentaGlazedTerracotta = "minecraft:magenta_glazed_terracotta",
    MagentaShulkerBox = "minecraft:magenta_shulker_box",
    MagentaStainedGlass = "minecraft:magenta_stained_glass",
    MagentaStainedGlassPane = "minecraft:magenta_stained_glass_pane",
    MagentaTerracotta = "minecraft:magenta_terracotta",
    MagentaWool = "minecraft:magenta_wool",
    Magma = "minecraft:magma",
    MangroveButton = "minecraft:mangrove_button",
    MangroveDoor = "minecraft:mangrove_door",
    MangroveDoubleSlab = "minecraft:mangrove_double_slab",
    MangroveFence = "minecraft:mangrove_fence",
    MangroveFenceGate = "minecraft:mangrove_fence_gate",
    MangroveHangingSign = "minecraft:mangrove_hanging_sign",
    MangroveLeaves = "minecraft:mangrove_leaves",
    MangroveLog = "minecraft:mangrove_log",
    MangrovePlanks = "minecraft:mangrove_planks",
    MangrovePressurePlate = "minecraft:mangrove_pressure_plate",
    MangrovePropagule = "minecraft:mangrove_propagule",
    MangroveRoots = "minecraft:mangrove_roots",
    MangroveShelf = "minecraft:mangrove_shelf",
    MangroveSlab = "minecraft:mangrove_slab",
    MangroveStairs = "minecraft:mangrove_stairs",
    MangroveStandingSign = "minecraft:mangrove_standing_sign",
    MangroveTrapdoor = "minecraft:mangrove_trapdoor",
    MangroveWallSign = "minecraft:mangrove_wall_sign",
    MangroveWood = "minecraft:mangrove_wood",
    MaterialReducer = "minecraft:material_reducer",
    MediumAmethystBud = "minecraft:medium_amethyst_bud",
    MelonBlock = "minecraft:melon_block",
    MelonStem = "minecraft:melon_stem",
    MobSpawner = "minecraft:mob_spawner",
    MossBlock = "minecraft:moss_block",
    MossCarpet = "minecraft:moss_carpet",
    MossyCobblestone = "minecraft:mossy_cobblestone",
    MossyCobblestoneDoubleSlab = "minecraft:mossy_cobblestone_double_slab",
    MossyCobblestoneSlab = "minecraft:mossy_cobblestone_slab",
    MossyCobblestoneStairs = "minecraft:mossy_cobblestone_stairs",
    MossyCobblestoneWall = "minecraft:mossy_cobblestone_wall",
    MossyStoneBrickDoubleSlab = "minecraft:mossy_stone_brick_double_slab",
    MossyStoneBrickSlab = "minecraft:mossy_stone_brick_slab",
    MossyStoneBrickStairs = "minecraft:mossy_stone_brick_stairs",
    MossyStoneBrickWall = "minecraft:mossy_stone_brick_wall",
    MossyStoneBricks = "minecraft:mossy_stone_bricks",
    Mud = "minecraft:mud",
    MudBrickDoubleSlab = "minecraft:mud_brick_double_slab",
    MudBrickSlab = "minecraft:mud_brick_slab",
    MudBrickStairs = "minecraft:mud_brick_stairs",
    MudBrickWall = "minecraft:mud_brick_wall",
    MudBricks = "minecraft:mud_bricks",
    MuddyMangroveRoots = "minecraft:muddy_mangrove_roots",
    MushroomStem = "minecraft:mushroom_stem",
    Mycelium = "minecraft:mycelium",
    NetherBrick = "minecraft:nether_brick",
    NetherBrickDoubleSlab = "minecraft:nether_brick_double_slab",
    NetherBrickFence = "minecraft:nether_brick_fence",
    NetherBrickSlab = "minecraft:nether_brick_slab",
    NetherBrickStairs = "minecraft:nether_brick_stairs",
    NetherBrickWall = "minecraft:nether_brick_wall",
    NetherGoldOre = "minecraft:nether_gold_ore",
    NetherSprouts = "minecraft:nether_sprouts",
    NetherWart = "minecraft:nether_wart",
    NetherWartBlock = "minecraft:nether_wart_block",
    NetheriteBlock = "minecraft:netherite_block",
    Netherrack = "minecraft:netherrack",
    NormalStoneDoubleSlab = "minecraft:normal_stone_double_slab",
    NormalStoneSlab = "minecraft:normal_stone_slab",
    NormalStoneStairs = "minecraft:normal_stone_stairs",
    Noteblock = "minecraft:noteblock",
    OakDoubleSlab = "minecraft:oak_double_slab",
    OakFence = "minecraft:oak_fence",
    OakHangingSign = "minecraft:oak_hanging_sign",
    OakLeaves = "minecraft:oak_leaves",
    OakLog = "minecraft:oak_log",
    OakPlanks = "minecraft:oak_planks",
    OakSapling = "minecraft:oak_sapling",
    OakShelf = "minecraft:oak_shelf",
    OakSlab = "minecraft:oak_slab",
    OakStairs = "minecraft:oak_stairs",
    OakWood = "minecraft:oak_wood",
    Observer = "minecraft:observer",
    Obsidian = "minecraft:obsidian",
    OchreFroglight = "minecraft:ochre_froglight",
    OpenEyeblossom = "minecraft:open_eyeblossom",
    OrangeCandle = "minecraft:orange_candle",
    OrangeCandleCake = "minecraft:orange_candle_cake",
    OrangeCarpet = "minecraft:orange_carpet",
    OrangeConcrete = "minecraft:orange_concrete",
    OrangeConcretePowder = "minecraft:orange_concrete_powder",
    OrangeGlazedTerracotta = "minecraft:orange_glazed_terracotta",
    OrangeShulkerBox = "minecraft:orange_shulker_box",
    OrangeStainedGlass = "minecraft:orange_stained_glass",
    OrangeStainedGlassPane = "minecraft:orange_stained_glass_pane",
    OrangeTerracotta = "minecraft:orange_terracotta",
    OrangeTulip = "minecraft:orange_tulip",
    OrangeWool = "minecraft:orange_wool",
    OxeyeDaisy = "minecraft:oxeye_daisy",
    OxidizedChiseledCopper = "minecraft:oxidized_chiseled_copper",
    OxidizedCopper = "minecraft:oxidized_copper",
    OxidizedCopperBars = "minecraft:oxidized_copper_bars",
    OxidizedCopperBulb = "minecraft:oxidized_copper_bulb",
    OxidizedCopperChain = "minecraft:oxidized_copper_chain",
    OxidizedCopperChest = "minecraft:oxidized_copper_chest",
    OxidizedCopperDoor = "minecraft:oxidized_copper_door",
    OxidizedCopperGolemStatue = "minecraft:oxidized_copper_golem_statue",
    OxidizedCopperGrate = "minecraft:oxidized_copper_grate",
    OxidizedCopperLantern = "minecraft:oxidized_copper_lantern",
    OxidizedCopperTrapdoor = "minecraft:oxidized_copper_trapdoor",
    OxidizedCutCopper = "minecraft:oxidized_cut_copper",
    OxidizedCutCopperSlab = "minecraft:oxidized_cut_copper_slab",
    OxidizedCutCopperStairs = "minecraft:oxidized_cut_copper_stairs",
    OxidizedDoubleCutCopperSlab = "minecraft:oxidized_double_cut_copper_slab",
    OxidizedLightningRod = "minecraft:oxidized_lightning_rod",
    PackedIce = "minecraft:packed_ice",
    PackedMud = "minecraft:packed_mud",
    PaleHangingMoss = "minecraft:pale_hanging_moss",
    PaleMossBlock = "minecraft:pale_moss_block",
    PaleMossCarpet = "minecraft:pale_moss_carpet",
    PaleOakButton = "minecraft:pale_oak_button",
    PaleOakDoor = "minecraft:pale_oak_door",
    PaleOakDoubleSlab = "minecraft:pale_oak_double_slab",
    PaleOakFence = "minecraft:pale_oak_fence",
    PaleOakFenceGate = "minecraft:pale_oak_fence_gate",
    PaleOakHangingSign = "minecraft:pale_oak_hanging_sign",
    PaleOakLeaves = "minecraft:pale_oak_leaves",
    PaleOakLog = "minecraft:pale_oak_log",
    PaleOakPlanks = "minecraft:pale_oak_planks",
    PaleOakPressurePlate = "minecraft:pale_oak_pressure_plate",
    PaleOakSapling = "minecraft:pale_oak_sapling",
    PaleOakShelf = "minecraft:pale_oak_shelf",
    PaleOakSlab = "minecraft:pale_oak_slab",
    PaleOakStairs = "minecraft:pale_oak_stairs",
    PaleOakStandingSign = "minecraft:pale_oak_standing_sign",
    PaleOakTrapdoor = "minecraft:pale_oak_trapdoor",
    PaleOakWallSign = "minecraft:pale_oak_wall_sign",
    PaleOakWood = "minecraft:pale_oak_wood",
    PearlescentFroglight = "minecraft:pearlescent_froglight",
    Peony = "minecraft:peony",
    PetrifiedOakDoubleSlab = "minecraft:petrified_oak_double_slab",
    PetrifiedOakSlab = "minecraft:petrified_oak_slab",
    PiglinHead = "minecraft:piglin_head",
    PinkCandle = "minecraft:pink_candle",
    PinkCandleCake = "minecraft:pink_candle_cake",
    PinkCarpet = "minecraft:pink_carpet",
    PinkConcrete = "minecraft:pink_concrete",
    PinkConcretePowder = "minecraft:pink_concrete_powder",
    PinkGlazedTerracotta = "minecraft:pink_glazed_terracotta",
    PinkPetals = "minecraft:pink_petals",
    PinkShulkerBox = "minecraft:pink_shulker_box",
    PinkStainedGlass = "minecraft:pink_stained_glass",
    PinkStainedGlassPane = "minecraft:pink_stained_glass_pane",
    PinkTerracotta = "minecraft:pink_terracotta",
    PinkTulip = "minecraft:pink_tulip",
    PinkWool = "minecraft:pink_wool",
    Piston = "minecraft:piston",
    PistonArmCollision = "minecraft:piston_arm_collision",
    PitcherCrop = "minecraft:pitcher_crop",
    PitcherPlant = "minecraft:pitcher_plant",
    PlayerHead = "minecraft:player_head",
    Podzol = "minecraft:podzol",
    PointedDripstone = "minecraft:pointed_dripstone",
    PolishedAndesite = "minecraft:polished_andesite",
    PolishedAndesiteDoubleSlab = "minecraft:polished_andesite_double_slab",
    PolishedAndesiteSlab = "minecraft:polished_andesite_slab",
    PolishedAndesiteStairs = "minecraft:polished_andesite_stairs",
    PolishedBasalt = "minecraft:polished_basalt",
    PolishedBlackstone = "minecraft:polished_blackstone",
    PolishedBlackstoneBrickDoubleSlab = "minecraft:polished_blackstone_brick_double_slab",
    PolishedBlackstoneBrickSlab = "minecraft:polished_blackstone_brick_slab",
    PolishedBlackstoneBrickStairs = "minecraft:polished_blackstone_brick_stairs",
    PolishedBlackstoneBrickWall = "minecraft:polished_blackstone_brick_wall",
    PolishedBlackstoneBricks = "minecraft:polished_blackstone_bricks",
    PolishedBlackstoneButton = "minecraft:polished_blackstone_button",
    PolishedBlackstoneDoubleSlab = "minecraft:polished_blackstone_double_slab",
    PolishedBlackstonePressurePlate = "minecraft:polished_blackstone_pressure_plate",
    PolishedBlackstoneSlab = "minecraft:polished_blackstone_slab",
    PolishedBlackstoneStairs = "minecraft:polished_blackstone_stairs",
    PolishedBlackstoneWall = "minecraft:polished_blackstone_wall",
    PolishedDeepslate = "minecraft:polished_deepslate",
    PolishedDeepslateDoubleSlab = "minecraft:polished_deepslate_double_slab",
    PolishedDeepslateSlab = "minecraft:polished_deepslate_slab",
    PolishedDeepslateStairs = "minecraft:polished_deepslate_stairs",
    PolishedDeepslateWall = "minecraft:polished_deepslate_wall",
    PolishedDiorite = "minecraft:polished_diorite",
    PolishedDioriteDoubleSlab = "minecraft:polished_diorite_double_slab",
    PolishedDioriteSlab = "minecraft:polished_diorite_slab",
    PolishedDioriteStairs = "minecraft:polished_diorite_stairs",
    PolishedGranite = "minecraft:polished_granite",
    PolishedGraniteDoubleSlab = "minecraft:polished_granite_double_slab",
    PolishedGraniteSlab = "minecraft:polished_granite_slab",
    PolishedGraniteStairs = "minecraft:polished_granite_stairs",
    PolishedTuff = "minecraft:polished_tuff",
    PolishedTuffDoubleSlab = "minecraft:polished_tuff_double_slab",
    PolishedTuffSlab = "minecraft:polished_tuff_slab",
    PolishedTuffStairs = "minecraft:polished_tuff_stairs",
    PolishedTuffWall = "minecraft:polished_tuff_wall",
    Poppy = "minecraft:poppy",
    Portal = "minecraft:portal",
    Potatoes = "minecraft:potatoes",
    PowderSnow = "minecraft:powder_snow",
    PoweredComparator = "minecraft:powered_comparator",
    PoweredRepeater = "minecraft:powered_repeater",
    Prismarine = "minecraft:prismarine",
    PrismarineBrickDoubleSlab = "minecraft:prismarine_brick_double_slab",
    PrismarineBrickSlab = "minecraft:prismarine_brick_slab",
    PrismarineBricks = "minecraft:prismarine_bricks",
    PrismarineBricksStairs = "minecraft:prismarine_bricks_stairs",
    PrismarineDoubleSlab = "minecraft:prismarine_double_slab",
    PrismarineSlab = "minecraft:prismarine_slab",
    PrismarineStairs = "minecraft:prismarine_stairs",
    PrismarineWall = "minecraft:prismarine_wall",
    Pumpkin = "minecraft:pumpkin",
    PumpkinStem = "minecraft:pumpkin_stem",
    PurpleCandle = "minecraft:purple_candle",
    PurpleCandleCake = "minecraft:purple_candle_cake",
    PurpleCarpet = "minecraft:purple_carpet",
    PurpleConcrete = "minecraft:purple_concrete",
    PurpleConcretePowder = "minecraft:purple_concrete_powder",
    PurpleGlazedTerracotta = "minecraft:purple_glazed_terracotta",
    PurpleShulkerBox = "minecraft:purple_shulker_box",
    PurpleStainedGlass = "minecraft:purple_stained_glass",
    PurpleStainedGlassPane = "minecraft:purple_stained_glass_pane",
    PurpleTerracotta = "minecraft:purple_terracotta",
    PurpleWool = "minecraft:purple_wool",
    PurpurBlock = "minecraft:purpur_block",
    PurpurDoubleSlab = "minecraft:purpur_double_slab",
    PurpurPillar = "minecraft:purpur_pillar",
    PurpurSlab = "minecraft:purpur_slab",
    PurpurStairs = "minecraft:purpur_stairs",
    QuartzBlock = "minecraft:quartz_block",
    QuartzBricks = "minecraft:quartz_bricks",
    QuartzDoubleSlab = "minecraft:quartz_double_slab",
    QuartzOre = "minecraft:quartz_ore",
    QuartzPillar = "minecraft:quartz_pillar",
    QuartzSlab = "minecraft:quartz_slab",
    QuartzStairs = "minecraft:quartz_stairs",
    Rail = "minecraft:rail",
    RawCopperBlock = "minecraft:raw_copper_block",
    RawGoldBlock = "minecraft:raw_gold_block",
    RawIronBlock = "minecraft:raw_iron_block",
    RedCandle = "minecraft:red_candle",
    RedCandleCake = "minecraft:red_candle_cake",
    RedCarpet = "minecraft:red_carpet",
    RedConcrete = "minecraft:red_concrete",
    RedConcretePowder = "minecraft:red_concrete_powder",
    RedGlazedTerracotta = "minecraft:red_glazed_terracotta",
    RedMushroom = "minecraft:red_mushroom",
    RedMushroomBlock = "minecraft:red_mushroom_block",
    RedNetherBrick = "minecraft:red_nether_brick",
    RedNetherBrickDoubleSlab = "minecraft:red_nether_brick_double_slab",
    RedNetherBrickSlab = "minecraft:red_nether_brick_slab",
    RedNetherBrickStairs = "minecraft:red_nether_brick_stairs",
    RedNetherBrickWall = "minecraft:red_nether_brick_wall",
    RedSand = "minecraft:red_sand",
    RedSandstone = "minecraft:red_sandstone",
    RedSandstoneDoubleSlab = "minecraft:red_sandstone_double_slab",
    RedSandstoneSlab = "minecraft:red_sandstone_slab",
    RedSandstoneStairs = "minecraft:red_sandstone_stairs",
    RedSandstoneWall = "minecraft:red_sandstone_wall",
    RedShulkerBox = "minecraft:red_shulker_box",
    RedStainedGlass = "minecraft:red_stained_glass",
    RedStainedGlassPane = "minecraft:red_stained_glass_pane",
    RedTerracotta = "minecraft:red_terracotta",
    RedTulip = "minecraft:red_tulip",
    RedWool = "minecraft:red_wool",
    RedstoneBlock = "minecraft:redstone_block",
    RedstoneLamp = "minecraft:redstone_lamp",
    RedstoneOre = "minecraft:redstone_ore",
    RedstoneTorch = "minecraft:redstone_torch",
    RedstoneWire = "minecraft:redstone_wire",
    Reeds = "minecraft:reeds",
    ReinforcedDeepslate = "minecraft:reinforced_deepslate",
    RepeatingCommandBlock = "minecraft:repeating_command_block",
    ResinBlock = "minecraft:resin_block",
    ResinBrickDoubleSlab = "minecraft:resin_brick_double_slab",
    ResinBrickSlab = "minecraft:resin_brick_slab",
    ResinBrickStairs = "minecraft:resin_brick_stairs",
    ResinBrickWall = "minecraft:resin_brick_wall",
    ResinBricks = "minecraft:resin_bricks",
    ResinClump = "minecraft:resin_clump",
    RespawnAnchor = "minecraft:respawn_anchor",
    RoseBush = "minecraft:rose_bush",
    Sand = "minecraft:sand",
    Sandstone = "minecraft:sandstone",
    SandstoneDoubleSlab = "minecraft:sandstone_double_slab",
    SandstoneSlab = "minecraft:sandstone_slab",
    SandstoneStairs = "minecraft:sandstone_stairs",
    SandstoneWall = "minecraft:sandstone_wall",
    Scaffolding = "minecraft:scaffolding",
    Sculk = "minecraft:sculk",
    SculkCatalyst = "minecraft:sculk_catalyst",
    SculkSensor = "minecraft:sculk_sensor",
    SculkShrieker = "minecraft:sculk_shrieker",
    SculkVein = "minecraft:sculk_vein",
    SeaLantern = "minecraft:sea_lantern",
    SeaPickle = "minecraft:sea_pickle",
    Seagrass = "minecraft:seagrass",
    ShortDryGrass = "minecraft:short_dry_grass",
    ShortGrass = "minecraft:short_grass",
    Shroomlight = "minecraft:shroomlight",
    SilverGlazedTerracotta = "minecraft:silver_glazed_terracotta",
    SkeletonSkull = "minecraft:skeleton_skull",
    Slime = "minecraft:slime",
    SmallAmethystBud = "minecraft:small_amethyst_bud",
    SmallDripleafBlock = "minecraft:small_dripleaf_block",
    SmithingTable = "minecraft:smithing_table",
    Smoker = "minecraft:smoker",
    SmoothBasalt = "minecraft:smooth_basalt",
    SmoothQuartz = "minecraft:smooth_quartz",
    SmoothQuartzDoubleSlab = "minecraft:smooth_quartz_double_slab",
    SmoothQuartzSlab = "minecraft:smooth_quartz_slab",
    SmoothQuartzStairs = "minecraft:smooth_quartz_stairs",
    SmoothRedSandstone = "minecraft:smooth_red_sandstone",
    SmoothRedSandstoneDoubleSlab = "minecraft:smooth_red_sandstone_double_slab",
    SmoothRedSandstoneSlab = "minecraft:smooth_red_sandstone_slab",
    SmoothRedSandstoneStairs = "minecraft:smooth_red_sandstone_stairs",
    SmoothSandstone = "minecraft:smooth_sandstone",
    SmoothSandstoneDoubleSlab = "minecraft:smooth_sandstone_double_slab",
    SmoothSandstoneSlab = "minecraft:smooth_sandstone_slab",
    SmoothSandstoneStairs = "minecraft:smooth_sandstone_stairs",
    SmoothStone = "minecraft:smooth_stone",
    SmoothStoneDoubleSlab = "minecraft:smooth_stone_double_slab",
    SmoothStoneSlab = "minecraft:smooth_stone_slab",
    SnifferEgg = "minecraft:sniffer_egg",
    Snow = "minecraft:snow",
    SnowLayer = "minecraft:snow_layer",
    SoulCampfire = "minecraft:soul_campfire",
    SoulFire = "minecraft:soul_fire",
    SoulLantern = "minecraft:soul_lantern",
    SoulSand = "minecraft:soul_sand",
    SoulSoil = "minecraft:soul_soil",
    SoulTorch = "minecraft:soul_torch",
    Sponge = "minecraft:sponge",
    SporeBlossom = "minecraft:spore_blossom",
    SpruceButton = "minecraft:spruce_button",
    SpruceDoor = "minecraft:spruce_door",
    SpruceDoubleSlab = "minecraft:spruce_double_slab",
    SpruceFence = "minecraft:spruce_fence",
    SpruceFenceGate = "minecraft:spruce_fence_gate",
    SpruceHangingSign = "minecraft:spruce_hanging_sign",
    SpruceLeaves = "minecraft:spruce_leaves",
    SpruceLog = "minecraft:spruce_log",
    SprucePlanks = "minecraft:spruce_planks",
    SprucePressurePlate = "minecraft:spruce_pressure_plate",
    SpruceSapling = "minecraft:spruce_sapling",
    SpruceShelf = "minecraft:spruce_shelf",
    SpruceSlab = "minecraft:spruce_slab",
    SpruceStairs = "minecraft:spruce_stairs",
    SpruceStandingSign = "minecraft:spruce_standing_sign",
    SpruceTrapdoor = "minecraft:spruce_trapdoor",
    SpruceWallSign = "minecraft:spruce_wall_sign",
    SpruceWood = "minecraft:spruce_wood",
    StandingBanner = "minecraft:standing_banner",
    StandingSign = "minecraft:standing_sign",
    StickyPiston = "minecraft:sticky_piston",
    StickyPistonArmCollision = "minecraft:sticky_piston_arm_collision",
    Stone = "minecraft:stone",
    StoneBrickDoubleSlab = "minecraft:stone_brick_double_slab",
    StoneBrickSlab = "minecraft:stone_brick_slab",
    StoneBrickStairs = "minecraft:stone_brick_stairs",
    StoneBrickWall = "minecraft:stone_brick_wall",
    StoneBricks = "minecraft:stone_bricks",
    StoneButton = "minecraft:stone_button",
    StonePressurePlate = "minecraft:stone_pressure_plate",
    StoneStairs = "minecraft:stone_stairs",
    StonecutterBlock = "minecraft:stonecutter_block",
    StrippedAcaciaLog = "minecraft:stripped_acacia_log",
    StrippedAcaciaWood = "minecraft:stripped_acacia_wood",
    StrippedBambooBlock = "minecraft:stripped_bamboo_block",
    StrippedBirchLog = "minecraft:stripped_birch_log",
    StrippedBirchWood = "minecraft:stripped_birch_wood",
    StrippedCherryLog = "minecraft:stripped_cherry_log",
    StrippedCherryWood = "minecraft:stripped_cherry_wood",
    StrippedCrimsonHyphae = "minecraft:stripped_crimson_hyphae",
    StrippedCrimsonStem = "minecraft:stripped_crimson_stem",
    StrippedDarkOakLog = "minecraft:stripped_dark_oak_log",
    StrippedDarkOakWood = "minecraft:stripped_dark_oak_wood",
    StrippedJungleLog = "minecraft:stripped_jungle_log",
    StrippedJungleWood = "minecraft:stripped_jungle_wood",
    StrippedMangroveLog = "minecraft:stripped_mangrove_log",
    StrippedMangroveWood = "minecraft:stripped_mangrove_wood",
    StrippedOakLog = "minecraft:stripped_oak_log",
    StrippedOakWood = "minecraft:stripped_oak_wood",
    StrippedPaleOakLog = "minecraft:stripped_pale_oak_log",
    StrippedPaleOakWood = "minecraft:stripped_pale_oak_wood",
    StrippedSpruceLog = "minecraft:stripped_spruce_log",
    StrippedSpruceWood = "minecraft:stripped_spruce_wood",
    StrippedWarpedHyphae = "minecraft:stripped_warped_hyphae",
    StrippedWarpedStem = "minecraft:stripped_warped_stem",
    StructureBlock = "minecraft:structure_block",
    StructureVoid = "minecraft:structure_void",
    Sunflower = "minecraft:sunflower",
    SuspiciousGravel = "minecraft:suspicious_gravel",
    SuspiciousSand = "minecraft:suspicious_sand",
    SweetBerryBush = "minecraft:sweet_berry_bush",
    TallDryGrass = "minecraft:tall_dry_grass",
    TallGrass = "minecraft:tall_grass",
    Target = "minecraft:target",
    TintedGlass = "minecraft:tinted_glass",
    Tnt = "minecraft:tnt",
    Torch = "minecraft:torch",
    Torchflower = "minecraft:torchflower",
    TorchflowerCrop = "minecraft:torchflower_crop",
    Trapdoor = "minecraft:trapdoor",
    TrappedChest = "minecraft:trapped_chest",
    TrialSpawner = "minecraft:trial_spawner",
    TripWire = "minecraft:trip_wire",
    TripwireHook = "minecraft:tripwire_hook",
    TubeCoral = "minecraft:tube_coral",
    TubeCoralBlock = "minecraft:tube_coral_block",
    TubeCoralFan = "minecraft:tube_coral_fan",
    TubeCoralWallFan = "minecraft:tube_coral_wall_fan",
    Tuff = "minecraft:tuff",
    TuffBrickDoubleSlab = "minecraft:tuff_brick_double_slab",
    TuffBrickSlab = "minecraft:tuff_brick_slab",
    TuffBrickStairs = "minecraft:tuff_brick_stairs",
    TuffBrickWall = "minecraft:tuff_brick_wall",
    TuffBricks = "minecraft:tuff_bricks",
    TuffDoubleSlab = "minecraft:tuff_double_slab",
    TuffSlab = "minecraft:tuff_slab",
    TuffStairs = "minecraft:tuff_stairs",
    TuffWall = "minecraft:tuff_wall",
    TurtleEgg = "minecraft:turtle_egg",
    TwistingVines = "minecraft:twisting_vines",
    UnderwaterTnt = "minecraft:underwater_tnt",
    UnderwaterTorch = "minecraft:underwater_torch",
    UndyedShulkerBox = "minecraft:undyed_shulker_box",
    Unknown = "minecraft:unknown",
    UnlitRedstoneTorch = "minecraft:unlit_redstone_torch",
    UnpoweredComparator = "minecraft:unpowered_comparator",
    UnpoweredRepeater = "minecraft:unpowered_repeater",
    Vault = "minecraft:vault",
    VerdantFroglight = "minecraft:verdant_froglight",
    Vine = "minecraft:vine",
    WallBanner = "minecraft:wall_banner",
    WallSign = "minecraft:wall_sign",
    WarpedButton = "minecraft:warped_button",
    WarpedDoor = "minecraft:warped_door",
    WarpedDoubleSlab = "minecraft:warped_double_slab",
    WarpedFence = "minecraft:warped_fence",
    WarpedFenceGate = "minecraft:warped_fence_gate",
    WarpedFungus = "minecraft:warped_fungus",
    WarpedHangingSign = "minecraft:warped_hanging_sign",
    WarpedHyphae = "minecraft:warped_hyphae",
    WarpedNylium = "minecraft:warped_nylium",
    WarpedPlanks = "minecraft:warped_planks",
    WarpedPressurePlate = "minecraft:warped_pressure_plate",
    WarpedRoots = "minecraft:warped_roots",
    WarpedShelf = "minecraft:warped_shelf",
    WarpedSlab = "minecraft:warped_slab",
    WarpedStairs = "minecraft:warped_stairs",
    WarpedStandingSign = "minecraft:warped_standing_sign",
    WarpedStem = "minecraft:warped_stem",
    WarpedTrapdoor = "minecraft:warped_trapdoor",
    WarpedWallSign = "minecraft:warped_wall_sign",
    WarpedWartBlock = "minecraft:warped_wart_block",
    Water = "minecraft:water",
    Waterlily = "minecraft:waterlily",
    WaxedChiseledCopper = "minecraft:waxed_chiseled_copper",
    WaxedCopper = "minecraft:waxed_copper",
    WaxedCopperBars = "minecraft:waxed_copper_bars",
    WaxedCopperBulb = "minecraft:waxed_copper_bulb",
    WaxedCopperChain = "minecraft:waxed_copper_chain",
    WaxedCopperChest = "minecraft:waxed_copper_chest",
    WaxedCopperDoor = "minecraft:waxed_copper_door",
    WaxedCopperGolemStatue = "minecraft:waxed_copper_golem_statue",
    WaxedCopperGrate = "minecraft:waxed_copper_grate",
    WaxedCopperLantern = "minecraft:waxed_copper_lantern",
    WaxedCopperTrapdoor = "minecraft:waxed_copper_trapdoor",
    WaxedCutCopper = "minecraft:waxed_cut_copper",
    WaxedCutCopperSlab = "minecraft:waxed_cut_copper_slab",
    WaxedCutCopperStairs = "minecraft:waxed_cut_copper_stairs",
    WaxedDoubleCutCopperSlab = "minecraft:waxed_double_cut_copper_slab",
    WaxedExposedChiseledCopper = "minecraft:waxed_exposed_chiseled_copper",
    WaxedExposedCopper = "minecraft:waxed_exposed_copper",
    WaxedExposedCopperBars = "minecraft:waxed_exposed_copper_bars",
    WaxedExposedCopperBulb = "minecraft:waxed_exposed_copper_bulb",
    WaxedExposedCopperChain = "minecraft:waxed_exposed_copper_chain",
    WaxedExposedCopperChest = "minecraft:waxed_exposed_copper_chest",
    WaxedExposedCopperDoor = "minecraft:waxed_exposed_copper_door",
    WaxedExposedCopperGolemStatue = "minecraft:waxed_exposed_copper_golem_statue",
    WaxedExposedCopperGrate = "minecraft:waxed_exposed_copper_grate",
    WaxedExposedCopperLantern = "minecraft:waxed_exposed_copper_lantern",
    WaxedExposedCopperTrapdoor = "minecraft:waxed_exposed_copper_trapdoor",
    WaxedExposedCutCopper = "minecraft:waxed_exposed_cut_copper",
    WaxedExposedCutCopperSlab = "minecraft:waxed_exposed_cut_copper_slab",
    WaxedExposedCutCopperStairs = "minecraft:waxed_exposed_cut_copper_stairs",
    WaxedExposedDoubleCutCopperSlab = "minecraft:waxed_exposed_double_cut_copper_slab",
    WaxedExposedLightningRod = "minecraft:waxed_exposed_lightning_rod",
    WaxedLightningRod = "minecraft:waxed_lightning_rod",
    WaxedOxidizedChiseledCopper = "minecraft:waxed_oxidized_chiseled_copper",
    WaxedOxidizedCopper = "minecraft:waxed_oxidized_copper",
    WaxedOxidizedCopperBars = "minecraft:waxed_oxidized_copper_bars",
    WaxedOxidizedCopperBulb = "minecraft:waxed_oxidized_copper_bulb",
    WaxedOxidizedCopperChain = "minecraft:waxed_oxidized_copper_chain",
    WaxedOxidizedCopperChest = "minecraft:waxed_oxidized_copper_chest",
    WaxedOxidizedCopperDoor = "minecraft:waxed_oxidized_copper_door",
    WaxedOxidizedCopperGolemStatue = "minecraft:waxed_oxidized_copper_golem_statue",
    WaxedOxidizedCopperGrate = "minecraft:waxed_oxidized_copper_grate",
    WaxedOxidizedCopperLantern = "minecraft:waxed_oxidized_copper_lantern",
    WaxedOxidizedCopperTrapdoor = "minecraft:waxed_oxidized_copper_trapdoor",
    WaxedOxidizedCutCopper = "minecraft:waxed_oxidized_cut_copper",
    WaxedOxidizedCutCopperSlab = "minecraft:waxed_oxidized_cut_copper_slab",
    WaxedOxidizedCutCopperStairs = "minecraft:waxed_oxidized_cut_copper_stairs",
    WaxedOxidizedDoubleCutCopperSlab = "minecraft:waxed_oxidized_double_cut_copper_slab",
    WaxedOxidizedLightningRod = "minecraft:waxed_oxidized_lightning_rod",
    WaxedWeatheredChiseledCopper = "minecraft:waxed_weathered_chiseled_copper",
    WaxedWeatheredCopper = "minecraft:waxed_weathered_copper",
    WaxedWeatheredCopperBars = "minecraft:waxed_weathered_copper_bars",
    WaxedWeatheredCopperBulb = "minecraft:waxed_weathered_copper_bulb",
    WaxedWeatheredCopperChain = "minecraft:waxed_weathered_copper_chain",
    WaxedWeatheredCopperChest = "minecraft:waxed_weathered_copper_chest",
    WaxedWeatheredCopperDoor = "minecraft:waxed_weathered_copper_door",
    WaxedWeatheredCopperGolemStatue = "minecraft:waxed_weathered_copper_golem_statue",
    WaxedWeatheredCopperGrate = "minecraft:waxed_weathered_copper_grate",
    WaxedWeatheredCopperLantern = "minecraft:waxed_weathered_copper_lantern",
    WaxedWeatheredCopperTrapdoor = "minecraft:waxed_weathered_copper_trapdoor",
    WaxedWeatheredCutCopper = "minecraft:waxed_weathered_cut_copper",
    WaxedWeatheredCutCopperSlab = "minecraft:waxed_weathered_cut_copper_slab",
    WaxedWeatheredCutCopperStairs = "minecraft:waxed_weathered_cut_copper_stairs",
    WaxedWeatheredDoubleCutCopperSlab = "minecraft:waxed_weathered_double_cut_copper_slab",
    WaxedWeatheredLightningRod = "minecraft:waxed_weathered_lightning_rod",
    WeatheredChiseledCopper = "minecraft:weathered_chiseled_copper",
    WeatheredCopper = "minecraft:weathered_copper",
    WeatheredCopperBars = "minecraft:weathered_copper_bars",
    WeatheredCopperBulb = "minecraft:weathered_copper_bulb",
    WeatheredCopperChain = "minecraft:weathered_copper_chain",
    WeatheredCopperChest = "minecraft:weathered_copper_chest",
    WeatheredCopperDoor = "minecraft:weathered_copper_door",
    WeatheredCopperGolemStatue = "minecraft:weathered_copper_golem_statue",
    WeatheredCopperGrate = "minecraft:weathered_copper_grate",
    WeatheredCopperLantern = "minecraft:weathered_copper_lantern",
    WeatheredCopperTrapdoor = "minecraft:weathered_copper_trapdoor",
    WeatheredCutCopper = "minecraft:weathered_cut_copper",
    WeatheredCutCopperSlab = "minecraft:weathered_cut_copper_slab",
    WeatheredCutCopperStairs = "minecraft:weathered_cut_copper_stairs",
    WeatheredDoubleCutCopperSlab = "minecraft:weathered_double_cut_copper_slab",
    WeatheredLightningRod = "minecraft:weathered_lightning_rod",
    Web = "minecraft:web",
    WeepingVines = "minecraft:weeping_vines",
    WetSponge = "minecraft:wet_sponge",
    Wheat = "minecraft:wheat",
    WhiteCandle = "minecraft:white_candle",
    WhiteCandleCake = "minecraft:white_candle_cake",
    WhiteCarpet = "minecraft:white_carpet",
    WhiteConcrete = "minecraft:white_concrete",
    WhiteConcretePowder = "minecraft:white_concrete_powder",
    WhiteGlazedTerracotta = "minecraft:white_glazed_terracotta",
    WhiteShulkerBox = "minecraft:white_shulker_box",
    WhiteStainedGlass = "minecraft:white_stained_glass",
    WhiteStainedGlassPane = "minecraft:white_stained_glass_pane",
    WhiteTerracotta = "minecraft:white_terracotta",
    WhiteTulip = "minecraft:white_tulip",
    WhiteWool = "minecraft:white_wool",
    Wildflowers = "minecraft:wildflowers",
    WitherRose = "minecraft:wither_rose",
    WitherSkeletonSkull = "minecraft:wither_skeleton_skull",
    WoodenButton = "minecraft:wooden_button",
    WoodenDoor = "minecraft:wooden_door",
    WoodenPressurePlate = "minecraft:wooden_pressure_plate",
    YellowCandle = "minecraft:yellow_candle",
    YellowCandleCake = "minecraft:yellow_candle_cake",
    YellowCarpet = "minecraft:yellow_carpet",
    YellowConcrete = "minecraft:yellow_concrete",
    YellowConcretePowder = "minecraft:yellow_concrete_powder",
    YellowGlazedTerracotta = "minecraft:yellow_glazed_terracotta",
    YellowShulkerBox = "minecraft:yellow_shulker_box",
    YellowStainedGlass = "minecraft:yellow_stained_glass",
    YellowStainedGlassPane = "minecraft:yellow_stained_glass_pane",
    YellowTerracotta = "minecraft:yellow_terracotta",
    YellowWool = "minecraft:yellow_wool",
    ZombieHead = "minecraft:zombie_head"
}
/**
 * Union type equivalent of the MinecraftBlockTypes enum.
 */
type MinecraftBlockTypesUnion = keyof typeof MinecraftBlockTypes;
/**
 * All supported states and their types for MinecraftBlockTypes
 */
type BlockStateSuperset = {
    ['active']?: boolean;
    ['age']?: number;
    ['age_bit']?: boolean;
    ['allow_underwater_bit']?: boolean;
    ['attached_bit']?: boolean;
    ['attachment']?: string;
    ['bamboo_leaf_size']?: string;
    ['bamboo_stalk_thickness']?: string;
    ['big_dripleaf_head']?: boolean;
    ['big_dripleaf_tilt']?: string;
    ['bite_counter']?: number;
    ['block_light_level']?: number;
    ['bloom']?: boolean;
    ['books_stored']?: number;
    ['brewing_stand_slot_a_bit']?: boolean;
    ['brewing_stand_slot_b_bit']?: boolean;
    ['brewing_stand_slot_c_bit']?: boolean;
    ['brushed_progress']?: number;
    ['button_pressed_bit']?: boolean;
    ['can_summon']?: boolean;
    ['candles']?: number;
    ['cauldron_liquid']?: string;
    ['chemistry_table_type']?: string;
    ['chisel_type']?: string;
    ['cluster_count']?: number;
    ['color']?: string;
    ['color_bit']?: boolean;
    ['composter_fill_level']?: number;
    ['conditional_bit']?: boolean;
    ['coral_color']?: string;
    ['coral_direction']?: number;
    ['coral_fan_direction']?: number;
    ['coral_hang_type_bit']?: boolean;
    ['covered_bit']?: boolean;
    ['cracked_state']?: string;
    ['crafting']?: boolean;
    ['creaking_heart_state']?: string;
    ['damage']?: string;
    ['dead_bit']?: boolean;
    ['deprecated']?: number;
    ['direction']?: number;
    ['dirt_type']?: string;
    ['disarmed_bit']?: boolean;
    ['door_hinge_bit']?: boolean;
    ['double_plant_type']?: string;
    ['drag_down']?: boolean;
    ['dripstone_thickness']?: string;
    ['end_portal_eye_bit']?: boolean;
    ['explode_bit']?: boolean;
    ['extinguished']?: boolean;
    ['facing_direction']?: number;
    ['fill_level']?: number;
    ['flower_type']?: string;
    ['ground_sign_direction']?: number;
    ['growing_plant_age']?: number;
    ['growth']?: number;
    ['hanging']?: boolean;
    ['head_piece_bit']?: boolean;
    ['height']?: number;
    ['honey_level']?: number;
    ['huge_mushroom_bits']?: number;
    ['in_wall_bit']?: boolean;
    ['infiniburn_bit']?: boolean;
    ['item_frame_map_bit']?: boolean;
    ['item_frame_photo_bit']?: boolean;
    ['kelp_age']?: number;
    ['lever_direction']?: string;
    ['liquid_depth']?: number;
    ['lit']?: boolean;
    ['minecraft:block_face']?: string;
    ['minecraft:cardinal_direction']?: string;
    ['minecraft:facing_direction']?: string;
    ['minecraft:vertical_half']?: string;
    ['moisturized_amount']?: number;
    ['monster_egg_stone_type']?: string;
    ['multi_face_direction_bits']?: number;
    ['natural']?: boolean;
    ['new_leaf_type']?: string;
    ['new_log_type']?: string;
    ['no_drop_bit']?: boolean;
    ['occupied_bit']?: boolean;
    ['old_leaf_type']?: string;
    ['old_log_type']?: string;
    ['ominous']?: boolean;
    ['open_bit']?: boolean;
    ['orientation']?: string;
    ['output_lit_bit']?: boolean;
    ['output_subtract_bit']?: boolean;
    ['pale_moss_carpet_side_east']?: string;
    ['pale_moss_carpet_side_north']?: string;
    ['pale_moss_carpet_side_south']?: string;
    ['pale_moss_carpet_side_west']?: string;
    ['persistent_bit']?: boolean;
    ['pillar_axis']?: string;
    ['portal_axis']?: string;
    ['powered_bit']?: boolean;
    ['powered_shelf_type']?: number;
    ['prismarine_block_type']?: string;
    ['propagule_stage']?: number;
    ['rail_data_bit']?: boolean;
    ['rail_direction']?: number;
    ['redstone_signal']?: number;
    ['rehydration_level']?: number;
    ['repeater_delay']?: number;
    ['respawn_anchor_charge']?: number;
    ['rotation']?: number;
    ['sand_stone_type']?: string;
    ['sand_type']?: string;
    ['sapling_type']?: string;
    ['sculk_sensor_phase']?: number;
    ['sea_grass_type']?: string;
    ['sponge_type']?: string;
    ['stability']?: number;
    ['stability_check']?: boolean;
    ['stone_brick_type']?: string;
    ['stone_slab_type']?: string;
    ['stone_slab_type_2']?: string;
    ['stone_slab_type_3']?: string;
    ['stone_slab_type_4']?: string;
    ['stone_type']?: string;
    ['stripped_bit']?: boolean;
    ['structure_block_type']?: string;
    ['structure_void_type']?: string;
    ['suspended_bit']?: boolean;
    ['tall_grass_type']?: string;
    ['tip']?: boolean;
    ['toggle_bit']?: boolean;
    ['top_slot_bit']?: boolean;
    ['torch_facing_direction']?: string;
    ['trial_spawner_state']?: number;
    ['triggered_bit']?: boolean;
    ['turtle_egg_count']?: string;
    ['twisting_vines_age']?: number;
    ['update_bit']?: boolean;
    ['upper_block_bit']?: boolean;
    ['upside_down_bit']?: boolean;
    ['vault_state']?: string;
    ['vine_direction_bits']?: number;
    ['wall_block_type']?: string;
    ['wall_connection_type_east']?: string;
    ['wall_connection_type_north']?: string;
    ['wall_connection_type_south']?: string;
    ['wall_connection_type_west']?: string;
    ['wall_post_bit']?: boolean;
    ['weeping_vines_age']?: number;
    ['weirdo_direction']?: number;
    ['wood_type']?: string;
};
/**
 * States specific to AcaciaButton
 */
type AcaciaButtonStates = Pick<BlockStateSuperset, 'button_pressed_bit' | 'facing_direction'>;
/**
 * States specific to AcaciaDoor
 */
type AcaciaDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to AcaciaDoubleSlab
 */
type AcaciaDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to AcaciaFenceGate
 */
type AcaciaFenceGateStates = Pick<BlockStateSuperset, 'in_wall_bit' | 'minecraft:cardinal_direction' | 'open_bit'>;
/**
 * States specific to AcaciaHangingSign
 */
type AcaciaHangingSignStates = Pick<BlockStateSuperset, 'attached_bit' | 'facing_direction' | 'ground_sign_direction' | 'hanging'>;
/**
 * States specific to AcaciaLeaves
 */
type AcaciaLeavesStates = Pick<BlockStateSuperset, 'persistent_bit' | 'update_bit'>;
/**
 * States specific to AcaciaLog
 */
type AcaciaLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to AcaciaPressurePlate
 */
type AcaciaPressurePlateStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to AcaciaSapling
 */
type AcaciaSaplingStates = Pick<BlockStateSuperset, 'age_bit'>;
/**
 * States specific to AcaciaShelf
 */
type AcaciaShelfStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'powered_bit' | 'powered_shelf_type'>;
/**
 * States specific to AcaciaSlab
 */
type AcaciaSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to AcaciaStairs
 */
type AcaciaStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to AcaciaStandingSign
 */
type AcaciaStandingSignStates = Pick<BlockStateSuperset, 'ground_sign_direction'>;
/**
 * States specific to AcaciaTrapdoor
 */
type AcaciaTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to AcaciaWallSign
 */
type AcaciaWallSignStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to AcaciaWood
 */
type AcaciaWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to ActivatorRail
 */
type ActivatorRailStates = Pick<BlockStateSuperset, 'rail_data_bit' | 'rail_direction'>;
/**
 * States specific to AmethystCluster
 */
type AmethystClusterStates = Pick<BlockStateSuperset, 'minecraft:block_face'>;
/**
 * States specific to AndesiteDoubleSlab
 */
type AndesiteDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to AndesiteSlab
 */
type AndesiteSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to AndesiteStairs
 */
type AndesiteStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to AndesiteWall
 */
type AndesiteWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to Anvil
 */
type AnvilStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to AzaleaLeaves
 */
type AzaleaLeavesStates = Pick<BlockStateSuperset, 'persistent_bit' | 'update_bit'>;
/**
 * States specific to AzaleaLeavesFlowered
 */
type AzaleaLeavesFloweredStates = Pick<BlockStateSuperset, 'persistent_bit' | 'update_bit'>;
/**
 * States specific to Bamboo
 */
type BambooStates = Pick<BlockStateSuperset, 'age_bit' | 'bamboo_leaf_size' | 'bamboo_stalk_thickness'>;
/**
 * States specific to BambooBlock
 */
type BambooBlockStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to BambooButton
 */
type BambooButtonStates = Pick<BlockStateSuperset, 'button_pressed_bit' | 'facing_direction'>;
/**
 * States specific to BambooDoor
 */
type BambooDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to BambooDoubleSlab
 */
type BambooDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to BambooFenceGate
 */
type BambooFenceGateStates = Pick<BlockStateSuperset, 'in_wall_bit' | 'minecraft:cardinal_direction' | 'open_bit'>;
/**
 * States specific to BambooHangingSign
 */
type BambooHangingSignStates = Pick<BlockStateSuperset, 'attached_bit' | 'facing_direction' | 'ground_sign_direction' | 'hanging'>;
/**
 * States specific to BambooMosaicDoubleSlab
 */
type BambooMosaicDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to BambooMosaicSlab
 */
type BambooMosaicSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to BambooMosaicStairs
 */
type BambooMosaicStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to BambooPressurePlate
 */
type BambooPressurePlateStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to BambooSapling
 */
type BambooSaplingStates = Pick<BlockStateSuperset, 'age_bit'>;
/**
 * States specific to BambooShelf
 */
type BambooShelfStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'powered_bit' | 'powered_shelf_type'>;
/**
 * States specific to BambooSlab
 */
type BambooSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to BambooStairs
 */
type BambooStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to BambooStandingSign
 */
type BambooStandingSignStates = Pick<BlockStateSuperset, 'ground_sign_direction'>;
/**
 * States specific to BambooTrapdoor
 */
type BambooTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to BambooWallSign
 */
type BambooWallSignStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to Barrel
 */
type BarrelStates = Pick<BlockStateSuperset, 'facing_direction' | 'open_bit'>;
/**
 * States specific to Basalt
 */
type BasaltStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to Bed
 */
type BedStates = Pick<BlockStateSuperset, 'direction' | 'head_piece_bit' | 'occupied_bit'>;
/**
 * States specific to Bedrock
 */
type BedrockStates = Pick<BlockStateSuperset, 'infiniburn_bit'>;
/**
 * States specific to BeeNest
 */
type BeeNestStates = Pick<BlockStateSuperset, 'direction' | 'honey_level'>;
/**
 * States specific to Beehive
 */
type BeehiveStates = Pick<BlockStateSuperset, 'direction' | 'honey_level'>;
/**
 * States specific to Beetroot
 */
type BeetrootStates = Pick<BlockStateSuperset, 'growth'>;
/**
 * States specific to Bell
 */
type BellStates = Pick<BlockStateSuperset, 'attachment' | 'direction' | 'toggle_bit'>;
/**
 * States specific to BigDripleaf
 */
type BigDripleafStates = Pick<BlockStateSuperset, 'big_dripleaf_head' | 'big_dripleaf_tilt' | 'minecraft:cardinal_direction'>;
/**
 * States specific to BirchButton
 */
type BirchButtonStates = Pick<BlockStateSuperset, 'button_pressed_bit' | 'facing_direction'>;
/**
 * States specific to BirchDoor
 */
type BirchDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to BirchDoubleSlab
 */
type BirchDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to BirchFenceGate
 */
type BirchFenceGateStates = Pick<BlockStateSuperset, 'in_wall_bit' | 'minecraft:cardinal_direction' | 'open_bit'>;
/**
 * States specific to BirchHangingSign
 */
type BirchHangingSignStates = Pick<BlockStateSuperset, 'attached_bit' | 'facing_direction' | 'ground_sign_direction' | 'hanging'>;
/**
 * States specific to BirchLeaves
 */
type BirchLeavesStates = Pick<BlockStateSuperset, 'persistent_bit' | 'update_bit'>;
/**
 * States specific to BirchLog
 */
type BirchLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to BirchPressurePlate
 */
type BirchPressurePlateStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to BirchSapling
 */
type BirchSaplingStates = Pick<BlockStateSuperset, 'age_bit'>;
/**
 * States specific to BirchShelf
 */
type BirchShelfStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'powered_bit' | 'powered_shelf_type'>;
/**
 * States specific to BirchSlab
 */
type BirchSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to BirchStairs
 */
type BirchStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to BirchStandingSign
 */
type BirchStandingSignStates = Pick<BlockStateSuperset, 'ground_sign_direction'>;
/**
 * States specific to BirchTrapdoor
 */
type BirchTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to BirchWallSign
 */
type BirchWallSignStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to BirchWood
 */
type BirchWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to BlackCandle
 */
type BlackCandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to BlackCandleCake
 */
type BlackCandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to BlackGlazedTerracotta
 */
type BlackGlazedTerracottaStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to BlackstoneDoubleSlab
 */
type BlackstoneDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to BlackstoneSlab
 */
type BlackstoneSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to BlackstoneStairs
 */
type BlackstoneStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to BlackstoneWall
 */
type BlackstoneWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to BlastFurnace
 */
type BlastFurnaceStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to BlueCandle
 */
type BlueCandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to BlueCandleCake
 */
type BlueCandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to BlueGlazedTerracotta
 */
type BlueGlazedTerracottaStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to BoneBlock
 */
type BoneBlockStates = Pick<BlockStateSuperset, 'deprecated' | 'pillar_axis'>;
/**
 * States specific to BorderBlock
 */
type BorderBlockStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to BrainCoralFan
 */
type BrainCoralFanStates = Pick<BlockStateSuperset, 'coral_fan_direction'>;
/**
 * States specific to BrainCoralWallFan
 */
type BrainCoralWallFanStates = Pick<BlockStateSuperset, 'coral_direction'>;
/**
 * States specific to BrewingStand
 */
type BrewingStandStates = Pick<BlockStateSuperset, 'brewing_stand_slot_a_bit' | 'brewing_stand_slot_b_bit' | 'brewing_stand_slot_c_bit'>;
/**
 * States specific to BrickDoubleSlab
 */
type BrickDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to BrickSlab
 */
type BrickSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to BrickStairs
 */
type BrickStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to BrickWall
 */
type BrickWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to BrownCandle
 */
type BrownCandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to BrownCandleCake
 */
type BrownCandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to BrownGlazedTerracotta
 */
type BrownGlazedTerracottaStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to BrownMushroomBlock
 */
type BrownMushroomBlockStates = Pick<BlockStateSuperset, 'huge_mushroom_bits'>;
/**
 * States specific to BubbleColumn
 */
type BubbleColumnStates = Pick<BlockStateSuperset, 'drag_down'>;
/**
 * States specific to BubbleCoralFan
 */
type BubbleCoralFanStates = Pick<BlockStateSuperset, 'coral_fan_direction'>;
/**
 * States specific to BubbleCoralWallFan
 */
type BubbleCoralWallFanStates = Pick<BlockStateSuperset, 'coral_direction'>;
/**
 * States specific to Cactus
 */
type CactusStates = Pick<BlockStateSuperset, 'age'>;
/**
 * States specific to Cake
 */
type CakeStates = Pick<BlockStateSuperset, 'bite_counter'>;
/**
 * States specific to CalibratedSculkSensor
 */
type CalibratedSculkSensorStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'sculk_sensor_phase'>;
/**
 * States specific to Campfire
 */
type CampfireStates = Pick<BlockStateSuperset, 'extinguished' | 'minecraft:cardinal_direction'>;
/**
 * States specific to Candle
 */
type CandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to CandleCake
 */
type CandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to Carrots
 */
type CarrotsStates = Pick<BlockStateSuperset, 'growth'>;
/**
 * States specific to CarvedPumpkin
 */
type CarvedPumpkinStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to Cauldron
 */
type CauldronStates = Pick<BlockStateSuperset, 'cauldron_liquid' | 'fill_level'>;
/**
 * States specific to CaveVines
 */
type CaveVinesStates = Pick<BlockStateSuperset, 'growing_plant_age'>;
/**
 * States specific to CaveVinesBodyWithBerries
 */
type CaveVinesBodyWithBerriesStates = Pick<BlockStateSuperset, 'growing_plant_age'>;
/**
 * States specific to CaveVinesHeadWithBerries
 */
type CaveVinesHeadWithBerriesStates = Pick<BlockStateSuperset, 'growing_plant_age'>;
/**
 * States specific to ChainCommandBlock
 */
type ChainCommandBlockStates = Pick<BlockStateSuperset, 'conditional_bit' | 'facing_direction'>;
/**
 * States specific to CherryButton
 */
type CherryButtonStates = Pick<BlockStateSuperset, 'button_pressed_bit' | 'facing_direction'>;
/**
 * States specific to CherryDoor
 */
type CherryDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to CherryDoubleSlab
 */
type CherryDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to CherryFenceGate
 */
type CherryFenceGateStates = Pick<BlockStateSuperset, 'in_wall_bit' | 'minecraft:cardinal_direction' | 'open_bit'>;
/**
 * States specific to CherryHangingSign
 */
type CherryHangingSignStates = Pick<BlockStateSuperset, 'attached_bit' | 'facing_direction' | 'ground_sign_direction' | 'hanging'>;
/**
 * States specific to CherryLeaves
 */
type CherryLeavesStates = Pick<BlockStateSuperset, 'persistent_bit' | 'update_bit'>;
/**
 * States specific to CherryLog
 */
type CherryLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to CherryPressurePlate
 */
type CherryPressurePlateStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to CherrySapling
 */
type CherrySaplingStates = Pick<BlockStateSuperset, 'age_bit'>;
/**
 * States specific to CherryShelf
 */
type CherryShelfStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'powered_bit' | 'powered_shelf_type'>;
/**
 * States specific to CherrySlab
 */
type CherrySlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to CherryStairs
 */
type CherryStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to CherryStandingSign
 */
type CherryStandingSignStates = Pick<BlockStateSuperset, 'ground_sign_direction'>;
/**
 * States specific to CherryTrapdoor
 */
type CherryTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to CherryWallSign
 */
type CherryWallSignStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to CherryWood
 */
type CherryWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to Chest
 */
type ChestStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to ChippedAnvil
 */
type ChippedAnvilStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to ChiseledBookshelf
 */
type ChiseledBookshelfStates = Pick<BlockStateSuperset, 'books_stored' | 'direction'>;
/**
 * States specific to ChiseledQuartzBlock
 */
type ChiseledQuartzBlockStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to ChorusFlower
 */
type ChorusFlowerStates = Pick<BlockStateSuperset, 'age'>;
/**
 * States specific to CobbledDeepslateDoubleSlab
 */
type CobbledDeepslateDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to CobbledDeepslateSlab
 */
type CobbledDeepslateSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to CobbledDeepslateStairs
 */
type CobbledDeepslateStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to CobbledDeepslateWall
 */
type CobbledDeepslateWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to CobblestoneDoubleSlab
 */
type CobblestoneDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to CobblestoneSlab
 */
type CobblestoneSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to CobblestoneWall
 */
type CobblestoneWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to Cocoa
 */
type CocoaStates = Pick<BlockStateSuperset, 'age' | 'direction'>;
/**
 * States specific to ColoredTorchBlue
 */
type ColoredTorchBlueStates = Pick<BlockStateSuperset, 'torch_facing_direction'>;
/**
 * States specific to ColoredTorchGreen
 */
type ColoredTorchGreenStates = Pick<BlockStateSuperset, 'torch_facing_direction'>;
/**
 * States specific to ColoredTorchPurple
 */
type ColoredTorchPurpleStates = Pick<BlockStateSuperset, 'torch_facing_direction'>;
/**
 * States specific to ColoredTorchRed
 */
type ColoredTorchRedStates = Pick<BlockStateSuperset, 'torch_facing_direction'>;
/**
 * States specific to CommandBlock
 */
type CommandBlockStates = Pick<BlockStateSuperset, 'conditional_bit' | 'facing_direction'>;
/**
 * States specific to Composter
 */
type ComposterStates = Pick<BlockStateSuperset, 'composter_fill_level'>;
/**
 * States specific to CompoundCreator
 */
type CompoundCreatorStates = Pick<BlockStateSuperset, 'direction'>;
/**
 * States specific to CopperBulb
 */
type CopperBulbStates = Pick<BlockStateSuperset, 'lit' | 'powered_bit'>;
/**
 * States specific to CopperChain
 */
type CopperChainStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to CopperChest
 */
type CopperChestStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to CopperDoor
 */
type CopperDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to CopperGolemStatue
 */
type CopperGolemStatueStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to CopperLantern
 */
type CopperLanternStates = Pick<BlockStateSuperset, 'hanging'>;
/**
 * States specific to CopperTorch
 */
type CopperTorchStates = Pick<BlockStateSuperset, 'torch_facing_direction'>;
/**
 * States specific to CopperTrapdoor
 */
type CopperTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to Crafter
 */
type CrafterStates = Pick<BlockStateSuperset, 'crafting' | 'orientation' | 'triggered_bit'>;
/**
 * States specific to CreakingHeart
 */
type CreakingHeartStates = Pick<BlockStateSuperset, 'creaking_heart_state' | 'natural' | 'pillar_axis'>;
/**
 * States specific to CreeperHead
 */
type CreeperHeadStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to CrimsonButton
 */
type CrimsonButtonStates = Pick<BlockStateSuperset, 'button_pressed_bit' | 'facing_direction'>;
/**
 * States specific to CrimsonDoor
 */
type CrimsonDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to CrimsonDoubleSlab
 */
type CrimsonDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to CrimsonFenceGate
 */
type CrimsonFenceGateStates = Pick<BlockStateSuperset, 'in_wall_bit' | 'minecraft:cardinal_direction' | 'open_bit'>;
/**
 * States specific to CrimsonHangingSign
 */
type CrimsonHangingSignStates = Pick<BlockStateSuperset, 'attached_bit' | 'facing_direction' | 'ground_sign_direction' | 'hanging'>;
/**
 * States specific to CrimsonHyphae
 */
type CrimsonHyphaeStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to CrimsonPressurePlate
 */
type CrimsonPressurePlateStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to CrimsonShelf
 */
type CrimsonShelfStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'powered_bit' | 'powered_shelf_type'>;
/**
 * States specific to CrimsonSlab
 */
type CrimsonSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to CrimsonStairs
 */
type CrimsonStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to CrimsonStandingSign
 */
type CrimsonStandingSignStates = Pick<BlockStateSuperset, 'ground_sign_direction'>;
/**
 * States specific to CrimsonStem
 */
type CrimsonStemStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to CrimsonTrapdoor
 */
type CrimsonTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to CrimsonWallSign
 */
type CrimsonWallSignStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to CutCopperSlab
 */
type CutCopperSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to CutCopperStairs
 */
type CutCopperStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to CutRedSandstoneDoubleSlab
 */
type CutRedSandstoneDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to CutRedSandstoneSlab
 */
type CutRedSandstoneSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to CutSandstoneDoubleSlab
 */
type CutSandstoneDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to CutSandstoneSlab
 */
type CutSandstoneSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to CyanCandle
 */
type CyanCandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to CyanCandleCake
 */
type CyanCandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to CyanGlazedTerracotta
 */
type CyanGlazedTerracottaStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to DamagedAnvil
 */
type DamagedAnvilStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to DarkOakButton
 */
type DarkOakButtonStates = Pick<BlockStateSuperset, 'button_pressed_bit' | 'facing_direction'>;
/**
 * States specific to DarkOakDoor
 */
type DarkOakDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to DarkOakDoubleSlab
 */
type DarkOakDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to DarkOakFenceGate
 */
type DarkOakFenceGateStates = Pick<BlockStateSuperset, 'in_wall_bit' | 'minecraft:cardinal_direction' | 'open_bit'>;
/**
 * States specific to DarkOakHangingSign
 */
type DarkOakHangingSignStates = Pick<BlockStateSuperset, 'attached_bit' | 'facing_direction' | 'ground_sign_direction' | 'hanging'>;
/**
 * States specific to DarkOakLeaves
 */
type DarkOakLeavesStates = Pick<BlockStateSuperset, 'persistent_bit' | 'update_bit'>;
/**
 * States specific to DarkOakLog
 */
type DarkOakLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to DarkOakPressurePlate
 */
type DarkOakPressurePlateStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to DarkOakSapling
 */
type DarkOakSaplingStates = Pick<BlockStateSuperset, 'age_bit'>;
/**
 * States specific to DarkOakShelf
 */
type DarkOakShelfStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'powered_bit' | 'powered_shelf_type'>;
/**
 * States specific to DarkOakSlab
 */
type DarkOakSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to DarkOakStairs
 */
type DarkOakStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to DarkOakTrapdoor
 */
type DarkOakTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to DarkOakWood
 */
type DarkOakWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to DarkPrismarineDoubleSlab
 */
type DarkPrismarineDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to DarkPrismarineSlab
 */
type DarkPrismarineSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to DarkPrismarineStairs
 */
type DarkPrismarineStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to DarkoakStandingSign
 */
type DarkoakStandingSignStates = Pick<BlockStateSuperset, 'ground_sign_direction'>;
/**
 * States specific to DarkoakWallSign
 */
type DarkoakWallSignStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to DaylightDetector
 */
type DaylightDetectorStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to DaylightDetectorInverted
 */
type DaylightDetectorInvertedStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to DeadBrainCoralFan
 */
type DeadBrainCoralFanStates = Pick<BlockStateSuperset, 'coral_fan_direction'>;
/**
 * States specific to DeadBrainCoralWallFan
 */
type DeadBrainCoralWallFanStates = Pick<BlockStateSuperset, 'coral_direction'>;
/**
 * States specific to DeadBubbleCoralFan
 */
type DeadBubbleCoralFanStates = Pick<BlockStateSuperset, 'coral_fan_direction'>;
/**
 * States specific to DeadBubbleCoralWallFan
 */
type DeadBubbleCoralWallFanStates = Pick<BlockStateSuperset, 'coral_direction'>;
/**
 * States specific to DeadFireCoralFan
 */
type DeadFireCoralFanStates = Pick<BlockStateSuperset, 'coral_fan_direction'>;
/**
 * States specific to DeadFireCoralWallFan
 */
type DeadFireCoralWallFanStates = Pick<BlockStateSuperset, 'coral_direction'>;
/**
 * States specific to DeadHornCoralFan
 */
type DeadHornCoralFanStates = Pick<BlockStateSuperset, 'coral_fan_direction'>;
/**
 * States specific to DeadHornCoralWallFan
 */
type DeadHornCoralWallFanStates = Pick<BlockStateSuperset, 'coral_direction'>;
/**
 * States specific to DeadTubeCoralFan
 */
type DeadTubeCoralFanStates = Pick<BlockStateSuperset, 'coral_fan_direction'>;
/**
 * States specific to DeadTubeCoralWallFan
 */
type DeadTubeCoralWallFanStates = Pick<BlockStateSuperset, 'coral_direction'>;
/**
 * States specific to DecoratedPot
 */
type DecoratedPotStates = Pick<BlockStateSuperset, 'direction'>;
/**
 * States specific to Deepslate
 */
type DeepslateStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to DeepslateBrickDoubleSlab
 */
type DeepslateBrickDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to DeepslateBrickSlab
 */
type DeepslateBrickSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to DeepslateBrickStairs
 */
type DeepslateBrickStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to DeepslateBrickWall
 */
type DeepslateBrickWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to DeepslateTileDoubleSlab
 */
type DeepslateTileDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to DeepslateTileSlab
 */
type DeepslateTileSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to DeepslateTileStairs
 */
type DeepslateTileStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to DeepslateTileWall
 */
type DeepslateTileWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to DetectorRail
 */
type DetectorRailStates = Pick<BlockStateSuperset, 'rail_data_bit' | 'rail_direction'>;
/**
 * States specific to DioriteDoubleSlab
 */
type DioriteDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to DioriteSlab
 */
type DioriteSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to DioriteStairs
 */
type DioriteStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to DioriteWall
 */
type DioriteWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to Dispenser
 */
type DispenserStates = Pick<BlockStateSuperset, 'facing_direction' | 'triggered_bit'>;
/**
 * States specific to DoubleCutCopperSlab
 */
type DoubleCutCopperSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to DragonHead
 */
type DragonHeadStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to DriedGhast
 */
type DriedGhastStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'rehydration_level'>;
/**
 * States specific to Dropper
 */
type DropperStates = Pick<BlockStateSuperset, 'facing_direction' | 'triggered_bit'>;
/**
 * States specific to ElementConstructor
 */
type ElementConstructorStates = Pick<BlockStateSuperset, 'direction'>;
/**
 * States specific to EndBrickStairs
 */
type EndBrickStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to EndPortalFrame
 */
type EndPortalFrameStates = Pick<BlockStateSuperset, 'end_portal_eye_bit' | 'minecraft:cardinal_direction'>;
/**
 * States specific to EndRod
 */
type EndRodStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to EndStoneBrickDoubleSlab
 */
type EndStoneBrickDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to EndStoneBrickSlab
 */
type EndStoneBrickSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to EndStoneBrickWall
 */
type EndStoneBrickWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to EnderChest
 */
type EnderChestStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to ExposedCopperBulb
 */
type ExposedCopperBulbStates = Pick<BlockStateSuperset, 'lit' | 'powered_bit'>;
/**
 * States specific to ExposedCopperChain
 */
type ExposedCopperChainStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to ExposedCopperChest
 */
type ExposedCopperChestStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to ExposedCopperDoor
 */
type ExposedCopperDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to ExposedCopperGolemStatue
 */
type ExposedCopperGolemStatueStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to ExposedCopperLantern
 */
type ExposedCopperLanternStates = Pick<BlockStateSuperset, 'hanging'>;
/**
 * States specific to ExposedCopperTrapdoor
 */
type ExposedCopperTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to ExposedCutCopperSlab
 */
type ExposedCutCopperSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to ExposedCutCopperStairs
 */
type ExposedCutCopperStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to ExposedDoubleCutCopperSlab
 */
type ExposedDoubleCutCopperSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to ExposedLightningRod
 */
type ExposedLightningRodStates = Pick<BlockStateSuperset, 'facing_direction' | 'powered_bit'>;
/**
 * States specific to Farmland
 */
type FarmlandStates = Pick<BlockStateSuperset, 'moisturized_amount'>;
/**
 * States specific to FenceGate
 */
type FenceGateStates = Pick<BlockStateSuperset, 'in_wall_bit' | 'minecraft:cardinal_direction' | 'open_bit'>;
/**
 * States specific to Fire
 */
type FireStates = Pick<BlockStateSuperset, 'age'>;
/**
 * States specific to FireCoralFan
 */
type FireCoralFanStates = Pick<BlockStateSuperset, 'coral_fan_direction'>;
/**
 * States specific to FireCoralWallFan
 */
type FireCoralWallFanStates = Pick<BlockStateSuperset, 'coral_direction'>;
/**
 * States specific to FlowerPot
 */
type FlowerPotStates = Pick<BlockStateSuperset, 'update_bit'>;
/**
 * States specific to FlowingLava
 */
type FlowingLavaStates = Pick<BlockStateSuperset, 'liquid_depth'>;
/**
 * States specific to FlowingWater
 */
type FlowingWaterStates = Pick<BlockStateSuperset, 'liquid_depth'>;
/**
 * States specific to Frame
 */
type FrameStates = Pick<BlockStateSuperset, 'facing_direction' | 'item_frame_map_bit' | 'item_frame_photo_bit'>;
/**
 * States specific to FrostedIce
 */
type FrostedIceStates = Pick<BlockStateSuperset, 'age'>;
/**
 * States specific to Furnace
 */
type FurnaceStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to GlowFrame
 */
type GlowFrameStates = Pick<BlockStateSuperset, 'facing_direction' | 'item_frame_map_bit' | 'item_frame_photo_bit'>;
/**
 * States specific to GlowLichen
 */
type GlowLichenStates = Pick<BlockStateSuperset, 'multi_face_direction_bits'>;
/**
 * States specific to GoldenRail
 */
type GoldenRailStates = Pick<BlockStateSuperset, 'rail_data_bit' | 'rail_direction'>;
/**
 * States specific to GraniteDoubleSlab
 */
type GraniteDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to GraniteSlab
 */
type GraniteSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to GraniteStairs
 */
type GraniteStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to GraniteWall
 */
type GraniteWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to GrayCandle
 */
type GrayCandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to GrayCandleCake
 */
type GrayCandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to GrayGlazedTerracotta
 */
type GrayGlazedTerracottaStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to GreenCandle
 */
type GreenCandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to GreenCandleCake
 */
type GreenCandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to GreenGlazedTerracotta
 */
type GreenGlazedTerracottaStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to Grindstone
 */
type GrindstoneStates = Pick<BlockStateSuperset, 'attachment' | 'direction'>;
/**
 * States specific to HayBlock
 */
type HayBlockStates = Pick<BlockStateSuperset, 'deprecated' | 'pillar_axis'>;
/**
 * States specific to HeavyWeightedPressurePlate
 */
type HeavyWeightedPressurePlateStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to Hopper
 */
type HopperStates = Pick<BlockStateSuperset, 'facing_direction' | 'toggle_bit'>;
/**
 * States specific to HornCoralFan
 */
type HornCoralFanStates = Pick<BlockStateSuperset, 'coral_fan_direction'>;
/**
 * States specific to HornCoralWallFan
 */
type HornCoralWallFanStates = Pick<BlockStateSuperset, 'coral_direction'>;
/**
 * States specific to InfestedDeepslate
 */
type InfestedDeepslateStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to IronChain
 */
type IronChainStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to IronDoor
 */
type IronDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to IronTrapdoor
 */
type IronTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to Jigsaw
 */
type JigsawStates = Pick<BlockStateSuperset, 'facing_direction' | 'rotation'>;
/**
 * States specific to JungleButton
 */
type JungleButtonStates = Pick<BlockStateSuperset, 'button_pressed_bit' | 'facing_direction'>;
/**
 * States specific to JungleDoor
 */
type JungleDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to JungleDoubleSlab
 */
type JungleDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to JungleFenceGate
 */
type JungleFenceGateStates = Pick<BlockStateSuperset, 'in_wall_bit' | 'minecraft:cardinal_direction' | 'open_bit'>;
/**
 * States specific to JungleHangingSign
 */
type JungleHangingSignStates = Pick<BlockStateSuperset, 'attached_bit' | 'facing_direction' | 'ground_sign_direction' | 'hanging'>;
/**
 * States specific to JungleLeaves
 */
type JungleLeavesStates = Pick<BlockStateSuperset, 'persistent_bit' | 'update_bit'>;
/**
 * States specific to JungleLog
 */
type JungleLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to JunglePressurePlate
 */
type JunglePressurePlateStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to JungleSapling
 */
type JungleSaplingStates = Pick<BlockStateSuperset, 'age_bit'>;
/**
 * States specific to JungleShelf
 */
type JungleShelfStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'powered_bit' | 'powered_shelf_type'>;
/**
 * States specific to JungleSlab
 */
type JungleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to JungleStairs
 */
type JungleStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to JungleStandingSign
 */
type JungleStandingSignStates = Pick<BlockStateSuperset, 'ground_sign_direction'>;
/**
 * States specific to JungleTrapdoor
 */
type JungleTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to JungleWallSign
 */
type JungleWallSignStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to JungleWood
 */
type JungleWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to Kelp
 */
type KelpStates = Pick<BlockStateSuperset, 'kelp_age'>;
/**
 * States specific to LabTable
 */
type LabTableStates = Pick<BlockStateSuperset, 'direction'>;
/**
 * States specific to Ladder
 */
type LadderStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to Lantern
 */
type LanternStates = Pick<BlockStateSuperset, 'hanging'>;
/**
 * States specific to LargeAmethystBud
 */
type LargeAmethystBudStates = Pick<BlockStateSuperset, 'minecraft:block_face'>;
/**
 * States specific to LargeFern
 */
type LargeFernStates = Pick<BlockStateSuperset, 'upper_block_bit'>;
/**
 * States specific to Lava
 */
type LavaStates = Pick<BlockStateSuperset, 'liquid_depth'>;
/**
 * States specific to LeafLitter
 */
type LeafLitterStates = Pick<BlockStateSuperset, 'growth' | 'minecraft:cardinal_direction'>;
/**
 * States specific to Lectern
 */
type LecternStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'powered_bit'>;
/**
 * States specific to Lever
 */
type LeverStates = Pick<BlockStateSuperset, 'lever_direction' | 'open_bit'>;
/**
 * States specific to LightBlueCandle
 */
type LightBlueCandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to LightBlueCandleCake
 */
type LightBlueCandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to LightBlueGlazedTerracotta
 */
type LightBlueGlazedTerracottaStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to LightGrayCandle
 */
type LightGrayCandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to LightGrayCandleCake
 */
type LightGrayCandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to LightWeightedPressurePlate
 */
type LightWeightedPressurePlateStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to LightningRod
 */
type LightningRodStates = Pick<BlockStateSuperset, 'facing_direction' | 'powered_bit'>;
/**
 * States specific to Lilac
 */
type LilacStates = Pick<BlockStateSuperset, 'upper_block_bit'>;
/**
 * States specific to LimeCandle
 */
type LimeCandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to LimeCandleCake
 */
type LimeCandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to LimeGlazedTerracotta
 */
type LimeGlazedTerracottaStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to LitBlastFurnace
 */
type LitBlastFurnaceStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to LitFurnace
 */
type LitFurnaceStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to LitPumpkin
 */
type LitPumpkinStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to LitSmoker
 */
type LitSmokerStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to Loom
 */
type LoomStates = Pick<BlockStateSuperset, 'direction'>;
/**
 * States specific to MagentaCandle
 */
type MagentaCandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to MagentaCandleCake
 */
type MagentaCandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to MagentaGlazedTerracotta
 */
type MagentaGlazedTerracottaStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to MangroveButton
 */
type MangroveButtonStates = Pick<BlockStateSuperset, 'button_pressed_bit' | 'facing_direction'>;
/**
 * States specific to MangroveDoor
 */
type MangroveDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to MangroveDoubleSlab
 */
type MangroveDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to MangroveFenceGate
 */
type MangroveFenceGateStates = Pick<BlockStateSuperset, 'in_wall_bit' | 'minecraft:cardinal_direction' | 'open_bit'>;
/**
 * States specific to MangroveHangingSign
 */
type MangroveHangingSignStates = Pick<BlockStateSuperset, 'attached_bit' | 'facing_direction' | 'ground_sign_direction' | 'hanging'>;
/**
 * States specific to MangroveLeaves
 */
type MangroveLeavesStates = Pick<BlockStateSuperset, 'persistent_bit' | 'update_bit'>;
/**
 * States specific to MangroveLog
 */
type MangroveLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to MangrovePressurePlate
 */
type MangrovePressurePlateStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to MangrovePropagule
 */
type MangrovePropaguleStates = Pick<BlockStateSuperset, 'hanging' | 'propagule_stage'>;
/**
 * States specific to MangroveShelf
 */
type MangroveShelfStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'powered_bit' | 'powered_shelf_type'>;
/**
 * States specific to MangroveSlab
 */
type MangroveSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to MangroveStairs
 */
type MangroveStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to MangroveStandingSign
 */
type MangroveStandingSignStates = Pick<BlockStateSuperset, 'ground_sign_direction'>;
/**
 * States specific to MangroveTrapdoor
 */
type MangroveTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to MangroveWallSign
 */
type MangroveWallSignStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to MangroveWood
 */
type MangroveWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to MaterialReducer
 */
type MaterialReducerStates = Pick<BlockStateSuperset, 'direction'>;
/**
 * States specific to MediumAmethystBud
 */
type MediumAmethystBudStates = Pick<BlockStateSuperset, 'minecraft:block_face'>;
/**
 * States specific to MelonStem
 */
type MelonStemStates = Pick<BlockStateSuperset, 'facing_direction' | 'growth'>;
/**
 * States specific to MossyCobblestoneDoubleSlab
 */
type MossyCobblestoneDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to MossyCobblestoneSlab
 */
type MossyCobblestoneSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to MossyCobblestoneStairs
 */
type MossyCobblestoneStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to MossyCobblestoneWall
 */
type MossyCobblestoneWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to MossyStoneBrickDoubleSlab
 */
type MossyStoneBrickDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to MossyStoneBrickSlab
 */
type MossyStoneBrickSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to MossyStoneBrickStairs
 */
type MossyStoneBrickStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to MossyStoneBrickWall
 */
type MossyStoneBrickWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to MudBrickDoubleSlab
 */
type MudBrickDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to MudBrickSlab
 */
type MudBrickSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to MudBrickStairs
 */
type MudBrickStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to MudBrickWall
 */
type MudBrickWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to MuddyMangroveRoots
 */
type MuddyMangroveRootsStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to MushroomStem
 */
type MushroomStemStates = Pick<BlockStateSuperset, 'huge_mushroom_bits'>;
/**
 * States specific to NetherBrickDoubleSlab
 */
type NetherBrickDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to NetherBrickSlab
 */
type NetherBrickSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to NetherBrickStairs
 */
type NetherBrickStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to NetherBrickWall
 */
type NetherBrickWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to NetherWart
 */
type NetherWartStates = Pick<BlockStateSuperset, 'age'>;
/**
 * States specific to NormalStoneDoubleSlab
 */
type NormalStoneDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to NormalStoneSlab
 */
type NormalStoneSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to NormalStoneStairs
 */
type NormalStoneStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to OakDoubleSlab
 */
type OakDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to OakHangingSign
 */
type OakHangingSignStates = Pick<BlockStateSuperset, 'attached_bit' | 'facing_direction' | 'ground_sign_direction' | 'hanging'>;
/**
 * States specific to OakLeaves
 */
type OakLeavesStates = Pick<BlockStateSuperset, 'persistent_bit' | 'update_bit'>;
/**
 * States specific to OakLog
 */
type OakLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to OakSapling
 */
type OakSaplingStates = Pick<BlockStateSuperset, 'age_bit'>;
/**
 * States specific to OakShelf
 */
type OakShelfStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'powered_bit' | 'powered_shelf_type'>;
/**
 * States specific to OakSlab
 */
type OakSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to OakStairs
 */
type OakStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to OakWood
 */
type OakWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to Observer
 */
type ObserverStates = Pick<BlockStateSuperset, 'minecraft:facing_direction' | 'powered_bit'>;
/**
 * States specific to OchreFroglight
 */
type OchreFroglightStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to OrangeCandle
 */
type OrangeCandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to OrangeCandleCake
 */
type OrangeCandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to OrangeGlazedTerracotta
 */
type OrangeGlazedTerracottaStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to OxidizedCopperBulb
 */
type OxidizedCopperBulbStates = Pick<BlockStateSuperset, 'lit' | 'powered_bit'>;
/**
 * States specific to OxidizedCopperChain
 */
type OxidizedCopperChainStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to OxidizedCopperChest
 */
type OxidizedCopperChestStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to OxidizedCopperDoor
 */
type OxidizedCopperDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to OxidizedCopperGolemStatue
 */
type OxidizedCopperGolemStatueStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to OxidizedCopperLantern
 */
type OxidizedCopperLanternStates = Pick<BlockStateSuperset, 'hanging'>;
/**
 * States specific to OxidizedCopperTrapdoor
 */
type OxidizedCopperTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to OxidizedCutCopperSlab
 */
type OxidizedCutCopperSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to OxidizedCutCopperStairs
 */
type OxidizedCutCopperStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to OxidizedDoubleCutCopperSlab
 */
type OxidizedDoubleCutCopperSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to OxidizedLightningRod
 */
type OxidizedLightningRodStates = Pick<BlockStateSuperset, 'facing_direction' | 'powered_bit'>;
/**
 * States specific to PaleHangingMoss
 */
type PaleHangingMossStates = Pick<BlockStateSuperset, 'tip'>;
/**
 * States specific to PaleMossCarpet
 */
type PaleMossCarpetStates = Pick<BlockStateSuperset, 'pale_moss_carpet_side_east' | 'pale_moss_carpet_side_north' | 'pale_moss_carpet_side_south' | 'pale_moss_carpet_side_west' | 'upper_block_bit'>;
/**
 * States specific to PaleOakButton
 */
type PaleOakButtonStates = Pick<BlockStateSuperset, 'button_pressed_bit' | 'facing_direction'>;
/**
 * States specific to PaleOakDoor
 */
type PaleOakDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to PaleOakDoubleSlab
 */
type PaleOakDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PaleOakFenceGate
 */
type PaleOakFenceGateStates = Pick<BlockStateSuperset, 'in_wall_bit' | 'minecraft:cardinal_direction' | 'open_bit'>;
/**
 * States specific to PaleOakHangingSign
 */
type PaleOakHangingSignStates = Pick<BlockStateSuperset, 'attached_bit' | 'facing_direction' | 'ground_sign_direction' | 'hanging'>;
/**
 * States specific to PaleOakLeaves
 */
type PaleOakLeavesStates = Pick<BlockStateSuperset, 'persistent_bit' | 'update_bit'>;
/**
 * States specific to PaleOakLog
 */
type PaleOakLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to PaleOakPressurePlate
 */
type PaleOakPressurePlateStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to PaleOakSapling
 */
type PaleOakSaplingStates = Pick<BlockStateSuperset, 'age_bit'>;
/**
 * States specific to PaleOakShelf
 */
type PaleOakShelfStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'powered_bit' | 'powered_shelf_type'>;
/**
 * States specific to PaleOakSlab
 */
type PaleOakSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PaleOakStairs
 */
type PaleOakStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to PaleOakStandingSign
 */
type PaleOakStandingSignStates = Pick<BlockStateSuperset, 'ground_sign_direction'>;
/**
 * States specific to PaleOakTrapdoor
 */
type PaleOakTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to PaleOakWallSign
 */
type PaleOakWallSignStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to PaleOakWood
 */
type PaleOakWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to PearlescentFroglight
 */
type PearlescentFroglightStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to Peony
 */
type PeonyStates = Pick<BlockStateSuperset, 'upper_block_bit'>;
/**
 * States specific to PetrifiedOakDoubleSlab
 */
type PetrifiedOakDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PetrifiedOakSlab
 */
type PetrifiedOakSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PiglinHead
 */
type PiglinHeadStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to PinkCandle
 */
type PinkCandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to PinkCandleCake
 */
type PinkCandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to PinkGlazedTerracotta
 */
type PinkGlazedTerracottaStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to PinkPetals
 */
type PinkPetalsStates = Pick<BlockStateSuperset, 'growth' | 'minecraft:cardinal_direction'>;
/**
 * States specific to Piston
 */
type PistonStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to PistonArmCollision
 */
type PistonArmCollisionStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to PitcherCrop
 */
type PitcherCropStates = Pick<BlockStateSuperset, 'growth' | 'upper_block_bit'>;
/**
 * States specific to PitcherPlant
 */
type PitcherPlantStates = Pick<BlockStateSuperset, 'upper_block_bit'>;
/**
 * States specific to PlayerHead
 */
type PlayerHeadStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to PointedDripstone
 */
type PointedDripstoneStates = Pick<BlockStateSuperset, 'dripstone_thickness' | 'hanging'>;
/**
 * States specific to PolishedAndesiteDoubleSlab
 */
type PolishedAndesiteDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PolishedAndesiteSlab
 */
type PolishedAndesiteSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PolishedAndesiteStairs
 */
type PolishedAndesiteStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to PolishedBasalt
 */
type PolishedBasaltStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to PolishedBlackstoneBrickDoubleSlab
 */
type PolishedBlackstoneBrickDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PolishedBlackstoneBrickSlab
 */
type PolishedBlackstoneBrickSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PolishedBlackstoneBrickStairs
 */
type PolishedBlackstoneBrickStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to PolishedBlackstoneBrickWall
 */
type PolishedBlackstoneBrickWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to PolishedBlackstoneButton
 */
type PolishedBlackstoneButtonStates = Pick<BlockStateSuperset, 'button_pressed_bit' | 'facing_direction'>;
/**
 * States specific to PolishedBlackstoneDoubleSlab
 */
type PolishedBlackstoneDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PolishedBlackstonePressurePlate
 */
type PolishedBlackstonePressurePlateStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to PolishedBlackstoneSlab
 */
type PolishedBlackstoneSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PolishedBlackstoneStairs
 */
type PolishedBlackstoneStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to PolishedBlackstoneWall
 */
type PolishedBlackstoneWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to PolishedDeepslateDoubleSlab
 */
type PolishedDeepslateDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PolishedDeepslateSlab
 */
type PolishedDeepslateSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PolishedDeepslateStairs
 */
type PolishedDeepslateStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to PolishedDeepslateWall
 */
type PolishedDeepslateWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to PolishedDioriteDoubleSlab
 */
type PolishedDioriteDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PolishedDioriteSlab
 */
type PolishedDioriteSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PolishedDioriteStairs
 */
type PolishedDioriteStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to PolishedGraniteDoubleSlab
 */
type PolishedGraniteDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PolishedGraniteSlab
 */
type PolishedGraniteSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PolishedGraniteStairs
 */
type PolishedGraniteStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to PolishedTuffDoubleSlab
 */
type PolishedTuffDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PolishedTuffSlab
 */
type PolishedTuffSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PolishedTuffStairs
 */
type PolishedTuffStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to PolishedTuffWall
 */
type PolishedTuffWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to Portal
 */
type PortalStates = Pick<BlockStateSuperset, 'portal_axis'>;
/**
 * States specific to Potatoes
 */
type PotatoesStates = Pick<BlockStateSuperset, 'growth'>;
/**
 * States specific to PoweredComparator
 */
type PoweredComparatorStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'output_lit_bit' | 'output_subtract_bit'>;
/**
 * States specific to PoweredRepeater
 */
type PoweredRepeaterStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'repeater_delay'>;
/**
 * States specific to PrismarineBrickDoubleSlab
 */
type PrismarineBrickDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PrismarineBrickSlab
 */
type PrismarineBrickSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PrismarineBricksStairs
 */
type PrismarineBricksStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to PrismarineDoubleSlab
 */
type PrismarineDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PrismarineSlab
 */
type PrismarineSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PrismarineStairs
 */
type PrismarineStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to PrismarineWall
 */
type PrismarineWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to Pumpkin
 */
type PumpkinStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to PumpkinStem
 */
type PumpkinStemStates = Pick<BlockStateSuperset, 'facing_direction' | 'growth'>;
/**
 * States specific to PurpleCandle
 */
type PurpleCandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to PurpleCandleCake
 */
type PurpleCandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to PurpleGlazedTerracotta
 */
type PurpleGlazedTerracottaStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to PurpurBlock
 */
type PurpurBlockStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to PurpurDoubleSlab
 */
type PurpurDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PurpurPillar
 */
type PurpurPillarStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to PurpurSlab
 */
type PurpurSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to PurpurStairs
 */
type PurpurStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to QuartzBlock
 */
type QuartzBlockStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to QuartzDoubleSlab
 */
type QuartzDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to QuartzPillar
 */
type QuartzPillarStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to QuartzSlab
 */
type QuartzSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to QuartzStairs
 */
type QuartzStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to Rail
 */
type RailStates = Pick<BlockStateSuperset, 'rail_direction'>;
/**
 * States specific to RedCandle
 */
type RedCandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to RedCandleCake
 */
type RedCandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to RedGlazedTerracotta
 */
type RedGlazedTerracottaStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to RedMushroomBlock
 */
type RedMushroomBlockStates = Pick<BlockStateSuperset, 'huge_mushroom_bits'>;
/**
 * States specific to RedNetherBrickDoubleSlab
 */
type RedNetherBrickDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to RedNetherBrickSlab
 */
type RedNetherBrickSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to RedNetherBrickStairs
 */
type RedNetherBrickStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to RedNetherBrickWall
 */
type RedNetherBrickWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to RedSandstoneDoubleSlab
 */
type RedSandstoneDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to RedSandstoneSlab
 */
type RedSandstoneSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to RedSandstoneStairs
 */
type RedSandstoneStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to RedSandstoneWall
 */
type RedSandstoneWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to RedstoneTorch
 */
type RedstoneTorchStates = Pick<BlockStateSuperset, 'torch_facing_direction'>;
/**
 * States specific to RedstoneWire
 */
type RedstoneWireStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to Reeds
 */
type ReedsStates = Pick<BlockStateSuperset, 'age'>;
/**
 * States specific to RepeatingCommandBlock
 */
type RepeatingCommandBlockStates = Pick<BlockStateSuperset, 'conditional_bit' | 'facing_direction'>;
/**
 * States specific to ResinBrickDoubleSlab
 */
type ResinBrickDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to ResinBrickSlab
 */
type ResinBrickSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to ResinBrickStairs
 */
type ResinBrickStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to ResinBrickWall
 */
type ResinBrickWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to ResinClump
 */
type ResinClumpStates = Pick<BlockStateSuperset, 'multi_face_direction_bits'>;
/**
 * States specific to RespawnAnchor
 */
type RespawnAnchorStates = Pick<BlockStateSuperset, 'respawn_anchor_charge'>;
/**
 * States specific to RoseBush
 */
type RoseBushStates = Pick<BlockStateSuperset, 'upper_block_bit'>;
/**
 * States specific to SandstoneDoubleSlab
 */
type SandstoneDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to SandstoneSlab
 */
type SandstoneSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to SandstoneStairs
 */
type SandstoneStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to SandstoneWall
 */
type SandstoneWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to Scaffolding
 */
type ScaffoldingStates = Pick<BlockStateSuperset, 'stability' | 'stability_check'>;
/**
 * States specific to SculkCatalyst
 */
type SculkCatalystStates = Pick<BlockStateSuperset, 'bloom'>;
/**
 * States specific to SculkSensor
 */
type SculkSensorStates = Pick<BlockStateSuperset, 'sculk_sensor_phase'>;
/**
 * States specific to SculkShrieker
 */
type SculkShriekerStates = Pick<BlockStateSuperset, 'active' | 'can_summon'>;
/**
 * States specific to SculkVein
 */
type SculkVeinStates = Pick<BlockStateSuperset, 'multi_face_direction_bits'>;
/**
 * States specific to SeaPickle
 */
type SeaPickleStates = Pick<BlockStateSuperset, 'cluster_count' | 'dead_bit'>;
/**
 * States specific to Seagrass
 */
type SeagrassStates = Pick<BlockStateSuperset, 'sea_grass_type'>;
/**
 * States specific to SilverGlazedTerracotta
 */
type SilverGlazedTerracottaStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to SkeletonSkull
 */
type SkeletonSkullStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to SmallAmethystBud
 */
type SmallAmethystBudStates = Pick<BlockStateSuperset, 'minecraft:block_face'>;
/**
 * States specific to SmallDripleafBlock
 */
type SmallDripleafBlockStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'upper_block_bit'>;
/**
 * States specific to Smoker
 */
type SmokerStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to SmoothQuartz
 */
type SmoothQuartzStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to SmoothQuartzDoubleSlab
 */
type SmoothQuartzDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to SmoothQuartzSlab
 */
type SmoothQuartzSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to SmoothQuartzStairs
 */
type SmoothQuartzStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to SmoothRedSandstoneDoubleSlab
 */
type SmoothRedSandstoneDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to SmoothRedSandstoneSlab
 */
type SmoothRedSandstoneSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to SmoothRedSandstoneStairs
 */
type SmoothRedSandstoneStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to SmoothSandstoneDoubleSlab
 */
type SmoothSandstoneDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to SmoothSandstoneSlab
 */
type SmoothSandstoneSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to SmoothSandstoneStairs
 */
type SmoothSandstoneStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to SmoothStoneDoubleSlab
 */
type SmoothStoneDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to SmoothStoneSlab
 */
type SmoothStoneSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to SnifferEgg
 */
type SnifferEggStates = Pick<BlockStateSuperset, 'cracked_state'>;
/**
 * States specific to SnowLayer
 */
type SnowLayerStates = Pick<BlockStateSuperset, 'covered_bit' | 'height'>;
/**
 * States specific to SoulCampfire
 */
type SoulCampfireStates = Pick<BlockStateSuperset, 'extinguished' | 'minecraft:cardinal_direction'>;
/**
 * States specific to SoulFire
 */
type SoulFireStates = Pick<BlockStateSuperset, 'age'>;
/**
 * States specific to SoulLantern
 */
type SoulLanternStates = Pick<BlockStateSuperset, 'hanging'>;
/**
 * States specific to SoulTorch
 */
type SoulTorchStates = Pick<BlockStateSuperset, 'torch_facing_direction'>;
/**
 * States specific to SpruceButton
 */
type SpruceButtonStates = Pick<BlockStateSuperset, 'button_pressed_bit' | 'facing_direction'>;
/**
 * States specific to SpruceDoor
 */
type SpruceDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to SpruceDoubleSlab
 */
type SpruceDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to SpruceFenceGate
 */
type SpruceFenceGateStates = Pick<BlockStateSuperset, 'in_wall_bit' | 'minecraft:cardinal_direction' | 'open_bit'>;
/**
 * States specific to SpruceHangingSign
 */
type SpruceHangingSignStates = Pick<BlockStateSuperset, 'attached_bit' | 'facing_direction' | 'ground_sign_direction' | 'hanging'>;
/**
 * States specific to SpruceLeaves
 */
type SpruceLeavesStates = Pick<BlockStateSuperset, 'persistent_bit' | 'update_bit'>;
/**
 * States specific to SpruceLog
 */
type SpruceLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to SprucePressurePlate
 */
type SprucePressurePlateStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to SpruceSapling
 */
type SpruceSaplingStates = Pick<BlockStateSuperset, 'age_bit'>;
/**
 * States specific to SpruceShelf
 */
type SpruceShelfStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'powered_bit' | 'powered_shelf_type'>;
/**
 * States specific to SpruceSlab
 */
type SpruceSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to SpruceStairs
 */
type SpruceStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to SpruceStandingSign
 */
type SpruceStandingSignStates = Pick<BlockStateSuperset, 'ground_sign_direction'>;
/**
 * States specific to SpruceTrapdoor
 */
type SpruceTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to SpruceWallSign
 */
type SpruceWallSignStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to SpruceWood
 */
type SpruceWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StandingBanner
 */
type StandingBannerStates = Pick<BlockStateSuperset, 'ground_sign_direction'>;
/**
 * States specific to StandingSign
 */
type StandingSignStates = Pick<BlockStateSuperset, 'ground_sign_direction'>;
/**
 * States specific to StickyPiston
 */
type StickyPistonStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to StickyPistonArmCollision
 */
type StickyPistonArmCollisionStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to StoneBrickDoubleSlab
 */
type StoneBrickDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to StoneBrickSlab
 */
type StoneBrickSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to StoneBrickStairs
 */
type StoneBrickStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to StoneBrickWall
 */
type StoneBrickWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to StoneButton
 */
type StoneButtonStates = Pick<BlockStateSuperset, 'button_pressed_bit' | 'facing_direction'>;
/**
 * States specific to StonePressurePlate
 */
type StonePressurePlateStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to StoneStairs
 */
type StoneStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to StonecutterBlock
 */
type StonecutterBlockStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to StrippedAcaciaLog
 */
type StrippedAcaciaLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedAcaciaWood
 */
type StrippedAcaciaWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedBambooBlock
 */
type StrippedBambooBlockStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedBirchLog
 */
type StrippedBirchLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedBirchWood
 */
type StrippedBirchWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedCherryLog
 */
type StrippedCherryLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedCherryWood
 */
type StrippedCherryWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedCrimsonHyphae
 */
type StrippedCrimsonHyphaeStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedCrimsonStem
 */
type StrippedCrimsonStemStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedDarkOakLog
 */
type StrippedDarkOakLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedDarkOakWood
 */
type StrippedDarkOakWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedJungleLog
 */
type StrippedJungleLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedJungleWood
 */
type StrippedJungleWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedMangroveLog
 */
type StrippedMangroveLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedMangroveWood
 */
type StrippedMangroveWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedOakLog
 */
type StrippedOakLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedOakWood
 */
type StrippedOakWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedPaleOakLog
 */
type StrippedPaleOakLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedPaleOakWood
 */
type StrippedPaleOakWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedSpruceLog
 */
type StrippedSpruceLogStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedSpruceWood
 */
type StrippedSpruceWoodStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedWarpedHyphae
 */
type StrippedWarpedHyphaeStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StrippedWarpedStem
 */
type StrippedWarpedStemStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to StructureBlock
 */
type StructureBlockStates = Pick<BlockStateSuperset, 'structure_block_type'>;
/**
 * States specific to Sunflower
 */
type SunflowerStates = Pick<BlockStateSuperset, 'upper_block_bit'>;
/**
 * States specific to SuspiciousGravel
 */
type SuspiciousGravelStates = Pick<BlockStateSuperset, 'brushed_progress' | 'hanging'>;
/**
 * States specific to SuspiciousSand
 */
type SuspiciousSandStates = Pick<BlockStateSuperset, 'brushed_progress' | 'hanging'>;
/**
 * States specific to SweetBerryBush
 */
type SweetBerryBushStates = Pick<BlockStateSuperset, 'growth'>;
/**
 * States specific to TallGrass
 */
type TallGrassStates = Pick<BlockStateSuperset, 'upper_block_bit'>;
/**
 * States specific to Tnt
 */
type TntStates = Pick<BlockStateSuperset, 'explode_bit'>;
/**
 * States specific to Torch
 */
type TorchStates = Pick<BlockStateSuperset, 'torch_facing_direction'>;
/**
 * States specific to TorchflowerCrop
 */
type TorchflowerCropStates = Pick<BlockStateSuperset, 'growth'>;
/**
 * States specific to Trapdoor
 */
type TrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to TrappedChest
 */
type TrappedChestStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to TrialSpawner
 */
type TrialSpawnerStates = Pick<BlockStateSuperset, 'ominous' | 'trial_spawner_state'>;
/**
 * States specific to TripWire
 */
type TripWireStates = Pick<BlockStateSuperset, 'attached_bit' | 'disarmed_bit' | 'powered_bit' | 'suspended_bit'>;
/**
 * States specific to TripwireHook
 */
type TripwireHookStates = Pick<BlockStateSuperset, 'attached_bit' | 'direction' | 'powered_bit'>;
/**
 * States specific to TubeCoralFan
 */
type TubeCoralFanStates = Pick<BlockStateSuperset, 'coral_fan_direction'>;
/**
 * States specific to TubeCoralWallFan
 */
type TubeCoralWallFanStates = Pick<BlockStateSuperset, 'coral_direction'>;
/**
 * States specific to TuffBrickDoubleSlab
 */
type TuffBrickDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to TuffBrickSlab
 */
type TuffBrickSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to TuffBrickStairs
 */
type TuffBrickStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to TuffBrickWall
 */
type TuffBrickWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to TuffDoubleSlab
 */
type TuffDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to TuffSlab
 */
type TuffSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to TuffStairs
 */
type TuffStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to TuffWall
 */
type TuffWallStates = Pick<BlockStateSuperset, 'wall_connection_type_east' | 'wall_connection_type_north' | 'wall_connection_type_south' | 'wall_connection_type_west' | 'wall_post_bit'>;
/**
 * States specific to TurtleEgg
 */
type TurtleEggStates = Pick<BlockStateSuperset, 'cracked_state' | 'turtle_egg_count'>;
/**
 * States specific to TwistingVines
 */
type TwistingVinesStates = Pick<BlockStateSuperset, 'twisting_vines_age'>;
/**
 * States specific to UnderwaterTnt
 */
type UnderwaterTntStates = Pick<BlockStateSuperset, 'explode_bit'>;
/**
 * States specific to UnderwaterTorch
 */
type UnderwaterTorchStates = Pick<BlockStateSuperset, 'torch_facing_direction'>;
/**
 * States specific to UnlitRedstoneTorch
 */
type UnlitRedstoneTorchStates = Pick<BlockStateSuperset, 'torch_facing_direction'>;
/**
 * States specific to UnpoweredComparator
 */
type UnpoweredComparatorStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'output_lit_bit' | 'output_subtract_bit'>;
/**
 * States specific to UnpoweredRepeater
 */
type UnpoweredRepeaterStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'repeater_delay'>;
/**
 * States specific to Vault
 */
type VaultStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'ominous' | 'vault_state'>;
/**
 * States specific to VerdantFroglight
 */
type VerdantFroglightStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to Vine
 */
type VineStates = Pick<BlockStateSuperset, 'vine_direction_bits'>;
/**
 * States specific to WallBanner
 */
type WallBannerStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to WallSign
 */
type WallSignStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to WarpedButton
 */
type WarpedButtonStates = Pick<BlockStateSuperset, 'button_pressed_bit' | 'facing_direction'>;
/**
 * States specific to WarpedDoor
 */
type WarpedDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to WarpedDoubleSlab
 */
type WarpedDoubleSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to WarpedFenceGate
 */
type WarpedFenceGateStates = Pick<BlockStateSuperset, 'in_wall_bit' | 'minecraft:cardinal_direction' | 'open_bit'>;
/**
 * States specific to WarpedHangingSign
 */
type WarpedHangingSignStates = Pick<BlockStateSuperset, 'attached_bit' | 'facing_direction' | 'ground_sign_direction' | 'hanging'>;
/**
 * States specific to WarpedHyphae
 */
type WarpedHyphaeStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to WarpedPressurePlate
 */
type WarpedPressurePlateStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to WarpedShelf
 */
type WarpedShelfStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction' | 'powered_bit' | 'powered_shelf_type'>;
/**
 * States specific to WarpedSlab
 */
type WarpedSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to WarpedStairs
 */
type WarpedStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to WarpedStandingSign
 */
type WarpedStandingSignStates = Pick<BlockStateSuperset, 'ground_sign_direction'>;
/**
 * States specific to WarpedStem
 */
type WarpedStemStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to WarpedTrapdoor
 */
type WarpedTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to WarpedWallSign
 */
type WarpedWallSignStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to Water
 */
type WaterStates = Pick<BlockStateSuperset, 'liquid_depth'>;
/**
 * States specific to WaxedCopperBulb
 */
type WaxedCopperBulbStates = Pick<BlockStateSuperset, 'lit' | 'powered_bit'>;
/**
 * States specific to WaxedCopperChain
 */
type WaxedCopperChainStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to WaxedCopperChest
 */
type WaxedCopperChestStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to WaxedCopperDoor
 */
type WaxedCopperDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to WaxedCopperGolemStatue
 */
type WaxedCopperGolemStatueStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to WaxedCopperLantern
 */
type WaxedCopperLanternStates = Pick<BlockStateSuperset, 'hanging'>;
/**
 * States specific to WaxedCopperTrapdoor
 */
type WaxedCopperTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to WaxedCutCopperSlab
 */
type WaxedCutCopperSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to WaxedCutCopperStairs
 */
type WaxedCutCopperStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to WaxedDoubleCutCopperSlab
 */
type WaxedDoubleCutCopperSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to WaxedExposedCopperBulb
 */
type WaxedExposedCopperBulbStates = Pick<BlockStateSuperset, 'lit' | 'powered_bit'>;
/**
 * States specific to WaxedExposedCopperChain
 */
type WaxedExposedCopperChainStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to WaxedExposedCopperChest
 */
type WaxedExposedCopperChestStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to WaxedExposedCopperDoor
 */
type WaxedExposedCopperDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to WaxedExposedCopperGolemStatue
 */
type WaxedExposedCopperGolemStatueStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to WaxedExposedCopperLantern
 */
type WaxedExposedCopperLanternStates = Pick<BlockStateSuperset, 'hanging'>;
/**
 * States specific to WaxedExposedCopperTrapdoor
 */
type WaxedExposedCopperTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to WaxedExposedCutCopperSlab
 */
type WaxedExposedCutCopperSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to WaxedExposedCutCopperStairs
 */
type WaxedExposedCutCopperStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to WaxedExposedDoubleCutCopperSlab
 */
type WaxedExposedDoubleCutCopperSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to WaxedExposedLightningRod
 */
type WaxedExposedLightningRodStates = Pick<BlockStateSuperset, 'facing_direction' | 'powered_bit'>;
/**
 * States specific to WaxedLightningRod
 */
type WaxedLightningRodStates = Pick<BlockStateSuperset, 'facing_direction' | 'powered_bit'>;
/**
 * States specific to WaxedOxidizedCopperBulb
 */
type WaxedOxidizedCopperBulbStates = Pick<BlockStateSuperset, 'lit' | 'powered_bit'>;
/**
 * States specific to WaxedOxidizedCopperChain
 */
type WaxedOxidizedCopperChainStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to WaxedOxidizedCopperChest
 */
type WaxedOxidizedCopperChestStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to WaxedOxidizedCopperDoor
 */
type WaxedOxidizedCopperDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to WaxedOxidizedCopperGolemStatue
 */
type WaxedOxidizedCopperGolemStatueStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to WaxedOxidizedCopperLantern
 */
type WaxedOxidizedCopperLanternStates = Pick<BlockStateSuperset, 'hanging'>;
/**
 * States specific to WaxedOxidizedCopperTrapdoor
 */
type WaxedOxidizedCopperTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to WaxedOxidizedCutCopperSlab
 */
type WaxedOxidizedCutCopperSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to WaxedOxidizedCutCopperStairs
 */
type WaxedOxidizedCutCopperStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to WaxedOxidizedDoubleCutCopperSlab
 */
type WaxedOxidizedDoubleCutCopperSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to WaxedOxidizedLightningRod
 */
type WaxedOxidizedLightningRodStates = Pick<BlockStateSuperset, 'facing_direction' | 'powered_bit'>;
/**
 * States specific to WaxedWeatheredCopperBulb
 */
type WaxedWeatheredCopperBulbStates = Pick<BlockStateSuperset, 'lit' | 'powered_bit'>;
/**
 * States specific to WaxedWeatheredCopperChain
 */
type WaxedWeatheredCopperChainStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to WaxedWeatheredCopperChest
 */
type WaxedWeatheredCopperChestStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to WaxedWeatheredCopperDoor
 */
type WaxedWeatheredCopperDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to WaxedWeatheredCopperGolemStatue
 */
type WaxedWeatheredCopperGolemStatueStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to WaxedWeatheredCopperLantern
 */
type WaxedWeatheredCopperLanternStates = Pick<BlockStateSuperset, 'hanging'>;
/**
 * States specific to WaxedWeatheredCopperTrapdoor
 */
type WaxedWeatheredCopperTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to WaxedWeatheredCutCopperSlab
 */
type WaxedWeatheredCutCopperSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to WaxedWeatheredCutCopperStairs
 */
type WaxedWeatheredCutCopperStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to WaxedWeatheredDoubleCutCopperSlab
 */
type WaxedWeatheredDoubleCutCopperSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to WaxedWeatheredLightningRod
 */
type WaxedWeatheredLightningRodStates = Pick<BlockStateSuperset, 'facing_direction' | 'powered_bit'>;
/**
 * States specific to WeatheredCopperBulb
 */
type WeatheredCopperBulbStates = Pick<BlockStateSuperset, 'lit' | 'powered_bit'>;
/**
 * States specific to WeatheredCopperChain
 */
type WeatheredCopperChainStates = Pick<BlockStateSuperset, 'pillar_axis'>;
/**
 * States specific to WeatheredCopperChest
 */
type WeatheredCopperChestStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to WeatheredCopperDoor
 */
type WeatheredCopperDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to WeatheredCopperGolemStatue
 */
type WeatheredCopperGolemStatueStates = Pick<BlockStateSuperset, 'minecraft:cardinal_direction'>;
/**
 * States specific to WeatheredCopperLantern
 */
type WeatheredCopperLanternStates = Pick<BlockStateSuperset, 'hanging'>;
/**
 * States specific to WeatheredCopperTrapdoor
 */
type WeatheredCopperTrapdoorStates = Pick<BlockStateSuperset, 'direction' | 'open_bit' | 'upside_down_bit'>;
/**
 * States specific to WeatheredCutCopperSlab
 */
type WeatheredCutCopperSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to WeatheredCutCopperStairs
 */
type WeatheredCutCopperStairsStates = Pick<BlockStateSuperset, 'upside_down_bit' | 'weirdo_direction'>;
/**
 * States specific to WeatheredDoubleCutCopperSlab
 */
type WeatheredDoubleCutCopperSlabStates = Pick<BlockStateSuperset, 'minecraft:vertical_half'>;
/**
 * States specific to WeatheredLightningRod
 */
type WeatheredLightningRodStates = Pick<BlockStateSuperset, 'facing_direction' | 'powered_bit'>;
/**
 * States specific to WeepingVines
 */
type WeepingVinesStates = Pick<BlockStateSuperset, 'weeping_vines_age'>;
/**
 * States specific to Wheat
 */
type WheatStates = Pick<BlockStateSuperset, 'growth'>;
/**
 * States specific to WhiteCandle
 */
type WhiteCandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to WhiteCandleCake
 */
type WhiteCandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to WhiteGlazedTerracotta
 */
type WhiteGlazedTerracottaStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to Wildflowers
 */
type WildflowersStates = Pick<BlockStateSuperset, 'growth' | 'minecraft:cardinal_direction'>;
/**
 * States specific to WitherSkeletonSkull
 */
type WitherSkeletonSkullStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to WoodenButton
 */
type WoodenButtonStates = Pick<BlockStateSuperset, 'button_pressed_bit' | 'facing_direction'>;
/**
 * States specific to WoodenDoor
 */
type WoodenDoorStates = Pick<BlockStateSuperset, 'door_hinge_bit' | 'minecraft:cardinal_direction' | 'open_bit' | 'upper_block_bit'>;
/**
 * States specific to WoodenPressurePlate
 */
type WoodenPressurePlateStates = Pick<BlockStateSuperset, 'redstone_signal'>;
/**
 * States specific to YellowCandle
 */
type YellowCandleStates = Pick<BlockStateSuperset, 'candles' | 'lit'>;
/**
 * States specific to YellowCandleCake
 */
type YellowCandleCakeStates = Pick<BlockStateSuperset, 'lit'>;
/**
 * States specific to YellowGlazedTerracotta
 */
type YellowGlazedTerracottaStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * States specific to ZombieHead
 */
type ZombieHeadStates = Pick<BlockStateSuperset, 'facing_direction'>;
/**
 * Union of all types for Block states
 */
type BlockStates = AcaciaButtonStates | AcaciaDoorStates | AcaciaDoubleSlabStates | AcaciaFenceGateStates | AcaciaHangingSignStates | AcaciaLeavesStates | AcaciaLogStates | AcaciaPressurePlateStates | AcaciaSaplingStates | AcaciaShelfStates | AcaciaSlabStates | AcaciaStairsStates | AcaciaStandingSignStates | AcaciaTrapdoorStates | AcaciaWallSignStates | AcaciaWoodStates | ActivatorRailStates | AmethystClusterStates | AndesiteDoubleSlabStates | AndesiteSlabStates | AndesiteStairsStates | AndesiteWallStates | AnvilStates | AzaleaLeavesStates | AzaleaLeavesFloweredStates | BambooStates | BambooBlockStates | BambooButtonStates | BambooDoorStates | BambooDoubleSlabStates | BambooFenceGateStates | BambooHangingSignStates | BambooMosaicDoubleSlabStates | BambooMosaicSlabStates | BambooMosaicStairsStates | BambooPressurePlateStates | BambooSaplingStates | BambooShelfStates | BambooSlabStates | BambooStairsStates | BambooStandingSignStates | BambooTrapdoorStates | BambooWallSignStates | BarrelStates | BasaltStates | BedStates | BedrockStates | BeeNestStates | BeehiveStates | BeetrootStates | BellStates | BigDripleafStates | BirchButtonStates | BirchDoorStates | BirchDoubleSlabStates | BirchFenceGateStates | BirchHangingSignStates | BirchLeavesStates | BirchLogStates | BirchPressurePlateStates | BirchSaplingStates | BirchShelfStates | BirchSlabStates | BirchStairsStates | BirchStandingSignStates | BirchTrapdoorStates | BirchWallSignStates | BirchWoodStates | BlackCandleStates | BlackCandleCakeStates | BlackGlazedTerracottaStates | BlackstoneDoubleSlabStates | BlackstoneSlabStates | BlackstoneStairsStates | BlackstoneWallStates | BlastFurnaceStates | BlueCandleStates | BlueCandleCakeStates | BlueGlazedTerracottaStates | BoneBlockStates | BorderBlockStates | BrainCoralFanStates | BrainCoralWallFanStates | BrewingStandStates | BrickDoubleSlabStates | BrickSlabStates | BrickStairsStates | BrickWallStates | BrownCandleStates | BrownCandleCakeStates | BrownGlazedTerracottaStates | BrownMushroomBlockStates | BubbleColumnStates | BubbleCoralFanStates | BubbleCoralWallFanStates | CactusStates | CakeStates | CalibratedSculkSensorStates | CampfireStates | CandleStates | CandleCakeStates | CarrotsStates | CarvedPumpkinStates | CauldronStates | CaveVinesStates | CaveVinesBodyWithBerriesStates | CaveVinesHeadWithBerriesStates | ChainCommandBlockStates | CherryButtonStates | CherryDoorStates | CherryDoubleSlabStates | CherryFenceGateStates | CherryHangingSignStates | CherryLeavesStates | CherryLogStates | CherryPressurePlateStates | CherrySaplingStates | CherryShelfStates | CherrySlabStates | CherryStairsStates | CherryStandingSignStates | CherryTrapdoorStates | CherryWallSignStates | CherryWoodStates | ChestStates | ChippedAnvilStates | ChiseledBookshelfStates | ChiseledQuartzBlockStates | ChorusFlowerStates | CobbledDeepslateDoubleSlabStates | CobbledDeepslateSlabStates | CobbledDeepslateStairsStates | CobbledDeepslateWallStates | CobblestoneDoubleSlabStates | CobblestoneSlabStates | CobblestoneWallStates | CocoaStates | ColoredTorchBlueStates | ColoredTorchGreenStates | ColoredTorchPurpleStates | ColoredTorchRedStates | CommandBlockStates | ComposterStates | CompoundCreatorStates | CopperBulbStates | CopperChainStates | CopperChestStates | CopperDoorStates | CopperGolemStatueStates | CopperLanternStates | CopperTorchStates | CopperTrapdoorStates | CrafterStates | CreakingHeartStates | CreeperHeadStates | CrimsonButtonStates | CrimsonDoorStates | CrimsonDoubleSlabStates | CrimsonFenceGateStates | CrimsonHangingSignStates | CrimsonHyphaeStates | CrimsonPressurePlateStates | CrimsonShelfStates | CrimsonSlabStates | CrimsonStairsStates | CrimsonStandingSignStates | CrimsonStemStates | CrimsonTrapdoorStates | CrimsonWallSignStates | CutCopperSlabStates | CutCopperStairsStates | CutRedSandstoneDoubleSlabStates | CutRedSandstoneSlabStates | CutSandstoneDoubleSlabStates | CutSandstoneSlabStates | CyanCandleStates | CyanCandleCakeStates | CyanGlazedTerracottaStates | DamagedAnvilStates | DarkOakButtonStates | DarkOakDoorStates | DarkOakDoubleSlabStates | DarkOakFenceGateStates | DarkOakHangingSignStates | DarkOakLeavesStates | DarkOakLogStates | DarkOakPressurePlateStates | DarkOakSaplingStates | DarkOakShelfStates | DarkOakSlabStates | DarkOakStairsStates | DarkOakTrapdoorStates | DarkOakWoodStates | DarkPrismarineDoubleSlabStates | DarkPrismarineSlabStates | DarkPrismarineStairsStates | DarkoakStandingSignStates | DarkoakWallSignStates | DaylightDetectorStates | DaylightDetectorInvertedStates | DeadBrainCoralFanStates | DeadBrainCoralWallFanStates | DeadBubbleCoralFanStates | DeadBubbleCoralWallFanStates | DeadFireCoralFanStates | DeadFireCoralWallFanStates | DeadHornCoralFanStates | DeadHornCoralWallFanStates | DeadTubeCoralFanStates | DeadTubeCoralWallFanStates | DecoratedPotStates | DeepslateStates | DeepslateBrickDoubleSlabStates | DeepslateBrickSlabStates | DeepslateBrickStairsStates | DeepslateBrickWallStates | DeepslateTileDoubleSlabStates | DeepslateTileSlabStates | DeepslateTileStairsStates | DeepslateTileWallStates | DetectorRailStates | DioriteDoubleSlabStates | DioriteSlabStates | DioriteStairsStates | DioriteWallStates | DispenserStates | DoubleCutCopperSlabStates | DragonHeadStates | DriedGhastStates | DropperStates | ElementConstructorStates | EndBrickStairsStates | EndPortalFrameStates | EndRodStates | EndStoneBrickDoubleSlabStates | EndStoneBrickSlabStates | EndStoneBrickWallStates | EnderChestStates | ExposedCopperBulbStates | ExposedCopperChainStates | ExposedCopperChestStates | ExposedCopperDoorStates | ExposedCopperGolemStatueStates | ExposedCopperLanternStates | ExposedCopperTrapdoorStates | ExposedCutCopperSlabStates | ExposedCutCopperStairsStates | ExposedDoubleCutCopperSlabStates | ExposedLightningRodStates | FarmlandStates | FenceGateStates | FireStates | FireCoralFanStates | FireCoralWallFanStates | FlowerPotStates | FlowingLavaStates | FlowingWaterStates | FrameStates | FrostedIceStates | FurnaceStates | GlowFrameStates | GlowLichenStates | GoldenRailStates | GraniteDoubleSlabStates | GraniteSlabStates | GraniteStairsStates | GraniteWallStates | GrayCandleStates | GrayCandleCakeStates | GrayGlazedTerracottaStates | GreenCandleStates | GreenCandleCakeStates | GreenGlazedTerracottaStates | GrindstoneStates | HayBlockStates | HeavyWeightedPressurePlateStates | HopperStates | HornCoralFanStates | HornCoralWallFanStates | InfestedDeepslateStates | IronChainStates | IronDoorStates | IronTrapdoorStates | JigsawStates | JungleButtonStates | JungleDoorStates | JungleDoubleSlabStates | JungleFenceGateStates | JungleHangingSignStates | JungleLeavesStates | JungleLogStates | JunglePressurePlateStates | JungleSaplingStates | JungleShelfStates | JungleSlabStates | JungleStairsStates | JungleStandingSignStates | JungleTrapdoorStates | JungleWallSignStates | JungleWoodStates | KelpStates | LabTableStates | LadderStates | LanternStates | LargeAmethystBudStates | LargeFernStates | LavaStates | LeafLitterStates | LecternStates | LeverStates | LightBlueCandleStates | LightBlueCandleCakeStates | LightBlueGlazedTerracottaStates | LightGrayCandleStates | LightGrayCandleCakeStates | LightWeightedPressurePlateStates | LightningRodStates | LilacStates | LimeCandleStates | LimeCandleCakeStates | LimeGlazedTerracottaStates | LitBlastFurnaceStates | LitFurnaceStates | LitPumpkinStates | LitSmokerStates | LoomStates | MagentaCandleStates | MagentaCandleCakeStates | MagentaGlazedTerracottaStates | MangroveButtonStates | MangroveDoorStates | MangroveDoubleSlabStates | MangroveFenceGateStates | MangroveHangingSignStates | MangroveLeavesStates | MangroveLogStates | MangrovePressurePlateStates | MangrovePropaguleStates | MangroveShelfStates | MangroveSlabStates | MangroveStairsStates | MangroveStandingSignStates | MangroveTrapdoorStates | MangroveWallSignStates | MangroveWoodStates | MaterialReducerStates | MediumAmethystBudStates | MelonStemStates | MossyCobblestoneDoubleSlabStates | MossyCobblestoneSlabStates | MossyCobblestoneStairsStates | MossyCobblestoneWallStates | MossyStoneBrickDoubleSlabStates | MossyStoneBrickSlabStates | MossyStoneBrickStairsStates | MossyStoneBrickWallStates | MudBrickDoubleSlabStates | MudBrickSlabStates | MudBrickStairsStates | MudBrickWallStates | MuddyMangroveRootsStates | MushroomStemStates | NetherBrickDoubleSlabStates | NetherBrickSlabStates | NetherBrickStairsStates | NetherBrickWallStates | NetherWartStates | NormalStoneDoubleSlabStates | NormalStoneSlabStates | NormalStoneStairsStates | OakDoubleSlabStates | OakHangingSignStates | OakLeavesStates | OakLogStates | OakSaplingStates | OakShelfStates | OakSlabStates | OakStairsStates | OakWoodStates | ObserverStates | OchreFroglightStates | OrangeCandleStates | OrangeCandleCakeStates | OrangeGlazedTerracottaStates | OxidizedCopperBulbStates | OxidizedCopperChainStates | OxidizedCopperChestStates | OxidizedCopperDoorStates | OxidizedCopperGolemStatueStates | OxidizedCopperLanternStates | OxidizedCopperTrapdoorStates | OxidizedCutCopperSlabStates | OxidizedCutCopperStairsStates | OxidizedDoubleCutCopperSlabStates | OxidizedLightningRodStates | PaleHangingMossStates | PaleMossCarpetStates | PaleOakButtonStates | PaleOakDoorStates | PaleOakDoubleSlabStates | PaleOakFenceGateStates | PaleOakHangingSignStates | PaleOakLeavesStates | PaleOakLogStates | PaleOakPressurePlateStates | PaleOakSaplingStates | PaleOakShelfStates | PaleOakSlabStates | PaleOakStairsStates | PaleOakStandingSignStates | PaleOakTrapdoorStates | PaleOakWallSignStates | PaleOakWoodStates | PearlescentFroglightStates | PeonyStates | PetrifiedOakDoubleSlabStates | PetrifiedOakSlabStates | PiglinHeadStates | PinkCandleStates | PinkCandleCakeStates | PinkGlazedTerracottaStates | PinkPetalsStates | PistonStates | PistonArmCollisionStates | PitcherCropStates | PitcherPlantStates | PlayerHeadStates | PointedDripstoneStates | PolishedAndesiteDoubleSlabStates | PolishedAndesiteSlabStates | PolishedAndesiteStairsStates | PolishedBasaltStates | PolishedBlackstoneBrickDoubleSlabStates | PolishedBlackstoneBrickSlabStates | PolishedBlackstoneBrickStairsStates | PolishedBlackstoneBrickWallStates | PolishedBlackstoneButtonStates | PolishedBlackstoneDoubleSlabStates | PolishedBlackstonePressurePlateStates | PolishedBlackstoneSlabStates | PolishedBlackstoneStairsStates | PolishedBlackstoneWallStates | PolishedDeepslateDoubleSlabStates | PolishedDeepslateSlabStates | PolishedDeepslateStairsStates | PolishedDeepslateWallStates | PolishedDioriteDoubleSlabStates | PolishedDioriteSlabStates | PolishedDioriteStairsStates | PolishedGraniteDoubleSlabStates | PolishedGraniteSlabStates | PolishedGraniteStairsStates | PolishedTuffDoubleSlabStates | PolishedTuffSlabStates | PolishedTuffStairsStates | PolishedTuffWallStates | PortalStates | PotatoesStates | PoweredComparatorStates | PoweredRepeaterStates | PrismarineBrickDoubleSlabStates | PrismarineBrickSlabStates | PrismarineBricksStairsStates | PrismarineDoubleSlabStates | PrismarineSlabStates | PrismarineStairsStates | PrismarineWallStates | PumpkinStates | PumpkinStemStates | PurpleCandleStates | PurpleCandleCakeStates | PurpleGlazedTerracottaStates | PurpurBlockStates | PurpurDoubleSlabStates | PurpurPillarStates | PurpurSlabStates | PurpurStairsStates | QuartzBlockStates | QuartzDoubleSlabStates | QuartzPillarStates | QuartzSlabStates | QuartzStairsStates | RailStates | RedCandleStates | RedCandleCakeStates | RedGlazedTerracottaStates | RedMushroomBlockStates | RedNetherBrickDoubleSlabStates | RedNetherBrickSlabStates | RedNetherBrickStairsStates | RedNetherBrickWallStates | RedSandstoneDoubleSlabStates | RedSandstoneSlabStates | RedSandstoneStairsStates | RedSandstoneWallStates | RedstoneTorchStates | RedstoneWireStates | ReedsStates | RepeatingCommandBlockStates | ResinBrickDoubleSlabStates | ResinBrickSlabStates | ResinBrickStairsStates | ResinBrickWallStates | ResinClumpStates | RespawnAnchorStates | RoseBushStates | SandstoneDoubleSlabStates | SandstoneSlabStates | SandstoneStairsStates | SandstoneWallStates | ScaffoldingStates | SculkCatalystStates | SculkSensorStates | SculkShriekerStates | SculkVeinStates | SeaPickleStates | SeagrassStates | SilverGlazedTerracottaStates | SkeletonSkullStates | SmallAmethystBudStates | SmallDripleafBlockStates | SmokerStates | SmoothQuartzStates | SmoothQuartzDoubleSlabStates | SmoothQuartzSlabStates | SmoothQuartzStairsStates | SmoothRedSandstoneDoubleSlabStates | SmoothRedSandstoneSlabStates | SmoothRedSandstoneStairsStates | SmoothSandstoneDoubleSlabStates | SmoothSandstoneSlabStates | SmoothSandstoneStairsStates | SmoothStoneDoubleSlabStates | SmoothStoneSlabStates | SnifferEggStates | SnowLayerStates | SoulCampfireStates | SoulFireStates | SoulLanternStates | SoulTorchStates | SpruceButtonStates | SpruceDoorStates | SpruceDoubleSlabStates | SpruceFenceGateStates | SpruceHangingSignStates | SpruceLeavesStates | SpruceLogStates | SprucePressurePlateStates | SpruceSaplingStates | SpruceShelfStates | SpruceSlabStates | SpruceStairsStates | SpruceStandingSignStates | SpruceTrapdoorStates | SpruceWallSignStates | SpruceWoodStates | StandingBannerStates | StandingSignStates | StickyPistonStates | StickyPistonArmCollisionStates | StoneBrickDoubleSlabStates | StoneBrickSlabStates | StoneBrickStairsStates | StoneBrickWallStates | StoneButtonStates | StonePressurePlateStates | StoneStairsStates | StonecutterBlockStates | StrippedAcaciaLogStates | StrippedAcaciaWoodStates | StrippedBambooBlockStates | StrippedBirchLogStates | StrippedBirchWoodStates | StrippedCherryLogStates | StrippedCherryWoodStates | StrippedCrimsonHyphaeStates | StrippedCrimsonStemStates | StrippedDarkOakLogStates | StrippedDarkOakWoodStates | StrippedJungleLogStates | StrippedJungleWoodStates | StrippedMangroveLogStates | StrippedMangroveWoodStates | StrippedOakLogStates | StrippedOakWoodStates | StrippedPaleOakLogStates | StrippedPaleOakWoodStates | StrippedSpruceLogStates | StrippedSpruceWoodStates | StrippedWarpedHyphaeStates | StrippedWarpedStemStates | StructureBlockStates | SunflowerStates | SuspiciousGravelStates | SuspiciousSandStates | SweetBerryBushStates | TallGrassStates | TntStates | TorchStates | TorchflowerCropStates | TrapdoorStates | TrappedChestStates | TrialSpawnerStates | TripWireStates | TripwireHookStates | TubeCoralFanStates | TubeCoralWallFanStates | TuffBrickDoubleSlabStates | TuffBrickSlabStates | TuffBrickStairsStates | TuffBrickWallStates | TuffDoubleSlabStates | TuffSlabStates | TuffStairsStates | TuffWallStates | TurtleEggStates | TwistingVinesStates | UnderwaterTntStates | UnderwaterTorchStates | UnlitRedstoneTorchStates | UnpoweredComparatorStates | UnpoweredRepeaterStates | VaultStates | VerdantFroglightStates | VineStates | WallBannerStates | WallSignStates | WarpedButtonStates | WarpedDoorStates | WarpedDoubleSlabStates | WarpedFenceGateStates | WarpedHangingSignStates | WarpedHyphaeStates | WarpedPressurePlateStates | WarpedShelfStates | WarpedSlabStates | WarpedStairsStates | WarpedStandingSignStates | WarpedStemStates | WarpedTrapdoorStates | WarpedWallSignStates | WaterStates | WaxedCopperBulbStates | WaxedCopperChainStates | WaxedCopperChestStates | WaxedCopperDoorStates | WaxedCopperGolemStatueStates | WaxedCopperLanternStates | WaxedCopperTrapdoorStates | WaxedCutCopperSlabStates | WaxedCutCopperStairsStates | WaxedDoubleCutCopperSlabStates | WaxedExposedCopperBulbStates | WaxedExposedCopperChainStates | WaxedExposedCopperChestStates | WaxedExposedCopperDoorStates | WaxedExposedCopperGolemStatueStates | WaxedExposedCopperLanternStates | WaxedExposedCopperTrapdoorStates | WaxedExposedCutCopperSlabStates | WaxedExposedCutCopperStairsStates | WaxedExposedDoubleCutCopperSlabStates | WaxedExposedLightningRodStates | WaxedLightningRodStates | WaxedOxidizedCopperBulbStates | WaxedOxidizedCopperChainStates | WaxedOxidizedCopperChestStates | WaxedOxidizedCopperDoorStates | WaxedOxidizedCopperGolemStatueStates | WaxedOxidizedCopperLanternStates | WaxedOxidizedCopperTrapdoorStates | WaxedOxidizedCutCopperSlabStates | WaxedOxidizedCutCopperStairsStates | WaxedOxidizedDoubleCutCopperSlabStates | WaxedOxidizedLightningRodStates | WaxedWeatheredCopperBulbStates | WaxedWeatheredCopperChainStates | WaxedWeatheredCopperChestStates | WaxedWeatheredCopperDoorStates | WaxedWeatheredCopperGolemStatueStates | WaxedWeatheredCopperLanternStates | WaxedWeatheredCopperTrapdoorStates | WaxedWeatheredCutCopperSlabStates | WaxedWeatheredCutCopperStairsStates | WaxedWeatheredDoubleCutCopperSlabStates | WaxedWeatheredLightningRodStates | WeatheredCopperBulbStates | WeatheredCopperChainStates | WeatheredCopperChestStates | WeatheredCopperDoorStates | WeatheredCopperGolemStatueStates | WeatheredCopperLanternStates | WeatheredCopperTrapdoorStates | WeatheredCutCopperSlabStates | WeatheredCutCopperStairsStates | WeatheredDoubleCutCopperSlabStates | WeatheredLightningRodStates | WeepingVinesStates | WheatStates | WhiteCandleStates | WhiteCandleCakeStates | WhiteGlazedTerracottaStates | WildflowersStates | WitherSkeletonSkullStates | WoodenButtonStates | WoodenDoorStates | WoodenPressurePlateStates | YellowCandleStates | YellowCandleCakeStates | YellowGlazedTerracottaStates | ZombieHeadStates;
/**
 * Mapping of each Block name to it's states
 */
type BlockStateMapping = {
    acacia_button: AcaciaButtonStates;
    'minecraft:acacia_button': AcaciaButtonStates;
    acacia_door: AcaciaDoorStates;
    'minecraft:acacia_door': AcaciaDoorStates;
    acacia_double_slab: AcaciaDoubleSlabStates;
    'minecraft:acacia_double_slab': AcaciaDoubleSlabStates;
    acacia_fence_gate: AcaciaFenceGateStates;
    'minecraft:acacia_fence_gate': AcaciaFenceGateStates;
    acacia_hanging_sign: AcaciaHangingSignStates;
    'minecraft:acacia_hanging_sign': AcaciaHangingSignStates;
    acacia_leaves: AcaciaLeavesStates;
    'minecraft:acacia_leaves': AcaciaLeavesStates;
    acacia_log: AcaciaLogStates;
    'minecraft:acacia_log': AcaciaLogStates;
    acacia_pressure_plate: AcaciaPressurePlateStates;
    'minecraft:acacia_pressure_plate': AcaciaPressurePlateStates;
    acacia_sapling: AcaciaSaplingStates;
    'minecraft:acacia_sapling': AcaciaSaplingStates;
    acacia_shelf: AcaciaShelfStates;
    'minecraft:acacia_shelf': AcaciaShelfStates;
    acacia_slab: AcaciaSlabStates;
    'minecraft:acacia_slab': AcaciaSlabStates;
    acacia_stairs: AcaciaStairsStates;
    'minecraft:acacia_stairs': AcaciaStairsStates;
    acacia_standing_sign: AcaciaStandingSignStates;
    'minecraft:acacia_standing_sign': AcaciaStandingSignStates;
    acacia_trapdoor: AcaciaTrapdoorStates;
    'minecraft:acacia_trapdoor': AcaciaTrapdoorStates;
    acacia_wall_sign: AcaciaWallSignStates;
    'minecraft:acacia_wall_sign': AcaciaWallSignStates;
    acacia_wood: AcaciaWoodStates;
    'minecraft:acacia_wood': AcaciaWoodStates;
    activator_rail: ActivatorRailStates;
    'minecraft:activator_rail': ActivatorRailStates;
    amethyst_cluster: AmethystClusterStates;
    'minecraft:amethyst_cluster': AmethystClusterStates;
    andesite_double_slab: AndesiteDoubleSlabStates;
    'minecraft:andesite_double_slab': AndesiteDoubleSlabStates;
    andesite_slab: AndesiteSlabStates;
    'minecraft:andesite_slab': AndesiteSlabStates;
    andesite_stairs: AndesiteStairsStates;
    'minecraft:andesite_stairs': AndesiteStairsStates;
    andesite_wall: AndesiteWallStates;
    'minecraft:andesite_wall': AndesiteWallStates;
    anvil: AnvilStates;
    'minecraft:anvil': AnvilStates;
    azalea_leaves: AzaleaLeavesStates;
    'minecraft:azalea_leaves': AzaleaLeavesStates;
    azalea_leaves_flowered: AzaleaLeavesFloweredStates;
    'minecraft:azalea_leaves_flowered': AzaleaLeavesFloweredStates;
    bamboo: BambooStates;
    'minecraft:bamboo': BambooStates;
    bamboo_block: BambooBlockStates;
    'minecraft:bamboo_block': BambooBlockStates;
    bamboo_button: BambooButtonStates;
    'minecraft:bamboo_button': BambooButtonStates;
    bamboo_door: BambooDoorStates;
    'minecraft:bamboo_door': BambooDoorStates;
    bamboo_double_slab: BambooDoubleSlabStates;
    'minecraft:bamboo_double_slab': BambooDoubleSlabStates;
    bamboo_fence_gate: BambooFenceGateStates;
    'minecraft:bamboo_fence_gate': BambooFenceGateStates;
    bamboo_hanging_sign: BambooHangingSignStates;
    'minecraft:bamboo_hanging_sign': BambooHangingSignStates;
    bamboo_mosaic_double_slab: BambooMosaicDoubleSlabStates;
    'minecraft:bamboo_mosaic_double_slab': BambooMosaicDoubleSlabStates;
    bamboo_mosaic_slab: BambooMosaicSlabStates;
    'minecraft:bamboo_mosaic_slab': BambooMosaicSlabStates;
    bamboo_mosaic_stairs: BambooMosaicStairsStates;
    'minecraft:bamboo_mosaic_stairs': BambooMosaicStairsStates;
    bamboo_pressure_plate: BambooPressurePlateStates;
    'minecraft:bamboo_pressure_plate': BambooPressurePlateStates;
    bamboo_sapling: BambooSaplingStates;
    'minecraft:bamboo_sapling': BambooSaplingStates;
    bamboo_shelf: BambooShelfStates;
    'minecraft:bamboo_shelf': BambooShelfStates;
    bamboo_slab: BambooSlabStates;
    'minecraft:bamboo_slab': BambooSlabStates;
    bamboo_stairs: BambooStairsStates;
    'minecraft:bamboo_stairs': BambooStairsStates;
    bamboo_standing_sign: BambooStandingSignStates;
    'minecraft:bamboo_standing_sign': BambooStandingSignStates;
    bamboo_trapdoor: BambooTrapdoorStates;
    'minecraft:bamboo_trapdoor': BambooTrapdoorStates;
    bamboo_wall_sign: BambooWallSignStates;
    'minecraft:bamboo_wall_sign': BambooWallSignStates;
    barrel: BarrelStates;
    'minecraft:barrel': BarrelStates;
    basalt: BasaltStates;
    'minecraft:basalt': BasaltStates;
    bed: BedStates;
    'minecraft:bed': BedStates;
    bedrock: BedrockStates;
    'minecraft:bedrock': BedrockStates;
    bee_nest: BeeNestStates;
    'minecraft:bee_nest': BeeNestStates;
    beehive: BeehiveStates;
    'minecraft:beehive': BeehiveStates;
    beetroot: BeetrootStates;
    'minecraft:beetroot': BeetrootStates;
    bell: BellStates;
    'minecraft:bell': BellStates;
    big_dripleaf: BigDripleafStates;
    'minecraft:big_dripleaf': BigDripleafStates;
    birch_button: BirchButtonStates;
    'minecraft:birch_button': BirchButtonStates;
    birch_door: BirchDoorStates;
    'minecraft:birch_door': BirchDoorStates;
    birch_double_slab: BirchDoubleSlabStates;
    'minecraft:birch_double_slab': BirchDoubleSlabStates;
    birch_fence_gate: BirchFenceGateStates;
    'minecraft:birch_fence_gate': BirchFenceGateStates;
    birch_hanging_sign: BirchHangingSignStates;
    'minecraft:birch_hanging_sign': BirchHangingSignStates;
    birch_leaves: BirchLeavesStates;
    'minecraft:birch_leaves': BirchLeavesStates;
    birch_log: BirchLogStates;
    'minecraft:birch_log': BirchLogStates;
    birch_pressure_plate: BirchPressurePlateStates;
    'minecraft:birch_pressure_plate': BirchPressurePlateStates;
    birch_sapling: BirchSaplingStates;
    'minecraft:birch_sapling': BirchSaplingStates;
    birch_shelf: BirchShelfStates;
    'minecraft:birch_shelf': BirchShelfStates;
    birch_slab: BirchSlabStates;
    'minecraft:birch_slab': BirchSlabStates;
    birch_stairs: BirchStairsStates;
    'minecraft:birch_stairs': BirchStairsStates;
    birch_standing_sign: BirchStandingSignStates;
    'minecraft:birch_standing_sign': BirchStandingSignStates;
    birch_trapdoor: BirchTrapdoorStates;
    'minecraft:birch_trapdoor': BirchTrapdoorStates;
    birch_wall_sign: BirchWallSignStates;
    'minecraft:birch_wall_sign': BirchWallSignStates;
    birch_wood: BirchWoodStates;
    'minecraft:birch_wood': BirchWoodStates;
    black_candle: BlackCandleStates;
    'minecraft:black_candle': BlackCandleStates;
    black_candle_cake: BlackCandleCakeStates;
    'minecraft:black_candle_cake': BlackCandleCakeStates;
    black_glazed_terracotta: BlackGlazedTerracottaStates;
    'minecraft:black_glazed_terracotta': BlackGlazedTerracottaStates;
    blackstone_double_slab: BlackstoneDoubleSlabStates;
    'minecraft:blackstone_double_slab': BlackstoneDoubleSlabStates;
    blackstone_slab: BlackstoneSlabStates;
    'minecraft:blackstone_slab': BlackstoneSlabStates;
    blackstone_stairs: BlackstoneStairsStates;
    'minecraft:blackstone_stairs': BlackstoneStairsStates;
    blackstone_wall: BlackstoneWallStates;
    'minecraft:blackstone_wall': BlackstoneWallStates;
    blast_furnace: BlastFurnaceStates;
    'minecraft:blast_furnace': BlastFurnaceStates;
    blue_candle: BlueCandleStates;
    'minecraft:blue_candle': BlueCandleStates;
    blue_candle_cake: BlueCandleCakeStates;
    'minecraft:blue_candle_cake': BlueCandleCakeStates;
    blue_glazed_terracotta: BlueGlazedTerracottaStates;
    'minecraft:blue_glazed_terracotta': BlueGlazedTerracottaStates;
    bone_block: BoneBlockStates;
    'minecraft:bone_block': BoneBlockStates;
    border_block: BorderBlockStates;
    'minecraft:border_block': BorderBlockStates;
    brain_coral_fan: BrainCoralFanStates;
    'minecraft:brain_coral_fan': BrainCoralFanStates;
    brain_coral_wall_fan: BrainCoralWallFanStates;
    'minecraft:brain_coral_wall_fan': BrainCoralWallFanStates;
    brewing_stand: BrewingStandStates;
    'minecraft:brewing_stand': BrewingStandStates;
    brick_double_slab: BrickDoubleSlabStates;
    'minecraft:brick_double_slab': BrickDoubleSlabStates;
    brick_slab: BrickSlabStates;
    'minecraft:brick_slab': BrickSlabStates;
    brick_stairs: BrickStairsStates;
    'minecraft:brick_stairs': BrickStairsStates;
    brick_wall: BrickWallStates;
    'minecraft:brick_wall': BrickWallStates;
    brown_candle: BrownCandleStates;
    'minecraft:brown_candle': BrownCandleStates;
    brown_candle_cake: BrownCandleCakeStates;
    'minecraft:brown_candle_cake': BrownCandleCakeStates;
    brown_glazed_terracotta: BrownGlazedTerracottaStates;
    'minecraft:brown_glazed_terracotta': BrownGlazedTerracottaStates;
    brown_mushroom_block: BrownMushroomBlockStates;
    'minecraft:brown_mushroom_block': BrownMushroomBlockStates;
    bubble_column: BubbleColumnStates;
    'minecraft:bubble_column': BubbleColumnStates;
    bubble_coral_fan: BubbleCoralFanStates;
    'minecraft:bubble_coral_fan': BubbleCoralFanStates;
    bubble_coral_wall_fan: BubbleCoralWallFanStates;
    'minecraft:bubble_coral_wall_fan': BubbleCoralWallFanStates;
    cactus: CactusStates;
    'minecraft:cactus': CactusStates;
    cake: CakeStates;
    'minecraft:cake': CakeStates;
    calibrated_sculk_sensor: CalibratedSculkSensorStates;
    'minecraft:calibrated_sculk_sensor': CalibratedSculkSensorStates;
    campfire: CampfireStates;
    'minecraft:campfire': CampfireStates;
    candle: CandleStates;
    'minecraft:candle': CandleStates;
    candle_cake: CandleCakeStates;
    'minecraft:candle_cake': CandleCakeStates;
    carrots: CarrotsStates;
    'minecraft:carrots': CarrotsStates;
    carved_pumpkin: CarvedPumpkinStates;
    'minecraft:carved_pumpkin': CarvedPumpkinStates;
    cauldron: CauldronStates;
    'minecraft:cauldron': CauldronStates;
    cave_vines: CaveVinesStates;
    'minecraft:cave_vines': CaveVinesStates;
    cave_vines_body_with_berries: CaveVinesBodyWithBerriesStates;
    'minecraft:cave_vines_body_with_berries': CaveVinesBodyWithBerriesStates;
    cave_vines_head_with_berries: CaveVinesHeadWithBerriesStates;
    'minecraft:cave_vines_head_with_berries': CaveVinesHeadWithBerriesStates;
    chain_command_block: ChainCommandBlockStates;
    'minecraft:chain_command_block': ChainCommandBlockStates;
    cherry_button: CherryButtonStates;
    'minecraft:cherry_button': CherryButtonStates;
    cherry_door: CherryDoorStates;
    'minecraft:cherry_door': CherryDoorStates;
    cherry_double_slab: CherryDoubleSlabStates;
    'minecraft:cherry_double_slab': CherryDoubleSlabStates;
    cherry_fence_gate: CherryFenceGateStates;
    'minecraft:cherry_fence_gate': CherryFenceGateStates;
    cherry_hanging_sign: CherryHangingSignStates;
    'minecraft:cherry_hanging_sign': CherryHangingSignStates;
    cherry_leaves: CherryLeavesStates;
    'minecraft:cherry_leaves': CherryLeavesStates;
    cherry_log: CherryLogStates;
    'minecraft:cherry_log': CherryLogStates;
    cherry_pressure_plate: CherryPressurePlateStates;
    'minecraft:cherry_pressure_plate': CherryPressurePlateStates;
    cherry_sapling: CherrySaplingStates;
    'minecraft:cherry_sapling': CherrySaplingStates;
    cherry_shelf: CherryShelfStates;
    'minecraft:cherry_shelf': CherryShelfStates;
    cherry_slab: CherrySlabStates;
    'minecraft:cherry_slab': CherrySlabStates;
    cherry_stairs: CherryStairsStates;
    'minecraft:cherry_stairs': CherryStairsStates;
    cherry_standing_sign: CherryStandingSignStates;
    'minecraft:cherry_standing_sign': CherryStandingSignStates;
    cherry_trapdoor: CherryTrapdoorStates;
    'minecraft:cherry_trapdoor': CherryTrapdoorStates;
    cherry_wall_sign: CherryWallSignStates;
    'minecraft:cherry_wall_sign': CherryWallSignStates;
    cherry_wood: CherryWoodStates;
    'minecraft:cherry_wood': CherryWoodStates;
    chest: ChestStates;
    'minecraft:chest': ChestStates;
    chipped_anvil: ChippedAnvilStates;
    'minecraft:chipped_anvil': ChippedAnvilStates;
    chiseled_bookshelf: ChiseledBookshelfStates;
    'minecraft:chiseled_bookshelf': ChiseledBookshelfStates;
    chiseled_quartz_block: ChiseledQuartzBlockStates;
    'minecraft:chiseled_quartz_block': ChiseledQuartzBlockStates;
    chorus_flower: ChorusFlowerStates;
    'minecraft:chorus_flower': ChorusFlowerStates;
    cobbled_deepslate_double_slab: CobbledDeepslateDoubleSlabStates;
    'minecraft:cobbled_deepslate_double_slab': CobbledDeepslateDoubleSlabStates;
    cobbled_deepslate_slab: CobbledDeepslateSlabStates;
    'minecraft:cobbled_deepslate_slab': CobbledDeepslateSlabStates;
    cobbled_deepslate_stairs: CobbledDeepslateStairsStates;
    'minecraft:cobbled_deepslate_stairs': CobbledDeepslateStairsStates;
    cobbled_deepslate_wall: CobbledDeepslateWallStates;
    'minecraft:cobbled_deepslate_wall': CobbledDeepslateWallStates;
    cobblestone_double_slab: CobblestoneDoubleSlabStates;
    'minecraft:cobblestone_double_slab': CobblestoneDoubleSlabStates;
    cobblestone_slab: CobblestoneSlabStates;
    'minecraft:cobblestone_slab': CobblestoneSlabStates;
    cobblestone_wall: CobblestoneWallStates;
    'minecraft:cobblestone_wall': CobblestoneWallStates;
    cocoa: CocoaStates;
    'minecraft:cocoa': CocoaStates;
    colored_torch_blue: ColoredTorchBlueStates;
    'minecraft:colored_torch_blue': ColoredTorchBlueStates;
    colored_torch_green: ColoredTorchGreenStates;
    'minecraft:colored_torch_green': ColoredTorchGreenStates;
    colored_torch_purple: ColoredTorchPurpleStates;
    'minecraft:colored_torch_purple': ColoredTorchPurpleStates;
    colored_torch_red: ColoredTorchRedStates;
    'minecraft:colored_torch_red': ColoredTorchRedStates;
    command_block: CommandBlockStates;
    'minecraft:command_block': CommandBlockStates;
    composter: ComposterStates;
    'minecraft:composter': ComposterStates;
    compound_creator: CompoundCreatorStates;
    'minecraft:compound_creator': CompoundCreatorStates;
    copper_bulb: CopperBulbStates;
    'minecraft:copper_bulb': CopperBulbStates;
    copper_chain: CopperChainStates;
    'minecraft:copper_chain': CopperChainStates;
    copper_chest: CopperChestStates;
    'minecraft:copper_chest': CopperChestStates;
    copper_door: CopperDoorStates;
    'minecraft:copper_door': CopperDoorStates;
    copper_golem_statue: CopperGolemStatueStates;
    'minecraft:copper_golem_statue': CopperGolemStatueStates;
    copper_lantern: CopperLanternStates;
    'minecraft:copper_lantern': CopperLanternStates;
    copper_torch: CopperTorchStates;
    'minecraft:copper_torch': CopperTorchStates;
    copper_trapdoor: CopperTrapdoorStates;
    'minecraft:copper_trapdoor': CopperTrapdoorStates;
    crafter: CrafterStates;
    'minecraft:crafter': CrafterStates;
    creaking_heart: CreakingHeartStates;
    'minecraft:creaking_heart': CreakingHeartStates;
    creeper_head: CreeperHeadStates;
    'minecraft:creeper_head': CreeperHeadStates;
    crimson_button: CrimsonButtonStates;
    'minecraft:crimson_button': CrimsonButtonStates;
    crimson_door: CrimsonDoorStates;
    'minecraft:crimson_door': CrimsonDoorStates;
    crimson_double_slab: CrimsonDoubleSlabStates;
    'minecraft:crimson_double_slab': CrimsonDoubleSlabStates;
    crimson_fence_gate: CrimsonFenceGateStates;
    'minecraft:crimson_fence_gate': CrimsonFenceGateStates;
    crimson_hanging_sign: CrimsonHangingSignStates;
    'minecraft:crimson_hanging_sign': CrimsonHangingSignStates;
    crimson_hyphae: CrimsonHyphaeStates;
    'minecraft:crimson_hyphae': CrimsonHyphaeStates;
    crimson_pressure_plate: CrimsonPressurePlateStates;
    'minecraft:crimson_pressure_plate': CrimsonPressurePlateStates;
    crimson_shelf: CrimsonShelfStates;
    'minecraft:crimson_shelf': CrimsonShelfStates;
    crimson_slab: CrimsonSlabStates;
    'minecraft:crimson_slab': CrimsonSlabStates;
    crimson_stairs: CrimsonStairsStates;
    'minecraft:crimson_stairs': CrimsonStairsStates;
    crimson_standing_sign: CrimsonStandingSignStates;
    'minecraft:crimson_standing_sign': CrimsonStandingSignStates;
    crimson_stem: CrimsonStemStates;
    'minecraft:crimson_stem': CrimsonStemStates;
    crimson_trapdoor: CrimsonTrapdoorStates;
    'minecraft:crimson_trapdoor': CrimsonTrapdoorStates;
    crimson_wall_sign: CrimsonWallSignStates;
    'minecraft:crimson_wall_sign': CrimsonWallSignStates;
    cut_copper_slab: CutCopperSlabStates;
    'minecraft:cut_copper_slab': CutCopperSlabStates;
    cut_copper_stairs: CutCopperStairsStates;
    'minecraft:cut_copper_stairs': CutCopperStairsStates;
    cut_red_sandstone_double_slab: CutRedSandstoneDoubleSlabStates;
    'minecraft:cut_red_sandstone_double_slab': CutRedSandstoneDoubleSlabStates;
    cut_red_sandstone_slab: CutRedSandstoneSlabStates;
    'minecraft:cut_red_sandstone_slab': CutRedSandstoneSlabStates;
    cut_sandstone_double_slab: CutSandstoneDoubleSlabStates;
    'minecraft:cut_sandstone_double_slab': CutSandstoneDoubleSlabStates;
    cut_sandstone_slab: CutSandstoneSlabStates;
    'minecraft:cut_sandstone_slab': CutSandstoneSlabStates;
    cyan_candle: CyanCandleStates;
    'minecraft:cyan_candle': CyanCandleStates;
    cyan_candle_cake: CyanCandleCakeStates;
    'minecraft:cyan_candle_cake': CyanCandleCakeStates;
    cyan_glazed_terracotta: CyanGlazedTerracottaStates;
    'minecraft:cyan_glazed_terracotta': CyanGlazedTerracottaStates;
    damaged_anvil: DamagedAnvilStates;
    'minecraft:damaged_anvil': DamagedAnvilStates;
    dark_oak_button: DarkOakButtonStates;
    'minecraft:dark_oak_button': DarkOakButtonStates;
    dark_oak_door: DarkOakDoorStates;
    'minecraft:dark_oak_door': DarkOakDoorStates;
    dark_oak_double_slab: DarkOakDoubleSlabStates;
    'minecraft:dark_oak_double_slab': DarkOakDoubleSlabStates;
    dark_oak_fence_gate: DarkOakFenceGateStates;
    'minecraft:dark_oak_fence_gate': DarkOakFenceGateStates;
    dark_oak_hanging_sign: DarkOakHangingSignStates;
    'minecraft:dark_oak_hanging_sign': DarkOakHangingSignStates;
    dark_oak_leaves: DarkOakLeavesStates;
    'minecraft:dark_oak_leaves': DarkOakLeavesStates;
    dark_oak_log: DarkOakLogStates;
    'minecraft:dark_oak_log': DarkOakLogStates;
    dark_oak_pressure_plate: DarkOakPressurePlateStates;
    'minecraft:dark_oak_pressure_plate': DarkOakPressurePlateStates;
    dark_oak_sapling: DarkOakSaplingStates;
    'minecraft:dark_oak_sapling': DarkOakSaplingStates;
    dark_oak_shelf: DarkOakShelfStates;
    'minecraft:dark_oak_shelf': DarkOakShelfStates;
    dark_oak_slab: DarkOakSlabStates;
    'minecraft:dark_oak_slab': DarkOakSlabStates;
    dark_oak_stairs: DarkOakStairsStates;
    'minecraft:dark_oak_stairs': DarkOakStairsStates;
    dark_oak_trapdoor: DarkOakTrapdoorStates;
    'minecraft:dark_oak_trapdoor': DarkOakTrapdoorStates;
    dark_oak_wood: DarkOakWoodStates;
    'minecraft:dark_oak_wood': DarkOakWoodStates;
    dark_prismarine_double_slab: DarkPrismarineDoubleSlabStates;
    'minecraft:dark_prismarine_double_slab': DarkPrismarineDoubleSlabStates;
    dark_prismarine_slab: DarkPrismarineSlabStates;
    'minecraft:dark_prismarine_slab': DarkPrismarineSlabStates;
    dark_prismarine_stairs: DarkPrismarineStairsStates;
    'minecraft:dark_prismarine_stairs': DarkPrismarineStairsStates;
    darkoak_standing_sign: DarkoakStandingSignStates;
    'minecraft:darkoak_standing_sign': DarkoakStandingSignStates;
    darkoak_wall_sign: DarkoakWallSignStates;
    'minecraft:darkoak_wall_sign': DarkoakWallSignStates;
    daylight_detector: DaylightDetectorStates;
    'minecraft:daylight_detector': DaylightDetectorStates;
    daylight_detector_inverted: DaylightDetectorInvertedStates;
    'minecraft:daylight_detector_inverted': DaylightDetectorInvertedStates;
    dead_brain_coral_fan: DeadBrainCoralFanStates;
    'minecraft:dead_brain_coral_fan': DeadBrainCoralFanStates;
    dead_brain_coral_wall_fan: DeadBrainCoralWallFanStates;
    'minecraft:dead_brain_coral_wall_fan': DeadBrainCoralWallFanStates;
    dead_bubble_coral_fan: DeadBubbleCoralFanStates;
    'minecraft:dead_bubble_coral_fan': DeadBubbleCoralFanStates;
    dead_bubble_coral_wall_fan: DeadBubbleCoralWallFanStates;
    'minecraft:dead_bubble_coral_wall_fan': DeadBubbleCoralWallFanStates;
    dead_fire_coral_fan: DeadFireCoralFanStates;
    'minecraft:dead_fire_coral_fan': DeadFireCoralFanStates;
    dead_fire_coral_wall_fan: DeadFireCoralWallFanStates;
    'minecraft:dead_fire_coral_wall_fan': DeadFireCoralWallFanStates;
    dead_horn_coral_fan: DeadHornCoralFanStates;
    'minecraft:dead_horn_coral_fan': DeadHornCoralFanStates;
    dead_horn_coral_wall_fan: DeadHornCoralWallFanStates;
    'minecraft:dead_horn_coral_wall_fan': DeadHornCoralWallFanStates;
    dead_tube_coral_fan: DeadTubeCoralFanStates;
    'minecraft:dead_tube_coral_fan': DeadTubeCoralFanStates;
    dead_tube_coral_wall_fan: DeadTubeCoralWallFanStates;
    'minecraft:dead_tube_coral_wall_fan': DeadTubeCoralWallFanStates;
    decorated_pot: DecoratedPotStates;
    'minecraft:decorated_pot': DecoratedPotStates;
    deepslate: DeepslateStates;
    'minecraft:deepslate': DeepslateStates;
    deepslate_brick_double_slab: DeepslateBrickDoubleSlabStates;
    'minecraft:deepslate_brick_double_slab': DeepslateBrickDoubleSlabStates;
    deepslate_brick_slab: DeepslateBrickSlabStates;
    'minecraft:deepslate_brick_slab': DeepslateBrickSlabStates;
    deepslate_brick_stairs: DeepslateBrickStairsStates;
    'minecraft:deepslate_brick_stairs': DeepslateBrickStairsStates;
    deepslate_brick_wall: DeepslateBrickWallStates;
    'minecraft:deepslate_brick_wall': DeepslateBrickWallStates;
    deepslate_tile_double_slab: DeepslateTileDoubleSlabStates;
    'minecraft:deepslate_tile_double_slab': DeepslateTileDoubleSlabStates;
    deepslate_tile_slab: DeepslateTileSlabStates;
    'minecraft:deepslate_tile_slab': DeepslateTileSlabStates;
    deepslate_tile_stairs: DeepslateTileStairsStates;
    'minecraft:deepslate_tile_stairs': DeepslateTileStairsStates;
    deepslate_tile_wall: DeepslateTileWallStates;
    'minecraft:deepslate_tile_wall': DeepslateTileWallStates;
    detector_rail: DetectorRailStates;
    'minecraft:detector_rail': DetectorRailStates;
    diorite_double_slab: DioriteDoubleSlabStates;
    'minecraft:diorite_double_slab': DioriteDoubleSlabStates;
    diorite_slab: DioriteSlabStates;
    'minecraft:diorite_slab': DioriteSlabStates;
    diorite_stairs: DioriteStairsStates;
    'minecraft:diorite_stairs': DioriteStairsStates;
    diorite_wall: DioriteWallStates;
    'minecraft:diorite_wall': DioriteWallStates;
    dispenser: DispenserStates;
    'minecraft:dispenser': DispenserStates;
    double_cut_copper_slab: DoubleCutCopperSlabStates;
    'minecraft:double_cut_copper_slab': DoubleCutCopperSlabStates;
    dragon_head: DragonHeadStates;
    'minecraft:dragon_head': DragonHeadStates;
    dried_ghast: DriedGhastStates;
    'minecraft:dried_ghast': DriedGhastStates;
    dropper: DropperStates;
    'minecraft:dropper': DropperStates;
    element_constructor: ElementConstructorStates;
    'minecraft:element_constructor': ElementConstructorStates;
    end_brick_stairs: EndBrickStairsStates;
    'minecraft:end_brick_stairs': EndBrickStairsStates;
    end_portal_frame: EndPortalFrameStates;
    'minecraft:end_portal_frame': EndPortalFrameStates;
    end_rod: EndRodStates;
    'minecraft:end_rod': EndRodStates;
    end_stone_brick_double_slab: EndStoneBrickDoubleSlabStates;
    'minecraft:end_stone_brick_double_slab': EndStoneBrickDoubleSlabStates;
    end_stone_brick_slab: EndStoneBrickSlabStates;
    'minecraft:end_stone_brick_slab': EndStoneBrickSlabStates;
    end_stone_brick_wall: EndStoneBrickWallStates;
    'minecraft:end_stone_brick_wall': EndStoneBrickWallStates;
    ender_chest: EnderChestStates;
    'minecraft:ender_chest': EnderChestStates;
    exposed_copper_bulb: ExposedCopperBulbStates;
    'minecraft:exposed_copper_bulb': ExposedCopperBulbStates;
    exposed_copper_chain: ExposedCopperChainStates;
    'minecraft:exposed_copper_chain': ExposedCopperChainStates;
    exposed_copper_chest: ExposedCopperChestStates;
    'minecraft:exposed_copper_chest': ExposedCopperChestStates;
    exposed_copper_door: ExposedCopperDoorStates;
    'minecraft:exposed_copper_door': ExposedCopperDoorStates;
    exposed_copper_golem_statue: ExposedCopperGolemStatueStates;
    'minecraft:exposed_copper_golem_statue': ExposedCopperGolemStatueStates;
    exposed_copper_lantern: ExposedCopperLanternStates;
    'minecraft:exposed_copper_lantern': ExposedCopperLanternStates;
    exposed_copper_trapdoor: ExposedCopperTrapdoorStates;
    'minecraft:exposed_copper_trapdoor': ExposedCopperTrapdoorStates;
    exposed_cut_copper_slab: ExposedCutCopperSlabStates;
    'minecraft:exposed_cut_copper_slab': ExposedCutCopperSlabStates;
    exposed_cut_copper_stairs: ExposedCutCopperStairsStates;
    'minecraft:exposed_cut_copper_stairs': ExposedCutCopperStairsStates;
    exposed_double_cut_copper_slab: ExposedDoubleCutCopperSlabStates;
    'minecraft:exposed_double_cut_copper_slab': ExposedDoubleCutCopperSlabStates;
    exposed_lightning_rod: ExposedLightningRodStates;
    'minecraft:exposed_lightning_rod': ExposedLightningRodStates;
    farmland: FarmlandStates;
    'minecraft:farmland': FarmlandStates;
    fence_gate: FenceGateStates;
    'minecraft:fence_gate': FenceGateStates;
    fire: FireStates;
    'minecraft:fire': FireStates;
    fire_coral_fan: FireCoralFanStates;
    'minecraft:fire_coral_fan': FireCoralFanStates;
    fire_coral_wall_fan: FireCoralWallFanStates;
    'minecraft:fire_coral_wall_fan': FireCoralWallFanStates;
    flower_pot: FlowerPotStates;
    'minecraft:flower_pot': FlowerPotStates;
    flowing_lava: FlowingLavaStates;
    'minecraft:flowing_lava': FlowingLavaStates;
    flowing_water: FlowingWaterStates;
    'minecraft:flowing_water': FlowingWaterStates;
    frame: FrameStates;
    'minecraft:frame': FrameStates;
    frosted_ice: FrostedIceStates;
    'minecraft:frosted_ice': FrostedIceStates;
    furnace: FurnaceStates;
    'minecraft:furnace': FurnaceStates;
    glow_frame: GlowFrameStates;
    'minecraft:glow_frame': GlowFrameStates;
    glow_lichen: GlowLichenStates;
    'minecraft:glow_lichen': GlowLichenStates;
    golden_rail: GoldenRailStates;
    'minecraft:golden_rail': GoldenRailStates;
    granite_double_slab: GraniteDoubleSlabStates;
    'minecraft:granite_double_slab': GraniteDoubleSlabStates;
    granite_slab: GraniteSlabStates;
    'minecraft:granite_slab': GraniteSlabStates;
    granite_stairs: GraniteStairsStates;
    'minecraft:granite_stairs': GraniteStairsStates;
    granite_wall: GraniteWallStates;
    'minecraft:granite_wall': GraniteWallStates;
    gray_candle: GrayCandleStates;
    'minecraft:gray_candle': GrayCandleStates;
    gray_candle_cake: GrayCandleCakeStates;
    'minecraft:gray_candle_cake': GrayCandleCakeStates;
    gray_glazed_terracotta: GrayGlazedTerracottaStates;
    'minecraft:gray_glazed_terracotta': GrayGlazedTerracottaStates;
    green_candle: GreenCandleStates;
    'minecraft:green_candle': GreenCandleStates;
    green_candle_cake: GreenCandleCakeStates;
    'minecraft:green_candle_cake': GreenCandleCakeStates;
    green_glazed_terracotta: GreenGlazedTerracottaStates;
    'minecraft:green_glazed_terracotta': GreenGlazedTerracottaStates;
    grindstone: GrindstoneStates;
    'minecraft:grindstone': GrindstoneStates;
    hay_block: HayBlockStates;
    'minecraft:hay_block': HayBlockStates;
    heavy_weighted_pressure_plate: HeavyWeightedPressurePlateStates;
    'minecraft:heavy_weighted_pressure_plate': HeavyWeightedPressurePlateStates;
    hopper: HopperStates;
    'minecraft:hopper': HopperStates;
    horn_coral_fan: HornCoralFanStates;
    'minecraft:horn_coral_fan': HornCoralFanStates;
    horn_coral_wall_fan: HornCoralWallFanStates;
    'minecraft:horn_coral_wall_fan': HornCoralWallFanStates;
    infested_deepslate: InfestedDeepslateStates;
    'minecraft:infested_deepslate': InfestedDeepslateStates;
    iron_chain: IronChainStates;
    'minecraft:iron_chain': IronChainStates;
    iron_door: IronDoorStates;
    'minecraft:iron_door': IronDoorStates;
    iron_trapdoor: IronTrapdoorStates;
    'minecraft:iron_trapdoor': IronTrapdoorStates;
    jigsaw: JigsawStates;
    'minecraft:jigsaw': JigsawStates;
    jungle_button: JungleButtonStates;
    'minecraft:jungle_button': JungleButtonStates;
    jungle_door: JungleDoorStates;
    'minecraft:jungle_door': JungleDoorStates;
    jungle_double_slab: JungleDoubleSlabStates;
    'minecraft:jungle_double_slab': JungleDoubleSlabStates;
    jungle_fence_gate: JungleFenceGateStates;
    'minecraft:jungle_fence_gate': JungleFenceGateStates;
    jungle_hanging_sign: JungleHangingSignStates;
    'minecraft:jungle_hanging_sign': JungleHangingSignStates;
    jungle_leaves: JungleLeavesStates;
    'minecraft:jungle_leaves': JungleLeavesStates;
    jungle_log: JungleLogStates;
    'minecraft:jungle_log': JungleLogStates;
    jungle_pressure_plate: JunglePressurePlateStates;
    'minecraft:jungle_pressure_plate': JunglePressurePlateStates;
    jungle_sapling: JungleSaplingStates;
    'minecraft:jungle_sapling': JungleSaplingStates;
    jungle_shelf: JungleShelfStates;
    'minecraft:jungle_shelf': JungleShelfStates;
    jungle_slab: JungleSlabStates;
    'minecraft:jungle_slab': JungleSlabStates;
    jungle_stairs: JungleStairsStates;
    'minecraft:jungle_stairs': JungleStairsStates;
    jungle_standing_sign: JungleStandingSignStates;
    'minecraft:jungle_standing_sign': JungleStandingSignStates;
    jungle_trapdoor: JungleTrapdoorStates;
    'minecraft:jungle_trapdoor': JungleTrapdoorStates;
    jungle_wall_sign: JungleWallSignStates;
    'minecraft:jungle_wall_sign': JungleWallSignStates;
    jungle_wood: JungleWoodStates;
    'minecraft:jungle_wood': JungleWoodStates;
    kelp: KelpStates;
    'minecraft:kelp': KelpStates;
    lab_table: LabTableStates;
    'minecraft:lab_table': LabTableStates;
    ladder: LadderStates;
    'minecraft:ladder': LadderStates;
    lantern: LanternStates;
    'minecraft:lantern': LanternStates;
    large_amethyst_bud: LargeAmethystBudStates;
    'minecraft:large_amethyst_bud': LargeAmethystBudStates;
    large_fern: LargeFernStates;
    'minecraft:large_fern': LargeFernStates;
    lava: LavaStates;
    'minecraft:lava': LavaStates;
    leaf_litter: LeafLitterStates;
    'minecraft:leaf_litter': LeafLitterStates;
    lectern: LecternStates;
    'minecraft:lectern': LecternStates;
    lever: LeverStates;
    'minecraft:lever': LeverStates;
    light_blue_candle: LightBlueCandleStates;
    'minecraft:light_blue_candle': LightBlueCandleStates;
    light_blue_candle_cake: LightBlueCandleCakeStates;
    'minecraft:light_blue_candle_cake': LightBlueCandleCakeStates;
    light_blue_glazed_terracotta: LightBlueGlazedTerracottaStates;
    'minecraft:light_blue_glazed_terracotta': LightBlueGlazedTerracottaStates;
    light_gray_candle: LightGrayCandleStates;
    'minecraft:light_gray_candle': LightGrayCandleStates;
    light_gray_candle_cake: LightGrayCandleCakeStates;
    'minecraft:light_gray_candle_cake': LightGrayCandleCakeStates;
    light_weighted_pressure_plate: LightWeightedPressurePlateStates;
    'minecraft:light_weighted_pressure_plate': LightWeightedPressurePlateStates;
    lightning_rod: LightningRodStates;
    'minecraft:lightning_rod': LightningRodStates;
    lilac: LilacStates;
    'minecraft:lilac': LilacStates;
    lime_candle: LimeCandleStates;
    'minecraft:lime_candle': LimeCandleStates;
    lime_candle_cake: LimeCandleCakeStates;
    'minecraft:lime_candle_cake': LimeCandleCakeStates;
    lime_glazed_terracotta: LimeGlazedTerracottaStates;
    'minecraft:lime_glazed_terracotta': LimeGlazedTerracottaStates;
    lit_blast_furnace: LitBlastFurnaceStates;
    'minecraft:lit_blast_furnace': LitBlastFurnaceStates;
    lit_furnace: LitFurnaceStates;
    'minecraft:lit_furnace': LitFurnaceStates;
    lit_pumpkin: LitPumpkinStates;
    'minecraft:lit_pumpkin': LitPumpkinStates;
    lit_smoker: LitSmokerStates;
    'minecraft:lit_smoker': LitSmokerStates;
    loom: LoomStates;
    'minecraft:loom': LoomStates;
    magenta_candle: MagentaCandleStates;
    'minecraft:magenta_candle': MagentaCandleStates;
    magenta_candle_cake: MagentaCandleCakeStates;
    'minecraft:magenta_candle_cake': MagentaCandleCakeStates;
    magenta_glazed_terracotta: MagentaGlazedTerracottaStates;
    'minecraft:magenta_glazed_terracotta': MagentaGlazedTerracottaStates;
    mangrove_button: MangroveButtonStates;
    'minecraft:mangrove_button': MangroveButtonStates;
    mangrove_door: MangroveDoorStates;
    'minecraft:mangrove_door': MangroveDoorStates;
    mangrove_double_slab: MangroveDoubleSlabStates;
    'minecraft:mangrove_double_slab': MangroveDoubleSlabStates;
    mangrove_fence_gate: MangroveFenceGateStates;
    'minecraft:mangrove_fence_gate': MangroveFenceGateStates;
    mangrove_hanging_sign: MangroveHangingSignStates;
    'minecraft:mangrove_hanging_sign': MangroveHangingSignStates;
    mangrove_leaves: MangroveLeavesStates;
    'minecraft:mangrove_leaves': MangroveLeavesStates;
    mangrove_log: MangroveLogStates;
    'minecraft:mangrove_log': MangroveLogStates;
    mangrove_pressure_plate: MangrovePressurePlateStates;
    'minecraft:mangrove_pressure_plate': MangrovePressurePlateStates;
    mangrove_propagule: MangrovePropaguleStates;
    'minecraft:mangrove_propagule': MangrovePropaguleStates;
    mangrove_shelf: MangroveShelfStates;
    'minecraft:mangrove_shelf': MangroveShelfStates;
    mangrove_slab: MangroveSlabStates;
    'minecraft:mangrove_slab': MangroveSlabStates;
    mangrove_stairs: MangroveStairsStates;
    'minecraft:mangrove_stairs': MangroveStairsStates;
    mangrove_standing_sign: MangroveStandingSignStates;
    'minecraft:mangrove_standing_sign': MangroveStandingSignStates;
    mangrove_trapdoor: MangroveTrapdoorStates;
    'minecraft:mangrove_trapdoor': MangroveTrapdoorStates;
    mangrove_wall_sign: MangroveWallSignStates;
    'minecraft:mangrove_wall_sign': MangroveWallSignStates;
    mangrove_wood: MangroveWoodStates;
    'minecraft:mangrove_wood': MangroveWoodStates;
    material_reducer: MaterialReducerStates;
    'minecraft:material_reducer': MaterialReducerStates;
    medium_amethyst_bud: MediumAmethystBudStates;
    'minecraft:medium_amethyst_bud': MediumAmethystBudStates;
    melon_stem: MelonStemStates;
    'minecraft:melon_stem': MelonStemStates;
    mossy_cobblestone_double_slab: MossyCobblestoneDoubleSlabStates;
    'minecraft:mossy_cobblestone_double_slab': MossyCobblestoneDoubleSlabStates;
    mossy_cobblestone_slab: MossyCobblestoneSlabStates;
    'minecraft:mossy_cobblestone_slab': MossyCobblestoneSlabStates;
    mossy_cobblestone_stairs: MossyCobblestoneStairsStates;
    'minecraft:mossy_cobblestone_stairs': MossyCobblestoneStairsStates;
    mossy_cobblestone_wall: MossyCobblestoneWallStates;
    'minecraft:mossy_cobblestone_wall': MossyCobblestoneWallStates;
    mossy_stone_brick_double_slab: MossyStoneBrickDoubleSlabStates;
    'minecraft:mossy_stone_brick_double_slab': MossyStoneBrickDoubleSlabStates;
    mossy_stone_brick_slab: MossyStoneBrickSlabStates;
    'minecraft:mossy_stone_brick_slab': MossyStoneBrickSlabStates;
    mossy_stone_brick_stairs: MossyStoneBrickStairsStates;
    'minecraft:mossy_stone_brick_stairs': MossyStoneBrickStairsStates;
    mossy_stone_brick_wall: MossyStoneBrickWallStates;
    'minecraft:mossy_stone_brick_wall': MossyStoneBrickWallStates;
    mud_brick_double_slab: MudBrickDoubleSlabStates;
    'minecraft:mud_brick_double_slab': MudBrickDoubleSlabStates;
    mud_brick_slab: MudBrickSlabStates;
    'minecraft:mud_brick_slab': MudBrickSlabStates;
    mud_brick_stairs: MudBrickStairsStates;
    'minecraft:mud_brick_stairs': MudBrickStairsStates;
    mud_brick_wall: MudBrickWallStates;
    'minecraft:mud_brick_wall': MudBrickWallStates;
    muddy_mangrove_roots: MuddyMangroveRootsStates;
    'minecraft:muddy_mangrove_roots': MuddyMangroveRootsStates;
    mushroom_stem: MushroomStemStates;
    'minecraft:mushroom_stem': MushroomStemStates;
    nether_brick_double_slab: NetherBrickDoubleSlabStates;
    'minecraft:nether_brick_double_slab': NetherBrickDoubleSlabStates;
    nether_brick_slab: NetherBrickSlabStates;
    'minecraft:nether_brick_slab': NetherBrickSlabStates;
    nether_brick_stairs: NetherBrickStairsStates;
    'minecraft:nether_brick_stairs': NetherBrickStairsStates;
    nether_brick_wall: NetherBrickWallStates;
    'minecraft:nether_brick_wall': NetherBrickWallStates;
    nether_wart: NetherWartStates;
    'minecraft:nether_wart': NetherWartStates;
    normal_stone_double_slab: NormalStoneDoubleSlabStates;
    'minecraft:normal_stone_double_slab': NormalStoneDoubleSlabStates;
    normal_stone_slab: NormalStoneSlabStates;
    'minecraft:normal_stone_slab': NormalStoneSlabStates;
    normal_stone_stairs: NormalStoneStairsStates;
    'minecraft:normal_stone_stairs': NormalStoneStairsStates;
    oak_double_slab: OakDoubleSlabStates;
    'minecraft:oak_double_slab': OakDoubleSlabStates;
    oak_hanging_sign: OakHangingSignStates;
    'minecraft:oak_hanging_sign': OakHangingSignStates;
    oak_leaves: OakLeavesStates;
    'minecraft:oak_leaves': OakLeavesStates;
    oak_log: OakLogStates;
    'minecraft:oak_log': OakLogStates;
    oak_sapling: OakSaplingStates;
    'minecraft:oak_sapling': OakSaplingStates;
    oak_shelf: OakShelfStates;
    'minecraft:oak_shelf': OakShelfStates;
    oak_slab: OakSlabStates;
    'minecraft:oak_slab': OakSlabStates;
    oak_stairs: OakStairsStates;
    'minecraft:oak_stairs': OakStairsStates;
    oak_wood: OakWoodStates;
    'minecraft:oak_wood': OakWoodStates;
    observer: ObserverStates;
    'minecraft:observer': ObserverStates;
    ochre_froglight: OchreFroglightStates;
    'minecraft:ochre_froglight': OchreFroglightStates;
    orange_candle: OrangeCandleStates;
    'minecraft:orange_candle': OrangeCandleStates;
    orange_candle_cake: OrangeCandleCakeStates;
    'minecraft:orange_candle_cake': OrangeCandleCakeStates;
    orange_glazed_terracotta: OrangeGlazedTerracottaStates;
    'minecraft:orange_glazed_terracotta': OrangeGlazedTerracottaStates;
    oxidized_copper_bulb: OxidizedCopperBulbStates;
    'minecraft:oxidized_copper_bulb': OxidizedCopperBulbStates;
    oxidized_copper_chain: OxidizedCopperChainStates;
    'minecraft:oxidized_copper_chain': OxidizedCopperChainStates;
    oxidized_copper_chest: OxidizedCopperChestStates;
    'minecraft:oxidized_copper_chest': OxidizedCopperChestStates;
    oxidized_copper_door: OxidizedCopperDoorStates;
    'minecraft:oxidized_copper_door': OxidizedCopperDoorStates;
    oxidized_copper_golem_statue: OxidizedCopperGolemStatueStates;
    'minecraft:oxidized_copper_golem_statue': OxidizedCopperGolemStatueStates;
    oxidized_copper_lantern: OxidizedCopperLanternStates;
    'minecraft:oxidized_copper_lantern': OxidizedCopperLanternStates;
    oxidized_copper_trapdoor: OxidizedCopperTrapdoorStates;
    'minecraft:oxidized_copper_trapdoor': OxidizedCopperTrapdoorStates;
    oxidized_cut_copper_slab: OxidizedCutCopperSlabStates;
    'minecraft:oxidized_cut_copper_slab': OxidizedCutCopperSlabStates;
    oxidized_cut_copper_stairs: OxidizedCutCopperStairsStates;
    'minecraft:oxidized_cut_copper_stairs': OxidizedCutCopperStairsStates;
    oxidized_double_cut_copper_slab: OxidizedDoubleCutCopperSlabStates;
    'minecraft:oxidized_double_cut_copper_slab': OxidizedDoubleCutCopperSlabStates;
    oxidized_lightning_rod: OxidizedLightningRodStates;
    'minecraft:oxidized_lightning_rod': OxidizedLightningRodStates;
    pale_hanging_moss: PaleHangingMossStates;
    'minecraft:pale_hanging_moss': PaleHangingMossStates;
    pale_moss_carpet: PaleMossCarpetStates;
    'minecraft:pale_moss_carpet': PaleMossCarpetStates;
    pale_oak_button: PaleOakButtonStates;
    'minecraft:pale_oak_button': PaleOakButtonStates;
    pale_oak_door: PaleOakDoorStates;
    'minecraft:pale_oak_door': PaleOakDoorStates;
    pale_oak_double_slab: PaleOakDoubleSlabStates;
    'minecraft:pale_oak_double_slab': PaleOakDoubleSlabStates;
    pale_oak_fence_gate: PaleOakFenceGateStates;
    'minecraft:pale_oak_fence_gate': PaleOakFenceGateStates;
    pale_oak_hanging_sign: PaleOakHangingSignStates;
    'minecraft:pale_oak_hanging_sign': PaleOakHangingSignStates;
    pale_oak_leaves: PaleOakLeavesStates;
    'minecraft:pale_oak_leaves': PaleOakLeavesStates;
    pale_oak_log: PaleOakLogStates;
    'minecraft:pale_oak_log': PaleOakLogStates;
    pale_oak_pressure_plate: PaleOakPressurePlateStates;
    'minecraft:pale_oak_pressure_plate': PaleOakPressurePlateStates;
    pale_oak_sapling: PaleOakSaplingStates;
    'minecraft:pale_oak_sapling': PaleOakSaplingStates;
    pale_oak_shelf: PaleOakShelfStates;
    'minecraft:pale_oak_shelf': PaleOakShelfStates;
    pale_oak_slab: PaleOakSlabStates;
    'minecraft:pale_oak_slab': PaleOakSlabStates;
    pale_oak_stairs: PaleOakStairsStates;
    'minecraft:pale_oak_stairs': PaleOakStairsStates;
    pale_oak_standing_sign: PaleOakStandingSignStates;
    'minecraft:pale_oak_standing_sign': PaleOakStandingSignStates;
    pale_oak_trapdoor: PaleOakTrapdoorStates;
    'minecraft:pale_oak_trapdoor': PaleOakTrapdoorStates;
    pale_oak_wall_sign: PaleOakWallSignStates;
    'minecraft:pale_oak_wall_sign': PaleOakWallSignStates;
    pale_oak_wood: PaleOakWoodStates;
    'minecraft:pale_oak_wood': PaleOakWoodStates;
    pearlescent_froglight: PearlescentFroglightStates;
    'minecraft:pearlescent_froglight': PearlescentFroglightStates;
    peony: PeonyStates;
    'minecraft:peony': PeonyStates;
    petrified_oak_double_slab: PetrifiedOakDoubleSlabStates;
    'minecraft:petrified_oak_double_slab': PetrifiedOakDoubleSlabStates;
    petrified_oak_slab: PetrifiedOakSlabStates;
    'minecraft:petrified_oak_slab': PetrifiedOakSlabStates;
    piglin_head: PiglinHeadStates;
    'minecraft:piglin_head': PiglinHeadStates;
    pink_candle: PinkCandleStates;
    'minecraft:pink_candle': PinkCandleStates;
    pink_candle_cake: PinkCandleCakeStates;
    'minecraft:pink_candle_cake': PinkCandleCakeStates;
    pink_glazed_terracotta: PinkGlazedTerracottaStates;
    'minecraft:pink_glazed_terracotta': PinkGlazedTerracottaStates;
    pink_petals: PinkPetalsStates;
    'minecraft:pink_petals': PinkPetalsStates;
    piston: PistonStates;
    'minecraft:piston': PistonStates;
    piston_arm_collision: PistonArmCollisionStates;
    'minecraft:piston_arm_collision': PistonArmCollisionStates;
    pitcher_crop: PitcherCropStates;
    'minecraft:pitcher_crop': PitcherCropStates;
    pitcher_plant: PitcherPlantStates;
    'minecraft:pitcher_plant': PitcherPlantStates;
    player_head: PlayerHeadStates;
    'minecraft:player_head': PlayerHeadStates;
    pointed_dripstone: PointedDripstoneStates;
    'minecraft:pointed_dripstone': PointedDripstoneStates;
    polished_andesite_double_slab: PolishedAndesiteDoubleSlabStates;
    'minecraft:polished_andesite_double_slab': PolishedAndesiteDoubleSlabStates;
    polished_andesite_slab: PolishedAndesiteSlabStates;
    'minecraft:polished_andesite_slab': PolishedAndesiteSlabStates;
    polished_andesite_stairs: PolishedAndesiteStairsStates;
    'minecraft:polished_andesite_stairs': PolishedAndesiteStairsStates;
    polished_basalt: PolishedBasaltStates;
    'minecraft:polished_basalt': PolishedBasaltStates;
    polished_blackstone_brick_double_slab: PolishedBlackstoneBrickDoubleSlabStates;
    'minecraft:polished_blackstone_brick_double_slab': PolishedBlackstoneBrickDoubleSlabStates;
    polished_blackstone_brick_slab: PolishedBlackstoneBrickSlabStates;
    'minecraft:polished_blackstone_brick_slab': PolishedBlackstoneBrickSlabStates;
    polished_blackstone_brick_stairs: PolishedBlackstoneBrickStairsStates;
    'minecraft:polished_blackstone_brick_stairs': PolishedBlackstoneBrickStairsStates;
    polished_blackstone_brick_wall: PolishedBlackstoneBrickWallStates;
    'minecraft:polished_blackstone_brick_wall': PolishedBlackstoneBrickWallStates;
    polished_blackstone_button: PolishedBlackstoneButtonStates;
    'minecraft:polished_blackstone_button': PolishedBlackstoneButtonStates;
    polished_blackstone_double_slab: PolishedBlackstoneDoubleSlabStates;
    'minecraft:polished_blackstone_double_slab': PolishedBlackstoneDoubleSlabStates;
    polished_blackstone_pressure_plate: PolishedBlackstonePressurePlateStates;
    'minecraft:polished_blackstone_pressure_plate': PolishedBlackstonePressurePlateStates;
    polished_blackstone_slab: PolishedBlackstoneSlabStates;
    'minecraft:polished_blackstone_slab': PolishedBlackstoneSlabStates;
    polished_blackstone_stairs: PolishedBlackstoneStairsStates;
    'minecraft:polished_blackstone_stairs': PolishedBlackstoneStairsStates;
    polished_blackstone_wall: PolishedBlackstoneWallStates;
    'minecraft:polished_blackstone_wall': PolishedBlackstoneWallStates;
    polished_deepslate_double_slab: PolishedDeepslateDoubleSlabStates;
    'minecraft:polished_deepslate_double_slab': PolishedDeepslateDoubleSlabStates;
    polished_deepslate_slab: PolishedDeepslateSlabStates;
    'minecraft:polished_deepslate_slab': PolishedDeepslateSlabStates;
    polished_deepslate_stairs: PolishedDeepslateStairsStates;
    'minecraft:polished_deepslate_stairs': PolishedDeepslateStairsStates;
    polished_deepslate_wall: PolishedDeepslateWallStates;
    'minecraft:polished_deepslate_wall': PolishedDeepslateWallStates;
    polished_diorite_double_slab: PolishedDioriteDoubleSlabStates;
    'minecraft:polished_diorite_double_slab': PolishedDioriteDoubleSlabStates;
    polished_diorite_slab: PolishedDioriteSlabStates;
    'minecraft:polished_diorite_slab': PolishedDioriteSlabStates;
    polished_diorite_stairs: PolishedDioriteStairsStates;
    'minecraft:polished_diorite_stairs': PolishedDioriteStairsStates;
    polished_granite_double_slab: PolishedGraniteDoubleSlabStates;
    'minecraft:polished_granite_double_slab': PolishedGraniteDoubleSlabStates;
    polished_granite_slab: PolishedGraniteSlabStates;
    'minecraft:polished_granite_slab': PolishedGraniteSlabStates;
    polished_granite_stairs: PolishedGraniteStairsStates;
    'minecraft:polished_granite_stairs': PolishedGraniteStairsStates;
    polished_tuff_double_slab: PolishedTuffDoubleSlabStates;
    'minecraft:polished_tuff_double_slab': PolishedTuffDoubleSlabStates;
    polished_tuff_slab: PolishedTuffSlabStates;
    'minecraft:polished_tuff_slab': PolishedTuffSlabStates;
    polished_tuff_stairs: PolishedTuffStairsStates;
    'minecraft:polished_tuff_stairs': PolishedTuffStairsStates;
    polished_tuff_wall: PolishedTuffWallStates;
    'minecraft:polished_tuff_wall': PolishedTuffWallStates;
    portal: PortalStates;
    'minecraft:portal': PortalStates;
    potatoes: PotatoesStates;
    'minecraft:potatoes': PotatoesStates;
    powered_comparator: PoweredComparatorStates;
    'minecraft:powered_comparator': PoweredComparatorStates;
    powered_repeater: PoweredRepeaterStates;
    'minecraft:powered_repeater': PoweredRepeaterStates;
    prismarine_brick_double_slab: PrismarineBrickDoubleSlabStates;
    'minecraft:prismarine_brick_double_slab': PrismarineBrickDoubleSlabStates;
    prismarine_brick_slab: PrismarineBrickSlabStates;
    'minecraft:prismarine_brick_slab': PrismarineBrickSlabStates;
    prismarine_bricks_stairs: PrismarineBricksStairsStates;
    'minecraft:prismarine_bricks_stairs': PrismarineBricksStairsStates;
    prismarine_double_slab: PrismarineDoubleSlabStates;
    'minecraft:prismarine_double_slab': PrismarineDoubleSlabStates;
    prismarine_slab: PrismarineSlabStates;
    'minecraft:prismarine_slab': PrismarineSlabStates;
    prismarine_stairs: PrismarineStairsStates;
    'minecraft:prismarine_stairs': PrismarineStairsStates;
    prismarine_wall: PrismarineWallStates;
    'minecraft:prismarine_wall': PrismarineWallStates;
    pumpkin: PumpkinStates;
    'minecraft:pumpkin': PumpkinStates;
    pumpkin_stem: PumpkinStemStates;
    'minecraft:pumpkin_stem': PumpkinStemStates;
    purple_candle: PurpleCandleStates;
    'minecraft:purple_candle': PurpleCandleStates;
    purple_candle_cake: PurpleCandleCakeStates;
    'minecraft:purple_candle_cake': PurpleCandleCakeStates;
    purple_glazed_terracotta: PurpleGlazedTerracottaStates;
    'minecraft:purple_glazed_terracotta': PurpleGlazedTerracottaStates;
    purpur_block: PurpurBlockStates;
    'minecraft:purpur_block': PurpurBlockStates;
    purpur_double_slab: PurpurDoubleSlabStates;
    'minecraft:purpur_double_slab': PurpurDoubleSlabStates;
    purpur_pillar: PurpurPillarStates;
    'minecraft:purpur_pillar': PurpurPillarStates;
    purpur_slab: PurpurSlabStates;
    'minecraft:purpur_slab': PurpurSlabStates;
    purpur_stairs: PurpurStairsStates;
    'minecraft:purpur_stairs': PurpurStairsStates;
    quartz_block: QuartzBlockStates;
    'minecraft:quartz_block': QuartzBlockStates;
    quartz_double_slab: QuartzDoubleSlabStates;
    'minecraft:quartz_double_slab': QuartzDoubleSlabStates;
    quartz_pillar: QuartzPillarStates;
    'minecraft:quartz_pillar': QuartzPillarStates;
    quartz_slab: QuartzSlabStates;
    'minecraft:quartz_slab': QuartzSlabStates;
    quartz_stairs: QuartzStairsStates;
    'minecraft:quartz_stairs': QuartzStairsStates;
    rail: RailStates;
    'minecraft:rail': RailStates;
    red_candle: RedCandleStates;
    'minecraft:red_candle': RedCandleStates;
    red_candle_cake: RedCandleCakeStates;
    'minecraft:red_candle_cake': RedCandleCakeStates;
    red_glazed_terracotta: RedGlazedTerracottaStates;
    'minecraft:red_glazed_terracotta': RedGlazedTerracottaStates;
    red_mushroom_block: RedMushroomBlockStates;
    'minecraft:red_mushroom_block': RedMushroomBlockStates;
    red_nether_brick_double_slab: RedNetherBrickDoubleSlabStates;
    'minecraft:red_nether_brick_double_slab': RedNetherBrickDoubleSlabStates;
    red_nether_brick_slab: RedNetherBrickSlabStates;
    'minecraft:red_nether_brick_slab': RedNetherBrickSlabStates;
    red_nether_brick_stairs: RedNetherBrickStairsStates;
    'minecraft:red_nether_brick_stairs': RedNetherBrickStairsStates;
    red_nether_brick_wall: RedNetherBrickWallStates;
    'minecraft:red_nether_brick_wall': RedNetherBrickWallStates;
    red_sandstone_double_slab: RedSandstoneDoubleSlabStates;
    'minecraft:red_sandstone_double_slab': RedSandstoneDoubleSlabStates;
    red_sandstone_slab: RedSandstoneSlabStates;
    'minecraft:red_sandstone_slab': RedSandstoneSlabStates;
    red_sandstone_stairs: RedSandstoneStairsStates;
    'minecraft:red_sandstone_stairs': RedSandstoneStairsStates;
    red_sandstone_wall: RedSandstoneWallStates;
    'minecraft:red_sandstone_wall': RedSandstoneWallStates;
    redstone_torch: RedstoneTorchStates;
    'minecraft:redstone_torch': RedstoneTorchStates;
    redstone_wire: RedstoneWireStates;
    'minecraft:redstone_wire': RedstoneWireStates;
    reeds: ReedsStates;
    'minecraft:reeds': ReedsStates;
    repeating_command_block: RepeatingCommandBlockStates;
    'minecraft:repeating_command_block': RepeatingCommandBlockStates;
    resin_brick_double_slab: ResinBrickDoubleSlabStates;
    'minecraft:resin_brick_double_slab': ResinBrickDoubleSlabStates;
    resin_brick_slab: ResinBrickSlabStates;
    'minecraft:resin_brick_slab': ResinBrickSlabStates;
    resin_brick_stairs: ResinBrickStairsStates;
    'minecraft:resin_brick_stairs': ResinBrickStairsStates;
    resin_brick_wall: ResinBrickWallStates;
    'minecraft:resin_brick_wall': ResinBrickWallStates;
    resin_clump: ResinClumpStates;
    'minecraft:resin_clump': ResinClumpStates;
    respawn_anchor: RespawnAnchorStates;
    'minecraft:respawn_anchor': RespawnAnchorStates;
    rose_bush: RoseBushStates;
    'minecraft:rose_bush': RoseBushStates;
    sandstone_double_slab: SandstoneDoubleSlabStates;
    'minecraft:sandstone_double_slab': SandstoneDoubleSlabStates;
    sandstone_slab: SandstoneSlabStates;
    'minecraft:sandstone_slab': SandstoneSlabStates;
    sandstone_stairs: SandstoneStairsStates;
    'minecraft:sandstone_stairs': SandstoneStairsStates;
    sandstone_wall: SandstoneWallStates;
    'minecraft:sandstone_wall': SandstoneWallStates;
    scaffolding: ScaffoldingStates;
    'minecraft:scaffolding': ScaffoldingStates;
    sculk_catalyst: SculkCatalystStates;
    'minecraft:sculk_catalyst': SculkCatalystStates;
    sculk_sensor: SculkSensorStates;
    'minecraft:sculk_sensor': SculkSensorStates;
    sculk_shrieker: SculkShriekerStates;
    'minecraft:sculk_shrieker': SculkShriekerStates;
    sculk_vein: SculkVeinStates;
    'minecraft:sculk_vein': SculkVeinStates;
    sea_pickle: SeaPickleStates;
    'minecraft:sea_pickle': SeaPickleStates;
    seagrass: SeagrassStates;
    'minecraft:seagrass': SeagrassStates;
    silver_glazed_terracotta: SilverGlazedTerracottaStates;
    'minecraft:silver_glazed_terracotta': SilverGlazedTerracottaStates;
    skeleton_skull: SkeletonSkullStates;
    'minecraft:skeleton_skull': SkeletonSkullStates;
    small_amethyst_bud: SmallAmethystBudStates;
    'minecraft:small_amethyst_bud': SmallAmethystBudStates;
    small_dripleaf_block: SmallDripleafBlockStates;
    'minecraft:small_dripleaf_block': SmallDripleafBlockStates;
    smoker: SmokerStates;
    'minecraft:smoker': SmokerStates;
    smooth_quartz: SmoothQuartzStates;
    'minecraft:smooth_quartz': SmoothQuartzStates;
    smooth_quartz_double_slab: SmoothQuartzDoubleSlabStates;
    'minecraft:smooth_quartz_double_slab': SmoothQuartzDoubleSlabStates;
    smooth_quartz_slab: SmoothQuartzSlabStates;
    'minecraft:smooth_quartz_slab': SmoothQuartzSlabStates;
    smooth_quartz_stairs: SmoothQuartzStairsStates;
    'minecraft:smooth_quartz_stairs': SmoothQuartzStairsStates;
    smooth_red_sandstone_double_slab: SmoothRedSandstoneDoubleSlabStates;
    'minecraft:smooth_red_sandstone_double_slab': SmoothRedSandstoneDoubleSlabStates;
    smooth_red_sandstone_slab: SmoothRedSandstoneSlabStates;
    'minecraft:smooth_red_sandstone_slab': SmoothRedSandstoneSlabStates;
    smooth_red_sandstone_stairs: SmoothRedSandstoneStairsStates;
    'minecraft:smooth_red_sandstone_stairs': SmoothRedSandstoneStairsStates;
    smooth_sandstone_double_slab: SmoothSandstoneDoubleSlabStates;
    'minecraft:smooth_sandstone_double_slab': SmoothSandstoneDoubleSlabStates;
    smooth_sandstone_slab: SmoothSandstoneSlabStates;
    'minecraft:smooth_sandstone_slab': SmoothSandstoneSlabStates;
    smooth_sandstone_stairs: SmoothSandstoneStairsStates;
    'minecraft:smooth_sandstone_stairs': SmoothSandstoneStairsStates;
    smooth_stone_double_slab: SmoothStoneDoubleSlabStates;
    'minecraft:smooth_stone_double_slab': SmoothStoneDoubleSlabStates;
    smooth_stone_slab: SmoothStoneSlabStates;
    'minecraft:smooth_stone_slab': SmoothStoneSlabStates;
    sniffer_egg: SnifferEggStates;
    'minecraft:sniffer_egg': SnifferEggStates;
    snow_layer: SnowLayerStates;
    'minecraft:snow_layer': SnowLayerStates;
    soul_campfire: SoulCampfireStates;
    'minecraft:soul_campfire': SoulCampfireStates;
    soul_fire: SoulFireStates;
    'minecraft:soul_fire': SoulFireStates;
    soul_lantern: SoulLanternStates;
    'minecraft:soul_lantern': SoulLanternStates;
    soul_torch: SoulTorchStates;
    'minecraft:soul_torch': SoulTorchStates;
    spruce_button: SpruceButtonStates;
    'minecraft:spruce_button': SpruceButtonStates;
    spruce_door: SpruceDoorStates;
    'minecraft:spruce_door': SpruceDoorStates;
    spruce_double_slab: SpruceDoubleSlabStates;
    'minecraft:spruce_double_slab': SpruceDoubleSlabStates;
    spruce_fence_gate: SpruceFenceGateStates;
    'minecraft:spruce_fence_gate': SpruceFenceGateStates;
    spruce_hanging_sign: SpruceHangingSignStates;
    'minecraft:spruce_hanging_sign': SpruceHangingSignStates;
    spruce_leaves: SpruceLeavesStates;
    'minecraft:spruce_leaves': SpruceLeavesStates;
    spruce_log: SpruceLogStates;
    'minecraft:spruce_log': SpruceLogStates;
    spruce_pressure_plate: SprucePressurePlateStates;
    'minecraft:spruce_pressure_plate': SprucePressurePlateStates;
    spruce_sapling: SpruceSaplingStates;
    'minecraft:spruce_sapling': SpruceSaplingStates;
    spruce_shelf: SpruceShelfStates;
    'minecraft:spruce_shelf': SpruceShelfStates;
    spruce_slab: SpruceSlabStates;
    'minecraft:spruce_slab': SpruceSlabStates;
    spruce_stairs: SpruceStairsStates;
    'minecraft:spruce_stairs': SpruceStairsStates;
    spruce_standing_sign: SpruceStandingSignStates;
    'minecraft:spruce_standing_sign': SpruceStandingSignStates;
    spruce_trapdoor: SpruceTrapdoorStates;
    'minecraft:spruce_trapdoor': SpruceTrapdoorStates;
    spruce_wall_sign: SpruceWallSignStates;
    'minecraft:spruce_wall_sign': SpruceWallSignStates;
    spruce_wood: SpruceWoodStates;
    'minecraft:spruce_wood': SpruceWoodStates;
    standing_banner: StandingBannerStates;
    'minecraft:standing_banner': StandingBannerStates;
    standing_sign: StandingSignStates;
    'minecraft:standing_sign': StandingSignStates;
    sticky_piston: StickyPistonStates;
    'minecraft:sticky_piston': StickyPistonStates;
    sticky_piston_arm_collision: StickyPistonArmCollisionStates;
    'minecraft:sticky_piston_arm_collision': StickyPistonArmCollisionStates;
    stone_brick_double_slab: StoneBrickDoubleSlabStates;
    'minecraft:stone_brick_double_slab': StoneBrickDoubleSlabStates;
    stone_brick_slab: StoneBrickSlabStates;
    'minecraft:stone_brick_slab': StoneBrickSlabStates;
    stone_brick_stairs: StoneBrickStairsStates;
    'minecraft:stone_brick_stairs': StoneBrickStairsStates;
    stone_brick_wall: StoneBrickWallStates;
    'minecraft:stone_brick_wall': StoneBrickWallStates;
    stone_button: StoneButtonStates;
    'minecraft:stone_button': StoneButtonStates;
    stone_pressure_plate: StonePressurePlateStates;
    'minecraft:stone_pressure_plate': StonePressurePlateStates;
    stone_stairs: StoneStairsStates;
    'minecraft:stone_stairs': StoneStairsStates;
    stonecutter_block: StonecutterBlockStates;
    'minecraft:stonecutter_block': StonecutterBlockStates;
    stripped_acacia_log: StrippedAcaciaLogStates;
    'minecraft:stripped_acacia_log': StrippedAcaciaLogStates;
    stripped_acacia_wood: StrippedAcaciaWoodStates;
    'minecraft:stripped_acacia_wood': StrippedAcaciaWoodStates;
    stripped_bamboo_block: StrippedBambooBlockStates;
    'minecraft:stripped_bamboo_block': StrippedBambooBlockStates;
    stripped_birch_log: StrippedBirchLogStates;
    'minecraft:stripped_birch_log': StrippedBirchLogStates;
    stripped_birch_wood: StrippedBirchWoodStates;
    'minecraft:stripped_birch_wood': StrippedBirchWoodStates;
    stripped_cherry_log: StrippedCherryLogStates;
    'minecraft:stripped_cherry_log': StrippedCherryLogStates;
    stripped_cherry_wood: StrippedCherryWoodStates;
    'minecraft:stripped_cherry_wood': StrippedCherryWoodStates;
    stripped_crimson_hyphae: StrippedCrimsonHyphaeStates;
    'minecraft:stripped_crimson_hyphae': StrippedCrimsonHyphaeStates;
    stripped_crimson_stem: StrippedCrimsonStemStates;
    'minecraft:stripped_crimson_stem': StrippedCrimsonStemStates;
    stripped_dark_oak_log: StrippedDarkOakLogStates;
    'minecraft:stripped_dark_oak_log': StrippedDarkOakLogStates;
    stripped_dark_oak_wood: StrippedDarkOakWoodStates;
    'minecraft:stripped_dark_oak_wood': StrippedDarkOakWoodStates;
    stripped_jungle_log: StrippedJungleLogStates;
    'minecraft:stripped_jungle_log': StrippedJungleLogStates;
    stripped_jungle_wood: StrippedJungleWoodStates;
    'minecraft:stripped_jungle_wood': StrippedJungleWoodStates;
    stripped_mangrove_log: StrippedMangroveLogStates;
    'minecraft:stripped_mangrove_log': StrippedMangroveLogStates;
    stripped_mangrove_wood: StrippedMangroveWoodStates;
    'minecraft:stripped_mangrove_wood': StrippedMangroveWoodStates;
    stripped_oak_log: StrippedOakLogStates;
    'minecraft:stripped_oak_log': StrippedOakLogStates;
    stripped_oak_wood: StrippedOakWoodStates;
    'minecraft:stripped_oak_wood': StrippedOakWoodStates;
    stripped_pale_oak_log: StrippedPaleOakLogStates;
    'minecraft:stripped_pale_oak_log': StrippedPaleOakLogStates;
    stripped_pale_oak_wood: StrippedPaleOakWoodStates;
    'minecraft:stripped_pale_oak_wood': StrippedPaleOakWoodStates;
    stripped_spruce_log: StrippedSpruceLogStates;
    'minecraft:stripped_spruce_log': StrippedSpruceLogStates;
    stripped_spruce_wood: StrippedSpruceWoodStates;
    'minecraft:stripped_spruce_wood': StrippedSpruceWoodStates;
    stripped_warped_hyphae: StrippedWarpedHyphaeStates;
    'minecraft:stripped_warped_hyphae': StrippedWarpedHyphaeStates;
    stripped_warped_stem: StrippedWarpedStemStates;
    'minecraft:stripped_warped_stem': StrippedWarpedStemStates;
    structure_block: StructureBlockStates;
    'minecraft:structure_block': StructureBlockStates;
    sunflower: SunflowerStates;
    'minecraft:sunflower': SunflowerStates;
    suspicious_gravel: SuspiciousGravelStates;
    'minecraft:suspicious_gravel': SuspiciousGravelStates;
    suspicious_sand: SuspiciousSandStates;
    'minecraft:suspicious_sand': SuspiciousSandStates;
    sweet_berry_bush: SweetBerryBushStates;
    'minecraft:sweet_berry_bush': SweetBerryBushStates;
    tall_grass: TallGrassStates;
    'minecraft:tall_grass': TallGrassStates;
    tnt: TntStates;
    'minecraft:tnt': TntStates;
    torch: TorchStates;
    'minecraft:torch': TorchStates;
    torchflower_crop: TorchflowerCropStates;
    'minecraft:torchflower_crop': TorchflowerCropStates;
    trapdoor: TrapdoorStates;
    'minecraft:trapdoor': TrapdoorStates;
    trapped_chest: TrappedChestStates;
    'minecraft:trapped_chest': TrappedChestStates;
    trial_spawner: TrialSpawnerStates;
    'minecraft:trial_spawner': TrialSpawnerStates;
    trip_wire: TripWireStates;
    'minecraft:trip_wire': TripWireStates;
    tripwire_hook: TripwireHookStates;
    'minecraft:tripwire_hook': TripwireHookStates;
    tube_coral_fan: TubeCoralFanStates;
    'minecraft:tube_coral_fan': TubeCoralFanStates;
    tube_coral_wall_fan: TubeCoralWallFanStates;
    'minecraft:tube_coral_wall_fan': TubeCoralWallFanStates;
    tuff_brick_double_slab: TuffBrickDoubleSlabStates;
    'minecraft:tuff_brick_double_slab': TuffBrickDoubleSlabStates;
    tuff_brick_slab: TuffBrickSlabStates;
    'minecraft:tuff_brick_slab': TuffBrickSlabStates;
    tuff_brick_stairs: TuffBrickStairsStates;
    'minecraft:tuff_brick_stairs': TuffBrickStairsStates;
    tuff_brick_wall: TuffBrickWallStates;
    'minecraft:tuff_brick_wall': TuffBrickWallStates;
    tuff_double_slab: TuffDoubleSlabStates;
    'minecraft:tuff_double_slab': TuffDoubleSlabStates;
    tuff_slab: TuffSlabStates;
    'minecraft:tuff_slab': TuffSlabStates;
    tuff_stairs: TuffStairsStates;
    'minecraft:tuff_stairs': TuffStairsStates;
    tuff_wall: TuffWallStates;
    'minecraft:tuff_wall': TuffWallStates;
    turtle_egg: TurtleEggStates;
    'minecraft:turtle_egg': TurtleEggStates;
    twisting_vines: TwistingVinesStates;
    'minecraft:twisting_vines': TwistingVinesStates;
    underwater_tnt: UnderwaterTntStates;
    'minecraft:underwater_tnt': UnderwaterTntStates;
    underwater_torch: UnderwaterTorchStates;
    'minecraft:underwater_torch': UnderwaterTorchStates;
    unlit_redstone_torch: UnlitRedstoneTorchStates;
    'minecraft:unlit_redstone_torch': UnlitRedstoneTorchStates;
    unpowered_comparator: UnpoweredComparatorStates;
    'minecraft:unpowered_comparator': UnpoweredComparatorStates;
    unpowered_repeater: UnpoweredRepeaterStates;
    'minecraft:unpowered_repeater': UnpoweredRepeaterStates;
    vault: VaultStates;
    'minecraft:vault': VaultStates;
    verdant_froglight: VerdantFroglightStates;
    'minecraft:verdant_froglight': VerdantFroglightStates;
    vine: VineStates;
    'minecraft:vine': VineStates;
    wall_banner: WallBannerStates;
    'minecraft:wall_banner': WallBannerStates;
    wall_sign: WallSignStates;
    'minecraft:wall_sign': WallSignStates;
    warped_button: WarpedButtonStates;
    'minecraft:warped_button': WarpedButtonStates;
    warped_door: WarpedDoorStates;
    'minecraft:warped_door': WarpedDoorStates;
    warped_double_slab: WarpedDoubleSlabStates;
    'minecraft:warped_double_slab': WarpedDoubleSlabStates;
    warped_fence_gate: WarpedFenceGateStates;
    'minecraft:warped_fence_gate': WarpedFenceGateStates;
    warped_hanging_sign: WarpedHangingSignStates;
    'minecraft:warped_hanging_sign': WarpedHangingSignStates;
    warped_hyphae: WarpedHyphaeStates;
    'minecraft:warped_hyphae': WarpedHyphaeStates;
    warped_pressure_plate: WarpedPressurePlateStates;
    'minecraft:warped_pressure_plate': WarpedPressurePlateStates;
    warped_shelf: WarpedShelfStates;
    'minecraft:warped_shelf': WarpedShelfStates;
    warped_slab: WarpedSlabStates;
    'minecraft:warped_slab': WarpedSlabStates;
    warped_stairs: WarpedStairsStates;
    'minecraft:warped_stairs': WarpedStairsStates;
    warped_standing_sign: WarpedStandingSignStates;
    'minecraft:warped_standing_sign': WarpedStandingSignStates;
    warped_stem: WarpedStemStates;
    'minecraft:warped_stem': WarpedStemStates;
    warped_trapdoor: WarpedTrapdoorStates;
    'minecraft:warped_trapdoor': WarpedTrapdoorStates;
    warped_wall_sign: WarpedWallSignStates;
    'minecraft:warped_wall_sign': WarpedWallSignStates;
    water: WaterStates;
    'minecraft:water': WaterStates;
    waxed_copper_bulb: WaxedCopperBulbStates;
    'minecraft:waxed_copper_bulb': WaxedCopperBulbStates;
    waxed_copper_chain: WaxedCopperChainStates;
    'minecraft:waxed_copper_chain': WaxedCopperChainStates;
    waxed_copper_chest: WaxedCopperChestStates;
    'minecraft:waxed_copper_chest': WaxedCopperChestStates;
    waxed_copper_door: WaxedCopperDoorStates;
    'minecraft:waxed_copper_door': WaxedCopperDoorStates;
    waxed_copper_golem_statue: WaxedCopperGolemStatueStates;
    'minecraft:waxed_copper_golem_statue': WaxedCopperGolemStatueStates;
    waxed_copper_lantern: WaxedCopperLanternStates;
    'minecraft:waxed_copper_lantern': WaxedCopperLanternStates;
    waxed_copper_trapdoor: WaxedCopperTrapdoorStates;
    'minecraft:waxed_copper_trapdoor': WaxedCopperTrapdoorStates;
    waxed_cut_copper_slab: WaxedCutCopperSlabStates;
    'minecraft:waxed_cut_copper_slab': WaxedCutCopperSlabStates;
    waxed_cut_copper_stairs: WaxedCutCopperStairsStates;
    'minecraft:waxed_cut_copper_stairs': WaxedCutCopperStairsStates;
    waxed_double_cut_copper_slab: WaxedDoubleCutCopperSlabStates;
    'minecraft:waxed_double_cut_copper_slab': WaxedDoubleCutCopperSlabStates;
    waxed_exposed_copper_bulb: WaxedExposedCopperBulbStates;
    'minecraft:waxed_exposed_copper_bulb': WaxedExposedCopperBulbStates;
    waxed_exposed_copper_chain: WaxedExposedCopperChainStates;
    'minecraft:waxed_exposed_copper_chain': WaxedExposedCopperChainStates;
    waxed_exposed_copper_chest: WaxedExposedCopperChestStates;
    'minecraft:waxed_exposed_copper_chest': WaxedExposedCopperChestStates;
    waxed_exposed_copper_door: WaxedExposedCopperDoorStates;
    'minecraft:waxed_exposed_copper_door': WaxedExposedCopperDoorStates;
    waxed_exposed_copper_golem_statue: WaxedExposedCopperGolemStatueStates;
    'minecraft:waxed_exposed_copper_golem_statue': WaxedExposedCopperGolemStatueStates;
    waxed_exposed_copper_lantern: WaxedExposedCopperLanternStates;
    'minecraft:waxed_exposed_copper_lantern': WaxedExposedCopperLanternStates;
    waxed_exposed_copper_trapdoor: WaxedExposedCopperTrapdoorStates;
    'minecraft:waxed_exposed_copper_trapdoor': WaxedExposedCopperTrapdoorStates;
    waxed_exposed_cut_copper_slab: WaxedExposedCutCopperSlabStates;
    'minecraft:waxed_exposed_cut_copper_slab': WaxedExposedCutCopperSlabStates;
    waxed_exposed_cut_copper_stairs: WaxedExposedCutCopperStairsStates;
    'minecraft:waxed_exposed_cut_copper_stairs': WaxedExposedCutCopperStairsStates;
    waxed_exposed_double_cut_copper_slab: WaxedExposedDoubleCutCopperSlabStates;
    'minecraft:waxed_exposed_double_cut_copper_slab': WaxedExposedDoubleCutCopperSlabStates;
    waxed_exposed_lightning_rod: WaxedExposedLightningRodStates;
    'minecraft:waxed_exposed_lightning_rod': WaxedExposedLightningRodStates;
    waxed_lightning_rod: WaxedLightningRodStates;
    'minecraft:waxed_lightning_rod': WaxedLightningRodStates;
    waxed_oxidized_copper_bulb: WaxedOxidizedCopperBulbStates;
    'minecraft:waxed_oxidized_copper_bulb': WaxedOxidizedCopperBulbStates;
    waxed_oxidized_copper_chain: WaxedOxidizedCopperChainStates;
    'minecraft:waxed_oxidized_copper_chain': WaxedOxidizedCopperChainStates;
    waxed_oxidized_copper_chest: WaxedOxidizedCopperChestStates;
    'minecraft:waxed_oxidized_copper_chest': WaxedOxidizedCopperChestStates;
    waxed_oxidized_copper_door: WaxedOxidizedCopperDoorStates;
    'minecraft:waxed_oxidized_copper_door': WaxedOxidizedCopperDoorStates;
    waxed_oxidized_copper_golem_statue: WaxedOxidizedCopperGolemStatueStates;
    'minecraft:waxed_oxidized_copper_golem_statue': WaxedOxidizedCopperGolemStatueStates;
    waxed_oxidized_copper_lantern: WaxedOxidizedCopperLanternStates;
    'minecraft:waxed_oxidized_copper_lantern': WaxedOxidizedCopperLanternStates;
    waxed_oxidized_copper_trapdoor: WaxedOxidizedCopperTrapdoorStates;
    'minecraft:waxed_oxidized_copper_trapdoor': WaxedOxidizedCopperTrapdoorStates;
    waxed_oxidized_cut_copper_slab: WaxedOxidizedCutCopperSlabStates;
    'minecraft:waxed_oxidized_cut_copper_slab': WaxedOxidizedCutCopperSlabStates;
    waxed_oxidized_cut_copper_stairs: WaxedOxidizedCutCopperStairsStates;
    'minecraft:waxed_oxidized_cut_copper_stairs': WaxedOxidizedCutCopperStairsStates;
    waxed_oxidized_double_cut_copper_slab: WaxedOxidizedDoubleCutCopperSlabStates;
    'minecraft:waxed_oxidized_double_cut_copper_slab': WaxedOxidizedDoubleCutCopperSlabStates;
    waxed_oxidized_lightning_rod: WaxedOxidizedLightningRodStates;
    'minecraft:waxed_oxidized_lightning_rod': WaxedOxidizedLightningRodStates;
    waxed_weathered_copper_bulb: WaxedWeatheredCopperBulbStates;
    'minecraft:waxed_weathered_copper_bulb': WaxedWeatheredCopperBulbStates;
    waxed_weathered_copper_chain: WaxedWeatheredCopperChainStates;
    'minecraft:waxed_weathered_copper_chain': WaxedWeatheredCopperChainStates;
    waxed_weathered_copper_chest: WaxedWeatheredCopperChestStates;
    'minecraft:waxed_weathered_copper_chest': WaxedWeatheredCopperChestStates;
    waxed_weathered_copper_door: WaxedWeatheredCopperDoorStates;
    'minecraft:waxed_weathered_copper_door': WaxedWeatheredCopperDoorStates;
    waxed_weathered_copper_golem_statue: WaxedWeatheredCopperGolemStatueStates;
    'minecraft:waxed_weathered_copper_golem_statue': WaxedWeatheredCopperGolemStatueStates;
    waxed_weathered_copper_lantern: WaxedWeatheredCopperLanternStates;
    'minecraft:waxed_weathered_copper_lantern': WaxedWeatheredCopperLanternStates;
    waxed_weathered_copper_trapdoor: WaxedWeatheredCopperTrapdoorStates;
    'minecraft:waxed_weathered_copper_trapdoor': WaxedWeatheredCopperTrapdoorStates;
    waxed_weathered_cut_copper_slab: WaxedWeatheredCutCopperSlabStates;
    'minecraft:waxed_weathered_cut_copper_slab': WaxedWeatheredCutCopperSlabStates;
    waxed_weathered_cut_copper_stairs: WaxedWeatheredCutCopperStairsStates;
    'minecraft:waxed_weathered_cut_copper_stairs': WaxedWeatheredCutCopperStairsStates;
    waxed_weathered_double_cut_copper_slab: WaxedWeatheredDoubleCutCopperSlabStates;
    'minecraft:waxed_weathered_double_cut_copper_slab': WaxedWeatheredDoubleCutCopperSlabStates;
    waxed_weathered_lightning_rod: WaxedWeatheredLightningRodStates;
    'minecraft:waxed_weathered_lightning_rod': WaxedWeatheredLightningRodStates;
    weathered_copper_bulb: WeatheredCopperBulbStates;
    'minecraft:weathered_copper_bulb': WeatheredCopperBulbStates;
    weathered_copper_chain: WeatheredCopperChainStates;
    'minecraft:weathered_copper_chain': WeatheredCopperChainStates;
    weathered_copper_chest: WeatheredCopperChestStates;
    'minecraft:weathered_copper_chest': WeatheredCopperChestStates;
    weathered_copper_door: WeatheredCopperDoorStates;
    'minecraft:weathered_copper_door': WeatheredCopperDoorStates;
    weathered_copper_golem_statue: WeatheredCopperGolemStatueStates;
    'minecraft:weathered_copper_golem_statue': WeatheredCopperGolemStatueStates;
    weathered_copper_lantern: WeatheredCopperLanternStates;
    'minecraft:weathered_copper_lantern': WeatheredCopperLanternStates;
    weathered_copper_trapdoor: WeatheredCopperTrapdoorStates;
    'minecraft:weathered_copper_trapdoor': WeatheredCopperTrapdoorStates;
    weathered_cut_copper_slab: WeatheredCutCopperSlabStates;
    'minecraft:weathered_cut_copper_slab': WeatheredCutCopperSlabStates;
    weathered_cut_copper_stairs: WeatheredCutCopperStairsStates;
    'minecraft:weathered_cut_copper_stairs': WeatheredCutCopperStairsStates;
    weathered_double_cut_copper_slab: WeatheredDoubleCutCopperSlabStates;
    'minecraft:weathered_double_cut_copper_slab': WeatheredDoubleCutCopperSlabStates;
    weathered_lightning_rod: WeatheredLightningRodStates;
    'minecraft:weathered_lightning_rod': WeatheredLightningRodStates;
    weeping_vines: WeepingVinesStates;
    'minecraft:weeping_vines': WeepingVinesStates;
    wheat: WheatStates;
    'minecraft:wheat': WheatStates;
    white_candle: WhiteCandleStates;
    'minecraft:white_candle': WhiteCandleStates;
    white_candle_cake: WhiteCandleCakeStates;
    'minecraft:white_candle_cake': WhiteCandleCakeStates;
    white_glazed_terracotta: WhiteGlazedTerracottaStates;
    'minecraft:white_glazed_terracotta': WhiteGlazedTerracottaStates;
    wildflowers: WildflowersStates;
    'minecraft:wildflowers': WildflowersStates;
    wither_skeleton_skull: WitherSkeletonSkullStates;
    'minecraft:wither_skeleton_skull': WitherSkeletonSkullStates;
    wooden_button: WoodenButtonStates;
    'minecraft:wooden_button': WoodenButtonStates;
    wooden_door: WoodenDoorStates;
    'minecraft:wooden_door': WoodenDoorStates;
    wooden_pressure_plate: WoodenPressurePlateStates;
    'minecraft:wooden_pressure_plate': WoodenPressurePlateStates;
    yellow_candle: YellowCandleStates;
    'minecraft:yellow_candle': YellowCandleStates;
    yellow_candle_cake: YellowCandleCakeStates;
    'minecraft:yellow_candle_cake': YellowCandleCakeStates;
    yellow_glazed_terracotta: YellowGlazedTerracottaStates;
    'minecraft:yellow_glazed_terracotta': YellowGlazedTerracottaStates;
    zombie_head: ZombieHeadStates;
    'minecraft:zombie_head': ZombieHeadStates;
};

/**
 * All possible MinecraftCameraPresetsTypes
 */
declare enum MinecraftCameraPresetsTypes {
    ControlSchemeCamera = "minecraft:control_scheme_camera",
    FirstPerson = "minecraft:first_person",
    FixedBoom = "minecraft:fixed_boom",
    FollowOrbit = "minecraft:follow_orbit",
    Free = "minecraft:free",
    ThirdPerson = "minecraft:third_person",
    ThirdPersonFront = "minecraft:third_person_front"
}
/**
 * Union type equivalent of the MinecraftCameraPresetsTypes enum.
 */
type MinecraftCameraPresetsTypesUnion = keyof typeof MinecraftCameraPresetsTypes;

/**
 * All possible MinecraftCooldownCategoryTypes
 */
declare enum MinecraftCooldownCategoryTypes {
    Chorusfruit = "minecraft:chorusfruit",
    EnderPearl = "minecraft:ender_pearl",
    GoatHorn = "minecraft:goat_horn",
    Shield = "minecraft:shield",
    WindCharge = "minecraft:wind_charge"
}
/**
 * Union type equivalent of the MinecraftCooldownCategoryTypes enum.
 */
type MinecraftCooldownCategoryTypesUnion = keyof typeof MinecraftCooldownCategoryTypes;

/**
 * All possible MinecraftDimensionTypes
 */
declare enum MinecraftDimensionTypes {
    Nether = "minecraft:nether",
    Overworld = "minecraft:overworld",
    TheEnd = "minecraft:the_end"
}
/**
 * Union type equivalent of the MinecraftDimensionTypes enum.
 */
type MinecraftDimensionTypesUnion = keyof typeof MinecraftDimensionTypes;

/**
 * All possible MinecraftEffectTypes
 */
declare enum MinecraftEffectTypes {
    Absorption = "minecraft:absorption",
    BadOmen = "minecraft:bad_omen",
    Blindness = "minecraft:blindness",
    ConduitPower = "minecraft:conduit_power",
    Darkness = "minecraft:darkness",
    FatalPoison = "minecraft:fatal_poison",
    FireResistance = "minecraft:fire_resistance",
    Haste = "minecraft:haste",
    HealthBoost = "minecraft:health_boost",
    Hunger = "minecraft:hunger",
    Infested = "minecraft:infested",
    InstantDamage = "minecraft:instant_damage",
    InstantHealth = "minecraft:instant_health",
    Invisibility = "minecraft:invisibility",
    JumpBoost = "minecraft:jump_boost",
    Levitation = "minecraft:levitation",
    MiningFatigue = "minecraft:mining_fatigue",
    Nausea = "minecraft:nausea",
    NightVision = "minecraft:night_vision",
    Oozing = "minecraft:oozing",
    Poison = "minecraft:poison",
    RaidOmen = "minecraft:raid_omen",
    Regeneration = "minecraft:regeneration",
    Resistance = "minecraft:resistance",
    Saturation = "minecraft:saturation",
    SlowFalling = "minecraft:slow_falling",
    Slowness = "minecraft:slowness",
    Speed = "minecraft:speed",
    Strength = "minecraft:strength",
    TrialOmen = "minecraft:trial_omen",
    VillageHero = "minecraft:village_hero",
    WaterBreathing = "minecraft:water_breathing",
    Weakness = "minecraft:weakness",
    Weaving = "minecraft:weaving",
    WindCharged = "minecraft:wind_charged",
    Wither = "minecraft:wither"
}
/**
 * Union type equivalent of the MinecraftEffectTypes enum.
 */
type MinecraftEffectTypesUnion = keyof typeof MinecraftEffectTypes;

/**
 * All possible MinecraftEnchantmentTypes
 */
declare enum MinecraftEnchantmentTypes {
    AquaAffinity = "minecraft:aqua_affinity",
    BaneOfArthropods = "minecraft:bane_of_arthropods",
    Binding = "minecraft:binding",
    BlastProtection = "minecraft:blast_protection",
    BowInfinity = "minecraft:infinity",
    Breach = "minecraft:breach",
    Channeling = "minecraft:channeling",
    Density = "minecraft:density",
    DepthStrider = "minecraft:depth_strider",
    Efficiency = "minecraft:efficiency",
    FeatherFalling = "minecraft:feather_falling",
    FireAspect = "minecraft:fire_aspect",
    FireProtection = "minecraft:fire_protection",
    Flame = "minecraft:flame",
    Fortune = "minecraft:fortune",
    FrostWalker = "minecraft:frost_walker",
    Impaling = "minecraft:impaling",
    Knockback = "minecraft:knockback",
    Looting = "minecraft:looting",
    Loyalty = "minecraft:loyalty",
    LuckOfTheSea = "minecraft:luck_of_the_sea",
    Lure = "minecraft:lure",
    Mending = "minecraft:mending",
    Multishot = "minecraft:multishot",
    Piercing = "minecraft:piercing",
    Power = "minecraft:power",
    ProjectileProtection = "minecraft:projectile_protection",
    Protection = "minecraft:protection",
    Punch = "minecraft:punch",
    QuickCharge = "minecraft:quick_charge",
    Respiration = "minecraft:respiration",
    Riptide = "minecraft:riptide",
    Sharpness = "minecraft:sharpness",
    SilkTouch = "minecraft:silk_touch",
    Smite = "minecraft:smite",
    SoulSpeed = "minecraft:soul_speed",
    SwiftSneak = "minecraft:swift_sneak",
    Thorns = "minecraft:thorns",
    Unbreaking = "minecraft:unbreaking",
    Vanishing = "minecraft:vanishing",
    WindBurst = "minecraft:wind_burst"
}
/**
 * Union type equivalent of the MinecraftEnchantmentTypes enum.
 */
type MinecraftEnchantmentTypesUnion = keyof typeof MinecraftEnchantmentTypes;

/**
 * All possible MinecraftEntityTypes
 */
declare enum MinecraftEntityTypes {
    Agent = "minecraft:agent",
    Allay = "minecraft:allay",
    AreaEffectCloud = "minecraft:area_effect_cloud",
    Armadillo = "minecraft:armadillo",
    ArmorStand = "minecraft:armor_stand",
    Arrow = "minecraft:arrow",
    Axolotl = "minecraft:axolotl",
    Bat = "minecraft:bat",
    Bee = "minecraft:bee",
    Blaze = "minecraft:blaze",
    Boat = "minecraft:boat",
    Bogged = "minecraft:bogged",
    Breeze = "minecraft:breeze",
    BreezeWindChargeProjectile = "minecraft:breeze_wind_charge_projectile",
    Camel = "minecraft:camel",
    Cat = "minecraft:cat",
    CaveSpider = "minecraft:cave_spider",
    ChestBoat = "minecraft:chest_boat",
    ChestMinecart = "minecraft:chest_minecart",
    Chicken = "minecraft:chicken",
    Cod = "minecraft:cod",
    CommandBlockMinecart = "minecraft:command_block_minecart",
    CopperGolem = "minecraft:copper_golem",
    Cow = "minecraft:cow",
    Creaking = "minecraft:creaking",
    Creeper = "minecraft:creeper",
    Dolphin = "minecraft:dolphin",
    Donkey = "minecraft:donkey",
    DragonFireball = "minecraft:dragon_fireball",
    Drowned = "minecraft:drowned",
    Egg = "minecraft:egg",
    ElderGuardian = "minecraft:elder_guardian",
    EnderCrystal = "minecraft:ender_crystal",
    EnderDragon = "minecraft:ender_dragon",
    EnderPearl = "minecraft:ender_pearl",
    Enderman = "minecraft:enderman",
    Endermite = "minecraft:endermite",
    EvocationIllager = "minecraft:evocation_illager",
    EyeOfEnderSignal = "minecraft:eye_of_ender_signal",
    Fireball = "minecraft:fireball",
    FireworksRocket = "minecraft:fireworks_rocket",
    FishingHook = "minecraft:fishing_hook",
    Fox = "minecraft:fox",
    Frog = "minecraft:frog",
    Ghast = "minecraft:ghast",
    GlowSquid = "minecraft:glow_squid",
    Goat = "minecraft:goat",
    Guardian = "minecraft:guardian",
    HappyGhast = "minecraft:happy_ghast",
    Hoglin = "minecraft:hoglin",
    HopperMinecart = "minecraft:hopper_minecart",
    Horse = "minecraft:horse",
    Husk = "minecraft:husk",
    IronGolem = "minecraft:iron_golem",
    LightningBolt = "minecraft:lightning_bolt",
    LingeringPotion = "minecraft:lingering_potion",
    Llama = "minecraft:llama",
    LlamaSpit = "minecraft:llama_spit",
    MagmaCube = "minecraft:magma_cube",
    Minecart = "minecraft:minecart",
    Mooshroom = "minecraft:mooshroom",
    Mule = "minecraft:mule",
    Npc = "minecraft:npc",
    Ocelot = "minecraft:ocelot",
    OminousItemSpawner = "minecraft:ominous_item_spawner",
    Panda = "minecraft:panda",
    Parrot = "minecraft:parrot",
    Phantom = "minecraft:phantom",
    Pig = "minecraft:pig",
    Piglin = "minecraft:piglin",
    PiglinBrute = "minecraft:piglin_brute",
    Pillager = "minecraft:pillager",
    Player = "minecraft:player",
    PolarBear = "minecraft:polar_bear",
    Pufferfish = "minecraft:pufferfish",
    Rabbit = "minecraft:rabbit",
    Ravager = "minecraft:ravager",
    Salmon = "minecraft:salmon",
    Sheep = "minecraft:sheep",
    Shulker = "minecraft:shulker",
    ShulkerBullet = "minecraft:shulker_bullet",
    Silverfish = "minecraft:silverfish",
    Skeleton = "minecraft:skeleton",
    SkeletonHorse = "minecraft:skeleton_horse",
    Slime = "minecraft:slime",
    SmallFireball = "minecraft:small_fireball",
    Sniffer = "minecraft:sniffer",
    SnowGolem = "minecraft:snow_golem",
    Snowball = "minecraft:snowball",
    Spider = "minecraft:spider",
    SplashPotion = "minecraft:splash_potion",
    Squid = "minecraft:squid",
    Stray = "minecraft:stray",
    Strider = "minecraft:strider",
    Tadpole = "minecraft:tadpole",
    ThrownTrident = "minecraft:thrown_trident",
    Tnt = "minecraft:tnt",
    TntMinecart = "minecraft:tnt_minecart",
    TraderLlama = "minecraft:trader_llama",
    TripodCamera = "minecraft:tripod_camera",
    Tropicalfish = "minecraft:tropicalfish",
    Turtle = "minecraft:turtle",
    Vex = "minecraft:vex",
    Villager = "minecraft:villager",
    VillagerV2 = "minecraft:villager_v2",
    Vindicator = "minecraft:vindicator",
    WanderingTrader = "minecraft:wandering_trader",
    Warden = "minecraft:warden",
    WindChargeProjectile = "minecraft:wind_charge_projectile",
    Witch = "minecraft:witch",
    Wither = "minecraft:wither",
    WitherSkeleton = "minecraft:wither_skeleton",
    WitherSkull = "minecraft:wither_skull",
    WitherSkullDangerous = "minecraft:wither_skull_dangerous",
    Wolf = "minecraft:wolf",
    XpBottle = "minecraft:xp_bottle",
    XpOrb = "minecraft:xp_orb",
    Zoglin = "minecraft:zoglin",
    Zombie = "minecraft:zombie",
    ZombieHorse = "minecraft:zombie_horse",
    ZombiePigman = "minecraft:zombie_pigman",
    ZombieVillager = "minecraft:zombie_villager",
    ZombieVillagerV2 = "minecraft:zombie_villager_v2"
}
/**
 * Union type equivalent of the MinecraftEntityTypes enum.
 */
type MinecraftEntityTypesUnion = keyof typeof MinecraftEntityTypes;

/**
 * All possible MinecraftFeatureTypes
 */
declare enum MinecraftFeatureTypes {
    AncientCity = "minecraft:ancient_city",
    BastionRemnant = "minecraft:bastion_remnant",
    BuriedTreasure = "minecraft:buried_treasure",
    EndCity = "minecraft:end_city",
    Fortress = "minecraft:fortress",
    Mansion = "minecraft:mansion",
    Mineshaft = "minecraft:mineshaft",
    Monument = "minecraft:monument",
    PillagerOutpost = "minecraft:pillager_outpost",
    RuinedPortal = "minecraft:ruined_portal",
    Ruins = "minecraft:ruins",
    Shipwreck = "minecraft:shipwreck",
    Stronghold = "minecraft:stronghold",
    Temple = "minecraft:temple",
    TrailRuins = "minecraft:trail_ruins",
    TrialChambers = "minecraft:trial_chambers",
    Village = "minecraft:village"
}
/**
 * Union type equivalent of the MinecraftFeatureTypes enum.
 */
type MinecraftFeatureTypesUnion = keyof typeof MinecraftFeatureTypes;

/**
 * All possible MinecraftItemTypes
 */
declare enum MinecraftItemTypes {
    AcaciaBoat = "minecraft:acacia_boat",
    AcaciaButton = "minecraft:acacia_button",
    AcaciaChestBoat = "minecraft:acacia_chest_boat",
    AcaciaDoor = "minecraft:acacia_door",
    AcaciaFence = "minecraft:acacia_fence",
    AcaciaFenceGate = "minecraft:acacia_fence_gate",
    AcaciaHangingSign = "minecraft:acacia_hanging_sign",
    AcaciaLeaves = "minecraft:acacia_leaves",
    AcaciaLog = "minecraft:acacia_log",
    AcaciaPlanks = "minecraft:acacia_planks",
    AcaciaPressurePlate = "minecraft:acacia_pressure_plate",
    AcaciaSapling = "minecraft:acacia_sapling",
    AcaciaShelf = "minecraft:acacia_shelf",
    AcaciaSign = "minecraft:acacia_sign",
    AcaciaSlab = "minecraft:acacia_slab",
    AcaciaStairs = "minecraft:acacia_stairs",
    AcaciaTrapdoor = "minecraft:acacia_trapdoor",
    AcaciaWood = "minecraft:acacia_wood",
    ActivatorRail = "minecraft:activator_rail",
    AllaySpawnEgg = "minecraft:allay_spawn_egg",
    Allium = "minecraft:allium",
    Allow = "minecraft:allow",
    AmethystBlock = "minecraft:amethyst_block",
    AmethystCluster = "minecraft:amethyst_cluster",
    AmethystShard = "minecraft:amethyst_shard",
    AncientDebris = "minecraft:ancient_debris",
    Andesite = "minecraft:andesite",
    AndesiteSlab = "minecraft:andesite_slab",
    AndesiteStairs = "minecraft:andesite_stairs",
    AndesiteWall = "minecraft:andesite_wall",
    AnglerPotterySherd = "minecraft:angler_pottery_sherd",
    Anvil = "minecraft:anvil",
    Apple = "minecraft:apple",
    ArcherPotterySherd = "minecraft:archer_pottery_sherd",
    ArmadilloScute = "minecraft:armadillo_scute",
    ArmadilloSpawnEgg = "minecraft:armadillo_spawn_egg",
    ArmorStand = "minecraft:armor_stand",
    ArmsUpPotterySherd = "minecraft:arms_up_pottery_sherd",
    Arrow = "minecraft:arrow",
    AxolotlBucket = "minecraft:axolotl_bucket",
    AxolotlSpawnEgg = "minecraft:axolotl_spawn_egg",
    Azalea = "minecraft:azalea",
    AzaleaLeaves = "minecraft:azalea_leaves",
    AzaleaLeavesFlowered = "minecraft:azalea_leaves_flowered",
    AzureBluet = "minecraft:azure_bluet",
    BakedPotato = "minecraft:baked_potato",
    Bamboo = "minecraft:bamboo",
    BambooBlock = "minecraft:bamboo_block",
    BambooButton = "minecraft:bamboo_button",
    BambooChestRaft = "minecraft:bamboo_chest_raft",
    BambooDoor = "minecraft:bamboo_door",
    BambooFence = "minecraft:bamboo_fence",
    BambooFenceGate = "minecraft:bamboo_fence_gate",
    BambooHangingSign = "minecraft:bamboo_hanging_sign",
    BambooMosaic = "minecraft:bamboo_mosaic",
    BambooMosaicSlab = "minecraft:bamboo_mosaic_slab",
    BambooMosaicStairs = "minecraft:bamboo_mosaic_stairs",
    BambooPlanks = "minecraft:bamboo_planks",
    BambooPressurePlate = "minecraft:bamboo_pressure_plate",
    BambooRaft = "minecraft:bamboo_raft",
    BambooShelf = "minecraft:bamboo_shelf",
    BambooSign = "minecraft:bamboo_sign",
    BambooSlab = "minecraft:bamboo_slab",
    BambooStairs = "minecraft:bamboo_stairs",
    BambooTrapdoor = "minecraft:bamboo_trapdoor",
    Banner = "minecraft:banner",
    Barrel = "minecraft:barrel",
    Barrier = "minecraft:barrier",
    Basalt = "minecraft:basalt",
    BatSpawnEgg = "minecraft:bat_spawn_egg",
    Beacon = "minecraft:beacon",
    Bed = "minecraft:bed",
    Bedrock = "minecraft:bedrock",
    BeeNest = "minecraft:bee_nest",
    BeeSpawnEgg = "minecraft:bee_spawn_egg",
    Beef = "minecraft:beef",
    Beehive = "minecraft:beehive",
    Beetroot = "minecraft:beetroot",
    BeetrootSeeds = "minecraft:beetroot_seeds",
    BeetrootSoup = "minecraft:beetroot_soup",
    Bell = "minecraft:bell",
    BigDripleaf = "minecraft:big_dripleaf",
    BirchBoat = "minecraft:birch_boat",
    BirchButton = "minecraft:birch_button",
    BirchChestBoat = "minecraft:birch_chest_boat",
    BirchDoor = "minecraft:birch_door",
    BirchFence = "minecraft:birch_fence",
    BirchFenceGate = "minecraft:birch_fence_gate",
    BirchHangingSign = "minecraft:birch_hanging_sign",
    BirchLeaves = "minecraft:birch_leaves",
    BirchLog = "minecraft:birch_log",
    BirchPlanks = "minecraft:birch_planks",
    BirchPressurePlate = "minecraft:birch_pressure_plate",
    BirchSapling = "minecraft:birch_sapling",
    BirchShelf = "minecraft:birch_shelf",
    BirchSign = "minecraft:birch_sign",
    BirchSlab = "minecraft:birch_slab",
    BirchStairs = "minecraft:birch_stairs",
    BirchTrapdoor = "minecraft:birch_trapdoor",
    BirchWood = "minecraft:birch_wood",
    BlackBundle = "minecraft:black_bundle",
    BlackCandle = "minecraft:black_candle",
    BlackCarpet = "minecraft:black_carpet",
    BlackConcrete = "minecraft:black_concrete",
    BlackConcretePowder = "minecraft:black_concrete_powder",
    BlackDye = "minecraft:black_dye",
    BlackGlazedTerracotta = "minecraft:black_glazed_terracotta",
    BlackHarness = "minecraft:black_harness",
    BlackShulkerBox = "minecraft:black_shulker_box",
    BlackStainedGlass = "minecraft:black_stained_glass",
    BlackStainedGlassPane = "minecraft:black_stained_glass_pane",
    BlackTerracotta = "minecraft:black_terracotta",
    BlackWool = "minecraft:black_wool",
    Blackstone = "minecraft:blackstone",
    BlackstoneSlab = "minecraft:blackstone_slab",
    BlackstoneStairs = "minecraft:blackstone_stairs",
    BlackstoneWall = "minecraft:blackstone_wall",
    BladePotterySherd = "minecraft:blade_pottery_sherd",
    BlastFurnace = "minecraft:blast_furnace",
    BlazePowder = "minecraft:blaze_powder",
    BlazeRod = "minecraft:blaze_rod",
    BlazeSpawnEgg = "minecraft:blaze_spawn_egg",
    BlueBundle = "minecraft:blue_bundle",
    BlueCandle = "minecraft:blue_candle",
    BlueCarpet = "minecraft:blue_carpet",
    BlueConcrete = "minecraft:blue_concrete",
    BlueConcretePowder = "minecraft:blue_concrete_powder",
    BlueDye = "minecraft:blue_dye",
    BlueEgg = "minecraft:blue_egg",
    BlueGlazedTerracotta = "minecraft:blue_glazed_terracotta",
    BlueHarness = "minecraft:blue_harness",
    BlueIce = "minecraft:blue_ice",
    BlueOrchid = "minecraft:blue_orchid",
    BlueShulkerBox = "minecraft:blue_shulker_box",
    BlueStainedGlass = "minecraft:blue_stained_glass",
    BlueStainedGlassPane = "minecraft:blue_stained_glass_pane",
    BlueTerracotta = "minecraft:blue_terracotta",
    BlueWool = "minecraft:blue_wool",
    BoggedSpawnEgg = "minecraft:bogged_spawn_egg",
    BoltArmorTrimSmithingTemplate = "minecraft:bolt_armor_trim_smithing_template",
    Bone = "minecraft:bone",
    BoneBlock = "minecraft:bone_block",
    BoneMeal = "minecraft:bone_meal",
    Book = "minecraft:book",
    Bookshelf = "minecraft:bookshelf",
    BorderBlock = "minecraft:border_block",
    BordureIndentedBannerPattern = "minecraft:bordure_indented_banner_pattern",
    Bow = "minecraft:bow",
    Bowl = "minecraft:bowl",
    BrainCoral = "minecraft:brain_coral",
    BrainCoralBlock = "minecraft:brain_coral_block",
    BrainCoralFan = "minecraft:brain_coral_fan",
    Bread = "minecraft:bread",
    BreezeRod = "minecraft:breeze_rod",
    BreezeSpawnEgg = "minecraft:breeze_spawn_egg",
    BrewerPotterySherd = "minecraft:brewer_pottery_sherd",
    BrewingStand = "minecraft:brewing_stand",
    Brick = "minecraft:brick",
    BrickBlock = "minecraft:brick_block",
    BrickSlab = "minecraft:brick_slab",
    BrickStairs = "minecraft:brick_stairs",
    BrickWall = "minecraft:brick_wall",
    BrownBundle = "minecraft:brown_bundle",
    BrownCandle = "minecraft:brown_candle",
    BrownCarpet = "minecraft:brown_carpet",
    BrownConcrete = "minecraft:brown_concrete",
    BrownConcretePowder = "minecraft:brown_concrete_powder",
    BrownDye = "minecraft:brown_dye",
    BrownEgg = "minecraft:brown_egg",
    BrownGlazedTerracotta = "minecraft:brown_glazed_terracotta",
    BrownHarness = "minecraft:brown_harness",
    BrownMushroom = "minecraft:brown_mushroom",
    BrownMushroomBlock = "minecraft:brown_mushroom_block",
    BrownShulkerBox = "minecraft:brown_shulker_box",
    BrownStainedGlass = "minecraft:brown_stained_glass",
    BrownStainedGlassPane = "minecraft:brown_stained_glass_pane",
    BrownTerracotta = "minecraft:brown_terracotta",
    BrownWool = "minecraft:brown_wool",
    Brush = "minecraft:brush",
    BubbleCoral = "minecraft:bubble_coral",
    BubbleCoralBlock = "minecraft:bubble_coral_block",
    BubbleCoralFan = "minecraft:bubble_coral_fan",
    Bucket = "minecraft:bucket",
    BuddingAmethyst = "minecraft:budding_amethyst",
    Bundle = "minecraft:bundle",
    BurnPotterySherd = "minecraft:burn_pottery_sherd",
    Bush = "minecraft:bush",
    Cactus = "minecraft:cactus",
    CactusFlower = "minecraft:cactus_flower",
    Cake = "minecraft:cake",
    Calcite = "minecraft:calcite",
    CalibratedSculkSensor = "minecraft:calibrated_sculk_sensor",
    CamelSpawnEgg = "minecraft:camel_spawn_egg",
    Campfire = "minecraft:campfire",
    Candle = "minecraft:candle",
    Carrot = "minecraft:carrot",
    CarrotOnAStick = "minecraft:carrot_on_a_stick",
    CartographyTable = "minecraft:cartography_table",
    CarvedPumpkin = "minecraft:carved_pumpkin",
    CatSpawnEgg = "minecraft:cat_spawn_egg",
    Cauldron = "minecraft:cauldron",
    CaveSpiderSpawnEgg = "minecraft:cave_spider_spawn_egg",
    ChainCommandBlock = "minecraft:chain_command_block",
    ChainmailBoots = "minecraft:chainmail_boots",
    ChainmailChestplate = "minecraft:chainmail_chestplate",
    ChainmailHelmet = "minecraft:chainmail_helmet",
    ChainmailLeggings = "minecraft:chainmail_leggings",
    Charcoal = "minecraft:charcoal",
    CherryBoat = "minecraft:cherry_boat",
    CherryButton = "minecraft:cherry_button",
    CherryChestBoat = "minecraft:cherry_chest_boat",
    CherryDoor = "minecraft:cherry_door",
    CherryFence = "minecraft:cherry_fence",
    CherryFenceGate = "minecraft:cherry_fence_gate",
    CherryHangingSign = "minecraft:cherry_hanging_sign",
    CherryLeaves = "minecraft:cherry_leaves",
    CherryLog = "minecraft:cherry_log",
    CherryPlanks = "minecraft:cherry_planks",
    CherryPressurePlate = "minecraft:cherry_pressure_plate",
    CherrySapling = "minecraft:cherry_sapling",
    CherryShelf = "minecraft:cherry_shelf",
    CherrySign = "minecraft:cherry_sign",
    CherrySlab = "minecraft:cherry_slab",
    CherryStairs = "minecraft:cherry_stairs",
    CherryTrapdoor = "minecraft:cherry_trapdoor",
    CherryWood = "minecraft:cherry_wood",
    Chest = "minecraft:chest",
    ChestMinecart = "minecraft:chest_minecart",
    Chicken = "minecraft:chicken",
    ChickenSpawnEgg = "minecraft:chicken_spawn_egg",
    ChippedAnvil = "minecraft:chipped_anvil",
    ChiseledBookshelf = "minecraft:chiseled_bookshelf",
    ChiseledCopper = "minecraft:chiseled_copper",
    ChiseledDeepslate = "minecraft:chiseled_deepslate",
    ChiseledNetherBricks = "minecraft:chiseled_nether_bricks",
    ChiseledPolishedBlackstone = "minecraft:chiseled_polished_blackstone",
    ChiseledQuartzBlock = "minecraft:chiseled_quartz_block",
    ChiseledRedSandstone = "minecraft:chiseled_red_sandstone",
    ChiseledResinBricks = "minecraft:chiseled_resin_bricks",
    ChiseledSandstone = "minecraft:chiseled_sandstone",
    ChiseledStoneBricks = "minecraft:chiseled_stone_bricks",
    ChiseledTuff = "minecraft:chiseled_tuff",
    ChiseledTuffBricks = "minecraft:chiseled_tuff_bricks",
    ChorusFlower = "minecraft:chorus_flower",
    ChorusFruit = "minecraft:chorus_fruit",
    ChorusPlant = "minecraft:chorus_plant",
    Clay = "minecraft:clay",
    ClayBall = "minecraft:clay_ball",
    Clock = "minecraft:clock",
    ClosedEyeblossom = "minecraft:closed_eyeblossom",
    Coal = "minecraft:coal",
    CoalBlock = "minecraft:coal_block",
    CoalOre = "minecraft:coal_ore",
    CoarseDirt = "minecraft:coarse_dirt",
    CoastArmorTrimSmithingTemplate = "minecraft:coast_armor_trim_smithing_template",
    CobbledDeepslate = "minecraft:cobbled_deepslate",
    CobbledDeepslateSlab = "minecraft:cobbled_deepslate_slab",
    CobbledDeepslateStairs = "minecraft:cobbled_deepslate_stairs",
    CobbledDeepslateWall = "minecraft:cobbled_deepslate_wall",
    Cobblestone = "minecraft:cobblestone",
    CobblestoneSlab = "minecraft:cobblestone_slab",
    CobblestoneWall = "minecraft:cobblestone_wall",
    CocoaBeans = "minecraft:cocoa_beans",
    Cod = "minecraft:cod",
    CodBucket = "minecraft:cod_bucket",
    CodSpawnEgg = "minecraft:cod_spawn_egg",
    CommandBlock = "minecraft:command_block",
    CommandBlockMinecart = "minecraft:command_block_minecart",
    Comparator = "minecraft:comparator",
    Compass = "minecraft:compass",
    Composter = "minecraft:composter",
    Conduit = "minecraft:conduit",
    CookedBeef = "minecraft:cooked_beef",
    CookedChicken = "minecraft:cooked_chicken",
    CookedCod = "minecraft:cooked_cod",
    CookedMutton = "minecraft:cooked_mutton",
    CookedPorkchop = "minecraft:cooked_porkchop",
    CookedRabbit = "minecraft:cooked_rabbit",
    CookedSalmon = "minecraft:cooked_salmon",
    Cookie = "minecraft:cookie",
    CopperAxe = "minecraft:copper_axe",
    CopperBars = "minecraft:copper_bars",
    CopperBlock = "minecraft:copper_block",
    CopperBoots = "minecraft:copper_boots",
    CopperBulb = "minecraft:copper_bulb",
    CopperChain = "minecraft:copper_chain",
    CopperChest = "minecraft:copper_chest",
    CopperChestplate = "minecraft:copper_chestplate",
    CopperDoor = "minecraft:copper_door",
    CopperGolemSpawnEgg = "minecraft:copper_golem_spawn_egg",
    CopperGolemStatue = "minecraft:copper_golem_statue",
    CopperGrate = "minecraft:copper_grate",
    CopperHelmet = "minecraft:copper_helmet",
    CopperHoe = "minecraft:copper_hoe",
    CopperHorseArmor = "minecraft:copper_horse_armor",
    CopperIngot = "minecraft:copper_ingot",
    CopperLantern = "minecraft:copper_lantern",
    CopperLeggings = "minecraft:copper_leggings",
    CopperNugget = "minecraft:copper_nugget",
    CopperOre = "minecraft:copper_ore",
    CopperPickaxe = "minecraft:copper_pickaxe",
    CopperShovel = "minecraft:copper_shovel",
    CopperSword = "minecraft:copper_sword",
    CopperTorch = "minecraft:copper_torch",
    CopperTrapdoor = "minecraft:copper_trapdoor",
    Cornflower = "minecraft:cornflower",
    CowSpawnEgg = "minecraft:cow_spawn_egg",
    CrackedDeepslateBricks = "minecraft:cracked_deepslate_bricks",
    CrackedDeepslateTiles = "minecraft:cracked_deepslate_tiles",
    CrackedNetherBricks = "minecraft:cracked_nether_bricks",
    CrackedPolishedBlackstoneBricks = "minecraft:cracked_polished_blackstone_bricks",
    CrackedStoneBricks = "minecraft:cracked_stone_bricks",
    Crafter = "minecraft:crafter",
    CraftingTable = "minecraft:crafting_table",
    CreakingHeart = "minecraft:creaking_heart",
    CreakingSpawnEgg = "minecraft:creaking_spawn_egg",
    CreeperBannerPattern = "minecraft:creeper_banner_pattern",
    CreeperHead = "minecraft:creeper_head",
    CreeperSpawnEgg = "minecraft:creeper_spawn_egg",
    CrimsonButton = "minecraft:crimson_button",
    CrimsonDoor = "minecraft:crimson_door",
    CrimsonFence = "minecraft:crimson_fence",
    CrimsonFenceGate = "minecraft:crimson_fence_gate",
    CrimsonFungus = "minecraft:crimson_fungus",
    CrimsonHangingSign = "minecraft:crimson_hanging_sign",
    CrimsonHyphae = "minecraft:crimson_hyphae",
    CrimsonNylium = "minecraft:crimson_nylium",
    CrimsonPlanks = "minecraft:crimson_planks",
    CrimsonPressurePlate = "minecraft:crimson_pressure_plate",
    CrimsonRoots = "minecraft:crimson_roots",
    CrimsonShelf = "minecraft:crimson_shelf",
    CrimsonSign = "minecraft:crimson_sign",
    CrimsonSlab = "minecraft:crimson_slab",
    CrimsonStairs = "minecraft:crimson_stairs",
    CrimsonStem = "minecraft:crimson_stem",
    CrimsonTrapdoor = "minecraft:crimson_trapdoor",
    Crossbow = "minecraft:crossbow",
    CryingObsidian = "minecraft:crying_obsidian",
    CutCopper = "minecraft:cut_copper",
    CutCopperSlab = "minecraft:cut_copper_slab",
    CutCopperStairs = "minecraft:cut_copper_stairs",
    CutRedSandstone = "minecraft:cut_red_sandstone",
    CutRedSandstoneSlab = "minecraft:cut_red_sandstone_slab",
    CutSandstone = "minecraft:cut_sandstone",
    CutSandstoneSlab = "minecraft:cut_sandstone_slab",
    CyanBundle = "minecraft:cyan_bundle",
    CyanCandle = "minecraft:cyan_candle",
    CyanCarpet = "minecraft:cyan_carpet",
    CyanConcrete = "minecraft:cyan_concrete",
    CyanConcretePowder = "minecraft:cyan_concrete_powder",
    CyanDye = "minecraft:cyan_dye",
    CyanGlazedTerracotta = "minecraft:cyan_glazed_terracotta",
    CyanHarness = "minecraft:cyan_harness",
    CyanShulkerBox = "minecraft:cyan_shulker_box",
    CyanStainedGlass = "minecraft:cyan_stained_glass",
    CyanStainedGlassPane = "minecraft:cyan_stained_glass_pane",
    CyanTerracotta = "minecraft:cyan_terracotta",
    CyanWool = "minecraft:cyan_wool",
    DamagedAnvil = "minecraft:damaged_anvil",
    Dandelion = "minecraft:dandelion",
    DangerPotterySherd = "minecraft:danger_pottery_sherd",
    DarkOakBoat = "minecraft:dark_oak_boat",
    DarkOakButton = "minecraft:dark_oak_button",
    DarkOakChestBoat = "minecraft:dark_oak_chest_boat",
    DarkOakDoor = "minecraft:dark_oak_door",
    DarkOakFence = "minecraft:dark_oak_fence",
    DarkOakFenceGate = "minecraft:dark_oak_fence_gate",
    DarkOakHangingSign = "minecraft:dark_oak_hanging_sign",
    DarkOakLeaves = "minecraft:dark_oak_leaves",
    DarkOakLog = "minecraft:dark_oak_log",
    DarkOakPlanks = "minecraft:dark_oak_planks",
    DarkOakPressurePlate = "minecraft:dark_oak_pressure_plate",
    DarkOakSapling = "minecraft:dark_oak_sapling",
    DarkOakShelf = "minecraft:dark_oak_shelf",
    DarkOakSign = "minecraft:dark_oak_sign",
    DarkOakSlab = "minecraft:dark_oak_slab",
    DarkOakStairs = "minecraft:dark_oak_stairs",
    DarkOakTrapdoor = "minecraft:dark_oak_trapdoor",
    DarkOakWood = "minecraft:dark_oak_wood",
    DarkPrismarine = "minecraft:dark_prismarine",
    DarkPrismarineSlab = "minecraft:dark_prismarine_slab",
    DarkPrismarineStairs = "minecraft:dark_prismarine_stairs",
    DaylightDetector = "minecraft:daylight_detector",
    DeadBrainCoral = "minecraft:dead_brain_coral",
    DeadBrainCoralBlock = "minecraft:dead_brain_coral_block",
    DeadBrainCoralFan = "minecraft:dead_brain_coral_fan",
    DeadBubbleCoral = "minecraft:dead_bubble_coral",
    DeadBubbleCoralBlock = "minecraft:dead_bubble_coral_block",
    DeadBubbleCoralFan = "minecraft:dead_bubble_coral_fan",
    DeadFireCoral = "minecraft:dead_fire_coral",
    DeadFireCoralBlock = "minecraft:dead_fire_coral_block",
    DeadFireCoralFan = "minecraft:dead_fire_coral_fan",
    DeadHornCoral = "minecraft:dead_horn_coral",
    DeadHornCoralBlock = "minecraft:dead_horn_coral_block",
    DeadHornCoralFan = "minecraft:dead_horn_coral_fan",
    DeadTubeCoral = "minecraft:dead_tube_coral",
    DeadTubeCoralBlock = "minecraft:dead_tube_coral_block",
    DeadTubeCoralFan = "minecraft:dead_tube_coral_fan",
    Deadbush = "minecraft:deadbush",
    DecoratedPot = "minecraft:decorated_pot",
    Deepslate = "minecraft:deepslate",
    DeepslateBrickSlab = "minecraft:deepslate_brick_slab",
    DeepslateBrickStairs = "minecraft:deepslate_brick_stairs",
    DeepslateBrickWall = "minecraft:deepslate_brick_wall",
    DeepslateBricks = "minecraft:deepslate_bricks",
    DeepslateCoalOre = "minecraft:deepslate_coal_ore",
    DeepslateCopperOre = "minecraft:deepslate_copper_ore",
    DeepslateDiamondOre = "minecraft:deepslate_diamond_ore",
    DeepslateEmeraldOre = "minecraft:deepslate_emerald_ore",
    DeepslateGoldOre = "minecraft:deepslate_gold_ore",
    DeepslateIronOre = "minecraft:deepslate_iron_ore",
    DeepslateLapisOre = "minecraft:deepslate_lapis_ore",
    DeepslateRedstoneOre = "minecraft:deepslate_redstone_ore",
    DeepslateTileSlab = "minecraft:deepslate_tile_slab",
    DeepslateTileStairs = "minecraft:deepslate_tile_stairs",
    DeepslateTileWall = "minecraft:deepslate_tile_wall",
    DeepslateTiles = "minecraft:deepslate_tiles",
    Deny = "minecraft:deny",
    DetectorRail = "minecraft:detector_rail",
    Diamond = "minecraft:diamond",
    DiamondAxe = "minecraft:diamond_axe",
    DiamondBlock = "minecraft:diamond_block",
    DiamondBoots = "minecraft:diamond_boots",
    DiamondChestplate = "minecraft:diamond_chestplate",
    DiamondHelmet = "minecraft:diamond_helmet",
    DiamondHoe = "minecraft:diamond_hoe",
    DiamondHorseArmor = "minecraft:diamond_horse_armor",
    DiamondLeggings = "minecraft:diamond_leggings",
    DiamondOre = "minecraft:diamond_ore",
    DiamondPickaxe = "minecraft:diamond_pickaxe",
    DiamondShovel = "minecraft:diamond_shovel",
    DiamondSword = "minecraft:diamond_sword",
    Diorite = "minecraft:diorite",
    DioriteSlab = "minecraft:diorite_slab",
    DioriteStairs = "minecraft:diorite_stairs",
    DioriteWall = "minecraft:diorite_wall",
    Dirt = "minecraft:dirt",
    DirtWithRoots = "minecraft:dirt_with_roots",
    DiscFragment5 = "minecraft:disc_fragment_5",
    Dispenser = "minecraft:dispenser",
    DolphinSpawnEgg = "minecraft:dolphin_spawn_egg",
    DonkeySpawnEgg = "minecraft:donkey_spawn_egg",
    DragonBreath = "minecraft:dragon_breath",
    DragonEgg = "minecraft:dragon_egg",
    DragonHead = "minecraft:dragon_head",
    DriedGhast = "minecraft:dried_ghast",
    DriedKelp = "minecraft:dried_kelp",
    DriedKelpBlock = "minecraft:dried_kelp_block",
    DripstoneBlock = "minecraft:dripstone_block",
    Dropper = "minecraft:dropper",
    DrownedSpawnEgg = "minecraft:drowned_spawn_egg",
    DuneArmorTrimSmithingTemplate = "minecraft:dune_armor_trim_smithing_template",
    EchoShard = "minecraft:echo_shard",
    Egg = "minecraft:egg",
    ElderGuardianSpawnEgg = "minecraft:elder_guardian_spawn_egg",
    Elytra = "minecraft:elytra",
    Emerald = "minecraft:emerald",
    EmeraldBlock = "minecraft:emerald_block",
    EmeraldOre = "minecraft:emerald_ore",
    EmptyMap = "minecraft:empty_map",
    EnchantedBook = "minecraft:enchanted_book",
    EnchantedGoldenApple = "minecraft:enchanted_golden_apple",
    EnchantingTable = "minecraft:enchanting_table",
    EndBrickStairs = "minecraft:end_brick_stairs",
    EndBricks = "minecraft:end_bricks",
    EndCrystal = "minecraft:end_crystal",
    EndPortalFrame = "minecraft:end_portal_frame",
    EndRod = "minecraft:end_rod",
    EndStone = "minecraft:end_stone",
    EndStoneBrickSlab = "minecraft:end_stone_brick_slab",
    EndStoneBrickWall = "minecraft:end_stone_brick_wall",
    EnderChest = "minecraft:ender_chest",
    EnderDragonSpawnEgg = "minecraft:ender_dragon_spawn_egg",
    EnderEye = "minecraft:ender_eye",
    EnderPearl = "minecraft:ender_pearl",
    EndermanSpawnEgg = "minecraft:enderman_spawn_egg",
    EndermiteSpawnEgg = "minecraft:endermite_spawn_egg",
    EvokerSpawnEgg = "minecraft:evoker_spawn_egg",
    ExperienceBottle = "minecraft:experience_bottle",
    ExplorerPotterySherd = "minecraft:explorer_pottery_sherd",
    ExposedChiseledCopper = "minecraft:exposed_chiseled_copper",
    ExposedCopper = "minecraft:exposed_copper",
    ExposedCopperBars = "minecraft:exposed_copper_bars",
    ExposedCopperBulb = "minecraft:exposed_copper_bulb",
    ExposedCopperChain = "minecraft:exposed_copper_chain",
    ExposedCopperChest = "minecraft:exposed_copper_chest",
    ExposedCopperDoor = "minecraft:exposed_copper_door",
    ExposedCopperGolemStatue = "minecraft:exposed_copper_golem_statue",
    ExposedCopperGrate = "minecraft:exposed_copper_grate",
    ExposedCopperLantern = "minecraft:exposed_copper_lantern",
    ExposedCopperTrapdoor = "minecraft:exposed_copper_trapdoor",
    ExposedCutCopper = "minecraft:exposed_cut_copper",
    ExposedCutCopperSlab = "minecraft:exposed_cut_copper_slab",
    ExposedCutCopperStairs = "minecraft:exposed_cut_copper_stairs",
    ExposedLightningRod = "minecraft:exposed_lightning_rod",
    EyeArmorTrimSmithingTemplate = "minecraft:eye_armor_trim_smithing_template",
    Farmland = "minecraft:farmland",
    Feather = "minecraft:feather",
    FenceGate = "minecraft:fence_gate",
    FermentedSpiderEye = "minecraft:fermented_spider_eye",
    Fern = "minecraft:fern",
    FieldMasonedBannerPattern = "minecraft:field_masoned_banner_pattern",
    FilledMap = "minecraft:filled_map",
    FireCharge = "minecraft:fire_charge",
    FireCoral = "minecraft:fire_coral",
    FireCoralBlock = "minecraft:fire_coral_block",
    FireCoralFan = "minecraft:fire_coral_fan",
    FireflyBush = "minecraft:firefly_bush",
    FireworkRocket = "minecraft:firework_rocket",
    FireworkStar = "minecraft:firework_star",
    FishingRod = "minecraft:fishing_rod",
    FletchingTable = "minecraft:fletching_table",
    Flint = "minecraft:flint",
    FlintAndSteel = "minecraft:flint_and_steel",
    FlowArmorTrimSmithingTemplate = "minecraft:flow_armor_trim_smithing_template",
    FlowBannerPattern = "minecraft:flow_banner_pattern",
    FlowPotterySherd = "minecraft:flow_pottery_sherd",
    FlowerBannerPattern = "minecraft:flower_banner_pattern",
    FlowerPot = "minecraft:flower_pot",
    FloweringAzalea = "minecraft:flowering_azalea",
    FoxSpawnEgg = "minecraft:fox_spawn_egg",
    Frame = "minecraft:frame",
    FriendPotterySherd = "minecraft:friend_pottery_sherd",
    FrogSpawn = "minecraft:frog_spawn",
    FrogSpawnEgg = "minecraft:frog_spawn_egg",
    FrostedIce = "minecraft:frosted_ice",
    Furnace = "minecraft:furnace",
    GhastSpawnEgg = "minecraft:ghast_spawn_egg",
    GhastTear = "minecraft:ghast_tear",
    GildedBlackstone = "minecraft:gilded_blackstone",
    Glass = "minecraft:glass",
    GlassBottle = "minecraft:glass_bottle",
    GlassPane = "minecraft:glass_pane",
    GlisteringMelonSlice = "minecraft:glistering_melon_slice",
    GlobeBannerPattern = "minecraft:globe_banner_pattern",
    GlowBerries = "minecraft:glow_berries",
    GlowFrame = "minecraft:glow_frame",
    GlowInkSac = "minecraft:glow_ink_sac",
    GlowLichen = "minecraft:glow_lichen",
    GlowSquidSpawnEgg = "minecraft:glow_squid_spawn_egg",
    Glowstone = "minecraft:glowstone",
    GlowstoneDust = "minecraft:glowstone_dust",
    GoatHorn = "minecraft:goat_horn",
    GoatSpawnEgg = "minecraft:goat_spawn_egg",
    GoldBlock = "minecraft:gold_block",
    GoldIngot = "minecraft:gold_ingot",
    GoldNugget = "minecraft:gold_nugget",
    GoldOre = "minecraft:gold_ore",
    GoldenApple = "minecraft:golden_apple",
    GoldenAxe = "minecraft:golden_axe",
    GoldenBoots = "minecraft:golden_boots",
    GoldenCarrot = "minecraft:golden_carrot",
    GoldenChestplate = "minecraft:golden_chestplate",
    GoldenHelmet = "minecraft:golden_helmet",
    GoldenHoe = "minecraft:golden_hoe",
    GoldenHorseArmor = "minecraft:golden_horse_armor",
    GoldenLeggings = "minecraft:golden_leggings",
    GoldenPickaxe = "minecraft:golden_pickaxe",
    GoldenRail = "minecraft:golden_rail",
    GoldenShovel = "minecraft:golden_shovel",
    GoldenSword = "minecraft:golden_sword",
    Granite = "minecraft:granite",
    GraniteSlab = "minecraft:granite_slab",
    GraniteStairs = "minecraft:granite_stairs",
    GraniteWall = "minecraft:granite_wall",
    GrassBlock = "minecraft:grass_block",
    GrassPath = "minecraft:grass_path",
    Gravel = "minecraft:gravel",
    GrayBundle = "minecraft:gray_bundle",
    GrayCandle = "minecraft:gray_candle",
    GrayCarpet = "minecraft:gray_carpet",
    GrayConcrete = "minecraft:gray_concrete",
    GrayConcretePowder = "minecraft:gray_concrete_powder",
    GrayDye = "minecraft:gray_dye",
    GrayGlazedTerracotta = "minecraft:gray_glazed_terracotta",
    GrayHarness = "minecraft:gray_harness",
    GrayShulkerBox = "minecraft:gray_shulker_box",
    GrayStainedGlass = "minecraft:gray_stained_glass",
    GrayStainedGlassPane = "minecraft:gray_stained_glass_pane",
    GrayTerracotta = "minecraft:gray_terracotta",
    GrayWool = "minecraft:gray_wool",
    GreenBundle = "minecraft:green_bundle",
    GreenCandle = "minecraft:green_candle",
    GreenCarpet = "minecraft:green_carpet",
    GreenConcrete = "minecraft:green_concrete",
    GreenConcretePowder = "minecraft:green_concrete_powder",
    GreenDye = "minecraft:green_dye",
    GreenGlazedTerracotta = "minecraft:green_glazed_terracotta",
    GreenHarness = "minecraft:green_harness",
    GreenShulkerBox = "minecraft:green_shulker_box",
    GreenStainedGlass = "minecraft:green_stained_glass",
    GreenStainedGlassPane = "minecraft:green_stained_glass_pane",
    GreenTerracotta = "minecraft:green_terracotta",
    GreenWool = "minecraft:green_wool",
    Grindstone = "minecraft:grindstone",
    GuardianSpawnEgg = "minecraft:guardian_spawn_egg",
    Gunpowder = "minecraft:gunpowder",
    GusterBannerPattern = "minecraft:guster_banner_pattern",
    GusterPotterySherd = "minecraft:guster_pottery_sherd",
    HangingRoots = "minecraft:hanging_roots",
    HappyGhastSpawnEgg = "minecraft:happy_ghast_spawn_egg",
    HardenedClay = "minecraft:hardened_clay",
    HayBlock = "minecraft:hay_block",
    HeartOfTheSea = "minecraft:heart_of_the_sea",
    HeartPotterySherd = "minecraft:heart_pottery_sherd",
    HeartbreakPotterySherd = "minecraft:heartbreak_pottery_sherd",
    HeavyCore = "minecraft:heavy_core",
    HeavyWeightedPressurePlate = "minecraft:heavy_weighted_pressure_plate",
    HoglinSpawnEgg = "minecraft:hoglin_spawn_egg",
    HoneyBlock = "minecraft:honey_block",
    HoneyBottle = "minecraft:honey_bottle",
    Honeycomb = "minecraft:honeycomb",
    HoneycombBlock = "minecraft:honeycomb_block",
    Hopper = "minecraft:hopper",
    HopperMinecart = "minecraft:hopper_minecart",
    HornCoral = "minecraft:horn_coral",
    HornCoralBlock = "minecraft:horn_coral_block",
    HornCoralFan = "minecraft:horn_coral_fan",
    HorseSpawnEgg = "minecraft:horse_spawn_egg",
    HostArmorTrimSmithingTemplate = "minecraft:host_armor_trim_smithing_template",
    HowlPotterySherd = "minecraft:howl_pottery_sherd",
    HuskSpawnEgg = "minecraft:husk_spawn_egg",
    Ice = "minecraft:ice",
    InfestedChiseledStoneBricks = "minecraft:infested_chiseled_stone_bricks",
    InfestedCobblestone = "minecraft:infested_cobblestone",
    InfestedCrackedStoneBricks = "minecraft:infested_cracked_stone_bricks",
    InfestedDeepslate = "minecraft:infested_deepslate",
    InfestedMossyStoneBricks = "minecraft:infested_mossy_stone_bricks",
    InfestedStone = "minecraft:infested_stone",
    InfestedStoneBricks = "minecraft:infested_stone_bricks",
    InkSac = "minecraft:ink_sac",
    IronAxe = "minecraft:iron_axe",
    IronBars = "minecraft:iron_bars",
    IronBlock = "minecraft:iron_block",
    IronBoots = "minecraft:iron_boots",
    IronChain = "minecraft:iron_chain",
    IronChestplate = "minecraft:iron_chestplate",
    IronDoor = "minecraft:iron_door",
    IronGolemSpawnEgg = "minecraft:iron_golem_spawn_egg",
    IronHelmet = "minecraft:iron_helmet",
    IronHoe = "minecraft:iron_hoe",
    IronHorseArmor = "minecraft:iron_horse_armor",
    IronIngot = "minecraft:iron_ingot",
    IronLeggings = "minecraft:iron_leggings",
    IronNugget = "minecraft:iron_nugget",
    IronOre = "minecraft:iron_ore",
    IronPickaxe = "minecraft:iron_pickaxe",
    IronShovel = "minecraft:iron_shovel",
    IronSword = "minecraft:iron_sword",
    IronTrapdoor = "minecraft:iron_trapdoor",
    Jigsaw = "minecraft:jigsaw",
    Jukebox = "minecraft:jukebox",
    JungleBoat = "minecraft:jungle_boat",
    JungleButton = "minecraft:jungle_button",
    JungleChestBoat = "minecraft:jungle_chest_boat",
    JungleDoor = "minecraft:jungle_door",
    JungleFence = "minecraft:jungle_fence",
    JungleFenceGate = "minecraft:jungle_fence_gate",
    JungleHangingSign = "minecraft:jungle_hanging_sign",
    JungleLeaves = "minecraft:jungle_leaves",
    JungleLog = "minecraft:jungle_log",
    JunglePlanks = "minecraft:jungle_planks",
    JunglePressurePlate = "minecraft:jungle_pressure_plate",
    JungleSapling = "minecraft:jungle_sapling",
    JungleShelf = "minecraft:jungle_shelf",
    JungleSign = "minecraft:jungle_sign",
    JungleSlab = "minecraft:jungle_slab",
    JungleStairs = "minecraft:jungle_stairs",
    JungleTrapdoor = "minecraft:jungle_trapdoor",
    JungleWood = "minecraft:jungle_wood",
    Kelp = "minecraft:kelp",
    Ladder = "minecraft:ladder",
    Lantern = "minecraft:lantern",
    LapisBlock = "minecraft:lapis_block",
    LapisLazuli = "minecraft:lapis_lazuli",
    LapisOre = "minecraft:lapis_ore",
    LargeAmethystBud = "minecraft:large_amethyst_bud",
    LargeFern = "minecraft:large_fern",
    LavaBucket = "minecraft:lava_bucket",
    Lead = "minecraft:lead",
    LeafLitter = "minecraft:leaf_litter",
    Leather = "minecraft:leather",
    LeatherBoots = "minecraft:leather_boots",
    LeatherChestplate = "minecraft:leather_chestplate",
    LeatherHelmet = "minecraft:leather_helmet",
    LeatherHorseArmor = "minecraft:leather_horse_armor",
    LeatherLeggings = "minecraft:leather_leggings",
    Lectern = "minecraft:lectern",
    Lever = "minecraft:lever",
    LightBlock0 = "minecraft:light_block_0",
    LightBlock1 = "minecraft:light_block_1",
    LightBlock10 = "minecraft:light_block_10",
    LightBlock11 = "minecraft:light_block_11",
    LightBlock12 = "minecraft:light_block_12",
    LightBlock13 = "minecraft:light_block_13",
    LightBlock14 = "minecraft:light_block_14",
    LightBlock15 = "minecraft:light_block_15",
    LightBlock2 = "minecraft:light_block_2",
    LightBlock3 = "minecraft:light_block_3",
    LightBlock4 = "minecraft:light_block_4",
    LightBlock5 = "minecraft:light_block_5",
    LightBlock6 = "minecraft:light_block_6",
    LightBlock7 = "minecraft:light_block_7",
    LightBlock8 = "minecraft:light_block_8",
    LightBlock9 = "minecraft:light_block_9",
    LightBlueBundle = "minecraft:light_blue_bundle",
    LightBlueCandle = "minecraft:light_blue_candle",
    LightBlueCarpet = "minecraft:light_blue_carpet",
    LightBlueConcrete = "minecraft:light_blue_concrete",
    LightBlueConcretePowder = "minecraft:light_blue_concrete_powder",
    LightBlueDye = "minecraft:light_blue_dye",
    LightBlueGlazedTerracotta = "minecraft:light_blue_glazed_terracotta",
    LightBlueHarness = "minecraft:light_blue_harness",
    LightBlueShulkerBox = "minecraft:light_blue_shulker_box",
    LightBlueStainedGlass = "minecraft:light_blue_stained_glass",
    LightBlueStainedGlassPane = "minecraft:light_blue_stained_glass_pane",
    LightBlueTerracotta = "minecraft:light_blue_terracotta",
    LightBlueWool = "minecraft:light_blue_wool",
    LightGrayBundle = "minecraft:light_gray_bundle",
    LightGrayCandle = "minecraft:light_gray_candle",
    LightGrayCarpet = "minecraft:light_gray_carpet",
    LightGrayConcrete = "minecraft:light_gray_concrete",
    LightGrayConcretePowder = "minecraft:light_gray_concrete_powder",
    LightGrayDye = "minecraft:light_gray_dye",
    LightGrayHarness = "minecraft:light_gray_harness",
    LightGrayShulkerBox = "minecraft:light_gray_shulker_box",
    LightGrayStainedGlass = "minecraft:light_gray_stained_glass",
    LightGrayStainedGlassPane = "minecraft:light_gray_stained_glass_pane",
    LightGrayTerracotta = "minecraft:light_gray_terracotta",
    LightGrayWool = "minecraft:light_gray_wool",
    LightWeightedPressurePlate = "minecraft:light_weighted_pressure_plate",
    LightningRod = "minecraft:lightning_rod",
    Lilac = "minecraft:lilac",
    LilyOfTheValley = "minecraft:lily_of_the_valley",
    LimeBundle = "minecraft:lime_bundle",
    LimeCandle = "minecraft:lime_candle",
    LimeCarpet = "minecraft:lime_carpet",
    LimeConcrete = "minecraft:lime_concrete",
    LimeConcretePowder = "minecraft:lime_concrete_powder",
    LimeDye = "minecraft:lime_dye",
    LimeGlazedTerracotta = "minecraft:lime_glazed_terracotta",
    LimeHarness = "minecraft:lime_harness",
    LimeShulkerBox = "minecraft:lime_shulker_box",
    LimeStainedGlass = "minecraft:lime_stained_glass",
    LimeStainedGlassPane = "minecraft:lime_stained_glass_pane",
    LimeTerracotta = "minecraft:lime_terracotta",
    LimeWool = "minecraft:lime_wool",
    LingeringPotion = "minecraft:lingering_potion",
    LitPumpkin = "minecraft:lit_pumpkin",
    LlamaSpawnEgg = "minecraft:llama_spawn_egg",
    Lodestone = "minecraft:lodestone",
    LodestoneCompass = "minecraft:lodestone_compass",
    Loom = "minecraft:loom",
    Mace = "minecraft:mace",
    MagentaBundle = "minecraft:magenta_bundle",
    MagentaCandle = "minecraft:magenta_candle",
    MagentaCarpet = "minecraft:magenta_carpet",
    MagentaConcrete = "minecraft:magenta_concrete",
    MagentaConcretePowder = "minecraft:magenta_concrete_powder",
    MagentaDye = "minecraft:magenta_dye",
    MagentaGlazedTerracotta = "minecraft:magenta_glazed_terracotta",
    MagentaHarness = "minecraft:magenta_harness",
    MagentaShulkerBox = "minecraft:magenta_shulker_box",
    MagentaStainedGlass = "minecraft:magenta_stained_glass",
    MagentaStainedGlassPane = "minecraft:magenta_stained_glass_pane",
    MagentaTerracotta = "minecraft:magenta_terracotta",
    MagentaWool = "minecraft:magenta_wool",
    Magma = "minecraft:magma",
    MagmaCream = "minecraft:magma_cream",
    MagmaCubeSpawnEgg = "minecraft:magma_cube_spawn_egg",
    MangroveBoat = "minecraft:mangrove_boat",
    MangroveButton = "minecraft:mangrove_button",
    MangroveChestBoat = "minecraft:mangrove_chest_boat",
    MangroveDoor = "minecraft:mangrove_door",
    MangroveFence = "minecraft:mangrove_fence",
    MangroveFenceGate = "minecraft:mangrove_fence_gate",
    MangroveHangingSign = "minecraft:mangrove_hanging_sign",
    MangroveLeaves = "minecraft:mangrove_leaves",
    MangroveLog = "minecraft:mangrove_log",
    MangrovePlanks = "minecraft:mangrove_planks",
    MangrovePressurePlate = "minecraft:mangrove_pressure_plate",
    MangrovePropagule = "minecraft:mangrove_propagule",
    MangroveRoots = "minecraft:mangrove_roots",
    MangroveShelf = "minecraft:mangrove_shelf",
    MangroveSign = "minecraft:mangrove_sign",
    MangroveSlab = "minecraft:mangrove_slab",
    MangroveStairs = "minecraft:mangrove_stairs",
    MangroveTrapdoor = "minecraft:mangrove_trapdoor",
    MangroveWood = "minecraft:mangrove_wood",
    MediumAmethystBud = "minecraft:medium_amethyst_bud",
    MelonBlock = "minecraft:melon_block",
    MelonSeeds = "minecraft:melon_seeds",
    MelonSlice = "minecraft:melon_slice",
    MilkBucket = "minecraft:milk_bucket",
    Minecart = "minecraft:minecart",
    MinerPotterySherd = "minecraft:miner_pottery_sherd",
    MobSpawner = "minecraft:mob_spawner",
    MojangBannerPattern = "minecraft:mojang_banner_pattern",
    MooshroomSpawnEgg = "minecraft:mooshroom_spawn_egg",
    MossBlock = "minecraft:moss_block",
    MossCarpet = "minecraft:moss_carpet",
    MossyCobblestone = "minecraft:mossy_cobblestone",
    MossyCobblestoneSlab = "minecraft:mossy_cobblestone_slab",
    MossyCobblestoneStairs = "minecraft:mossy_cobblestone_stairs",
    MossyCobblestoneWall = "minecraft:mossy_cobblestone_wall",
    MossyStoneBrickSlab = "minecraft:mossy_stone_brick_slab",
    MossyStoneBrickStairs = "minecraft:mossy_stone_brick_stairs",
    MossyStoneBrickWall = "minecraft:mossy_stone_brick_wall",
    MossyStoneBricks = "minecraft:mossy_stone_bricks",
    MournerPotterySherd = "minecraft:mourner_pottery_sherd",
    Mud = "minecraft:mud",
    MudBrickSlab = "minecraft:mud_brick_slab",
    MudBrickStairs = "minecraft:mud_brick_stairs",
    MudBrickWall = "minecraft:mud_brick_wall",
    MudBricks = "minecraft:mud_bricks",
    MuddyMangroveRoots = "minecraft:muddy_mangrove_roots",
    MuleSpawnEgg = "minecraft:mule_spawn_egg",
    MushroomStem = "minecraft:mushroom_stem",
    MushroomStew = "minecraft:mushroom_stew",
    MusicDisc11 = "minecraft:music_disc_11",
    MusicDisc13 = "minecraft:music_disc_13",
    MusicDisc5 = "minecraft:music_disc_5",
    MusicDiscBlocks = "minecraft:music_disc_blocks",
    MusicDiscCat = "minecraft:music_disc_cat",
    MusicDiscChirp = "minecraft:music_disc_chirp",
    MusicDiscCreator = "minecraft:music_disc_creator",
    MusicDiscCreatorMusicBox = "minecraft:music_disc_creator_music_box",
    MusicDiscFar = "minecraft:music_disc_far",
    MusicDiscLavaChicken = "minecraft:music_disc_lava_chicken",
    MusicDiscMall = "minecraft:music_disc_mall",
    MusicDiscMellohi = "minecraft:music_disc_mellohi",
    MusicDiscOtherside = "minecraft:music_disc_otherside",
    MusicDiscPigstep = "minecraft:music_disc_pigstep",
    MusicDiscPrecipice = "minecraft:music_disc_precipice",
    MusicDiscRelic = "minecraft:music_disc_relic",
    MusicDiscStal = "minecraft:music_disc_stal",
    MusicDiscStrad = "minecraft:music_disc_strad",
    MusicDiscTears = "minecraft:music_disc_tears",
    MusicDiscWait = "minecraft:music_disc_wait",
    MusicDiscWard = "minecraft:music_disc_ward",
    Mutton = "minecraft:mutton",
    Mycelium = "minecraft:mycelium",
    NameTag = "minecraft:name_tag",
    NautilusShell = "minecraft:nautilus_shell",
    NetherBrick = "minecraft:nether_brick",
    NetherBrickFence = "minecraft:nether_brick_fence",
    NetherBrickSlab = "minecraft:nether_brick_slab",
    NetherBrickStairs = "minecraft:nether_brick_stairs",
    NetherBrickWall = "minecraft:nether_brick_wall",
    NetherGoldOre = "minecraft:nether_gold_ore",
    NetherSprouts = "minecraft:nether_sprouts",
    NetherStar = "minecraft:nether_star",
    NetherWart = "minecraft:nether_wart",
    NetherWartBlock = "minecraft:nether_wart_block",
    Netherbrick = "minecraft:netherbrick",
    NetheriteAxe = "minecraft:netherite_axe",
    NetheriteBlock = "minecraft:netherite_block",
    NetheriteBoots = "minecraft:netherite_boots",
    NetheriteChestplate = "minecraft:netherite_chestplate",
    NetheriteHelmet = "minecraft:netherite_helmet",
    NetheriteHoe = "minecraft:netherite_hoe",
    NetheriteIngot = "minecraft:netherite_ingot",
    NetheriteLeggings = "minecraft:netherite_leggings",
    NetheritePickaxe = "minecraft:netherite_pickaxe",
    NetheriteScrap = "minecraft:netherite_scrap",
    NetheriteShovel = "minecraft:netherite_shovel",
    NetheriteSword = "minecraft:netherite_sword",
    NetheriteUpgradeSmithingTemplate = "minecraft:netherite_upgrade_smithing_template",
    Netherrack = "minecraft:netherrack",
    NormalStoneSlab = "minecraft:normal_stone_slab",
    NormalStoneStairs = "minecraft:normal_stone_stairs",
    Noteblock = "minecraft:noteblock",
    OakBoat = "minecraft:oak_boat",
    OakChestBoat = "minecraft:oak_chest_boat",
    OakFence = "minecraft:oak_fence",
    OakHangingSign = "minecraft:oak_hanging_sign",
    OakLeaves = "minecraft:oak_leaves",
    OakLog = "minecraft:oak_log",
    OakPlanks = "minecraft:oak_planks",
    OakSapling = "minecraft:oak_sapling",
    OakShelf = "minecraft:oak_shelf",
    OakSign = "minecraft:oak_sign",
    OakSlab = "minecraft:oak_slab",
    OakStairs = "minecraft:oak_stairs",
    OakWood = "minecraft:oak_wood",
    Observer = "minecraft:observer",
    Obsidian = "minecraft:obsidian",
    OcelotSpawnEgg = "minecraft:ocelot_spawn_egg",
    OchreFroglight = "minecraft:ochre_froglight",
    OminousBottle = "minecraft:ominous_bottle",
    OminousTrialKey = "minecraft:ominous_trial_key",
    OpenEyeblossom = "minecraft:open_eyeblossom",
    OrangeBundle = "minecraft:orange_bundle",
    OrangeCandle = "minecraft:orange_candle",
    OrangeCarpet = "minecraft:orange_carpet",
    OrangeConcrete = "minecraft:orange_concrete",
    OrangeConcretePowder = "minecraft:orange_concrete_powder",
    OrangeDye = "minecraft:orange_dye",
    OrangeGlazedTerracotta = "minecraft:orange_glazed_terracotta",
    OrangeHarness = "minecraft:orange_harness",
    OrangeShulkerBox = "minecraft:orange_shulker_box",
    OrangeStainedGlass = "minecraft:orange_stained_glass",
    OrangeStainedGlassPane = "minecraft:orange_stained_glass_pane",
    OrangeTerracotta = "minecraft:orange_terracotta",
    OrangeTulip = "minecraft:orange_tulip",
    OrangeWool = "minecraft:orange_wool",
    OxeyeDaisy = "minecraft:oxeye_daisy",
    OxidizedChiseledCopper = "minecraft:oxidized_chiseled_copper",
    OxidizedCopper = "minecraft:oxidized_copper",
    OxidizedCopperBars = "minecraft:oxidized_copper_bars",
    OxidizedCopperBulb = "minecraft:oxidized_copper_bulb",
    OxidizedCopperChain = "minecraft:oxidized_copper_chain",
    OxidizedCopperChest = "minecraft:oxidized_copper_chest",
    OxidizedCopperDoor = "minecraft:oxidized_copper_door",
    OxidizedCopperGolemStatue = "minecraft:oxidized_copper_golem_statue",
    OxidizedCopperGrate = "minecraft:oxidized_copper_grate",
    OxidizedCopperLantern = "minecraft:oxidized_copper_lantern",
    OxidizedCopperTrapdoor = "minecraft:oxidized_copper_trapdoor",
    OxidizedCutCopper = "minecraft:oxidized_cut_copper",
    OxidizedCutCopperSlab = "minecraft:oxidized_cut_copper_slab",
    OxidizedCutCopperStairs = "minecraft:oxidized_cut_copper_stairs",
    OxidizedLightningRod = "minecraft:oxidized_lightning_rod",
    PackedIce = "minecraft:packed_ice",
    PackedMud = "minecraft:packed_mud",
    Painting = "minecraft:painting",
    PaleHangingMoss = "minecraft:pale_hanging_moss",
    PaleMossBlock = "minecraft:pale_moss_block",
    PaleMossCarpet = "minecraft:pale_moss_carpet",
    PaleOakBoat = "minecraft:pale_oak_boat",
    PaleOakButton = "minecraft:pale_oak_button",
    PaleOakChestBoat = "minecraft:pale_oak_chest_boat",
    PaleOakDoor = "minecraft:pale_oak_door",
    PaleOakFence = "minecraft:pale_oak_fence",
    PaleOakFenceGate = "minecraft:pale_oak_fence_gate",
    PaleOakHangingSign = "minecraft:pale_oak_hanging_sign",
    PaleOakLeaves = "minecraft:pale_oak_leaves",
    PaleOakLog = "minecraft:pale_oak_log",
    PaleOakPlanks = "minecraft:pale_oak_planks",
    PaleOakPressurePlate = "minecraft:pale_oak_pressure_plate",
    PaleOakSapling = "minecraft:pale_oak_sapling",
    PaleOakShelf = "minecraft:pale_oak_shelf",
    PaleOakSign = "minecraft:pale_oak_sign",
    PaleOakSlab = "minecraft:pale_oak_slab",
    PaleOakStairs = "minecraft:pale_oak_stairs",
    PaleOakTrapdoor = "minecraft:pale_oak_trapdoor",
    PaleOakWood = "minecraft:pale_oak_wood",
    PandaSpawnEgg = "minecraft:panda_spawn_egg",
    Paper = "minecraft:paper",
    ParrotSpawnEgg = "minecraft:parrot_spawn_egg",
    PearlescentFroglight = "minecraft:pearlescent_froglight",
    Peony = "minecraft:peony",
    PetrifiedOakSlab = "minecraft:petrified_oak_slab",
    PhantomMembrane = "minecraft:phantom_membrane",
    PhantomSpawnEgg = "minecraft:phantom_spawn_egg",
    PigSpawnEgg = "minecraft:pig_spawn_egg",
    PiglinBannerPattern = "minecraft:piglin_banner_pattern",
    PiglinBruteSpawnEgg = "minecraft:piglin_brute_spawn_egg",
    PiglinHead = "minecraft:piglin_head",
    PiglinSpawnEgg = "minecraft:piglin_spawn_egg",
    PillagerSpawnEgg = "minecraft:pillager_spawn_egg",
    PinkBundle = "minecraft:pink_bundle",
    PinkCandle = "minecraft:pink_candle",
    PinkCarpet = "minecraft:pink_carpet",
    PinkConcrete = "minecraft:pink_concrete",
    PinkConcretePowder = "minecraft:pink_concrete_powder",
    PinkDye = "minecraft:pink_dye",
    PinkGlazedTerracotta = "minecraft:pink_glazed_terracotta",
    PinkHarness = "minecraft:pink_harness",
    PinkPetals = "minecraft:pink_petals",
    PinkShulkerBox = "minecraft:pink_shulker_box",
    PinkStainedGlass = "minecraft:pink_stained_glass",
    PinkStainedGlassPane = "minecraft:pink_stained_glass_pane",
    PinkTerracotta = "minecraft:pink_terracotta",
    PinkTulip = "minecraft:pink_tulip",
    PinkWool = "minecraft:pink_wool",
    Piston = "minecraft:piston",
    PitcherPlant = "minecraft:pitcher_plant",
    PitcherPod = "minecraft:pitcher_pod",
    PlayerHead = "minecraft:player_head",
    PlentyPotterySherd = "minecraft:plenty_pottery_sherd",
    Podzol = "minecraft:podzol",
    PointedDripstone = "minecraft:pointed_dripstone",
    PoisonousPotato = "minecraft:poisonous_potato",
    PolarBearSpawnEgg = "minecraft:polar_bear_spawn_egg",
    PolishedAndesite = "minecraft:polished_andesite",
    PolishedAndesiteSlab = "minecraft:polished_andesite_slab",
    PolishedAndesiteStairs = "minecraft:polished_andesite_stairs",
    PolishedBasalt = "minecraft:polished_basalt",
    PolishedBlackstone = "minecraft:polished_blackstone",
    PolishedBlackstoneBrickSlab = "minecraft:polished_blackstone_brick_slab",
    PolishedBlackstoneBrickStairs = "minecraft:polished_blackstone_brick_stairs",
    PolishedBlackstoneBrickWall = "minecraft:polished_blackstone_brick_wall",
    PolishedBlackstoneBricks = "minecraft:polished_blackstone_bricks",
    PolishedBlackstoneButton = "minecraft:polished_blackstone_button",
    PolishedBlackstonePressurePlate = "minecraft:polished_blackstone_pressure_plate",
    PolishedBlackstoneSlab = "minecraft:polished_blackstone_slab",
    PolishedBlackstoneStairs = "minecraft:polished_blackstone_stairs",
    PolishedBlackstoneWall = "minecraft:polished_blackstone_wall",
    PolishedDeepslate = "minecraft:polished_deepslate",
    PolishedDeepslateSlab = "minecraft:polished_deepslate_slab",
    PolishedDeepslateStairs = "minecraft:polished_deepslate_stairs",
    PolishedDeepslateWall = "minecraft:polished_deepslate_wall",
    PolishedDiorite = "minecraft:polished_diorite",
    PolishedDioriteSlab = "minecraft:polished_diorite_slab",
    PolishedDioriteStairs = "minecraft:polished_diorite_stairs",
    PolishedGranite = "minecraft:polished_granite",
    PolishedGraniteSlab = "minecraft:polished_granite_slab",
    PolishedGraniteStairs = "minecraft:polished_granite_stairs",
    PolishedTuff = "minecraft:polished_tuff",
    PolishedTuffSlab = "minecraft:polished_tuff_slab",
    PolishedTuffStairs = "minecraft:polished_tuff_stairs",
    PolishedTuffWall = "minecraft:polished_tuff_wall",
    PoppedChorusFruit = "minecraft:popped_chorus_fruit",
    Poppy = "minecraft:poppy",
    Porkchop = "minecraft:porkchop",
    Potato = "minecraft:potato",
    Potion = "minecraft:potion",
    PowderSnowBucket = "minecraft:powder_snow_bucket",
    Prismarine = "minecraft:prismarine",
    PrismarineBrickSlab = "minecraft:prismarine_brick_slab",
    PrismarineBricks = "minecraft:prismarine_bricks",
    PrismarineBricksStairs = "minecraft:prismarine_bricks_stairs",
    PrismarineCrystals = "minecraft:prismarine_crystals",
    PrismarineShard = "minecraft:prismarine_shard",
    PrismarineSlab = "minecraft:prismarine_slab",
    PrismarineStairs = "minecraft:prismarine_stairs",
    PrismarineWall = "minecraft:prismarine_wall",
    PrizePotterySherd = "minecraft:prize_pottery_sherd",
    Pufferfish = "minecraft:pufferfish",
    PufferfishBucket = "minecraft:pufferfish_bucket",
    PufferfishSpawnEgg = "minecraft:pufferfish_spawn_egg",
    Pumpkin = "minecraft:pumpkin",
    PumpkinPie = "minecraft:pumpkin_pie",
    PumpkinSeeds = "minecraft:pumpkin_seeds",
    PurpleBundle = "minecraft:purple_bundle",
    PurpleCandle = "minecraft:purple_candle",
    PurpleCarpet = "minecraft:purple_carpet",
    PurpleConcrete = "minecraft:purple_concrete",
    PurpleConcretePowder = "minecraft:purple_concrete_powder",
    PurpleDye = "minecraft:purple_dye",
    PurpleGlazedTerracotta = "minecraft:purple_glazed_terracotta",
    PurpleHarness = "minecraft:purple_harness",
    PurpleShulkerBox = "minecraft:purple_shulker_box",
    PurpleStainedGlass = "minecraft:purple_stained_glass",
    PurpleStainedGlassPane = "minecraft:purple_stained_glass_pane",
    PurpleTerracotta = "minecraft:purple_terracotta",
    PurpleWool = "minecraft:purple_wool",
    PurpurBlock = "minecraft:purpur_block",
    PurpurPillar = "minecraft:purpur_pillar",
    PurpurSlab = "minecraft:purpur_slab",
    PurpurStairs = "minecraft:purpur_stairs",
    Quartz = "minecraft:quartz",
    QuartzBlock = "minecraft:quartz_block",
    QuartzBricks = "minecraft:quartz_bricks",
    QuartzOre = "minecraft:quartz_ore",
    QuartzPillar = "minecraft:quartz_pillar",
    QuartzSlab = "minecraft:quartz_slab",
    QuartzStairs = "minecraft:quartz_stairs",
    Rabbit = "minecraft:rabbit",
    RabbitFoot = "minecraft:rabbit_foot",
    RabbitHide = "minecraft:rabbit_hide",
    RabbitSpawnEgg = "minecraft:rabbit_spawn_egg",
    RabbitStew = "minecraft:rabbit_stew",
    Rail = "minecraft:rail",
    RaiserArmorTrimSmithingTemplate = "minecraft:raiser_armor_trim_smithing_template",
    RavagerSpawnEgg = "minecraft:ravager_spawn_egg",
    RawCopper = "minecraft:raw_copper",
    RawCopperBlock = "minecraft:raw_copper_block",
    RawGold = "minecraft:raw_gold",
    RawGoldBlock = "minecraft:raw_gold_block",
    RawIron = "minecraft:raw_iron",
    RawIronBlock = "minecraft:raw_iron_block",
    RecoveryCompass = "minecraft:recovery_compass",
    RedBundle = "minecraft:red_bundle",
    RedCandle = "minecraft:red_candle",
    RedCarpet = "minecraft:red_carpet",
    RedConcrete = "minecraft:red_concrete",
    RedConcretePowder = "minecraft:red_concrete_powder",
    RedDye = "minecraft:red_dye",
    RedGlazedTerracotta = "minecraft:red_glazed_terracotta",
    RedHarness = "minecraft:red_harness",
    RedMushroom = "minecraft:red_mushroom",
    RedMushroomBlock = "minecraft:red_mushroom_block",
    RedNetherBrick = "minecraft:red_nether_brick",
    RedNetherBrickSlab = "minecraft:red_nether_brick_slab",
    RedNetherBrickStairs = "minecraft:red_nether_brick_stairs",
    RedNetherBrickWall = "minecraft:red_nether_brick_wall",
    RedSand = "minecraft:red_sand",
    RedSandstone = "minecraft:red_sandstone",
    RedSandstoneSlab = "minecraft:red_sandstone_slab",
    RedSandstoneStairs = "minecraft:red_sandstone_stairs",
    RedSandstoneWall = "minecraft:red_sandstone_wall",
    RedShulkerBox = "minecraft:red_shulker_box",
    RedStainedGlass = "minecraft:red_stained_glass",
    RedStainedGlassPane = "minecraft:red_stained_glass_pane",
    RedTerracotta = "minecraft:red_terracotta",
    RedTulip = "minecraft:red_tulip",
    RedWool = "minecraft:red_wool",
    Redstone = "minecraft:redstone",
    RedstoneBlock = "minecraft:redstone_block",
    RedstoneLamp = "minecraft:redstone_lamp",
    RedstoneOre = "minecraft:redstone_ore",
    RedstoneTorch = "minecraft:redstone_torch",
    ReinforcedDeepslate = "minecraft:reinforced_deepslate",
    Repeater = "minecraft:repeater",
    RepeatingCommandBlock = "minecraft:repeating_command_block",
    ResinBlock = "minecraft:resin_block",
    ResinBrick = "minecraft:resin_brick",
    ResinBrickSlab = "minecraft:resin_brick_slab",
    ResinBrickStairs = "minecraft:resin_brick_stairs",
    ResinBrickWall = "minecraft:resin_brick_wall",
    ResinBricks = "minecraft:resin_bricks",
    ResinClump = "minecraft:resin_clump",
    RespawnAnchor = "minecraft:respawn_anchor",
    RibArmorTrimSmithingTemplate = "minecraft:rib_armor_trim_smithing_template",
    RoseBush = "minecraft:rose_bush",
    RottenFlesh = "minecraft:rotten_flesh",
    Saddle = "minecraft:saddle",
    Salmon = "minecraft:salmon",
    SalmonBucket = "minecraft:salmon_bucket",
    SalmonSpawnEgg = "minecraft:salmon_spawn_egg",
    Sand = "minecraft:sand",
    Sandstone = "minecraft:sandstone",
    SandstoneSlab = "minecraft:sandstone_slab",
    SandstoneStairs = "minecraft:sandstone_stairs",
    SandstoneWall = "minecraft:sandstone_wall",
    Scaffolding = "minecraft:scaffolding",
    ScrapePotterySherd = "minecraft:scrape_pottery_sherd",
    Sculk = "minecraft:sculk",
    SculkCatalyst = "minecraft:sculk_catalyst",
    SculkSensor = "minecraft:sculk_sensor",
    SculkShrieker = "minecraft:sculk_shrieker",
    SculkVein = "minecraft:sculk_vein",
    SeaLantern = "minecraft:sea_lantern",
    SeaPickle = "minecraft:sea_pickle",
    Seagrass = "minecraft:seagrass",
    SentryArmorTrimSmithingTemplate = "minecraft:sentry_armor_trim_smithing_template",
    ShaperArmorTrimSmithingTemplate = "minecraft:shaper_armor_trim_smithing_template",
    SheafPotterySherd = "minecraft:sheaf_pottery_sherd",
    Shears = "minecraft:shears",
    SheepSpawnEgg = "minecraft:sheep_spawn_egg",
    ShelterPotterySherd = "minecraft:shelter_pottery_sherd",
    Shield = "minecraft:shield",
    ShortDryGrass = "minecraft:short_dry_grass",
    ShortGrass = "minecraft:short_grass",
    Shroomlight = "minecraft:shroomlight",
    ShulkerShell = "minecraft:shulker_shell",
    ShulkerSpawnEgg = "minecraft:shulker_spawn_egg",
    SilenceArmorTrimSmithingTemplate = "minecraft:silence_armor_trim_smithing_template",
    SilverGlazedTerracotta = "minecraft:silver_glazed_terracotta",
    SilverfishSpawnEgg = "minecraft:silverfish_spawn_egg",
    SkeletonHorseSpawnEgg = "minecraft:skeleton_horse_spawn_egg",
    SkeletonSkull = "minecraft:skeleton_skull",
    SkeletonSpawnEgg = "minecraft:skeleton_spawn_egg",
    SkullBannerPattern = "minecraft:skull_banner_pattern",
    SkullPotterySherd = "minecraft:skull_pottery_sherd",
    Slime = "minecraft:slime",
    SlimeBall = "minecraft:slime_ball",
    SlimeSpawnEgg = "minecraft:slime_spawn_egg",
    SmallAmethystBud = "minecraft:small_amethyst_bud",
    SmallDripleafBlock = "minecraft:small_dripleaf_block",
    SmithingTable = "minecraft:smithing_table",
    Smoker = "minecraft:smoker",
    SmoothBasalt = "minecraft:smooth_basalt",
    SmoothQuartz = "minecraft:smooth_quartz",
    SmoothQuartzSlab = "minecraft:smooth_quartz_slab",
    SmoothQuartzStairs = "minecraft:smooth_quartz_stairs",
    SmoothRedSandstone = "minecraft:smooth_red_sandstone",
    SmoothRedSandstoneSlab = "minecraft:smooth_red_sandstone_slab",
    SmoothRedSandstoneStairs = "minecraft:smooth_red_sandstone_stairs",
    SmoothSandstone = "minecraft:smooth_sandstone",
    SmoothSandstoneSlab = "minecraft:smooth_sandstone_slab",
    SmoothSandstoneStairs = "minecraft:smooth_sandstone_stairs",
    SmoothStone = "minecraft:smooth_stone",
    SmoothStoneSlab = "minecraft:smooth_stone_slab",
    SnifferEgg = "minecraft:sniffer_egg",
    SnifferSpawnEgg = "minecraft:sniffer_spawn_egg",
    SnortPotterySherd = "minecraft:snort_pottery_sherd",
    SnoutArmorTrimSmithingTemplate = "minecraft:snout_armor_trim_smithing_template",
    Snow = "minecraft:snow",
    SnowGolemSpawnEgg = "minecraft:snow_golem_spawn_egg",
    SnowLayer = "minecraft:snow_layer",
    Snowball = "minecraft:snowball",
    SoulCampfire = "minecraft:soul_campfire",
    SoulLantern = "minecraft:soul_lantern",
    SoulSand = "minecraft:soul_sand",
    SoulSoil = "minecraft:soul_soil",
    SoulTorch = "minecraft:soul_torch",
    SpiderEye = "minecraft:spider_eye",
    SpiderSpawnEgg = "minecraft:spider_spawn_egg",
    SpireArmorTrimSmithingTemplate = "minecraft:spire_armor_trim_smithing_template",
    SplashPotion = "minecraft:splash_potion",
    Sponge = "minecraft:sponge",
    SporeBlossom = "minecraft:spore_blossom",
    SpruceBoat = "minecraft:spruce_boat",
    SpruceButton = "minecraft:spruce_button",
    SpruceChestBoat = "minecraft:spruce_chest_boat",
    SpruceDoor = "minecraft:spruce_door",
    SpruceFence = "minecraft:spruce_fence",
    SpruceFenceGate = "minecraft:spruce_fence_gate",
    SpruceHangingSign = "minecraft:spruce_hanging_sign",
    SpruceLeaves = "minecraft:spruce_leaves",
    SpruceLog = "minecraft:spruce_log",
    SprucePlanks = "minecraft:spruce_planks",
    SprucePressurePlate = "minecraft:spruce_pressure_plate",
    SpruceSapling = "minecraft:spruce_sapling",
    SpruceShelf = "minecraft:spruce_shelf",
    SpruceSign = "minecraft:spruce_sign",
    SpruceSlab = "minecraft:spruce_slab",
    SpruceStairs = "minecraft:spruce_stairs",
    SpruceTrapdoor = "minecraft:spruce_trapdoor",
    SpruceWood = "minecraft:spruce_wood",
    Spyglass = "minecraft:spyglass",
    SquidSpawnEgg = "minecraft:squid_spawn_egg",
    Stick = "minecraft:stick",
    StickyPiston = "minecraft:sticky_piston",
    Stone = "minecraft:stone",
    StoneAxe = "minecraft:stone_axe",
    StoneBrickSlab = "minecraft:stone_brick_slab",
    StoneBrickStairs = "minecraft:stone_brick_stairs",
    StoneBrickWall = "minecraft:stone_brick_wall",
    StoneBricks = "minecraft:stone_bricks",
    StoneButton = "minecraft:stone_button",
    StoneHoe = "minecraft:stone_hoe",
    StonePickaxe = "minecraft:stone_pickaxe",
    StonePressurePlate = "minecraft:stone_pressure_plate",
    StoneShovel = "minecraft:stone_shovel",
    StoneStairs = "minecraft:stone_stairs",
    StoneSword = "minecraft:stone_sword",
    StonecutterBlock = "minecraft:stonecutter_block",
    StraySpawnEgg = "minecraft:stray_spawn_egg",
    StriderSpawnEgg = "minecraft:strider_spawn_egg",
    String = "minecraft:string",
    StrippedAcaciaLog = "minecraft:stripped_acacia_log",
    StrippedAcaciaWood = "minecraft:stripped_acacia_wood",
    StrippedBambooBlock = "minecraft:stripped_bamboo_block",
    StrippedBirchLog = "minecraft:stripped_birch_log",
    StrippedBirchWood = "minecraft:stripped_birch_wood",
    StrippedCherryLog = "minecraft:stripped_cherry_log",
    StrippedCherryWood = "minecraft:stripped_cherry_wood",
    StrippedCrimsonHyphae = "minecraft:stripped_crimson_hyphae",
    StrippedCrimsonStem = "minecraft:stripped_crimson_stem",
    StrippedDarkOakLog = "minecraft:stripped_dark_oak_log",
    StrippedDarkOakWood = "minecraft:stripped_dark_oak_wood",
    StrippedJungleLog = "minecraft:stripped_jungle_log",
    StrippedJungleWood = "minecraft:stripped_jungle_wood",
    StrippedMangroveLog = "minecraft:stripped_mangrove_log",
    StrippedMangroveWood = "minecraft:stripped_mangrove_wood",
    StrippedOakLog = "minecraft:stripped_oak_log",
    StrippedOakWood = "minecraft:stripped_oak_wood",
    StrippedPaleOakLog = "minecraft:stripped_pale_oak_log",
    StrippedPaleOakWood = "minecraft:stripped_pale_oak_wood",
    StrippedSpruceLog = "minecraft:stripped_spruce_log",
    StrippedSpruceWood = "minecraft:stripped_spruce_wood",
    StrippedWarpedHyphae = "minecraft:stripped_warped_hyphae",
    StrippedWarpedStem = "minecraft:stripped_warped_stem",
    StructureBlock = "minecraft:structure_block",
    StructureVoid = "minecraft:structure_void",
    Sugar = "minecraft:sugar",
    SugarCane = "minecraft:sugar_cane",
    Sunflower = "minecraft:sunflower",
    SuspiciousGravel = "minecraft:suspicious_gravel",
    SuspiciousSand = "minecraft:suspicious_sand",
    SuspiciousStew = "minecraft:suspicious_stew",
    SweetBerries = "minecraft:sweet_berries",
    TadpoleBucket = "minecraft:tadpole_bucket",
    TadpoleSpawnEgg = "minecraft:tadpole_spawn_egg",
    TallDryGrass = "minecraft:tall_dry_grass",
    TallGrass = "minecraft:tall_grass",
    Target = "minecraft:target",
    TideArmorTrimSmithingTemplate = "minecraft:tide_armor_trim_smithing_template",
    TintedGlass = "minecraft:tinted_glass",
    Tnt = "minecraft:tnt",
    TntMinecart = "minecraft:tnt_minecart",
    Torch = "minecraft:torch",
    Torchflower = "minecraft:torchflower",
    TorchflowerSeeds = "minecraft:torchflower_seeds",
    TotemOfUndying = "minecraft:totem_of_undying",
    TraderLlamaSpawnEgg = "minecraft:trader_llama_spawn_egg",
    Trapdoor = "minecraft:trapdoor",
    TrappedChest = "minecraft:trapped_chest",
    TrialKey = "minecraft:trial_key",
    TrialSpawner = "minecraft:trial_spawner",
    Trident = "minecraft:trident",
    TripwireHook = "minecraft:tripwire_hook",
    TropicalFish = "minecraft:tropical_fish",
    TropicalFishBucket = "minecraft:tropical_fish_bucket",
    TropicalFishSpawnEgg = "minecraft:tropical_fish_spawn_egg",
    TubeCoral = "minecraft:tube_coral",
    TubeCoralBlock = "minecraft:tube_coral_block",
    TubeCoralFan = "minecraft:tube_coral_fan",
    Tuff = "minecraft:tuff",
    TuffBrickSlab = "minecraft:tuff_brick_slab",
    TuffBrickStairs = "minecraft:tuff_brick_stairs",
    TuffBrickWall = "minecraft:tuff_brick_wall",
    TuffBricks = "minecraft:tuff_bricks",
    TuffSlab = "minecraft:tuff_slab",
    TuffStairs = "minecraft:tuff_stairs",
    TuffWall = "minecraft:tuff_wall",
    TurtleEgg = "minecraft:turtle_egg",
    TurtleHelmet = "minecraft:turtle_helmet",
    TurtleScute = "minecraft:turtle_scute",
    TurtleSpawnEgg = "minecraft:turtle_spawn_egg",
    TwistingVines = "minecraft:twisting_vines",
    UndyedShulkerBox = "minecraft:undyed_shulker_box",
    Vault = "minecraft:vault",
    VerdantFroglight = "minecraft:verdant_froglight",
    VexArmorTrimSmithingTemplate = "minecraft:vex_armor_trim_smithing_template",
    VexSpawnEgg = "minecraft:vex_spawn_egg",
    VillagerSpawnEgg = "minecraft:villager_spawn_egg",
    VindicatorSpawnEgg = "minecraft:vindicator_spawn_egg",
    Vine = "minecraft:vine",
    WanderingTraderSpawnEgg = "minecraft:wandering_trader_spawn_egg",
    WardArmorTrimSmithingTemplate = "minecraft:ward_armor_trim_smithing_template",
    WardenSpawnEgg = "minecraft:warden_spawn_egg",
    WarpedButton = "minecraft:warped_button",
    WarpedDoor = "minecraft:warped_door",
    WarpedFence = "minecraft:warped_fence",
    WarpedFenceGate = "minecraft:warped_fence_gate",
    WarpedFungus = "minecraft:warped_fungus",
    WarpedFungusOnAStick = "minecraft:warped_fungus_on_a_stick",
    WarpedHangingSign = "minecraft:warped_hanging_sign",
    WarpedHyphae = "minecraft:warped_hyphae",
    WarpedNylium = "minecraft:warped_nylium",
    WarpedPlanks = "minecraft:warped_planks",
    WarpedPressurePlate = "minecraft:warped_pressure_plate",
    WarpedRoots = "minecraft:warped_roots",
    WarpedShelf = "minecraft:warped_shelf",
    WarpedSign = "minecraft:warped_sign",
    WarpedSlab = "minecraft:warped_slab",
    WarpedStairs = "minecraft:warped_stairs",
    WarpedStem = "minecraft:warped_stem",
    WarpedTrapdoor = "minecraft:warped_trapdoor",
    WarpedWartBlock = "minecraft:warped_wart_block",
    WaterBucket = "minecraft:water_bucket",
    Waterlily = "minecraft:waterlily",
    WaxedChiseledCopper = "minecraft:waxed_chiseled_copper",
    WaxedCopper = "minecraft:waxed_copper",
    WaxedCopperBars = "minecraft:waxed_copper_bars",
    WaxedCopperBulb = "minecraft:waxed_copper_bulb",
    WaxedCopperChain = "minecraft:waxed_copper_chain",
    WaxedCopperChest = "minecraft:waxed_copper_chest",
    WaxedCopperDoor = "minecraft:waxed_copper_door",
    WaxedCopperGolemStatue = "minecraft:waxed_copper_golem_statue",
    WaxedCopperGrate = "minecraft:waxed_copper_grate",
    WaxedCopperLantern = "minecraft:waxed_copper_lantern",
    WaxedCopperTrapdoor = "minecraft:waxed_copper_trapdoor",
    WaxedCutCopper = "minecraft:waxed_cut_copper",
    WaxedCutCopperSlab = "minecraft:waxed_cut_copper_slab",
    WaxedCutCopperStairs = "minecraft:waxed_cut_copper_stairs",
    WaxedExposedChiseledCopper = "minecraft:waxed_exposed_chiseled_copper",
    WaxedExposedCopper = "minecraft:waxed_exposed_copper",
    WaxedExposedCopperBars = "minecraft:waxed_exposed_copper_bars",
    WaxedExposedCopperBulb = "minecraft:waxed_exposed_copper_bulb",
    WaxedExposedCopperChain = "minecraft:waxed_exposed_copper_chain",
    WaxedExposedCopperChest = "minecraft:waxed_exposed_copper_chest",
    WaxedExposedCopperDoor = "minecraft:waxed_exposed_copper_door",
    WaxedExposedCopperGolemStatue = "minecraft:waxed_exposed_copper_golem_statue",
    WaxedExposedCopperGrate = "minecraft:waxed_exposed_copper_grate",
    WaxedExposedCopperLantern = "minecraft:waxed_exposed_copper_lantern",
    WaxedExposedCopperTrapdoor = "minecraft:waxed_exposed_copper_trapdoor",
    WaxedExposedCutCopper = "minecraft:waxed_exposed_cut_copper",
    WaxedExposedCutCopperSlab = "minecraft:waxed_exposed_cut_copper_slab",
    WaxedExposedCutCopperStairs = "minecraft:waxed_exposed_cut_copper_stairs",
    WaxedExposedLightningRod = "minecraft:waxed_exposed_lightning_rod",
    WaxedLightningRod = "minecraft:waxed_lightning_rod",
    WaxedOxidizedChiseledCopper = "minecraft:waxed_oxidized_chiseled_copper",
    WaxedOxidizedCopper = "minecraft:waxed_oxidized_copper",
    WaxedOxidizedCopperBars = "minecraft:waxed_oxidized_copper_bars",
    WaxedOxidizedCopperBulb = "minecraft:waxed_oxidized_copper_bulb",
    WaxedOxidizedCopperChain = "minecraft:waxed_oxidized_copper_chain",
    WaxedOxidizedCopperChest = "minecraft:waxed_oxidized_copper_chest",
    WaxedOxidizedCopperDoor = "minecraft:waxed_oxidized_copper_door",
    WaxedOxidizedCopperGolemStatue = "minecraft:waxed_oxidized_copper_golem_statue",
    WaxedOxidizedCopperGrate = "minecraft:waxed_oxidized_copper_grate",
    WaxedOxidizedCopperLantern = "minecraft:waxed_oxidized_copper_lantern",
    WaxedOxidizedCopperTrapdoor = "minecraft:waxed_oxidized_copper_trapdoor",
    WaxedOxidizedCutCopper = "minecraft:waxed_oxidized_cut_copper",
    WaxedOxidizedCutCopperSlab = "minecraft:waxed_oxidized_cut_copper_slab",
    WaxedOxidizedCutCopperStairs = "minecraft:waxed_oxidized_cut_copper_stairs",
    WaxedOxidizedLightningRod = "minecraft:waxed_oxidized_lightning_rod",
    WaxedWeatheredChiseledCopper = "minecraft:waxed_weathered_chiseled_copper",
    WaxedWeatheredCopper = "minecraft:waxed_weathered_copper",
    WaxedWeatheredCopperBars = "minecraft:waxed_weathered_copper_bars",
    WaxedWeatheredCopperBulb = "minecraft:waxed_weathered_copper_bulb",
    WaxedWeatheredCopperChain = "minecraft:waxed_weathered_copper_chain",
    WaxedWeatheredCopperChest = "minecraft:waxed_weathered_copper_chest",
    WaxedWeatheredCopperDoor = "minecraft:waxed_weathered_copper_door",
    WaxedWeatheredCopperGolemStatue = "minecraft:waxed_weathered_copper_golem_statue",
    WaxedWeatheredCopperGrate = "minecraft:waxed_weathered_copper_grate",
    WaxedWeatheredCopperLantern = "minecraft:waxed_weathered_copper_lantern",
    WaxedWeatheredCopperTrapdoor = "minecraft:waxed_weathered_copper_trapdoor",
    WaxedWeatheredCutCopper = "minecraft:waxed_weathered_cut_copper",
    WaxedWeatheredCutCopperSlab = "minecraft:waxed_weathered_cut_copper_slab",
    WaxedWeatheredCutCopperStairs = "minecraft:waxed_weathered_cut_copper_stairs",
    WaxedWeatheredLightningRod = "minecraft:waxed_weathered_lightning_rod",
    WayfinderArmorTrimSmithingTemplate = "minecraft:wayfinder_armor_trim_smithing_template",
    WeatheredChiseledCopper = "minecraft:weathered_chiseled_copper",
    WeatheredCopper = "minecraft:weathered_copper",
    WeatheredCopperBars = "minecraft:weathered_copper_bars",
    WeatheredCopperBulb = "minecraft:weathered_copper_bulb",
    WeatheredCopperChain = "minecraft:weathered_copper_chain",
    WeatheredCopperChest = "minecraft:weathered_copper_chest",
    WeatheredCopperDoor = "minecraft:weathered_copper_door",
    WeatheredCopperGolemStatue = "minecraft:weathered_copper_golem_statue",
    WeatheredCopperGrate = "minecraft:weathered_copper_grate",
    WeatheredCopperLantern = "minecraft:weathered_copper_lantern",
    WeatheredCopperTrapdoor = "minecraft:weathered_copper_trapdoor",
    WeatheredCutCopper = "minecraft:weathered_cut_copper",
    WeatheredCutCopperSlab = "minecraft:weathered_cut_copper_slab",
    WeatheredCutCopperStairs = "minecraft:weathered_cut_copper_stairs",
    WeatheredLightningRod = "minecraft:weathered_lightning_rod",
    Web = "minecraft:web",
    WeepingVines = "minecraft:weeping_vines",
    WetSponge = "minecraft:wet_sponge",
    Wheat = "minecraft:wheat",
    WheatSeeds = "minecraft:wheat_seeds",
    WhiteBundle = "minecraft:white_bundle",
    WhiteCandle = "minecraft:white_candle",
    WhiteCarpet = "minecraft:white_carpet",
    WhiteConcrete = "minecraft:white_concrete",
    WhiteConcretePowder = "minecraft:white_concrete_powder",
    WhiteDye = "minecraft:white_dye",
    WhiteGlazedTerracotta = "minecraft:white_glazed_terracotta",
    WhiteHarness = "minecraft:white_harness",
    WhiteShulkerBox = "minecraft:white_shulker_box",
    WhiteStainedGlass = "minecraft:white_stained_glass",
    WhiteStainedGlassPane = "minecraft:white_stained_glass_pane",
    WhiteTerracotta = "minecraft:white_terracotta",
    WhiteTulip = "minecraft:white_tulip",
    WhiteWool = "minecraft:white_wool",
    WildArmorTrimSmithingTemplate = "minecraft:wild_armor_trim_smithing_template",
    Wildflowers = "minecraft:wildflowers",
    WindCharge = "minecraft:wind_charge",
    WitchSpawnEgg = "minecraft:witch_spawn_egg",
    WitherRose = "minecraft:wither_rose",
    WitherSkeletonSkull = "minecraft:wither_skeleton_skull",
    WitherSkeletonSpawnEgg = "minecraft:wither_skeleton_spawn_egg",
    WitherSpawnEgg = "minecraft:wither_spawn_egg",
    WolfArmor = "minecraft:wolf_armor",
    WolfSpawnEgg = "minecraft:wolf_spawn_egg",
    WoodenAxe = "minecraft:wooden_axe",
    WoodenButton = "minecraft:wooden_button",
    WoodenDoor = "minecraft:wooden_door",
    WoodenHoe = "minecraft:wooden_hoe",
    WoodenPickaxe = "minecraft:wooden_pickaxe",
    WoodenPressurePlate = "minecraft:wooden_pressure_plate",
    WoodenShovel = "minecraft:wooden_shovel",
    WoodenSword = "minecraft:wooden_sword",
    WritableBook = "minecraft:writable_book",
    YellowBundle = "minecraft:yellow_bundle",
    YellowCandle = "minecraft:yellow_candle",
    YellowCarpet = "minecraft:yellow_carpet",
    YellowConcrete = "minecraft:yellow_concrete",
    YellowConcretePowder = "minecraft:yellow_concrete_powder",
    YellowDye = "minecraft:yellow_dye",
    YellowGlazedTerracotta = "minecraft:yellow_glazed_terracotta",
    YellowHarness = "minecraft:yellow_harness",
    YellowShulkerBox = "minecraft:yellow_shulker_box",
    YellowStainedGlass = "minecraft:yellow_stained_glass",
    YellowStainedGlassPane = "minecraft:yellow_stained_glass_pane",
    YellowTerracotta = "minecraft:yellow_terracotta",
    YellowWool = "minecraft:yellow_wool",
    ZoglinSpawnEgg = "minecraft:zoglin_spawn_egg",
    ZombieHead = "minecraft:zombie_head",
    ZombieHorseSpawnEgg = "minecraft:zombie_horse_spawn_egg",
    ZombiePigmanSpawnEgg = "minecraft:zombie_pigman_spawn_egg",
    ZombieSpawnEgg = "minecraft:zombie_spawn_egg",
    ZombieVillagerSpawnEgg = "minecraft:zombie_villager_spawn_egg"
}
/**
 * Union type equivalent of the MinecraftItemTypes enum.
 */
type MinecraftItemTypesUnion = keyof typeof MinecraftItemTypes;

/**
 * All possible MinecraftPotionDeliveryTypes
 */
declare enum MinecraftPotionDeliveryTypes {
    Consume = "Consume",
    ThrownLingering = "ThrownLingering",
    ThrownSplash = "ThrownSplash"
}
/**
 * Union type equivalent of the MinecraftPotionDeliveryTypes enum.
 */
type MinecraftPotionDeliveryTypesUnion = keyof typeof MinecraftPotionDeliveryTypes;

/**
 * All possible MinecraftPotionEffectTypes
 */
declare enum MinecraftPotionEffectTypes {
    Awkward = "minecraft:awkward",
    FireResistance = "minecraft:fire_resistance",
    Harming = "minecraft:harming",
    Healing = "minecraft:healing",
    Infested = "minecraft:infested",
    Invisibility = "minecraft:invisibility",
    Leaping = "minecraft:leaping",
    LongFireResistance = "minecraft:long_fire_resistance",
    LongInvisibility = "minecraft:long_invisibility",
    LongLeaping = "minecraft:long_leaping",
    LongMundane = "minecraft:long_mundane",
    LongNightvision = "minecraft:long_nightvision",
    LongPoison = "minecraft:long_poison",
    LongRegeneration = "minecraft:long_regeneration",
    LongSlowFalling = "minecraft:long_slow_falling",
    LongSlowness = "minecraft:long_slowness",
    LongStrength = "minecraft:long_strength",
    LongSwiftness = "minecraft:long_swiftness",
    LongTurtleMaster = "minecraft:long_turtle_master",
    LongWaterBreathing = "minecraft:long_water_breathing",
    LongWeakness = "minecraft:long_weakness",
    Mundane = "minecraft:mundane",
    Nightvision = "minecraft:nightvision",
    Oozing = "minecraft:oozing",
    Poison = "minecraft:poison",
    Regeneration = "minecraft:regeneration",
    SlowFalling = "minecraft:slow_falling",
    Slowness = "minecraft:slowness",
    Strength = "minecraft:strength",
    StrongHarming = "minecraft:strong_harming",
    StrongHealing = "minecraft:strong_healing",
    StrongLeaping = "minecraft:strong_leaping",
    StrongPoison = "minecraft:strong_poison",
    StrongRegeneration = "minecraft:strong_regeneration",
    StrongSlowness = "minecraft:strong_slowness",
    StrongStrength = "minecraft:strong_strength",
    StrongSwiftness = "minecraft:strong_swiftness",
    StrongTurtleMaster = "minecraft:strong_turtle_master",
    Swiftness = "minecraft:swiftness",
    Thick = "minecraft:thick",
    TurtleMaster = "minecraft:turtle_master",
    Water = "minecraft:water",
    WaterBreathing = "minecraft:water_breathing",
    Weakness = "minecraft:weakness",
    Weaving = "minecraft:weaving",
    WindCharged = "minecraft:wind_charged",
    Wither = "minecraft:wither"
}
/**
 * Union type equivalent of the MinecraftPotionEffectTypes enum.
 */
type MinecraftPotionEffectTypesUnion = keyof typeof MinecraftPotionEffectTypes;

export { MinecraftBiomeTypes, MinecraftBlockTypes, MinecraftCameraPresetsTypes, MinecraftCooldownCategoryTypes, MinecraftDimensionTypes, MinecraftEffectTypes, MinecraftEnchantmentTypes, MinecraftEntityTypes, MinecraftFeatureTypes, MinecraftItemTypes, MinecraftPotionDeliveryTypes, MinecraftPotionEffectTypes };
export type { AcaciaButtonStates, AcaciaDoorStates, AcaciaDoubleSlabStates, AcaciaFenceGateStates, AcaciaHangingSignStates, AcaciaLeavesStates, AcaciaLogStates, AcaciaPressurePlateStates, AcaciaSaplingStates, AcaciaShelfStates, AcaciaSlabStates, AcaciaStairsStates, AcaciaStandingSignStates, AcaciaTrapdoorStates, AcaciaWallSignStates, AcaciaWoodStates, ActivatorRailStates, AmethystClusterStates, AndesiteDoubleSlabStates, AndesiteSlabStates, AndesiteStairsStates, AndesiteWallStates, AnvilStates, AzaleaLeavesFloweredStates, AzaleaLeavesStates, BambooBlockStates, BambooButtonStates, BambooDoorStates, BambooDoubleSlabStates, BambooFenceGateStates, BambooHangingSignStates, BambooMosaicDoubleSlabStates, BambooMosaicSlabStates, BambooMosaicStairsStates, BambooPressurePlateStates, BambooSaplingStates, BambooShelfStates, BambooSlabStates, BambooStairsStates, BambooStandingSignStates, BambooStates, BambooTrapdoorStates, BambooWallSignStates, BarrelStates, BasaltStates, BedStates, BedrockStates, BeeNestStates, BeehiveStates, BeetrootStates, BellStates, BigDripleafStates, BirchButtonStates, BirchDoorStates, BirchDoubleSlabStates, BirchFenceGateStates, BirchHangingSignStates, BirchLeavesStates, BirchLogStates, BirchPressurePlateStates, BirchSaplingStates, BirchShelfStates, BirchSlabStates, BirchStairsStates, BirchStandingSignStates, BirchTrapdoorStates, BirchWallSignStates, BirchWoodStates, BlackCandleCakeStates, BlackCandleStates, BlackGlazedTerracottaStates, BlackstoneDoubleSlabStates, BlackstoneSlabStates, BlackstoneStairsStates, BlackstoneWallStates, BlastFurnaceStates, BlockStateMapping, BlockStateSuperset, BlockStates, BlueCandleCakeStates, BlueCandleStates, BlueGlazedTerracottaStates, BoneBlockStates, BorderBlockStates, BrainCoralFanStates, BrainCoralWallFanStates, BrewingStandStates, BrickDoubleSlabStates, BrickSlabStates, BrickStairsStates, BrickWallStates, BrownCandleCakeStates, BrownCandleStates, BrownGlazedTerracottaStates, BrownMushroomBlockStates, BubbleColumnStates, BubbleCoralFanStates, BubbleCoralWallFanStates, CactusStates, CakeStates, CalibratedSculkSensorStates, CampfireStates, CandleCakeStates, CandleStates, CarrotsStates, CarvedPumpkinStates, CauldronStates, CaveVinesBodyWithBerriesStates, CaveVinesHeadWithBerriesStates, CaveVinesStates, ChainCommandBlockStates, CherryButtonStates, CherryDoorStates, CherryDoubleSlabStates, CherryFenceGateStates, CherryHangingSignStates, CherryLeavesStates, CherryLogStates, CherryPressurePlateStates, CherrySaplingStates, CherryShelfStates, CherrySlabStates, CherryStairsStates, CherryStandingSignStates, CherryTrapdoorStates, CherryWallSignStates, CherryWoodStates, ChestStates, ChippedAnvilStates, ChiseledBookshelfStates, ChiseledQuartzBlockStates, ChorusFlowerStates, CobbledDeepslateDoubleSlabStates, CobbledDeepslateSlabStates, CobbledDeepslateStairsStates, CobbledDeepslateWallStates, CobblestoneDoubleSlabStates, CobblestoneSlabStates, CobblestoneWallStates, CocoaStates, ColoredTorchBlueStates, ColoredTorchGreenStates, ColoredTorchPurpleStates, ColoredTorchRedStates, CommandBlockStates, ComposterStates, CompoundCreatorStates, CopperBulbStates, CopperChainStates, CopperChestStates, CopperDoorStates, CopperGolemStatueStates, CopperLanternStates, CopperTorchStates, CopperTrapdoorStates, CrafterStates, CreakingHeartStates, CreeperHeadStates, CrimsonButtonStates, CrimsonDoorStates, CrimsonDoubleSlabStates, CrimsonFenceGateStates, CrimsonHangingSignStates, CrimsonHyphaeStates, CrimsonPressurePlateStates, CrimsonShelfStates, CrimsonSlabStates, CrimsonStairsStates, CrimsonStandingSignStates, CrimsonStemStates, CrimsonTrapdoorStates, CrimsonWallSignStates, CutCopperSlabStates, CutCopperStairsStates, CutRedSandstoneDoubleSlabStates, CutRedSandstoneSlabStates, CutSandstoneDoubleSlabStates, CutSandstoneSlabStates, CyanCandleCakeStates, CyanCandleStates, CyanGlazedTerracottaStates, DamagedAnvilStates, DarkOakButtonStates, DarkOakDoorStates, DarkOakDoubleSlabStates, DarkOakFenceGateStates, DarkOakHangingSignStates, DarkOakLeavesStates, DarkOakLogStates, DarkOakPressurePlateStates, DarkOakSaplingStates, DarkOakShelfStates, DarkOakSlabStates, DarkOakStairsStates, DarkOakTrapdoorStates, DarkOakWoodStates, DarkPrismarineDoubleSlabStates, DarkPrismarineSlabStates, DarkPrismarineStairsStates, DarkoakStandingSignStates, DarkoakWallSignStates, DaylightDetectorInvertedStates, DaylightDetectorStates, DeadBrainCoralFanStates, DeadBrainCoralWallFanStates, DeadBubbleCoralFanStates, DeadBubbleCoralWallFanStates, DeadFireCoralFanStates, DeadFireCoralWallFanStates, DeadHornCoralFanStates, DeadHornCoralWallFanStates, DeadTubeCoralFanStates, DeadTubeCoralWallFanStates, DecoratedPotStates, DeepslateBrickDoubleSlabStates, DeepslateBrickSlabStates, DeepslateBrickStairsStates, DeepslateBrickWallStates, DeepslateStates, DeepslateTileDoubleSlabStates, DeepslateTileSlabStates, DeepslateTileStairsStates, DeepslateTileWallStates, DetectorRailStates, DioriteDoubleSlabStates, DioriteSlabStates, DioriteStairsStates, DioriteWallStates, DispenserStates, DoubleCutCopperSlabStates, DragonHeadStates, DriedGhastStates, DropperStates, ElementConstructorStates, EndBrickStairsStates, EndPortalFrameStates, EndRodStates, EndStoneBrickDoubleSlabStates, EndStoneBrickSlabStates, EndStoneBrickWallStates, EnderChestStates, ExposedCopperBulbStates, ExposedCopperChainStates, ExposedCopperChestStates, ExposedCopperDoorStates, ExposedCopperGolemStatueStates, ExposedCopperLanternStates, ExposedCopperTrapdoorStates, ExposedCutCopperSlabStates, ExposedCutCopperStairsStates, ExposedDoubleCutCopperSlabStates, ExposedLightningRodStates, FarmlandStates, FenceGateStates, FireCoralFanStates, FireCoralWallFanStates, FireStates, FlowerPotStates, FlowingLavaStates, FlowingWaterStates, FrameStates, FrostedIceStates, FurnaceStates, GlowFrameStates, GlowLichenStates, GoldenRailStates, GraniteDoubleSlabStates, GraniteSlabStates, GraniteStairsStates, GraniteWallStates, GrayCandleCakeStates, GrayCandleStates, GrayGlazedTerracottaStates, GreenCandleCakeStates, GreenCandleStates, GreenGlazedTerracottaStates, GrindstoneStates, HayBlockStates, HeavyWeightedPressurePlateStates, HopperStates, HornCoralFanStates, HornCoralWallFanStates, InfestedDeepslateStates, IronChainStates, IronDoorStates, IronTrapdoorStates, JigsawStates, JungleButtonStates, JungleDoorStates, JungleDoubleSlabStates, JungleFenceGateStates, JungleHangingSignStates, JungleLeavesStates, JungleLogStates, JunglePressurePlateStates, JungleSaplingStates, JungleShelfStates, JungleSlabStates, JungleStairsStates, JungleStandingSignStates, JungleTrapdoorStates, JungleWallSignStates, JungleWoodStates, KelpStates, LabTableStates, LadderStates, LanternStates, LargeAmethystBudStates, LargeFernStates, LavaStates, LeafLitterStates, LecternStates, LeverStates, LightBlueCandleCakeStates, LightBlueCandleStates, LightBlueGlazedTerracottaStates, LightGrayCandleCakeStates, LightGrayCandleStates, LightWeightedPressurePlateStates, LightningRodStates, LilacStates, LimeCandleCakeStates, LimeCandleStates, LimeGlazedTerracottaStates, LitBlastFurnaceStates, LitFurnaceStates, LitPumpkinStates, LitSmokerStates, LoomStates, MagentaCandleCakeStates, MagentaCandleStates, MagentaGlazedTerracottaStates, MangroveButtonStates, MangroveDoorStates, MangroveDoubleSlabStates, MangroveFenceGateStates, MangroveHangingSignStates, MangroveLeavesStates, MangroveLogStates, MangrovePressurePlateStates, MangrovePropaguleStates, MangroveShelfStates, MangroveSlabStates, MangroveStairsStates, MangroveStandingSignStates, MangroveTrapdoorStates, MangroveWallSignStates, MangroveWoodStates, MaterialReducerStates, MediumAmethystBudStates, MelonStemStates, MinecraftBiomeTypesUnion, MinecraftBlockTypesUnion, MinecraftCameraPresetsTypesUnion, MinecraftCooldownCategoryTypesUnion, MinecraftDimensionTypesUnion, MinecraftEffectTypesUnion, MinecraftEnchantmentTypesUnion, MinecraftEntityTypesUnion, MinecraftFeatureTypesUnion, MinecraftItemTypesUnion, MinecraftPotionDeliveryTypesUnion, MinecraftPotionEffectTypesUnion, MossyCobblestoneDoubleSlabStates, MossyCobblestoneSlabStates, MossyCobblestoneStairsStates, MossyCobblestoneWallStates, MossyStoneBrickDoubleSlabStates, MossyStoneBrickSlabStates, MossyStoneBrickStairsStates, MossyStoneBrickWallStates, MudBrickDoubleSlabStates, MudBrickSlabStates, MudBrickStairsStates, MudBrickWallStates, MuddyMangroveRootsStates, MushroomStemStates, NetherBrickDoubleSlabStates, NetherBrickSlabStates, NetherBrickStairsStates, NetherBrickWallStates, NetherWartStates, NormalStoneDoubleSlabStates, NormalStoneSlabStates, NormalStoneStairsStates, OakDoubleSlabStates, OakHangingSignStates, OakLeavesStates, OakLogStates, OakSaplingStates, OakShelfStates, OakSlabStates, OakStairsStates, OakWoodStates, ObserverStates, OchreFroglightStates, OrangeCandleCakeStates, OrangeCandleStates, OrangeGlazedTerracottaStates, OxidizedCopperBulbStates, OxidizedCopperChainStates, OxidizedCopperChestStates, OxidizedCopperDoorStates, OxidizedCopperGolemStatueStates, OxidizedCopperLanternStates, OxidizedCopperTrapdoorStates, OxidizedCutCopperSlabStates, OxidizedCutCopperStairsStates, OxidizedDoubleCutCopperSlabStates, OxidizedLightningRodStates, PaleHangingMossStates, PaleMossCarpetStates, PaleOakButtonStates, PaleOakDoorStates, PaleOakDoubleSlabStates, PaleOakFenceGateStates, PaleOakHangingSignStates, PaleOakLeavesStates, PaleOakLogStates, PaleOakPressurePlateStates, PaleOakSaplingStates, PaleOakShelfStates, PaleOakSlabStates, PaleOakStairsStates, PaleOakStandingSignStates, PaleOakTrapdoorStates, PaleOakWallSignStates, PaleOakWoodStates, PearlescentFroglightStates, PeonyStates, PetrifiedOakDoubleSlabStates, PetrifiedOakSlabStates, PiglinHeadStates, PinkCandleCakeStates, PinkCandleStates, PinkGlazedTerracottaStates, PinkPetalsStates, PistonArmCollisionStates, PistonStates, PitcherCropStates, PitcherPlantStates, PlayerHeadStates, PointedDripstoneStates, PolishedAndesiteDoubleSlabStates, PolishedAndesiteSlabStates, PolishedAndesiteStairsStates, PolishedBasaltStates, PolishedBlackstoneBrickDoubleSlabStates, PolishedBlackstoneBrickSlabStates, PolishedBlackstoneBrickStairsStates, PolishedBlackstoneBrickWallStates, PolishedBlackstoneButtonStates, PolishedBlackstoneDoubleSlabStates, PolishedBlackstonePressurePlateStates, PolishedBlackstoneSlabStates, PolishedBlackstoneStairsStates, PolishedBlackstoneWallStates, PolishedDeepslateDoubleSlabStates, PolishedDeepslateSlabStates, PolishedDeepslateStairsStates, PolishedDeepslateWallStates, PolishedDioriteDoubleSlabStates, PolishedDioriteSlabStates, PolishedDioriteStairsStates, PolishedGraniteDoubleSlabStates, PolishedGraniteSlabStates, PolishedGraniteStairsStates, PolishedTuffDoubleSlabStates, PolishedTuffSlabStates, PolishedTuffStairsStates, PolishedTuffWallStates, PortalStates, PotatoesStates, PoweredComparatorStates, PoweredRepeaterStates, PrismarineBrickDoubleSlabStates, PrismarineBrickSlabStates, PrismarineBricksStairsStates, PrismarineDoubleSlabStates, PrismarineSlabStates, PrismarineStairsStates, PrismarineWallStates, PumpkinStates, PumpkinStemStates, PurpleCandleCakeStates, PurpleCandleStates, PurpleGlazedTerracottaStates, PurpurBlockStates, PurpurDoubleSlabStates, PurpurPillarStates, PurpurSlabStates, PurpurStairsStates, QuartzBlockStates, QuartzDoubleSlabStates, QuartzPillarStates, QuartzSlabStates, QuartzStairsStates, RailStates, RedCandleCakeStates, RedCandleStates, RedGlazedTerracottaStates, RedMushroomBlockStates, RedNetherBrickDoubleSlabStates, RedNetherBrickSlabStates, RedNetherBrickStairsStates, RedNetherBrickWallStates, RedSandstoneDoubleSlabStates, RedSandstoneSlabStates, RedSandstoneStairsStates, RedSandstoneWallStates, RedstoneTorchStates, RedstoneWireStates, ReedsStates, RepeatingCommandBlockStates, ResinBrickDoubleSlabStates, ResinBrickSlabStates, ResinBrickStairsStates, ResinBrickWallStates, ResinClumpStates, RespawnAnchorStates, RoseBushStates, SandstoneDoubleSlabStates, SandstoneSlabStates, SandstoneStairsStates, SandstoneWallStates, ScaffoldingStates, SculkCatalystStates, SculkSensorStates, SculkShriekerStates, SculkVeinStates, SeaPickleStates, SeagrassStates, SilverGlazedTerracottaStates, SkeletonSkullStates, SmallAmethystBudStates, SmallDripleafBlockStates, SmokerStates, SmoothQuartzDoubleSlabStates, SmoothQuartzSlabStates, SmoothQuartzStairsStates, SmoothQuartzStates, SmoothRedSandstoneDoubleSlabStates, SmoothRedSandstoneSlabStates, SmoothRedSandstoneStairsStates, SmoothSandstoneDoubleSlabStates, SmoothSandstoneSlabStates, SmoothSandstoneStairsStates, SmoothStoneDoubleSlabStates, SmoothStoneSlabStates, SnifferEggStates, SnowLayerStates, SoulCampfireStates, SoulFireStates, SoulLanternStates, SoulTorchStates, SpruceButtonStates, SpruceDoorStates, SpruceDoubleSlabStates, SpruceFenceGateStates, SpruceHangingSignStates, SpruceLeavesStates, SpruceLogStates, SprucePressurePlateStates, SpruceSaplingStates, SpruceShelfStates, SpruceSlabStates, SpruceStairsStates, SpruceStandingSignStates, SpruceTrapdoorStates, SpruceWallSignStates, SpruceWoodStates, StandingBannerStates, StandingSignStates, StickyPistonArmCollisionStates, StickyPistonStates, StoneBrickDoubleSlabStates, StoneBrickSlabStates, StoneBrickStairsStates, StoneBrickWallStates, StoneButtonStates, StonePressurePlateStates, StoneStairsStates, StonecutterBlockStates, StrippedAcaciaLogStates, StrippedAcaciaWoodStates, StrippedBambooBlockStates, StrippedBirchLogStates, StrippedBirchWoodStates, StrippedCherryLogStates, StrippedCherryWoodStates, StrippedCrimsonHyphaeStates, StrippedCrimsonStemStates, StrippedDarkOakLogStates, StrippedDarkOakWoodStates, StrippedJungleLogStates, StrippedJungleWoodStates, StrippedMangroveLogStates, StrippedMangroveWoodStates, StrippedOakLogStates, StrippedOakWoodStates, StrippedPaleOakLogStates, StrippedPaleOakWoodStates, StrippedSpruceLogStates, StrippedSpruceWoodStates, StrippedWarpedHyphaeStates, StrippedWarpedStemStates, StructureBlockStates, SunflowerStates, SuspiciousGravelStates, SuspiciousSandStates, SweetBerryBushStates, TallGrassStates, TntStates, TorchStates, TorchflowerCropStates, TrapdoorStates, TrappedChestStates, TrialSpawnerStates, TripWireStates, TripwireHookStates, TubeCoralFanStates, TubeCoralWallFanStates, TuffBrickDoubleSlabStates, TuffBrickSlabStates, TuffBrickStairsStates, TuffBrickWallStates, TuffDoubleSlabStates, TuffSlabStates, TuffStairsStates, TuffWallStates, TurtleEggStates, TwistingVinesStates, UnderwaterTntStates, UnderwaterTorchStates, UnlitRedstoneTorchStates, UnpoweredComparatorStates, UnpoweredRepeaterStates, VaultStates, VerdantFroglightStates, VineStates, WallBannerStates, WallSignStates, WarpedButtonStates, WarpedDoorStates, WarpedDoubleSlabStates, WarpedFenceGateStates, WarpedHangingSignStates, WarpedHyphaeStates, WarpedPressurePlateStates, WarpedShelfStates, WarpedSlabStates, WarpedStairsStates, WarpedStandingSignStates, WarpedStemStates, WarpedTrapdoorStates, WarpedWallSignStates, WaterStates, WaxedCopperBulbStates, WaxedCopperChainStates, WaxedCopperChestStates, WaxedCopperDoorStates, WaxedCopperGolemStatueStates, WaxedCopperLanternStates, WaxedCopperTrapdoorStates, WaxedCutCopperSlabStates, WaxedCutCopperStairsStates, WaxedDoubleCutCopperSlabStates, WaxedExposedCopperBulbStates, WaxedExposedCopperChainStates, WaxedExposedCopperChestStates, WaxedExposedCopperDoorStates, WaxedExposedCopperGolemStatueStates, WaxedExposedCopperLanternStates, WaxedExposedCopperTrapdoorStates, WaxedExposedCutCopperSlabStates, WaxedExposedCutCopperStairsStates, WaxedExposedDoubleCutCopperSlabStates, WaxedExposedLightningRodStates, WaxedLightningRodStates, WaxedOxidizedCopperBulbStates, WaxedOxidizedCopperChainStates, WaxedOxidizedCopperChestStates, WaxedOxidizedCopperDoorStates, WaxedOxidizedCopperGolemStatueStates, WaxedOxidizedCopperLanternStates, WaxedOxidizedCopperTrapdoorStates, WaxedOxidizedCutCopperSlabStates, WaxedOxidizedCutCopperStairsStates, WaxedOxidizedDoubleCutCopperSlabStates, WaxedOxidizedLightningRodStates, WaxedWeatheredCopperBulbStates, WaxedWeatheredCopperChainStates, WaxedWeatheredCopperChestStates, WaxedWeatheredCopperDoorStates, WaxedWeatheredCopperGolemStatueStates, WaxedWeatheredCopperLanternStates, WaxedWeatheredCopperTrapdoorStates, WaxedWeatheredCutCopperSlabStates, WaxedWeatheredCutCopperStairsStates, WaxedWeatheredDoubleCutCopperSlabStates, WaxedWeatheredLightningRodStates, WeatheredCopperBulbStates, WeatheredCopperChainStates, WeatheredCopperChestStates, WeatheredCopperDoorStates, WeatheredCopperGolemStatueStates, WeatheredCopperLanternStates, WeatheredCopperTrapdoorStates, WeatheredCutCopperSlabStates, WeatheredCutCopperStairsStates, WeatheredDoubleCutCopperSlabStates, WeatheredLightningRodStates, WeepingVinesStates, WheatStates, WhiteCandleCakeStates, WhiteCandleStates, WhiteGlazedTerracottaStates, WildflowersStates, WitherSkeletonSkullStates, WoodenButtonStates, WoodenDoorStates, WoodenPressurePlateStates, YellowCandleCakeStates, YellowCandleStates, YellowGlazedTerracottaStates, ZombieHeadStates };
