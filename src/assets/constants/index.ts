import * as icons from "./icons/index.js";
import * as bases from "../bases/index.js";

import {
  BASE_FORMAT_BADGE,
  BASE_FORMAT_BADGE_STACK,
  BASE_FORMAT_CLUSTER,
  BASE_FORMAT_MARKER,
  BASE_FORMAT_PIN,
  BASE_FORMAT_STACK,
  ICON_000_01_UNDEFINED,
  ICON_001_01_ACOUSTIC_DEVICE,
  ICON_002_01_PUMP,
  ICON_002_02_PUMP,
  ICON_002_03_PUMP,
  ICON_003_01_BULK_METER,
  ICON_004_01_CUSTOMER_CONTACT,
  ICON_005_01_CUSTOMER_METER,
  ICON_005_02_CUSTOMER_METER,
  ICON_006_01_SENSOR_GENERAL,
  ICON_006_02_SENSOR_SOIL_MOISTURE,
  ICON_006_03_SENSOR,
  ICON_007_01_SUPPLY_POINT,
  ICON_008_01_VALVE,
  ICON_008_02_VALVE_CLOSED,
  ICON_008_03_VALVE_PRESSURE_REDUCING_YW,
  ICON_008_04_VALVE_PRESSURE_SUSTAINING_YW,
  ICON_008_05_VALVE_CLOSED_YW,
  ICON_008_06_VALVE_OPEN_YW,
  ICON_008_07_VALVE_UNDER_REVISION_YW,
  ICON_008_08_VALVE_HYDRAULIC,
  ICON_008_09_VALVE_SOLENOID,
  ICON_009_01_DMA_METER,
  ICON_010_01_FLOW_DEVICE,
  ICON_011_01_HYDRANT,
  ICON_011_02_HYDRANT_ACEMSA,
  ICON_011_03_HYDRANT,
  ICON_012_01_FILTER,
  ICON_013_01_CONTROL_POINT,
  ICON_014_01_SUCTION_CUP,
  ICON_014_02_SUCTION_CUP,
  ICON_015_01_JUNCTION,
  ICON_015_02_JUNCTION_NODE,
  ICON_016_01_SPRING,
  ICON_017_01_FLOW_METER,
  ICON_017_02_FLOW_METER,
  ICON_018_01_PRESSURE_METER,
  ICON_018_02_PRESSURE_METER_TRANSIENT,
  ICON_018_03_PRESSURE_METER,
  ICON_018_04_PRESSURE_METER,
  ICON_019_01_PLANT_CHLORINATION,
  ICON_019_02_PLANT_PURIFICATION,
  ICON_019_03_PLANT_WATER_TREATMENT,
  ICON_019_04_PLANT_WATER_TREATMENT,
  ICON_019_05_WATER_QUALITY,
  ICON_020_01_RES_CELL_LEVEL,
  ICON_021_01_SMART_IRRIGATION,
  ICON_022_01_TANK,
  ICON_022_02_TANK,
  ICON_022_03_STORM_TANK,
  ICON_023_01_TEMPERATURE_DEVICE,
  ICON_024_01_TRIFURCATION_BIFURCATION,
  ICON_025_01_WORK_ORDERS,
  ICON_025_02_WORK_ORDERS,
  ICON_025_03_WORK_ORDERS,
  ICON_026_01_BELL,
  ICON_026_02_ALARM,
  ICON_026_03_WARNING,
  ICON_027_01_WELL,
  ICON_027_02_WELL,
  ICON_028_01_INDUSTRY,
  ICON_029_01_EDAR,
  ICON_030_01_MEASUREMENT_LOCATION,
  ICON_031_01_CHIP,
  ICON_032_01_BROOM,
  ICON_033_01_IRRIGATION_POND,
  ICON_034_01_DRAINAGE,
  ICON_035_01_FERTIRRIGATION_EQUIPMENT,
  ICON_036_01_FLOW_PRESSURE,
  ICON_037_01_GATEWAY,
  ICON_037_02_GATEWAY,
  ICON_038_01_LEAK_DETECTOR,
  ICON_038_02_LEAK_DETECTOR,
  ICON_038_03_LEAK_DETECTOR,
  ICON_039_01_WIFI_SLASH,
  ICON_040_01_DATA_LOGGER,
  ICON_040_02_DATA_LOGGER,
  ICON_041_01_POSITIONING,
  ICON_042_01_FIND_LOCATION,
  ICON_043_01_LOCATION,
  ICON_044_01_ACTIVE,
  ICON_045_01_ACTUATION,
  ICON_046_01_ELECTRICIAN,
  ICON_046_02_PLUMBER,
  ICON_046_03_MECHANIC,
  ICON_046_04_PREVENTIVE_RESOURCE,
  ICON_046_05_WORKER,
  ICON_046_06_LABOURER,
  ICON_047_01_EXPLOITATION,
  ICON_048_01_SAMPLES,
  ICON_049_01_PRESS,
  ICON_050_01_MANHOLE,
  ICON_050_02_MANHOLE,
  ICON_050_03_MANHOLE_END_CAP,
  ICON_050_04_INSPECTION_HOLE,
  ICON_051_01_PUMP_STATION,
  ICON_052_01_RIVER_SEA,
  ICON_053_01_SPILL,
  ICON_053_02_SPILLWAY,
  ICON_054_01_UNDERPASS,
  ICON_055_01_WEATHER_STATION,
  ICON_056_01_WEATHER_RADAR,
  ICON_057_01_FAT_TRAP,
  ICON_058_01_MICROTUNNEL,
  ICON_059_01_DIRTY_SEWAGE_ACCESS,
  ICON_060_01_LOCKING_MAINTENANCE_CHAMBER,
  ICON_061_01_UNDERGROUND_WATER_ACCESS,
  ICON_062_01_TRUCK,
  ICON_063_01_PARKING,
  ICON_064_02_NO_GPS_SIGNAL,
  ICON_065_01_ON_ROAD,
  ICON_066_01_OFF_ROAD,
  ICON_067_01_SLUDGE,
  ICON_068_01_DIGGING_MAN,
  ICON_069_01_CLOUD_SHARP,
  ICON_070_01_CAMERA,
  ICON_071_01_HUB,
  ICON_072_01_PRESSURE_CONTROL,
  MODE_FORMAT_ERROR,
  MODE_FORMAT_INACTIVE,
  MODE_FORMAT_SELECTED,
  MODE_FORMAT_SUCCESS,
  MODE_FORMAT_WARNING_ORANGE,
  MODE_FORMAT_WARNING_YELLOW,
} from "../../types.js";

