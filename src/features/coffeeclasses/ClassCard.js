import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from 'reactstrap';

const ClassCard = ({ workshop }) => {
    const { image, name, description, date } = workshop;
    return (
        // link to booking class
        // <Card>
        //     {/* <CardImg width='100%' src={image} alt={name} />
        //     <CardImgOverlay>
        //         <CardTitle>{name}, {date}</CardTitle>
        //     </CardImgOverlay>
        //     <CardBody>
        //         <CardText>{description}</CardText>
        //     </CardBody> */}
        //     <h1>classname</h1>
        //     <p>words about class</p>
        // </Card>
        <div>does it work now</div>
    )
};

export default ClassCard;