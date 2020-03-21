export class Utils{

    private svgsArrOfObjs = [
        {href:"#right-ray", x:"86.93px" , y:"9.84px", width:"10.07px", height:"10.07px"},
        {href:"#middle-ray", x:"66.1px" , y:"0.29px", width:"3.22px", height:"12.9px"},
        {href:"#left-ray", x:"33.66px" , y:"14.61px", width:"10.06px", height:"10.06px"},
        {href:"#sun", x:"41.44px" , y:"20.11px", width:"54.82px", height:"53.79px"},
        {href:"#cloud", x:"0px" , y:"41.65px", width:"96.74px", height:"55.05px"},
        {href:"#sunny-sun", x:"14.06px" , y:"14.44px", width:"37.88px", height:"37.88px"},
        {href:"#sunny-shadow", x:"0px" , y:"0.19px", width:"66px", height:"65.63px"},
      
    ]

    public static convertTemp(temp, to){
        if(to){
            switch (to) {
                case 'fahrenheit':
                    return Math.ceil((temp * (9/5)) + 32)
                    break;
            
                case 'celsuis':
                    return Math.ceil((temp - 32) * (5/9))
                    break;
            
                default:
                    break;
            }
        }
    }

    public static getSVGS(icon:string){
        switch (icon) {
            case 'value':
                
                break;
        
            default:
                break;
        }
    }

    public static getDateAsString(date){
        let newDate = new Date(date * 1000).toDateString().split(' ')
        return `${newDate[0]} ${newDate[1]} ${newDate[2]},${newDate[3]}`
    }

    public static getTimeHourly(time){
        let date = new Date(time * 1000);
        let newTime = date.toString().split(' ')[4];
        let returnedTime = [newTime.split(':')[0],newTime.split(':')[1]].join(':');
        return returnedTime;
    }
    public static getDay(time){
        let date = new Date(time * 1000);
        let returnedDay = [date.toDateString().split(' ')[2],date.toDateString().split(' ')[1]].join(' ');
        return returnedDay;
    }
}