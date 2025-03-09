function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            My Portfolio © {new Date().getFullYear()} - Muhammadnazar Nazarov
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
