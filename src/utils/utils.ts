export class Utils {

    // an array of objects contains all meta data about each SVG in the system

    public static svgsArrOfObjs = [
        {href: '#right-ray', x: '86.93px' , y: '9.84px', width: '10.07px', height: '10.07px'},
        {href: '#middle-ray', x: '66.1px' , y: '0.29px', width: '3.22px', height: '12.9px'},
        {href: '#left-ray', x: '33.66px' , y: '14.61px', width: '10.06px', height: '10.06px'},
        {href: '#sun', x: '41.44px' , y: '20.11px', width: '54.82px', height: '53.79px'},
        {href: '#cloud', x: '0px' , y: '41.65px', width: '96.74px', height: '55.05px'},
        {href: '#sunny-shadow', x: '15px' , y: '0.19px', width: '66px', height: '65.63px'},
        {href: '#sunny-sun', x: '29.06px' , y: '14.44px', width: '37.88px', height: '37.88px'},

    ];

    // a function to convert temperature from celsuis to fahrenheit and viseversa

    public static convertTemp(temp: number, to: string) {
        if (to) {
            switch (to) {
                case 'fahrenheit':
                    return Math.ceil((temp * (9 / 5)) + 32);
                    break;

                case 'celsuis':
                    return Math.ceil((temp - 32) * (5 / 9));
                    break;

                default:
                    break;
            }
        }
    }

    // a function that take an icon as a string and return array of svgs that form the proper image

    public static getSVGS(icon: string) {
        let result;
        if (icon && (icon === 'clear-night' || icon === 'clear-day')) {
            result =  this.svgsArrOfObjs.filter(record => {
                return record.href === '#sunny-sun' ||
                record.href === '#sunny-shadow';
            });

        } else if (icon && (icon === 'cloudy' || icon === 'partly-cloudy-day' || icon === 'partly-cloudy-night' )) {
            result =  this.svgsArrOfObjs.filter(record => {
                return record.href === '#sun' ||
                record.href === '#cloud' ||
                record.href === '#left-ray' ||
                record.href === '#middle-ray' ||
                record.href === '#right-ray';
            });

        } else {
            result =  this.svgsArrOfObjs.filter(record => {
                return record.href === '#sun' ||
                record.href === '#cloud' ||
                record.href === '#left-ray' ||
                record.href === '#middle-ray' ||
                record.href === '#right-ray';
            });

        }
        return result;
    }

    // a function that convert date from milliseconds to a string formted date

    public static getDateAsString(date: number) {
        const newDate = new Date(date * 1000).toDateString().split(' ');
        return `${newDate[0]} ${newDate[1]} ${newDate[2]},${newDate[3]}`;
    }

    // a function that convert date from milliseconds to hour format

    public static getTimeHourly(time: number) {
        const date = new Date(time * 1000);
        const newTime = date.toString().split(' ')[4];
        const returnedTime = [newTime.split(':')[0], newTime.split(':')[1]].join(':');
        return returnedTime;
    }

    // a function that return day from a milliseonds date format

    public static getDay(time: number) {
        const date = new Date(time * 1000);
        const returnedDay = [date.toDateString().split(' ')[2], date.toDateString().split(' ')[1]].join(' ');
        return returnedDay;
    }
}
