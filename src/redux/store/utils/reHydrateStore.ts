export default function reHydrateStore(): any {
  let userState = { name: '', isLogged: false };
  let modalState = { visible: false, edit: false, del: false };

  if (localStorage.getItem('user')) {
    userState = JSON.parse(localStorage.getItem('user')!);
  }

  if (localStorage.getItem('modal')) {
    modalState = JSON.parse(localStorage.getItem('modal')!);
  }

  return { user: userState, modal: modalState };
}
