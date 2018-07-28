
import {
    trigger,
    animate,
    transition,
    style,
    query
} from '@angular/animations';



export const fadeAnim = trigger('fadeAnim', [
    transition('* => *', [
        query(
            ':enter',
            [style({ opacity: 0, width:'100%', height:'100%' })],
            { optional: true }
        ),
        query(
            ':leave',
            [style({ opacity: 1 }), animate('0.6s ease-in-out', style({ opacity: 0, width:'100%', height:'100%' }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ opacity: 0 }), animate('1.5s ease-in-out', style({ opacity: 1, width:'100%', height:'100%' }))],
            { optional: true}

        )
    ])
]);

/*
export const fadeAnim: AnimationTriggerMetadata =

        trigger('fadeAnim', [

            state('void', style({position:'absolute', width:'100%', height:'100%', opacity: 0})),
            state('*', style({position:'absolute', width:'100%', height:'100%', opacity: 1})),

            query(':enter', [
                style({ opacity: 0 }), animate('0.8s ease-in-out', style({transform: 'translateY(0%', opacity: 1}))],
                { optional: true}
                
            ]),
            query(':leave',[
                style({
                    transform: 'translateY(0%)'}),
                    animate('0.8s ease-in-out', style({transform: 'translateY(20%)', opacity: 0}))
                
         ])

]);*/