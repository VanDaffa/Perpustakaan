import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ sewas, editData, hapusData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Peminjam</th>
          <th>Nama Buku</th>
          <th>Tanggal Pinjam</th>
          <th>Tanggal Kembali</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {sewas.map((peminjam, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{peminjam.peminjam}</td>
              <td>{peminjam.buku}</td>
              <td>{peminjam.pinjam}</td>
              <td>{peminjam.kembali}</td>
              <td>
                <button
                  className="btn btn-warning mr-2"
                  onClick={() => editData(peminjam.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => hapusData(peminjam.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
