import { v4 as uuidv4 } from "uuid";

export class TodoItemEntity {
    public readonly id: string = uuidv4();

    constructor(
        public readonly title: string, 
        public readonly description: string
    ) {}
}

export function TodoItem(props) {
    return (
        <div className="p-4 w-full rounded bg-slate-600">
            <h6>{props.item.title}</h6>
            <p>{props.item.description}</p>
        </div>
    );
}