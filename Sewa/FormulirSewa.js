import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Formulir = ({
  peminjam,
  buku,
  pinjam,
  kembali,
  handleChange,
  handleSubmit,
  id,
}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="peminjam">
              <Form.Label>Nama Peminjam</Form.Label>
              <Form.Control
                type="text"
                name="peminjam"
                value={peminjam}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="buku">
              <Form.Label>Judul Buku</Form.Label>
              <Form.Control
                type="text"
                name="buku"
                value={buku}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="pinjam">
              <Form.Label>Tanggal Pinjam</Form.Label>
              <Form.Control
                type="date"
                name="pinjam"
                value={pinjam}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="kembali">
              <Form.Label>Tanggal Kembali</Form.Label>
              <Form.Control
                type="date"
                name="kembali"
                value={kembali}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
