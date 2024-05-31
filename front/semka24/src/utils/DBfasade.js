/**
 * Class providing methods to interact with the backend server.
 */
class DBfasade {
  /**
   * Fetches a list of arts from the backend.
   * @param {number} [page=0] - The page number to fetch.
   * @param {number} [limitData=8] - The number of items to fetch per page.
   * @returns {Promise<Object[]>} A promise that resolves to an array of art objects.
   */
  static async getArts(page = 0, limitData = 8) {
    const arts = await fetch(
        `http://127.0.0.1:8080/arts?page=${page}&size=${limitData}`
    );
    return await arts.json();
  }

  /**
   * Fetches the total number of arts available.
   * @returns {Promise<number>} A promise that resolves to the total number of arts.
   */
  static async getArtsLimit() {
    const count = await fetch(`http://127.0.0.1:8080/arts/count`);
    return count.json();
  }

  /**
   * Fetches a specific art by its ID. If the fetch fails, it defaults to fetching the art with ID 1.
   * @param {number} [id=1] - The ID of the art to fetch.
   * @returns {Promise<Object>} A promise that resolves to an art object.
   */
  static async getArt(id = 1) {
    try {
      const art = await fetch(`http://127.0.0.1:8080/arts/${id}`);
      return await art.json();
    } catch (e) {
      const art = await fetch(`http://127.0.0.1:8080/arts/1`);
      return await art.json();
    }
  }

  /**
   * Sends lead data to the backend.
   * @param {Object} data - The lead data to send.
   * @param {string} data.name - The name of the lead.
   * @param {string} data.email - The email of the lead.
   * @returns {Promise<Object>} A promise that resolves to the response from the server.
   */
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
