import DropdownCategory from './DropdownCategory';

const Dropdown = () => {
  return (
    <>
      <a className="nav-link dropdown-toggle border-0 text-white" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorías</a>
      <div className="dropdown-menu position-absolute start-50 translate-middle-x">
        <div className="px-md-4">
          <div className="container d-flex">
            <div className="row container-fluid d-flex justify-content-center">
              <DropdownCategory/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
