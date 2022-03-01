import TableWidget from "./TableWidget"
import Card from 'react-bootstrap/Card'
import CloseButton from 'react-bootstrap/CloseButton'
import { useReactGridContext } from "../../contexts/ReactGridContext"

export default function WidgetComponents(props) {
    const { widgetName, setting } = props
    const { editMode } = useReactGridContext()

    const components = {
        TableWidget: TableWidget
    }

    const Widget = components[widgetName]

    if (setting?.header || editMode) {
        return <>
            <Card.Header className='d-flex justify-content-between align-items-center pb-0'>
                <Card.Title>{setting.header}</Card.Title>
                {editMode && <CloseButton />}
            </Card.Header>
            <Card.Body className='p-0'>
                <Widget />
            </Card.Body>
        </>
    }

    return <Widget />
}