export const modeList = [
  {
    value: MODE_FORMAT_SELECTED,
    color: "rgb(49, 154, 203)",
  },
  {
    value: MODE_FORMAT_INACTIVE,
    color: "rgb(213, 213, 213)",
  },
  {
    value: MODE_FORMAT_WARNING_YELLOW,
    color: "rgb(233, 196, 23)",
  },
  {
    value: MODE_FORMAT_WARNING_ORANGE,
    color: "rgb(255, 157, 92)",
  },
  {
    value: MODE_FORMAT_SUCCESS,
    color: "rgb(134, 220, 61)",
  },
  {
    value: MODE_FORMAT_ERROR,
    color: "rgb(227, 114, 114)",
  },
];

export const iconList = [
  {
    value: ICON_000_01_UNDEFINED,
    icon: icons.icon_000_01_undefined,
  },{
    value: ICON_001_01_ACOUSTIC_DEVICE,
    icon: icons.icon_001_01_acoustic_device,
  },{
    value: ICON_002_01_PUMP,
    icon: icons.icon_002_01_pump
  },{
    value: ICON_002_02_PUMP,
    icon: icons.icon_002_02_pump
  },{
    value: ICON_002_03_PUMP,
    icon: icons.icon_002_03_pump
  },{
    value: ICON_003_01_BULK_METER,
    icon: icons.icon_003_01_bulk_meter
  },{
    value: ICON_004_01_CUSTOMER_CONTACT,
    icon: icons.icon_004_01_customer_contact
  },{
    value: ICON_005_01_CUSTOMER_METER,
    icon: icons.icon_005_01_customer_meter
  },{
    value: ICON_005_02_CUSTOMER_METER,
    icon: icons.icon_005_02_customer_meter
  },{
    value: ICON_006_01_SENSOR_GENERAL,
    icon: icons.icon_006_01_sensor_general
  },{
    value: ICON_006_02_SENSOR_SOIL_MOISTURE,
    icon: icons.icon_006_02_sensor_soil_moisture
  },{
    value: ICON_006_03_SENSOR,
    icon: icons.icon_006_03_sensor
  },{
    value: ICON_007_01_SUPPLY_POINT,
    icon: icons.icon_007_01_supply_point
  },{
    value: ICON_008_01_VALVE,
    icon: icons.icon_008_01_valve
  },{
    value: ICON_008_02_VALVE_CLOSED,
    icon: icons.icon_008_02_valve_closed
  },{
    value: ICON_008_03_VALVE_PRESSURE_REDUCING_YW,
    icon: icons.icon_008_03_valve_pressure_reducing_YW
  },{
    value: ICON_008_04_VALVE_PRESSURE_SUSTAINING_YW,
    icon: icons.icon_008_04_valve_pressure_sustaining_YW
  },{
    value: ICON_008_05_VALVE_CLOSED_YW,
    icon: icons.icon_008_05_valve_closed_YW
  },{
    value: ICON_008_06_VALVE_OPEN_YW,
    icon: icons.icon_008_06_valve_open_YW
  },{
    value: ICON_008_07_VALVE_UNDER_REVISION_YW,
    icon: icons.icon_008_07_valve_under_revision_YW
  },{
    value: ICON_008_08_VALVE_HYDRAULIC,
    icon: icons.icon_008_08_valve_hydraulic
  },{
    value: ICON_008_09_VALVE_SOLENOID,
    icon: icons.icon_008_09_valve_solenoid
  },{
    value: ICON_009_01_DMA_METER,
    icon: icons.icon_009_01_dma_meter
  },{
    value: ICON_010_01_FLOW_DEVICE,
    icon: icons.icon_010_01_flow_device
  },{
    value: ICON_011_01_HYDRANT,
    icon: icons.icon_011_01_hydrant
  },{
    value: ICON_011_02_HYDRANT_ACEMSA,
    icon: icons.icon_011_02_hydrant_acemsa
  },{
    value: ICON_011_03_HYDRANT,
    icon: icons.icon_011_03_hydrant
  },{
    value: ICON_012_01_FILTER,
    icon: icons.icon_012_01_filter
  },{
    value: ICON_013_01_CONTROL_POINT,
    icon: icons.icon_013_01_control_point
  },{
    value: ICON_014_01_SUCTION_CUP,
    icon: icons.icon_014_01_suction_cup
  },{
    value: ICON_014_02_SUCTION_CUP,
    icon: icons.icon_014_02_suction_cup
  },{
    value: ICON_015_01_JUNCTION,
    icon: icons.icon_015_01_junction
  },{
    value: ICON_015_02_JUNCTION_NODE,
    icon: icons.icon_015_02_junction_node
  },{
    value: ICON_016_01_SPRING,
    icon: icons.icon_016_01_spring
  },{
    value: ICON_017_01_FLOW_METER,
    icon: icons.icon_017_01_flow_meter
  },{
    value: ICON_017_02_FLOW_METER,
    icon: icons.icon_017_02_flow_meter
  },{
    value: ICON_018_01_PRESSURE_METER,
    icon: icons.icon_018_01_pressure_meter
  },{
    value: ICON_018_02_PRESSURE_METER_TRANSIENT,
    icon: icons.icon_018_02_pressure_meter_transient
  },{
    value: ICON_018_03_PRESSURE_METER,
    icon: icons.icon_018_03_pressure_meter
  },{
    value: ICON_018_04_PRESSURE_METER,
    icon: icons.icon_018_04_pressure_meter
  },{
    value: ICON_019_01_PLANT_CHLORINATION,
    icon: icons.icon_019_01_plant_chlorination
  },{
    value: ICON_019_02_PLANT_PURIFICATION,
    icon: icons.icon_019_02_plant_purification
  },{
    value: ICON_019_03_PLANT_WATER_TREATMENT,
    icon: icons.icon_019_03_plant_water_treatment
  },{
    value: ICON_019_04_PLANT_WATER_TREATMENT,
    icon: icons.icon_019_04_plant_water_treatment
  },{
    value: ICON_019_05_WATER_QUALITY,
    icon: icons.icon_019_05_water_quality
  },{
    value: ICON_020_01_RES_CELL_LEVEL,
    icon: icons.icon_020_01_res_cell_level
  },{
    value: ICON_021_01_SMART_IRRIGATION,
    icon: icons.icon_021_01_smart_irrigation
  },{
    value: ICON_022_01_TANK,
    icon: icons.icon_022_01_tank
  },{
    value: ICON_022_02_TANK,
    icon: icons.icon_022_02_tank
  },{
    value: ICON_022_03_STORM_TANK,
    icon: icons.icon_022_03_storm_tank
  },{
    value: ICON_023_01_TEMPERATURE_DEVICE,
    icon: icons.icon_023_01_temperature_device
  },{
    value: ICON_024_01_TRIFURCATION_BIFURCATION,
    icon: icons.icon_024_01_trifurcation_bifurcation
  },{
    value: ICON_025_01_WORK_ORDERS,
    icon: icons.icon_025_01_work_orders
  },{
    value: ICON_025_02_WORK_ORDERS,
    icon: icons.icon_025_02_work_orders
  },{
    value: ICON_025_03_WORK_ORDERS,
    icon: icons.icon_025_03_work_orders
  },{
    value: ICON_026_01_BELL,
    icon: icons.icon_026_01_bell
  },{
    value: ICON_026_02_ALARM,
    icon: icons.icon_026_02_alarm
  },{
    value: ICON_026_03_WARNING,
    icon: icons.icon_026_03_warning
  },{
    value: ICON_027_01_WELL,
    icon: icons.icon_027_01_well
  },{
    value: ICON_027_02_WELL,
    icon: icons.icon_027_02_well
  },{
    value: ICON_028_01_INDUSTRY,
    icon: icons.icon_028_01_industry
  },{
    value: ICON_029_01_EDAR,
    icon: icons.icon_029_01_edar
  },{
    value: ICON_030_01_MEASUREMENT_LOCATION,
    icon: icons.icon_030_01_measurement_location
  },{
    value: ICON_031_01_CHIP,
    icon: icons.icon_031_01_chip
  },{
    value: ICON_032_01_BROOM,
    icon: icons.icon_032_01_broom
  },{
    value: ICON_033_01_IRRIGATION_POND,
    icon: icons.icon_033_01_irrigation_pond
  },{
    value: ICON_034_01_DRAINAGE,
    icon: icons.icon_034_01_drainage
  },{
    value: ICON_035_01_FERTIRRIGATION_EQUIPMENT,
    icon: icons.icon_035_01_fertirrigation_equipment
  },{
    value: ICON_036_01_FLOW_PRESSURE,
    icon: icons.icon_036_01_flow_pressure
  },{
    value: ICON_037_01_GATEWAY,
    icon: icons.icon_037_01_gateway
  },{
    value: ICON_037_02_GATEWAY,
    icon: icons.icon_037_02_gateway
  },{
    value: ICON_038_01_LEAK_DETECTOR,
    icon: icons.icon_038_01_leak_detector
  },{
    value: ICON_038_02_LEAK_DETECTOR,
    icon: icons.icon_038_02_leak_detector
  },{
    value: ICON_038_03_LEAK_DETECTOR,
    icon: icons.icon_038_03_leak_detector
  },{
    value: ICON_039_01_WIFI_SLASH,
    icon: icons.icon_039_01_wifi_slash
  },{
    value: ICON_040_01_DATA_LOGGER,
    icon: icons.icon_040_01_data_logger
  },{
    value: ICON_040_02_DATA_LOGGER,
    icon: icons.icon_040_02_data_logger
  },{
    value: ICON_041_01_POSITIONING,
    icon: icons.icon_041_01_positioning
  },{
    value: ICON_042_01_FIND_LOCATION,
    icon: icons.icon_042_01_find_location
  },{
    value: ICON_043_01_LOCATION,
    icon: icons.icon_043_01_location
  },{
    value: ICON_044_01_ACTIVE,
    icon: icons.icon_044_01_active
  },{
    value: ICON_045_01_ACTUATION,
    icon: icons.icon_045_01_actuation
  },{
    value: ICON_046_01_ELECTRICIAN,
    icon: icons.icon_046_01_electrician
  },{
    value: ICON_046_02_PLUMBER,
    icon: icons.icon_046_02_plumber
  },{
    value: ICON_046_03_MECHANIC,
    icon: icons.icon_046_03_mechanic
  },{
    value: ICON_046_04_PREVENTIVE_RESOURCE,
    icon: icons.icon_046_04_preventive_resource
  },{
    value: ICON_046_05_WORKER,
    icon: icons.icon_046_05_worker
  },{
    value: ICON_046_06_LABOURER,
    icon: icons.icon_046_06_labourer
  },{
    value: ICON_047_01_EXPLOITATION,
    icon: icons.icon_047_01_exploitation
  },{
    value: ICON_048_01_SAMPLES,
    icon: icons.icon_048_01_samples
  },{
    value: ICON_049_01_PRESS,
    icon: icons.icon_049_01_press
  },{
    value: ICON_050_01_MANHOLE,
    icon: icons.icon_050_01_manhole
  },{
    value: ICON_050_02_MANHOLE,
    icon: icons.icon_050_02_manhole
  },{
    value: ICON_050_03_MANHOLE_END_CAP,
    icon: icons.icon_050_03_manhole_end_cap
  },{
    value: ICON_050_04_INSPECTION_HOLE,
    icon: icons.icon_050_04_inspection_hole
  },{
    value: ICON_051_01_PUMP_STATION,
    icon: icons.icon_051_01_pump_station
  },{
    value: ICON_052_01_RIVER_SEA,
    icon: icons.icon_052_01_river_sea
  },{
    value: ICON_053_01_SPILL,
    icon: icons.icon_053_01_spill
  },{
    value: ICON_053_02_SPILLWAY,
    icon: icons.icon_053_02_spillway
  },{
    value: ICON_054_01_UNDERPASS,
    icon: icons.icon_054_01_underpass
  },{
    value: ICON_055_01_WEATHER_STATION,
    icon: icons.icon_055_01_weather_station
  },{
    value: ICON_056_01_WEATHER_RADAR,
    icon: icons.icon_056_01_weather_radar
  },{
    value: ICON_057_01_FAT_TRAP,
    icon: icons.icon_057_01_fat_trap
  },{
    value: ICON_058_01_MICROTUNNEL,
    icon: icons.icon_058_01_microtunnel
  },{
    value: ICON_059_01_DIRTY_SEWAGE_ACCESS,
    icon: icons.icon_059_01_dirty_sewage_access
  },{
    value: ICON_060_01_LOCKING_MAINTENANCE_CHAMBER,
    icon: icons.icon_060_01_locking_maintenance_chamber
  },{
    value: ICON_061_01_UNDERGROUND_WATER_ACCESS,
    icon: icons.icon_061_01_underground_water_access
  },{
    value: ICON_062_01_TRUCK,
    icon: icons.icon_062_01_truck
  },{
    value: ICON_063_01_PARKING,
    icon: icons.icon_063_01_parking
  },{
    value: ICON_064_02_NO_GPS_SIGNAL,
    icon: icons.icon_064_02_no_gps_signal
  },{
    value: ICON_065_01_ON_ROAD,
    icon: icons.icon_065_01_on_road
  },{
    value: ICON_066_01_OFF_ROAD,
    icon: icons.icon_066_01_off_road
  },{
    value: ICON_067_01_SLUDGE,
    icon: icons.icon_067_01_sludge
  },{
    value: ICON_068_01_DIGGING_MAN,
    icon: icons.icon_068_01_digging_man
  },{
    value: ICON_069_01_CLOUD_SHARP,
    icon: icons.icon_069_01_cloud_sharp
  },{
    value: ICON_070_01_CAMERA,
    icon: icons.icon_070_01_camera
  },{
    value: ICON_071_01_HUB,
    icon: icons.icon_071_01_hub
  },{
    value: ICON_072_01_PRESSURE_CONTROL,
    icon: icons.icon_072_01_pressure_control
  }    
];

