import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
// const Users = React.lazy(() => import('./views/users/Users'));
// const User = React.lazy(() => import('./views/users/User'));
const Users = React.lazy(() => import('./components/users/index'));
const Add = React.lazy(() => import('./components/users/add'));
const UserEdit = React.lazy(() => import('./components/users/edit'));

const Plans = React.lazy(() => import('./components/plans/index'));
const AddPlan = React.lazy(() => import('./components/plans/add'));
const EditPlan = React.lazy(() => import('./components/plans/edit'));

const CustomerPlans = React.lazy(() => import('./components/connections/index'));
const AddCustomerPlans = React.lazy(() => import('./components/connections/add'));
const EditCustomerPlans = React.lazy(() => import('./components/connections/edit'));

const Bill = React.lazy(() => import('./components/bill/index'));
const AddBill = React.lazy(() => import('./components/bill/add'));
const EditBill = React.lazy(() => import('./components/bill/edit'));

const Areas = React.lazy(() => import('./components/areas/index'));
const AddArea = React.lazy(() => import('./components/areas/add'));
const EditArea = React.lazy(() => import('./components/areas/edit'));

const Payments = React.lazy(() => import('./components/payments/index'));
const AddPayment = React.lazy(() => import('./components/payments/add'));
const EditPayment = React.lazy(() => import('./components/payments/edit'));

const Gst = React.lazy(() => import('./components/gst/index'));
const AddGst = React.lazy(() => import('./components/gst/add'));
const EditGst = React.lazy(() => import('./components/gst/edit'));

const Installation = React.lazy(() => import('./components/installation/index'));
const AddInstallation = React.lazy(() => import('./components/installation/add'));
const EditInstallation = React.lazy(() => import('./components/installation/edit'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/add',  name: 'User Add', component: Add },
  { path: '/users/edit/:id', name: 'User Edit', component: UserEdit },
  { path: '/plans', exact: true,  name: 'Plans', component: Plans },
  { path: '/plans/add',  name: 'Plan Add', component: AddPlan },
  { path: '/plans/edit/:id', name: 'Plan Edit', component: EditPlan },
  { path: '/connections', exact: true,  name: 'connections', component: CustomerPlans },
  { path: '/connections/add',  name: 'connections Add', component: AddCustomerPlans },
  { path: '/connections/edit/:id', name: 'connections Edit', component: EditCustomerPlans },
  { path: '/bills', exact: true,  name: 'Bills', component: Bill },
  { path: '/bills/add',  name: 'Bill Add', component: AddBill },
  { path: '/bills/edit/:id', name: 'Bill Edit', component: EditBill },
  { path: '/areas', exact: true,  name: 'Bills', component: Areas },
  { path: '/areas/add',  name: 'Bill Add', component: AddArea },
  { path: '/areas/edit/:id', name: 'Bill Edit', component: EditArea },
  { path: '/payments', exact: true,  name: 'Bills', component: Payments },
  { path: '/payments/add/:id', exact: true,  name: 'Bill Add', component: AddPayment },
  { path: '/payments/edit/:id', name: 'Bill Edit', component: EditPayment },
  { path: '/gst', exact: true,  name: 'Bills', component: Gst },
  { path: '/gst/add',   name: 'Bill Add', component: AddGst },
  { path: '/gst/edit/:id', name: 'Bill Edit', component: EditGst },
  { path: '/installation', exact: true,  name: 'Bills', component: Installation },
  { path: '/installation/add',   name: 'Bill Add', component: AddInstallation },
  { path: '/installation/edit/:id', name: 'Bill Edit', component: EditInstallation },
];

export default routes;
