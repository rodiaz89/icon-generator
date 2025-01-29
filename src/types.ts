
/**
 * Default available shapes
 */
export const BASE_FORMAT_BADGE = "badge";
export const BASE_FORMAT_BADGE_STACK = "badge_stack";
export const BASE_FORMAT_CLUSTER = "cluster";
export const BASE_FORMAT_MARKER = "marker";
export const BASE_FORMAT_PIN = "pin";
export const BASE_FORMAT_STACK = "stack";

export type ShapeFormatOption = 
    typeof BASE_FORMAT_BADGE | 
    typeof BASE_FORMAT_BADGE_STACK | 
    typeof BASE_FORMAT_CLUSTER | 
    typeof BASE_FORMAT_MARKER | 
    typeof BASE_FORMAT_PIN | 
    typeof BASE_FORMAT_STACK

/**
 * Default available modes
 */

export const MODE_FORMAT_SELECTED = "selected";
export const MODE_FORMAT_INACTIVE = "inactive";
export const MODE_FORMAT_WARNING_YELLOW = "warning-yellow";
export const MODE_FORMAT_WARNING_ORANGE = "warning-orange";
export const MODE_FORMAT_SUCCESS = "success";
export const MODE_FORMAT_ERROR = "error";

export type ModeFormatOption = 
    typeof MODE_FORMAT_SELECTED | 
    typeof MODE_FORMAT_INACTIVE |
    typeof MODE_FORMAT_WARNING_YELLOW |
    typeof MODE_FORMAT_WARNING_ORANGE |
    typeof MODE_FORMAT_SUCCESS |
    typeof MODE_FORMAT_ERROR
;

/**
 * Default available icons
 */

