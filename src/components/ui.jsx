export function Button({variant='primary',className='',...props}){return <button className={`btn btn--${variant} ${className}`} {...props}/>}
export function Card({className='',...props}){return <section className={`card ${className}`} {...props}/>}
export function Badge({children,tone='neutral'}){return <span className={`badge badge--${tone}`}>{children}</span>}
export function PageHeader({eyebrow,title,description,action}){return <header className="page-header"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p></div>{action}</header>}
export function Field({label,hint,...props}){return <label className="field"><span>{label}</span><input {...props}/>{hint&&<small>{hint}</small>}</label>}