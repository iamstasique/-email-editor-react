class LocalStorageService {
  currentUserKey: string = 'currentUser';

  setUserToLocalStorage() {
    const userid: string | null = this.getCurrentUserId();
    if (userid) {
      return;
    }

    localStorage.setItem(this.currentUserKey, '1');
  }

  getCurrentUserId(): string | null {
    return localStorage.getItem(this.currentUserKey);
  }
}

export const localStorageService = new LocalStorageService();