export const ICON_001_01_ACOUSTIC_DEVICE = "001_01_acoustic_device";
export const ICON_002_01_PUMP = "002_01_pump";
export const ICON_002_02_PUMP = "002_02_pump";
export const ICON_002_03_PUMP = "002_03_pump";
export const ICON_003_01_BULK_METER = "003_01_bulk_meter";
export const ICON_004_01_CUSTOMER_CONTACT = "004_01_customer_contact";
export const ICON_005_01_CUSTOMER_METER = "005_01_customer_meter";
export const ICON_005_02_CUSTOMER_METER = "005_02_customer_meter";
export const ICON_006_01_SENSOR_GENERAL = "006_01_sensor_general";
export const ICON_006_02_SENSOR_SOIL_MOISTURE = "006_02_sensor_soil_moisture";
export const ICON_006_03_SENSOR = "006_03_sensor";
export const ICON_007_01_SUPPLY_POINT = "007_01_supply_point";
export const ICON_008_01_VALVE = "008_01_valve";
export const ICON_008_02_VALVE_CLOSED = "008_02_valve_closed";
export const ICON_008_03_VALVE_PRESSURE_REDUCING_YW = "008_03_valve_pressure_reducing_YW";
export const ICON_008_04_VALVE_PRESSURE_SUSTAINING_YW = "008_04_valve_pressure_sustaining_YW";
export const ICON_008_05_VALVE_CLOSED_YW = "008_05_valve_closed_YW";
export const ICON_008_06_VALVE_OPEN_YW = "008_06_valve_open_YW";
export const ICON_008_07_VALVE_UNDER_REVISION_YW = "008_07_valve_under_revision_YW";
export const ICON_008_08_VALVE_HYDRAULIC = "008_08_valve_hydraulic";
export const ICON_008_09_VALVE_SOLENOID = "008_09_valve_solenoid";
export const ICON_009_01_DMA_METER = "009_01_dma_meter";
export const ICON_010_01_FLOW_DEVICE = "010_01_flow_device";
export const ICON_011_01_HYDRANT = "011_01_hydrant";
export const ICON_011_02_HYDRANT_ACEMSA = "011_02_hydrant_acemsa";
export const ICON_011_03_HYDRANT = "011_03_hydrant";
export const ICON_012_01_FILTER = "012_01_filter";
export const ICON_013_01_CONTROL_POINT = "013_01_control_point";
export const ICON_014_01_SUCTION_CUP = "014_01_suction_cup";
export const ICON_014_02_SUCTION_CUP = "014_02_suction_cup";
export const ICON_015_01_JUNCTION = "015_01_junction";
export const ICON_015_02_JUNCTION_NODE = "015_02_junction_node";
export const ICON_016_01_SPRING = "016_01_spring";
export const ICON_017_01_FLOW_METER = "017_01_flow_meter";
export const ICON_017_02_FLOW_METER = "017_02_flow_meter";
export const ICON_018_01_PRESSURE_METER = "018_01_pressure_meter";
export const ICON_018_02_PRESSURE_METER_TRANSIENT = "018_02_pressure_meter_transient";
export const ICON_018_03_PRESSURE_METER = "018_03_pressure_meter";
export const ICON_018_04_PRESSURE_METER = "018_04_pressure_meter";
export const ICON_019_01_PLANT_CHLORINATION = "019_01_plant_chlorination";
export const ICON_019_02_PLANT_PURIFICATION = "019_02_plant_purification";
export const ICON_019_03_PLANT_WATER_TREATMENT = "019_03_plant_water_treatment";
export const ICON_019_04_PLANT_WATER_TREATMENT = "019_04_plant_water_treatment";
export const ICON_019_05_WATER_QUALITY = "019_05_water_quality";
export const ICON_020_01_RES_CELL_LEVEL = "020_01_res_cell_level";
export const ICON_021_01_SMART_IRRIGATION = "021_01_smart_irrigation";
export const ICON_022_01_TANK = "022_01_tank";
export const ICON_022_02_TANK = "022_02_tank";
export const ICON_022_03_STORM_TANK = "022_03_storm_tank";
export const ICON_023_01_TEMPERATURE_DEVICE = "023_01_temperature_device";
export const ICON_024_01_TRIFURCATION_BIFURCATION = "024_01_trifurcation_bifurcation";
export const ICON_025_01_WORK_ORDERS = "025_01_work_orders";
export const ICON_025_02_WORK_ORDERS = "025_02_work_orders";
export const ICON_025_03_WORK_ORDERS = "025_03_work_orders";
export const ICON_026_01_BELL = "026_01_bell";
export const ICON_026_02_ALARM = "026_02_alarm";
export const ICON_026_03_WARNING = "026_03_warning";
export const ICON_027_01_WELL = "027_01_well";
export const ICON_027_02_WELL = "027_02_well";
export const ICON_028_01_INDUSTRY = "028_01_industry";
export const ICON_029_01_EDAR = "029_01_edar";
export const ICON_030_01_MEASUREMENT_LOCATION = "030_01_measurement_location";
export const ICON_031_01_CHIP = "031_01_chip";
export const ICON_032_01_BROOM = "032_01_broom";
export const ICON_033_01_IRRIGATION_POND = "033_01_irrigation_pond";
export const ICON_034_01_DRAINAGE = "034_01_drainage";
export const ICON_035_01_FERTIRRIGATION_EQUIPMENT = "035_01_fertirrigation_equipment";
export const ICON_036_01_FLOW_PRESSURE = "036_01_flow_pressure";
export const ICON_037_01_GATEWAY = "037_01_gateway";
export const ICON_037_02_GATEWAY = "037_02_gateway";
export const ICON_038_01_LEAK_DETECTOR = "038_01_leak_detector";
export const ICON_038_02_LEAK_DETECTOR = "038_02_leak_detector";
export const ICON_038_03_LEAK_DETECTOR = "038_03_leak_detector";
export const ICON_039_01_WIFI_SLASH = "039_01_wifi_slash";
export const ICON_040_01_DATA_LOGGER = "040_01_data_logger";
export const ICON_040_02_DATA_LOGGER = "040_02_data_logger";
export const ICON_041_01_POSITIONING = "041_01_positioning";
export const ICON_042_01_FIND_LOCATION = "042_01_find_location";
export const ICON_043_01_LOCATION = "043_01_location";
export const ICON_044_01_ACTIVE = "044_01_active";
export const ICON_045_01_ACTUATION = "045_01_actuation";
export const ICON_046_01_ELECTRICIAN = "046_01_electrician";
export const ICON_046_02_PLUMBER = "046_02_plumber";
export const ICON_046_03_MECHANIC = "046_03_mechanic";
export const ICON_046_04_PREVENTIVE_RESOURCE = "046_04_preventive_resource";
export const ICON_046_05_WORKER = "046_05_worker";
export const ICON_046_06_LABOURER = "046_06_labourer";
export const ICON_047_01_EXPLOITATION = "047_01_exploitation";
export const ICON_048_01_SAMPLES = "048_01_samples";
export const ICON_049_01_PRESS = "049_01_press";
export const ICON_050_01_MANHOLE = "050_01_manhole";
export const ICON_050_02_MANHOLE = "050_02_manhole";
export const ICON_050_03_MANHOLE_END_CAP = "050_03_manhole_end_cap";
export const ICON_050_04_INSPECTION_HOLE = "050_04_inspection_hole";
export const ICON_051_01_PUMP_STATION = "051_01_pump_station";
export const ICON_052_01_RIVER_SEA = "052_01_river_sea";
export const ICON_053_01_SPILL = "053_01_spill";
export const ICON_053_02_SPILLWAY = "053_02_spillway";
export const ICON_054_01_UNDERPASS = "054_01_underpass";
export const ICON_055_01_WEATHER_STATION = "055_01_weather_station";
export const ICON_056_01_WEATHER_RADAR = "056_01_weather_radar";
export const ICON_057_01_FAT_TRAP = "057_01_fat_trap";
export const ICON_058_01_MICROTUNNEL = "058_01_microtunnel";
export const ICON_059_01_DIRTY_SEWAGE_ACCESS = "059_01_dirty_sewage_access";
export const ICON_060_01_LOCKING_MAINTENANCE_CHAMBER = "060_01_locking_maintenance_chamber";
export const ICON_061_01_UNDERGROUND_WATER_ACCESS = "061_01_underground_water_access";
export const ICON_062_01_TRUCK = "062_01_truck";
export const ICON_063_01_PARKING = "063_01_parking";
export const ICON_064_02_NO_GPS_SIGNAL = "064_02_no_gps_signal";
export const ICON_065_01_ON_ROAD = "065_01_on_road";
export const ICON_066_01_OFF_ROAD = "066_01_off_road";
export const ICON_067_01_SLUDGE = "067_01_sludge";
export const ICON_068_01_DIGGING_MAN = "068_01_digging_man";
export const ICON_069_01_CLOUD_SHARP = "069_01_cloud_sharp";
export const ICON_070_01_CAMERA = "070_01_camera";
export const ICON_071_01_HUB = "071_01_hub";
export const ICON_072_01_PRESSURE_CONTROL = "072_01_pressure_control";

