// Copyright 2018 Jóhann Þórir Jóhannsson. All rights reserved.
'use strict'

var CD_G1 = [
    [0.000, 0.2629, -0.142], [0.050, 0.2558, -0.142], [0.100, 0.2487, -0.1480], [0.150, 0.2413, -0.1380],
    [0.200, 0.2344, -0.132], [0.250, 0.2278, -0.128], [0.300, 0.2214, -0.1180], [0.350, 0.2155, -0.1020],
    [0.400, 0.2104, -0.086], [0.450, 0.2061, -0.058], [0.500, 0.2032, -0.0240], [0.550, 0.2020,  0.0280],
    [0.600, 0.2034,  0.131], [0.700, 0.2165,  0.260], [0.725, 0.2230,  0.3320], [0.750, 0.2313,  0.4160],
    [0.775, 0.2417,  0.516], [0.800, 0.2546,  0.640], [0.825, 0.2706,  0.7800], [0.850, 0.2901,  0.9400],
    [0.875, 0.3136,  1.116], [0.900, 0.3415,  1.276], [0.925, 0.3734,  1.4000], [0.950, 0.4084,  1.4560],
    [0.975, 0.4448,  1.428], [1.000, 0.4805,  1.324], [1.025, 0.5136,  1.1640], [1.050, 0.5427,  1.0000],
    [1.075, 0.5677,  0.824], [1.100, 0.5883,  0.680], [1.125, 0.6053,  0.5520], [1.150, 0.6191,  0.4040],
    [1.200, 0.6393,  0.250], [1.250, 0.6518,  0.142], [1.300, 0.6589,  0.0640], [1.350, 0.6621,  0.0080],
    [1.400, 0.6625, -0.036], [1.450, 0.6607, -0.068], [1.500, 0.6573, -0.0900], [1.550, 0.6528, -0.1080],
    [1.600, 0.6474, -0.122], [1.650, 0.6413, -0.132], [1.700, 0.6347, -0.1340], [1.750, 0.6280, -0.1400],
    [1.800, 0.6210, -0.138], [1.850, 0.6141, -0.138], [1.900, 0.6072, -0.1380], [1.950, 0.6003, -0.1380],
    [2.000, 0.5934, -0.134], [2.050, 0.5867, -0.126], [2.100, 0.5804, -0.1220], [2.150, 0.5743, -0.1160],
    [2.200, 0.5685, -0.110], [2.250, 0.5630, -0.106], [2.300, 0.5577, -0.1000], [2.350, 0.5527, -0.0920],
    [2.400, 0.5481, -0.086], [2.450, 0.5438, -0.082], [2.500, 0.5397, -0.0720], [2.600, 0.5325, -0.0610],
    [2.700, 0.5264, -0.053], [2.800, 0.5211, -0.043], [2.900, 0.5168, -0.0350], [3.000, 0.5133, -0.0280],
    [3.100, 0.5105, -0.021], [3.200, 0.5084, -0.017], [3.300, 0.5067, -0.0130], [3.400, 0.5054, -0.0140],
    [3.500, 0.5040, -0.010], [3.600, 0.5030, -0.008], [3.700, 0.5022, -0.0060], [3.800, 0.5016, -0.0060],
    [3.900, 0.5010, -0.004], [4.000, 0.5006, -0.004], [4.200, 0.4998, -0.0015], [4.400, 0.4995, -0.0015],
    [4.600, 0.4992, -0.001], [4.800, 0.4990, -0.001], [5.000, 0.4988, -0.0010]
];

