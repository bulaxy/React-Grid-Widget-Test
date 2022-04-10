import { WidthProvider, Responsive } from "react-grid-layout";
import WidgetComponents from "./Widgets/index";
import { useReactGridContext } from "../contexts/ReactGridContext"

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function GridContentLayout() {
    const { items, editMode } = useReactGridContext()

    return (
        <ResponsiveReactGridLayout
            className="layout"
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={30}
            isDraggable={editMode}
            isResizable={editMode}
        >
            {/* {items
                .map(o =>
                    <div key={`Grid-Item-${o.id}`} data-grid={o.dataGrid} className="card" style={{ height: '100%', overfloat: o.overfloat || 'auto' }}>
                        <WidgetComponents widgetName={o.name} setting={o.setting} />
                    </div>
                )
            } */}
            {/* <div key={`Grid-Item-1`} data-grid={{ w: 3, h: 5, x: 0, y: 2 }} className="card" style={{ height: '100%', overflow: 'hidden' }}>
                <WidgetComponents widgetName={'TableWidget'} />
            </div>
            <div key={`Grid-Item-2`} data-grid={{ w: 3, h: 5, x: 0, y: 2 }} className="card" style={{ height: '100%', overflow: 'hidden' }}>
                <WidgetComponents widgetName={'TableWidget'} setting={{ header: '123' }} />
            </div> */}
            <div key={`Grid-Item-3`} data-grid={{ w: 12, h: 12, x: 0, y: 2 }} className="card" style={{ height: '100%' }}>
                <WidgetComponents widgetName={'DistanceMatrixWidget'} setting={{ header: 'Distance Matrix' }} />
            </div>
        </ResponsiveReactGridLayout>
    );
}
