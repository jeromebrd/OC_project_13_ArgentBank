const DATABASE_URL = 'http://localhost:3001/api/v1/user/login';

export const loginUser = async (loginData) => {
  try {
    const response = await fetch(DATABASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, token: data.body.token };
    } else {
      return {
        success: false,
        error: 'Email/mdp invalide',
      };
    }
  } catch (e) {
    console.error('Erreur lors de la connexion:', e);
    return { success: false, error: 'Erreur serveur.' };
  }
};
