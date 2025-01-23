
export const BASE_FORMAT_BADGE = "badge";
export const BASE_FORMAT_BADGE_STACK = "badge_stack";
export const BASE_FORMAT_CLUSTER = "cluster";
export const BASE_FORMAT_MARKER = "marker";
export const BASE_FORMAT_PIN = "pin";
export const BASE_FORMAT_STACK = "stack";

export const MODE_FORMAT_SELECTED = "selected";
export const MODE_FORMAT_INACTIVE = "inactive";
export const MODE_FORMAT_WARNING_YELLOW = "warning-yellow";
export const MODE_FORMAT_WARNING_ORANGE = "warning-orange";
export const MODE_FORMAT_SUCCESS = "success";
export const MODE_FORMAT_ERROR = "error";

/**
 * Mode format parts of icons:
 */
export type ModeFormatOption = "selected" | "inactive" | "warning-yellow" | "warning-orange" | "success"

/**
 * Icon available: 
 */

export type FormatStyle = 
    "001_01_acoustic_device" |
    "002_01_pump" |
    "002_02_pump" |
    "002_03_pump" |
    "003_01_bulk_meter" |
    "004_01_customer_contact" |
    "005_01_customer_meter" |
    "006_01_sensor_general" |
    "006_02_sensor_soil_moisture" |
    "006_03_sensor" |
    "007_01_supply_point" |
    "008_01_valve" |
    "008_02_valve_closed" |
    "008_03_valve_pressure_reducing_YW" |
    "008_04_valve_pressure_sustaining_YW" |
    "008_05_valve_closed_YW" |
    "008_06_valve_open_YW" |
    "008_07_valve_under_revision_YW" |
    "008_08_valve_hydraulic" |
    "008_09_valve_solenoid" |
    "009_01_dma_meter" |
    "010_01_flow_device" |
    "011_01_hydrant" |
    "011_02_hydrant_acemsa" |
    "011_03_hydrant" |
    "012_01_filter" |
    "013_01_control_point" |
    "014_01_suction_cup" |
    "014_02_suction_cup" |
    "015_01_junction" |
    "015_02_junction_node" |
    "016_01_spring" |
    "017_01_flow_meter" |
    "017_02_flow_meter" |
    "018_01_pressure_meter" |
    "018_02_pressure_meter_transient" |
    "018_03_pressure_meter" |
    "019_01_plant_chlorination" |
    "019_02_plant_purification" |
    "019_03_plant_water_treatment" |
    "019_04_plant_water_treatment" |
    "019_05_water_quality" |
    "020_01_res_cell_level"
;

/**
 * Objects for the icon definition.
 */

export type FormatIconObject = { 
    shape: string;
    iconSvg?: FormatStyle;
    mode?: string;
    backgroundColor?: string;
    scale?: number;
    iconColor?: string;
    anchor?: [number, number];
    elevation?: number;
}