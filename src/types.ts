
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
    "020_01_res_cell_level" |
    "021_01_smart_irrigation" |
    "022_01_tank" |
    "022_02_tank" |
    "022_03_storm_tank" |
    "023_01_temperature_device" |
    "024_01_trifurcation_bifurcation" |
    "025_01_work_orders" |
    "025_02_work_orders" |
    "025_03_work_orders" |
    "026_01_bell" |
    "026_02_alarm" |
    "026_03_warning" |
    "027_01_well" |
    "027_02_well" |
    "028_01_industry" |
    "029_01_edar" |
    "030_01_measurement_location" |
    "031_01_chip" |
    "032_01_broom" |
    "033_01_irrigation_pond" |
    "034_01_drainage" |
    "035_01_fertirrigation_equipment" |
    "036_01_flow_pressure" |
    "037_01_gateway" |
    "038_01_leak_detector" |
    "038_02_leak_detector" |
    "039_01_wifi_slash" |
    "040_01_data_logger" |
    "041_01_positioning" |
    "042_01_find_location" |
    "043_01_location" |
    "044_01_active" |
    "045_01_actuation" |
    "046_01_electrician" |
    "046_02_plumber" |
    "046_03_mechanic" |
    "046_04_preventive_resource" |
    "046_05_worker" |
    "046_06_labourer" |
    "047_01_exploitation" |
    "048_01_samples" |
    "049_01_press" |
    "050_01_manhole" |
    "050_02_manhole" |
    "050_03_manhole_end_cap" |
    "050_04_inspection_hole" |
    "051_01_pump_station" |
    "052_01_river_sea" |
    "053_01_spill" |
    "053_02_spillway" |
    "054_01_underpass" |
    "055_01_weather_station" |
    "056_01_weather_radar" |
    "057_01_fat_trap" |
    "058_01_microtunnel" |
    "059_01_dirty_sewage_access" |
    "060_01_locking_maintenance_chamber" |
    "061_01_underground_water_access" |
    "062_01_truck" |
    "063_01_parking" |
    "064_02_no_gps_signal" |
    "065_01_on_road" |
    "066_01_off_road" |
    "067_01_sludge" |
    "068_01_digging_man" |
    "069_01_cloud_sharp" |
    "070_01_camera"
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