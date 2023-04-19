export default function Blockquote({ children, caption, ...props }) {
    return (
        <figure {...props}>
            <blockquote className="text-2xl italic">{children}</blockquote>
            {!!caption && <figcaption>{caption}</figcaption>}
        </figure>
    );
}