var CD_G7 = [
    [0.000, 0.1198, -0.0020], [0.050, 0.1197, -0.002], [0.10, 0.1196, -0.004], [0.150, 0.1194, -0.002],
    [0.200, 0.1193,  0.0020], [0.250, 0.1194,  0.000], [0.30, 0.1194,  0.000], [0.350, 0.1194, -0.002],
    [0.400, 0.1193,  0.0000], [0.450, 0.1193,  0.002], [0.50, 0.1194, -0.002], [0.550, 0.1193,  0.002],
    [0.600, 0.1194,  0.0060], [0.650, 0.1197,  0.010], [0.70, 0.1202,  0.020], [0.725, 0.1207,  0.032],
    [0.750, 0.1215,  0.0440], [0.775, 0.1226,  0.064], [0.80, 0.1242,  0.096], [0.825, 0.1266,  0.160],
    [0.850, 0.1306,  0.2480], [0.875, 0.1368,  0.384], [0.90, 0.1464,  0.784], [0.925, 0.1660,  1.576],
    [0.950, 0.2054,  3.7560], [0.975, 0.2993,  3.240], [1.00, 0.3803,  0.848], [1.025, 0.4015,  0.112],
    [1.050, 0.4043, -0.0360], [1.075, 0.4034, -0.080], [1.10, 0.4014, -0.108], [1.125, 0.3987, -0.128],
    [1.150, 0.3955, -0.1420], [1.200, 0.3884, -0.148], [1.25, 0.3810, -0.156], [1.300, 0.3732, -0.150],
    [1.350, 0.3657, -0.1540], [1.400, 0.3580, -0.140], [1.50, 0.3440, -0.128], [1.550, 0.3376, -0.122],
    [1.600, 0.3315, -0.1100], [1.650, 0.3260, -0.102], [1.70, 0.3209, -0.098], [1.750, 0.3160, -0.086],
    [1.800, 0.3117, -0.0780], [1.850, 0.3078, -0.072], [1.90, 0.3042, -0.064], [1.950, 0.3010, -0.060],
    [2.000, 0.2980, -0.0580], [2.050, 0.2951, -0.058], [2.10, 0.2922, -0.060], [2.150, 0.2892, -0.056],
    [2.200, 0.2864, -0.0580], [2.250, 0.2835, -0.056], [2.30, 0.2807, -0.056], [2.350, 0.2779, -0.054],
    [2.400, 0.2752, -0.0540], [2.450, 0.2725, -0.056], [2.50, 0.2697, -0.054], [2.550, 0.2670, -0.054],
    [2.600, 0.2643, -0.0560], [2.650, 0.2615, -0.054], [2.70, 0.2588, -0.054], [2.750, 0.2561, -0.056],
    [2.800, 0.2533, -0.0540], [2.850, 0.2506, -0.054], [2.90, 0.2479, -0.056], [2.950, 0.2451, -0.054],
    [3.000, 0.2424, -0.0560], [3.100, 0.2368, -0.055], [3.20, 0.2313, -0.055], [3.300, 0.2258, -0.053],
    [3.400, 0.2205, -0.0510], [3.500, 0.2154, -0.048], [3.60, 0.2106, -0.046], [3.700, 0.2060, -0.043],
    [3.800, 0.2017, -0.0420], [3.900, 0.1975, -0.040], [4.00, 0.1935, -0.037], [4.200, 0.1861, -0.034],
    [4.400, 0.1793, -0.0315], [4.600, 0.1730, -0.029], [4.80, 0.1672, -0.027], [5.000, 0.1618, -0.026]
];

export class CoefficientOfDrag {
    /**
     * Create a lookup function.
     *   @param {string} system specifies what drag model to use - currently either 'G1' or 'G7'.
     *  If the system is not known, an error is thrown and subsequent lookups will be run-time errors.
     *  @returns a function of mach number giving the coefficient of drag.
     */
    constructor(system) {
        var CDTable;        
        if (system == 'G1') CDTable = CD_G1;
        else if (system == 'G7') CDTable = CD_G7;
        else throw `Unknown system "${system}"`;
        return (mach) =>  {
            let iBelow = 0;
            let iAbove = CDTable.length - 1;
            while (iBelow < iAbove - 1) {
                let candidate = Math.trunc((iBelow + iAbove) / 2);
                if (CDTable[candidate][0] < mach)  iBelow = candidate;
                else iAbove = candidate;
            }
            return CDTable[iBelow][1] + CDTable[iBelow][2] * (mach - CDTable[iBelow][0]);
        }
    }
}

/**
 *  Convert a G1 ballistic coefficient to G7.
 *    @param {Number} bc is the G1 coefficient to convert.
 *    @param {Number} mach is the velocity to consider as a mach number.j 
 *  @returns {Number} the equivalent G7 ballistic coefficient.
 */
export function ConvertG1toG7(bc, mach) {
    let g7 = new CoefficientOfDrag('G7');
    let g1 = new CoefficientOfDrag('G1');
    return bc * g7(mach) / g1(mach);
}
