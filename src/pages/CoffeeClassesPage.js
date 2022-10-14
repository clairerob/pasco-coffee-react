import ClassList from '../features/coffeeclasses/ClassList';
import { Container } from 'reactstrap';

const CoffeeClassesPage = () => {
    return (
        <div>
            <h1 className='text-center p-4'>Pasco Coffee Classes</h1>
            <Container className='pt-2'>
            <ClassList />
            </Container>
        </div>
    )
};

export default CoffeeClassesPage;