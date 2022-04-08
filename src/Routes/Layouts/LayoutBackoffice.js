import { Container, Row, Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import ActivitiesForm from '../../Components/Activities/ActivitiesForm';
import CategoriesFormHook from '../../Components/Categories/CategoriesFormHook';
import NewsForm from '../../Components/News/NewsForm';
import SlidesFormHook from '../../Components/Slides/SlidesFormHook';
import TestimonialForm from '../../Components/Testimonials/TestimonialsForm';
import UserForm from '../../Components/Users/UsersForm';
import SchoolCampaign from '../../Campaigns/School/SchoolCampaign';
import ToysCampaign from '../../Campaigns/Toys/ToysCampaign';
import MembersForm from '../../Components/Members/MembersForm';
import ProjectsForm from '../../Components/Projects/ProjectsForm';
import About from '../../Components/About/Nosotros';
import Sidebar from '../../Components/BackOffice/Sidebar/Sidebar';
import Header from '../../Components/BackOffice/Header/Header';
import MembersList from '../../Components/BackOffice/Members/MembersList';
import Categories from '../../Components/Categories/Categories';
import TableSliders from '../../Components/BackOffice/Sliders/TableSliders';

const LayoutBackoffice = () => {
  return (
    <>
      <Container fluid>
        <header>
          <Header />
        </header>
      </Container>
      <Container fluid className="container-fluid vh-100 border border-2">
        <Row>
          <Sidebar />
          <Col>
            <Switch>
              <Route exact path="/backoffice" component={() => <div>Hola</div>} />
              <Route
                exact
                path="/backoffice/create-activity"
                component={ActivitiesForm}
              />
              <Route
                exact
                path="/backoffice/create-news"
                component={NewsForm}
              />
              <Route
                exact
                path="/backoffice/slides"
                component={TableSliders}
              />

              <Route
                exact
                path="/backoffice/slides/edit"
                component={SlidesFormHook}
              />
              <Route
                exact
                path="/backoffice/slides/create"
                component={SlidesFormHook}
              />

              <Route
                exact
                path="/backoffice/create-testimonials"
                component={TestimonialForm}
              />
              <Route
                exact
                path="/backoffice/create-user"
                component={UserForm}
              />
              <Route
                exact
                path="/backoffice/create-member"
                component={MembersForm}
              />
              <Route
                exact
                path="/backoffice/categories"
                component={Categories}
              />
              <Route
                exact
                path="/backoffice/categories/create"
                component={CategoriesFormHook}
              />
              <Route
                exact
                path="/backoffice/categories/edit"
                component={CategoriesFormHook}
              />
              <Route
                exact
                path="/backoffice/create-project"
                component={ProjectsForm}
              />
              <Route
                exact
                path="/backoffice/school-campaign"
                component={SchoolCampaign}
              />
              <Route
                exact
                path="/backoffice/toys-campaign"
                component={ToysCampaign}
              />
              <Route exact path="/backoffice/Nosotros" component={About} />
              <Route
                exact
                path="/backoffice/Miembros"
                component={MembersList}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default LayoutBackoffice;
