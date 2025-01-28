import * as icons from "./icons/index.js";
import * as bases from "../bases/index.js";

import {
  BASE_FORMAT_BADGE,
  BASE_FORMAT_BADGE_STACK,
  BASE_FORMAT_CLUSTER,
  BASE_FORMAT_MARKER,
  BASE_FORMAT_PIN,
  BASE_FORMAT_STACK,
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
    value: "001_01_acoustic_device",
    icon: icons.icon_001_01_acoustic_device,
  },{
    value: "002_01_pump",
    icon: icons.icon_002_01_pump
  },{
    value: "002_02_pump",
    icon: icons.icon_002_02_pump
  },{
    value: "002_03_pump",
    icon: icons.icon_002_03_pump
  },{
    value: "003_01_bulk_meter",
    icon: icons.icon_003_01_bulk_meter
  },{
    value: "004_01_customer_contact",
    icon: icons.icon_004_01_customer_contact
  },{
    value: "005_01_customer_meter",
    icon: icons.icon_005_01_customer_meter
  },{
    value: "006_01_sensor_general",
    icon: icons.icon_006_01_sensor_general
  },{
    value: "006_02_sensor_soil_moisture",
    icon: icons.icon_006_02_sensor_soil_moisture
  },{
    value: "006_03_sensor",
    icon: icons.icon_006_03_sensor
  },{
    value: "007_01_supply_point",
    icon: icons.icon_007_01_supply_point
  },{
    value: "008_01_valve",
    icon: icons.icon_008_01_valve
  },{
    value: "008_02_valve_closed",
    icon: icons.icon_008_02_valve_closed
  },{
    value: "008_03_valve_pressure_reducing_YW",
    icon: icons.icon_008_03_valve_pressure_reducing_YW
  },{
    value: "008_04_valve_pressure_sustaining_YW",
    icon: icons.icon_008_04_valve_pressure_sustaining_YW
  },{
    value: "008_05_valve_closed_YW",
    icon: icons.icon_008_05_valve_closed_YW
  },{
    value: "008_06_valve_open_YW",
    icon: icons.icon_008_06_valve_open_YW
  },{
    value: "008_07_valve_under_revision_YW",
    icon: icons.icon_008_07_valve_under_revision_YW
  },{
    value: "008_08_valve_hydraulic",
    icon: icons.icon_008_08_valve_hydraulic
  },{
    value: "008_09_valve_solenoid",
    icon: icons.icon_008_09_valve_solenoid
  },{
    value: "009_01_dma_meter",
    icon: icons.icon_009_01_dma_meter
  },{
    value: "010_01_flow_device",
    icon: icons.icon_010_01_flow_device
  },{
    value: "011_01_hydrant",
    icon: icons.icon_011_01_hydrant
  },{
    value: "011_02_hydrant_acemsa",
    icon: icons.icon_011_02_hydrant_acemsa
  },{
    value: "011_03_hydrant",
    icon: icons.icon_011_03_hydrant
  },{
    value: "012_01_filter",
    icon: icons.icon_012_01_filter
  },{
    value: "013_01_control_point",
    icon: icons.icon_013_01_control_point
  },{
    value: "014_01_suction_cup",
    icon: icons.icon_014_01_suction_cup
  },{
    value: "014_02_suction_cup",
    icon: icons.icon_014_02_suction_cup
  },{
    value: "015_01_junction",
    icon: icons.icon_015_01_junction
  },{
    value: "015_02_junction_node",
    icon: icons.icon_015_02_junction_node
  },{
    value: "016_01_spring",
    icon: icons.icon_016_01_spring
  },{
    value: "017_01_flow_meter",
    icon: icons.icon_017_01_flow_meter
  },{
    value: "017_02_flow_meter",
    icon: icons.icon_017_02_flow_meter
  },{
    value: "018_01_pressure_meter",
    icon: icons.icon_018_01_pressure_meter
  },{
    value: "018_02_pressure_meter_transient",
    icon: icons.icon_018_02_pressure_meter_transient
  },{
    value: "018_03_pressure_meter",
    icon: icons.icon_018_03_pressure_meter
  },{
    value: "019_01_plant_chlorination",
    icon: icons.icon_019_01_plant_chlorination
  },{
    value: "019_02_plant_purification",
    icon: icons.icon_019_02_plant_purification
  },{
    value: "019_03_plant_water_treatment",
    icon: icons.icon_019_03_plant_water_treatment
  },{
    value: "019_04_plant_water_treatment",
    icon: icons.icon_019_04_plant_water_treatment
  },{
    value: "019_05_water_quality",
    icon: icons.icon_019_05_water_quality
  },{
    value: "020_01_res_cell_level",
    icon: icons.icon_020_01_res_cell_level
  },{
    value: "021_01_smart_irrigation",
    icon: icons.icon_021_01_smart_irrigation
  },{
    value: "022_01_tank",
    icon: icons.icon_022_01_tank
  },{
    value: "022_02_tank",
    icon: icons.icon_022_02_tank
  },{
    value: "022_03_storm_tank",
    icon: icons.icon_022_03_storm_tank
  },{
    value: "023_01_temperature_device",
    icon: icons.icon_023_01_temperature_device
  },{
    value: "024_01_trifurcation_bifurcation",
    icon: icons.icon_024_01_trifurcation_bifurcation
  },{
    value: "025_01_work_orders",
    icon: icons.icon_025_01_work_orders
  },{
    value: "025_02_work_orders",
    icon: icons.icon_025_02_work_orders
  },{
    value: "025_03_work_orders",
    icon: icons.icon_025_03_work_orders
  },{
    value: "026_01_bell",
    icon: icons.icon_026_01_bell
  },{
    value: "026_02_alarm",
    icon: icons.icon_026_02_alarm
  },{
    value: "026_03_warning",
    icon: icons.icon_026_03_warning
  },{
    value: "027_01_well",
    icon: icons.icon_027_01_well
  },{
    value: "027_02_well",
    icon: icons.icon_027_02_well
  },{
    value: "028_01_industry",
    icon: icons.icon_028_01_industry
  },{
    value: "029_01_edar",
    icon: icons.icon_029_01_edar
  },{
    value: "030_01_measurement_location",
    icon: icons.icon_030_01_measurement_location
  },{
    value: "031_01_chip",
    icon: icons.icon_031_01_chip
  },{
    value: "032_01_broom",
    icon: icons.icon_032_01_broom
  },{
    value: "033_01_irrigation_pond",
    icon: icons.icon_033_01_irrigation_pond
  },{
    value: "034_01_drainage",
    icon: icons.icon_034_01_drainage
  },{
    value: "035_01_fertirrigation_equipment",
    icon: icons.icon_035_01_fertirrigation_equipment
  },{
    value: "036_01_flow_pressure",
    icon: icons.icon_036_01_flow_pressure
  },{
    value: "037_01_gateway",
    icon: icons.icon_037_01_gateway
  },{
    value: "038_01_leak_detector",
    icon: icons.icon_038_01_leak_detector
  },{
    value: "038_02_leak_detector",
    icon: icons.icon_038_02_leak_detector
  },{
    value: "039_01_wifi_slash",
    icon: icons.icon_039_01_wifi_slash
  },{
    value: "040_01_data_logger",
    icon: icons.icon_040_01_data_logger
  },{
    value: "041_01_positioning",
    icon: icons.icon_041_01_positioning
  },{
    value: "042_01_find_location",
    icon: icons.icon_042_01_find_location
  },{
    value: "043_01_location",
    icon: icons.icon_043_01_location
  },{
    value: "044_01_active",
    icon: icons.icon_044_01_active
  },{
    value: "045_01_actuation",
    icon: icons.icon_045_01_actuation
  },{
    value: "046_01_electrician",
    icon: icons.icon_046_01_electrician
  },{
    value: "046_02_plumber",
    icon: icons.icon_046_02_plumber
  },{
    value: "046_03_mechanic",
    icon: icons.icon_046_03_mechanic
  },{
    value: "046_04_preventive_resource",
    icon: icons.icon_046_04_preventive_resource
  },{
    value: "046_05_worker",
    icon: icons.icon_046_05_worker
  },{
    value: "046_06_labourer",
    icon: icons.icon_046_06_labourer
  },{
    value: "047_01_exploitation",
    icon: icons.icon_047_01_exploitation
  },{
    value: "048_01_samples",
    icon: icons.icon_048_01_samples
  },{
    value: "049_01_press",
    icon: icons.icon_049_01_press
  },{
    value: "050_01_manhole",
    icon: icons.icon_050_01_manhole
  },{
    value: "050_02_manhole",
    icon: icons.icon_050_02_manhole
  },{
    value: "050_03_manhole_end_cap",
    icon: icons.icon_050_03_manhole_end_cap
  },{
    value: "050_04_inspection_hole",
    icon: icons.icon_050_04_inspection_hole
  },{
    value: "051_01_pump_station",
    icon: icons.icon_051_01_pump_station
  },{
    value: "052_01_river_sea",
    icon: icons.icon_052_01_river_sea
  },{
    value: "053_01_spill",
    icon: icons.icon_053_01_spill
  },{
    value: "053_02_spillway",
    icon: icons.icon_053_02_spillway
  },{
    value: "054_01_underpass",
    icon: icons.icon_054_01_underpass
  },{
    value: "055_01_weather_station",
    icon: icons.icon_055_01_weather_station
  },{
    value: "056_01_weather_radar",
    icon: icons.icon_056_01_weather_radar
  },{
    value: "057_01_fat_trap",
    icon: icons.icon_057_01_fat_trap
  },{
    value: "058_01_microtunnel",
    icon: icons.icon_058_01_microtunnel
  },{
    value: "059_01_dirty_sewage_access",
    icon: icons.icon_059_01_dirty_sewage_access
  },{
    value: "060_01_locking_maintenance_chamber",
    icon: icons.icon_060_01_locking_maintenance_chamber
  },{
    value: "061_01_underground_water_access",
    icon: icons.icon_061_01_underground_water_access
  },{
    value: "062_01_truck",
    icon: icons.icon_062_01_truck
  },{
    value: "063_01_parking",
    icon: icons.icon_063_01_parking
  },{
    value: "064_02_no_gps_signal",
    icon: icons.icon_064_02_no_gps_signal
  },{
    value: "065_01_on_road",
    icon: icons.icon_065_01_on_road
  },{
    value: "066_01_off_road",
    icon: icons.icon_066_01_off_road
  },{
    value: "067_01_sludge",
    icon: icons.icon_067_01_sludge
  },{
    value: "068_01_digging_man",
    icon: icons.icon_068_01_digging_man
  },{
    value: "069_01_cloud_sharp",
    icon: icons.icon_069_01_cloud_sharp
  },{
    value: "070_01_camera",
    icon: icons.icon_070_01_camera
  }
];

