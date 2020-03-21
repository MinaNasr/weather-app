export class Utils{
    public static convertTemp(temp, to){
        if(to){
            switch (to) {
                case 'celsuis':
                    return (temp * (9/5)) + 32
                    break;
            
                case 'fahrenheit':
                    return (temp - 32) * (5/9)
                    break;
            
                default:
                    break;
            }
        }
    }
}