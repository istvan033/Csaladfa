<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
  </script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Gyerekek</h1>
		<p></p>
		<ul>
			<p>Gyerekek</p>
			<table class="table-auto">
				<thead>
				  <tr>
					<th>Anya</th>
					<th>Apa</th>
					<th>Név</th>
					<th>Születési év</th>
					<th>Halal</th>
					
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<td>{data.gyerek.felmenok.Anya},</td>
					<td>{data.gyerek.felmenok.Apa}</td>
					<td>{data.gyerek.nev}</td>
					<td>{data.gyerek.szuletes}</td>
					<td>{data.gyerek.halal}</td>
					
				</tbody>
			  </table>
		</ul>

		<ul>
			<p>Szülők</p>
			<table class="table-auto">
				<thead>
				  <tr>
					<th>Anya</th>
					<th>Apa</th>
					<th>Név</th>
					<th>Születési év</th>
					<th>Halal</th>
					<th>Gyerek</th>
					
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<td>{data.gyerek.felmenok.Anya},</td>
					<td>{data.gyerek.felmenok.Apa}</td>
					<td>{data.gyerek.felmenok.nev}</td>
					<td>{data.gyerek.felmenok.szuletes}</td>
					<td>{data.gyerek.felmenok.halal}</td>
					<td>{data.gyerek.nev}</td>
					
				</tbody>
			  </table>
		</ul>

		<ul>
			<p>unokák</p>
			<table class="table-auto">
				<thead>
				  <tr>
					
					<th>Anya</th>
					<th>Név</th>
					<th>Születési év</th>
					<th>Halal</th>
					<th>Gyerek</th>
					
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<td>{data.gyerek.nev},</td>
					<td>{data.gyerek.unoka.nev}</td>
					<td>{data.gyerek.unoka.szuletes}</td>
					<td>{data.gyerek.unoka.halal}</td>
					
				</tbody>
			  </table>
		</ul>

	</div>
</div>
