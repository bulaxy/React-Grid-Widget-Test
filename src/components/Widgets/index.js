import TableWidget from "./TableWidget"

export default function WidgetComponents(props) {
    const { widgetName } = props

    const components = {
        TableWidget: TableWidget
    }

    const Widget = components[widgetName]

    return <Widget />
}