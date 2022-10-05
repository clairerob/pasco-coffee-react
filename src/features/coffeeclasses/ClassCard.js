import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const ClassCard = ({ workshop }) => {
    const { image, name, description, date } = workshop;
    return (
        // link to booking class
        <Card>
            <CardImg width='100%' src={image} alt={name} />
            <CardImgOverlay>
                <CardTitle>{name}, {date}</CardTitle>
            </CardImgOverlay>
            <CardBody>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    )
};

export default ClassCard;