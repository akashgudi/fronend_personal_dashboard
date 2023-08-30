import './menu-item.scss'

export function MenuItem({label,icon}) {
  return (
    <div className="menu-item">
      <span className="material-symbols-outlined">{icon}</span>
      <span className="shrink-text">{label}</span>
    </div>
  );
}


MenuItem.defaultProps = {
    label : 'Test',
    icon : 'calendar_month'
}