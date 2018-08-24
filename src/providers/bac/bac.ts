import { Injectable } from '@angular/core';
import { BAC } from '../../models/bac.model';

@Injectable()
export class BacProvider {

calculateBAC(ouncesConsumed: number, percentAlcohol: number, weightLbs: number, hours:number){
  const BAC = (+ouncesConsumed + +percentAlcohol + +weightLbs + +hours);
  
  return <BAC>{
    BACfromModel: BAC,
    Classification: this.classifyBAC(BAC),
  }
};

private classifyBAC(BAC: number){
  if (BAC < 5){
    return 'less than 5 dood!'
  }
  else if (BAC > 4){
    return 'greater than 4 dood!'
  }
  
}


}