export const baseList = [
  {
    value: BASE_FORMAT_MARKER,
    icon: bases.marker,
    translateX: 4,
    translateY: 4,
    scale: 0.24,
    widthDefault: 32,
    heightDefault: 32,
    displacementXSprite: 35,
    displacementYSprite: 35
  },
  {
    value: BASE_FORMAT_PIN,
    icon: bases.pin,
    translateX: 4,
    translateY: 4,
    scale: 0.24,
    widthDefault: 32,
    heightDefault: 37.1,
    displacementXSprite: 34,
    displacementYSprite: 34
  },
  {
    value: BASE_FORMAT_STACK,
    icon: bases.stack,
    translateX: 15,
    translateY: 4.5,
    scale: 0.16,
    widthDefault: 46,
    heightDefault: 50,
    displacementXSprite: 27,
    displacementYSprite: 25
  },{
    value: BASE_FORMAT_BADGE,
    icon: bases.badge,
    translateX: 4.5,
    translateY: 1,
    scale: 0.155,
    widthDefault: 43,
    heightDefault: 18,
    displacementXSprite: 0,
    displacementYSprite: 0
  },{
    value: BASE_FORMAT_BADGE_STACK,
    icon: bases.badge_stack,
    translateX: 7.5,
    translateY: 8,
    scale: 0.27,
    widthDefault: 90,
    heightDefault: 44,
    displacementXSprite: 0,
    displacementYSprite: 0
  },{
    value: BASE_FORMAT_CLUSTER,
    icon: bases.cluster,
    translateX: 33,
    translateY: 25,
    scale: 0.18,
    widthDefault: 85,
    heightDefault: 85,
    displacementXSprite: 7.5,
    displacementYSprite: 7.5
  },
];
