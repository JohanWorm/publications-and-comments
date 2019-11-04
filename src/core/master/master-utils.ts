import * as moment from 'moment';

export class MasterUtils {

    public getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    public getDateFromNow() {
        return moment(new Date()).locale('es').fromNow();
    }

}