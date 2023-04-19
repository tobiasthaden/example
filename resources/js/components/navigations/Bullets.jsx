export function Nav(props) {
    return (
        <nav className="w-full flex justify-center space-x-2 mt-2" {...props} />
    );
}

export function Active(props) {
    return (
        <button
            className="h-2 w-2 rounded-full text-xs text-transparent bg-black  border border-black"
            {...props}
        />
    );
}

export function Item(props) {
    return (
        <button
            className="h-2 w-2 rounded-full text-xs text-transparent bg-transparent border border-black"
            {...props}
        />
    );
}
