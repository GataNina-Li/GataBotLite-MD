// Joan TK - Código actualizado por Joan, 22 de mayo de 2024

// Función principal del bot
let handler = async function (message, { isBotAdmin }) {
    try {
        // Borrado automático de mensajes no visibles en WhatsApp Desktop
        if (message.messageStubType === 68) {
            await clearInvisibleMessage(message);
        }
    } catch (error) {
        console.error("Error en el manejo del mensaje:", error);
    }
}

// Función para borrar mensajes no visibles
async function clearInvisibleMessage(message) {
    let log = {
        key: message.key,
        content: message.msg,
        sender: message.sender
    };
    // Borrar el mensaje no visible en el chat
    await this.modifyChat(message.chat, 'clear', { includeStarred: false });
    // Registrar el mensaje borrado
    await logDeletedMessage(log);
}

// Función para registrar mensajes borrados
async function logDeletedMessage(log) {
    // Implementar el registro de actividad aquí
    // Guardar información como fecha, remitente y contenido del mensaje
}

export default handler;
