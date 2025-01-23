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
    color: "#319ACB",
  },
  {
    value: MODE_FORMAT_INACTIVE,
    color: "#D5D5D5",
  },
  {
    value: MODE_FORMAT_WARNING_YELLOW,
    color: "#E9C417",
  },
  {
    value: MODE_FORMAT_WARNING_ORANGE,
    color: "#FF9D5C",
  },
  {
    value: MODE_FORMAT_SUCCESS,
    color: "#86DC3D",
  },
  {
    value: MODE_FORMAT_ERROR,
    color: "#E37272",
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
  },
];

export const baseList = [
  {
    value: BASE_FORMAT_BADGE,
    icon: bases.badge,
    translateX: 4.5,
    translateY: 1,
    scale: 0.155
  },{
    value: BASE_FORMAT_BADGE_STACK,
    icon: bases.badge_stack,
    translateX: 7.5,
    translateY: 8,
    scale: 0.27
  },{
    value: BASE_FORMAT_CLUSTER,
    icon: bases.cluster,
    translateX: 34,
    translateY: 25,
    scale: 0.18
  },{
    value: BASE_FORMAT_MARKER,
    icon: bases.marker,
    translateX: 12,
    translateY: 11,
    scale: 0.24
  },
  {
    value: BASE_FORMAT_PIN,
    icon: bases.pin,
    translateX: 12,
    translateY: 12,
    scale: 0.24
  },
  {
    value: BASE_FORMAT_STACK,
    icon: bases.stack,
    translateX: 15,
    translateY: 4.5,
    scale: 0.16
  },
];
