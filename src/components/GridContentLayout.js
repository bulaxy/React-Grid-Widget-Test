import { WidthProvider, Responsive } from "react-grid-layout";
import useReactGridMode from "../hooks/useReactGridMode";
import WidgetComponents from "./Widgets/index";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function GridContentLayout() {
    const { items } = useReactGridMode()
    return (
        <ResponsiveReactGridLayout
            className="layout"
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={30}
        >
            {items
                .map(o =>
                    <div key={`Grid-Item-${o.id}`} data-grid={o.dataGrid} className="card" style={{ height: '100%' }}>

                        <WidgetComponents widgetName={o.name} />
                    </div>
                )
            }
            <div key={`Grid-Item-1`} data-grid={{ w: 3, h: 5, x: 0, y: 2 }} className="card" style={{ height: '100%', overflow: 'auto' }}>
                <WidgetComponents widgetName={'TableWidget'} />
            </div>
        </ResponsiveReactGridLayout>
    );
}
