# drag-model
Coefficient of Drag for ballistics.

The coefficient of drag is a function of the mach number so the argument to 


## Use 
```javascript
import { CoeffientOfDrag } from 'drag-model';

let g7 = new CoefficientOfDrag('G7');
let mach1 = 343.0; //  m/s in 20°C dry air.
let velocity = 920.0; // m/s
let cd = g7(velocity/mach1):
```

