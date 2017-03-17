export const fetchOffices = (showAmount) => (
  $.ajax({method: 'GET', url: 'api/offices' ,data: {office: {show_amount: showAmount}}})
);

export const fetchOffice = (id) => (
  $.ajax({method: 'GET', url: `api/offices/${id}`})
);