export type FormatStyle = 
    typeof ICON_001_01_ACOUSTIC_DEVICE | 
    typeof ICON_002_01_PUMP | 
    typeof ICON_002_02_PUMP | 
    typeof ICON_002_03_PUMP | 
    typeof ICON_003_01_BULK_METER | 
    typeof ICON_004_01_CUSTOMER_CONTACT | 
    typeof ICON_005_01_CUSTOMER_METER | 
    typeof ICON_005_02_CUSTOMER_METER | 
    typeof ICON_006_01_SENSOR_GENERAL | 
    typeof ICON_006_02_SENSOR_SOIL_MOISTURE | 
    typeof ICON_006_03_SENSOR | 
    typeof ICON_007_01_SUPPLY_POINT | 
    typeof ICON_008_01_VALVE | 
    typeof ICON_008_02_VALVE_CLOSED | 
    typeof ICON_008_03_VALVE_PRESSURE_REDUCING_YW | 
    typeof ICON_008_04_VALVE_PRESSURE_SUSTAINING_YW | 
    typeof ICON_008_05_VALVE_CLOSED_YW | 
    typeof ICON_008_06_VALVE_OPEN_YW | 
    typeof ICON_008_07_VALVE_UNDER_REVISION_YW | 
    typeof ICON_008_08_VALVE_HYDRAULIC | 
    typeof ICON_008_09_VALVE_SOLENOID | 
    typeof ICON_009_01_DMA_METER | 
    typeof ICON_010_01_FLOW_DEVICE | 
    typeof ICON_011_01_HYDRANT | 
    typeof ICON_011_02_HYDRANT_ACEMSA | 
    typeof ICON_011_03_HYDRANT | 
    typeof ICON_012_01_FILTER | 
    typeof ICON_013_01_CONTROL_POINT | 
    typeof ICON_014_01_SUCTION_CUP | 
    typeof ICON_014_02_SUCTION_CUP | 
    typeof ICON_015_01_JUNCTION | 
    typeof ICON_015_02_JUNCTION_NODE | 
    typeof ICON_016_01_SPRING | 
    typeof ICON_017_01_FLOW_METER | 
    typeof ICON_017_02_FLOW_METER | 
    typeof ICON_018_01_PRESSURE_METER | 
    typeof ICON_018_02_PRESSURE_METER_TRANSIENT | 
    typeof ICON_018_03_PRESSURE_METER | 
    typeof ICON_018_04_PRESSURE_METER |
    typeof ICON_019_01_PLANT_CHLORINATION | 
    typeof ICON_019_02_PLANT_PURIFICATION | 
    typeof ICON_019_03_PLANT_WATER_TREATMENT | 
    typeof ICON_019_04_PLANT_WATER_TREATMENT | 
    typeof ICON_019_05_WATER_QUALITY | 
    typeof ICON_020_01_RES_CELL_LEVEL | 
    typeof ICON_021_01_SMART_IRRIGATION | 
    typeof ICON_022_01_TANK | 
    typeof ICON_022_02_TANK | 
    typeof ICON_022_03_STORM_TANK | 
    typeof ICON_023_01_TEMPERATURE_DEVICE | 
    typeof ICON_024_01_TRIFURCATION_BIFURCATION | 
    typeof ICON_025_01_WORK_ORDERS | 
    typeof ICON_025_02_WORK_ORDERS | 
    typeof ICON_025_03_WORK_ORDERS | 
    typeof ICON_026_01_BELL | 
    typeof ICON_026_02_ALARM | 
    typeof ICON_026_03_WARNING | 
    typeof ICON_027_01_WELL | 
    typeof ICON_027_02_WELL | 
    typeof ICON_028_01_INDUSTRY | 
    typeof ICON_029_01_EDAR | 
    typeof ICON_030_01_MEASUREMENT_LOCATION | 
    typeof ICON_031_01_CHIP | 
    typeof ICON_032_01_BROOM | 
    typeof ICON_033_01_IRRIGATION_POND | 
    typeof ICON_034_01_DRAINAGE | 
    typeof ICON_035_01_FERTIRRIGATION_EQUIPMENT | 
    typeof ICON_036_01_FLOW_PRESSURE | 
    typeof ICON_037_01_GATEWAY | 
    typeof ICON_037_02_GATEWAY | 
    typeof ICON_038_01_LEAK_DETECTOR | 
    typeof ICON_038_02_LEAK_DETECTOR | 
    typeof ICON_038_03_LEAK_DETECTOR | 
    typeof ICON_039_01_WIFI_SLASH | 
    typeof ICON_040_01_DATA_LOGGER | 
    typeof ICON_040_02_DATA_LOGGER | 
    typeof ICON_041_01_POSITIONING | 
    typeof ICON_042_01_FIND_LOCATION | 
    typeof ICON_043_01_LOCATION | 
    typeof ICON_044_01_ACTIVE | 
    typeof ICON_045_01_ACTUATION | 
    typeof ICON_046_01_ELECTRICIAN | 
    typeof ICON_046_02_PLUMBER | 
    typeof ICON_046_03_MECHANIC | 
    typeof ICON_046_04_PREVENTIVE_RESOURCE | 
    typeof ICON_046_05_WORKER | 
    typeof ICON_046_06_LABOURER | 
    typeof ICON_047_01_EXPLOITATION | 
    typeof ICON_048_01_SAMPLES | 
    typeof ICON_049_01_PRESS | 
    typeof ICON_050_01_MANHOLE |
    typeof ICON_050_02_MANHOLE |
    typeof ICON_050_03_MANHOLE_END_CAP |
    typeof ICON_050_04_INSPECTION_HOLE |
    typeof ICON_051_01_PUMP_STATION | 
    typeof ICON_052_01_RIVER_SEA | 
    typeof ICON_053_01_SPILL | 
    typeof ICON_053_02_SPILLWAY | 
    typeof ICON_054_01_UNDERPASS | 
    typeof ICON_055_01_WEATHER_STATION | 
    typeof ICON_056_01_WEATHER_RADAR | 
    typeof ICON_057_01_FAT_TRAP | 
    typeof ICON_058_01_MICROTUNNEL | 
    typeof ICON_059_01_DIRTY_SEWAGE_ACCESS | 
    typeof ICON_060_01_LOCKING_MAINTENANCE_CHAMBER | 
    typeof ICON_061_01_UNDERGROUND_WATER_ACCESS | 
    typeof ICON_062_01_TRUCK | 
    typeof ICON_063_01_PARKING | 
    typeof ICON_064_02_NO_GPS_SIGNAL | 
    typeof ICON_065_01_ON_ROAD | 
    typeof ICON_066_01_OFF_ROAD | 
    typeof ICON_067_01_SLUDGE | 
    typeof ICON_068_01_DIGGING_MAN |
    typeof ICON_069_01_CLOUD_SHARP |
    typeof ICON_070_01_CAMERA |
    typeof ICON_071_01_HUB |
    typeof ICON_072_01_PRESSURE_CONTROL
;


/**
 * Objects for the icon definition.
 */

export type FormatIconObject = { 
    shape: ShapeFormatOption;
    iconSvg?: FormatStyle;
    mode?: ModeFormatOption | string;
    backgroundColor?: string;
    iconColor?: string;
}