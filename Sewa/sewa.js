import React, { Component } from "react";
import NavbarComponent from "../NavbarComponent";
import Tabel from "./TabelSewa";
import Formulir from "./FormulirSewa";

export default class CRUD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sewas: [],
      peminjam: "",
      buku: "",
      pinjam: "",
      kembali: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        sewas: [
          ...this.state.sewas,
          {
            id: this.state.sewas.length + 1,
            peminjam: this.state.peminjam,
            buku: this.state.buku,
            pinjam: this.state.pinjam,
            kembali: this.state.kembali,
          },
        ],
      });
    } else {
      const peminjamYangSelainDiPilih = this.state.sewas
        .filter((peminjam) => peminjam.id !== this.state.id)
        .map((filterPeminjam) => {
          return filterPeminjam;
        });

      this.setState({
        sewas: [
          ...peminjamYangSelainDiPilih,
          {
            id: this.state.sewas.length + 1,
            peminjam: this.state.peminjam,
            buku: this.state.buku,
            pinjam: this.state.pinjam,
            kembali: this.state.kembali,
          },
        ],
      });
    }

    this.setState({
      peminjam: "",
      buku: "",
      pinjam: "",
      kembali: 0,
      id: "",
    });
  };

  editData = (id) => {
    const peminjamYangDiPilih = this.state.sewas
      .filter((peminjam) => peminjam.id === id)
      .map((filterPeminjam) => {
        return filterPeminjam;
      });

    this.setState({
      peminjam: peminjamYangDiPilih[0].peminjam,
      buku: peminjamYangDiPilih[0].buku,
      pinjam: peminjamYangDiPilih[0].pinjam,
      kembali: peminjamYangDiPilih[0].kembali,
      id: peminjamYangDiPilih[0].id,
    });
  };

  hapusData = (id) => {
    const peminjamBaru = this.state.sewas
      .filter((peminjam) => peminjam.id !== id)
      .map((filterPeminjam) => {
        return filterPeminjam;
      });

    this.setState({
      sewas: peminjamBaru,
    });
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Tabel
            sewas={this.state.sewas}
            editData={this.editData}
            hapusData={this.hapusData}
          />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
