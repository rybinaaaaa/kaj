class DBfasade {
  static async getArts(page = 0, limitData = 8) {
    const arts = await fetch(
      `http://127.0.0.1:8080/arts?page=${page}&size=${limitData}`,
    );
    return await arts.json();
  }

  static async getArtsLimit() {
    const count = await fetch(`http://127.0.0.1:8080/arts/count`);
    return count.json();
  }

  static async getArt(id = 1) {
    try {
      const art = await fetch(`http://127.0.0.1:8080/arts/${id}`);
      return await art.json();;
    } catch (e) {
      const art = await fetch(`http://127.0.0.1:8080/arts/1`);
      return await art.json();
    }
  }

  static async sendLead(data) {
    const response = await fetch('http://127.0.0.1:8080/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
}

export default DBfasade;
