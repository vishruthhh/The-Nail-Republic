function Map() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3929.853978910777!2d76.29594037503043!3d9.946104990156563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTYnNDYuMCJOIDc2wrAxNyc1NC43IkU!5e0!3m2!1sen!2sin!4v1786215698375!5m2!1sen!2sin"
        width="50%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location"
        className="rounded"
      ></iframe>
    </div>
  );
}

export default Map;
