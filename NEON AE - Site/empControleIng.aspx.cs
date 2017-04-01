﻿using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.Web.UI;using System.Web.UI.WebControls;using System.Data;using System.Drawing; public partial class empControleIng : System.Web.UI.Page { Criptografia cripto = new Criptografia("NEON"); protected void Page_Load(object sender, EventArgs e) { try { DataView dv = (DataView)sqlControlIng.Select(DataSourceSelectArguments.Empty); DataView dvC2 = (DataView)sqlControlIng2.Select(DataSourceSelectArguments.Empty); if (dv.Table.Rows.Count != 0 && dvC2.Table.Rows.Count != 0) { txtQtdEventos.Text = dv.Table.Rows[0]["qtd_even"].ToString(); if (dvC2.Table.Rows.Count == 1) txtIngDisp.Text = cripto.Decrypt(dvC2.Table.Rows[0]["totaldisp"].ToString()); else { int total = 0; for (int i = 0; i < dvC2.Table.Rows.Count; i++) { int ingDisp = Convert.ToInt32(cripto.Decrypt(dvC2.Table.Rows[i]["totaldisp"].ToString())); total += ingDisp; txtIngDisp.Text = total.ToString(); } } if (dvC2.Table.Rows.Count == 1) txtPrecoIng.Text = cripto.Decrypt(dvC2.Table.Rows[0]["valtotal"].ToString()); else { double total = 0; for (int i = 0; i < dvC2.Table.Rows.Count; i++) { double preco = Convert.ToDouble(cripto.Decrypt(dvC2.Table.Rows[i]["valtotal"].ToString()).Replace('.',',')); total += preco; txtPrecoIng.Text = total.ToString("#0.00"); } } if (dvC2.Table.Rows.Count == 1)txtIngVend.Text = cripto.Decrypt(dvC2.Table.Rows[0]["ingvendido"].ToString()); else { int total = 0; for (int i = 0; i < dvC2.Table.Rows.Count; i++) { int ingVend = Convert.ToInt32(cripto.Decrypt(dvC2.Table.Rows[i]["ingvendido"].ToString())); total += ingVend; txtIngVend.Text = total.ToString(); } } DataView dv2 = (DataView)sqlCarregaImg.Select(DataSourceSelectArguments.Empty); if (dv2.Table.Rows.Count >= 3) { imgEven1.ImageUrl = "~//img//uploaded//"+cripto.Decrypt(dv2.Table.Rows[0]["img"].ToString());imgEven2.ImageUrl = "~//img//uploaded//" + cripto.Decrypt(dv2.Table.Rows[1]["img"].ToString());imgEven3.ImageUrl = "~//img//uploaded//" + cripto.Decrypt(dv2.Table.Rows[2]["img"].ToString()); lblEven1.Text = cripto.Decrypt(dv2.Table.Rows[0]["even"].ToString());lblEven2.Text = cripto.Decrypt(dv2.Table.Rows[1]["even"].ToString());lblEven3.Text = cripto.Decrypt(dv2.Table.Rows[2]["even"].ToString()); } else { if (dv2.Table.Rows.Count == 0) { imgEven1.ImageUrl = "~\\img\\uploaded\\semimagem.jpg";imgEven2.ImageUrl = "~\\img\\uploaded\\semimagem.jpg";imgEven3.ImageUrl = "~\\img\\uploaded\\semimagem.jpg"; lblEven1.Text = string.Empty;lblEven2.Text = string.Empty;lblEven3.Text = string.Empty; } if (dv2.Table.Rows.Count == 1) { imgEven1.ImageUrl = "~//img//uploaded//" + cripto.Decrypt(dv2.Table.Rows[0]["img"].ToString()); lblEven1.Text = cripto.Decrypt(dv2.Table.Rows[0]["even"].ToString()); } if (dv2.Table.Rows.Count == 2) { imgEven1.ImageUrl = "~//img//uploaded//" + cripto.Decrypt(dv2.Table.Rows[0]["img"].ToString());imgEven2.ImageUrl = "~//img//uploaded//" + cripto.Decrypt(dv2.Table.Rows[1]["img"].ToString()); lblEven1.Text = cripto.Decrypt(dv2.Table.Rows[0]["even"].ToString());lblEven2.Text = cripto.Decrypt(dv2.Table.Rows[1]["even"].ToString()); } } } else {txtQtdEventos.Text = "0";txtIngDisp.Text = "0";txtPrecoIng.Text = "0.00";txtIngVend.Text = "0";} } catch { Response.Redirect("Login.aspx"); Email.erro("empControleIng.aspx"); } } }