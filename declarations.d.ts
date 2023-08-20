declare module '@apinanyogaratnam/web-watch' {
    export interface Props {
        event_name: string;
        event_data: {
            [key: string]: any;
        };
    }

    export function event(props: Props): Promise<void>;
}
