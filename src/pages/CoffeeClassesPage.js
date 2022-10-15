// import ClassList from '../features/coffeeclasses/ClassList';
import { Container } from 'reactstrap';
import ClassFilterBar from '../features/coffeeclasses/ClassFilterBar';

const CoffeeClassesPage = () => {
    return (
        <div>
            <h1 className='text-center pt-5'>pasco coffee classes</h1>
        
            <Container className='pt-2'>
                    <ClassFilterBar />
            {/* <ClassList /> */}
            </Container>
        </div>
    )
};

export default CoffeeClassesPage;