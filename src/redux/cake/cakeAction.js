
import { BUY_CAKE ,RESET} from './cakeType';

export const buyCake = () => {
    return {
      type: BUY_CAKE
    }
}

export const resetCake = () => {
  return {
    type: RESET
  }
}