export const baseList = [
  {
    value: BASE_FORMAT_BADGE,
    icon: bases.badge,
    translateX: 4.5,
    translateY: 1,
    scale: 0.155,
    widthDefault: 43,
    heightDefault: 18
  },{
    value: BASE_FORMAT_BADGE_STACK,
    icon: bases.badge_stack,
    translateX: 7.5,
    translateY: 8,
    scale: 0.27,
    widthDefault: 90,
    heightDefault: 44
  },{
    value: BASE_FORMAT_CLUSTER,
    icon: bases.cluster,
    translateX: 34,
    translateY: 25,
    scale: 0.18,
    widthDefault: 85,
    heightDefault: 85
  },{
    value: BASE_FORMAT_MARKER,
    icon: bases.marker,
    translateX: 12,
    translateY: 11,
    scale: 0.24,
    widthDefault: 48,
    heightDefault: 53
  },
  {
    value: BASE_FORMAT_PIN,
    icon: bases.pin,
    translateX: 12,
    translateY: 12,
    scale: 0.24,
    widthDefault: 48,
    heightDefault: 53
  },
  {
    value: BASE_FORMAT_STACK,
    icon: bases.stack,
    translateX: 15,
    translateY: 4.5,
    scale: 0.16,
    widthDefault: 46,
    heightDefault: 50
  },
];
