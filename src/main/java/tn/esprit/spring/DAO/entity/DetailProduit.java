package tn.esprit.spring.DAO.entity;



import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table( name = "detailproduit")
public class DetailProduit implements Serializable {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column(name="idDetailProduit")
	private long idDetailProduit;
	@Temporal(TemporalType.DATE)
	private Date dateDernierModification;
	@Temporal(TemporalType.DATE)
	private Date datecreation;
	@Enumerated(EnumType.STRING)
	private CategorieProduit categorieProduit;

	 @OneToOne(mappedBy="detailproduit")
	 @JsonIgnore
	private Produit produit;

	public DetailProduit() {
	}

	public DetailProduit(long idDetailProduit, Date dateDernierModification, Date datecreation, CategorieProduit categorieProduit, Produit produit) {
		this.idDetailProduit = idDetailProduit;
		this.dateDernierModification = dateDernierModification;
		this.datecreation = datecreation;
		this.categorieProduit = categorieProduit;
		this.produit = produit;
	}


	public long getIdDetailProduit() {
		return idDetailProduit;
	}

	public void setIdDetailProduit(long idDetailProduit) {
		this.idDetailProduit = idDetailProduit;
	}

	public Date getDateDernierModification() {
		return dateDernierModification;
	}

	public void setDateDernierModification(Date dateDernierModification) {
		this.dateDernierModification = dateDernierModification;
	}

	public Date getDatecreation() {
		return datecreation;
	}

	public void setDatecreation(Date datecreation) {
		this.datecreation = datecreation;
	}

	public CategorieProduit getCategorieProduit() {
		return categorieProduit;
	}

	public void setCategorieProduit(CategorieProduit categorieProduit) {
		this.categorieProduit = categorieProduit;
	}

	public Produit getProduit() {
		return produit;
	}

	public void setProduit(Produit produit) {
		this.produit = produit;
	}

	@Override
	public String toString() {
		return "DetailProduit{" +
				"idDetailProduit=" + idDetailProduit +
				", dateDernierModification=" + dateDernierModification +
				", datecreation=" + datecreation +
				", categorieProduit=" + categorieProduit +
				", produit=" + produit +
				'}';
	}
}
